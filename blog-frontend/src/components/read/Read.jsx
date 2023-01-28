import React, { useEffect, useState } from "react";
import { Table,Button } from 'semantic-ui-react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import Navbar from "../Navbar";
const Read = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
      axios.get('http://localhost:8082/blog/')
      .then((getData)=>{
          setApiData(getData.data);
         
    })
  },[])
  const getData=()=>
    {
      axios.get('http://localhost:8082/blog/')
      .then((getData)=>{
        setApiData(getData.data);
      })
    }

    const onDelete=(id)=>
    {
      axios.delete('http://localhost:8082/blog/delete/'+id)
      .then(()=>
      {
        getData();
      })
    }
    const setData=(id,title,categogy,author,content)=>{
      localStorage.setItem("ID",id);
      localStorage.setItem("title",title);
      localStorage.setItem("category",categogy);
      localStorage.setItem("author",author);
      localStorage.setItem("content",content);
    
    
    }
  return (
    <div>
<Navbar/>
 <section class="Background">
      
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col ">
            <div class="card card-table" >
              <div class="row g-0">
              <div class="d-flex justify-content-center pt-3">
              <h1 class="fw-Bolder mb-3 pb-3 headeing" >Blog List</h1>
              </div>
              <div>
              <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Category</Table.HeaderCell>
        <Table.HeaderCell>Author</Table.HeaderCell>
        <Table.HeaderCell>Content</Table.HeaderCell>
        <Table.HeaderCell>Edit</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
        
      </Table.Row>
    </Table.Header>

    <Table.Body>

 {apiData.map(data=>{
return(
  <Table.Row >
    
        <Table.Cell>{data.title}</Table.Cell>
        <Table.Cell>{data.category}</Table.Cell>
        <Table.Cell>{data.author}</Table.Cell>
        <Table.Cell>{data.content}</Table.Cell>
        <Table.Cell>
          <Link to='/update'>
          <Button color="green" onClick={()=>setData(data._id,data.title,data.category,data.author,data.content)}>Update</Button>
          </Link>
        </Table.Cell>
        <Table.Cell>
        
          <Button color="red" onClick={()=>onDelete(data._id)}>Delete</Button>
       
        </Table.Cell>
      </Table.Row>
)

     })}
    
    </Table.Body>
   
  </Table>
              </div><div class="d-flex justify-content-center pt-3">
              <Link to='/create'>
                      <button type="button" class="btn btn-secondary btn-lg">Create New Blog</button>
                     </Link>
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

export default Read