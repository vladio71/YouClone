import React, {useEffect, useState} from "react";
import sa from './SingleVid.module.sass'
import {Link, useParams} from "react-router-dom";
import {getCannelInfo, getComments, getRelatedVid, getVidInfo} from "../../API/youTubeApi";
import CommentComp from "./Comment/Comment";
import RelatedVid from "./RelatedVid/RelatedVid";
import DownloadIcon from '@mui/icons-material/Download';
import {Button} from "@mui/material";


export interface Comment {
    authorName: string
    likes: string
    replyCount: number
    text: string
    publishedTimeText: string
    authorThumbnails: { url: string }[]
}

export interface Related {
    videoId: string
    channelName: string
    lengthText: string
    publishedTimeText: string
    title: string
    viewCountText: string
    thumbnails: { url: string }[]
}

export interface Vid {
    video: Related
}

export interface VidInfo {
    shortDescription: string
    channelId: string
    title: string
    viewCount: string
}

export interface ChannalVid {
    video: {
        publishedTimeText: string
        title: string
        videoId: string
        viewCountText: string
        thumbnails: Array<{ url: string }>
    }
}

export interface ChannelInfo {
    avatar: {
        thumbnails: [
            { url: string }
        ]
    }
    contents: [ChannalVid]
    title: string
    subscriberCountText: string
}


const SingleVid = () => {

    const {id} = useParams()
    const [arr, setArr] = useState<Comment[]>([])
    const [info, setInfo] = useState<VidInfo>()
    const [channel, setChannel] = useState<ChannelInfo>()
    const [relatedArr, setRelArr] = useState<Vid[]>([])
    const [Description, setDescription] = useState(false)

    useEffect(() => {
        getComments(id!).then((response) => {
            setArr(response)
        })
        getRelatedVid(id!).then((response) => {
            setRelArr(response)
        })
        getVidInfo(id!).then(response => {
            setInfo(response)
            getCannelInfo(response.channelId).then(response => {
                setChannel(response)
            })
        })

    }, [id])

    return (
        <div className={sa.MainGrid}>
            <div className={sa.vidGrid}>
                <iframe
                    width="1100"
                    height="700"
                    src={`https://www.youtube.com/embed/${id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
                {
                    info !== undefined &&
                    <div>
                        <div className={sa.Title}>
                            <div>
                                {info.title}
                                <div className={sa.Caption}>{info.viewCount} views</div>
                            </div>
                            <div>
                                <Link className={sa.Channel} to={`/download/${id}`}>
                                    <Button variant="contained"> <DownloadIcon sx={{fontSize: 40}}/></Button>
                                </Link>
                            </div>
                        </div>
                        <hr/>
                        <div className={sa.innerGrid}>
                            <Link className={sa.Channel} to={`/channel/${info.channelId}`}>
                                <div className={sa.Channel}>
                                    <img height={80} width={80} src={channel?.avatar.thumbnails[0].url}/>
                                </div>
                            </Link>
                            <div className={sa.Description}
                                 style={{whiteSpace: 'pre-wrap', textAlign: 'start', width: '40rem'}}>
                                <Link to={`/channel/${info.channelId}`}>
                                    <div className={sa.chnInfo}>

                                        {channel?.title}
                                    </div>
                                </Link>
                                <div className={sa.chnlEnd}>
                                    {channel?.subscriberCountText}
                                </div>
                                {info.shortDescription.length > 200 ?
                                    <>
                                        {Description ?
                                            <>
                                                {info.shortDescription}
                                                <div>
                                                    <Button onClick={()=>setDescription(!Description)}>less</Button>
                                                </div>
                                            </> :
                                            <>
                                                {info.shortDescription.slice(0, 199)}
                                                <div>
                                                    <Button onClick={()=>setDescription(!Description)}>more</Button>
                                                </div>
                                            </>
                                        }
                                    </>
                                    :
                                    <>
                                        {info.shortDescription}
                                    </>
                                }
                            </div>
                        </div>
                        <hr/>

                    </div>
                }
                {arr.length !== 0 &&
                <div style={{marginTop: '2rem'}}>
                    {arr.map((a) => {
                        return <CommentComp item={a}/>
                    })}
                </div>
                }
            </div>
            {relatedArr.length !== 0 &&
            <div className={sa.related}>
                {relatedArr.map((a) => {
                    return <RelatedVid item={a.video}/>
                })}
            </div>
            }
        </div>

    )
}

export default SingleVid