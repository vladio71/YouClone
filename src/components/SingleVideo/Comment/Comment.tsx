import React, {useState} from "react";
import styled from "@emotion/styled";
import {Comment} from "../SingleVid";
import {Avatar, Button} from "@mui/material";
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
    const [Description, setDescription] = useState(false)

    return (
        <Container>

            <div style={{margin: '.6rem'}}>
                <Avatar src={item.authorThumbnails[0].url} sx={{width: 56, height: 56}}/>

            </div>

            <div>
                    <span>
                        <span style={{fontWeight: 'bold'}}>  {item.authorName}</span> {item.publishedTimeText}
                    </span>

                <div>
                    {item.text.length > 200 ?
                        <>
                            {
                                Description ?
                                    <>
                                        {item.text}
                                        <div>
                                            <Button onClick={() => setDescription(!Description)}>less</Button>
                                        </div>
                                    </> :
                                    <>
                                        {item.text.slice(0, 199)}...
                                        <div>
                                            <Button onClick={() => setDescription(!Description)}>more</Button>
                                        </div>
                                    </>
                            }
                        </>
                        :
                        <>
                            {item.text}
                        </>
                    }

                </div>
                <div>
                    <MgTop>

                        <ThumbUpOutlinedIcon sx={{fontSize: '20px'}}/>
                        {item.likes}
                        <ThumbDownAltOutlinedIcon sx={{fontSize: '20px'}}/>

                    </MgTop>
                </div>
            </div>


        </Container>
    )
}

export default CommentComp