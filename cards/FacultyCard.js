exports.fclCard = async (data) => {
    var fcldetail ={
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
                    "text": "Faculty Detail",
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
                                    "text": "EmployeeCode",
                                    "weight": "Bolder",
                                    "horizontalAlignment": "Left",
                                    "wrap": true
                              
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                          
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Name",
                                    "weight": "Bolder",
                                    "horizontalAlignment": "Center"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Designation",
                                    "separator": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Department",
                                    "weight": "Bolder",
                                    "horizontalAlignment": "Center"
                                }
                            ],
                            "verticalContentAlignment": "Center",
                            
                            "horizontalAlignment": "Center"
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
                                        "text": "EMP 0017",
                                        "horizontalAlignment": "Center",
                                        "wrap": true
                                    }
                                ],
                                "horizontalAlignment": "Center",
                                "verticalContentAlignment": "Center",
                              
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": data.recordset[0].name,
                                        "horizontalAlignment": "Center",
                                        "wrap": true
                                    }
                                ],
                                "horizontalAlignment": "Center",
                                "verticalContentAlignment": "Center",
                                
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": data.recordset[0].designation,
                                        "wrap": true,
                                        "horizontalAlignment": "Center"
                                    }
                                ],
                                "horizontalAlignment": "Center",
                                "verticalContentAlignment": "Center",
                                
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": data.recordset[0].department,
                                        "horizontalAlignment": "Center",
                                        "wrap": true
                                    }
                                ],
                                "horizontalAlignment": "Center",
                                "verticalContentAlignment": "Center",
                                
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
                                        "text": "Class Type",
                                        "wrap": true,
                                        "horizontalAlignment": "Left",
                                        "weight": "Bolder"
                                    }
                                ],
                                "horizontalAlignment": "Center",
                                "verticalContentAlignment": "Center",
                                "seperator": true,
                                "separator": true
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "No. of Class/ week",
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
                ],
                "separator": true
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
                                        "text": "Regular",
                                        "wrap": true,
                                        "horizontalAlignment": "Left"
                                    }
                                ],
                                "horizontalAlignment": "Center",
                                "verticalContentAlignment": "Center",
                                "seperator": true,
                                "separator": true
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": `${data.recordset[0].Regular}`,
                                        "wrap": true,
                                        "horizontalAlignment": "Center"
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
                                        "text": "Substitution",
                                        "wrap": true,
                                        "horizontalAlignment": "Left"
                                    }
                                ],
                                "horizontalAlignment": "Center",
                                "verticalContentAlignment": "Center",
                                "seperator": true,
                                "separator": true
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": `${data.recordset[0].Substitution}`,
                                        "wrap": true,
                                        "horizontalAlignment": "Center"
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
                                        "text": "Total",
                                        "wrap": true,
                                        "horizontalAlignment": "Left",
                                        "weight": "Bolder"
                                    }
                                ],
                                "horizontalAlignment": "Center",
                                "verticalContentAlignment": "Center",
                                "seperator": true,
                                "separator": true
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": `${data.recordset[0].TotalClass}`,
                                        "wrap": true,
                                        "horizontalAlignment": "Center"
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
                                        "text": "Leaves",
                                        "wrap": true,
                                        "horizontalAlignment": "Left",
                                        "weight": "Bolder"
                                    }
                                ],
                                "horizontalAlignment": "Center",
                                "verticalContentAlignment": "Center",
                                "seperator": true,
                                "separator": true
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "Alloted",
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
                                        "text": "Taken",
                                        "wrap": true,
                                        "horizontalAlignment": "Center",
                                        "weight": "Bolder"
                                    }
                                ],
                                "horizontalAlignment": "Center",
                                "verticalContentAlignment": "Center",
                                "seperator": true,
                                "selectAction": {
                                    "type": "Action.Submit",
                                    "id": "hi1",
                                    "title": "hey"
                                }
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "Remaining",
                                        "weight": "Bolder",
                                        "horizontalAlignment": "Center"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "separator": true
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
                                        "text": "Casual",
                                        "wrap": true,
                                        "horizontalAlignment": "Left"
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
                                        "text": `${data.recordset[0].allotedCasualLeave}`,
                                        "wrap": true,
                                        "horizontalAlignment": "Center"
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
                                        "text": `${data.recordset[0].casualLeaveTaken}`,
                                        "wrap": true,
                                        "horizontalAlignment": "Center"
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
                                        "text": `${data.recordset[0].casualLeaveRemaining}`,
                                        "horizontalAlignment": "Center"
                                    }
                                ],
                                "horizontalAlignment": "Center"
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
                                        "text": "Medical",
                                        "wrap": true,
                                        "horizontalAlignment": "Left"
                                    }
                                ],
                                "horizontalAlignment": "Center",
                                "verticalContentAlignment": "Center",
                                "seperator": true,
                                "separator": true
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": `${data.recordset[0].allotedMedicalLeave}`,
                                        "wrap": true,
                                        "horizontalAlignment": "Center"
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
                                        "text": `${data.recordset[0].MedicalLeaveTaken}`,
                                        "wrap": true,
                                        "horizontalAlignment": "Center"
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
                                        "text": `${data.recordset[0].MedicalLeaveRemaining}`,
                                        "horizontalAlignment": "Center"
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
                                        "text": "Total",
                                        "wrap": true,
                                        "horizontalAlignment": "Left"
                                    }
                                ],
                                "horizontalAlignment": "Center",
                                "verticalContentAlignment": "Center",
                                "seperator": true,
                                "separator": true
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": `${data.recordset[0].totalAvailableLeave}`,
                                        "wrap": true,
                                        "horizontalAlignment": "Center"
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
                                        "text": `${data.recordset[0].totalLeaveTaken}`,
                                        "wrap": true,
                                        "horizontalAlignment": "Center"
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
                                        "text": `${data.recordset[0].totalLeaveRemaining}`,
                                        "horizontalAlignment": "Center"
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
                                        "text": "Gross Salary",
                                        "weight": "Bolder"
                                    }
                                ]
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": `₹ ${data.recordset[0].netSalary}`
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "separator": true
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
                                        "text": "Total Working Days",
                                        "weight": "Bolder"
                                    }
                                ]
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "120"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "separator": true
            }
        ],
        "actions": [
            {
                "type": "Action.Submit",
                "title": "Class Detail",
                "data": {
                    "x": "Class Detail"
                }
            },
            {
                "type": "Action.Submit",
                "title": "Leave Detail",
                "data": {
                    "x": "Leave Detail"
                }
            },
            
            {
                "type": "Action.Submit",
                "title": "Take Attendance",
                "data": {
                    "x": "Attendance"
                }
            },
            {
                "type": "Action.Submit",
                "title": "Apply For Leave",
                "data": {
                    "x": "Apply For Leave"
                }
            }
        ]
    }

    return fcldetail
}
exports.weekclass = async (data) => {
    var wcCard = {
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
                        "text": "Weekly Class Detail",
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
                                        "text": "Day : ",
                                        "weight": "Bolder",
                                        "horizontalAlignment": "Center",
                                        "wrap": true
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
                                        "text": data[0].day,
                                        "horizontalAlignment": "Center",
                                        "wrap": true
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
                                        "text": "Date :",
                                        "weight": "Bolder",
                                        "horizontalAlignment": "Center",
                                        "wrap": true
                                    }
                                ],
                                "separator": true,
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
                                        "text": data[0].date.toLocaleDateString(),
                                        "horizontalAlignment": "Center",
                                        "wrap": true
                                    }
                                ],
                                "horizontalAlignment": "Center",
                                "verticalContentAlignment": "Center",
                                "seperator": true
                            }
                        ]
                    }
                ],
                "separator": true
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
                                        "text": "Subject",
                                        "wrap": true,
                                        "horizontalAlignment": "Left",
                                        "weight": "Bolder"
                                    }
                                ],
                                "horizontalAlignment": "Left",
                                "verticalContentAlignment": "Center",
                                "seperator": true,
                                "separator": true
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "Venue",
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
                                        "text": "Time",
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
                                        "text": "Semester",
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
                ],
                "separator": true
            }

        ]
    }
    for (let i = 0; i < data.length; i++) {
        wcCard['body'].push(
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
                                        "text": data[i].subjectName,
                                        "wrap": true,
                                        "horizontalAlignment": "Left"
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
                                        "text": data[i].venue,
                                        "wrap": true,
                                        "horizontalAlignment": "Center"
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
                                        "text": data[i].time,
                                        "wrap": true,
                                        "horizontalAlignment": "Center"
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
                                        "text": data[i].semester,
                                        "wrap": true,
                                        "horizontalAlignment": "Center"
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
        )
    }

    wcCard['body'].push(
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
                                    "text": "Total Hours :",
                                    "wrap": true,
                                    "weight": "Bolder",
                                    "horizontalAlignment": "Left"
                                }
                            ]
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": `${data.length}`,
                                    "horizontalAlignment": "Left",
                                    "wrap": true
                                }
                            ]
                        }
                    ]
                }
            ]
        })

    return wcCard
}

