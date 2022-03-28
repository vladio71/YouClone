import React, {useCallback, useState} from "react";
import sa from './YouTubeVid.module.sass'
import {Link} from 'react-router-dom'
import {Avatar} from "@mui/material";
import {ChannalVid} from "../../SingleVideo/SingleVid";

const ChannelVideo = (props: { a: ChannalVid }) => {

    const a = props.a

    return (
             <div className={sa.margin}>
                <div className={sa.Ifreame_container}>
                    <Link to={`/single_vid/${a.video.videoId}`}>

                        <img src={a.video.thumbnails[3].url} width={350} height={200}/>
                     </Link>
                </div>
                <div className={sa.caption}>
                    {/*<Avatar src={a} sx={{ width: 56, height: 56 }}/>*/}
                    <Avatar sx={{ width: 56, height: 56 }}/>
                    <div>
                        {a.video.title}
                    </div>
                </div>

            </div>

    )
}
export default ChannelVideo