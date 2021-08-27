import {Component} from "react"
import EmployeeDetailsData from "../EmployeeDetailsData"

import "./index.css"

class EmployeeDetails extends Component{

    state = {
        employeeData:[],
        searchInput:"",
    }

    updateSearchInput = value => {
        this.setState({
          searchInput: value,
        })
      }

    componentDidMount(){
        this.getEmployeeData()
    }

    getEmployeeData = async () => {
        const response = await fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
        const data = await response.json() 
        
        const formattedData = data.map(eachObject => ({
            id:eachObject.id,
            employeeName:eachObject.name,
            employeeEmail:eachObject.email,
            employeeRole:eachObject.role
        }))
        
        this.setState({employeeData:formattedData})
    }

    onChangeSearchInput = event => {
        this.setState({
          searchInput: event.target.value,
        })
    }

    deleteItem = id => {
        const {employeeData} = this.state
        const updatedTodosList = employeeData.filter(eachObj => eachObj.id !== id)
    
        this.setState({
            employeeData: updatedTodosList,
        })
      }

    render(){
        const {employeeData,searchInput} = this.state
        const searchResults = employeeData.filter(eachSuggestion =>
            eachSuggestion.employeeName
              .toLowerCase()
              .includes(searchInput.toLowerCase()) ||  eachSuggestion.employeeEmail
              .toLowerCase()
              .includes(searchInput.toLowerCase()) || eachSuggestion.employeeRole
              .toLowerCase()
              .includes(searchInput.toLowerCase())
          )
      
        return (
            <div className = "app-container">
                <input type = "search" 
                   placeholder = "Search by name, email or role" 
                   className = "search-input"
                   onChange={this.onChangeSearchInput}
                   value = {searchInput}
                />
                <div className = "employee-elements-container">
                    <input type = "checkbox" className = "checkbox-style"/>
                    <h1 className = "employee-element-style">Name</h1>
                    <h1 className = "employee-element-style">Email</h1>
                    <h1 className = "employee-element-style">Role</h1>
                    <h1 className = "employee-element-style">Actions</h1>
                </div>
                <hr/>
                {/* {employeeData.map(item => (<EmployeeDetailsData employeeData={item} key = {item.id} />))} */}
                {searchResults.map(eachItem => (<EmployeeDetailsData employeeData={eachItem} key = {eachItem.id} updateSearchInput={this.updateSearchInput} deleteItem={this.deleteItem}/>))}
            </div>
        )
    }
}

export default EmployeeDetails