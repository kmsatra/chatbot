//import files

const { ComponentDialog, NumberPrompt, TextPrompt, ChoiceFactory, WaterfallDialog, Dialog } = require('botbuilder-dialogs');
const { AttachmentLayoutTypes, CardFactory, ActivityTypes } = require('botbuilder');
const { MAIN_DIALOG, MainDialog } = require('./mainDialog');

const TEXT_PROMPT = 'TEXT_PROMPT';
const NUMBER_PROMPT = 'NUMBER_PROMPT';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';
const db = require('../db/database')
const Stu_Dialog = 'Stu_Dialog';
var stucard = require('../cards/studentCard')
var stuServiceCard = require('../cards/serviceCard')

// class declaration

class StudentDialog extends ComponentDialog {
    constructor() {
        super(Stu_Dialog);
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

//student persona waterfall begin step 1
    async stubutton(stepContext) {
        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
        if (stepContext.context.activity.value === "" || stepContext.context.activity.value === undefined) {
            var data
            await db.studentMainDetail('2018PUSSHBSAX06587', 'student', 'Yogita Jain').then(async result => {
                data = result
            }).catch(err => {
                console.log("hereeeeeeee", err)
            })
            var scard = await stucard.stuCard(data)
            await stepContext.context.sendActivity({
                attachments: [CardFactory.adaptiveCard(scard)]
            });
            return Dialog.EndOfTurn;
        }
        else {
            return await stepContext.next();
        }
    }
    
//student waterfall step 2
    
    async buttonresponse(stepContext) {
        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
        try {
            if (stepContext.context.activity.value && stepContext.context.activity.value.x) {
              var res;
                res = stepContext.context.activity.value.x
            }
            switch (res) {
                case 'Attendance Details':
                    var attendace;
                    await db.studentAttendanceDetail('2018PUSSHBSAX06587').then(async result => {
                        attendace = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    var acard = await stucard.attendanceCard(attendace)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(acard)]
                    });
                    return await stepContext.next()
                case 'Marks Details':
                    var dbcgpa = []
                    var dcgpa
                    await db.studentMarksDetail('2018PUSSHBSAX06587').then(async result => {
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
                         var ccard = await stucard.cgpaCard(dbcgpa[i], dbcgpa.length)
                         var cgcard = await CardFactory.adaptiveCard(ccard)
                        cgpa.attachments.push(cgcard);    
                    }
                       var iccard = await stucard.imarkCard()
                       var igcard = await CardFactory.adaptiveCard(iccard)
                       cgpa.attachments.push(igcard);
                        await stepContext.context.sendActivity(cgpa)
                    return await stepContext.next()
            }
        } catch (Exceptionn) {
            console.log("error 4", Exceptionn)
        }
        return Dialog.EndOfTurn;
    }

//student waterfall step3
    
    async options(stepContext) {
         await stepContext.context.sendActivity({type: ActivityTypes.Typing});
         await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
         await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
            var sSerCard = await stuServiceCard.stuServiceCard()
            await stepContext.context.sendActivity({
                attachments: [CardFactory.adaptiveCard(sSerCard)]
            });
         return Dialog.EndOfTurn;
        }

//student waterfall begin step 4 final step
    
    async tryOut(stepContext) {
         try {
            var res;
            res=stepContext.context.activity.value.x;
            switch (res) {
                case 'Attendance Details':
                    return await stepContext.beginDialog(Stu_Dialog);
                case 'Marks Details':
                    return await stepContext.beginDialog(Stu_Dialog);
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
module.exports.StudentDialog = StudentDialog;
module.exports.Stu_Dialog = Stu_Dialog;