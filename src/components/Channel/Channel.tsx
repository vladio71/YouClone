import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getCannelInfo, getChannelBack, getComments, getRelatedVid, getVidInfo} from "../../API/youTubeApi";
import {ChannelInfo} from "../SingleVideo/SingleVid";
import sa from './Channel.module.sass'
import {Box, Tab, Tabs} from "@mui/material";
import set = Reflect.set;
import ChannelVideo from "./ChannelVid/ChannelVid";

export interface ChannelBack {
    items: [
        {
            brandingSettings: {
                image: {
                    bannerExternalUrl: string
                } | null
                channel: {
                    unsubscribedTrailer: string
                }
            },
            statistics: {
                viewCount: string
                subscriberCount: string
                videoCount: string
            }
            snippet: {
                title: string
                description: string
                publishedAt: string
            }
        }
    ]


}

const Channel = () => {
    const {id} = useParams()
    const [channel, setChannel] = useState<ChannelInfo>()
    const [channelBack, setChannelBack] = useState<ChannelBack>()
    const [value, setValue] = React.useState(0);

    useEffect(() => {

        getCannelInfo(id!).then(response => {
            setChannel(response)
        })
        getChannelBack(id!).then(response => {
            setChannelBack(response)
        })
    }, [id])

    const brSet = channelBack?.items[0].brandingSettings.image?.bannerExternalUrl
    const brStat = channelBack?.items[0].statistics
    const brSnip = channelBack?.items[0].snippet

    return (
        <>
            <div className={sa.MainGrid}>
                <div className={sa.back}>
                    {brSet != null?
                        <div className={sa.innerBack} style={{background: `url(${brSet}) no-repeat center`}}/>
                        :
                        <div className={sa.innerBack} style={{background: `black no-repeat center`}}/>

                    }
                 </div>

                <div className={sa.logoGrid}>
                    <img style={{borderRadius: '50%'}} width={100} height={100}
                         src={channel?.avatar.thumbnails[0].url}/>
                    <div style={{textAlign: "left", fontWeight: "bold", fontSize: '1.4rem', marginTop: '1rem'}}>
                        {brSnip?.title}
                        <div style={{fontWeight: "normal", fontSize: '1rem'}}>
                            {brStat?.subscriberCount} subscribers
                        </div>
                    </div>
                    <div style={{gridColumn: '1 / span 2'}}>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                                <Tabs value={value} onChange={(event: React.SyntheticEvent, newValue: number) => {
                                    setValue(newValue)
                                }} aria-label="basic tabs example">
                                    <Tab label="Videos"/>
                                    <Tab label="About Channel"/>

                                </Tabs>
                            </Box>
                            <TabPanel  value={value} index={0}>
                                <div className={sa.grid}>
                                {
                                    channel?.contents.map((a)=>{
                                        return <ChannelVideo a={a}/>
                                    })
                                }
                                </div>
                             </TabPanel>
                            <TabPanel value={value} index={1}>
                                <div className={sa.descipGrid}>
                                    <div>
                                        Name: {brSnip?.title}
                                    </div>
                                    <div>
                                        {brSnip?.description}
                                    </div>
                                    <div>
                                        Created: {brSnip?.publishedAt.slice(0,10)}
                                    </div>
                                </div>
                            </TabPanel>
                        </Box>
                    </div>


                </div>


            </div>


        </>
    )
}
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}


        >
            {value === index &&
                children
             }
        </div>
    );
}

export default Channel