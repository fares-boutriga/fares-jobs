import axios from "axios";
import React,{useState} from "react";
const OneWorker=(props)=>{
    const[refech,setRefech]=useState(false)
    const [show,setShow]=useState(false)
    const [show1,setShow1]=useState(false)
    const [image,setImage]=useState("")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [branche,setBranchet]=useState("")
    const [comment,setComment]=useState("")
    const deletee = (id)=>{
        axios
        .delete(`/api/items/delete/${id}`)
        .then((res)=>setRefech(!refech))
        .catch((err)=>console.log(err))
    }
    const updaa=(id,name,image,email,branche,comment)=>{
        axios
        .put(`/api/items/update/${id}`,{
            _id:id,
          name:name,
          image:image,
          contact:{
            e_mail:email
          },
          description: {
            branche:branche,
            comment:comment
          },
        }).then((response)=>
        console.log(response)
        )
        .catch(err=>console.log(err))
      }
return(
    <div id="cards">
    <div className="oneworker" >
   <img src={props.items.image} onClick={()=>(
       setShow(!show)
    
)}/>
   <div className="container">
        <p>{props.items.name}</p>
        <p>{props.items.job_title}</p>
        
        </div>
        {show&&(     <div className="container">
      
        <p>{props.items.contact.phone_number}</p>
        <p>{props.items.contact.e_mail}</p>
        <p>{props.items.description.recrutement_date}</p>
        <p>{props.items.description.bank_rib}</p>
        <p>{props.items.description.branche}</p>
        <p>{props.items.description.comment}</p>
        <button onClick={()=>deletee(props.items._id)}>delete</button>
        <button onClick={()=>(setShow1(!show1))} >To update</button>
        </div>) }
       
        {
            show1&&(
                <div>
              
                <input className='inputeAdd' placeholder="name.." onChange={(e)=>setName(e.target.value)} value={name}/>
                <input className='inputeAdd' placeholder="Image Link.." onChange={(e)=>setImage(e.target.value)} value={image}/>
                <input className='inputeAdd' placeholder="e-mail"onChange={(e)=>setEmail(e.target.value)} value={email}/>
                <input className='inputeAdd' placeholder="Branche" onChange={(e)=>setBranchet(e.target.value)} value={branche}/>
                <input className='inputeAdd' placeholder="Comments" onChange={(e)=>setComment(e.target.value)} value={comment}/>
                <button onClick={()=>(updaa(props.items._id,name,image,email,branche,comment))}>Update</button>
                
                  </div>
            )
        }
        </div>
        </div>
    )}
   
export default OneWorker