import React, { useState } from 'react'
import './contact.css'
import { useAuth0 } from "@auth0/auth0-react";
const Contact = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [users,setUser] =useState ({
    Name: '',Email: '',Subject: '',Message: ''
  })
  let name, value
  const data = (e) =>
  {
    name = e.target.name;
    value = e.target.value;   
    setUser({...users, [name]: value})
  }
  const senddata = async (e)=>
  {
    const {Name, Email, Subject, Message} = users
    e.preventDefault();
    const options ={
      method: 'POST',
      headers: {
        'Content-Type' : 'aplication/json'
      },
      body: JSON.stringify({
        Name, Email, Subject, Message
      })
    }
    const res = await fetch('https://smart-pride-407806-default-rtdb.firebaseio.com/Message.json', options)
    console.log(res)
    if(res)
    {
      alert("Your Message Send")
    }
    else
    {
      alert("An error occured")
    }
  }
  return (
    <>
    <div className='contact_container'>
        <div className='contant'>
        <h2># contact Us</h2>
             <div className='form'>
                <form method='POST'>
                <input type='text' name='Name' value={users.Name} placeholder='Enter your Full Name' required autoComplete='off' onChange={data}></input>
                <input type='email' name='Email'value={users.Email} placeholder='Email' required autoComplete='off' onChange={data}></input>
                <input type='text' name='Subject' value={users.Subject} placeholder='Enter your Subject' required autoComplete='off' onChange={data}></input>
                <textarea name='Message' value={users.Message} placeholder='Your Message' required autoComplete='off' onChange={data}></textarea>
                {
                  isAuthenticated?
                  <button type='submit' onClick={senddata}>Send</button>
                  :   <button type='submit' onClick={() => loginWithRedirect()}>Login to send</button>
                }
                </form>
             </div>
        </div>
    </div>
    </>
  )
}

export default Contact