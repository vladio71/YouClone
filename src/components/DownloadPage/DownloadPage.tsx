import React, {useEffect, useState} from "react";
import {getDonwloadOpts} from "../../API/youTubeApi";
import {useParams} from "react-router-dom";
import sa from './DownloadPage.module.sass'


export interface links {
    0: string //url
    1: string //size
    3: string //quality
}

const DownloadPage = () => {


    const {id} = useParams()
    const [donwloadVid, setDownload] = useState([])
    const [donwloadSound, setDownloadSound] = useState([])

    useEffect(() => {
        getDonwloadOpts(id!).then((response) => {
            let vids: any = []
            Object.keys(response).map(function (key, index) {
                if (response[key][3] != "OK" && Number(response[key][3].slice(0, 3)) >= 360 && response[key][2] != "adaptive") {
                    vids.push(response[key])
                }
            });
            setDownload(vids)

            let auds: any = []
            Object.keys(response).map(function (key, index) {
                if (response[key][3] == "OK") {
                    auds.push(response[key])
                }
            });
            setDownloadSound(auds)
        })
    }, [])

    return (
        <>

            <div className={sa.MainGrid}>

                <h1 className={sa.head}>Download it, now!</h1>

                <div className={sa.innerGrid}>
                    <div className={sa.flex}>
                        {donwloadVid.length !== 0 &&
                        donwloadVid.map(a => {
                            return (
                                <VidDown {...a}/>
                            )
                        })

                        }
                    </div>
                    <div className={sa.flexAudio}>

                        {donwloadSound.length !== 0 &&
                        donwloadSound.map(a => {
                            return (
                                <AudioDown {...a}/>
                            )
                        })

                        }
                    </div>
                </div>

            </div>
        </>
    )
}

const VidDown = (props: links) => {

     return (
        <div className={sa.Vid}>
            <div className={sa.text}>
                <div>
                    {props[1]}
                </div>
                <div>
                    {props[3]}
                </div>
            </div>
            <video width="250" height="150" controls>
                <source src={props[0]} type="video/mp4"/>
            </video>
        </div>


    )
}
const AudioDown = (props: links) => {

     return (
        <div className={sa.Audio}>
            <div className={sa.text}>

            {props[1]}
            </div>
            <audio
                controls
                src={props[0]}>
                Your browser does not support the
                <code>audio</code> element.
            </audio>
        </div>


    )
}
export default DownloadPage

