const { ComponentDialog, NumberPrompt, TextPrompt, ChoiceFactory, WaterfallDialog, Dialog } = require('botbuilder-dialogs');
const { AttachmentLayoutTypes, CardFactory, ActivityTypes } = require('botbuilder');
const TEXT_PROMPT = 'TEXT_PROMPT';
const NUMBER_PROMPT = 'NUMBER_PROMPT';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';
var feeDetaCard = require('../cards/feeDetailsCard');
const feeDeta_Dialog = 'feeDeta_Dialog'
var stuCard = require('../cards/studentCard');
const db = require('../db/database');
var feeDetaDialogInternalVar = "", dbresult;

class feeDetailsDialog extends ComponentDialog {
    constructor() {
        super(feeDeta_Dialog);
        this.addDialog(new TextPrompt(TEXT_PROMPT));
        this.addDialog(new NumberPrompt(NUMBER_PROMPT));
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            //this.mgtbuttons.bind(this),
            this.campusFeeStep.bind(this),
             this.schoolSelectionStep.bind(this),
            this.deptSelectionStep.bind(this),
             this.semSelectionStep.bind(this),
             this.classSelectionStep.bind(this),
            this.studentSelectionStep.bind(this),
            this.studentDetailStep.bind(this)
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    async campusFeeStep(stepContext) {
        console.log("------------------------>hello 1")
        // var cssCard = await ;
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        
        await db.feeDetail(0, 'campus').then(async result => {
            dbresult = result.recordset
        console.log(dbresult)
            const card = await feeDetaCard.CampuswisefeedetailCard(dbresult)
        
        console.log("this card hey")
        await stepContext.context.sendActivity({
            attachments: [CardFactory.adaptiveCard(card)]
        });
       
        }).catch(err => {
            console.log("error in campus data for fee ", err)
        })
   
        await stepContext.context.sendActivity('Type exit or help to retun to main menu.');
        return Dialog.EndOfTurn;
    }
    async schoolSelectionStep(stepContext) {
        console.log("campusSelected=attendance------------->>>>>>>", stepContext.context.activity.value);

        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        if (stepContext.context.activity.value) {

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
            await db.feeDetail(1, 'department').then(async result => {
                dbresult = result.recordset
            }).catch(err => {
                console.log("error in department data for attendance", err)
            })
            const card = await feeDetaCard.deptwisefeedetails(dbresult, temp[1])
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
        console.log("departmentSelected=attendance------------->>>>>>>", stepContext.context.activity.value.x);

        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        if (stepContext.context.activity.value) {
            console.log(stepContext.context.activity.value.x)
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
            console.log("eee",`${deptname}`)
            
            await stepContext.context.sendActivity('Type exit or help to retun to main menu.');
            return Dialog.EndOfTurn;
        }
        else {
            return await stepContext.endDialog();
        }
    }
    async classSelectionStep(stepContext) {
        console.log("semesterSelected=fee details------------->>>>>>>", stepContext.context.activity.value.x);
        if (stepContext.context.activity.value) {

            await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
            
            var temp = stepContext.context.activity.value.x.split(',');
            await db.feeDetail(1, 'classwise').then(async result => {
                dbresult = result.recordset
                console.log(dbresult)
            }).catch(err => {
                console.log("error in classwise data for Fee detail", err)
            })
            const card = await feeDetaCard.classwisefeedetails(dbresult, temp[1])
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
            await db.feeDetail(1, 'studentList').then(async result => {
                dbresult = result.recordset
            console.log(dbresult)
            }).catch(err => {
                console.log("error in student list for attendance", err)
            })
            const card = await feeDetaCard.sectionwisefeedetails(dbresult, temp[1])
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
        console.log("studentSelected=attendance------------->>>>>>>", stepContext.context.activity.value.x);
        if (stepContext.context.activity.value) {
             await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
            var fees;
                    await db.studenFeesDetail('2018PUSSHBSAX06587').then(async result => {
                        // console.log("=>>>>>>>>",result)
                        fees = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    // console.log("=====>>>>", fees)s
                    var card = await feeDetaCard.Studentfeedetails(fees)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(card)]
                    });
                    // return Dialog.EndOfTurn;
                    // return await stepContext.endDialog()
                    return await stepContext.next();
        }
        else {
            return await stepContext.endDialog();
        }
        // return Dialog.EndOfTurn;
    }
}

module.exports.feeDetailsDialog = feeDetailsDialog;
module.exports.feeDeta_Dialog = feeDeta_Dialog;
