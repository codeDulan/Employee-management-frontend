import axios from "axios";

const REST_API_BASE_URL = 'https://emp-mgt-backend-8e48308d2ee2.herokuapp.com/api/employees';

export const listEmployees = () => axios.get(REST_API_BASE_URL);

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);

export const getEmployee = (employeeID) => axios.get(REST_API_BASE_URL + '/' + employeeID);

export const updateEmployee = (employeeID, employee ) => axios.put(REST_API_BASE_URL + '/' + employeeID, employee);

export const deleteEmployee = (employeeID) => axios.delete(REST_API_BASE_URL + '/' + employeeID);