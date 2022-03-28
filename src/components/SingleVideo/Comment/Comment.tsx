import React from "react";
import styled from "@emotion/styled";
import {Comment} from "../SingleVid";
import {Avatar} from "@mui/material";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';


const Container = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: .5fr 9fr;
    height: fit-content;
    text-align: left;   
    font-size: 1rem;
    margin: 1rem
`
const MgTop = styled.div`
    display: flex;
    align-items: center;
    gap: .3rem;
 `

const CommentComp = ({item}: { item: Comment }) => {



    return (
        <Container>

            <div>
                <Avatar src={item.authorThumbnails[0].url} sx={{width: 56, height: 56}}/>

            </div>

            <div>
                    <span>
                        <span style={{fontWeight: 'bold'}}>  {item.authorName}</span> {item.publishedTimeText}
                    </span>

                <div>
                    {item.text}
                </div>
                <div>
                    <MgTop>

                        <ThumbUpOutlinedIcon sx={{fontSize: '20px'}}/>
                        {item.likes}
                        <ThumbDownAltOutlinedIcon  sx={{fontSize: '20px'}}/>

                    </MgTop>
                </div>
            </div>


        </Container>
    )
}

export default CommentComp