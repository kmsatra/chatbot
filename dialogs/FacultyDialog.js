const { ComponentDialog, NumberPrompt, TextPrompt, ChoiceFactory, WaterfallDialog, Dialog } = require('botbuilder-dialogs');
const { AttachmentLayoutTypes, CardFactory, ActivityTypes } = require('botbuilder');
const TEXT_PROMPT = 'TEXT_PROMPT';
const NUMBER_PROMPT = 'NUMBER_PROMPT';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';
const fcl_Dialog = 'fcl_Dialog';
const { Stu_Dialog, StudentDialog } = require('./StudentDialog')

const db = require('../db/database')
var fclcard = require('../cards/FacultyCard')

class FacultyDialog extends ComponentDialog {
    constructor() {
        super(fcl_Dialog);
        this.addDialog(new TextPrompt(TEXT_PROMPT));
       this.addDialog(new StudentDialog());
       
        this.addDialog(new NumberPrompt(NUMBER_PROMPT));
        // this.addDialog(new ReviewSelectionDialog());
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.fclbutton.bind(this),
            this.buttonresponse.bind(this),
            this.middle.bind(this),
            this.options.bind(this),
            this.tryOut.bind(this),
            this.tryOut1.bind(this),
            this.tryOut2.bind(this),
            this.tryOut3.bind(this),
            this.tryOut4.bind(this),
            this.tryOut5.bind(this)
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }


    async fclbutton(stepContext) {
        // console.log("::::::::::::::::::::::::::::::::", fclDialogInternalVar)
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        var fclDialogInternalVar = "";

        if (fclDialogInternalVar === "" || fclDialogInternalVar === null) {
            var data
            await db.facultyMainDetail('1').then(async result => {
                // console.log("=>>>>>>>>",result)
                data = result
            }).catch(err => {
                console.log("hereeeeeeee", err)
            })

            // console.log("data", data)
            var fcard = await fclcard.fclCard(data)
            await stepContext.context.sendActivity({
                attachments: [CardFactory.adaptiveCard(fcard)]
            });
            return Dialog.EndOfTurn;
        }
        else {
            // console.log(" m here");
            // stepContext.context.activity.value.x = fclDialogInternalVar
            return await stepContext.next();
        }
    }
    async buttonresponse(stepContext) {
        // console.log("value", stepContext.context.activity.value.x)
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
                        // console.log("=>>>>>>>>",result)
                        cls = result
                        // console.log(cls.recordset)
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
                        // console.log("==========>>>>>", timeTable[i])
                        let dcard = await fclcard.weekclass(timeTable[i])
                        var dccard = CardFactory.adaptiveCard(dcard)
                        sendTime.attachments.push(dccard);
                    }
                    await stepContext.context.sendActivity(sendTime);
                    // console.log("data", cls)
                    // var list = [];
                    // for (var i = 0; i < 5; i++) {
                    //     let wccard = await fclcard.weekclass(stepContext)
                    //     var wcard = CardFactory.adaptiveCard(wccard)
                    //     list.push(wcard);

                    // }
                    // const reply = { attachments: list, attachmentLayout: AttachmentLayoutTypes.Carousel };
                    // await stepContext.context.sendActivity(reply);
                    // return Dialog.EndOfTurn;
                    // return await stepContext.endDialog()
                    return await stepContext.next();


                case 'Leave Detail':

                    var lev
                    await db.facultyLeaveDetail('1').then(async result => {
                        // console.log("=>>>>>>>>",result)
                        lev = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })

