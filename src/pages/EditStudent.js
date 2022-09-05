import axios from "axios";
import React, { useEffect, setState, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditStudent = () => {
  const stud_id = useParams();
  const [input, setinput] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/edit/${stud_id.id}`).then((res) => {
      if (res.data.status === 200) {
        setinput(res.data.student);
      } else {
        console.log("ERROR");
      }
    });
  }, []);
  const handleInput = (e) => {
    e.persist();
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const updateStudent = async (e) => {
    e.preventDefault();

    const data = {
      name: input.name,
      email: input.email,
      phone: input.phone,
      city: input.city,
      message: input.message,
    };
    const res = await axios.put(
      `http://127.0.0.1:8000/api/update/${stud_id.id}`,
      data
    );
    if (res.data.status === 200) {
      console.log(res.data.message);
      console.log("ok:)");
      alert("Record Updated Successfully");
    } else {
      console.log("err");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>
                Student Edit Form
                <Link to={"/"} className="btn btn-primary btn-sm float-right">
                  Back
                </Link>
              </h4>
            </div>
            <div className="card-body">
              <form onSubmit={updateStudent}>
                <div className="mb-3">
                  {/* <input type="hidden" name="id" value={this.props.id} /> */}
                  <label htmlFor="exampleFormControlInput1" className="label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Full name"
                    onChange={handleInput}
                    value={input.name}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    placeholder="name@example.com"
                    onChange={handleInput}
                    value={input.email}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    onChange={handleInput}
                    id="exampleFormControlInput1"
                    name="phone"
                    required
                    maxLength="10"
                    placeholder="(201) 555-0123"
                    value={input.phone}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputState">
                    City
                    <select
                      onChange={handleInput}
                      value={input.city}
                      name="city"
                      id="inputState"
                      className="form-control"
                    >
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
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    onChange={handleInput}
                    value={input.message}
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
                    value="submit"
                  >
                    Update Student
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStudent;
