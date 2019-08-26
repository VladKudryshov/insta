import React from 'react';
import {Link} from "react-router";


function viewAction(action, id){
    return <i className="far fa-eye icon-margin" onClick={() => action(id)}/>
}

function editAction(action, link){
    return <Link to={{ pathname: link}}  onlyActiveOnIndex> <i className="far fa-edit icon-margin"/> </Link>
}

function removeAction(action, id){
    return <i className="far fa-trash-alt icon-margin" onClick={() => action(id)}/>
}


export const actionTable = {
    viewAction,
    editAction,
    removeAction
};

/*




*/
