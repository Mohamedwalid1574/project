import {Link} from "react-router-dom";
import './signup.css';
import LI from './Images/LI.png';
import Black_logo from'./Images/black-logo.png';
import G_logo  from './Images/g-logo.png';
import { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../model/firebaseConfige"
import {db} from "../model/firebaseConfige"
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault()
   
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/login")
          // ...
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
      });

 
  }
  return (
    <>
  <div className="row col-md-10 offset-md-1">
  <div >
  <div className="NGR-header"><img className='NGR-logo' src={LI}/></div>
  <h1>Make the most of your professional life</h1>
  <form className="NGR-frm  offset-md-4">
    <label>Email</label><br></br>
    <input id="email" type="email" onChange={(e)=>{setEmail(e.target.value)}}></input><br></br>
    <label>Password (6 or more characters)</label><br></br>
    <input id="password" type="password"  onChange={(e)=>{setPassword(e.target.value)}}></input><br></br>
    <p className="NGR-user-copyright">
        By clicking Agree & Join, you agree to the LinkedIn 
        <a className="NGR-user-copyrights">User Agreement</a>,
        <a className="NGR-user-copyrights">Privacy Policy</a>, and 
        <a className="NGR-user-copyrights">Cookie Policy</a>.
    </p>
    <button className="NGR-agree-btn " id="signup" type="submit" onClick={onSubmit}>Agree & Join</button><br></br>
    <div className='d-flex'><hr></hr>    <span>&nbsp; &nbsp; &nbsp;or &nbsp; &nbsp; &nbsp;</span>   <hr></hr></div>
    <button className="NGR-agree-btn-google" type="submit">Continue with Google<img className="NGR-g-logo" src={G_logo} /></button>
    <p className="NGR-Already-on-LinkedIn">Already on LinkedIn <a className="NGR-user-copyrights" href="/signin">Sign in</a></p>
  </form>
  <p className="NGR-get-help ">Looking to create a page for a business?<a className="NGR-user-copyrights"> Get help </a></p>
    </div>

</div>
    <div className='NGR-footer'>
    <img className="NGR-black-logo "src={Black_logo}/>
      <span className="NGR-footer-texts">©  2021</span>
      <a className="NGR-footer-texts" href='www.google.com' >About</a>
      <a className="NGR-footer-texts" href='www.google.com' >Accessibilty</a>
      <a className="NGR-footer-texts" href='www.google.com' >User Agreement</a>
      <a className="NGR-footer-texts" href='www.google.com' >Privacy Policy</a>
      <a className="NGR-footer-texts" href='www.google.com' >Cookie Policy</a>
      <a className="NGR-footer-texts" href='www.google.com' >Copyright Policy</a>
      <a className="NGR-footer-texts" href='www.google.com' >Brand Policy</a>
      <a className="NGR-footer-texts" href='www.google.com' >Guest Controls</a>
      <a className="NGR-footer-texts" href='www.google.com' >Community Guidelines</a>
      
    <select className="NGR-slct">
        <option>Language</option>
        <option >English</option>
        <option >Spanish</option>
        <option  >Arabic</option>
        <option >Germany</option>
        </select>
    
    </div>
    </>
  );
}
 
export default Signup;
