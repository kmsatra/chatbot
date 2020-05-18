exports.mgtCard = async (data) => {
    var mgtdetail =  {
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
                        "text": "Fees Details",
                        "color": "Accent",
                        "horizontalAlignment": "Center",
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
                                "width": "auto",
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
                                "width": "auto",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "Rahul Singhi"
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
                                        "type": "TextBlock",
                                        "text": "Designation :",
                                        "weight": "Bolder",
                                        "horizontalAlignment": "Center"
                                    }
                                ],
                                "horizontalAlignment": "Center",
                                "verticalContentAlignment": "Center",
                                "seperator" : true
                            },
                            {
                                "type": "Column",
                                "width": "auto",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "Director"
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
                                        "text": "Fees ",
                                        "wrap": true,
                                        "weight": "Bolder",
                                        "horizontalAlignment": "Left"
                                    }
                                ],
                                "verticalContentAlignment": "Center",
                                "seperator" : true,
                                "horizontalAlignment": "Center",
                                "spacing": "None"
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "Amount",
                                        "weight": "Bolder",
                                        "horizontalAlignment": "Center"
                                    }
                                ]
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": "Percentage",
                                        "weight": "Bolder",
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
                                "horizontalAlignment": "Center"
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": `₹ ${data.recordset[0].totalFees.substring(0, data.recordset[0].totalFees.length - 3)}`,
                                        "horizontalAlignment": "Right",
                                        "wrap": true
                                    }
                                ],
                                "horizontalAlignment": "Left"
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": " ",
                                        "horizontalAlignment": "Center",
                                        "wrap": true
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
                                        "text": "Deposited",
                                        "wrap": true,
                                        "horizontalAlignment": "Left"
                                    }
                                ],
                                "horizontalAlignment": "Center"
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": `₹ ${data.recordset[0].depositedFees.substring(0, data.recordset[0].depositedFees.length - 3)}`,
                                        "horizontalAlignment": "Right",
                                        "wrap": true
                                    }
                                ],
                                "horizontalAlignment": "Left"
                            },
                            {
                                "type": "Column",
                                "width": "stretch",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "text": `${data.recordset[0].depositPercentage}%`,
                                        "horizontalAlignment": "Center",
                                        "wrap": true
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
                                        "text": "Pending",
                                        "wrap": true,
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
                                        "text": `₹ ${data.recordset[0].pendingFees.substring(0, data.recordset[0].pendingFees.length - 3)}`,
                                        "horizontalAlignment": "Right",
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
                                        "text": `${data.recordset[0].pendingPercentage}%`,
                                        "horizontalAlignment": "Center",
                                        "wrap": true
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
                "title": "Fees Details",
                "data": {
                    "x": "Fees Details"
                }
            },
            {
                "type": "Action.Submit",
                "title": "Average Attendance",
                "data": {
                    "x": "Average Attendance"
                }
            },
            {
                "type": "Action.Submit",
                "title": "Average Marks",
                "data": {
                    "x": "Average Marks"
                }
            }
        ]
    }

    return mgtdetail
}