                    // console.log("data", lev)
                    //    await stepContext.beginDialog(Mgt_Dialog);
                    var lcard = await fclcard.leaveDetail(lev)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(lcard)]
                    });
                    // return Dialog.EndOfTurn;
                    // return await stepContext.endDialog()
                    return await stepContext.next();

                case 'Apply For Leave':
                
                    var lev
                    await db.facultyLeaveDetail('1').then(async result => {
                        // console.log("=>>>>>>>>",result)
                        lev = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })

                    // console.log("data")
                    //    await stepContext.beginDialog(Mgt_Dialog);
                    var aleave = await fclcard.applyLeave(lev)
                    // console.log("hello",aleave)
                      await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(aleave)]
                    });
              
                    // return Dialog.EndOfTurn;
                    // return await stepContext.endDialog()
                     return await stepContext.next();
              
                case 'Gross Salary':

                    var sal
                    await db.facultySalaryDetail('1').then(async result => {
                        // console.log("=>>>>>>>>",result)
                        sal = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })

                    // console.log("data", sal)
                    //    await stepContext.beginDialog(Mgt_Dialog);
                    var salcard = await fclcard.SalaryDetail(sal)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(salcard)]
                    });
                    // return Dialog.EndOfTurn;
                    // return await stepContext.endDialog()
                    return await stepContext.next();

                case 'Attendance' :
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(fclcard.attendanceCard)]
                    });
                    // return await stepContext.next();
                    return Dialog.EndOfTurn;
            }
        } catch (Exception) {
            console.log("error 2")
        }
    }
    async middle(stepContext){
        if (stepContext.context.activity.value && stepContext.context.activity.value.x) {
        //    await stepContext.context.sendActivity("Thank you for taking Attendance.");
           return await stepContext.next();

        }
        else{
            return await stepContext.next();

        }
    }
    async options(stepContext) {
        // console.log("---------->>>>>> reached here")
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });

        await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Class Detail', 'Leave Detail', 'Salary Detail', ' Apply For Leave', 'Switch Role']));
        return Dialog.EndOfTurn;
    }

    async tryOut(stepContext) {
        console.log("----->>", stepContext.result)
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        var res;
        res=stepContext.result;
        try {
            switch (res.trim()) {
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
                    await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                    await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Class Detail', 'Leave Detail', 'Salary Detail', ' Apply For Leave', 'Switch Role']));
                    return Dialog.EndOfTurn;
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
                    await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                    await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Class Detail', 'Leave Detail', 'Salary Detail', ' Apply For Leave', 'Switch Role']));
                    return Dialog.EndOfTurn;
                case 'Student':
                        await stepContext.beginDialog(Stu_Dialog);
                return Dialog.EndOfTurn;
     
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
                await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Class Detail', 'Leave Detail', 'Salary Detail', ' Apply For Leave', 'Switch Role']));
                return Dialog.EndOfTurn;
    
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
                    await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                     await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Class Detail', 'Leave Detail', 'Salary Detail', ' Apply For Leave', 'Switch Role']));
                    return Dialog.EndOfTurn;
               case 'Switch Role':
                 await stepContext.context.sendActivity("Please choose a role to proceed:")
        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Management','Faculty', 'Student', 'Parent']));
        return Dialog.EndOfTurn;

            }
        } catch (Exception) {
            console.log("error")
        }
    return Dialog.EndOfTurn;
    }
async tryOut1(stepContext) {
        console.log("----->>", stepContext.result)
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        var res;
        res=stepContext.result;
        try {
            switch (res.trim()) {
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
                    await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                    await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Class Detail', 'Leave Detail', 'Salary Detail', ' Apply For Leave', 'Switch Role']));
                    return Dialog.EndOfTurn;
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
                    await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                    await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Class Detail', 'Leave Detail', 'Salary Detail', ' Apply For Leave', 'Switch Role']));
                    return Dialog.EndOfTurn;
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
                await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Class Detail', 'Leave Detail', 'Salary Detail', ' Apply For Leave', 'Switch Role']));
                return Dialog.EndOfTurn;
     case 'Student':
                        await stepContext.beginDialog(Stu_Dialog);
                return Dialog.EndOfTurn;
     
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
                    await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                     await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Class Detail', 'Leave Detail', 'Salary Detail', ' Apply For Leave', 'Switch Role']));
                    return Dialog.EndOfTurn;
                  case 'Switch Role':
                 await stepContext.context.sendActivity("Please choose a role to proceed:")
        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Management','Faculty', 'Student', 'Parent']));
        return Dialog.EndOfTurn;

            }
        } catch (Exception) {
            console.log("error")
        }
    return Dialog.EndOfTurn;
    }
async tryOut2(stepContext) {
        console.log("----->>", stepContext.result)
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        var res;
        res=stepContext.result;
        try {
            switch (res.trim()) {
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
                    await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                    await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Class Detail', 'Leave Detail', 'Salary Detail', ' Apply For Leave', 'Switch Role']));
                    return Dialog.EndOfTurn;
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
                    await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                    await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Class Detail', 'Leave Detail', 'Salary Detail', ' Apply For Leave', 'Switch Role']));
                    return Dialog.EndOfTurn;
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
                await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Class Detail', 'Leave Detail', 'Salary Detail', ' Apply For Leave', 'Switch Role']));
                return Dialog.EndOfTurn;
     case 'Student':
                        await stepContext.beginDialog(Stu_Dialog);
                return Dialog.EndOfTurn;
     
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
                    await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                     await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Class Detail', 'Leave Detail', 'Salary Detail', ' Apply For Leave', 'Switch Role']));
                    return Dialog.EndOfTurn;
                   case 'Switch Role':
                 await stepContext.context.sendActivity("Please choose a role to proceed:")
        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Management','Faculty', 'Student', 'Parent']));
        return Dialog.EndOfTurn;

            }
        } catch (Exception) {
            console.log("error")
        }
    return Dialog.EndOfTurn;
    }