exports.leaveDetail = async (data) => {
    var leaveCard = {
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
                        "text": "Leave Details",
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
                                        "text": "From (Date)",
                                        "wrap": true,
                                        "horizontalAlignment": "Center",
                                        "weight": "Bolder"
                                    }
                                ],
                                "verticalContentAlignment": "Center",
                                "seperator": true
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "To(Date)",
                                        "wrap": true,
                                        "horizontalAlignment": "Center",
                                        "weight": "Bolder"
                                    }
                                ],
                                "verticalContentAlignment": "Center",
                                "seperator": true
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "Number of Days",
                                        "wrap": true,
                                        "horizontalAlignment": "Center",
                                        "weight": "Bolder"
                                    }
                                ],
                                "verticalContentAlignment": "Center",
                                "seperator": true,
                                "horizontalAlignment": "Center"
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "Leave Type",
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
                                        "text": "Approved by",
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
                                        "text": "Pay status",
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

        ]
    }
    var color = "Default"
    for (let i = 0; i < data.recordset.length; i++) {
        if (data.recordset[i].payStatus.toLowerCase() !== "paid") {
            color = "Attention"
        }
        leaveCard['body'].push({

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
                                    "text": `${data.recordset[i].StartDate.toLocaleDateString()}`,
                                    "horizontalAlignment": "Left",
                                    "wrap": true
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
                                    "text": `${data.recordset[i].EndDate.toLocaleDateString()}`,
                                    "horizontalAlignment": "Left",
                                    "wrap": true
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
                                    "text": `${data.recordset[i].Days}`,
                                    "wrap": true,
                                    "horizontalAlignment": "Center"
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
                                    "text": `${data.recordset[i].leaveType}`,
                                    "wrap": true,
                                    "horizontalAlignment": "Left"
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
                                    "text": `${data.recordset[i].sanctionedBy}`,
                                    "wrap": true,
                                    "horizontalAlignment": "Left"
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
                                    "text": `${data.recordset[i].payStatus}`,
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "Color": `${color}`
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "seperator": true
                        }
                    ]
                }
            ]

        })
    }
    return leaveCard
}

