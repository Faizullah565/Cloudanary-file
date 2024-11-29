// import { useRef } from "react";
// import emailjs from '@emailjs/browser';
// import axios from "axios";
// export default function Mailer() {
//     let emailForm = useRef(0);

//     const sendEmail = (e) => {
//       e.preventDefault();
  
//       emailjs.sendForm('service_qrzrky3', 'template_8j7slax', emailForm.current, '8iMLwOL_YUPMBuXjA')
//         .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         });
//     };
//     return <>
//         <h1>Mailer component</h1>
//         <div className="container"
//         style={{
//             backgroundImage:`url('https://e1.pxfuel.com/desktop-wallpaper/581/154/desktop-wallpaper-backgrounds-for-login-page-login-page.jpg')`,
//             backgroundPosition:'center',
//             backgroundSize:'cover',
//             with:'100px',
//             // height:''

//         }
//         }
//         >
//             <h2>Contact Form</h2>
//             <form ref={emailForm} onSubmit={sendEmail}>
//                 <label>name</label><br />
//                 <input type="text" name="name" /><br />
//                 <label>Email</label><br />
//                 <input type="email" name="user_email"/><br />
//                 <label>message</label><br />
//                 <textarea name="message" id=""  rows="4"></textarea><br />
//                 <input type="submit" value='submit' /><br />

//             </form>
//         </div>
//     </>
// }


// import axios from "axios";
// import { useEffect, useRef, useState } from "react";
// import {useForm} from 'react-hook-form';
// import { useDispatch, useSelector } from "react-redux";
// import {toast} from 'react-toastify'
// // import './signup.css'

// export default function Mailer(props){
//     // let [users, setUsers]=useState([])
//     let [users, setUsers] = useState([])
//     let dispatch = useDispatch();

//     let {register, handleSubmit, formState:{errors}} = useForm();
//     useEffect(function(){

//         // axios.get("/check-users").then(function(resp){
//         //     setUsers(resp.data);
//         // })

//     }, [users])
//     const saveUser = (nyaUser)=>{
//         nyaUser.id = Math.floor(Math.random() * 1000);
//         let file = nyaUser.file[0];
//         let some = new FormData();
//         some.append("id", nyaUser.id);
//         some.append("name", nyaUser.name);
//         some.append("password", nyaUser.password);
//         some.append("type", nyaUser.type);

//         some.append("file",file)
//     // for(let meriFile of nyaUser.file){
//         // some.append("file", meriFile);
//     // }
//         // GET, POST, PUT, DELETE
        
//         //  n     y     y    n

//        console.log(saveUser)
//         // axios.post('/create-user', some).then(function(resp){
//         //     console.log(resp.data)
//         // })



//         // dispatch({
//         //     type:"ADD_USER",
//         //     payload:nyaUser
//         // })
//         // props.users.push(nyaUser)
//         toast.success("user create hogya wa")
//     }
 



//     return <div className="signupForm">

//         <table>
//             {
//                 // users.map(ad=>{
//                 //      <h1>{ad.name}</h1> 

//                 //     // return <tr><td>{ad}</td></tr>
//                 // })
//             }
//         </table>

//        <form onSubmit={handleSubmit(saveUser)}>
  
//           <input {...register('name', {required:true, validate:function(yehValue){

//                 let userMilgya = users.find(user=>user.name == yehValue)

//                 if(userMilgya){
//                     return false;
//                 }else{
//                     return true;
//                 }


//           }})}   placeholder="Name" /> <br />          
//           {errors.name && errors.name.type == 'required' ? <div className="error">Name enter karen</div> : null }
//           {errors.name && errors.name.type == 'validate' ? <div className="error">User already h </div> : null }

         
          
          
//           <input {...register('password', {required:true,minLength:6})}  placeholder="password" /><br />
//           {errors.password && errors.password.type == 'required' ? <div className="error">Password enter karen</div> : null }
//           {errors.password && errors.password.type == 'minLength' ? <div className="error">minimum  7 characters enter karen</div> : null }

//           <input {...register('type', {required:true})}  placeholder="type" /><br />
//           {errors.type && errors.type.type == 'required' ? <div className="error">type enter karen</div> : null }

//       <button>signup</button>
//        </form>

 
//     </div>

// }

// import React from 'react'
// const emailState = {
//     email: '',
//     error: ''
// }
// class FormComponent extends React.Component {  
    
