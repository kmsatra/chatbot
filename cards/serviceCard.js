exports.parServiceCard = async (data) => {
 var parServiceCard= {
    "type": "AdaptiveCard",
    "version": "1.0",
    "body": [
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