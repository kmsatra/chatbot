// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

// import files
const { ComponentDialog, DialogSet, DialogTurnStatus, WaterfallDialog, ChoiceFactory, Dialog, NumberPrompt } = require('botbuilder-dialogs');
const {ActivityTypes} = require('botbuilder');
const { MgtDialog, Mgt_Dialog } = require('./MgtDialog');
const { Stu_Dialog, StudentDialog } = require('./StudentDialog')
const { Par_Dialog, ParentDialog } = require('./ParentDialog')
const { fcl_Dialog, FacultyDialog } = require('./FacultyDialog')
const { avgMarks_Dialog, avgMarksDialog } = require('./avgMarksDialog')

const NUMBER_PROMPT = 'NUMBER_PROMPT';
const MAIN_DIALOG = 'MAIN_DIALOG';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';
const USER_PROFILE_PROPERTY = 'USER_PROFILE_PROPERTY';

// Class create

class MainDialog extends ComponentDialog {
    constructor(userState) {
        super(MAIN_DIALOG);
        this.userState = userState;
        // this.userProfileAccessor = userState.createProperty(USER_PROFILE_PROPERTY);
        this.addDialog(new NumberPrompt(NUMBER_PROMPT));
        // this.addDialog(new TopLevelDialog());
        this.addDialog(new StudentDialog());
        this.addDialog(new avgMarksDialog());
        this.addDialog(new MgtDialog());
        this.addDialog(new FacultyDialog());
        this.addDialog(new ParentDialog());
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.userInput.bind(this),
            this.finalStep.bind(this)
        ]));

        this.initialDialogId = WATERFALL_DIALOG;
    }

    /**
     * The run method handles the incoming activity (in the form of a TurnContext) and passes it through the dialog system.
     * If no dialog is active, it will start the default dialog.
     * @param {*} turnContext
     * @param {*} accessor
     */
    async run(turnContext, accessor) {
        const dialogSet = new DialogSet(accessor);
        dialogSet.add(this);

        const dialogContext = await dialogSet.createContext(turnContext);
        const results = await dialogContext.continueDialog();
        try {
            if (results.status === DialogTurnStatus.empty) {
                await dialogContext.beginDialog(this.id);
            }
        } catch (except) {
            console.log("error 9", except)
        }

    }
// waterfall start step 1
    async initialStep(stepContext) {
        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
        await stepContext.context.sendActivity("Please choose a role to proceed:")
        await stepContext.context.sendActivity(ChoiceFactory.heroCard(['Management','Faculty', 'Student', 'Parent']));
        return Dialog.EndOfTurn;
    }

// waterfall step 2
    async userInput(stepContext) {
         console.log("Second step of main dialog");
        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
        switch (stepContext.result) {
            case 'Management':
                await stepContext.beginDialog(Mgt_Dialog);
                return Dialog.EndOfTurn;
            case 'Student':
                await stepContext.beginDialog(Stu_Dialog);
                return Dialog.EndOfTurn;
            case 'Parent':
                await stepContext.beginDialog(Par_Dialog);
                return Dialog.EndOfTurn;
            case 'Faculty':
                await stepContext.beginDialog(fcl_Dialog);
                return Dialog.EndOfTurn;
            default:
                return await stepContext.beginDialog(WATERFALL_DIALOG);
        }
    }

//waterfall step 3
    async finalStep(stepContext) {
            console.log("3rd step of main dialog")
     }
}

module.exports.MainDialog = MainDialog;
module.exports.MAIN_DIALOG = MAIN_DIALOG;
