import React from 'react'
import ReactEcharts from 'echarts-for-react';
import moment from 'moment'


function EchartsForReactFrame() {
    const getOption = () => {
       const  option = {
            parallelAxis: [
                {dim: 0, name: 'Price'},
                {dim: 1, name: 'Net Weight'},
                {dim: 2, name: 'Amount'},
                {
                    dim: 3,
                    name: 'Score',
                    type: 'category',
                    data: ['Excellent', 'Good', 'OK', 'Bad']
                }
            ],
            series: {
                type: 'parallel',
                lineStyle: {
                    width: 4
                },
                data: [
                    [12.99, 100, 82, 'Good'],
                    [9.99, 80, 77, 'OK'],
                    [20, 120, 60, 'Excellent']
                ]
            }
        };

        Date.prototype.Format = function (fmt) {
            let o = {
                "M+": this.getMonth() + 1, //month
                "d+": this.getDate(), //day
                "H+": this.getHours(), //hour
                "m+": this.getMinutes(), //Minute
                "s+": this.getSeconds(), //second
                "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
                "S": this.getMilliseconds() //millisecond
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (let k in o)
                if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        };

        const option2 ={
            title: {
                text: "",
                x: "center"
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {            // Axis indicator, axis trigger is valid
                    type: "shadow"        // default is a straight line, optional: 'line' | 'shadow'
                },
                extraCssText:"",
                formatter: function (params) {
                    let relVal = params[0].axisValueLabel;
                    const getDateStr=(hideBar,dataBar)=>{
                        let str='';
                        str+= new Date(new Date().getTime() + (86400000) * hideBar.value).Format("yyyy-M-d")+" to "+new Date(new Date().getTime() + (86400000) * (hideBar.value+dataBar.value)).Format("yyyy-M-d");
                        return str;
                    }
                    relVal+="</> Scheme:"+getDateStr(params[0],params[1])+"< /> Actual:"+getDateStr(params[2],params[3]);
                    return relVal;
                }
            },
            legend: {
                data: ["plan", "actual"],
                x: 30
            },
            toolbox: {
                show: true,
                feature: {  //Data view
                    mark: true,
                    dataView: {readOnly: false},
                    restore: true,
                    saveAsImage: true
                }
            },
            grid: {
                left: "3%",
                right: "3%",
                bottom: "3%",
                containLabel: true
            },
            yAxis: {
                type: "category",
                splitLine: {show: false},
                data: ["Task one", "Task 2", "Task 3", "Task 4", "Task 5", "Task VI"]
            },
            xAxis: {
                type: "value",
                boundaryGap: [0, 0.01],
                axisLabel: {
                    show: true,
                    interval: 0,
                    formatter: function (value) {
                        return new Date(new Date().getTime() + (86400000) * value).Format("MM-dd")    //86400000, the number of milliseconds a day
                    }
                }
            },
            series: [
                {
                    name: "planDate",
                    type: "bar",
                    stack: "plan",
                    barCategoryGap: "10%",
                    itemStyle: {
                        normal: {
                            borderColor: "rgba(0,0,0,0)",
                            color: "rgba(0,0,0,0)"
                        },
                        emphasis: {
                            borderColor: "rgba(0,0,0,0)",
                            color: "rgba(0,0,0,0)"
                        }
                    },
                    data: [0, 160, 67, 112, 148, 179]   //The starting position of the plan
                },
                {
                    name: "plan",
                    type: "bar",
                    stack: "plan",
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: "right",
                                textStyle: {
                                    fontSize:14
                                },
                                 formatter: function (obj) {
                                    return obj.value+'day';
                                }
                            },
                            color: "#c23531"
                        }
                    },
                    data: [50, 50, 50, 50, 50, 50]		//planned data content
                },
                {
                    name: "factDate",
                    type: "bar",
                    stack: "fact",
                    itemStyle: {
                        normal: {
                            borderColor: "rgba(0,0,0,0)",
                            color: "rgba(0,0,0,0)"
                        },
                        emphasis: {
                            borderColor: "rgba(0,0,0,0)",
                            color: "rgba(0,0,0,0)"
                        }
                    },
                    data: [0, 160, 67, 112, 148, 179]   // the starting position of the actual progress
                },
                {
                    name: "actual",
                    type: "bar",
                    stack: "fact",
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: "right",
                                textStyle: {
                                    fontSize: 14
                                },
                                formatter: function (obj) {
                                    return obj.value+'day';
                                }
                            },
                            color: "#91c7ae"
                        }
                    },
                    data: [33, 16, 60, 22, 58, 96]   // Actual progress line data content
                }, {
                    type: "bar",
                    stack: "none",
                    barWidth: "2",
                    itemStyle: {
                        normal: {
                            borderColor: "rgba(0,0,0,0)",
                            color: "rgba(0,0,0,0)"
                        },
                        emphasis: {
                            borderColor: "rgba(0,0,0,0)",
                            color: "rgba(0,0,0,0)"
                        }
                    },
                    data: [0, 0, 0, 0, 0, 0]
                }
            ]
        }

        const option3 = {
            backgroundColor: "#fff",
            title: {
                text: "Project Duration",
                padding: 20,
                textStyle: {
                    fontSize: 10,
                    fontWeight: "bolder",
                    color: "#333"
                },
                subtextStyle: {
                    fontSize: 13,
                    fontWeight: "bolder"
                }
            },
            legend: {
                         data: ["planned construction period", 
                                "feasibility study stage", 
                                "preliminary design stage", 
                                "construction drawing design stage", 
                                "project implementation stage", 
                                "project acceptance stage"
                            ],
                align: "right",
                right: 80,
                top: 50
            },
            grid: {
                containLabel: true,
                show: false,
                right: 130,
                left: 40,
                bottom: 40,
                top: 90
            },
            xAxis: {
                type: "time",
                axisLabel: {
                    "show": true,
                    "interval": 0
                }
            },
            yAxis: {
                axisLabel: {
                    show: true,
                    interval: 0,
                    formatter: function(value, index) {
                        var last = ""
                        var max = 5;
                        var len = value.length;
                        var hang = Math.ceil(len / max);
                        if (hang > 1) {
                            for (var i = 0; i < hang; i++) {
                                var start = i * max;
                                var end = start + max;
                                var temp = value.substring(start, end) + "\n";
                                                         last += temp; //With the final string
                            }
                            return last;
                        } else {
                            return value;
                        }
                    }
                },
              data: ["first task", "second task", "third task"]
            },
            tooltip: {
                trigger: "axis",
                formatter: function(params) {
                    var res = "";
                    var name = "";
                    var start0 = "";
                    var start = "";
                    var end0 = "";
                    var end = "";
                    for (var i in params) {
                        var k = i % 2;
                        if (!k) {//even
                            start0 = params[i].data;
                            console.log(start0)
                            start = start0.getFullYear() + "/" + (start0.getMonth() + 1) + "/" + start0.getDate() + " " + start0.getHours() + ":" + start0.getMinutes() + ":" + start0.getSeconds();
                        }
                        if (k) {//odd
                            name = params[i].seriesName;
                            end0 = params[i].data;
                            end = end0.getFullYear() + "/" + (end0.getMonth() + 1) + "/" + end0.getDate() + " " + end0.getHours() + ":" + end0.getMinutes() + ":" + end0.getSeconds();
                        }
                            res += name + " : " + end + "~" + start + "</br>";
         
                        }

                    return res;
                }
            },
            series: [{
                    name: "Planned Duration",
                    type: "bar",
                    stack: "Total 0",
                    label: {
                        normal: {
                            show: true,
                            color: "#000",
                            // position: "right",
                            formatter: function(params) {
                                return params.seriesName
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "skyblue",
                            borderColor: "#fff",
                            borderWidth: 2
                        }
                    },
                    zlevel: -1,
                    data: [
                        new Date("2020-05-01 12:00:10"), 
                        new Date("2020-03-14 08:10:20"), 
                        // new Date("2020-05-01 09:20:30")
                    ]
                },
                {
                    name: "Planned Duration",
                    type: "bar",
                    stack: "Total 0",
                    itemStyle: {
                        normal: {
                            color: "white",
                            opacity: 1
                        }
                    },
                    zlevel: -1,
                    z: 3,
                    data: [
                        new Date("2020-03-01 12:00:10"), 
                        new Date("2020-01-01 08:10:20"), 
                        // new Date("2020-01-15 09:20:30")
                    ]
                },
            ]
        }
        return option3
        
    }
    return (
        <div>
            <ReactEcharts option={getOption()}/>
        </div>
    )
}

export default EchartsForReactFrame;
