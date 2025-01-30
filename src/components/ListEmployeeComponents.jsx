import React, {useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponents = () => {

    const [employees, setEmployees] = useState([])
    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees(){
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

   /*const dummyData = [
        {
            "id": 1,
            "firstName": "Tharindu",
            "lastName": "Lakmal",
            "email": "tharindu@gmail.com"
        },
        {
            "id": 2,
            "firstName": "Dulan",
            "lastName": "Anjana",
            "email": "dulan@gmail.com"
        },
        {
            "id": 3,
            "firstName": "Chathura",
            "lastName": "Kumarasingha",
            "email": "chathura@gmail.com"
        }
    ]*/

        function addNewEmployee(){
            navigator('/add-employee')
        }

        function updateEmployee(id){
            navigator(`/edit-employee/${id}`)
        }

        function removeEmployee(id){
            console.log(id);
            deleteEmployee(id).then((response) => {
                getAllEmployees();
            }).catch(error => {
                console.error(error);
            })
        }

  return (
    <div className='container' style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',}}>
        <h2 className='text-center'>List of Employees</h2>
        <button className='btn btn-primary mb-2' style={{ marginRight: '715px' }} onClick={addNewEmployee}>Add New Employee</button>
        <div  className="table-container"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',}}>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Email ID</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>

                                <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>

                                

                                <button className='btn btn-danger' style={{marginLeft: '10px'}} onClick={() => removeEmployee(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default ListEmployeeComponents