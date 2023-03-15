import {useState} from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const DataTable = () => {

    const [studentList, setStudentList] = useState([
        {id: "1", firstName: "Fanny", lastName: "Morrow", age: 23, birthdate: "1999-10-01", country: "Canada", city: "Toronto"},
        {id: "2", firstName: "Arlen", lastName: "Linsky", age: 21, birthdate: "2002-01-23", country: "Canada", city: "Montreal"},
        {id: "3", firstName: "Konstantin", lastName: "Nerlov", age: 23, birthdate: "2000-02-13", country: "Italy", city: "Verona"},
        {id: "4", firstName: "Larry", lastName: "Obicheck", age: 22, birthdate: "2000-09-30", country: "Chile", city: "Quito"}
    ])
    return (
        <div className="container">
            <h1>Students</h1>
            <table className="table">
                <TableHeader heads={['Id', 'First name', 'Last name', 'Age']} />
                <tbody>
                    {studentList.map( student => (<TableRow  data={student}/>))}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;