import React, {useState} from 'react';
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route
}
    from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar";
import {AnimatePresence} from "framer-motion";
import Home from "./components/Home/Home";
import 'antd/dist/antd.css'
import SingleVid from "./components/SingleVideo/SingleVid";
import Header from "./components/Header/Header";
import Channel from "./components/Channel/Channel";
import DownloadPage from "./components/DownloadPage/DownloadPage";
import SearchOutput from "./components/Home/SearchOutput/SearchOutput";

function App() {


    return (
        <div className="App">
            <BrowserRouter>
            <Header/>

                <Routes>
                    <Route path={'/'} element={
                        <div style={{background:'rgba(231, 233, 238, 0.71)'}}>
                            <AnimatePresence exitBeforeEnter>
                                <NavBar/>
                            </AnimatePresence>
                            <Home/>
                        </div>

                    }/>
                    <Route path={'/search/:q'} element={
                        <div>
                            <AnimatePresence exitBeforeEnter>
                                <NavBar/>
                            </AnimatePresence>
                            <SearchOutput/>
                        </div>

                    }/>
                    <Route path={'/single_vid/:id'} element={
                        <SingleVid/>
                    }/>
                    <Route path={'/channel/:id'} element={
                         <Channel/>
                    }/>
                    <Route path={'/download/:id'} element={
                         <DownloadPage/>
                    }/>
                </Routes>
            </BrowserRouter>


        </div>
    );
}

export default App;
