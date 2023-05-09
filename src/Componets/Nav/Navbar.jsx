import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [lang, setLang] = useState(localStorage.getItem('language') ? localStorage.getItem('language') : 'En')
  const { t, i18n } = useTranslation()
  const [select, setSelect] = useState(localStorage.getItem('language'))
  const navigate = useNavigate()

  const changeLanguage = (til) => {
    if (til === 'Ru') {
      navigate("/", { state: "ru" })
      setLang('Ru')
      localStorage.setItem('language', 'Ru')
      console.log(til);
    }
    if (til === 'En') {
      setLang('En')
      navigate("/", { state: "en" })
      localStorage.setItem('language', 'En')
      console.log(til);
    }

    
    i18n.changeLanguage(til)
  }
  return (
    <nav className=' container d-flex justify-content-between align-items-center pt-3'>
      <Link className='text-light' style={{ textDecoration: 'none' }} to='/'><h3>{t("N_touch")}</h3></Link>
      <select onChange={(val) => changeLanguage(val.target.value)} className="form-select form-select-md-lg  mb-3" aria-label=".form-select-lg example">
        <option selected={(select === 'Ru' ? true : false)} value="Ru">RU</option>
        <option selected={(select === 'En' ? true : false)} value="En">EN</option>
      </select>
    </nav>
  );
}

export default Navbar;
