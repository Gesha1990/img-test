import React from 'react';
import  style from './Loader.module.css'
import loader from '../../assets/img/Spinner-1s-200px.svg'


const Loader = () => {
  return (
      <div>
        <img src={loader} alt="louder" className={style.loader}/>
      </div>
  )
};
export default Loader;
