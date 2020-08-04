import React from 'react'
import ReactExport from 'react-export-excel'

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColum;

const ReactExportExcelFrame = () => {
    
    const dataSet1 = [
    {
        name: "Johson",
        amount: 30000,
        sex: 'M',
        is_married: true
    },
    {
        name: "Monika",
        amount: 355000,
        sex: 'F',
        is_married: false
    },
    {
        name: "John",
        amount: 250000,
        sex: 'M',
        is_married: false
    },
    {
        name: "Josef",
        amount: 450500,
        sex: 'M',
        is_married: true
    }
];

const dataSet2 = [
    {
        name: "Johnson",
        total: 25,
        remainig: 16
    },
    {
        name: "Josef",
        total: 25,
        remainig: 7
    }
];


    return (
        <div>
            <ExcelFile>
                <ExcelSheet data={dataSet1} name="全部">
                    <ExcelColumn label="工單單號" value="name"/>
                    <ExcelColumn label="數量" value="amount"/>
                    <ExcelColumn label="Gender" value="sex"/>
                    <ExcelColumn label="Marital Status"
                                 value={(col) => col.is_married ? "Married" : "Single"}/>
                </ExcelSheet>
                <ExcelSheet data={dataSet2} name="未開工">
                    <ExcelColumn label="Name" value="name"/>
                    <ExcelColumn label="Total Leaves" value="total"/>
                    <ExcelColumn label="Remaining Leaves" value="remaining"/>
                </ExcelSheet>
            </ExcelFile>
        </div>
    )
}

export default ReactExportExcelFrame
