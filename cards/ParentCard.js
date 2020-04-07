exports.parCard = async (data) => {
    var pardetail = {
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
                ]
            },
            {
                "type": "Container",
                "items": [
                    {
                        "type": "TextBlock",
                        "text": "Student Details",
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
                                        "text": "Name :",
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
                                        "text": data.recordset[0].Name
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
                                        "text": "Enrollment.Number :",
                                        "wrap": true,
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
                                        "text": data.recordset[0].StudentId
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
                                        "text": "Branch :",
                                        "wrap": true,
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
                                        "text": data.recordset[0].branch
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
                                        "text": "Year :",
                                        "wrap": true,
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
                                        "text": `${data.recordset[0].year}`
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
                                        "text": "Semester :",
                                        "wrap": true,
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
                                        "text": `${data.recordset[0].semester}`
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
                                        "text": "Attendance :",
                                        "wrap": true,
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
                                        "text": data.recordset[0].Present + '/' + data.recordset[0].TotalClass
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
                                        "text": "CGPA :",
                                        "wrap": true,
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
                                        "text": `${Math.round(data.recordset[0].CGPA * 100) / 100}`
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
                                        "text": "Pending Fees :",
                                        "wrap": true,
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
                                        "text": "₹ " + data.recordset[0].pendingAmount
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
                "title": "Attendance Details",
                "data": {
                    "x": "Attendance"
                }
            },
            {
                "type": "Action.Submit",
                "title": "Marks Details",
                "data": {
                    "x": "CGPA"
                }
            },
            {
                "type": "Action.Submit",
                "title": "Fees Details",
                "data": {
                    "x": "Pending Fees"
                }
            }
        ]
    }

    return pardetail
}

exports.attendanceCard = async (data) => {
    var attendance = {
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
                        "text": `Attendance Detail - ${data.recordset[0].semester} semester`,
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
                                        "text": "Subject Code",
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
                                        "text": "Subject Name",
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
                                        "text": "Attendance",
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
                                        "text": "Percentage",
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
            },

        ]
    }
    for (let i = 0; i < data.recordset.length; i++) {
        var color = "Dark"
        if (parseInt(data.recordset[i].percentage) < 75) {
            color = "Attention"
        }
        attendance['body'].push(
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
                                        "text": data.recordset[i].subjectCode,
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
                                        "text": data.recordset[i].subjectName,
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
                                        "text": data.recordset[i].present + '/' + data.recordset[i].totalClasses,
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
                                        "text": data.recordset[i].percentage,
                                        "wrap": true,
                                        "color": `${color}`,
                                        "horizontalAlignment": "Center"
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

    return attendance
}
exports.cgpaCard = async (data, nu) => {
    var cgpa = {
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
                        "text": `Score Card - ${data[0].semester} semester`,
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
                                        "text": "Subject Code",
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
                                        "text": "Subject Name",
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
                                        "text": "Grade",
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
                                        "text": "Result",
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
            },


        ]
    }
    for (let i = 0; i < data.length; i++) {
        var color = "Dark"
        if (data[i].result.toLowerCase() !== "pass") {
            color = "Attention"
        }
        cgpa['body'].push({

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
                                    "text": `${data[i].subjectCode}`,
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
                                    "text": `${data[i].subjectName}`,
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
                                    "text": `${data[i].cgpa}`,
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
                                    "text": `${data[i].result}`,
                                    "wrap": true,
                                    "color": `${color}`,
                                    "horizontalAlignment": "Center"
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
    for (let j = 1; j < nu; j++) {
        cgpa['body'].push(
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
                                        "text": 'Aggregate (SGPA)',
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
                                        "text": `${data[j].OverAllCgpa}`,
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
                                        "text": `Pass`,
                                        "wrap": true,
                                        "horizontalAlignment": "Center"
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

    return cgpa
}

exports.pfCard = async (data) => {
    var pf = {
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
        pf['body'].push({
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
    return pf
}


