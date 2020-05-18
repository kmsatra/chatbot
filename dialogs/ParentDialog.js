// import files
const { ComponentDialog, NumberPrompt, TextPrompt, ChoiceFactory, WaterfallDialog, Dialog } = require('botbuilder-dialogs');
const { AttachmentLayoutTypes, CardFactory, ActivityTypes } = require('botbuilder');
const { MAIN_DIALOG, MainDialog } = require('./mainDialog');
const TEXT_PROMPT = 'TEXT_PROMPT';
const NUMBER_PROMPT = 'NUMBER_PROMPT';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';
const Par_Dialog = 'Par_Dialog';
const db = require('../db/database')


var parcard = require('../cards/ParentCard')
var parServiceCard = require('../cards/serviceCard')

// class declaration

class ParentDialog extends ComponentDialog {
    constructor() {
        super(Par_Dialog);
        this.addDialog(new TextPrompt(TEXT_PROMPT));
        this.addDialog(new NumberPrompt(NUMBER_PROMPT));
       // this.addDialog(new MainDialog());
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.stubutton.bind(this),
            this.buttonresponse.bind(this),
            this.options.bind(this),
            this.tryOut.bind(this),
          ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }
//parent persona waterfall begin step 1
    async stubutton(stepContext) {
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        if (stepContext.context.activity.value === "" || stepContext.context.activity.value === undefined) {
            var data
            await db.studentMainDetail('2018PUSSHBSAX06587', 'parent').then(async result => {
                data = result
            }).catch(err => {
                console.log("hereeeeeeee", err)
            })
            var pcard = await parcard.parCard(data)
            await stepContext.context.sendActivity({
                attachments: [CardFactory.adaptiveCard(pcard)]
            });
            return Dialog.EndOfTurn;
        }
        else {
            return await stepContext.next();
        }
    }

//parent waterfall step 2
    async buttonresponse(stepContext) {
         await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        try {
            if (stepContext.context.activity.value && stepContext.context.activity.value.x ) {
               var parDialogInternalVar ;
               parDialogInternalVar = stepContext.context.activity.value.x
            }
            switch (parDialogInternalVar) {
                case 'Attendance Details':
                    var attendace;
                    await db.studentAttendanceDetail('2018PUSSHBSAX06587').then(async result => {
                        attendace = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    var acard = await parcard.attendanceCard(attendace)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(acard)]
                    });
                    return await stepContext.next();
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
                    for (var i = 0; i < 2; i++) {
                        var ccard = await parcard.cgpaCard(dbcgpa[i], dbcgpa.length)
                        var cgcard = await CardFactory.adaptiveCard(ccard)
                        cgpa.attachments.push(cgcard);
                    }
                        var iccard = await parcard.imarkCard()
                        var igcard = await CardFactory.adaptiveCard(iccard)
                        cgpa.attachments.push(igcard);
                        await stepContext.context.sendActivity(cgpa)
                        console.log("i m here")
                   return await stepContext.next();
                 case 'Fees Details':
                    var fees;
                    await db.studenFeesDetail('2018PUSSHBSAX06587').then(async result => {
                        fees = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    var pfcard = await parcard.pfCard(fees)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(pfcard)]
                    });
                    return await stepContext.next();
            }
        } catch (Exception) {
            console.log("error 3", Exception)
        }
    return Dialog.EndOfTurn;
    }


//parent waterfall step 3
    async options(stepContext) {
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
            var pSerCard = await parServiceCard.parServiceCard()
            await stepContext.context.sendActivity({
                attachments: [CardFactory.adaptiveCard(pSerCard)]
            });
         return Dialog.EndOfTurn;
    }

//parent waterfall step 4 final step
    async tryOut(stepContext) {
        try {
            var res=stepContext.context.activity.value.x;
            switch (res) {
                case 'Attendance Details':
                    return await stepContext.beginDialog(Par_Dialog);
                case 'Marks Details':
                    return await stepContext.beginDialog(Par_Dialog);
                case 'Fees Details':
                    return await stepContext.beginDialog(Par_Dialog);
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
module.exports.ParentDialog = ParentDialog;
module.exports.Par_Dialog = Par_Dialog;