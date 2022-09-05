import axios from "axios";
import React, { useEffect, setState, useState } from "react";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function ViewStudent() {
  const stud_id = useParams();
  const [input, setinput] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/view/${stud_id.id}`).then((res) => {
      if (res.data.status === 200) {
 
        setinput(res.data.student);
        console.log(res.data.student);
        console.log(res.data.student);
        console.log(res.data.student);
        console.log(res.data.student);


      } else {
        console.log("ERROR");
      }
    });
  }, []);
 let mystyle = {
    textalign :"center",
    alignitem :"center",
    border : "4px black",
  }
  return (
    <>
    <div className="md-center bg-light"style={mystyle}>
      <div className="container  py-5 co-sm-10 align-center ">
      <div class="row col-sm-15">
   <div class="col-sm-12 my-auto">
        <div className="row">
          <div className="col-md-6 my-6 ">
            <div className="card" >
              <div className="card-header bg-dark">
                <img
                  src="https://img.icons8.com/bubbles/100/000000/user.png"
                  className="rounded mx-auto d-block "
                  alt="User-Profile-Image"
                />
              </div>
              <h4 value="{{$students_records->name}}" className="f-w-600 ml-6 align-self-center  ">
              {input.name}
              </h4>
               <i className="pl-10 mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="card-block">
              <h3 className=" py-4 m-b-20 p-b-5 b-b-default f-w-600">
                Information
              </h3>
              <div className="row">
                <div className="col-sm-6 pl-5">
                  <h5 className="m-b-10 f-w-600">Email</h5>
                  <h6 className="text-muted f-w-400">{input.email}</h6>
                </div>
                <div className="col-sm-6 pl-5">
                  <h5 className="m-b-10 f-w-600">Phone</h5>
                  <h6 className="text-muted f-w-400">{input.phone}</h6>
                </div>
                <div className="col-sm-6 pl-5">
                  <h5 className="m-b-10 f-w-600">City</h5>
                  <h6 className="text-muted f-w-400">{input.city}</h6>
                </div>
                <div className="col-sm-6 pl-5">
                  <h5 className="m-b-10 f-w-600">Bio</h5>
                  <h6 className="text-muted f-w-400"> {input.message}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div></div></div>
    </>
  );
}
