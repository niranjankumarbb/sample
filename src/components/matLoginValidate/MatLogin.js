import React from 'react'
import './MatLogin.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
//  import { ErrorMessage, useField } from 'formik';
 import TextField from '@mui/material/TextField';

// const MatLogin = () => {
//     const validate = Yup.object({
//         firstName: Yup.string()
//           .max(15, 'Must be 15 characters or less')
//           .required('Required'),
//         lastName: Yup.string()
//           .min(10, 'Must be 10 characters or more')
//           .required('Required'),
//         email: Yup.string()
//           .email('Email is invalid')
//           .required('Email is required'),
//         password: Yup.string()
//           .min(6, 'Password must be at least 6 charaters')
//           .required('Password is required'),
//         confirmPassword: Yup.string()
//           .oneOf([Yup.ref('password'), null], 'Password must match')
//           .required('Confirm password is required'),
//       })
//   return (
//     <div className="container mt-3">
//       <div className="row">
//         <div className="col-md-5">
//                 <Formik
//                 initialValues={{
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 password: '',
//                 confirmPassword:''
//              }}
//             validationSchema={validate}
//             onSubmit={values => {
//                 console.log('submit values', values)
//             }}
//             >
//             {({ errors, touched })=> (
//                 <div>
//                   {/* {console.log('formik',  formik)} */}
//                 <Form>
//                    <h1 className="my-4 font-weight-bold .display-4">Login</h1>

//                     <div>
//                       <TextField type="text" id="filled-basic" label="firstName" name="firstName" variant="filled"     />
//                       {/* {errors.firstName && touched.firstName ? ( <div>{errors.firstName}</div>) : null} */}
//                       <ErrorMessage name="firstName" component="div"   />
//                     </div><br/>
//                     <div>
//                       <TextField type="text" id="filled-basic" label="lastName" name="lastName" variant="filled" />
//                       <ErrorMessage component="div" name="lastName" className="error" />
//                     </div><br/>
//                     <div>
//                       <TextField type="email" id="filled-basic" label="email" name="email" variant="filled" />
//                       <ErrorMessage component="div" name="email" className="error" />
//                     </div><br/>
//                     <div>
//                       <TextField type="text" id="filled-basic" label="password" name="password" variant="filled" />
//                       <ErrorMessage component="div" name="password" className="error" />
//                     </div><br/>
//                     <div>
//                       <TextField type="text" id="filled-basic" label="confirmPassword" name="confirmPassword" variant="filled" />
//                       <ErrorMessage component="div" name="confirmPassword" className="error" />
//                     </div><br/>




//                 {/* <div className="mb-2">
//                     <label htmlFor='firstName'>firstName</label>
//                     <input
//                         className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
//                         {...field} {...props}
//                         autoComplete="off"
//                     />
//                     { console.log('...field, ...props',{...field} ,{...props})}     
//                     { console.log('meta.touched, meta.error', meta.touched, meta.error)}     
//                     <ErrorMessage component="div" name={field.name} className="error" />
//                 </div> */}

//                     {/* <TextField label="First Name" name="firstName" type="text" />
//                     <TextField label="last Name" name="lastName" type="text" />
//                     <TextField label="Email" name="email" type="email" />
//                     <TextField label="password" name="password" type="password" />
//                     <TextField label="Confirm Password" name="confirmPassword" type="password" /> */}
//                     <button className="btn btn-dark mt-3" type="submit">Login</button>&nbsp;&nbsp;
//                     <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
//                 </Form>
//                 </div>
//             )}
//             </Formik>
//         </div>
//       </div>
//     </div> 
//   )
// }

// export default MatLogin


// {`${errors.firstName && touched.firstName && 'is-invalid'}`}


  
 const SignupSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(70, 'Too Long!')
     .required('Required'),
   email: Yup.string()
     .email('Invalid email')
     .required('Required'),
 });
 
 export const MatLogin = () => (
   <div>
     <h1>Signup</h1>
     <Formik
       initialValues={{
         name: '',
         email: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
        //  console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="name"  />                                                                                                                                                                                                                               
            {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}       <br/>   
          {/* <ErrorMessage name="name" /><br/> */}

           <Field name="email" type="email" /><br/>
             
          <ErrorMessage name="email" /><br/>
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik><br/><br/><br/><br/>

    </div>
 );

 export default MatLogin