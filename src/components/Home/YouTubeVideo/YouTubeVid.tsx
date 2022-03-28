import React, {useCallback, useState} from "react";
import sa from './YouTubeVid.module.sass'
import {LikeOutlined, DislikeOutlined, SearchOutlined} from '@ant-design/icons'
import {Fetch} from "../Home";
import {LoginOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'
import {Avatar} from "@mui/material";

const YouTubeVid = (props: { a: Fetch }) => {

    const a = props.a
    return (
        <div className={sa.vidDiv}>
            <div className={sa.margin}>
                <div className={sa.Ifreame_container}>
                    <Link to={`/single_vid/${a.videoId}`}>
                        <img src={a.thumbnails[2].url} width={360} height={230}/>
                        {/*<img src={'https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/49490c34-ef8e-45b1-8037-a4958efc2609/AngelaDuckworth_2013S-embed.jpg?c=1050%2C550&w=1050'} width={500} height={300}/>*/}
                    </Link>
                </div>
                <div className={sa.caption}>
                    {/*<Avatar src={a.author.bestAvatar.url} sx={{ width: 56, height: 56 }}/>*/}
                    <Avatar src={'https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg'}
                            sx={{width: 56, height: 56}}/>
                    <div>
                        {a.title.length > 50 ?
                            <div  style={{fontWeight:"600"}} className={sa.toggle}> {a.title.slice(0, 48)}...
                                <div className={sa.hover}>
                                    {a.title}
                                </div>
                            </div>

                            :
                            <div style={{fontWeight:"600"}}>
                                {a.title}
                            </div>

                        }
                        <div style={{color: 'rgba(0, 0, 0, 0.76)', fontSize: '.8rem'}}>

                            {a.viewCountText} - {a.publishedTimeText}
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
export default YouTubeVid