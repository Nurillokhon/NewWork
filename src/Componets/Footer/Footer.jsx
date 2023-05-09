import React from 'react';
import './footer.css'
import { BsGithub } from 'react-icons/bs'
import { SiJavascript } from 'react-icons/si'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const {t} = useTranslation()

  return (
    <div className='border-top foot'>
      <div className='container mt-5 '>
        <div className='row '>
          <div className='col-6 text-center py-5'>
            <a href=""><img width={200} src="https://rs.school/images/rs_school_js.svg" alt="js" /></a>
          </div>
          <div className='col-6 text-center  py-5'>
            <a className='h4 text-light ' href="https://github.com/Nurillokhon/NewWork.git">{t("F_git")} <BsGithub className='text-dark m-2 fs-3' /></a> <br />
            <a className='h4 text-light' href="https://rs.school/js/">{t("F_js")} <SiJavascript  className='text-warning m-2'/> </a>
          </div>
          <div className="col-12 border-top">
            <p className='text-center text-light mt-2'>09.05.2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
