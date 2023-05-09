import React, { useState, useEffect } from 'react';
import './card.css'
import UserData from '../../utils/UserData';
import { useNavigate , useLocation} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Card = () => {

  const location = useLocation()
  
  
  const [Country, setCoutntry] = useState([])
  const navigate = useNavigate()
  
 async function run() {
    await UserData.getUser(location.state)
      .then(res => {
        setCoutntry(res)
        console.log(res);
      })
  }
 
  useEffect(() => {
    run()
  }, [location])

  function send(i) {
    console.log(i);
    navigate('/about', { state: i })
    window.location.reload(true)
  }

  const {t} = useTranslation()

  return (
    <div className='container mb-5 mt-2'>
      <h1 className='text-center'>{t("C_about")}</h1>
      <div className="row">
        {
          (Country.length > 0) ? Country.map((item, index) => {
            return (
              <div key={index} className='col-12 col-sm-6 col-md-4 col-lg-3 myCard' onClick={() => send(item)}>
                <img src={item.img} alt={item.name} loading='eager' />
                <div className='desc'>
                  <div className='text-light text-center'>
                    <h3> {item.name}</h3>
                    <h6>{item.capital}</h6>
                  </div>
                </div>
              </div>
            )
          }) : <div >Lodaing ...</div>
        }
      </div>
    </div>
  );
}

export default Card;
