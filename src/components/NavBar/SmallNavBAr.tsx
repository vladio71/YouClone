import React, {useState} from "react";
import sass from './NavBar.module.sass'
import {
    MenuOutlined,
    SearchOutlined,
    CaretRightOutlined,
    HeartOutlined,
    VideoCameraOutlined,
    SettingOutlined,
    LogoutOutlined
} from '@ant-design/icons'


const SmallNavBar = ({mode, setMode}: any) => {


    return (
        <div>
            <div className={sass.containerSmall}>

                <div>
                    <div className={`${sass.innerIcon} ${sass.innerIconNav}`}>
                        <SearchOutlined style={{fontSize: '28px', color: 'black', marginTop:'1rem'}}/>
                        <span className={sass.span}>Search</span>
                    </div>
                    <div className={`${sass.innerIcon} ${sass.innerIconNav}`}>
                        <CaretRightOutlined style={{fontSize: '28px', color: 'black', marginTop:'1rem'}}/>
                        <span className={sass.span}>Music</span>

                    </div>
                    <div className={`${sass.innerIcon} ${sass.innerIconNav}`}>
                        <HeartOutlined style={{fontSize: '28px', color: 'black', marginTop:'1rem'}}/>
                        <span className={sass.span}>Like</span>

                    </div>
                    <div className={`${sass.innerIcon} ${sass.innerIconNav}`}>
                        <VideoCameraOutlined style={{fontSize: '28px', color: 'black', marginTop:'1rem'}}/>
                        <span className={sass.span}>Video</span>

                    </div>
                    <div className={`${sass.innerIcon} ${sass.innerIconNav}`}>
                        <SettingOutlined style={{fontSize: '28px', color: 'black', marginTop:'1rem'}}/>
                        <span className={sass.span}>Settings</span>
                    </div>

                </div>
                <div className={sass.innerIcon}>
                    <LogoutOutlined style={{fontSize: '32px', color: 'black'}}/>
                </div>

            </div>
        </div>
    )
}

export default SmallNavBar