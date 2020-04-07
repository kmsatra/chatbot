const { ComponentDialog, NumberPrompt, TextPrompt, ChoiceFactory, WaterfallDialog, Dialog } = require('botbuilder-dialogs');
const { AttachmentLayoutTypes, CardFactory, ActivityTypes } = require('botbuilder');
// const database = require('../db/database')
const TEXT_PROMPT = 'TEXT_PROMPT';
const NUMBER_PROMPT = 'NUMBER_PROMPT';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';
const Par_Dialog = 'Par_Dialog';
const db = require('../db/database')
var parcard = require('../cards/ParentCard')
var parDialogInternalVar = "";
// var status = ['XXXX', 'XXX', 'XX', 'X']
class ParentDialog extends ComponentDialog {
    constructor() {
        super(Par_Dialog);
        this.addDialog(new TextPrompt(TEXT_PROMPT));
        this.addDialog(new NumberPrompt(NUMBER_PROMPT));
        // this.addDialog(new ReviewSelectionDialog());
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.stubutton.bind(this),
            this.buttonresponse.bind(this),
            this.options.bind(this),
            this.tryOut.bind(this)
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }


    async stubutton(stepContext) {
        // console.log("::::::::::::::::::::::::::::::::", parDialogInternalVar)
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });

        if (parDialogInternalVar === "" || parDialogInternalVar === null) {
            var data
            await db.studentMainDetail('2018PUSSHBSAX06587', 'parent').then(async result => {
                // console.log("=>>>>>>>>",result)
                data = result
            }).catch(err => {
                console.log("hereeeeeeee", err)
            })
            // console.log("data", data)
            // await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Fees Deposited', 'Fees Pending']));
            var pcard = await parcard.parCard(data)
            await stepContext.context.sendActivity({
                attachments: [CardFactory.adaptiveCard(pcard)]
            });
            return Dialog.EndOfTurn;
        }
        else {
            // console.log(" m here");
            // stepContext.context.activity.value.x = parDialogInternalVar
            return await stepContext.next();
        }
    }
    async buttonresponse(stepContext) {
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });

        try {
            if (stepContext.context.activity.value && stepContext.context.activity.value.x) {
                parDialogInternalVar = stepContext.context.activity.value.x
            }
            switch (parDialogInternalVar) {
                case 'Attendance':
                    var attendace;
                    await db.studentAttendanceDetail('2018PUSSHBSAX06587').then(async result => {
                        // console.log("=>>>>>>>>",result)
                        attendace = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    // console.log("=====>>>>", attendace)
                    var acard = await parcard.attendanceCard(attendace)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(acard)]
                    });
                    // return Dialog.EndOfTurn;
                    // return await stepContext.endDialog()
                    return await stepContext.next();


                case 'CGPA':
                    var dbcgpa = []
                    var dcgpa
                    await db.studentMarksDetail('2018PUSSHBSAX06587').then(async result => {
                        // console.log("=>>>>>>>>",result)
                        dcgpa = result

                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    var s = [];
                    var s2 = [];
                    dcgpa.recordset.forEach(element => {

                        if (element.semester === 'I') {
                            s.push(element)
                        }
                        else if (element.semester === 'II') {
                            s2.push(element)
                        }
                    });
                    // console.log("ssssss",s, s2)
                    dbcgpa.push(s)
                    dbcgpa.push(s2)
                    // console.log("=====>>>>", dbcgpa[0])
                    const cgpa = { attachments: [], attachmentLayout: AttachmentLayoutTypes.Carousel };
                    for (var i = 0; i < 2; i++) {
                        var ccard = await parcard.cgpaCard(dbcgpa[i], dbcgpa.length)
                        var cgcard = await CardFactory.adaptiveCard(ccard)
                        cgpa.attachments.push(cgcard);

                    }
                    await stepContext.context.sendActivity(cgpa);
                    // return Dialog.EndOfTurn;
                    // return await stepContext.endDialog()
                    return await stepContext.next();


                case 'Pending Fees':
                    var fees;
                    await db.studenFeesDetail('2018PUSSHBSAX06587').then(async result => {
                        // console.log("=>>>>>>>>",result)
                        fees = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    // console.log("=====>>>>", fees)
                    var pfcard = await parcard.pfCard(fees)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(pfcard)]
                    });
                    // return Dialog.EndOfTurn;
                    // return await stepContext.endDialog()
                    return await stepContext.next();
            }
        } catch (Exception) {
            console.log("error 3", Exception)
        }
    }
    async options(stepContext) {
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });

        // console.log("---------->>>>>> reached here")
        await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Attendance Details', 'Marks Details', 'Fees Details', 'Switch Role']));
        return Dialog.EndOfTurn;
    }

    async tryOut(stepContext) {
        // console.log("----->>", stepContext.result)
        try {
            switch (stepContext.result) {
                case 'Attendance Details':
                    // console.log("====================Attendance")
                    // await stepContext.context.sendActivity("pending");
                    parDialogInternalVar = "Attendance"
                    return await stepContext.beginDialog(WATERFALL_DIALOG)
                // return Dialog.EndOfTurn;
                // return await stepContext.endDialog()

                case 'Marks Details':
                    // console.log("====================CGPA")
                    // await stepContext.context.sendActivity("deposit");
                    parDialogInternalVar = "CGPA"
                    return await stepContext.beginDialog(WATERFALL_DIALOG)
                // return Dialog.EndOfTurn
                // return await stepContext.endDialog()
                case 'Fees Details':
                    // console.log("====================Pending Fees")
                    // await stepContext.context.sendActivity("deposit");
                    parDialogInternalVar = "Pending Fees"
                    return await stepContext.beginDialog(WATERFALL_DIALOG)
                // return Dialog.EndOfTurn
                // return await stepContext.endDialog()
                case 'Switch Role':
                    // console.log("exit-------------------")
                    parDialogInternalVar = ""
                    return await stepContext.endDialog();

            }
        } catch (Exception) {
            console.log("error")
        }
    }

}


module.exports.ParentDialog = ParentDialog;
module.exports.Par_Dialog = Par_Dialog;