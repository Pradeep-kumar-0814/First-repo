import React from 'react'
import './Login.css'
function Login({setName}) {
  const addName=(event)=>{
    event.preventDefault();
   let mail = event.target.uemail.value;
   setName(mail);
  }
  return (
    <div id='User_Main'>
      <h1> This Is My Login Page</h1>
     <div id='User_Form'>
        <form onSubmit={addName}>
          <table>
            <tr>
              <td><h3>User Name</h3></td>
              <td><input type='text' name='uname' placeholder='Enter User Name Here'/></td>
            </tr>

            <tr>
              <td><h3>User Number</h3></td>
              <td><input type='number' name='unum' placeholder='Enter User Number Here'/></td>
            </tr>

            <tr>
              <td><h3>User Email</h3></td>
              <td><input type='email' name='uemail' placeholder='Enter User Email Here'/></td>
            </tr>

            <tr>
              <td><input type='submit' id='select'/></td>
            </tr>
          </table>
        </form>
     </div>
    </div>
  )
}

export default Login