async tryOut3(stepContext) {
        console.log("----->>", stepContext.result)
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        var res;
        res=stepContext.result;
        try {
            switch (res.trim()) {
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
                    await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                    await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Class Detail', 'Leave Detail', 'Salary Detail', ' Apply For Leave', 'Switch Role']));
                    return Dialog.EndOfTurn;
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
                    await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                    await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Class Detail', 'Leave Detail', 'Salary Detail', ' Apply For Leave', 'Switch Role']));
                    return Dialog.EndOfTurn;
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
                await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Class Detail', 'Leave Detail', 'Salary Detail', ' Apply For Leave', 'Switch Role']));
                return Dialog.EndOfTurn;
                case 'Student':
                        await stepContext.beginDialog(Stu_Dialog);
                return Dialog.EndOfTurn;
     
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
                    await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                     await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Class Detail', 'Leave Detail', 'Salary Detail', ' Apply For Leave', 'Switch Role']));
                    return Dialog.EndOfTurn;
                   case 'Switch Role':
                 await stepContext.context.sendActivity("Please choose a role to proceed:")
        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Management','Faculty', 'Student', 'Parent']));
        return Dialog.EndOfTurn;

            }
        } catch (Exception) {
            console.log("error")
        }
    return Dialog.EndOfTurn;
    }
async tryOut4(stepContext) {
        console.log("----->>", stepContext.result)
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        var res;
        res=stepContext.result;
        try {
            switch (res.trim()) {
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
                    await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                    await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Class Detail', 'Leave Detail', 'Salary Detail', ' Apply For Leave', 'Switch Role']));
                    return Dialog.EndOfTurn;
                     case 'Student':
                        await stepContext.beginDialog(Stu_Dialog);
                return Dialog.EndOfTurn;
     
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
                    await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                    await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Class Detail', 'Leave Detail', 'Salary Detail', ' Apply For Leave', 'Switch Role']));
                    return Dialog.EndOfTurn;
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
                await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Class Detail', 'Leave Detail', 'Salary Detail', ' Apply For Leave', 'Switch Role']));
                return Dialog.EndOfTurn;
    
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
                    await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                     await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Class Detail', 'Leave Detail', 'Salary Detail', ' Apply For Leave', 'Switch Role']));
                    return Dialog.EndOfTurn;
                 case 'Switch Role':
                 await stepContext.context.sendActivity("Please choose a role to proceed:")
        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Management','Faculty', 'Student', 'Parent']));
        return Dialog.EndOfTurn;
    }
        } catch (Exception) {
            console.log("error")
        }
    return Dialog.EndOfTurn;
    }
async tryOut5(stepContext) {
        console.log("----->>", stepContext.result)
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        var res;
        res=stepContext.result;
        try {
            switch (res.trim()) {
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
                    await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                    await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Class Detail', 'Leave Detail', 'Salary Detail', ' Apply For Leave', 'Switch Role']));
                    return Dialog.EndOfTurn;
                     case 'Student':
                        await stepContext.beginDialog(Stu_Dialog);
                return Dialog.EndOfTurn;
     
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
                    await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                    await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Class Detail', 'Leave Detail', 'Salary Detail', ' Apply For Leave', 'Switch Role']));
                    return Dialog.EndOfTurn;
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
                await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Class Detail', 'Leave Detail', 'Salary Detail', ' Apply For Leave', 'Switch Role']));
                return Dialog.EndOfTurn;
    
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
                    await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                     await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Class Detail', 'Leave Detail', 'Salary Detail', ' Apply For Leave', 'Switch Role']));
                    return Dialog.EndOfTurn;
                 case 'Switch Role':
                 await stepContext.context.sendActivity("Please choose a role to proceed:")
        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Management','Faculty', 'Student', 'Parent']));
        return Dialog.EndOfTurn;

            }
        } catch (Exception) {
            console.log("error")
        }
    return Dialog.EndOfTurn;
    }
}


module.exports.FacultyDialog = FacultyDialog;
module.exports.fcl_Dialog = fcl_Dialog;