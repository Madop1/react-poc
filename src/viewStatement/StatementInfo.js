import React from 'react';
import CustomTable from "./CustomTable";
import DropDown from './DropDown';
import ViewStatement from './ViewStatement';
import './StatementInfo.scss';

function StatementInfo() {
  const tableHeader = ["Statement Month", "MAD Amount", "TAD Amount", "Repayment Status", "Paid Amount"];
  const tableData = [{
    "Statement Month": "August",
    "MAD Amount":'1,300',
    "TAD Amount":'12,900',
    "Repayment Status":"Paid",
    "Paid Amount": '1,300'
  }]
  return (
    <div className='statementInfo'>
    <div className='statementInfo-header'>
      <div className='statementInfo-body'>
      <div style={{ color: 'grey'}}>
      Statement Info
      </div>
    <DropDown />
      </div>
    <ViewStatement />
    </div>
    <div className='statementInfo-content'>
      <CustomTable header={tableHeader} data={tableData}/>
    </div>
    <div className='statementInfo-reward'>
      <select className='reward-content'>
        <option selected>View Rewards Details</option>
      </select>
    </div>
    </div>
  )
}

export default StatementInfo