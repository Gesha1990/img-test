import React from 'react';
import  style from './Form.module.css';

export const TextArea = ({input, meta, ...props}) =>{

  const isError = meta.submitFailed && meta.error? style.error : ``;
  const placeHolder = meta.submitFailed && meta.error? `${meta.error}`: props.placeholder;

  return (
    <div className={isError} >
      <textarea {...props } {...input}  placeholder={placeHolder} />
    </div>
  )
};
