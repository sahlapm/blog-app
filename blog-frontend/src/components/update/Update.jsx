import axios from 'axios';
import React, { useState,useEffect } from 'react';
import {useNavigate,Link} from 'react-router-dom' ;
import image from '../image/registration.jpg';
import Navbar from "../Navbar";

const Update = () => {
  
  const [title,setTitle]=useState('');
  const [category,setCategory]=useState('');
  const [content,setContent]=useState('');
  const [author,setAuthor]=useState('');
  const [ID,setID]=useState(null);
  const navigate=useNavigate();

  const sendDataToAPI = ()=>{
  axios.put(`/api/blog/update/${ID}`,
  {title,author,
  category,
  content
  }
  ).then((res)=>{
   
    navigate('/read');
   })
  }

  useEffect(()=>{
  setTitle(localStorage.getItem('title'));
  setCategory(localStorage.getItem('category'));
  setAuthor(localStorage.getItem('author'));
  setContent(localStorage.getItem('content'));
  setID(localStorage.getItem('ID'));
 
  },[]
  )
  
  return (
    <div>
        <Navbar/> 
      <section className="Background">
      
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col ">
          <div className="card card-form" >
            <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
            <img className='logo ms-100 w-100 vh-100 img' src={image} alt="logo"  />
                </div>
                <div className="col-xl-6">
            <form>
              <div className="card-body p-md-5 text-black">
              <div className="d-flex justify-content-center pt-3">
              <h1 className="fw-Bolder mb-3 pb-3 headeing" >Update Blog</h1>
              </div>
              <br/><br/>
  <div className="form-outline mb-2">

    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Title"/>
   
  </div>
  <br/>
  <div className="form-outline mb-2">
  
    <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Author"/>
  </div>
  <br/>
  <div className="form-outline mb-2"  >
      <select id="Select" value={category} className="form-control form-control-lg"  onChange={(e)=>setCategory(e.target.value)} placeholder="Category">
        <option>Category</option>
        <option>Health</option>
        <option>Travel</option>
        <option>Food</option>
        <option>Story</option>
        <option>LifeStyle</option>
        <option>Fashion</option>
        <option>Technology</option>
        <option>DIY</option>
      </select>
    </div>
  <br/>
  <div className="form-outline mb-2">
  
    <input type="text" value={content} onChange={(e)=>setContent(e.target.value)} className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Content"/>
  </div>
  <br/>
  <div className="d-flex justify-content-center pt-3">
  <Link to='/read'>
                      <button type="button" className="btn btn-secondary btn-lg">Back</button>
                      </Link>
                      <button onClick={sendDataToAPI} type="button" className="btn btn-secondary btn-lg ms-2">Update</button>
                    </div> 
  </div>
</form>
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</section>
    </div>
  )
}

export default Update