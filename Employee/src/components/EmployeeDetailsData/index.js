import './index.css'

const EmployeeDetailsData = props => {
  const {employeeData,deleteItem} = props
  const {employeeName, employeeEmail, employeeRole,id,} = employeeData
  const onDeleteItem = () => {
    deleteItem(id)
  }

  return (
    <div className="employee-details-container">
      <div>
        <li className="list-style">
          <input type="checkbox" className="checbox-style"  />
        </li>
      </div>

      <div className="employee-name-container">
        <li className="list-style">
          <p className="employee-name ">{employeeName}</p>
        </li>
      </div>

      <div className="employee-email-container">
        <li className="list-style">
          <p className="employee-email">{employeeEmail}</p>
        </li>
      </div>

      <div className="employee-role-container">
        <li className="list-style">
          <p className="employee-role">{employeeRole}</p>
        </li>
      </div>

      <div className = "image-container">
          <img src = "https://res.cloudinary.com/dqu21kv9o/image/upload/v1629951179/update-icon_qgsffz.jpg" alt = "update"/>
          <img src = "https://res.cloudinary.com/dqu21kv9o/image/upload/v1629951198/del_icon_p5nkxw.jpg" alt = "del icon " onClick={onDeleteItem} className = "icon-style"/> 
      </div>
      </div>
  )
}

export default EmployeeDetailsData