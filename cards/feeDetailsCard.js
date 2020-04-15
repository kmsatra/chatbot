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
                    "x": `${data[i].recordId},${data[i].CampusName}`
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
                                    "text": `${data[i].CampusName}`,
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
                                    "text": `${data[i].TotalFee}`,
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
                                    "text": `${data[i].TotalFeeDeposited }`,
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
                                    "text": `${data[i].TotalFeePending }`,
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
                                    "type": "Image",
                                    "altText": "",
                                    "url": "https://png.pngtree.com/svg/20170919/2551b1199e.png",
                                    "height": "stretch",
                                    "size": "Small",
                                    "width": "21px",
                                    "horizontalAlignment": "Center"
                                }
                                    ]
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
                    "x": `${data[i].recordId},${data[i].SchoolName}`
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
                                    "text": `${data[i].SchoolName}`,
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
                                    "text": `${data[i].TotalFee}`,
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
                                    "text": `${data[i].TotalFeeDeposited}`,
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
                                    "text": `${data[i].TotalFeePending}`,
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
                                    "type": "Image",
                                    "altText": "",
                                    "url": "https://png.pngtree.com/svg/20170919/2551b1199e.png",
                                    "height": "stretch",
                                    "size": "Small",
                                    "width": "21px",
                                    "horizontalAlignment": "Center"
                                }
                                    ]
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
                    "x": `${data[i].recordId},${data[i].DepartmentName}`
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
                                    "text": `${data[i].DepartmentName}`,
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
                                    "text": `${data[i].TotalFee}`,
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
                                    "text": `${data[i].TotalFeeDeposited}`,
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
                                    "text": `${data[i].TotalFeePending}`,
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
                                    "type": "Image",
                                    "altText": "",
                                    "url": "https://png.pngtree.com/svg/20170919/2551b1199e.png",
                                    "height": "stretch",
                                    "size": "Small",
                                    "width": "21px",
                                    "horizontalAlignment": "Center"
                                }
                                    ]
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
                    "x": `${data[i].recordId},${data[i].SemesterName}`
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
                                    "text": `${data[i].SemesterName}`,
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
                                    "text": `${data[i].TotalFee}`,
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
                                    "text": `${data[i].TotalFeeDeposited}`,
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
                                    "text": `${data[i].TotalFeePending}`,
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
                                    "type": "Image",
                                    "altText": "",
                                    "url": "https://png.pngtree.com/svg/20170919/2551b1199e.png",
                                    "height": "stretch",
                                    "size": "Small",
                                    "width": "21px",
                                    "horizontalAlignment": "Center"
                                }
                                    ]
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
                    "x": `${data[i].recordId},${data[i].ClassName}`
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
                                    "text": `${data[i].ClassName}`,
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
                                    "text": `${data[i].TotalFee}`,
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
                                    "text": `${data[i].TotalFeeDeposited}`,
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
                                    "text": `${data[i].TotalFeePending}`,
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
                                    "type": "Image",
                                    "altText": "",
                                    "url": "https://png.pngtree.com/svg/20170919/2551b1199e.png",
                                    "height": "stretch",
                                    "size": "Small",
                                    "width": "21px",
                                    "horizontalAlignment": "Center"
                                }
                                    ]
                        }
                        ]
                }
            ]
        })
    }
    return card;

}

exports.sectionwisefeedetails = async (data, name) => {
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
                        "text": `Section ${name} - Fee Details`,
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
                                        "text": "Student Name",
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
                    "x": `${data[i].enrollmentNo},${data[i].StudentName}`
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
                                    "text": `${data[i].StudentName}`,
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
                                    "text": `${data[i].TotalFee}`,
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
                                    "text": `${data[i].TotalFeeDeposited}`,
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
                                    "text": `${data[i].TotalFeePending}`,
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
                                    "type": "Image",
                                    "altText": "",
                                    "url": "https://png.pngtree.com/svg/20170919/2551b1199e.png",
                                    "height": "stretch",
                                    "size": "Small",
                                    "width": "21px",
                                    "horizontalAlignment": "Center"
                                }
                                    ]
                        }
                        
                    ]
                }
            ]
        })
    }
    return card
}

exports.Studentfeedetails = async (data) => {
    var studentfee = {
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        "version": "1.0",
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
                                        "url": "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQzMjgyNDgwNjIxODIzNTU5/jennifer-lawrence_gettyimages-626382596jpg.jpg",
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
                        "text": "Fees Details - Sem III",
                        "horizontalAlignment": "Center",
                        "color": "Accent",
                        "size": "Medium",
                        "weight": "Bolder"
                    }
                ],
                "spacing": "None"
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
                                        "text": "Fees Type",
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
                                        "text": "Total Amount",
                                        "wrap": true,
                                        "horizontalAlignment": "Right",
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
                                        "text": "Pending Amount",
                                        "wrap": true,
                                        "horizontalAlignment": "Right",
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
                                        "text": "Last day of Payment",
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
                                        "text": "Fine (After last date)",
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
            }
        ]
    }
    for (let i = 0; i < data.recordset.length; i++) {
        var color = "Default"
        d = new Date();
        // console.log( data.recordset[i].lastDate.toLocaleDateString(),"--", d.toLocaleDateString());
        if (parseInt(data.recordset[i].pendingAmount) > 0 && (data.recordset[i].lastDate.toLocaleDateString() < d.toLocaleDateString())) {
            color = "Attention"
        }
        studentfee['body'].push({
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
                                    "text": data.recordset[i].feesType,
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
                                    "text": "₹ " + data.recordset[i].totalAmount,
                                    "wrap": true,
                                    "horizontalAlignment": "Right"
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
                                    "text": `₹ ${data.recordset[i].pendingAmount}`,
                                    "wrap": true,
                                    "color": `${color}`,
                                    "horizontalAlignment": "Right"
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
                                    "text": data.recordset[i].lastDate.toLocaleDateString(),
                                    "wrap": true,
                                    "color": `${color}`,
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
                                    "text": `₹ ${data.recordset[i].penalty}`,
                                    "wrap": true,
                                    "color": `${color}`,
                                    "horizontalAlignment": "Right"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator" : true
                        }
                    ]
                }
            ]

        }
        )
    }
    return studentfee
}
