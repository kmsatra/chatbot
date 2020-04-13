exports.CampuswisefeedetailCard = async (data) => {
    var card = 
    {
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        "type": "AdaptiveCard",
        "version": "1.0",
        "body": [
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
                                        "type": "Image",             "style": "Person",
                                        "altText": "",
                                        "url": "https://upload.wikimedia.org/wikipedia/commons/6/61/Poornima_University_Logo.jpg",
                                        "horizontalAlignment": "Left",
                                        "size": "Medium"
                                    }
                                ]
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "Poornima University",
                                        "horizontalAlignment": "Center",
                                        "wrap": true,
                                        "weight": "Bolder",
                                        "size": "Large"
                                    },
                                    {
                                        "type": "TextBlock",
                                        "text": "2020 - 2021",
                                        "horizontalAlignment": "Center"
                                    }
                                ],
                                "verticalContentAlignment": "Center",
                                "seperator" : true
                            },
                            {
                                "type": "Column",
                                "width": "auto",
                                "items": [
                                    {
                                        "type": "Image",             "style": "Person",
                                        "altText": "",
                                        "url": "https://media-exp1.licdn.com/dms/image/C5103AQFlCq3C_ph4xQ/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=jFNpcmZDaotsqHrT1QLpZTzX6g67jJi8DHrxtIb8yrI",
                                        "size": "Medium",
                                        "horizontalAlignment": "Right"
                                    }
                                ],
                                "horizontalAlignment": "Center"
                            }
                        ]
                    }
                ],
                "spacing": "None"
            },
                {
            "type": "Container",
            "items": [
                {
                    "type": "TextBlock",
                    "text": "Campuswise Fee Detail",
                    "horizontalAlignment": "Center",
                    "color": "Accent",
                    "weight": "Bolder",
                    "size": "Medium"
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
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Campus Name",
                                    "wrap": true,
                                    "horizontalAlignment": "Left",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator": true
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Total Fee",
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator": true
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Deposited Fee",
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator": true
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Pending Fee",
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator": true
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "",
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator": true
                        }
                    ]
                }
            ]
        },
    
        ]
    }
    for (var i = 0; i < data.length; i++) {
        card['body'].push({
            "type": "Container",
            "selectAction": {
                "title": "Maunfacturer",
                "type": "Action.Submit",
                "data": {
                    "x": `${data[i].recordId},${data[i].campusName}`
                }
            },
            "items": [
                {
                    "type": "ColumnSet",
                    "columns": [
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": `${data[i].campusName}`,
                                    "wrap": true,
                                    "horizontalAlignment": "Left"
                                }
                            ],
                            "seperator" : true,
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "10,00,000",
                                    "wrap": true,
                                    "horizontalAlignment": "Left"
                                }
                            ],
                            "seperator": true,
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center"
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "6,00,000",
                                    "wrap": true,
                                    "horizontalAlignment": "Center"
                                }
                            ],
                            "seperator": true,
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center"
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "4,00,000",
                                    "wrap": true,
                                    "horizontalAlignment": "Center"
                                }
                            ],
                            "seperator": true,
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center"
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Details >",
                                    "color": "Accent",
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator" : true
                        }
                    ]
                }
            ]
        })
    }

    return card;
}
        
