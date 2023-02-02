import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import AllWorkers from './components/AllWorker.jsx'
import AddWorkers from './components/AddWorkers.jsx'
import Details from './components/Details.jsx'
import UpdateWorker from './components/updateWorker.jsx'
const App = () => {
  const [items, setItems] = useState([])
  const [image,setImage]=useState("")
  const [name,setName]=useState("")
  const [jobTitle,setJobTitle]=useState("")
  const [view,setView]=useState("allWorker")
  const [serchname,setSerchname]=useState("")
  const[refech,setRefech]=useState(false)
  useEffect(() => {
    axios
    .get ('/api/items')
    .then((res)=>{
      setItems(res.data)
      console.log(res.data)
    }).catch((err)=>console.log(err))

  }, [])
  const changeView=()=>{
    if (view ==="allWorker"){
      return <AllWorkers items={items}  views={views}  />
    }else if (view ==="addWorker"){
      return <AddWorkers/>
    }else if (view ==="detels"){
      return <Details items={items}  />
    }else if (view ==="upd"){
      return <UpdateWorker items={items} refech={refech} />
    }
  }

  const views=(view)=>{
    setView(view)
  }
  
const getOne=(value)=>{
 let newArr = items.filter(e=> (value.toLowerCase()).includes(e.name.toLowerCase()) )
 setItems(newArr)
}

  return (
    <div>
      
      <div className="topnav">
      <img id='logo' src='https://www.pngitem.com/pimgs/m/523-5233379_employee-management-system-logo-hd-png-download.png' />
  <a className="active"  onClick={()=>{
    setView("allWorker")
  }}>All Workers</a>
  <a href="#about" onClick={()=>{
    setView("addWorker")
  }} >Add Worker</a>
  <div className="search-container">
      <input id='search' placeholder="Search.." onChange={(e)=>setSerchname(e.target.value)} value={serchname} />
      <button id='b' onClick={()=>{getOne(serchname)}} >Find</button>
  </div>
 
</div>
     
   {changeView()}
      
     
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
