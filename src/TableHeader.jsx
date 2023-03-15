const TableHeader = props => {
    return (
        <thead>
            <tr>
                {props.heads.map((head, index) => <th key={index} >{props.heads[index]}</th>)}
            </tr>
        </thead>
    );
};

export default TableHeader;