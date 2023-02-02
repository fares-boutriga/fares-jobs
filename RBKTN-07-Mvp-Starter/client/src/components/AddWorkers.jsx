import axios from 'axios'
import React, { useState } from 'react'
import OneWorker from './OneWorker.jsx'

const  AddWorkers=(props)=> {
  const [image,setImage]=useState("")
    const [name,setName]=useState("")
    const [jobTitle,setJobTitle]=useState("")
    const [phoneNumber,setPhoneNumber]=useState("")
    const [email,setEmail]=useState("")
    const [recrutementDate,setRecrutementDate]=useState("")
    const [bankRib,setBankRib]=useState("")
    const [branche,setBranchet]=useState("")
    const [comment,setComment]=useState("")
  const addWorker=()=>{
    axios
    .post('/api/items/addone',{
      name:name,
      image:image,
      job_title:jobTitle,
      contact:{
        phone_number:phoneNumber,
        e_mail:email
      },
      description: {
        recrutement_date:recrutementDate,
        bank_rib:bankRib,
        branche:branche,
        comment:comment
      },
    }).then((response)=>{
      setItems(response)
    })
    .catch(err=>{console.log(err)})
   
  }
  <OneWorker image={image} setName={name} email={email} branche={branche} comment={comment} />
  return (
    <div>
      <form>
        <h4>Definition:</h4>
      <input className='inputeAdd' placeholder="name.." onChange={(e)=>setName(e.target.value)} value={name}/>
      <input className='inputeAdd' placeholder="Job Title.." onChange={(e)=>setJobTitle(e.target.value)} value={jobTitle}/>
      <input className='inputeAdd' placeholder="Image Link.." onChange={(e)=>setImage(e.target.value)} value={image}/>
      <h4>Contact:</h4>
      <input className='inputeAdd' placeholder="Phone Number.." onChange={(e)=>setPhoneNumber(e.target.value)} value={phoneNumber}/>
      <input className='inputeAdd' placeholder="e-mail"onChange={(e)=>setEmail(e.target.value)} value={email}/>
      <h4>Descriotion:</h4>
      <input className='inputeAdd'  type={"date"} onChange={(e)=>setRecrutementDate(e.target.value)} value={recrutementDate}/>
      <input className='inputeAdd' placeholder="RIB Of Bank" onChange={(e)=>setBankRib(e.target.value)} value={bankRib}/>
      <input className='inputeAdd' placeholder="Branche" onChange={(e)=>setBranchet(e.target.value)} value={branche}/><br/>
      <input className='inputeAdd' placeholder="Comments" onChange={(e)=>setComment(e.target.value)} value={comment}/><br/>
      <button onClick={addWorker}>Add Worker</button>
      <img src='https://www.pngitem.com/pimgs/m/523-5233379_employee-management-system-logo-hd-png-download.png' id='logoadd'/>
      </form>
    </div>
  )
}
export default  AddWorkers