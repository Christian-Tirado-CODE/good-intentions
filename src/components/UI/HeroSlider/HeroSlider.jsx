
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import classes from './HeroSlider.module.css';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);


export const HeroSlider = (props) => {
    /*
            <img
            src={`https://picsum.photos/id/${i + 1}/500/300`}
            style={{ listStyle: 'none' }}
            alt={`Slide ${i}`}
          />
    */
   
      
  
    return (
        <React.Fragment>
            <Swiper id="main" tag="section" pagination wrapperTag="ul">
            <SwiperSlide key={`slide-${1}`} tag="li">
            <div className={classes.HeroSlide}>
        <div className={classes.SlideImage}>
         <img
            src={`https://picsum.photos/id/${1}/500/300`}
            style={{ listStyle: 'none' }}
            alt={`Slide ${1}`}
          />
          <div className={classes.SliderContent}>
          <h1 className={classes.SlideTitle}>Mision</h1>
          <p className="mb-5 small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
            ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
            ab quia neque, porro laborum error, autem facilis voluptates
            laboriosam?
          </p>
        </div>
        </div>
        
      </div>
          
        </SwiperSlide>
        <SwiperSlide key={`slide-${2}`} tag="li">
            <div className={classes.HeroSlide}>
        <div className={classes.SlideImage}>
         <img
            src={`https://picsum.photos/id/${2}/500/300`}
            style={{ listStyle: 'none' }}
            alt={`Slide ${2}`}
          />
          <div className={classes.SliderContent}>
          <h1 className={classes.SlideTitle}>Vision</h1>
          <p className="mb-5 small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
            ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
            ab quia neque, porro laborum error, autem facilis voluptates
            laboriosam?
          </p>
        </div>
        </div>
        
      </div>
          
        </SwiperSlide>
        <SwiperSlide key={`slide-${3}`} tag="li">
            <div className={classes.HeroSlide}>
        <div className={classes.SlideImage}>
         <img
            src={`https://picsum.photos/id/${3}/500/300`}
            style={{ listStyle: 'none' }}
            alt={`Slide ${3}`}
          />
          <div className={classes.SliderContent}>
          <h1 className={classes.SlideTitle}>Proposito</h1>
          <p className="mb-5 small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
            ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
            ab quia neque, porro laborum error, autem facilis voluptates
            laboriosam?
          </p>
        </div>
        </div>
        
      </div>
          
        </SwiperSlide>
            </Swiper>
        </React.Fragment>
        
    );
};

export default HeroSlider;