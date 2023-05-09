import React ,{useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { MdLocationOn } from 'react-icons/md'
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import './slider.css'

const Slider = props => {
  const [LargeImage, setLargeImage] = useState(false);
console.log(props);

  function ZoomImage(){
    setLargeImage(!LargeImage)
  }
    return (
        <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3500,
          pauseOnMouseEnter: true,
          disableOnInteraction: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {
          props.img.map((item, index) => {
            return (
              <SwiperSlide className='sliderr' key={index}>
                <img src={item.img} 
                  alt="Image"
                  onClick={ZoomImage}
                  style={{
                    cursor: 'zoom-in',
                    width: '700px',
                    height: 'auto',
                    transition: 'transform .2s ease-in-out',
                    transform: LargeImage ? 'scale(2)' : 'none',
                  }}
                />
                <div className='abv text-light'>
                  <h1>{item.name}</h1>
                  <h4> <MdLocationOn /> {item.curName} </h4>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
    );
}

export default Slider;
