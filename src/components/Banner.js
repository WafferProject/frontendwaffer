// src/components/Home/Banner/Banner.js
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './Banner.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
    return (
        <Swiper
            cssMode={true}
            navigation={true}
            loop={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            className="mySwiper mt-12"
        >
            <SwiperSlide>
                <img className="" src="https://th.bing.com/th/id/R.1aa9eef1906b23ad44efe6f9636826b7?rik=aHg7LztSaV6A1A&riu=http%3a%2f%2fwww.thecentsiblelife.com%2fwp-content%2fuploads%2f2015%2f05%2fStop-food-waste-save-money-ways-to-stop-food-waste.jpg&ehk=jBHhwTP%2bjuaU75cOzMIJj65pElhHeisZO7LhrCh86tQ%3d&risl=&pid=ImgRaw&r=0" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://www.tasteofhome.com/wp-content/uploads/2019/08/Screen-Shot-2019-08-14-at-11.03.16-AM-copy-1024x1024.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://th.bing.com/th/id/OIP.iJKJE8T_pmgHrpNDEusN9wHaDt?pid=ImgDet&w=2000&h=1000&rs=1" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://th.bing.com/th/id/R.e4750212fa224dea4359181d98ae742e?rik=duxaH4e9tSH9sA&riu=http%3a%2f%2fwww.honeyfund.com%2fblog%2fwp-content%2fuploads%2f2017%2f05%2fPrepare-good-food.jpg&ehk=V7dO1yommEsKrviclUaLnoMJgaWZ6weBXPNljGME%2bYY%3d&risl=&pid=ImgRaw&r=0" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://images.thebusinessplanshop.com/ouvrir-bar-a-salade/ouvrir-un-bar-a-salade.jpg" alt="" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;