/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import './signin.css';
import LI from './Images/LI.png';
import { useState } from "react";
import { auth } from "../model/firebaseConfige"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
     
  const onLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/profile")
          console.log(user);
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
      });
     
  }

  return (
      <>
  <div className="row col-md-10 offset-md-1">
      <div className="NGR-header"><img className='NGR-logo' src={LI}/></div>
  <div className="NGR-frm box-shadow shadow  mb-5 bg-body rounded ">
  <form>
    <h1>Sign in</h1>
    <p>Stay updated on your professional world</p>
    
    <input placeholder=" &nbsp;Email or Phone"  type="email" className="NGR-input2"  onChange={(e)=>{setEmail(e.target.value)}}></input><br></br>
    <input id="pass" placeholder=" &nbsp;Password"   className="NGR-password-input NGR-input2" type="password"  onChange={(e)=>{setPassword(e.target.value)}}></input><br></br>
    
        <a className="NGR-forgot-password NGR-a">Forgot password?</a>
    
    <button className="NGR-sign-in-btn btn" type="submit" onClick={onLogin}>Sign in</button><br></br>
    <div className='d-flex'><hr></hr>    <span className="mrgn-top-10px">&nbsp; &nbsp; &nbsp;or &nbsp; &nbsp; &nbsp;</span>   <hr></hr></div>
    <button className="NGR-agree-btn-apple btn" type="submit">
       <svg width="24" height="24" viewBox="0 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" fill="transparent">
      </rect><path d="M17.569 12.6254C17.597 15.652 20.2179 16.6592 20.247 16.672C20.2248 16.743 19.8282 18.1073 18.8662 19.5166C18.0345 20.735 17.1714 21.9488 15.8117 21.974C14.4756 21.9986 14.046 21.1799 12.5185 21.1799C10.9915 21.1799 10.5142 21.9489 9.2495 21.9987C7.93704 22.0485 6.93758 20.6812 6.09906 19.4673C4.38557 16.9842 3.0761 12.4508 4.83438 9.39061C5.70786 7.87092 7.26882 6.90859 8.96311 6.88391C10.2519 6.85927 11.4683 7.753 12.2562 7.753C13.0436 7.753 14.5219 6.67821 16.0759 6.83605C16.7265 6.8632 18.5527 7.09947 19.7253 8.81993C19.6309 8.87864 17.5463 10.095 17.569 12.6254ZM15.058 5.1933C15.7548 4.34789 16.2238 3.171 16.0959 2C15.0915 2.04046 13.877 2.67085 13.1566 3.5158C12.5109 4.26404 11.9455 5.46164 12.0981 6.60946C13.2176 6.69628 14.3612 6.03925 15.058 5.1933Z" fill="black">
      </path></svg> Sign in with Apple</button>
  </form>
    </div>
</div>
  <p className="mrgn-top-10px NGR-new-to-linkedin">New to LinkedIn?<a className="NGR-join-now"> Join now </a></p>


      <div className='NGR-footer'>

        {/* <span><svg preserveAspectRatio="xMinYMin meet" focusable="false"><g className="scaling-icon" style="fill-opacity: 1"><defs></defs><g className="logo-14dp">
    <g className="dpi-1"><g className="inbug" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <path d="M14,1.25 L14,12.75 C14,13.44 13.44,14 12.75,14 L1.25,14 C0.56,14 0,13.44 0,12.75 L0,1.25 C0,0.56 0.56,0 1.25,0 L12.75,0 C13.44,0 14,0.56 14,1.25" className="bug-text-color" fill="#FFFFFF" transform="translate(42.000000, 0.000000)">
    </path>
    <path d="M56,1.25 L56,12.75 C56,13.44 55.44,14 54.75,14 L43.25,14 C42.56,14 42,13.44 42,12.75 L42,1.25 C42,0.56 42.56,0 43.25,0 L54.75,0 C55.44,0 56,0.56 56,1.25 Z M47,5 L48.85,5 L48.85,6.016 L48.893,6.016 C49.259,5.541 50.018,4.938 51.25,4.938 C53.125,4.938 54,5.808 54,8 L54,12 L52,12 L52,8.75 C52,7.313 51.672,6.875 50.632,6.875 C49.5,6.875 49,7.75 49,9 L49,12 L47,12 L47,5 Z M44,12 L46,12 L46,5 L44,5 L44,12 Z M46.335,3 C46.335,3.737 45.737,4.335 45,4.335 C44.263,4.335 43.665,3.737 43.665,3 C43.665,2.263 44.263,1.665 45,1.665 C45.737,1.665 46.335,2.263 46.335,3 Z" className="background" fill="#0073B0"></path></g><g className="linkedin-text">
    <path d="M40,12 L38.107,12 L38.107,11.1 L38.077,11.1 C37.847,11.518 37.125,12.062 36.167,12.062 C34.174,12.062 33,10.521 33,8.5 C33,6.479 34.291,4.938 36.2,4.938 C36.971,4.938 37.687,5.332 37.97,5.698 L38,5.698 L38,2 L40,2 L40,12 Z M36.475,6.75 C35.517,6.75 34.875,7.49 34.875,8.5 C34.875,9.51 35.529,10.25 36.475,10.25 C37.422,10.25 38.125,9.609 38.125,8.5 C38.125,7.406 37.433,6.75 36.475,6.75 L36.475,6.75 Z" fill="#000000">
    </path><path d="M31.7628,10.8217 C31.0968,11.5887 29.9308,12.0627 28.4998,12.0627 C26.3388,12.0627 24.9998,10.6867 24.9998,8.4477 C24.9998,6.3937 26.4328,4.9377 28.6578,4.9377 C30.6758,4.9377 31.9998,6.3497 31.9998,8.6527 C31.9998,8.8457 31.9708,8.9997 31.9708,8.9997 L26.8228,8.9997 L26.8348,9.1487 C26.9538,9.8197 27.6008,10.5797 28.6358,10.5797 C29.6528,10.5797 30.2068,10.1567 30.4718,9.8587 L31.7628,10.8217 Z M30.2268,7.9047 C30.2268,7.0627 29.5848,6.4297 28.6508,6.4297 C27.6058,6.4297 26.9368,7.0597 26.8728,7.9047 L30.2268,7.9047 Z" fill="#000000">
    </path><polygon fill="#000000" points="18 2 20 2 20 7.882 22.546 5 25 5 21.9 8.199 24.889 12 22.546 12 20 8.515 20 12 18 12"></polygon><path d="M10,5 L11.85,5 L11.85,5.906 L11.893,5.906 C12.283,5.434 13.031,4.938 14.14,4.938 C16.266,4.938 17,6.094 17,8.285 L17,12 L15,12 L15,8.73 C15,7.943 14.821,6.75 13.659,6.75 C12.482,6.75 12,7.844 12,8.73 L12,12 L10,12 L10,5 Z" fill="#000000"></path><path d="M7,12 L9,12 L9,5 L7,5 L7,12 Z M8,1.75 C8.659,1.75 9.25,2.341 9.25,3 C9.25,3.659 8.659,4.25 8,4.25 C7.34,4.25 6.75,3.659 6.75,3 C6.75,2.341 7.34,1.75 8,1.75 L8,1.75 Z" fill="#000000">
    </path><polygon fill="#000000" points="0 2 2 2 2 10 6 10 6 12 0 12"></polygon></g></g><g className="dpi-gt1" transform="scale(0.2917)"><g className="inbug" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M44.5235,0 L3.6185,0 C1.6625,0 0.0005,1.547 0.0005,3.454 L0.0005,44.545 C0.0005,46.452 1.6625,48 3.6185,48 L44.5235,48 C46.4825,48 48.0005,46.452 48.0005,44.545 L48.0005,3.454 C48.0005,1.547 46.4825,0 44.5235,0" className="bug-text-color" fill="#FFFFFF" transform="translate(143.000000, 0.000000)"></path><path d="M187.5235,0 L146.6185,0 C144.6625,0 143.0005,1.547 143.0005,3.454 L143.0005,44.545 C143.0005,46.452 144.6625,48 146.6185,48 L187.5235,48 C189.4825,48 191.0005,46.452 191.0005,44.545 L191.0005,3.454 C191.0005,1.547 189.4825,0 187.5235,0 Z M162,18 L168.5,18 L168.5,21.266 C169.437,19.388 171.838,17.7 175.445,17.7 C182.359,17.7 184,21.438 184,28.297 L184,41 L177,41 L177,29.859 C177,25.953 176.063,23.75 173.68,23.75 C170.375,23.75 169,26.125 169,29.859 L169,41 L162,41 L162,18 Z M150,41 L157,41 L157,18 L150,18 L150,41 Z M158,10.5 C158,12.985 155.985,15 153.5,15 C151.015,15 149,12.985 149,10.5 C149,8.015 151.015,6 153.5,6 C155.985,6 158,8.015 158,10.5 Z" className="background" fill="#0073B0">
    </path></g><g className="linkedin-text"><path d="M136,41 L130,41 L130,37.5 C128.908,39.162 125.727,41.3 122.5,41.3 C115.668,41.3 111.2,36.975 111.2,30 C111.2,23.594 114.951,17.7 121.5,17.7 C124.441,17.7 127.388,18.272 129,20.5 L129,7 L136,7 L136,41 Z M123.25,23.9 C119.691,23.9 117.9,26.037 117.9,29.5 C117.9,32.964 119.691,35.2 123.25,35.2 C126.81,35.2 129.1,32.964 129.1,29.5 C129.1,26.037 126.81,23.9 123.25,23.9 L123.25,23.9 Z" fill="#000000"></path><path d="M108,37.125 C105.722,40.02 101.156,41.3 96.75,41.3 C89.633,41.3 85.2,36.354 85.2,29 C85.2,21.645 90.5,17.7 97.75,17.7 C103.75,17.7 108.8,21.917 108.8,30 C108.8,31.25 108.6,32 108.6,32 L92,32 L92.111,32.67 C92.51,34.873 94.873,36 97.625,36 C99.949,36 101.689,34.988 102.875,33.375 L108,37.125 Z M101.75,27 C101.797,24.627 99.89,22.7 97.328,22.7 C94.195,22.7 92.189,24.77 92,27 L101.75,27 Z" fill="#000000"></path><polygon fill="#000000" points="63 7 70 7 70 27 78 18 86.75 18 77 28.5 86.375 41 78 41 70 30 70 41 63 41"></polygon><path d="M37,18 L43,18 L43,21.375 C43.947,19.572 47.037,17.7 50.5,17.7 C57.713,17.7 59,21.957 59,28.125 L59,41 L52,41 L52,29.625 C52,26.969 52.152,23.8 48.5,23.8 C44.8,23.8 44,26.636 44,29.625 L44,41 L37,41 L37,18 Z" fill="#000000"></path><path d="M29.5,6.125 C31.813,6.125 33.875,8.189 33.875,10.5 C33.875,12.811 31.813,14.875 29.5,14.875 C27.19,14.875 25.125,12.811 25.125,10.5 C25.125,8.189 27.19,6.125 29.5,6.125 L29.5,6.125 Z M26,41 L33,41 L33,18 L26,18 L26,41 Z" fill="#000000">
    </path><polygon fill="#000000" points="0 7 7 7 7 34 22 34 22 41 0 41"></polygon></g></g></g></g></svg></span>
      */}
        <span className="NGR-footer-texts">©  2021</span>
        <a className="NGR-a NGR-a NGR-footer-texts" href='www.google.com' >About</a>
        <a className="NGR-a NGR-footer-texts" href='www.google.com' >Accessibilty</a>
        <a className="NGR-a NGR-footer-texts" href='www.google.com' >User Agreement</a>
        <a className="NGR-a NGR-footer-texts" href='www.google.com' >Privacy Policy</a>
        <a className="NGR-a NGR-footer-texts" href='www.google.com' >Cookie Policy</a>
        <a className="NGR-a NGR-footer-texts" href='www.google.com' >Copyright Policy</a>
        <a className="NGR-a NGR-footer-texts" href='www.google.com' >Brand Policy</a>
        <a className="NGR-a NGR-footer-texts" href='www.google.com' >Guest Controls</a>
        <a className="NGR-a NGR-footer-texts" href='www.google.com' >Community Guidelines</a>

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
 
export default Login;
