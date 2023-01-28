import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from 'axios';

const Home = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
      axios.get('http://localhost:8082/blog/')
      .then((getData)=>{
          setApiData(getData.data);
         
    })
  },[])
  

   
    
  return (
    <div>
  <Navbar/>
 <section className="Background">
      
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col ">
            <div className="card card-table" >
              <div className="row g-0">
              <div className="d-flex justify-content-center pt-3">
              <h1 className="fw-Bolder mb-3 pb-3 headeing" >Blog List</h1>
              </div>
              <div>
       



              <div classNameName="row">
            <div classNameName="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

               
                <div classNameName="row g-3">

                {apiData.map(data=>{
return(
  <div classNameName="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6">

                          <div className="card text-bg-light mb-3" >
                          <div className="card-header">{data.category}</div>
                          <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text">{data.content}</p>
                            <h5 className="card-title">{data.author}</h5>
                          </div>
                        </div>
                        </div>
                        )
                    }
                )}

    </div>

                    </div>
                </div>
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

export default Home