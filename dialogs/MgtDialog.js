const { ComponentDialog, NumberPrompt, TextPrompt, ChoiceFactory, WaterfallDialog, Dialog } = require('botbuilder-dialogs');
const { AttachmentLayoutTypes, CardFactory, ActivityTypes } = require('botbuilder');
const { avgAttd_Dialog, avgAttendanceDialog } = require('./avgAttendanceDialog')
const { avgMarks_Dialog, avgMarksDialog } = require('./avgMarksDialog')
const TEXT_PROMPT = 'TEXT_PROMPT';
const NUMBER_PROMPT = 'NUMBER_PROMPT';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';
const Mgt_Dialog = 'Mgt_Dialog';
var mgtcard = require('../cards/Mgtcard')
const db = require('../db/database')
var mgtDialogInternalVar = "";
class MgtDialog extends ComponentDialog {
    constructor() {
        super(Mgt_Dialog);
        this.addDialog(new TextPrompt(TEXT_PROMPT));
        this.addDialog(new NumberPrompt(NUMBER_PROMPT));
        this.addDialog(new avgAttendanceDialog());
        this.addDialog(new avgMarksDialog());
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            //this.mgtbuttons.bind(this),
            this.buttonresponse.bind(this),
            this.last.bind(this),
            this.options.bind(this),
            this.tryOut.bind(this)
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }


    async buttonresponse(stepContext) {
        await stepContext.context.sendActivity({type: ActivityTypes.Typing});

        // console.log("::::::::::::::::::::::::::::::::", mgtDialogInternalVar)
        if (mgtDialogInternalVar === "" || mgtDialogInternalVar === null) {
            var data
            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
            await db.managementFeesDetail('main').then(async result => {
                // console.log("=>>>>>>>>",result)
                data = result
            }).catch(err => {
                console.log("hereeeeeeee", err)
            })

            var mcard = await mgtcard.mgtCard(data)
            await stepContext.context.sendActivity({
                attachments: [CardFactory.adaptiveCard(mcard)]
            });
            return Dialog.EndOfTurn;
        }
        else {
            console.log(" m here");
            // stepContext.context.activity.value.x = mgtDialogInternalVar
            return await stepContext.next();
        }

        // }
    }

    async last(stepContext) {
        await stepContext.context.sendActivity({type: ActivityTypes.Typing});

        var dbcgpa = []
        var pendingdb
        await db.managementFeesDetail('details').then(async result => {
            // console.log("=>>>>>>>>",result)
            pendingdb = result
        }).catch(err => {
            console.log("hereeeeeeee", err)
        })
        let s1 = [];
        let s2 = [];
        let s3 = [];
        let s4 = [];
        let s5 = [];
        let s6 = [];
        let s7 = [];
        let s8 = [];
        pendingdb.recordset.forEach(element => {

            if (element.semester === 'I') {
                s1.push(element)
            }
            else if (element.semester === 'II') {
                s2.push(element)
            }
            else if (element.semester === 'III') {
                s3.push(element)
            }
            else if (element.semester === 'IV') {
                s4.push(element)
            }
            else if (element.semester === 'V') {
                s5.push(element)
            }
            else if (element.semester === 'VI') {
                s6.push(element)
            }
            else if (element.semester === 'VII') {
                s7.push(element)
            }
            else if (element.semester === 'VIII') {
                s8.push(element)
            }
        });
        dbcgpa.push(s1)
        dbcgpa.push(s2)
        dbcgpa.push(s3)
        // dbcgpa.push(s4)
        // dbcgpa.push(s5)
        // dbcgpa.push(s6)
        // dbcgpa.push(s7)
        // dbcgpa.push(s8)
        // console.log("data", dbcgpa, dbcgpa.length)
        // console.log("data", pendingdb)
        // console.log("=>>>>>>>>>>>>>>>", stepContext.context.activity.value.x)
        const pending = { attachments: [], attachmentLayout: AttachmentLayoutTypes.Carousel };
        for (var i = 0; i < dbcgpa.length; i++) {
            let fcard = await mgtcard.PendingCard(dbcgpa[i])
            var dcard = CardFactory.adaptiveCard(fcard)
            pending.attachments.push(dcard);

        }
        const deposit = { attachments: [], attachmentLayout: AttachmentLayoutTypes.Carousel };
        for (var i = 0; i < dbcgpa.length; i++) {
            let dcard = await mgtcard.DepositCard(dbcgpa[i])
            var dccard = CardFactory.adaptiveCard(dcard)
            deposit.attachments.push(dccard);

        }
        try {
            if (stepContext.context.activity.value && stepContext.context.activity.value.x) {
                mgtDialogInternalVar = stepContext.context.activity.value.x
            }
            switch (mgtDialogInternalVar) {
                case 'Pending':
                    await stepContext.context.sendActivity(pending);
                    // return Dialog.EndOfTurn;
                    return await stepContext.next();
                // return await stepContext.endDialog()

                case 'Deposited':
                    await stepContext.context.sendActivity(deposit);
                    // return Dialog.EndOfTurn;
                    return await stepContext.next();
                // return await stepContext.endDialog()
                case 'avgAttendance':
                    console.log(mgtDialogInternalVar);
                    await stepContext.beginDialog(avgAttd_Dialog);
                    return Dialog.EndOfTurn;
                case 'avgMarks':
                    console.log(mgtDialogInternalVar);
                    await stepContext.beginDialog(avgMarks_Dialog);
                    return Dialog.EndOfTurn;

            }
        } catch (Exception) {
            console.log("error")
        }
    }

    async options(stepContext) {
        await stepContext.context.sendActivity({type: ActivityTypes.Typing});

        console.log("---------->>>>>> reached here")
        await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Pending Fees Details', 'Deposited Fees Details',
            'Average Attendance', 'Average Marks', 'Switch Role']));
        return Dialog.EndOfTurn;
    }

    async tryOut(stepContext) {
        console.log("----->>", stepContext.result)
        try {
            switch (stepContext.result) {
                case 'Pending Fees Details':
                    // console.log("====================pending")
                    // await stepContext.context.sendActivity("pending");
                    mgtDialogInternalVar = "Pending"
                    return await stepContext.beginDialog(WATERFALL_DIALOG)
                // return Dialog.EndOfTurn;
                // return await stepContext.endDialog()

                case 'Deposited Fees Details':
                    // console.log("====================deposited")
                    // await stepContext.context.sendActivity("deposit");
                    mgtDialogInternalVar = "Deposited"
                    return await stepContext.beginDialog(WATERFALL_DIALOG)
                // return Dialog.EndOfTurn
                // return await stepContext.endDialog()
                case 'Average Attendance':
                    mgtDialogInternalVar = "avgAttendance"
                    return await stepContext.beginDialog(WATERFALL_DIALOG)
                case 'Average Marks':
                    mgtDialogInternalVar = "avgMarks"
                    return await stepContext.beginDialog(WATERFALL_DIALOG)
                case 'Switch Role':
                    mgtDialogInternalVar = ""
                    return await stepContext.endDialog();

            }
        } catch (Exception) {
            console.log("error")
        }
    }
}



module.exports.MgtDialog = MgtDialog;
module.exports.Mgt_Dialog = Mgt_Dialog;