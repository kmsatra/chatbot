//import files

const { ComponentDialog, NumberPrompt, TextPrompt, ChoiceFactory, WaterfallDialog, Dialog } = require('botbuilder-dialogs');
const { AttachmentLayoutTypes, CardFactory, ActivityTypes } = require('botbuilder');
const { fcl_Dialog, FacultyDialog } = require('./FacultyDialog')
const { avgAttd_Dialog, avgAttendanceDialog } = require('./avgAttendanceDialog')
const { feeDeta_Dialog, feeDetailsDialog } = require('./feeDetailsDialog')
const { MAIN_DIALOG, MainDialog } = require('./mainDialog')

const TEXT_PROMPT = 'TEXT_PROMPT';
const NUMBER_PROMPT = 'NUMBER_PROMPT';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';
const avgMarks_Dialog = 'avgMarks_Dialog';
const db = require('../db/database');
var avgMarksCard = require('../cards/avgMarksCard');
var stuCard = require('../cards/studentCard');
var avgMarksdDialogInternalVar = "", dbresult;
var mgtServiceCard = require('../cards/serviceCard')

// class declaration

class avgMarksDialog extends ComponentDialog {
    constructor() {
        super(avgMarks_Dialog);
        this.addDialog(new TextPrompt(TEXT_PROMPT));
        this.addDialog(new NumberPrompt(NUMBER_PROMPT));
        this.addDialog(new FacultyDialog());
      
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.campusSelectionStep.bind(this),
            this.schoolSelectionStep.bind(this),
            this.deptSelectionStep.bind(this),
            this.semSelectionStep.bind(this),
            this.classSelectionStep.bind(this),
            this.studentSelectionStep.bind(this),
            this.studentDetailStep.bind(this),
            this.tryStep.bind(this),
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }
// management marks waterfall begin step 1 
    async campusSelectionStep(stepContext) {
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        await db.averageMarks(0, 'campus').then(async result => {
            dbresult = result.recordset
        }).catch(err => {
            console.log("error in campus data for Marks", err)
        })
        const card = await avgMarksCard.campusweiseAvgMarks(dbresult)
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
//manamgement marks waterfall step 2
    async schoolSelectionStep(stepContext) {
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        if(stepContext.context.activity.value.result==='Campus Name') {
           var temp = stepContext.context.activity.value.x.split(',');
            await db.averageMarks(temp[0], 'school').then(async result => {
                dbresult = result.recordset
            }).catch(err => {
                console.log("error in school data for Marks", err)
            })
            const card = await avgMarksCard.schoolwiseAvgMarks(dbresult, temp[1])
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
    
//manamgement marks waterfall step 3
    async deptSelectionStep(stepContext) {
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
         if(stepContext.context.activity.value.result==='School Name') {
            var temp = stepContext.context.activity.value.x.split(',');
            await db.averageMarks(temp[0], 'department').then(async result => {
                dbresult = result.recordset
            }).catch(err => {
                console.log("error in department data for Marks", err)
            })
            const card = await avgMarksCard.deptwiseAvgMarks(dbresult, temp[1])
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
    
//manamgement marks waterfall step 4
    async semSelectionStep(stepContext) {
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        if(stepContext.context.activity.value.result==='Dept Name') {
          var temp = stepContext.context.activity.value.x.split(',');
            await db.averageMarks(temp[0], 'semester').then(async result => {
                dbresult = result.recordset
            }).catch(err => {
                console.log("error in semester data for Marks", err)
            })
            const card = await avgMarksCard.semwiseAvgMarks(dbresult, temp[1])
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
    
//manamgement marks waterfall step 5
    async classSelectionStep(stepContext) {
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        if(stepContext.context.activity.value.result==='Class Name') {
           var temp = stepContext.context.activity.value.x.split(',');
            await db.averageMarks(temp[0], 'classwise').then(async result => {
                dbresult = result.recordset
            }).catch(err => {
                console.log("error in classwise data for Marks", err)
            })
            const card = await avgMarksCard.classwiseAvgMarks(dbresult, temp[1])
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
    
//manamgement marks waterfall step 6
    async studentSelectionStep(stepContext) {
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
       if(stepContext.context.activity.value.result==='Sem Name') {
          var temp = stepContext.context.activity.value.x.split(',');
            await db.averageMarks(temp[0], 'studentList').then(async result => {
                dbresult = result.recordset
            }).catch(err => {
                console.log("error in student list for Marks", err)
            })
            const card = await avgMarksCard.sectionwiseAvgMarks(dbresult, temp[1])
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
    
//manamgement marks waterfall step 7
    async studentDetailStep(stepContext) {
        var attendace;
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        if(stepContext.context.activity.value.result==='Student Name') {
          var temp=stepContext.context.activity.value.x.split(',')
            var dbcgpa = []
            var dcgpa
            await db.studentMarksDetail(temp[0]).then(async result => {
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
            dbcgpa.push(s)
            dbcgpa.push(s2)
            const cgpa = { attachments: [], attachmentLayout: AttachmentLayoutTypes.Carousel };
            for (var i = 0; i < dbcgpa.length; i++) {
                var ccard = await stuCard.cgpaCard(dbcgpa[i], dbcgpa.length)
                var cgcard = await CardFactory.adaptiveCard(ccard)
                cgpa.attachments.push(cgcard);
            }
             await stepContext.context.sendActivity(cgpa);
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
    
//manamgement marks waterfall step 8 final step
    async tryStep(stepContext) {
        var res=stepContext.context.activity.value.x;
        try {
            switch(res) {
                case 'Fee Details':
                    return await stepContext.beginDialog('feeDeta_Dialog');
                case 'Average Attendance':
                    await stepContext.beginDialog('avgAttd_Dialog');
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

//export dialog

module.exports.avgMarksDialog = avgMarksDialog;
module.exports.avgMarks_Dialog = avgMarks_Dialog;