exports.applyLeave = async (data) => { 
    var aleave = 
    {
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
                    "text": "Faculty Detail",
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
                                    "text": "EmployeeCode",
                                    "weight": "Bolder",
                                    "horizontalAlignment": "Left",
                                    "wrap": true
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
                                    "text": "Name",
                                    "weight": "Bolder",
                                    "horizontalAlignment": "Center"
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
                                    "text": "Designation",
                                    "separator": true,
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
                                    "text": "Department",
                                    "weight": "Bolder",
                                    "horizontalAlignment": "Center"
                                }
                            ],
                            "verticalContentAlignment": "Center",
                            "seperator": true,
                            "horizontalAlignment": "Center"
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
                                            "text": "EMP 0017",
                                            "horizontalAlignment": "Center",
                                            "wrap": true
                                        }
                                    ],
                                    "horizontalAlignment": "Center",
                                    "verticalContentAlignment": "Center",
                                    "seperator": true,
                                    "separator": true
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "statice name",
                                            "horizontalAlignment": "Center",
                                            "wrap": true
                                        }
                                    ],
                                    "horizontalAlignment": "Center",
                                    "verticalContentAlignment": "Center"
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "static desg",
                                            "wrap": true,
                                            "horizontalAlignment": "Center"
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
                                            "text": "static dept",
                                            "horizontalAlignment": "Center",
                                            "wrap": true
                                        }
                                    ],
                                    "horizontalAlignment": "Center",
                                    "verticalContentAlignment": "Center",
                                    "seperator": true
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
                                            "text": "Start Date",
                                            "horizontalAlignment": "Center"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "Input.Date",
                                            "id": "fromdate"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "End Date",
                                            "horizontalAlignment": "Center"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "Input.Date",
                                            "id": "todate"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "TextBlock",
                    "text": "Reason of leave",
                    "wrap": true
                },
                {
                    "type": "Input.ChoiceSet",
                    "placeholder": "Placeholder text",
                    "choices": [
                        {
                            "title": "I am Not Well",
                            "value": "1"
                        },
                        {
                            "title": "goint out of town",
                            "value": "2"
                        },
                        {
                            "title": "going to attend family functions",
                            "value": "3"
                        }
                    ],
                    "value": "1",
                    "id": "Reason"
                },
                {
                    "type": "TextBlock",
                    "text": "Nature of Leave"
                }
            ]
        },
        {
            "type": "Input.ChoiceSet",
            "placeholder": "Placeholder text",
            "choices": [
                {
                    "title": "Medical",
                    "value": "1"
                },
                {
                    "title": "Casual",
                    "value": "2"
                }
            ],
            "value": "1",
            "id": "Nature"
        }
    ],
    "actions": [
        {
            "type": "Action.Submit",
            "title": "Apply Leave",
            "data": {
                "x": "Apply"
            }
        }
    ]  

    }  
 return aleave

}    
    
