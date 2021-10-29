import React from 'react'
import CardComponent from '../../../../components/Card';
import classes from './Home.module.scss';
import { AnimatePresence, } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.scss';

export default function Home() {
  return (
    <Swiper className="mySwiper">
      <SwiperSlide>

        <div className={classes.home}>
          <AnimatePresence>
            <Tilt
              className="parallax-effect-img"
              tiltMaxAngleX={0}
              tiltMaxAngleY={0}
              perspective={800}
              style={{ transformStyle: "preserve-3d" }}
              transitionSpeed={1500}
              scale={1}
              gyroscope={true}
            >
              <AnimatePresence>
                <CardComponent />
              </AnimatePresence>
            </Tilt>
          </AnimatePresence>
        </div>
      </SwiperSlide>
      <SwiperSlide>

        <div className={classes.home}>
          <AnimatePresence>
            <Tilt
              className="parallax-effect-img"
              tiltMaxAngleX={0}
              tiltMaxAngleY={0}
              perspective={800}
              style={{ transformStyle: "preserve-3d" }}
              transitionSpeed={1500}
              scale={1}
              gyroscope={true}
            >
              <AnimatePresence>
                <CardComponent />
              </AnimatePresence>
            </Tilt>
          </AnimatePresence>
        </div>
      </SwiperSlide>


    </Swiper>
  )
}
