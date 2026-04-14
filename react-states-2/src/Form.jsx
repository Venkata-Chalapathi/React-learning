import { useState } from "react";

export default function Form(){

    let [formData, setFormData] = useState({
        fullName : "",
        userName : "",
        password : "",
    });

    // let handleChangeName = (event) => {
    //     // console.log(event.target.value);  
    //     setFullName(event.target.value);
    // }
    // let handleUserName = (event) => {
    //     // console.log(event.target.value);  
    //     setUserName(event.target.value);
    // }

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newValue = event.target.value;
        // console.log(fieldName);
        // console.log(newValue);
        setFormData( (currData) => {
            currData[fieldName] = newValue;
            return {...currData};
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            fullName : "",
            userName : "",
            password : "",
        })
    }


    return (
        <form onSubmit={handleSubmit}>
            
            <label htmlFor="fullName">Full Name</label><br />
            <input placeholder="Enter your full name ? " type="text" value={formData.fullName} 
            onChange={handleInputChange} id="fullName" name="fullName"/><br />

            <label htmlFor="userName">User Name</label><br />
            <input placeholder="Enter your username ? " type="text" value={formData.userName} 
            onChange={handleInputChange} id="userName" name="userName"/><br />

            <label htmlFor="password">Password</label><br />
            <input placeholder="Enter your password ? " type="password" value={formData.password} 
            onChange={handleInputChange} id="password" name="password"/><br />


            
            <button>Submit</button>
        </form>
    );
}