exports.schoolwisefeedetails = async (data, name) => {
    var card = {
        "type": "AdaptiveCard",
        "version": "1.0",
        "body": [
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
                                        "type": "Image",             "style": "Person",
                                        "altText": "",
                                        "url": "https://upload.wikimedia.org/wikipedia/commons/6/61/Poornima_University_Logo.jpg",
                                        "horizontalAlignment": "Left",
                                        "size": "Medium"
                                    }
                                ]
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "Poornima University",
                                        "horizontalAlignment": "Center",
                                        "wrap": true,
                                        "weight": "Bolder",
                                        "size": "Large"
                                    },
                                    {
                                        "type": "TextBlock",
                                        "text": "2020 - 2021",
                                        "horizontalAlignment": "Center"
                                    }
                                ],
                                "verticalContentAlignment": "Center",
                                "seperator" : true
                            },
                            {
                                "type": "Column",
                                "width": "auto",
                                "items": [
                                    {
                                        "type": "Image",             "style": "Person",
                                        "altText": "",
                                        "url": "https://media-exp1.licdn.com/dms/image/C5103AQFlCq3C_ph4xQ/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=jFNpcmZDaotsqHrT1QLpZTzX6g67jJi8DHrxtIb8yrI",
                                        "size": "Medium",
                                        "horizontalAlignment": "Right"
                                    }
                                ],
                                "horizontalAlignment": "Center"
                            }
                        ]
                    }
                ],
                "spacing": "None"
            },
            {
                "type": "Container",
                "items": [
                    {
                        "type": "TextBlock",
                        "text": `${name} - Fees Detail`,
                        "horizontalAlignment": "Center",
                        "color": "Accent",
                        "weight": "Bolder",
                        "size": "Medium"
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
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "School Name",
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator": true
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Total Fee",
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator": true
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Deposited Fee",
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator": true
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Pending Fee",
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator": true
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "",
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator": true
                        }

                        ]
                    }
                ]
            }
        ],
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json"
    }
    for (var i = 0; i < data.length; i++) {
        card['body'].push({
            "type": "Container",
            "selectAction": {
                "title": "Maunfacturer",
                "type": "Action.Submit",
                "data": {
                    "x": `${data[i].recordId},${data[i].schoolName}`
                }
            },
            "items": [
                {
                    "type": "ColumnSet",
                    "columns": [
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": `${data[i].schoolName}`,
                                    "wrap": true,
                                    "horizontalAlignment": "Left"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator" : true
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "10,00,000",
                                    "wrap": true,
                                    "horizontalAlignment": "Left"
                                }
                            ],
                            "seperator": true,
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center"
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "6,00,000",
                                    "wrap": true,
                                    "horizontalAlignment": "Center"
                                }
                            ],
                            "seperator": true,
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center"
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "4,00,000",
                                    "wrap": true,
                                    "horizontalAlignment": "Center"
                                }
                            ],
                            "seperator": true,
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center"
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Details >",
                                    "color": "Accent",
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator" : true
                        }
                    ]
                }
            ]
        })
    }

    return card;
}

exports.deptwisefeedetails = async (data, name) => {
    var card = {
        "type": "AdaptiveCard",
        "version": "1.0",
        "body": [
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
                                        "type": "Image",             "style": "Person",
                                        "altText": "",
                                        "url": "https://upload.wikimedia.org/wikipedia/commons/6/61/Poornima_University_Logo.jpg",
                                        "horizontalAlignment": "Left",
                                        "size": "Medium"
                                    }
                                ]
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "Poornima University",
                                        "horizontalAlignment": "Center",
                                        "wrap": true,
                                        "weight": "Bolder",
                                        "size": "Large"
                                    },
                                    {
                                        "type": "TextBlock",
                                        "text": "2020 - 2021",
                                        "horizontalAlignment": "Center"
                                    }
                                ],
                                "verticalContentAlignment": "Center",
                                "seperator" : true
                            },
                            {
                                "type": "Column",
                                "width": "auto",
                                "items": [
                                    {
                                        "type": "Image",             "style": "Person",
                                        "altText": "",
                                        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCH8yZBluzMlWKaXD7tTgMJllGv2GAqg_SJXPpr0tIeD-IjycVJQ&s",
                                        "size": "Medium",
                                        "horizontalAlignment": "Right"
                                    }
                                ],
                                "horizontalAlignment": "Center"
                            }
                        ]
                    }
                ],
                "spacing": "None"
            },
            {
                "type": "Container",
                "items": [
                    {
                        "type": "TextBlock",
                        "text": `${name} - Fees Detail`,
                        "horizontalAlignment": "Center",
                        "color": "Accent",
                        "weight": "Bolder",
                        "size": "Medium"
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
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "Department Name",
                                        "wrap": true,
                                        "horizontalAlignment": "Left",
                                        "weight": "Bolder"
                                    }
                                ],
                                "horizontalAlignment": "Center",
                                "verticalContentAlignment": "Center",
                                "seperator" : true
                            },
                            {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Total Fee",
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator": true
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Deposited Fee",
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator": true
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Pending Fee",
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator": true
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "",
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator": true
                        }

                        ]
                    }
                ]
            }
        ],
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json"
    }
    for (var i = 0; i < data.length; i++) {
        card['body'].push({
            "type": "Container",
            "selectAction": {
                "title": "Maunfacturer",
                "type": "Action.Submit",
                "data": {
                    "x": `${data[i].recordId},${data[i].departmentName}`
                }
            },
            "items": [
                {
                    "type": "ColumnSet",
                    "columns": [
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": `${data[i].departmentName}`,
                                    "wrap": true,
                                    "horizontalAlignment": "Left"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator" : true
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "10,00,000",
                                    "wrap": true,
                                    "horizontalAlignment": "Left"
                                }
                            ],
                            "seperator": true,
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center"
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "6,00,000",
                                    "wrap": true,
                                    "horizontalAlignment": "Center"
                                }
                            ],
                            "seperator": true,
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center"
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "4,00,000",
                                    "wrap": true,
                                    "horizontalAlignment": "Center"
                                }
                            ],
                            "seperator": true,
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center"
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Details >",
                                    "color": "Accent",
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator" : true
                        }
                    ]
                }
            ]
        })
    }
    return card
}

