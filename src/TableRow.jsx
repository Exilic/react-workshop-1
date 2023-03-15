import React from 'react';

function TableRow(props) {
    return (
        <tr>
            <td>{props.data.id}</td>
            <td>{props.data.firstName}</td>
            <td>{props.data.lastName}</td>
            <td>{props.data.age}</td>
        </tr>
    );
}

export default TableRow;