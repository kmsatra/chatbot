const { ComponentDialog, NumberPrompt, TextPrompt, ChoiceFactory, WaterfallDialog, Dialog } = require('botbuilder-dialogs');
const { AttachmentLayoutTypes, CardFactory, ActivityTypes } = require('botbuilder');
// const database = require('../db/database')
const TEXT_PROMPT = 'TEXT_PROMPT';
const NUMBER_PROMPT = 'NUMBER_PROMPT';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';
const Par_Dialog = 'Par_Dialog';
const db = require('../db/database')
var parcard = require('../cards/ParentCard')
// var status = ['XXXX', 'XXX', 'XX', 'X']
class ParentDialog extends ComponentDialog {
    constructor() {
        super(Par_Dialog);
        this.addDialog(new TextPrompt(TEXT_PROMPT));
        this.addDialog(new NumberPrompt(NUMBER_PROMPT));
        // this.addDialog(new ReviewSelectionDialog());
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.stubutton.bind(this),
            this.buttonresponse.bind(this),
            this.options.bind(this),
            this.tryOut.bind(this),
            this.final.bind(this),
            this.finall.bind(this),
            this.finalll.bind(this),
            this.finallll.bind(this),
            this.finalllll.bind(this)
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }


    async stubutton(stepContext) {

         console.log("hey1")
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
        var parDialogInternalVar = "";

        if (parDialogInternalVar === "" || parDialogInternalVar === null) {
            var data
            await db.studentMainDetail('2018PUSSHBSAX06587', 'parent').then(async result => {
                // console.log("=>>>>>>>>",result)
                data = result
            }).catch(err => {
                console.log("hereeeeeeee", err)
            })
            // console.log("data", data)
            // await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Fees Deposited', 'Fees Pending']));
            var pcard = await parcard.parCard(data)
            await stepContext.context.sendActivity({
                attachments: [CardFactory.adaptiveCard(pcard)]
            });
            return Dialog.EndOfTurn;
        }
        else {
            // console.log(" m here");
            // stepContext.context.activity.value.x = parDialogInternalVar
            return await stepContext.next();
        }
    }
    async buttonresponse(stepContext) {
        
         console.log("hey2")
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });

        try {
            if (stepContext.context.activity.value && stepContext.context.activity.value.x) {
               var parDialogInternalVar = "";

                parDialogInternalVar = stepContext.context.activity.value.x
            }
            switch (parDialogInternalVar) {
                case 'Attendance':
                    var attendace;
                    await db.studentAttendanceDetail('2018PUSSHBSAX06587').then(async result => {
                        // console.log("=>>>>>>>>",result)
                        attendace = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    // console.log("=====>>>>", attendace)
                    var acard = await parcard.attendanceCard(attendace)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(acard)]
                    });
                    // return Dialog.EndOfTurn;
                    // return await stepContext.endDialog()
                    return await stepContext.next();


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
                    console.log("=====>>>>")
                    const cgpa = { attachments: [], attachmentLayout: AttachmentLayoutTypes.Carousel };
                    for (var i = 0; i < 2; i++) {
                        var ccard = await parcard.cgpaCard(dbcgpa[i], dbcgpa.length)
                        var cgcard = await CardFactory.adaptiveCard(ccard)
                        cgpa.attachments.push(cgcard);
                    }
                    // await stepContext.context.sendActivity(cgpa);
                        var iccard = await parcard.imarkCard()
                        var igcard = await CardFactory.adaptiveCard(iccard)
                        cgpa.attachments.push(igcard);

                        await stepContext.context.sendActivity(cgpa)
        
                    // return Dialog.EndOfTurn;
                    // return await stepContext.endDialog()
                    return await stepContext.next();


                case 'Fees Details':
                    var fees;
                    await db.studenFeesDetail('2018PUSSHBSAX06587').then(async result => {
                        // console.log("=>>>>>>>>",result)
                        fees = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    // console.log("=====>>>>", fees)
                    var pfcard = await parcard.pfCard(fees)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(pfcard)]
                    });
                    // return Dialog.EndOfTurn;
                    // return await stepContext.endDialog()
                    return await stepContext.next();
            }
        } catch (Exception) {
            console.log("error 3", Exception)
        }
    }
    async options(stepContext) {
        
         console.log("hey3")
        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });

        // console.log("---------->>>>>> reached here")
        await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Attendance Details', 'Marks Details', 'Fees Details', 'Switch Role']));
        return Dialog.EndOfTurn;
    }

    async tryOut(stepContext) {
        // console.log("----->>", stepContext.result)
        try {
            var res=stepContext.result;

         console.log("hey5",res)
            switch (res) {
                case 'Attendance Details':
                   var attendace;
                    await db.studentAttendanceDetail('2018PUSSHBSAX06587').then(async result => {
                        // console.log("=>>>>>>>>",result)
                        attendace = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    // console.log("=====>>>>", attendace)
                    var acard = await parcard.attendanceCard(attendace)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(acard)]
                    });
                       await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Attendance Details', 'Marks Details', 'Fees Details', 'Switch Role']));
        return Dialog.EndOfTurn;
   
                case 'Marks Details':
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
                    console.log("=====>>>>")
                    const cgpa = { attachments: [], attachmentLayout: AttachmentLayoutTypes.Carousel };
                    for (var i = 0; i < 2; i++) {
                        var ccard = await parcard.cgpaCard(dbcgpa[i], dbcgpa.length)
                        var cgcard = await CardFactory.adaptiveCard(ccard)
                        cgpa.attachments.push(cgcard);
                    }
                    // await stepContext.context.sendActivity(cgpa);
                        var iccard = await parcard.imarkCard()
                        var igcard = await CardFactory.adaptiveCard(iccard)
                        cgpa.attachments.push(igcard);

                        await stepContext.context.sendActivity(cgpa)
                        await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Attendance Details', 'Marks Details', 'Fees Details', 'Switch Role']));
                        return Dialog.EndOfTurn;
   
       
        case 'Fees Details':
                    // console.log("====================Pending Fees")
                    // await stepContext.context.sendActivity("deposit");
                           var fees;
                    await db.studenFeesDetail('2018PUSSHBSAX06587').then(async result => {
                        // console.log("=>>>>>>>>",result)
                        fees = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    // console.log("=====>>>>", fees)
                    var pfcard = await parcard.pfCard(fees)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(pfcard)]
                    });
                       await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Attendance Details', 'Marks Details', 'Fees Details', 'Switch Role']));
                        return Dialog.EndOfTurn;
   
        case 'Switch Role':
                    // console.log("exit-------------------")
                    return await stepContext.endDialog();

            }
        } catch (Exception) {
            console.log("error")
        }
        return Dialog.EndOfTurn;
    }

    async final(stepContext) {
        // console.log("----->>", stepContext.result)
        try {
            var res=stepContext.result;

         console.log("hey5",res)
            switch (res) {
                case 'Attendance Details':
                   var attendace;
                    await db.studentAttendanceDetail('2018PUSSHBSAX06587').then(async result => {
                        // console.log("=>>>>>>>>",result)
                        attendace = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    // console.log("=====>>>>", attendace)
                    var acard = await parcard.attendanceCard(attendace)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(acard)]
                    });
                       await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Attendance Details', 'Marks Details', 'Fees Details', 'Switch Role']));
        return Dialog.EndOfTurn;
   
                case 'Marks Details':
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
                    console.log("=====>>>>")
                    const cgpa = { attachments: [], attachmentLayout: AttachmentLayoutTypes.Carousel };
                    for (var i = 0; i < 2; i++) {
                        var ccard = await parcard.cgpaCard(dbcgpa[i], dbcgpa.length)
                        var cgcard = await CardFactory.adaptiveCard(ccard)
                        cgpa.attachments.push(cgcard);
                    }
                    // await stepContext.context.sendActivity(cgpa);
                        var iccard = await parcard.imarkCard()
                        var igcard = await CardFactory.adaptiveCard(iccard)
                        cgpa.attachments.push(igcard);

                        await stepContext.context.sendActivity(cgpa)
                        await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Attendance Details', 'Marks Details', 'Fees Details', 'Switch Role']));
                        return Dialog.EndOfTurn;
   
       
        case 'Fees Details':
                    // console.log("====================Pending Fees")
                    // await stepContext.context.sendActivity("deposit");
                           var fees;
                    await db.studenFeesDetail('2018PUSSHBSAX06587').then(async result => {
                        // console.log("=>>>>>>>>",result)
                        fees = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    // console.log("=====>>>>", fees)
                    var pfcard = await parcard.pfCard(fees)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(pfcard)]
                    });
                       await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Attendance Details', 'Marks Details', 'Fees Details', 'Switch Role']));
                        return Dialog.EndOfTurn;
   
            case 'Switch Role':
                    return await stepContext.endDialog();

            }
        } catch (Exception) {
            console.log("error")
        }
        return Dialog.EndOfTurn;
    }
    async finall(stepContext) {
        // console.log("----->>", stepContext.result)
        try {
            var res=stepContext.result;

         console.log("hey5",res)
            switch (res) {
                case 'Attendance Details':
                   var attendace;
                    await db.studentAttendanceDetail('2018PUSSHBSAX06587').then(async result => {
                        // console.log("=>>>>>>>>",result)
                        attendace = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    // console.log("=====>>>>", attendace)
                    var acard = await parcard.attendanceCard(attendace)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(acard)]
                    });
                       await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Attendance Details', 'Marks Details', 'Fees Details', 'Switch Role']));
        return Dialog.EndOfTurn;
   
                case 'Marks Details':
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
                    console.log("=====>>>>")
                    const cgpa = { attachments: [], attachmentLayout: AttachmentLayoutTypes.Carousel };
                    for (var i = 0; i < 2; i++) {
                        var ccard = await parcard.cgpaCard(dbcgpa[i], dbcgpa.length)
                        var cgcard = await CardFactory.adaptiveCard(ccard)
                        cgpa.attachments.push(cgcard);
                    }
                    // await stepContext.context.sendActivity(cgpa);
                        var iccard = await parcard.imarkCard()
                        var igcard = await CardFactory.adaptiveCard(iccard)
                        cgpa.attachments.push(igcard);

                        await stepContext.context.sendActivity(cgpa)
                        await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Attendance Details', 'Marks Details', 'Fees Details', 'Switch Role']));
                        return Dialog.EndOfTurn;
   
       
        case 'Fees Details':
                    // console.log("====================Pending Fees")
                    // await stepContext.context.sendActivity("deposit");
                           var fees;
                    await db.studenFeesDetail('2018PUSSHBSAX06587').then(async result => {
                        // console.log("=>>>>>>>>",result)
                        fees = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    // console.log("=====>>>>", fees)
                    var pfcard = await parcard.pfCard(fees)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(pfcard)]
                    });
                       await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Attendance Details', 'Marks Details', 'Fees Details', 'Switch Role']));
                        return Dialog.EndOfTurn;
    case 'Switch Role':
                    return await stepContext.endDialog();

            }
        } catch (Exception) {
            console.log("error")
        }
        return Dialog.EndOfTurn;
    }
    async finalll(stepContext) {
        // console.log("----->>", stepContext.result)
        try {
            var res=stepContext.result;

         console.log("hey5",res)
            switch (res) {
                case 'Attendance Details':
                   var attendace;
                    await db.studentAttendanceDetail('2018PUSSHBSAX06587').then(async result => {
                        // console.log("=>>>>>>>>",result)
                        attendace = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    // console.log("=====>>>>", attendace)
                    var acard = await parcard.attendanceCard(attendace)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(acard)]
                    });
                       await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Attendance Details', 'Marks Details', 'Fees Details', 'Switch Role']));
        return Dialog.EndOfTurn;
   
                case 'Marks Details':
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
                    console.log("=====>>>>")
                    const cgpa = { attachments: [], attachmentLayout: AttachmentLayoutTypes.Carousel };
                    for (var i = 0; i < 2; i++) {
                        var ccard = await parcard.cgpaCard(dbcgpa[i], dbcgpa.length)
                        var cgcard = await CardFactory.adaptiveCard(ccard)
                        cgpa.attachments.push(cgcard);
                    }
                    // await stepContext.context.sendActivity(cgpa);
                        var iccard = await parcard.imarkCard()
                        var igcard = await CardFactory.adaptiveCard(iccard)
                        cgpa.attachments.push(igcard);

                        await stepContext.context.sendActivity(cgpa)
                        await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Attendance Details', 'Marks Details', 'Fees Details', 'Switch Role']));
                        return Dialog.EndOfTurn;
   
       
        case 'Fees Details':
                    // console.log("====================Pending Fees")
                    // await stepContext.context.sendActivity("deposit");
                           var fees;
                    await db.studenFeesDetail('2018PUSSHBSAX06587').then(async result => {
                        // console.log("=>>>>>>>>",result)
                        fees = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    // console.log("=====>>>>", fees)
                    var pfcard = await parcard.pfCard(fees)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(pfcard)]
                    });
                       await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Attendance Details', 'Marks Details', 'Fees Details', 'Switch Role']));
                        return Dialog.EndOfTurn;
    case 'Switch Role':
                    return await stepContext.endDialog();

            }
        } catch (Exception) {
            console.log("error")
        }
        return Dialog.EndOfTurn;
    }
    async finallll(stepContext) {
        // console.log("----->>", stepContext.result)
        try {
            var res=stepContext.result;

         console.log("hey5",res)
            switch (res) {
                case 'Attendance Details':
                   var attendace;
                    await db.studentAttendanceDetail('2018PUSSHBSAX06587').then(async result => {
                        // console.log("=>>>>>>>>",result)
                        attendace = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    // console.log("=====>>>>", attendace)
                    var acard = await parcard.attendanceCard(attendace)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(acard)]
                    });
                       await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Attendance Details', 'Marks Details', 'Fees Details', 'Switch Role']));
        return Dialog.EndOfTurn;
   
                case 'Marks Details':
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
                    console.log("=====>>>>")
                    const cgpa = { attachments: [], attachmentLayout: AttachmentLayoutTypes.Carousel };
                    for (var i = 0; i < 2; i++) {
                        var ccard = await parcard.cgpaCard(dbcgpa[i], dbcgpa.length)
                        var cgcard = await CardFactory.adaptiveCard(ccard)
                        cgpa.attachments.push(cgcard);
                    }
                    // await stepContext.context.sendActivity(cgpa);
                        var iccard = await parcard.imarkCard()
                        var igcard = await CardFactory.adaptiveCard(iccard)
                        cgpa.attachments.push(igcard);

                        await stepContext.context.sendActivity(cgpa)
                        await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Attendance Details', 'Marks Details', 'Fees Details', 'Switch Role']));
                        return Dialog.EndOfTurn;
   
       
        case 'Fees Details':
                    // console.log("====================Pending Fees")
                    // await stepContext.context.sendActivity("deposit");
                           var fees;
                    await db.studenFeesDetail('2018PUSSHBSAX06587').then(async result => {
                        // console.log("=>>>>>>>>",result)
                        fees = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    // console.log("=====>>>>", fees)
                    var pfcard = await parcard.pfCard(fees)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(pfcard)]
                    });
                       await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Attendance Details', 'Marks Details', 'Fees Details', 'Switch Role']));
                        return Dialog.EndOfTurn;
    case 'Switch Role':
                    return await stepContext.endDialog();

            }
        } catch (Exception) {
            console.log("error")
        }
        return Dialog.EndOfTurn;
    }
    async finalllll(stepContext) {
        // console.log("----->>", stepContext.result)
        try {
            var res=stepContext.result;

         console.log("hey5",res)
            switch (res) {
                case 'Attendance Details':
                   var attendace;
                    await db.studentAttendanceDetail('2018PUSSHBSAX06587').then(async result => {
                        // console.log("=>>>>>>>>",result)
                        attendace = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    // console.log("=====>>>>", attendace)
                    var acard = await parcard.attendanceCard(attendace)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(acard)]
                    });
                       await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Attendance Details', 'Marks Details', 'Fees Details', 'Switch Role']));
        return Dialog.EndOfTurn;
   
                case 'Marks Details':
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
                    console.log("=====>>>>")
                    const cgpa = { attachments: [], attachmentLayout: AttachmentLayoutTypes.Carousel };
                    for (var i = 0; i < 2; i++) {
                        var ccard = await parcard.cgpaCard(dbcgpa[i], dbcgpa.length)
                        var cgcard = await CardFactory.adaptiveCard(ccard)
                        cgpa.attachments.push(cgcard);
                    }
                    // await stepContext.context.sendActivity(cgpa);
                        var iccard = await parcard.imarkCard()
                        var igcard = await CardFactory.adaptiveCard(iccard)
                        cgpa.attachments.push(igcard);

                        await stepContext.context.sendActivity(cgpa)
                        await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Attendance Details', 'Marks Details', 'Fees Details', 'Switch Role']));
                        return Dialog.EndOfTurn;
   
       
        case 'Fees Details':
                    // console.log("====================Pending Fees")
                    // await stepContext.context.sendActivity("deposit");
                           var fees;
                    await db.studenFeesDetail('2018PUSSHBSAX06587').then(async result => {
                        // console.log("=>>>>>>>>",result)
                        fees = result
                    }).catch(err => {
                        console.log("hereeeeeeee", err)
                    })
                    // console.log("=====>>>>", fees)
                    var pfcard = await parcard.pfCard(fees)
                    await stepContext.context.sendActivity({
                        attachments: [CardFactory.adaptiveCard(pfcard)]
                    });
                       await stepContext.context.sendActivity("Here are few suggesstions which you can try: ")
                        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Attendance Details', 'Marks Details', 'Fees Details', 'Switch Role']));
                        return Dialog.EndOfTurn;
    case 'Switch Role':
                    return await stepContext.endDialog();

            }
        } catch (Exception) {
            console.log("error")
        }
        return Dialog.EndOfTurn;
    }
}


module.exports.ParentDialog = ParentDialog;
module.exports.Par_Dialog = Par_Dialog;