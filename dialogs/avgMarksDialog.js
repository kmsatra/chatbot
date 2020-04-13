const { ComponentDialog, NumberPrompt, TextPrompt, ChoiceFactory, WaterfallDialog, Dialog } = require('botbuilder-dialogs');
const { AttachmentLayoutTypes, CardFactory, ActivityTypes } = require('botbuilder');
const TEXT_PROMPT = 'TEXT_PROMPT';
const NUMBER_PROMPT = 'NUMBER_PROMPT';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';
const avgMarks_Dialog = 'avgMarks_Dialog';
const db = require('../db/database');
var avgMarksCard = require('../cards/avgMarksCard');
var stuCard = require('../cards/studentCard');
var avgMarksdDialogInternalVar = "", dbresult;

class avgMarksDialog extends ComponentDialog {
    constructor() {
        super(avgMarks_Dialog);
        this.addDialog(new TextPrompt(TEXT_PROMPT));
        this.addDialog(new NumberPrompt(NUMBER_PROMPT));
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            //this.mgtbuttons.bind(this),
            this.campusSelectionStep.bind(this),
            this.schoolSelectionStep.bind(this),
            this.deptSelectionStep.bind(this),
            this.semSelectionStep.bind(this),
            this.classSelectionStep.bind(this),
            this.studentSelectionStep.bind(this),
            this.studentDetailStep.bind(this)
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    async campusSelectionStep(stepContext) {
        // var cssCard = await ;
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
        await stepContext.context.sendActivity('Type exit or help to retun to main menu.');
        return Dialog.EndOfTurn;
    }
    async schoolSelectionStep(stepContext) {
        // console.log("campusSelected=Marks------------->>>>>>>", stepContext.context.activity.value);
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        if (stepContext.context.activity.value) {

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
            await stepContext.context.sendActivity('Type exit or help to retun to main menu.');
            return Dialog.EndOfTurn;
        }
        else {
            return await stepContext.endDialog();
        }
    }
    async deptSelectionStep(stepContext) {
        // console.log("schoolSelected=Marks------------->>>>>>>", stepContext.context.activity.value);
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        if (stepContext.context.activity.value) {

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
            await stepContext.context.sendActivity('Type exit or help to retun to main menu.');
            return Dialog.EndOfTurn;
        }
        else {
            return await stepContext.endDialog();
        }
    }
    async semSelectionStep(stepContext) {
        // console.log("departmentSelected=Marks------------->>>>>>>", stepContext.context.activity.value.x);
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        if (stepContext.context.activity.value) {

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
            await stepContext.context.sendActivity('Type exit or help to retun to main menu.');
            return Dialog.EndOfTurn;
        }
        else {
            return await stepContext.endDialog();
        }
    }
    async classSelectionStep(stepContext) {
        // console.log("semesterSelected=Marks------------->>>>>>>", stepContext.context.activity.value.x);
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        if (stepContext.context.activity.value) {

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
            await stepContext.context.sendActivity('Type exit or help to retun to main menu.');
            return Dialog.EndOfTurn;
        }
        else {
            return await stepContext.endDialog();
        }
    }
    async studentSelectionStep(stepContext) {
        // console.log("classSelected=Marks------------->>>>>>>", stepContext.context.activity.value.x);
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        if (stepContext.context.activity.value) {

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
            await stepContext.context.sendActivity('Type exit or help to retun to main menu.');
            return Dialog.EndOfTurn;
        }
        else {
            return await stepContext.endDialog();
        }
    }
    async studentDetailStep(stepContext) {
        var attendace;
        console.log("studentSelected=Marks------------->>>>>>>", stepContext.context.activity.value.x);
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });

        if (stepContext.context.activity.value) {
            var temp=stepContext.context.activity.value.x.split(',')
            // '2018PUSSHBSAX06587'
            var dbcgpa = []
            var dcgpa
            await db.studentMarksDetail(temp[0]).then(async result => {
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
             console.log("=====>>>>")
            const cgpa = { attachments: [], attachmentLayout: AttachmentLayoutTypes.Carousel };
            for (var i = 0; i < dbcgpa.length; i++) {
                var ccard = await stuCard.cgpaCard(dbcgpa[i], dbcgpa.length)
                var cgcard = await CardFactory.adaptiveCard(ccard)
                cgpa.attachments.push(cgcard);
            }
            await stepContext.context.sendActivity(cgpa);
            return await stepContext.endDialog()
            // return Dialog.EndOfTurn;

        }
        else {
            return await stepContext.endDialog();
        }
    }
}

module.exports.avgMarksDialog = avgMarksDialog;
module.exports.avgMarks_Dialog = avgMarks_Dialog;