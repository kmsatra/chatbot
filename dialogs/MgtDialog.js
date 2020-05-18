//import the files

const { ComponentDialog, NumberPrompt, TextPrompt, ChoiceFactory, WaterfallDialog, Dialog } = require('botbuilder-dialogs');
const { AttachmentLayoutTypes, CardFactory, ActivityTypes } = require('botbuilder');
const { avgAttd_Dialog, avgAttendanceDialog } = require('./avgAttendanceDialog')
const { feeDeta_Dialog, feeDetailsDialog } = require('./feeDetailsDialog')
const { avgMarks_Dialog, avgMarksDialog } = require('./avgMarksDialog')
const { MAIN_DIALOG, MainDialog } = require('./mainDialog')

const TEXT_PROMPT = 'TEXT_PROMPT';
const NUMBER_PROMPT = 'NUMBER_PROMPT';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';
const Mgt_Dialog = 'Mgt_Dialog';
var mgtServiceCard = require('../cards/serviceCard')

var mgtcard = require('../cards/Mgtcard')
const db = require('../db/database')

//class declaration
class MgtDialog extends ComponentDialog {
    constructor() {
        super(Mgt_Dialog);
        this.addDialog(new TextPrompt(TEXT_PROMPT));
        this.addDialog(new NumberPrompt(NUMBER_PROMPT));
        this.addDialog(new avgAttendanceDialog());
        this.addDialog(new feeDetailsDialog());
        this.addDialog(new avgMarksDialog());
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.buttonresponse.bind(this),
            this.last.bind(this),
            this.options.bind(this),
            this.tryOut.bind(this),
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

//management persona waterfall start step 1

    async buttonresponse(stepContext) {
        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
        if (stepContext.context.activity.value === "" || stepContext.context.activity.value === undefined) {
            var data
            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
            await db.managementFeesDetail('main').then(async result => {
                data = result
            }).catch(err => {
                console.log("hereeeeeeee", err)
            })
            var mcard = await mgtcard.mgtCard(data)
            await stepContext.context.sendActivity({
                attachments: [CardFactory.adaptiveCard(mcard)]
            });
        }
        else {
            return await stepContext.next();
        }
        return Dialog.EndOfTurn;
    }

//management persona waterfall step 2

    async last(stepContext) {
        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
        var dbcgpa = []
        var pendingdb
        await db.managementFeesDetail('details').then(async result => {
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
        try {
            if (stepContext.context.activity.value && stepContext.context.activity.value.x ) {
                var res;
                res = stepContext.context.activity.value.x
            }
            switch (res) {      
                case 'Fees Details':
                    await stepContext.beginDialog(feeDeta_Dialog);
                    return Dialog.EndOfTurn;
                case 'Average Attendance':
                    await stepContext.beginDialog(avgAttd_Dialog);
                    return Dialog.EndOfTurn;
                case 'Average Marks':
                    await stepContext.beginDialog(avgMarks_Dialog);
                    return Dialog.EndOfTurn;
            }
        } catch (Exception) {
            console.log("error")
        }
    }
//management persona waterfall step 3

    async options(stepContext) {
        console.log("step3",stepContext)
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
            var mgtSerCard = await mgtServiceCard.mgtServiceCard()
            await stepContext.context.sendActivity({
                attachments: [CardFactory.adaptiveCard(mgtSerCard)]
            });
         return Dialog.EndOfTurn;
  }

  //management persona waterfall step 4 final step
  
    async tryOut(stepContext) {
            var res=stepContext.context.activity.value.x;
        try {
            switch(res) {
                case 'Fee Details':
                    await stepContext.beginDialog(feeDeta_Dialog);
                    return Dialog.EndOfTurn;
                case 'Average Attendance':
                    await stepContext.beginDialog(avgAttd_Dialog);
                    return Dialog.EndOfTurn;
                case 'Average Marks':
                    await stepContext.beginDialog(avgMarks_Dialog);
                    return Dialog.EndOfTurn;
                case 'Switch Role':
                    return await stepContext.beginDialog('MAIN_DIALOG');
         }
        } catch (Exception) {
            console.log("error")
        }
     return Dialog.EndOfTurn;
    }
}

//export the dialog

module.exports.MgtDialog = MgtDialog;
module.exports.Mgt_Dialog = Mgt_Dialog;