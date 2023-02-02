import React from "react";
const Details=(props)=>{
    return(
        <div>
            {props.items.map((items, index) => (
        <div className="details" key={index}>
             <img src={items.image}/>
   <div className="container">
        <p>{items.name}</p>
        <p>{items.job_title}</p>
        <p>{items.contact.phone_number}</p>
        <p>{items.contact.e_mail}</p>
        <p>{items.description.recrutement_date}</p>
        <p>{items.description.bank_rib}</p>
        <p>{items.description.branche}</p>
        <p>{items.description.comment}</p>
        <button>delete</button>
        </div>
        </div>))}
        </div>
    )
}
export default Details