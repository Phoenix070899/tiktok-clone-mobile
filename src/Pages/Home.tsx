import React from "react";
import Video from "../Components/Video";
import vid1 from "../Assets/Vids/vid-1.mp4";
import vid2 from "../Assets/Vids/vid-2.mp4";
import vid3 from "../Assets/Vids/vid-3.mp4";
import vid4 from "../Assets/Vids/vid-4.mp4";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "../Styles/Home.css";

function Home() {


  return (
    <div className="relative text-w w-full h-[675px]">

      <Swiper direction={"vertical"} className="mySwiper">
        <SwiperSlide>
        <Video source={vid1} channel='Độ Phùng' time='3d ago' description='úi xời, đỉnh đỉnh đỉnh :)) cre: Dev nguyen' hashtag='#mixigaming'/>
        </SwiperSlide>
        <SwiperSlide>
        <Video source={vid2} channel='Độ Phùng' time='4d ago' description='ngon thế nhở :))' hashtag='#mixigaming'/>
        </SwiperSlide>
        <SwiperSlide>
        <Video source={vid3} channel='Độ Phùng' time='1w ago' description='kết thúc chương trình góp gạch xây trường năm 2022, cám ơn các bạn rất nhiều !' hashtag='#mixigaming'/>
        </SwiperSlide>
        <SwiperSlide>
        <Video source={vid4} channel='Độ Phùng' time='3d ago' description='giao lưu với bò trên bàn và cái kết...' hashtag='#mixigaming'/>
        </SwiperSlide>
        
      </Swiper>

    </div>
  );
}

export default Home;
