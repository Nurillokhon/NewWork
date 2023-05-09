import React, { useState, useEffect ,useRef} from 'react';
import { mas } from './RandomImage';
import { Input } from 'antd';
import {FaAngleDoubleDown} from 'react-icons/fa'
import Navbar from '../Nav/Navbar';
import './header.css'
import { useNavigate } from 'react-router-dom';
import UserData from '../../utils/UserData';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [background, setBackground] = useState();
  const [val ,setVal] = useState('')
  const [massiv ,setMassiv] = useState([])
  const inputRef = useRef(null);
  const  navigate = useNavigate()

  const {t} = useTranslation()

  useEffect(() => {
    inputRef.current.focus();
    run() 
    users()
  }, []);
  function run(){
    setBackground(mas[Math.floor(Math.random() * 4)].img)
    
  }
  function users() {
      UserData.getUser()
      .then(r =>{
        setMassiv(r)
      })
  }
   
  const styles = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

  };
  console.log(massiv);
  
  function send(){
    let about 
    let son =0
    console.log(val);
    massiv.map(item =>{
      if(item.name.toLowerCase() === val.toLowerCase() || item.capital.toLowerCase() === val.toLowerCase()){
        about = item
        son++
      }
      
    })
    if(son>0){
      navigate('/about' , {state: about})

    }
    else{
      navigate('/notFound')
    }

      
  }
  return (
    <div style={styles} className='head'>
      <div className='twice'>
        <div className="container text-light">
          <Navbar/>
          <div className='srch'>
            <Input ref={inputRef} onPressEnter={send} onInput={(vall)=>setVal(vall.target.value)} size='large' style={{ width: 500, height: 50 }} placeholder = {t("H_search")} allowClear type="text"/>
            <button onClick={send}>{t("H_search")}</button>
          </div>
          <div className='d-flex justify-content-center iconCard'>
          <FaAngleDoubleDown className='fs-1 icon'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
