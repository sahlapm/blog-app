import axios from 'axios';
import image from '../image/registration.jpg';
import React, { useState } from 'react';
import {useNavigate,Link} from 'react-router-dom' 
import Navbar from '../Navbar';



const Create = () => {
  const navigate=useNavigate();
  const [title,setTitle]=useState('');
  const [category,setCategory]=useState('');
  const [content,setContent]=useState('');
  const [author,setAuthor]=useState('');


  const sendDataToAPI = ()=>{
  axios.post(`http://localhost:8082/blog/create`,
  {title,
   author,category,content
  }
  ).then(()=>{
    navigate('/read');
   })
  }
 
  
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
              <h1 className="fw-Bolder mb-3 pb-3 headeing" >Create Blog</h1>
              </div>
              <br/><br/>
  <div className="form-outline mb-2">

    <input type="text"  onChange={(e)=>setTitle(e.target.value)} className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Title"/>
   
  </div>
  <br/>
  <div className="form-outline mb-2">
  
    <input type="text"  onChange={(e)=>setAuthor(e.target.value)} className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Author"/>
  </div>
  <br/>
 
    <div className="form-outline mb-2">
      
      <select id="Select" className="form-control form-control-lg"  onChange={(e)=>setCategory(e.target.value)} placeholder="Category">
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
  
    <input type="text"  onChange={(e)=>setContent(e.target.value)} className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Content"/>
  </div>

  

  <br/>
  <div className="d-flex justify-content-center pt-3">
  <Link to='/read'>
                      <button type="button" className="btn btn-secondary btn-lg">Back</button>
                      </Link>
                      <button onClick={sendDataToAPI} type="submit" className="btn btn-secondary btn-lg ms-2">Create</button>
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

export default Create