import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Register(){
    let navigate = useNavigate();
    const [data, setData] = useState({
        first_name : "",
        last_name : "",
        email:"",
        password:""
    })
    function handleChange(e){
        setData({...data, [e.target.name]:e.target.value});
        //console.log(data)
    }

    function submitForm(e){
        e.preventDefault();
        const sendData ={
            first_name:data.first_name,
            last_name:data.last_name,
            email:data.email,
            password:data.password
        }
        console.log(sendData);

        axios.post("http://localhost/insert.php", sendData).then((result)=>{
            if(result.data.Status == 'Invalid'){
                alert('Invalid User');
            }
            else{
                navigate('/')
            }
                
        })
    }
    return (
        <div className="main-box">
        <form onSubmit={submitForm}>
            <div className="row">
                <div className="col-md-12 text-center"><h1>Register</h1></div>
            </div>
            <div className="row">
                <div className="col-md-6">First name</div>
                <div className="col-md-6">
                    <input type="text" name="first_name" value={data.first_name} className="form-control" onChange={handleChange}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">Last name</div>
                <div className="col-md-6">
                    <input type="text" name="last_name" value={data.last_name} className="form-control" onChange={handleChange}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">Email</div>
                <div className="col-md-6">
                    <input type="email" name="email" value={data.email} className="form-control" onChange={handleChange}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">Password</div>
                <div className="col-md-6">
                    <input type="password" name="password" value={data.password} className="form-control" onChange={handleChange}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <input type="submit" name="submit" value="Register" className="btn btn-success"/>
                </div>
                
            </div>
            </form>
        </div>
    )
}
export default Register;