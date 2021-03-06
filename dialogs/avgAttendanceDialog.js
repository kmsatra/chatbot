const { ComponentDialog, NumberPrompt, TextPrompt, ChoiceFactory, WaterfallDialog, Dialog } = require('botbuilder-dialogs');
const { AttachmentLayoutTypes, CardFactory, ActivityTypes } = require('botbuilder');
const TEXT_PROMPT = 'TEXT_PROMPT';
const NUMBER_PROMPT = 'NUMBER_PROMPT';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';
const avgAttd_Dialog = 'avgAttd_Dialog';
const db = require('../db/database');
var avgAttdCard = require('../cards/avgAttendanceCard');
var stuCard = require('../cards/studentCard');
var avgAttdDialogInternalVar = "", dbresult;

class avgAttendanceDialog extends ComponentDialog {
    constructor() {
        super(avgAttd_Dialog);
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

        await db.averageAttendance(0, 'campus').then(async result => {
            dbresult = result.recordset
        }).catch(err => {
            console.log("error in campus data for attendance", err)
        })
        const card = await avgAttdCard.campusweiseAvgAttendance(dbresult)
        await stepContext.context.sendActivity({
            attachments: [CardFactory.adaptiveCard(card)]
        });
        await stepContext.context.sendActivity('Type exit or help to retun to main menu.');
        return Dialog.EndOfTurn;
    }
    async schoolSelectionStep(stepContext) {
        console.log("campusSelected=attendance------------->>>>>>>", stepContext.context.activity.value);

        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        if (stepContext.context.activity.value) {

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
            await stepContext.context.sendActivity('Type exit or help to retun to main menu.');
            return Dialog.EndOfTurn;
        }
        else {
            return await stepContext.endDialog();
        }
    }
    async deptSelectionStep(stepContext) {
        console.log("schoolSelected=attendance------------->>>>>>>", stepContext.context.activity.value);
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        if (stepContext.context.activity.value) {
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
            await stepContext.context.sendActivity('Type exit or help to retun to main menu.');
            return Dialog.EndOfTurn;
        }
        else {
            return await stepContext.endDialog();
        }
    }
    async semSelectionStep(stepContext) {
        // console.log("departmentSelected=attendance------------->>>>>>>", stepContext.context.activity.value.x);

        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        if (stepContext.context.activity.value) {

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
            await stepContext.context.sendActivity('Type exit or help to retun to main menu.');
            return Dialog.EndOfTurn;
        }
        else {
            return await stepContext.endDialog();
        }
    }
    async classSelectionStep(stepContext) {
        console.log("semesterSelected=attendance------------->>>>>>>", stepContext.context.activity.value.x);
        if (stepContext.context.activity.value) {

            await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
            var temp = stepContext.context.activity.value.x.split(',');
            console.log("---------", temp)
            await db.averageAttendance(temp[0], 'classwise').then(async result => {
                dbresult = result.recordset
                // console.log(dbresult)
            }).catch(err => {
                console.log("error in classwise data for attendance", err)
            })
            const card = await avgAttdCard.classwiseAvgAttendance(dbresult, temp[1])
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
        console.log("classSelected=attendance------------->>>>>>>", stepContext.context.activity.value.x);
        if (stepContext.context.activity.value) {

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
            await stepContext.context.sendActivity('Type exit or help to retun to main menu.');
            return Dialog.EndOfTurn;
        }
        else {
            return await stepContext.endDialog();
        }
    }
    async studentDetailStep(stepContext) {
        var attendace;
        console.log("studentSelected=attendance------------->>>>>>>", stepContext.context.activity.value.x);
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        if (stepContext.context.activity.value) {
            var temp = stepContext.context.activity.value.x.split(',')
            // '2018PUSSHBSAX06587'
            await db.studentAttendanceDetail(temp[0]).then(async result => {
                // console.log("=>>>>>>>>",result)
                attendace = result
            }).catch(err => {
                console.log("error in student subjectwise attendance", err)
            })
            var acard = await stuCard.attendanceCard(attendace, 'management', temp[1])
            await stepContext.context.sendActivity({
                attachments: [CardFactory.adaptiveCard(acard)]
            });
            return await stepContext.endDialog()

        }
        else {
            return await stepContext.endDialog();
        }
        // return Dialog.EndOfTurn;
    }
}

module.exports.avgAttendanceDialog = avgAttendanceDialog;
module.exports.avgAttd_Dialog = avgAttd_Dialog;