// exports.PendingCard = async (data) => {
//     var pdetail = {
//         "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
//         "version": "1.0",
//         "type": "AdaptiveCard",
//         "body": [
//             {
//                 "type": "Container",
//                 "items": [
//                     {
//                         "type": "ColumnSet",
//                         "columns": [
//                             {
//                                 "type": "Column",
//                                 "width": "auto",
//                                 "items": [
//                                     {
//                                         "type": "Image",             "style": "Person",
//                                         "altText": "",
//                                         "url": "https://upload.wikimedia.org/wikipedia/commons/6/61/Poornima_University_Logo.jpg",
//                                         "horizontalAlignment": "Left",
//                                         "size": "Medium"
//                                     }
//                                 ]
//                             },
//                             {
//                                 "type": "Column",
//                                 "width": "stretch",
//                                 "items": [
//                                     {
//                                         "type": "TextBlock",
//                                         "text": "Poornima University",
//                                         "horizontalAlignment": "Center",
//                                         "wrap": true,
//                                         "weight": "Bolder",
//                                         "size": "Large"
//                                     },
//                                     {
//                                         "type": "TextBlock",
//                                         "text": "2020 - 2021",
//                                         "horizontalAlignment": "Center"
//                                     }
//                                 ],
//                                 "verticalContentAlignment": "Center",
//                                 "seperator" : true
//                             },
//                             {
//                                 "type": "Column",
//                                 "width": "auto",
//                                 "items": [
//                                     {
//                                         "type": "Image",             "style": "Person",
//                                         "altText": "",
//                                         "url": "https://media-exp1.licdn.com/dms/image/C5103AQFlCq3C_ph4xQ/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=jFNpcmZDaotsqHrT1QLpZTzX6g67jJi8DHrxtIb8yrI",
//                                         "size": "Medium",
//                                         "horizontalAlignment": "Right"
//                                     }
//                                 ],
//                                 "horizontalAlignment": "Center"
//                             }
//                         ]
//                     }
//                 ],
//                 "spacing": "None"
//             },
//             {
//                 "type": "Container",
//                 "items": [
//                     {
//                         "type": "TextBlock",
//                         "text": "Pending Fees - " + `${data[0].semester} semester`,
//                         "horizontalAlignment": "Center",
//                         "color": "Accent",
//                         "weight": "Bolder",
//                         "size": "Medium"
//                     }
//                 ]
//             },
//             {
//                 "type": "Container",
//                 "items": [
//                     {
//                         "type": "ColumnSet",
//                         "columns": [
//                             {
//                                 "type": "Column",
//                                 "width": "stretch",
//                                 "items": [
//                                     {
//                                         "type": "TextBlock",
//                                         "text": "Branch",
//                                         "wrap": true,
//                                         "horizontalAlignment": "Left",
//                                         "weight": "Bolder"
//                                     }
//                                 ],
//                                 "horizontalAlignment": "Center",
//                                 "verticalContentAlignment": "Center",
//                                 "seperator" : true
//                             },
//                             {
//                                 "type": "Column",
//                                 "width": "stretch",
//                                 "items": [
//                                     {
//                                         "type": "TextBlock",
//                                         "text": "Total Fees",
//                                         "wrap": true,
//                                         "horizontalAlignment": "Center",
//                                         "weight": "Bolder"
//                                     }
//                                 ],
//                                 "horizontalAlignment": "Center",
//                                 "verticalContentAlignment": "Center",
//                                 "seperator" : true
//                             },
//                             {
//                                 "type": "Column",
//                                 "width": "stretch",
//                                 "items": [
//                                     {
//                                         "type": "TextBlock",
//                                         "text": "Pending Fees",
//                                         "wrap": true,
//                                         "horizontalAlignment": "Center",
//                                         "weight": "Bolder"
//                                     }
//                                 ],
//                                 "horizontalAlignment": "Center",
//                                 "verticalContentAlignment": "Center",
//                                 "seperator" : true
//                             },
//                             {
//                                 "type": "Column",
//                                 "width": "stretch",
//                                 "items": [
//                                     {
//                                         "type": "TextBlock",
//                                         "text": "Percentage",
//                                         "wrap": true,
//                                         "horizontalAlignment": "Center",
//                                         "weight": "Bolder"
//                                     }
//                                 ],
//                                 "horizontalAlignment": "Center",
//                                 "verticalContentAlignment": "Center",
//                                 "seperator" : true
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     }
//     for (let i = 0; i < data.length; i++) {
//         pdetail['body'].push({
//             "type": "Container",
//             "items": [
//                 {
//                     "type": "ColumnSet",
//                     "columns": [
//                         {
//                             "type": "Column",
//                             "width": "stretch",
//                             "items": [
//                                 {
//                                     "type": "TextBlock",
//                                     "text": `${data[i].branch}`,
//                                     "wrap": true,
//                                     "horizontalAlignment": "Left"
//                                 }
//                             ],
//                             "horizontalAlignment": "Center",
//                             "verticalContentAlignment": "Center",
//                             "seperator" : true
//                         },
//                         {
//                             "type": "Column",
//                             "width": "stretch",
//                             "items": [
//                                 {
//                                     "type": "TextBlock",
//                                     "text": "₹ " + `${data[i].totalFees.substring(0, data[i].totalFees.length - 3)}`,
//                                     "wrap": true,
//                                     "horizontalAlignment": "Center"
//                                 }
//                             ],
//                             "horizontalAlignment": "Center",
//                             "verticalContentAlignment": "Center",
//                             "seperator" : true
//                         },
//                         {
//                             "type": "Column",
//                             "width": "stretch",
//                             "items": [
//                                 {
//                                     "type": "TextBlock",
//                                     "text": "₹ " + `${data[i].feesPending.substring(0, data[i].feesPending.length - 3)}`,
//                                     "wrap": true,
//                                     "horizontalAlignment": "Right"
//                                 }
//                             ],
//                             "horizontalAlignment": "Center",
//                             "verticalContentAlignment": "Center",
//                             "seperator" : true
//                         },
//                         {
//                             "type": "Column",
//                             "width": "stretch",
//                             "items": [
//                                 {
//                                     "type": "TextBlock",
//                                     "text": `${data[i].pendingPercentage}%`,
//                                     "wrap": true,
//                                     "horizontalAlignment": "Center"
//                                 }
//                             ],
//                             "horizontalAlignment": "Center",
//                             "verticalContentAlignment": "Center",
//                             "seperator" : true
//                         }
//                     ]
//                 }
//             ]