exports.SalaryDetail = async (data) => {
    var salarycard = {
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
                        "text": "Salary Detail",
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
                                        "text": "Salary Breakup",
                                        "weight": "Bolder"
                                    }
                                ]
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "Amount",
                                        "weight": "Bolder",
                                        "horizontalAlignment": "Right",
                                    }
                                ]
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "",
                                        "weight": "Bolder",
                                        "horizontalAlignment": "Right",
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
                                        "text": "Gross Salary :"
                                    }
                                ]
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "₹ " + `${data.recordset[0].gross}`,
                                        "horizontalAlignment": "Right",
                                    }
                                ]
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "",
                                        "weight": "Bolder",
                                        "horizontalAlignment": "Right",
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
                                        "text": "Provident Fund :"
                                    }
                                ]
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "₹ " + `${data.recordset[0].pf}`,
                                        "horizontalAlignment": "Right",
                                    }
                                ]
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "",
                                        "weight": "Bolder",
                                        "horizontalAlignment": "Right",
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
                                        "text": "Transport Fees :"
                                    }
                                ]
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "₹ " + `${data.recordset[0].transport}`,
                                        "horizontalAlignment": "Right",
                                    }
                                ]
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "",
                                        "weight": "Bolder",
                                        "horizontalAlignment": "Right",
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
                                        "text": "Tax Deducted at Source:",
                                        "wrap": true
                                    }
                                ]
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "₹ " + `${data.recordset[0].tds}`,
                                        "horizontalAlignment": "Right",
                                    }
                                ]
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "",
                                        "weight": "Bolder",
                                        "horizontalAlignment": "Right",
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
                                        "text": "Insurance Premium : "
                                    }
                                ]
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "₹ " + `${data.recordset[0].insurance}`,
                                        "horizontalAlignment": "Right",
                                    }
                                ]
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "",
                                        "weight": "Bolder",
                                        "horizontalAlignment": "Right",
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
                                        "text": "Total : ",
                                        "weight": "Bolder"
                                    }
                                ]
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "₹ " + `${data.recordset[0].total}`,
                                        "weight": "Bolder",
                                        "horizontalAlignment": "Right",
                                    }
                                ]
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "",
                                        "weight": "Bolder",
                                        "horizontalAlignment": "Right",
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }

    return salarycard
}

