import React from 'react';
import './ViewStatement.scss';

function ViewStatement() {
  return (
    <div className='viewstatement'>
        <div className='content'>View Statement PDF</div>
        <span style={{opacity: .2}}>|</span>
        <div className='content'>Send Statement</div>
    </div>
  )
}

export default ViewStatement