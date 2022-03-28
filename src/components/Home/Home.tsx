import React, {useCallback, useEffect, useState} from "react";
import sa from './Home.module.sass'
import {Input} from "antd";
import axios, {AxiosResponse} from "axios";
import YouTubeVid from "./YouTubeVideo/YouTubeVid";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {IconButton, InputBase, Paper, ToggleButton, ToggleButtonGroup} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


export type Fetch = {
    videoId: string
    title: string
    publishedTimeText: string
    viewCountText: string
    thumbnails: { url: string }[]
    description: string
    channelName: string

}
export type SortTrend = 'US' | 'UK' | 'UA' | 'PL'


const Home = () => {


    let [searchParams, setSearchParams] = useSearchParams();
    let query = searchParams.get('q')
    const [val, setVal] = useState('')
    const [sort, setSort] = React.useState<SortTrend>("US")
    const [view, setView] = React.useState('list');
    const [sending, setSending] = useState(false)
    const [IdsArr, setIdsArr] = useState<Fetch[]>([])

    // make it a Custom Hook
    const sendRequest = useCallback(async (req: SortTrend = 'US') => {
        if (sending) return
        setSending(true)
        let opt = {
            method: 'GET' as const,
            url: 'https://youtube-search-and-download.p.rapidapi.com/trending',
            params: {type: 'mu', hl: 'en', gl: req},
            headers: {
                'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
                'X-RapidAPI-Key': 'cc1d5404e0mshd38a0f446bc1c38p157a2ejsn3dbd7e08ff46'
            }
        }
        axios.request(opt).then(function (response: AxiosResponse<any>) {
            console.log(response)
            let arr: Fetch[] = []
            response.data.contents.map((a: { video: Fetch }) => {
                if (a.video.videoId != undefined) {
                    arr.push(a.video)
                }
            })
            setIdsArr(arr)
            setSending(false)

        }).catch(function (error: any) {
            console.error(error);
        });

    }, [])

    const changeFilter = (e: any) => {
        if (e.target.value === sort) {
            setSort('US')
        } else {
            setSort(e.target.value)
        }
    }

    useEffect(() => {
        sendRequest(sort)
    }, [sort])
    const navigate = useNavigate()



    return (
        <header className="App-header">
            <div>
                <div className={sa.searchContainer}>
                    <div className={sa.search}>
                        <Paper
                            elevation={3}
                            style={{margin: '0 auto'}}
                            className={sa.align}
                            component="form"
                            sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
                        >
                            <InputBase
                                sx={{ml: 1, flex: 1}}
                                value={val} onChange={(e) => setVal(e.target.value)}

                                placeholder="Search YouTube"
                                inputProps={{'aria-label': 'Search YouTube'}}
                            />
                            <IconButton onClick={() => {
                                if (val.length !== 0) {
                                    navigate(`/search/${val}`)
                                }
                            }} sx={{p: '10px'}} aria-label="search">
                                <SearchIcon/>
                            </IconButton>
                        </Paper>


                    </div>
                </div>

                <div className={sa.filterGrid}>

                    <ToggleButton
                        style={{borderRadius: '3rem'}}
                        value="UA"
                        selected={sort === 'UA'}
                        onChange={changeFilter}
                    >
                        UA
                    </ToggleButton>
                    <ToggleButton
                        style={{borderRadius: '3rem'}}
                        value="US"
                        selected={sort === 'US'}
                        onChange={changeFilter}
                    >
                        US
                    </ToggleButton>
                    <ToggleButton
                        style={{borderRadius: '3rem'}}
                        value="PL"
                        selected={sort === 'PL'}
                        onChange={changeFilter}
                    >
                        PL
                    </ToggleButton>
                </div>

                <div className={sa.mainGrid}>
                    {IdsArr.length != 0 &&
                    IdsArr.map(a => {
                        return <YouTubeVid key={a.videoId} a={a}/>
                    })}
                </div>
            </div>
        </header>
    )
}
export default Home