exports.attendanceCard = {
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
                                    "altText": "",
                                    "url": "https://upload.wikimedia.org/wikipedia/commons/6/61/Poornima_University_Logo.jpg",
                                    "horizontalAlignment": "Left",
                                    "size": "Medium",
                                    "style": "Person"
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
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "verticalContentAlignment": "Center"
                        },
                        {
                            "type": "Column",
                            "width": "auto",
                            "items": [
                                {
                                    "type": "Image",
                                    "altText": "",
                                    "url": "https://w0.pngwave.com/png/129/94/computer-icons-avatar-icon-design-male-teacher-png-clip-art-thumbnail.png",
                                    "size": "Medium",
                                    "horizontalAlignment": "Right",
                                    "style": "Person"
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
                    "text": "Sem - VIII     Branch - Computer Science    \n Subject - Real Time Systems",
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
                                    "text": "Enrollment Number",
                                    "wrap": true,
                                    "horizontalAlignment": "Left",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center"
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Name",
                                    "wrap": true,
                                    "horizontalAlignment": "Left",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center"
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Attendance",
                                    "wrap": true,
                                    "horizontalAlignment": "Center",
                                    "weight": "Bolder"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center"
                        }
                    ]
                }
            ]
        },
        {
            "type": "Container",
            "selectAction": {
                "title": "Maunfacturer",
                "type": "Action.Submit",
                "data": {
                    "x": "2018PUSSHBSAX06587"
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
                                    "text": "2016PUSETBCCX047",
                                    "wrap": true,
                                    "horizontalAlignment": "Left"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center"
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Ajit Thapa",
                                    "wrap": true,
                                    "horizontalAlignment": "Left"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center"
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "Input.Toggle",
                                    "title": "Present",
                                    "value": "true",
                                    "wrap": false,
                                    "id": "0"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center",
                            "id": "1"
                        }
                    ]
                }
            ]
        },
        {
            "type": "Container",
            "selectAction": {
                "title": "Maunfacturer",
                "type": "Action.Submit",
                "data": {
                    "x": "2018PUSSHBSAX06587"
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
                                    "text": "2016PUSETBCCX048",
                                    "wrap": true,
                                    "horizontalAlignment": "Left"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center"
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Priyanka Agarwal",
                                    "wrap": true,
                                    "horizontalAlignment": "Left"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center"
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "Input.Toggle",
                                    "title": "Absent",
                                    "value": "false",
                                    "wrap": false,
                                    "id": "2"
                                }
                            ],
                            "id": ""
                        }
                    ]
                }
            ]
        },
        {
            "type": "Container",
            "selectAction": {
                "title": "Maunfacturer",
                "type": "Action.Submit",
                "data": {
                    "x": "2018PUSSHBSAX06587"
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
                                    "text": "2016PUSETBCCX046",
                                    "wrap": true,
                                    "horizontalAlignment": "Left"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center"
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Sampurna Raj",
                                    "wrap": true,
                                    "horizontalAlignment": "Left"
                                }
                            ],
                            "horizontalAlignment": "Left",
                            "verticalContentAlignment": "Center"
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "Input.Toggle",
                                    "title": "Present",
                                    "value": "true",
                                    "wrap": false,
                                    "id": "3"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "type": "Container",
            "selectAction": {
                "title": "Maunfacturer",
                "type": "Action.Submit",
                "data": {
                    "x": "2018PUSSHBSAX06587"
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
                                    "text": "2016PUSETBCCX040",
                                    "wrap": true,
                                    "horizontalAlignment": "Left"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center"
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Rashi Jain",
                                    "wrap": true,
                                    "horizontalAlignment": "Left"
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "verticalContentAlignment": "Center"
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "Input.Toggle",
                                    "title": "Present",
                                    "value": "true",
                                    "wrap": false,
                                    "id": "8"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "actions": [
        {
            "type": "Action.Submit",
            "title": "Submit",
            "data": {
                "x": "Submit"
            }
        }
    ],
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "version": "1.0"
}