import React from 'react';
import './CustomTable.scss';

function CustomTable(props) {
  return (
    <table style={{ width: "100%" }}>
        <tr>
        {props.header.map(head => (
            <th style={{ textAlign: "start", fontWeight: "normal", color: "grey" }}>{head}</th>
          ))}
        </tr>
        {
          props.data.map(rowData => (
            <tr>
              <td className='table-content'>{rowData["Statement Month"]}</td>
              <td className='table-content'>₹{rowData['MAD Amount']}</td>
              <td className='table-content'>₹{rowData['TAD Amount']}</td>
              <td className='table-content'><button style={{backgroundColor: 'lightGreen', padding: '7px', border: 'none', borderRadius: '5px' , color: 'green'}}>{rowData['Repayment Status']}</button></td>
              <td className='table-content'>₹{rowData['Paid Amount']}</td>
        </tr>))
        }
    </table>
  );
}

export default CustomTable;
