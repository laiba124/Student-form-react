import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

class AddStudent extends Component {
state={
     name: '',
    email: '',
    phone: '',
    city: '',
    message:'',
}
handleInput = (e) =>
{
    this.setState({
       [ e.target.name]: e.target.value
    });
}
saveStudent = async (e)=>
{
        e.preventDefault();        
        const res =await axios.post('http://127.0.0.1:8000/api/add-student',this.state); 
        if(res.data.status ===200) {
        console.log(res.data.message);
        this.setState({
            name: '',
            email: '',
            phone: '',
            city: '',
            message:'',
             
        });   
        alert("Record created Successfully");
      
    }
}
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>
                  Student Form
                  <Link to={"/"} className="btn btn-primary btn-sm float-right">
                    Back
                  </Link>
                </h4>
              </div>
              <div className="card-body">
                <form onSubmit={this.saveStudent} method="POST">
                  <div className="mb-3">                
                      <label  htmlFor="exampleFormControlInput1" className="label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Full name"
                      onChange={this.handleInput}
                      value={this.state.name}
                    />
                  </div>
                  <div className="mb-3">
                    <label  htmlFor="exampleFormControlInput1" className="label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      name="email"
                      placeholder="name@example.com"
                      onChange={this.handleInput}                      
                      value={this.state.email}       
                    />
                  </div>
                  <div className="mb-3">
                    <label  htmlFor="exampleFormControlInput1" className="label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      onChange={this.handleInput}
                      id="exampleFormControlInput1"
                      name="phone"
                      required
                      maxLength="10"
                       placeholder="(201) 555-0123"
                      value={this.state.phone}

                    />
                  </div>
                  <div className="mb-3">
                    <label onChange={this.handleInput} value={this.state.city} htmlFor="inputState">City
                    <select   name="city" id="inputState" className="form-control">
                      <option defaultValue>--Select--</option>
                      <option value="Islamabad">Islamabad</option>
                      <option value="Lahore">Lahore</option>
                      <option value="Multan">Multan</option>
                      <option value="Quetta">Quetta</option>
                      <option value="Peshawar">Peshawar</option>
                    </select>
                    </label>
                  </div>
                  <div className="mb-3">
                    <label  htmlFor="exampleFormControlTextarea1" className="form-label">
                      Message
                    </label>
                    <textarea
                    onChange={this.handleInput}
                    value={this.state.message}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    name="message"
                    rows="3"
                    /> 
                  </div>
                  <div className="mb-3"> 
                 <button
                      className="btn btn-primary"
                      id="btn"
                      type="submit"
                      name="submit"
                      value="submit">
                        Add Student
                      </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddStudent;
