import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Student extends Component {
 
  state = {
    students: [],
    loading: true,
 
  };
  async componentDidMount() {
    const res = await axios.get("http://127.0.0.1:8000/api/students/");
    if (res.data.status === 200) {
      this.setState({
        students: res.data.students,
        loading: false,
         
      });
    }
  }
  deleteStudent = async (e, id) => {
    e.preventDefault();
    const text = e.currentTarget;
    text.InnerText = "Deleting";
    const res = await axios.get(`http://127.0.0.1:8000/api/delete/${id}`);
    if (res.data.status === 200) {
      console.log(id);
      text.closest("tr").remove();
      console.log(res.data.message);
      console.log("ok:)");
      alert("Record Deleted Successfully");
    } else {
      console.log("err");
    }
  };
  
  render() {
    var student_HTMLTABLE = "";
    if (this.state.loading) {
      student_HTMLTABLE = (
        <tr>
          <td colSpan="7">
            <h4>Loading...</h4>
          </td>
        </tr>
      );
    } else {
      var student_HTMLTABLE = this.state.students.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.city}</td>
            <td>{item.message}</td>
            <td>
            <Link to={`view/${item.id}`} className="btn btn-success btn-sm">
                View
              </Link>
              &nbsp;&nbsp;
              <Link to={`edit/${item.id}`} className="btn btn-primary btn-sm">
                Edit
              </Link>
              &nbsp;&nbsp;
              <Link
                to={`delete/${item.id}`}
                onClick={(e, i) => this.deleteStudent(e, item.id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </Link>
              &nbsp;&nbsp;
            </td>
          </tr>
        );
      });
    }
    return (
      <>
 
         <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4>
                    Student Data
                    <Link
                      to={"add-student"}
                      className="btn btn-primary btn-sm float-right"
                    >
                      Add Student
                    </Link>
                  </h4>
                </div>
                <div className="card-body">
                  <table className="table">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">City</th>
                        <th scope="col">Message</th>
                        <th colSpan="2">Action</th>
                      </tr>
                    </thead>
                    <tbody>{student_HTMLTABLE}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Student;
