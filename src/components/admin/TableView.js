import React from 'react';

import {isEmpty, keys} from 'lodash'
import {actionTable} from "./actionTable";
import {getRepresentationStatus} from "../../models/statusMapping";

const TableView = ({
                       headers,
                       data,
                       actions,
                       columnSize,
                       tableStyle
                   }) => (
    <div className="custom-table" style={tableStyle}>
        <ul className="headers admin-card" style={columnSize}>
            {keys(headers).map(header => <li key={headers[header].name} className="txtline" style={headers[header].style}>
                <b>{headers[header].name}</b></li>)}
            {!isEmpty(keys(actions)) ? <li className="txc"><b>Действия</b></li> : ''}
        </ul>
        {
            data.map(row => <ul className={row.status === 'PENDING' ? 'rows admin-card' : 'admin-card'} style={columnSize} key={row.id}>
                {keys(headers).map(cell => <li key={cell} style={headers[cell].style} className="txtline">
                    <span>
                        {cell === 'status' ? getRepresentationStatus(row[cell]) : row[cell]}
                        {cell==='price'? ' BYN' : ''}
                        {cell==='total'? ' BYN' : ''}
                        {cell==='totalPrice'? ' BYN' : ''}
                        {cell==='discount'? ' %' : ''}
                    </span></li>)}
                {!isEmpty(keys(actions)) ? <li className="table-actions txc">{!isEmpty(keys(actions)) ? keys(actions).map(action => <span
                    key={action}>{actionTable[action](actions[action], row.id)}</span>) : ''}</li> : ''}

            </ul>)
        }
    </div>

)


export default TableView;