import React, {useEffect, useState} from 'react';
import axios from 'axios';

 const App = () => {
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    useEffect(() =>{
        sendedName()
    },[])

    const sendedName=async()=>{
        try{
            await axios.get('http://localhost:4000/app').then((res)=>{
                console.log('Esta es la resppuesta del backend', res.data);
                setMessage(res.data)
            })
        }
        catch(e){
            console.log('error', e)
        }
    }

    // const handleChangeName =(e)=>{
    //     setName({
    //         name: e.target.value
    //     })
    // }

    async function handleSendName (e) {
        e.preventDefault()

       
            await axios.post("http://localhost:4000/name", {name} 
            ).then(res => {
                console.log(res)
                console.log(res.data)
            })
        
        
    }
        
    return(
        <>
          <h1>Tu nombre</h1>
          <form onSubmit={handleSendName}>
            <input type="text" 
             placeholder='nombre' 
             onChange={(e)=> setName(e.target.value)}   
             name='name'   
            /> 
            <button type='submit'>Submit</button>   
            <h3>{message}</h3>
          </form>  
        </>
    )
}
export default App