exports.semwisefeedetails= async (data, name) => {
    var card = {
        "type": "AdaptiveCard",
        "body": [
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
                                        "type": "Image",             "style": "Person",
                                        "altText": "",
                                        "url": "https://upload.wikimedia.org/wikipedia/commons/6/61/Poornima_University_Logo.jpg",
                                        "horizontalAlignment": "Left",
                                        "size": "Medium"
                                    }
                                ]
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "Poornima University",
                                        "horizontalAlignment": "Center",
                                        "wrap": true,
                                        "weight": "Bolder",
                                        "size": "Large"
                                    },
                                    {
                                        "type": "TextBlock",
                                        "text": "2020 - 2021",
                                        "horizontalAlignment": "Center"
                                    }
                                ],
                                "verticalContentAlignment": "Center",
                                "seperator" : true
                            },
                            {
                                "type": "Column",
                                "width": "auto",
                                "items": [
                                    {
                                        "type": "Image",             "style": "Person",
                                        "altText": "",
                                        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCH8yZBluzMlWKaXD7tTgMJllGv2GAqg_SJXPpr0tIeD-IjycVJQ&s",
                                        "size": "Medium",
                                        "horizontalAlignment": "Right"
                                    }
                                ],
                                "horizontalAlignment": "Center"
                            }
                        ]
                    }
                ],
                "spacing": "None"
            },
            {
                "type": "Container",
                "items": [
                    {
                        "type": "TextBlock",
                        "text": `${name} - Fees Detail`,
                        "horizontalAlignment": "Center",
                        "color": "Accent",
                        "weight": "Bolder",
                        "size": "Medium"
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
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "Semester",
                                        "wrap": true,
                                        "horizontalAlignment": "Center",
                                        "weight": "Bolder"
                                    }
                                ],
                                "horizontalAlignment": "Center",
                                "verticalContentAlignment": "Center",
                                "seperator" : true
                            },
                            {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Total Fee",
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator": true
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Deposited Fee",
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator": true
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Pending Fee",
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator": true
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "",
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator": true
                        }
                        ]
                    }
                ]
            }
        ],
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        "version": "1.0"
    }
    for (var i = 0; i < data.length; i++) {
        card['body'].push({
            "type": "Container",
            "selectAction": {
                "title": "Maunfacturer",
                "type": "Action.Submit",
                "data": {
                    "x": `${data[i].recordId},${data[i].semester}`
                }
            },
            "items": [
                {
                    "type": "ColumnSet",
                    "columns": [
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": `${data[i].semester}`,
                                    "wrap": true,
                                    "horizontalAlignment": "Center"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator" : true
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "10,00,000",
                                    "wrap": true,
                                    "horizontalAlignment": "Left"
                                }
                            ],
                            "seperator": true,
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center"
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "6,00,000",
                                    "wrap": true,
                                    "horizontalAlignment": "Center"
                                }
                            ],
                            "seperator": true,
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center"
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "4,00,000",
                                    "wrap": true,
                                    "horizontalAlignment": "Center"
                                }
                            ],
                            "seperator": true,
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center"
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Details >",
                                    "color": "Accent",
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator" : true
                        }
                    ]
                }
            ]
        })
    }
    return card;
}

