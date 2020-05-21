exports.PersonaServiceCard = async (data) => {
    var personaServiceCard= {
        "type": "AdaptiveCard",
        "version": "1.0",
        "body": [
            {
                "type": "TextBlock",
                "text": "Please select a persona",
                "horizontalAlignment": "Left",
                "weight": "Bolder"
            },
            {
                "type": "Container",
                "items": [
                    {
                        "type": "ColumnSet",
                        "columns": [
                            {
                                "type": "Column",
                                "width": "auto",
                                "items": [
                                    {
                                        "type": "Image",
                                        "altText": "",
                                        "url": "https://cdn4.iconfinder.com/data/icons/people-avatar-1-2/512/29-512.png",
                                        "size": "Small",
                                        "style": "Person",
                                        "backgroundColor": "white"
                                    }
                                ],
                                "verticalContentAlignment": "Center"
                            },
                            {
                                "type": "Column",
                                "width": "auto",
                                "items": [
                                    {
                                        "type": "ActionSet",
                                        "actions": [
                                            {
                                                "type": "Action.Submit",
                                                "title": "Management",
                                                "data":{
                                                    "persona":"Management"
                                                },
                                                "style": "positive"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "Container",
                "items": [
                    {
                        "type": "ColumnSet",
                        "columns": [
                            {
                                "type": "Column",
                                "width": "auto",
                                "items": [
                                    {
                                        "type": "Image",
                                        "altText": "",
                                        "url": "https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png",
                                        "size": "Small",
                                        "style": "Person",
                                        "backgroundColor": "white"
                                    }
                                ],
                                "verticalContentAlignment": "Center"
                            },
                            {
                                "type": "Column",
                                "width": "auto",
                                "items": [
                                    {
                                        "type": "ActionSet",
                                        "actions": [
                                            {
                                                "type": "Action.Submit",
                                                "title": "Faculty",
                                                "data":{
                                                    "persona":"Faculty"
                                                },
                                                "style": "positive"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "Container",
                "items": [
                    {
                        "type": "ColumnSet",
                        "columns": [
                            {
                                "type": "Column",
                                "width": "auto",
                                "items": [
                                    {
                                        "type": "Image",
                                        "altText": "",
                                        "url": "https://cdn4.iconfinder.com/data/icons/professions-1-1/128/25-512.png",
                                        "size": "Small",
                                        "style": "Person",
                                        "backgroundColor": "white"
                                    }
                                ],
                                "verticalContentAlignment": "Center"
                            },
                            {
                                "type": "Column",
                                "width": "auto",
                                "items": [
                                    {
                                        "type": "ActionSet",
                                        "actions": [
                                            {
                                                "type": "Action.Submit",
                                                "title": "Student",
                                                "data":{
                                                    "persona":"Student"
                                                },
                                                "style": "positive"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "Container",
                "items": [
                    {
                        "type": "ColumnSet",
                        "columns": [
                            {
                                "type": "Column",
                                "width": "auto",
                                "items": [
                                    {
                                        "type": "Image",
                                        "altText": "",
                                        "url": "https://img.pngio.com/parent-directory-avatar-2png-avatar-png-256_256.png",
                                        "size": "Small",
                                        "style": "Person",
                                        "backgroundColor": "white"
                                    }
                                ],
                                "verticalContentAlignment": "Center"
                            },
                            {
                                "type": "Column",
                                "width": "auto",
                                "items": [
                                    {
                                        "type": "ActionSet",
                                        "actions": [
                                            {
                                                "type": "Action.Submit",
                                                "title": "Parent",
                                                "data":{
                                                    "persona":"Parent"
                                                },
                                                "style": "positive"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json"
    }
    return personaServiceCard
}
   
exports.parServiceCard = async (data) => {
 var parServiceCard= {
    "type": "AdaptiveCard",
    "version": "1.0",
    "body": [
        {
            "type": "TextBlock",
            "text": "Here are few suggesstions which you can try:",
            "horizontalAlignment": "Left",
            "weight": "Bolder"
        },
        {
            "type": "ColumnSet",
            "columns": [
                {
                    "type": "Column",
                    "width": "auto",
                    "items": [
                        {
                            "type": "ActionSet",
                            "actions": [
                                {
                                    "type": "Action.Submit",
                                    "title": "Attendance Details",
                                    "wrap": "true",
                                    "data": {
                                        "x": "Attendance Details"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Column",
                    "width": "auto",
                    "items": [
                        {
                            "type": "ActionSet",
                            "actions": [
                                {
                                    "type": "Action.Submit",
                                    "title": "Marks Details",
                                    "wrap": true,
                                    "data": {
                                        "x": "Marks Details"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Column",
                    "width": "auto",
                    "items": [
                        {
                            "type": "ActionSet",
                            "actions": [
                                {
                                    "type": "Action.Submit",
                                    "title": "Fees Details",
                                    "wrap": true,
                                    "data": {
                                        "x": "Fees Details"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "type": "ColumnSet",
            "columns": [
                {
                    "type": "Column",
                    "width": "auto",
                    "items": [
                        {
                            "type": "ActionSet",
                            "actions": [
                                {
                                    "type": "Action.Submit",
                                    "title": "Switch Role",
                                    "wrap": true,
                                    "data": {
                                        "x": "Switch Role"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json"
    }
    return parServiceCard
}

exports.stuServiceCard = async (data) => {
 var stuServiceCard= {
    "type": "AdaptiveCard",
    "version": "1.0",
    "body": [
        {
            "type": "TextBlock",
            "text": "Here are few suggesstions which you can try:",
            "horizontalAlignment": "Left",
            "weight": "Bolder"
        },
        {
            "type": "ColumnSet",
            "columns": [
                {
                    "type": "Column",
                    "width": "auto",
                    "items": [
                        {
                            "type": "ActionSet",
                            "actions": [
                                {
                                    "type": "Action.Submit",
                                    "title": "Attendance Details",
                                    "wrap": "true",
                                    "data": {
                                        "x": "Attendance Details"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Column",
                    "width": "auto",
                    "items": [
                        {
                            "type": "ActionSet",
                            "actions": [
                                {
                                    "type": "Action.Submit",
                                    "title": "Marks Details",
                                    "wrap": true,
                                    "data": {
                                        "x": "Marks Details"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Column",
                    "width": "auto",
                    "items": [
                        {
                            "type": "ActionSet",
                            "actions": [
                                {
                                    "type": "Action.Submit",
                                    "title": "Switch Role",
                                    "wrap": true,
                                    "data": {
                                        "x": "Switch Role"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json"
    }
    return stuServiceCard
}

exports.facServiceCard = async (data) => {
 var facServiceCard= {
    "type": "AdaptiveCard",
    "version": "1.0",
    "body": [
        {
            "type": "TextBlock",
            "text": "Here are few suggesstions which you can try:",
            "horizontalAlignment": "Left",
            "weight": "Bolder"
        },
        {
            "type": "ColumnSet",
            "columns": [
                {
                    "type": "Column",
                    "width": "auto",
                    "items": [
                        {
                            "type": "ActionSet",
                            "actions": [
                                {
                                    "type": "Action.Submit",
                                    "title": "Class Detail",
                                    "wrap": "true",
                                    "data": {
                                        "x": "Class Detail"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Column",
                    "width": "auto",
                    "items": [
                        {
                            "type": "ActionSet",
                            "actions": [
                                {
                                    "type": "Action.Submit",
                                    "title": "Leave Detail",
                                    "wrap": true,
                                    "data": {
                                        "x": "Leave Detail"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Column",
                    "width": "auto",
                    "items": [
                        {
                            "type": "ActionSet",
                            "actions": [
                                {
                                    "type": "Action.Submit",
                                    "title": "Salary Detail",
                                    "wrap": true,
                                    "data": {
                                        "x": "Salary Detail"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "type": "ColumnSet",
            "columns": [
                {
                    "type": "Column",
                    "width": "auto",
                    "items": [
                        {
                            "type": "ActionSet",
                            "actions": [
                                {
                                    "type": "Action.Submit",
                                    "title": "Apply For Leave",
                                    "wrap": true,
                                    "data": {
                                        "x": "Apply For Leave"
                                    }
                                }
                            ]
                        }
                    ]
                },{
                    "type": "Column",
                    "width": "auto",
                    "items": [
                        {
                            "type": "ActionSet",
                            "actions": [
                                {
                                    "type": "Action.Submit",
                                    "title": "Switch Role",
                                    "wrap": true,
                                    "data": {
                                        "x": "Switch Role"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json"
    }
    return facServiceCard
}

exports.mgtServiceCard = async (data) => {
 var mgtServiceCard= {
    "type": "AdaptiveCard",
    "version": "1.0",
    "body": [
        {
            "type": "TextBlock",
            "text": "Here are few suggesstions which you can try:",
            "horizontalAlignment": "Left",
            "weight": "Bolder"
        },
        {
            "type": "ColumnSet",
            "columns": [
                {
                    "type": "Column",
                    "width": "auto",
                    "items": [
                        {
                            "type": "ActionSet",
                            "actions": [
                                {
                                    "type": "Action.Submit",
                                    "title": "Fee Details",
                                    "wrap": "true",
                                    "data": {
                                        "x": "Fee Details"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Column",
                    "width": "auto",
                    "items": [
                        {
                            "type": "ActionSet",
                            "actions": [
                                {
                                    "type": "Action.Submit",
                                    "title": "Average Attendance",
                                    "wrap": true,
                                    "data": {
                                        "x": "Average Attendance"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Column",
                    "width": "auto",
                    "items": [
                        {
                            "type": "ActionSet",
                            "actions": [
                                {
                                    "type": "Action.Submit",
                                    "title": "Average Marks",
                                    "wrap": true,
                                    "data": {
                                        "x": "Average Marks"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "type": "ColumnSet",
            "columns": [
                {
                    "type": "Column",
                    "width": "auto",
                    "items": [
                        {
                            "type": "ActionSet",
                            "actions": [
                                {
                                    "type": "Action.Submit",
                                    "title": "Switch Role",
                                    "wrap": true,
                                    "data": {
                                        "x": "Switch Role"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json"
    }
    return mgtServiceCard
}