import React, { useState, useEffect } from 'react';
import './about.css'
import Nav from '../../Componets/Nav/Navbar'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { BsSunFill, BsFillCloudFill } from 'react-icons/bs'
import { BiRuble, BiEuro, BiDollar } from 'react-icons/bi'
import { FcEngineering } from 'react-icons/fc'
import UserData from '../../utils/UserData';
import Slider from '../../Componets/Slider/Slider';
import Footer from '../../Componets/Footer/Footer';
import Time from '../../Componets/Time/Time';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


const About = () => {
  const [temp, setTemp] = useState({})
  const [summ, setSumm] = useState()
  const location = useLocation()
  console.log(location.state);


  useEffect(() => {
    getData()
    getSum()
  }, []);
  function getData() {
    UserData.getweather(location.state.name)
      .then(res => {
        setTemp(res)
      })
  }
 

  function getSum() {
    const API_KEY = '6gETIA1al7Zhpe381WMO1HOcN69ybzP8';
    const config = {
      headers: {
        'apikey': API_KEY
      }
    };
    axios.get('https://api.apilayer.com/fixer/latest?symbols=GBP%2CRUB%2CUSD&base=AED', config)
      .then(response => setSumm(response.data.rates))
      .catch(error => console.error(error));
    }
  const valuta = (
    (summ) && <div className='row'>
      <p className='col-12 col-sm-6 col-md-4 mx-1 d-flex align-items-center'> <BiEuro className='fs-5' />: {summ.GBP} </p>
      <p className='col-12 col-sm-6 col-md-4 mx-1 d-flex align-items-center'> <BiDollar className='fs-5' />: {summ.USD} </p>
      <p className='col-12 col-sm-6 col-md-4 mx-1 d-flex align-items-center'> <BiRuble className='fs-5' />: {summ.RUB} </p>
    </div>
  )

  const weather = (
    <div className='weather '>
      {
        (typeof temp.main != 'undefined' ?
          <div>
            <p className='text-light temp text-dark'>
              {temp.name}
              <span className='temp_gradus ms-2'>{Math.floor(temp.main.temp)}℃</span>
              {
                (+(temp.main.temp) > 10) ? <BsSunFill className='text-warning' /> : <BsFillCloudFill />
              }
            </p>
            <div>

            </div>
          </div>
          :
          <FcEngineering size={20} color="#36d7b7" />
        )
      }
    </div>
  )



  return (
    <div className=''>
      <div className='nav text-light'>
        <Nav />
      </div>
      <div className="container">
        <div className='my-2 d-flex justify-content-around '>{weather} {valuta} {<Time/>}</div>
        <div className="row container ">
          <div className="col-12 col-lg-6 image">
            <img src={location.state.img} alt={location.state.name} />
          </div>
          <div className="col-12 col-lg-6">
            <h3>Name: {location.state.name}</h3>
            <h4 className='mt-5'>Capital: {location.state.capital}</h4>
            <p className='fw-bold mt-5'>About: {location.state.decription}</p>
          </div>
          <div className="col-12 col-lg-6 mt-5">
            <iframe src={location.state.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className='col-12 col-lg-6 mt-5'>
            <iframe src={location.state.map} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='col-12 my-5'>
            <Slider img={location.state.about} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
