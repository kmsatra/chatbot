// import files

const { ComponentDialog, NumberPrompt, TextPrompt, ChoiceFactory, WaterfallDialog, Dialog } = require('botbuilder-dialogs');
const { AttachmentLayoutTypes, CardFactory, ActivityTypes } = require('botbuilder');
const { avgAttd_Dialog, avgAttendanceDialog } = require('./avgAttendanceDialog')
const { avgMarks_Dialog, avgMarksDialog } = require('./avgMarksDialog')
const { MgtDialog, Mgt_Dialog } = require('./MgtDialog')
const { MAIN_DIALOG, MainDialog } = require('./mainDialog')


const TEXT_PROMPT = 'TEXT_PROMPT';
const NUMBER_PROMPT = 'NUMBER_PROMPT';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';
var feeDetaCard = require('../cards/feeDetailsCard');
const feeDeta_Dialog = 'feeDeta_Dialog'
var stuCard = require('../cards/studentCard');
const db = require('../db/database');
var feeDetaDialogInternalVar = "", dbresult;
var mgtServiceCard = require('../cards/serviceCard')


//class decalration

class feeDetailsDialog extends ComponentDialog {
    constructor() {
        super(feeDeta_Dialog);
        this.addDialog(new TextPrompt(TEXT_PROMPT));
        this.addDialog(new NumberPrompt(NUMBER_PROMPT));
        this.addDialog(new avgMarksDialog());
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.campusFeeStep.bind(this),
            this.schoolSelectionStep.bind(this),
            this.deptSelectionStep.bind(this),
            this.semSelectionStep.bind(this),
            this.classSelectionStep.bind(this),
            this.studentSelectionStep.bind(this),
            this.studentDetailStep.bind(this),
            this.tryStep.bind(this)

        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

//Management fee detail waterfall begin step 1
    async campusFeeStep(stepContext) {
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        await db.feeDetail(0, 'campus').then(async result => {
            dbresult = result.recordset
            const card = await feeDetaCard.CampuswisefeedetailCard(dbresult)
        await stepContext.context.sendActivity({
            attachments: [CardFactory.adaptiveCard(card)]
        });
        }).catch(err => {
             console.log("error in school data", err)
        })

// add suggestion card 

        await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
        var mgtSerCard = await mgtServiceCard.mgtServiceCard()
        await stepContext.context.sendActivity({
        attachments: [CardFactory.adaptiveCard(mgtSerCard)]
            });
        return Dialog.EndOfTurn;
    }

//Management fee detail waterfall step 2

    async schoolSelectionStep(stepContext) {
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        if(stepContext.context.activity.value.result==='Campus Name') {
            var temp = stepContext.context.activity.value.x.split(',');
            await db.feeDetail(1, 'school').then(async result => {
                dbresult = result.recordset
            }).catch(err => {
                console.log("error in school data for attendance", err)
            })
            const card = await feeDetaCard.schoolwisefeedetails(dbresult, temp[1])
            await stepContext.context.sendActivity({
                attachments: [CardFactory.adaptiveCard(card)]
            });
// add suggestion card

        await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
        var mgtSerCard = await mgtServiceCard.mgtServiceCard()
        await stepContext.context.sendActivity({
        attachments: [CardFactory.adaptiveCard(mgtSerCard)]
            });
        return Dialog.EndOfTurn;
        }
        else {
           return await stepContext.next();
        }
    }

//Management fee detail waterfall step 3

    async deptSelectionStep(stepContext) {
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        if(stepContext.context.activity.value.result==='School Name') {
            var temp = stepContext.context.activity.value.x.split(',');
            await db.feeDetail(1, 'department').then(async result => {
                dbresult = result.recordset
            }).catch(err => {
                console.log("error in department data for attendance", err)
            })
            const card = await feeDetaCard.deptwisefeedetails(dbresult, temp[1])
            await stepContext.context.sendActivity({
                attachments: [CardFactory.adaptiveCard(card)]
            });
// add suggestion card

        await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
        var mgtSerCard = await mgtServiceCard.mgtServiceCard()
        await stepContext.context.sendActivity({
        attachments: [CardFactory.adaptiveCard(mgtSerCard)]
            });
          return Dialog.EndOfTurn;
        }
        else {
            return await stepContext.next();
            }
    }

//Management fee detail waterfall step 4

    async semSelectionStep(stepContext) {
       await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
       if(stepContext.context.activity.value.result==='Dept Name') {
            global.deptname = stepContext.context.activity.value.x
            var temp = stepContext.context.activity.value.x.split(',');
            await db.feeDetail(1, 'semester').then(async result => {
                dbresult = result.recordset
            }).catch(err => {
                console.log("error in semester data for attendance", err)
            })
            const card = await feeDetaCard.semwisefeedetails(dbresult, temp[1])
            await stepContext.context.sendActivity({
                attachments: [CardFactory.adaptiveCard(card)]
            });
 // add suggestion card

        await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
        var mgtSerCard = await mgtServiceCard.mgtServiceCard()
        await stepContext.context.sendActivity({
        attachments: [CardFactory.adaptiveCard(mgtSerCard)]
            });
            return Dialog.EndOfTurn;
        }
        else {
            return await stepContext.next();
             }
    }
//Management fee detail waterfall step 5

    async classSelectionStep(stepContext) {
       if(stepContext.context.activity.value.result==='Sem Name') {
             await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
             var temp = stepContext.context.activity.value.x.split(',');
             await db.feeDetail(1, 'classwise').then(async result => {
                 dbresult = result.recordset
            }).catch(err => {
                console.log("error in classwise data for Fee detail", err)
            })
            const card = await feeDetaCard.classwisefeedetails(dbresult, temp[1])
            await stepContext.context.sendActivity({
                attachments: [CardFactory.adaptiveCard(card)]
            });
// add suggestion card

        await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
        var mgtSerCard = await mgtServiceCard.mgtServiceCard()
        await stepContext.context.sendActivity({
        attachments: [CardFactory.adaptiveCard(mgtSerCard)]
            });
            return Dialog.EndOfTurn;
        }
        else {
        return await stepContext.next();
             }
    }
//Management fee detail waterfall step 6
  
    async studentSelectionStep(stepContext) {
      if(stepContext.context.activity.value.result==='Class Name') {
            await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
            var temp = stepContext.context.activity.value.x.split(',');
            await db.feeDetail(1, 'studentList').then(async result => {
                dbresult = result.recordset
            }).catch(err => {
                console.log("error in student list for attendance", err)
            })
            const card = await feeDetaCard.sectionwisefeedetails(dbresult, temp[1])
            await stepContext.context.sendActivity({
                attachments: [CardFactory.adaptiveCard(card)]
            });
// add suggestion card

        await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
        var mgtSerCard = await mgtServiceCard.mgtServiceCard()
        await stepContext.context.sendActivity({
        attachments: [CardFactory.adaptiveCard(mgtSerCard)]
            });
            return Dialog.EndOfTurn;
        }
        else {
            return await stepContext.next();
             }
    }
//Management fee detail waterfall step 7

    async studentDetailStep(stepContext) {
      if(stepContext.context.activity.value.result==='Student Name') {
            await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
            var fees;
                await db.studenFeesDetail('2018PUSSHBSAX06587').then(async result => {
                    fees = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    var card = await feeDetaCard.Studentfeedetails(fees)
                    await stepContext.context.sendActivity({
                     attachments: [CardFactory.adaptiveCard(card)]
                    });
//add suggestion card

        await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
        var mgtSerCard = await mgtServiceCard.mgtServiceCard()
        await stepContext.context.sendActivity({
        attachments: [CardFactory.adaptiveCard(mgtSerCard)]
            });
        return Dialog.EndOfTurn;
        }
        else {
         return await stepContext.next();
        }
         return Dialog.EndOfTurn;
    }
//Management fee detail waterfall step 8 final step
    async tryStep(stepContext) {
        var res=stepContext.context.activity.value.x;
        try {
            switch(res) {
                case 'Fee Details':
                    return await stepContext.beginDialog(feeDeta_Dialog);
                case 'Average Attendance':
                    await stepContext.beginDialog('avgAttd_Dialog');
                    return Dialog.EndOfTurn;
                case 'Average Marks':
                    await stepContext.beginDialog('avgMarks_Dialog');
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

// exports dialog

module.exports.feeDetailsDialog = feeDetailsDialog;
module.exports.feeDeta_Dialog = feeDeta_Dialog;