exports.classwisefeedetails = async (data, name) => {
    var card = {
        "type": "AdaptiveCard",
        "body": [
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
                                        "type": "Image",             "style": "Person",
                                        "altText": "",
                                        "url": "https://upload.wikimedia.org/wikipedia/commons/6/61/Poornima_University_Logo.jpg",
                                        "horizontalAlignment": "Left",
                                        "size": "Medium"
                                    }
                                ]
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "Poornima University",
                                        "horizontalAlignment": "Center",
                                        "wrap": true,
                                        "weight": "Bolder",
                                        "size": "Large"
                                    },
                                    {
                                        "type": "TextBlock",
                                        "text": "2020 - 2021",
                                        "horizontalAlignment": "Center"
                                    }
                                ],
                                "verticalContentAlignment": "Center",
                                "seperator" : true
                            },
                            {
                                "type": "Column",
                                "width": "auto",
                                "items": [
                                    {
                                        "type": "Image",             "style": "Person",
                                        "altText": "",
                                        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCH8yZBluzMlWKaXD7tTgMJllGv2GAqg_SJXPpr0tIeD-IjycVJQ&s",
                                        "size": "Medium",
                                        "horizontalAlignment": "Right"
                                    }
                                ],
                                "horizontalAlignment": "Center"
                            }
                        ]
                    }
                ],
                "spacing": "None"
            },
            {
                "type": "Container",
                "items": [
                    {
                        "type": "TextBlock",
                        "text": `${name} semester - Fees Detail`,
                        "horizontalAlignment": "Center",
                        "color": "Accent",
                        "weight": "Bolder",
                        "size": "Medium"
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
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "Class",
                                        "wrap": true,
                                        "horizontalAlignment": "Center",
                                        "weight": "Bolder"
                                    }
                                ],
                                "horizontalAlignment": "Center",
                                "verticalContentAlignment": "Center",
                                "seperator" : true
                            },
                            {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Total Fee",
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator": true
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Deposited Fee",
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator": true
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Pending Fee",
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator": true
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "",
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator": true
                        }
                        ]
                    }
                ]
            }
        ],
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        "version": "1.0"
    }
    for (var i = 0; i < data.length; i++) {
        card['body'].push({
            "type": "Container",
            "selectAction": {
                "title": "Maunfacturer",
                "type": "Action.Submit",
                "data": {
                    "x": `${data[i].recordId},${data[i].class}`
                }
            },
            "items": [
                {
                    "type": "ColumnSet",
                    "columns": [
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": `${data[i].class}`,
                                    "wrap": true,
                                    "horizontalAlignment": "Center"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator" : true
                        },
{
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "10,00,000",
                                    "wrap": true,
                                    "horizontalAlignment": "Left"
                                }
                            ],
                            "seperator": true,
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center"
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "6,00,000",
                                    "wrap": true,
                                    "horizontalAlignment": "Center"
                                }
                            ],
                            "seperator": true,
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center"
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "4,00,000",
                                    "wrap": true,
                                    "horizontalAlignment": "Center"
                                }
                            ],
                            "seperator": true,
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center"
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Details >",
                                    "color": "Accent",
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator" : true
                        }                    ]
                }
            ]
        })
    }
    return card;

}