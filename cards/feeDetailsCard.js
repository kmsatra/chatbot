exports.CampuswisefeedetailCard = async (data) => {
    var card = {
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
                                    "type": "Image",
                                    "style": "Person",
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
                            "seperator": true
                        },
                        {
                            "type": "Column",
                            "width": "auto",
                            "items": [
                                {
                                    "type": "Image",
                                    "style": "Person",
                                    "altText": "",
                                    "url": "https://w0.pngwave.com/png/129/94/computer-icons-avatar-icon-design-male-teacher-png-clip-art-thumbnail.png",
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
                                    "type": "Image",
                                    "style": "Person",
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
                            "seperator": true
                        },
                        {
                            "type": "Column",
                            "width": "auto",
                            "items": [
                                {
                                    "type": "Image",
                                    "style": "Person",
                                    "altText": "",
                                    "url": "https://w0.pngwave.com/png/129/94/computer-icons-avatar-icon-design-male-teacher-png-clip-art-thumbnail.png",
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
                                    "type": "Image",
                                    "style": "Person",
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
                            "seperator": true
                        },
                        {
                            "type": "Column",
                            "width": "auto",
                            "items": [
                                {
                                    "type": "Image",
                                    "style": "Person",
                                    "altText": "",
                                    "url": "https://w0.pngwave.com/png/129/94/computer-icons-avatar-icon-design-male-teacher-png-clip-art-thumbnail.png",
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
                    "x": `${data[i].DepartmentName}`
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
    var card ={
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
                                    "type": "Image",
                                    "style": "Person",
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
                            "seperator": true
                        },
                        {
                            "type": "Column",
                            "width": "auto",
                            "items": [
                                {
                                    "type": "Image",
                                    "style": "Person",
                                    "altText": "",
                                    "url": "https://w0.pngwave.com/png/129/94/computer-icons-avatar-icon-design-male-teacher-png-clip-art-thumbnail.png",
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
                        "text": `${deptname} - Fees Detail`,
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
                                        "url": "https://w0.pngwave.com/png/129/94/computer-icons-avatar-icon-design-male-teacher-png-clip-art-thumbnail.png",
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
                                        "url": "https://w0.pngwave.com/png/129/94/computer-icons-avatar-icon-design-male-teacher-png-clip-art-thumbnail.png",
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
                        "text": ` Branch ${deptname} Section ${name} - Fee Details`,
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
                        },
                                
                    ]
                    
                }
            ],
        
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
                                        "url": "https://cdn4.iconfinder.com/data/icons/professions-1-1/128/25-512.png",
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
                            "width": "auto",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Student Code :",
                                    "weight": "Bolder"
                                },
                                {
                                    "type": "ColumnSet",
                                    "columns": [
                                        {
                                            "type": "Column",
                                            "width": "stretch",
                                            "items": [
                                                {
                                                    "type": "TextBlock",
                                                    "text": "Student Name:",
                                                    "weight": "Bolder"
                                                }
                                            ]
                                        }
                                    ]
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
                                    "text": "18MCAL036"
                                },
                                {
                                    "type": "ColumnSet",
                                    "columns": [
                                        {
                                            "type": "Column",
                                            "width": "stretch",
                                            "items": [
                                                {
                                                    "type": "TextBlock",
                                                    "text": "KM17"
                                                }
                                            ]
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
        ],
        
                    "actions": [
            {
                "type": "Action.Submit",
                "title": "Talk to the Parent",
                "data": {
                    "x": "Talk"
                }
            }
         ],
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
                                    "text": "0011",
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
                                    "text": "KM17",
                                    "wrap": true,
                                    "horizontalAlignment": "Right"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator" : true
                        },
                    ]
                }
            ],
        
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
