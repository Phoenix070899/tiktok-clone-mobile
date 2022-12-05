import React, { useState } from "react";
import mixi from "../Assets/Imgs/mixi.jpg";
import vid from "../Assets/Vids/vid-1.mp4";
import { AiFillHeart, AiFillMessage } from "react-icons/ai";
import { MdOutlineBookmark } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import IconNode from "./IconNode";

interface IVideoProps {
    source: any;
    channel: string;
    time?: string;
    description?: string;
    hashtag?: string;
}

function Video({source, channel, time, description, hashtag} : IVideoProps) {
    const [like, setLike] = useState(false)
    const [mark, setMark] = useState(false)
  return (
    <div className="w-full h-full bg-black relative">
      <video className="w-full h-full" src={source} controls></video>
        <div className="absolute left-5 bottom-20 des-col flex flex-col gap-1 w-8/12">
            <span className="font-bold text-left">{channel} <span className="font-normal text-sm">- {time}</span></span>
            <span className="text-sm text-left">{description}<span className="font-semibold"> {hashtag}</span></span>
        </div>
        <div className="absolute right-5 bottom-20 icon-col flex flex-col items-center gap-5 w-1/12">
            <img src={mixi} alt="" className="w-[30px] h-[30px] rounded-full border border-white"/>
          <IconNode icon={<AiFillHeart size={24} color={like ? 'red' : undefined}/>} detail="100k" onClick={() => setLike(!like)}/>
          <IconNode icon={<AiFillMessage size={24} />} detail="100k" />
          <IconNode icon={<MdOutlineBookmark size={24} color={mark ? 'yellow' : undefined}/>} detail="100k" onClick={() => setMark(!mark)}/>
          <IconNode icon={<IoIosShareAlt size={24} />} detail="100k" />
        </div>
      </div>
  );
}

export default Video;
