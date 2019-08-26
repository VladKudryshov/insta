import React from 'react';

import {isEmpty, keys} from 'lodash'
import {actionTable} from "./actionTable";

const TableView = ({
                       headers,
                       data,
                       actions,
                       columnSize,
                       tableStyle
                   }) => (
    <div className="custom-table" style={tableStyle}>
        <ul className="headers admin-card" style={columnSize}>
            {keys(headers).map(header => <li key={headers[header].name} style={headers[header].style}>
                <b>{headers[header].name}</b></li>)}
            {!isEmpty(keys(actions)) ? <li className="txc"><b>Действия</b></li> : ''}
        </ul>
        {
            data.map(row => <ul className="rows admin-card" style={columnSize} key={row.id}>
                {keys(headers).map(cell => <li key={cell} style={headers[cell].style} className="txtline">
                    <span>
                        {row[cell]}
                        {cell==='price'? ' BYN' : ''}
                        {cell==='total'? ' BYN' : ''}
                        {cell==='discount'? ' %' : ''}
                    </span></li>)}
                <li className="table-actions txc">{!isEmpty(keys(actions)) ? keys(actions).map(action => <span
                    key={action}>{actionTable[action](actions[action], row.id)}</span>) : ''}</li>
            </ul>)
        }
    </div>

)


export default TableView;