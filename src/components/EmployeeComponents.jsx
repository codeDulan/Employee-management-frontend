import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

const EmployeeComponents = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const {id} = useParams();

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const navigator = useNavigate();

    useEffect(() => {
        if(id){
            getEmployee(id).then((response) =>{
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id])

    function saveorUpdateEmployee(e){
        e.preventDefault();

        if(validateForm()){


            const employee = {firstName, lastName, email}
            console.log(employee);

            if(id){
                updateEmployee(id, employee).then((response) => {
                    console.log(response.data);
                    navigator('/employees');
                }).catch(error => {
                    console.error(error);
                })

            }else{
                createEmployee(employee).then((response) => {
                    console.log(response.data);
                    navigator('/employees')
                }).catch(error => {
                    console.error(error);
                })
            }
           

        
        }

        
    }

    function validateForm() {
        let valid = true;
        const errorsCopy = { ...errors };
    
        // First name validation
        if (!firstName.trim()) {
            errorsCopy.firstName = 'First name is required';
            valid = false;
        } else if (!/^[A-Za-z]+$/.test(firstName)) {
            errorsCopy.firstName = 'First name must contain only letters';
            valid = false;
        } else {
            errorsCopy.firstName = '';
        }
    
        // Last name validation
        if (!lastName.trim()) {
            errorsCopy.lastName = 'Last name is required';
            valid = false;
        } else if (!/^[A-Za-z]+$/.test(lastName)) {
            errorsCopy.lastName = 'Last name must contain only letters';
            valid = false;
        } else {
            errorsCopy.lastName = '';
        }
    
        // Email validation
        if (!email.trim()) {
            errorsCopy.email = 'Email is required';
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errorsCopy.email = 'Invalid email format';
            valid = false;
        } else {
            errorsCopy.email = '';
        }
    
        setErrors(errorsCopy);
        return valid;
    }
    

    function pageTitle(){
        if(id){
            return <h2 className='text-center' style={{ marginTop: '10px' }}>Update Employee</h2>
        }else{
           return <h2 className='text-center' style={{ marginTop: '10px' }}>Add Employee</h2>
        }
    }

  return (
    <div className='container'>
    <br/> <br/>
        <div className='row'>
            <div className='card' style={{ width: '50%', margin: '0 auto' }}>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb2'>
                            <label className='form-lable'>First Name :</label>
                            <input 
                                type='text'
                                placeholder='Enter Employee First Name'
                                name='firstName'
                                value={firstName}
                                className= {`form-control ${ errors.firstName ? 'is-invalid': '' }`}
                                onChange={(e) => setFirstName(e.target.value)}></input>
                                { errors.firstName && <div className='invalid-feedback'>{ errors.firstName}</div>}
                        </div>

                        <div className='form-group mb2'>
                            <label className='form-lable' style={{ marginTop: '10px' }}>Last Name :</label>
                            <input 
                                type='text'
                                placeholder='Enter Employee Last Name'
                                name='lastName'
                                value={lastName}
                                className= {`form-control ${ errors.lastName ? 'is-invalid': '' }`}
                                onChange={(e) => setLastName(e.target.value)}></input>
                                { errors.lastName && <div className='invalid-feedback'>{ errors.lastName}</div>}
                        </div>

                        <div className='form-group mb2'>
                            <label className='form-lable' style={{ marginTop: '10px' }}>Email :</label>
                            <input 
                                type='text'
                                placeholder='Enter Employee Email'
                                name='email'
                                value={email}
                                className= {`form-control ${ errors.email ? 'is-invalid': '' }`}
                                onChange={(e) => setEmail(e.target.value)}></input>
                                { errors.email && <div className='invalid-feedback'>{ errors.email}</div>}
                        </div>

                        <button className='btn btn-success' style={{ marginTop: '10px' }}onClick={saveorUpdateEmployee}>Submit</button>

                    </form>

                </div>
            </div>

        </div>
    </div>
  )
}

export default EmployeeComponents