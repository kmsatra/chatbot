// import files
const { ComponentDialog, NumberPrompt, TextPrompt, ChoiceFactory, WaterfallDialog, Dialog } = require('botbuilder-dialogs');
const { AttachmentLayoutTypes, CardFactory, ActivityTypes } = require('botbuilder');
const { MAIN_DIALOG, MainDialog } = require('./mainDialog');

const TEXT_PROMPT = 'TEXT_PROMPT';
const NUMBER_PROMPT = 'NUMBER_PROMPT';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';
const fcl_Dialog = 'fcl_Dialog';
const { Stu_Dialog, StudentDialog } = require('./StudentDialog')

var facServiceCard = require('../cards/serviceCard')
const db = require('../db/database')
var fclcard = require('../cards/FacultyCard')

// class declaration
class FacultyDialog extends ComponentDialog {
    constructor() {
        super(fcl_Dialog);
        this.addDialog(new TextPrompt(TEXT_PROMPT));
       this.addDialog(new StudentDialog());
       
        this.addDialog(new NumberPrompt(NUMBER_PROMPT));
        // this.addDialog(new MainDialog());
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.fclbutton.bind(this),
            this.buttonresponse.bind(this),
            this.options.bind(this),
            this.tryOut.bind(this),
            this.applyLeave.bind(this)
           ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

//Faculty persona waterfall begin step 1
    async fclbutton(stepContext) {
        console.log("faculty step1")
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
      if (stepContext.context.activity.value === "" || stepContext.context.activity.value.x === undefined) {
              var data
            await db.facultyMainDetail('1').then(async result => {
                data = result
            }).catch(err => {
                console.log("hereeeeeeee", err)
            })
          var fcard = await fclcard.fclCard(data)
            await stepContext.context.sendActivity({
                attachments: [CardFactory.adaptiveCard(fcard)]
            });
            return Dialog.EndOfTurn;
        }
        else {
            return await stepContext.next();
        }
    return Dialog.EndOfTurn;
    }
// faculty waterfall step 2

    async buttonresponse(stepContext) {
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        try {
            if (stepContext.context.activity.value && stepContext.context.activity.value.x) {
               var res;
               res = stepContext.context.activity.value.x
            }
            switch (res) {
                case 'Class Detail':
                    var cls
                    await db.facultyClassDetail('1').then(async result => {
                        cls = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    let s1 = [];
                    let s2 = [];
                    let s3 = [];
                    let s4 = [];
                    let s5 = [];
                    cls.recordset.forEach(Element => {
                        if (Element.day == 'Monday') {
                            s1.push(Element)
                        }
                        else if (Element.day == 'Tuesday') {
                            s2.push(Element)
                        }
                        else if (Element.day == 'Wednesday') {
                            s3.push(Element)
                        }
                        else if (Element.day == 'Thursday') {
                            s4.push(Element)
                        }
                        else if (Element.day == 'Friday') {
                            s5.push(Element)
                        }
                  })
                    var timeTable = [s1, s2, s3, s4, s5];
                    const sendTime = { attachments: [], attachmentLayout: AttachmentLayoutTypes.Carousel };
                    for (var i = 0; i < timeTable.length; i++) {
                        let dcard = await fclcard.weekclass(timeTable[i])
                        var dccard = CardFactory.adaptiveCard(dcard)
                        sendTime.attachments.push(dccard);
                    }
                    await stepContext.context.sendActivity(sendTime);
                    return await stepContext.next();
                case 'Leave Detail':
                    var lev
                    await db.facultyLeaveDetail('1').then(async result => {
                        lev = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    var lcard = await fclcard.leaveDetail(lev)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(lcard)]
                    });
                    return await stepContext.next();

                case 'Apply For Leave':
                    var lev
                    await db.facultyLeaveDetail('1').then(async result => {
                        lev = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    var aleave = await fclcard.applyLeave(lev)
                      await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(aleave)]
                    });
                     return await stepContext.next();
                case 'Salary Detail':
                    var sal
                    await db.facultySalaryDetail('1').then(async result => {
                        sal = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    var salcard = await fclcard.SalaryDetail(sal)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(salcard)]
                    });
                    return await stepContext.next();
                case 'Attendance' :
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(fclcard.attendanceCard)]
                    });
                    return Dialog.EndOfTurn;
            }
        } catch (Exception) {
            console.log("error 2")
        }
        return Dialog.EndOfTurn;
    }

//faculty waterfall step 3
    async options(stepContext) {
            await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
            var facSerCard = await facServiceCard.facServiceCard()
            await stepContext.context.sendActivity({
                attachments: [CardFactory.adaptiveCard(facSerCard)]
            });
         return Dialog.EndOfTurn;
  }

//faculty waterfall step 4 
    async tryOut(stepContext) {
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        var res;
        res=stepContext.context.activity.value.x;
        try {
            switch (res) {
                case 'Class Detail':
                    return await stepContext.beginDialog(fcl_Dialog);
               case 'Leave Detail':
                    return await stepContext.beginDialog(fcl_Dialog);
                case 'Apply For Leave':
                    return await stepContext.beginDialog(fcl_Dialog);
                case 'Salary Detail':
                    return await stepContext.beginDialog(fcl_Dialog);
                case 'Apply':
                    return await stepContext.next();
                 case 'Switch Role':
                    return await stepContext.beginDialog('MAIN_DIALOG');
            }
        } catch (Exception) {
            console.log("error")
        }
    return Dialog.EndOfTurn;
    }

//faculty waterfall step 5 final step
// under maintenance not completed

async applyLeave(stepContext) {
        if(stepContext.context.activity.value.x==="Apply")
            {
                await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
                await stepContext.context.sendActivity("Your leave is sanctioned");
                return await stepContext.beginDialog(fcl_Dialog);
            }
        else{
            return await stepContext.beginDialog('MAIN_DIALOG');
        }
        return Dialog.EndOfTurn;
    }
 
}

// exports dialog
module.exports.FacultyDialog = FacultyDialog;
module.exports.fcl_Dialog = fcl_Dialog;