//         })
//     }
//     return pdetail
// }


// exports.DepositCard = async (data) => {
//     var ddetail = {
//         "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
//         "version": "1.0",
//         "type": "AdaptiveCard",
//         "body": [
//             {
//                 "type": "Container",
//                 "items": [
//                     {
//                         "type": "ColumnSet",
//                         "columns": [
//                             {
//                                 "type": "Column",
//                                 "width": "auto",
//                                 "items": [
//                                     {
//                                         "type": "Image",             "style": "Person",
//                                         "altText": "",
//                                         "url": "https://upload.wikimedia.org/wikipedia/commons/6/61/Poornima_University_Logo.jpg",
//                                         "horizontalAlignment": "Left",
//                                         "size": "Medium"
//                                     }
//                                 ]
//                             },
//                             {
//                                 "type": "Column",
//                                 "width": "stretch",
//                                 "items": [
//                                     {
//                                         "type": "TextBlock",
//                                         "text": "Poornima University",
//                                         "horizontalAlignment": "Center",
//                                         "wrap": true,
//                                         "weight": "Bolder",
//                                         "size": "Large"
//                                     },
//                                     {
//                                         "type": "TextBlock",
//                                         "text": "2020 - 2021",
//                                         "horizontalAlignment": "Center"
//                                     }
//                                 ],
//                                 "verticalContentAlignment": "Center",
//                                 "seperator" : true
//                             },
//                             {
//                                 "type": "Column",
//                                 "width": "auto",
//                                 "items": [
//                                     {
//                                         "type": "Image",             "style": "Person",
//                                         "altText": "",
//                                         "url": "https://media-exp1.licdn.com/dms/image/C5103AQFlCq3C_ph4xQ/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=jFNpcmZDaotsqHrT1QLpZTzX6g67jJi8DHrxtIb8yrI",
//                                         "size": "Medium",
//                                         "horizontalAlignment": "Right"
//                                     }
//                                 ],
//                                 "horizontalAlignment": "Center"
//                             }
//                         ]
//                     }
//                 ],
//                 "spacing": "None"
//             },
//             {
//                 "type": "Container",
//                 "items": [
//                     {
//                         "type": "TextBlock",
//                         "text": "Deposited Fees - " + `${data[0].semester} semester`,
//                         "horizontalAlignment": "Center",
//                         "color": "Accent",
//                         "weight": "Bolder",
//                         "size": "Medium"
//                     }
//                 ]
//             },
//             {
//                 "type": "Container",
//                 "items": [
//                     {
//                         "type": "ColumnSet",
//                         "columns": [
//                             {
//                                 "type": "Column",
//                                 "width": "stretch",
//                                 "items": [
//                                     {
//                                         "type": "TextBlock",
//                                         "text": "Branch",
//                                         "wrap": true,
//                                         "horizontalAlignment": "Left",
//                                         "weight": "Bolder"
//                                     }
//                                 ],
//                                 "horizontalAlignment": "Center",
//                                 "verticalContentAlignment": "Center",
//                                 "seperator" : true
//                             },
//                             {
//                                 "type": "Column",
//                                 "width": "stretch",
//                                 "items": [
//                                     {
//                                         "type": "TextBlock",
//                                         "text": "Total Fees",
//                                         "wrap": true,
//                                         "horizontalAlignment": "Center",
//                                         "weight": "Bolder"
//                                     }
//                                 ],
//                                 "horizontalAlignment": "Center",
//                                 "verticalContentAlignment": "Center",
//                                 "seperator" : true
//                             },
//                             {
//                                 "type": "Column",
//                                 "width": "stretch",
//                                 "items": [
//                                     {
//                                         "type": "TextBlock",
//                                         "text": "Fees Deposited",
//                                         "wrap": true,
//                                         "horizontalAlignment": "Center",
//                                         "weight": "Bolder"
//                                     }
//                                 ],
//                                 "horizontalAlignment": "Center",
//                                 "verticalContentAlignment": "Center",
//                                 "seperator" : true
//                             },
//                             {
//                                 "type": "Column",
//                                 "width": "stretch",
//                                 "items": [
//                                     {
//                                         "type": "TextBlock",
//                                         "text": "Percentage",
//                                         "wrap": true,
//                                         "horizontalAlignment": "Center",
//                                         "weight": "Bolder"
//                                     }
//                                 ],
//                                 "horizontalAlignment": "Center",
//                                 "verticalContentAlignment": "Center",
//                                 "seperator" : true
//                             }
//                         ]
//                     }
//                 ]
//             }

