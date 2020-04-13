const { ComponentDialog, NumberPrompt, TextPrompt, ChoiceFactory, WaterfallDialog, Dialog } = require('botbuilder-dialogs');
const { AttachmentLayoutTypes, CardFactory, ActivityTypes } = require('botbuilder');
// const database = require('../db/database')
const TEXT_PROMPT = 'TEXT_PROMPT';
const NUMBER_PROMPT = 'NUMBER_PROMPT';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';
const db = require('../db/database')
const Stu_Dialog = 'Stu_Dialog';
var stucard = require('../cards/studentCard')
var stuDialogInternalVar = "";
// var status = ['XXXX', 'XXX', 'XX', 'X']
class StudentDialog extends ComponentDialog {
    constructor() {
        super(Stu_Dialog);
        this.addDialog(new TextPrompt(TEXT_PROMPT));
        this.addDialog(new NumberPrompt(NUMBER_PROMPT));
        // this.addDialog(new ReviewSelectionDialog());
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.stubutton.bind(this),
            this.buttonresponse.bind(this),
            this.yesno.bind(this),
            this.options.bind(this),
            this.tryOut.bind(this)
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }


    async stubutton(stepContext) {
        // console.log("::::::::::::::::::::::::::::::::", stuDialogInternalVar)
        await stepContext.context.sendActivity({type: ActivityTypes.Typing});

        if (stuDialogInternalVar === "" || stuDialogInternalVar === null) {
            var data
            await db.studentMainDetail('2018PUSSHBSAX06587', 'student', 'Yogita Jain').then(async result => {
                // console.log("=>>>>>>>>",result)
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
            // console.log(" m here");
            // stepContext.context.activity.value.x = stuDialogInternalVar
            return await stepContext.next();
        }
    }
    async buttonresponse(stepContext) {
        // console.log("value", stepContext.context.activity.value.x)
        await stepContext.context.sendActivity({type: ActivityTypes.Typing});

        try {
            if (stepContext.context.activity.value && stepContext.context.activity.value.x) {
                stuDialogInternalVar = stepContext.context.activity.value.x
            }
            switch (stuDialogInternalVar) {
                case 'Attendance':
                    var attendace;
                    await db.studentAttendanceDetail('2018PUSSHBSAX06587').then(async result => {
                        // console.log("=>>>>>>>>",result)
                        attendace = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    // console.log("=====>>>>", attendace)
                    var acard = await stucard.attendanceCard(attendace)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(acard)]
                    });
                    // return await stepContext.endDialog()
                    return await stepContext.next()

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
                    for (var i = 0; i < dbcgpa.length; i++) {
                         var ccard = await stucard.cgpaCard(dbcgpa[i], dbcgpa.length)
                         var cgcard = await CardFactory.adaptiveCard(ccard)
                        cgpa.attachments.push(cgcard);    
                    }
                       var iccard = await stucard.imarkCard()
                       var igcard = await CardFactory.adaptiveCard(iccard)
                       cgpa.attachments.push(igcard);

                        await stepContext.context.sendActivity(cgpa)
                    // return Dialog.EndOfTurn;
                    // return await stepContext.endDialog()
                    return await stepContext.next()

                case 'Assignment':
                    var data;
                    await db.studentAssignmentDetail('2018PUSSHBSAX06587').then(async result => {
                        // console.log("=>>>>>>>>",result)
                        data = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    // console.log("=====>>>>", data.recordset.length)
                    var asgcard = await stucard.assignmentCard(data)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(asgcard)]
                    });
                    // return Dialog.EndOfTurn;
                    // return await stepContext.endDialog()
                    return await stepContext.next()

                case 'Yes':
                    //    await stepContext.beginDialog(Mgt_Dialog);
                    var yescard = await stucard.YesCard(stepContext)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(yescard)]
                    });
                    return Dialog.EndOfTurn;
                // return await stepContext.endDialog()

                case 'No':
                    //    await stepContext.beginDialog(Mgt_Dialog);
                    var nocard = await stucard.NoCard(stepContext)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(nocard)]
                    });
                    return Dialog.EndOfTurn;
                // return await stepContext.endDialog()


            }
        } catch (Exceptionn) {
            console.log("error 4", Exceptionn)
        }
    }

    async yesno(stepContext) {
        // console.log("value", stepContext.context.activity.value.x)
        await stepContext.context.sendActivity({type: ActivityTypes.Typing});

        try {
            if (stepContext.context.activity.value && stepContext.context.activity.value.x) {
                stuDialogInternalVar = stepContext.context.activity.value.x
            }
            switch (stuDialogInternalVar) {
                case 'Okay':

                    await stepContext.context.sendActivity("Thank you, Your enrollment has been confirmed.");
                    // return Dialog.EndOfTurn;
                    // return await stepContext.endDialog()
                    return await stepContext.next()

                case 'Cancel':
                    //    await stepContext.beginDialog(Mgt_Dialog);
                    // var asgcard = await stucard.assignmentCard(stepContext)
                    await stepContext.context.sendActivity("Thank you, Your enrollment has been cancelled.");
                    // return Dialog.EndOfTurn;
                    // return await stepContext.endDialog()
                    return await stepContext.next()


                case 'Yes':
                    //    await stepContext.beginDialog(Mgt_Dialog);
                    var yescard = await stucard.YesCard(stepContext)
                    await stepContext.context.sendActivity("Thank you for interest, we will keep you updated on upcoming workshops.");
                    // return Dialog.EndOfTurn;
                    // return await stepContext.endDialog()
                    return await stepContext.next()


                case 'No':
                    //    await stepContext.beginDialog(Mgt_Dialog);
                    var nocard = await stucard.NoCard(stepContext)
                    await stepContext.context.sendActivity("Thank you, we will not bother you again with such notifications.");
                    // return Dialog.EndOfTurn;
                    // return await stepContext.endDialog()
                    return await stepContext.next()
                default:
                    return await stepContext.next()


            }
        } catch (Exception) {
            console.log("error 5")
        }
    }
    async options(stepContext) {
        await stepContext.context.sendActivity({type: ActivityTypes.Typing});

        // console.log("---------->>>>>> reached here")
        await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Attendance Details', 'Marks Details', 'Switch Role']));
        return Dialog.EndOfTurn;
    }

    async tryOut(stepContext) {
        // console.log("----->>", stepContext.result)
        try {
            switch (stepContext.result) {
                case 'Attendance Details':
                    // console.log("====================Attendance")
                    // await stepContext.context.sendActivity("pending");
                    stuDialogInternalVar = "Attendance"
                    return await stepContext.beginDialog(WATERFALL_DIALOG)
                // return Dialog.EndOfTurn;
                // return await stepContext.endDialog()

                case 'Marks Details':
                    // console.log("====================CGPA")
                    // await stepContext.context.sendActivity("deposit");
                    stuDialogInternalVar = "CGPA"
                    return await stepContext.beginDialog(WATERFALL_DIALOG)
                // return Dialog.EndOfTurn
                // return await stepContext.endDialog()
                case 'Assignment':
                    // console.log("====================Assignment")
                    // await stepContext.context.sendActivity("deposit");
                    stuDialogInternalVar = "Assignment"
                    return await stepContext.beginDialog(WATERFALL_DIALOG)
                // return Dialog.EndOfTurn
                // return await stepContext.endDialog()
                case 'Switch Role':
                    // console.log("exit-------------------")
                    stuDialogInternalVar = ""
                    return await stepContext.endDialog();

            }
        } catch (Exception) {
            console.log("error")
        }
    }
}


module.exports.StudentDialog = StudentDialog;
module.exports.Stu_Dialog = Stu_Dialog;