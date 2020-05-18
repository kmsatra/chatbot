//import files
const { ComponentDialog, NumberPrompt, TextPrompt, ChoiceFactory, WaterfallDialog, Dialog } = require('botbuilder-dialogs');
const { AttachmentLayoutTypes, CardFactory, ActivityTypes } = require('botbuilder');
const { feeDeta_Dialog, feeDetailsDialog } = require('./feeDetailsDialog')
const { avgMarks_Dialog, avgMarksDialog } = require('./avgMarksDialog')
const { MAIN_DIALOG, MainDialog } = require('./mainDialog')


const TEXT_PROMPT = 'TEXT_PROMPT';
const NUMBER_PROMPT = 'NUMBER_PROMPT';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';
const avgAttd_Dialog = 'avgAttd_Dialog';
const db = require('../db/database');
var avgAttdCard = require('../cards/avgAttendanceCard');
var stuCard = require('../cards/studentCard');
var avgAttdDialogInternalVar = "", dbresult;
var mgtServiceCard = require('../cards/serviceCard')

//class declaration
class avgAttendanceDialog extends ComponentDialog {
    constructor() {
        super(avgAttd_Dialog);
        this.addDialog(new TextPrompt(TEXT_PROMPT));
        this.addDialog(new NumberPrompt(NUMBER_PROMPT));
        this.addDialog(new feeDetailsDialog());
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            //this.mgtbuttons.bind(this),
            this.campusSelectionStep.bind(this),
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
//Management attendence waterfall begin step 1
    async campusSelectionStep(stepContext) {
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        await db.averageAttendance(0, 'campus').then(async result => {
            dbresult = result.recordset
        }).catch(err => {
            console.log("error in campus data for attendance", err)
        })
        const card = await avgAttdCard.campusweiseAvgAttendance(dbresult)
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
//Management attendence waterfall step 2
    async schoolSelectionStep(stepContext) {
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
       if(stepContext.context.activity.value.result==='Campus Name') {
           var temp = stepContext.context.activity.value.x.split(',');
            await db.averageAttendance(temp[0], 'school').then(async result => {
                dbresult = result.recordset
            }).catch(err => {
                console.log("error in school data for attendance", err)
            })
            const card = await avgAttdCard.schoolwiseAvgAttendance(dbresult, temp[1])
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
    
//Management attendence waterfall step 3
    async deptSelectionStep(stepContext) {
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        if(stepContext.context.activity.value.result==='School Name') {
            var temp = stepContext.context.activity.value.x.split(',');
            await db.averageAttendance(temp[0], 'department').then(async result => {
                dbresult = result.recordset
            }).catch(err => {
                console.log("error in department data for attendance", err)
            })
        const card = await avgAttdCard.deptwiseAvgAttendance(dbresult, temp[1])
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
    }

//Management attendence waterfall step 4

    async semSelectionStep(stepContext) {
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
      if(stepContext.context.activity.value.result==='Dept Name') {
            var temp = stepContext.context.activity.value.x.split(',');
            await db.averageAttendance(temp[0], 'semester').then(async result => {
                dbresult = result.recordset
            }).catch(err => {
                console.log("error in semester data for attendance", err)
            })
            const card = await avgAttdCard.semwiseAvgAttendance(dbresult, temp[1])
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
    }

//Management attendence waterfall step 5
    async classSelectionStep(stepContext) {
      if(stepContext.context.activity.value.result==='Sem Name') {
            await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
            var temp = stepContext.context.activity.value.x.split(',');
            await db.averageAttendance(temp[0], 'classwise').then(async result => {
                dbresult = result.recordset
            }).catch(err => {
                console.log("error in classwise data for attendance", err)
            })
            const card = await avgAttdCard.classwiseAvgAttendance(dbresult, temp[1])
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
    }

//Management attendence waterfall step 6
    async studentSelectionStep(stepContext) {
       if(stepContext.context.activity.value.result==='Class Name') {
             await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
            var temp = stepContext.context.activity.value.x.split(',');
            await db.averageAttendance(temp[0], 'studentList').then(async result => {
                dbresult = result.recordset
            }).catch(err => {
                console.log("error in student list for attendance", err)
            })
            const card = await avgAttdCard.sectionwiseAvgAttendance(dbresult, temp[1])
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
    }

//Management attendence waterfall step 7
    async studentDetailStep(stepContext) {
        var attendace;
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        if(stepContext.context.activity.value.result==='Student Name') {
            var temp = stepContext.context.activity.value.x.split(',')
            await db.studentAttendanceDetail(temp[0]).then(async result => {
                attendace = result
            }).catch(err => {
                console.log("error in student subjectwise attendance", err)
            })
            var acard = await stuCard.attendanceCard(attendace, 'management', temp[1])
            await stepContext.context.sendActivity({
                attachments: [CardFactory.adaptiveCard(acard)]
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
    
//Management attendence waterfall step 8 final step
    async tryStep(stepContext) {
        var res=stepContext.context.activity.value.x;
        try {
            switch(res) {
                case 'Fee Details':
                    return await stepContext.beginDialog('feeDeta_Dialog');
                case 'Average Attendance':
                    await stepContext.beginDialog(avgAttd_Dialog);
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

 // export dialog
module.exports.avgAttendanceDialog = avgAttendanceDialog;
module.exports.avgAttd_Dialog = avgAttd_Dialog;