//         ]
//     }
//     for (let i = 0; i < data.length; i++) {
//         ddetail['body'].push({
//             "type": "Container",
//             "items": [
//                 {
//                     "type": "ColumnSet",
//                     "columns": [
//                         {
//                             "type": "Column",
//                             "width": "stretch",
//                             "items": [
//                                 {
//                                     "type": "TextBlock",
//                                     "text": `${data[i].branch}`,
//                                     "wrap": true,
//                                     "horizontalAlignment": "Left"
//                                 }
//                             ],
//                             "horizontalAlignment": "Center",
//                             "verticalContentAlignment": "Center",
//                             "seperator" : true
//                         },
//                         {
//                             "type": "Column",
//                             "width": "stretch",
//                             "items": [
//                                 {
//                                     "type": "TextBlock",
//                                     "text": "₹ " + `${data[i].totalFees.substring(0, data[i].totalFees.length - 3)}`,
//                                     "wrap": true,
//                                     "horizontalAlignment": "Center"
//                                 }
//                             ],
//                             "horizontalAlignment": "Center",
//                             "verticalContentAlignment": "Center",
//                             "seperator" : true
//                         },
//                         {
//                             "type": "Column",
//                             "width": "stretch",
//                             "items": [
//                                 {
//                                     "type": "TextBlock",
//                                     "text": "₹ " + `${data[i].depositedFees.substring(0, data[i].depositedFees.length - 3)}`,
//                                     "wrap": true,
//                                     "horizontalAlignment": "Right"
//                                 }
//                             ],
//                             "horizontalAlignment": "Center",
//                             "verticalContentAlignment": "Center",
//                             "seperator" : true
//                         },
//                         {
//                             "type": "Column",
//                             "width": "stretch",
//                             "items": [
//                                 {
//                                     "type": "TextBlock",
//                                     "text": `${data[i].depositPercentage}%`,
//                                     "wrap": true,
//                                     "horizontalAlignment": "Center"
//                                 }
//                             ],
//                             "horizontalAlignment": "Center",
//                             "verticalContentAlignment": "Center",
//                             "seperator" : true
//                         }
//                     ]
//                 }
//             ]

//         })
//     }
//     return ddetail
// }



