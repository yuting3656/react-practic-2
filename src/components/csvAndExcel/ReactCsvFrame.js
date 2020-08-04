import React from 'react'
import { CSVLink, CSVDownload } from 'react-csv'

const ReactCsvFrame = () => {
    const csvData = [
        ["firstname", "lastname", "email"],
        ["Ahmed", "Tomi", "ah@smthing.co.com"],
        ["Raed", "Labes", "rl@smthing.co.com"],
        ["Yezzi", "Min l3b", "ymin@cocococo.com"]
      ];
    return (
        <div>
            <CSVLink data={csvData}>Download me</CSVLink>;
        </div>
    )
}

export default ReactCsvFrame
