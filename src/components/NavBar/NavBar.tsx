import React, {useEffect, useLayoutEffect, useState} from "react";
import sass from './NavBar.module.sass'
import {motion} from 'framer-motion'
import SmallNavBar from "./SmallNavBAr";
import {
    YoutubeOutlined,
    MenuOutlined,
    SearchOutlined,
    CaretRightOutlined,
    HeartOutlined,
    VideoCameraOutlined,
    SettingOutlined,
    LogoutOutlined
} from '@ant-design/icons'


function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

let toogle = true

const NavBar = () => {

    const [mode, setMode] = useState(true)
    const [width, height] = useWindowSize();
    if (width < 1540) {
        toogle = false
    } else {
        toogle = true
    }

     return (
        <>

            {toogle ?
                <div >
                    <div className={sass.fixedContainer}>

                        <div>
                            <div className={`${sass.menuIcon1} ${sass.innerIconNav}`}>
                                <SearchOutlined style={{fontSize: '28px', color: 'black'}}/>
                                <div className={sass.caption}>
                                    Search
                                </div>
                            </div>
                            <div className={`${sass.menuIcon1} ${sass.innerIconNav}`}>
                                <CaretRightOutlined style={{fontSize: '28px', color: 'black'}}/>
                                <div className={sass.caption}>
                                    Music
                                </div>
                            </div>
                            <div className={`${sass.menuIcon1} ${sass.innerIconNav}`}>
                                <HeartOutlined style={{fontSize: '28px', color: 'black'}}/>
                                <div className={sass.caption}>
                                    Like
                                </div>
                            </div>
                            <div className={`${sass.menuIcon1} ${sass.innerIconNav}`}>
                                <VideoCameraOutlined style={{fontSize: '28px', color: 'black'}}/>
                                <div className={sass.caption}>
                                    Download
                                </div>
                            </div>
                            <div className={`${sass.menuIcon1} ${sass.innerIconNav}`}>
                                <SettingOutlined style={{fontSize: '28px', color: 'black'}}/>
                                <div className={sass.caption}>
                                    Settings
                                </div>
                            </div>

                        </div>
                        <div className={`${sass.menuIcon1} ${sass.innerIconNav}`}>
                            <LogoutOutlined style={{fontSize: '32px', color: 'black'}}/>
                            <div className={sass.caption}>
                                Nani?!
                            </div>
                        </div>


                    </div>
                </div>
                :

                <SmallNavBar mode={mode} setMode={setMode}/>
            }
        </>
    )
}

export default NavBar