import React from "react";
import sa from './Related.module.sass'
import {Related} from "../SingleVid";
import styled from "@emotion/styled";
import {Link} from "react-router-dom";


const Container = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    height: 10rem;
    width: 32rem;
    text-align: left;   
    font-size: 1rem;
`
const Item = styled.div`
    margin-bottom: .5rem
`

const RelatedVid = ({item}: { item: Related }) => {

    return (
        <>
            <div>
                {item !== undefined &&
                <Container>
                    <Link to={`/single_vid/${item.videoId}`}>
                        <img height={140} width={250} src={item.thumbnails[0].url}/>
                    </Link>
                    <div>
                        <Item style={{fontWeight: 'bold'}}>

                            {item.title}
                        </Item>
                        <Item>

                            {item.channelName}
                        </Item>
                        <div>

                            {item.viewCountText} {item.publishedTimeText}
                        </div>

                    </div>
                </Container>
                }
            </div>

        </>
    )
}

export default RelatedVid