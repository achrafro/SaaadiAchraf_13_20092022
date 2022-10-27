import React, { useState } from 'react'
import './User.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../Footer/Footer'
import axios from 'axios'
import {useSelector} from 'react-redux'
import {Navigate, useNavigate} from 'react-router-dom'


function User() {
const [isTextClicked,SetisTextClicked] = useState(false)
const [FirstNamee,setFirstNamee] = useState("")
const [LastNamee,setLastNamee] = useState("")
const [NewFirstNamee,setNewFirstNamee] = useState("")
const [NewLastNamee,setNewLastNamee] = useState("")
const loggedState = useSelector (state=>state.isLogged);
console.log(loggedState);
const navigate = useNavigate();



const tokkenn = 'Bearer'+localStorage.getItem('token');
 
  
    axios.post('http://localhost:3001/api/v1/user/profile', {

       
   
    },
    {
              headers: {
                  'accept': 'application/json',
                  'Authorization': tokkenn
              }
          })
    .then(function (response) {
       setFirstNamee(response.data.body.firstName)
       setLastNamee(response.data.body.lastName)


      })
    .catch(function (error) {
      console.log(error);
     });
  

  

 
function EditName() {
 
  SetisTextClicked(true)

}

function ModifierName (e) {
  e.preventDefault();
   axios.put(
    'http://localhost:3001/api/v1/user/profile',
    {
        'firstName': NewFirstNamee,
        'lastName': NewLastNamee
    },
    {
        headers: {
            'accept': 'application/json',
            'Authorization': tokkenn,
            'Content-Type': 'application/json'
        }
    }
);

SetisTextClicked(false)


}

function cancel (e){
  e.preventDefault();
  SetisTextClicked(false)

}
function fnamechanged (e) {
 setNewFirstNamee(e.target.value)
}

function lnamechanged (e) {
  setNewLastNamee(e.target.value)

 }
 


  return (

 

 <>
    
    <>
<Navbar user={FirstNamee}></Navbar>

<main className="main bg-dark">
      <div className="header">
        <h1 >Welcome back </h1>
      {!isTextClicked ?  <h1 className='username_profile' > {FirstNamee} {LastNamee}!</h1> 
      : <> 
     <div className='formulaire' > 
       <form> 
      <input type="text" onChange={fnamechanged} className="fname" name="fname" placeholder={FirstNamee}/>  
      <input type="text" onChange={lnamechanged} className="lname" placeholder={LastNamee}/>  
      <br></br>
      <button className='btn' onClick={ModifierName}> Save </button>
      <button className="btn" onClick={cancel} > Cancel </button>
      </form>
</div>
      <br/>
      </>
      }
      {!isTextClicked ?  <button className="edit-button" onClick={EditName} >Edit Name</button> : <> </> }
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    
  
    </main>


<Footer></Footer>
</>
 
{/* {loggedState == false &&  

  navigate('/') 

} */}
 </>
    
  )
}

export default User