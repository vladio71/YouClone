import React, {useEffect, useState} from "react";
import {searchRequest, Sort} from "../../../API/youTubeApi";
import {Link, useParams, useSearchParams} from "react-router-dom";
import styled from "@emotion/styled";
import {Fetch, SortTrend} from "../Home";
import sa from './media.module.sass'
import {IconButton, Input, InputBase, Paper, ToggleButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Avatar from "@mui/material/Avatar";

export const SearchOutput = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const [sort, setSort] = React.useState<Sort>('v')
    let [value, setValue] = useState('')
    let [Vids, setVids] = useState<any>([])
    let {q} = useParams()
    let query: any
    if (searchParams.get('q')) {
        query = searchParams.get('q')
    }

    const handleRequest = () => {
        searchRequest(value, sort).then(resp => {
            setVids(resp)

        })
        setSearchParams({q: value})
    }
    useEffect(() => {
        let req = q
        if (query !== undefined) req = query
        searchRequest(req!, sort).then(resp => {
            setVids(resp)
        })
    }, [sort])

    const changeFilter = (e: any) => {
        if (e.target.value === sort) {
            setSort('v')
        } else {
            setSort(e.target.value)
        }
    }


    return (

        <>
            <Paper
                elevation={3}
                className={sa.align}
                component="form"
                sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
            >
                <InputBase
                    sx={{ml: 1, flex: 1}}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}

                    placeholder="Search YouTube"
                    inputProps={{'aria-label': 'Search YouTube'}}
                />
                <IconButton onClick={handleRequest} sx={{p: '10px'}} aria-label="search">
                    <SearchIcon/>
                </IconButton>
            </Paper>
            <div className={sa.filtGrid}>

                <ToggleButton
                    style={{borderRadius: '3rem'}}
                    value="v"
                    selected={sort === 'v'}
                    onChange={changeFilter}
                >
                    View count
                </ToggleButton>
                <ToggleButton
                    style={{borderRadius: '3rem'}}
                    value="u"
                    selected={sort === 'u'}
                    onChange={changeFilter}
                >
                    Upload Date
                </ToggleButton>
                <ToggleButton
                    style={{borderRadius: '3rem'}}
                    value="ra"
                    selected={sort === 'ra'}
                    onChange={changeFilter}
                >
                    Rating
                </ToggleButton>
                <ToggleButton
                    style={{borderRadius: '3rem'}}
                    value="r"
                    selected={sort === 'r'}
                    onChange={changeFilter}
                >
                    Relevance
                </ToggleButton>
            </div>
            {Vids.length !== 0 &&
            Vids.map((a: { video: Fetch }, index: number) => {
                return <Vid key={index} a={a.video}/>
            })
            }
        </>
    )
}
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 70vw;
    margin: 1rem auto;
`


const CaptionGrid = styled.div`
    display: grid;
    align-content: space-between;
    grid-template-rows: repeat(3, 1fr);
    grid-auto-flow: column;
    height: 10rem;
    text-align: start;
    margin: 1rem;
`

const Vid = ({a}: { a: Fetch }) => {

    return (
        <Container className={sa.media}>

            <div>
                <Link to={`/single_vid/${a.videoId}`}>
                    <img height={250} width={400} src={a.thumbnails[a.thumbnails.length - 1].url}/>
                </Link>
            </div>
            <CaptionGrid>
                <div style={{fontWeight: '500', fontSize: '1rem'}}>
                    <Link style={{color: 'black'}} to={`/single_vid/${a.videoId}`}>
                        {a.title}
                    </Link>
                    <div style={{fontWeight: "normal", fontSize: '.8rem'}}>
                        {a.viewCountText} - {a.publishedTimeText}
                    </div>
                </div>

                <div>
                    <Avatar/> {a.channelName}
                </div>
                <div>
                    {a.description}
                </div>


            </CaptionGrid>
        </Container>

    )
}


export default SearchOutput