//     constructor(){
//         super();
//         this.state = emailState;
//         this.onChange = this.onChange.bind(this);
//     }
//     onChange(e) {
//         this.setState({
//             email : e.target.value
//         });
//     }
//     emailValidation(){
//         const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//         if(!this.state.email || regex.test(this.state.email) === false){
//             this.setState({
//                 error: "Email is not valid"
//             });
//             return false;
//         }
//         return true;
//     }
//     onSubmit(){
//         if(this.emailValidation()){
//             console.log(this.state);
//             this.setState(emailState);
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <div className="form-group mb-3">
//                     <label><strong>Email</strong></label>
//                     <input type="email" name="email" value={this.state.email} onChange={this.onChange} className="form-control" />
//                     <span className="text-danger">{this.state.error}</span>
//                 </div>
//                 <div className="d-grid">
//                     <button type="submit" className="btn btn-dark" onClick={()=>this.onSubmit()}>Submit</button>
//                 </div>  
//             </div>
//         )  
//     }
// }  
   
// export default FormComponent;

// import { useFormik } from 'formik';
// const formik = useFormik({
//     initialValues: {
//       email: '',
//     },
//     validate,
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2))
//     },
//   })
//   const validate = (values) => {
//     const errors = {}
  
//     if (!values.email) {
//       errors.email = 'Required'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       errors.email = 'Invalid email address'
//     }
  
//     return errors
//   }

//   import React from 'react';
// import { useFormik } from 'formik'

// const validate = (values) => {
//   const errors = {}

//   if (!values.email) {
//     errors.email = 'Required'
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address'
//   }

//   return errors
// }

// export default function App() {
//   const formik = useFormik({
//     initialValues: {
//       email: '',
//     },
//     validate,
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2))
//     },
//   })
// return (
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//         <div>
//           <label for="email">Email</label>
//           <input type="email" name="email" id="email"
//             onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
//           {formik.touched.email && formik.errors.email && (
//             <span>{formik.errors.email}</span>
//           )}
//           <button type='submit'>Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }
// or any of your form created previously


// import React, { useState } from "react";
// import { render } from "react-dom";
 
// const isEmail = (email) =>
//   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
 
// export default function Apps() {
//   const [values, setValues] = useState({ email: "" });
//   const [errors, setErrors] = useState({});
 
//   const validateAndSubmitForm = (e) => {
//     e.preventDefault();
 
//     const errors = {};
 
//     if (!isEmail(values.email)) {
//       errors.email = "Wrong email";
//     }
 
//     setErrors(errors);
 
//     if (!Object.keys(errors).length) {
//       alert(JSON.stringify(values, null, 2));
//     }
//   };
 
//   const setEmail = (e) => {
//     setValues((values) => ({ ...values, email: e.target.value }));
//   };
 
//   return (
//     <form onSubmit={validateAndSubmitForm}>
//       <h2>Validating Email in ReactJS</h2>
//       <span>Enter Email: </span>
//       <input
//         type="text"
//         id="userEmail"
//         value={values.email}
//         onChange={setEmail}
//       />{" "}
//       <input type="submit" />
//       <br />
//       {Object.entries(errors).map(([key, error]) => (
//         <span
//           key={`${key}: ${error}`}
//           style={{
//             fontWeight: "bold",
//             color: "red"
//           }}
//         >
//           {key}: {error}
//         </span>
//       ))}
//     </form>
//   );
// }


// import React, { useState } from 'react';
// import axios from 'axios';

// const EmailVerification = () => {
//   const [email, setEmail] = useState('');
//   const [response, setResponse] = useState('');

//   const verifyEmail = async () => {
//     try {
//       const apiKey = 'YOUR_API_KEY'; // Replace with your ZeroBounce API key
//       const url = `https://api.zerobounce.net/v2/validate?api_key=${apiKey}&email=${email}`;

//       const response = await axios.get(url);
//       setResponse(JSON.stringify(response.data, null, 2));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter email address"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button onClick={verifyEmail}>Verify</button>
//       <pre>{response}</pre>
//     </div>
//   );
// };

// export default EmailVerification;


import React, { useState } from 'react';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    validateEmail(inputEmail);
  };

  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(inputEmail);
    setIsEmailValid(isValid);
    setEmailError(isValid ? '' : 'Please enter a valid email address.');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmailValid) {
      // Submit the form or perform further actions
      console.log('Email is valid:', email);
    } else {
      console.log('Email is not valid:', email);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {emailError && <p className="error">{emailError}</p>}
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
