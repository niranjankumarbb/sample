import React from 'react';
import { ErrorMessage, useField } from 'formik';
 
export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log('field and meta', field, meta)
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      />
      { console.log('...field, ...props',{...field} ,{...props})}     
      { console.log('meta.touched, meta.error', meta.touched, meta.error)}     
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}


// ...field - has field.name, onChange events
//  ...props - name type
// is-invalid - when error occurs which is linked to <ErrorMessage/>
//  meta - has meta.touched, meta.error
// customised input fields using classNames='form-control'
// <Field /> will default to an HTML <input /> element.

 