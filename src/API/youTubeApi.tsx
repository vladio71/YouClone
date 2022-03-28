import axios, {AxiosResponse, Method} from 'axios'
import {Comment} from "../components/SingleVideo/SingleVid";
import {useCallback} from "react";
import {Fetch, SortTrend} from "../components/Home/Home";

const options = {
    method: 'GET' as const,
    url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
    params: {q: 'react'},
    headers: {
        'x-rapidapi-host': 'youtube-search-results.p.rapidapi.com',
        'x-rapidapi-key': 'cc1d5404e0mshd38a0f446bc1c38p157a2ejsn3dbd7e08ff46'
    }
};


export const getComments = (req: string) => {
    let response
    let options = {
        method: 'GET' as const,
        url: 'https://youtube-search-and-download.p.rapidapi.com/video/comments',
        params: {id: req},
        headers: {
            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
            'X-RapidAPI-Key': 'cc1d5404e0mshd38a0f446bc1c38p157a2ejsn3dbd7e08ff46'
        }
    };
    response = axios.request(options).then(function (response) {
         return response.data.comments
    }).catch(function (error) {
        console.error(error);
    });
    return response
}

export const getRelatedVid = (req: string) => {
    let response
    let options = {
        method: 'GET' as const,
        url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
        params: {id: req, hl: 'en'},
        headers: {
            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
            'X-RapidAPI-Key': 'cc1d5404e0mshd38a0f446bc1c38p157a2ejsn3dbd7e08ff46'
        }
    };

    response = axios.request(options).then(function (response) {
        return response.data.contents
    }).catch(function (error) {
        console.error(error);
    });

    return response
}

export const getVidInfo = (req:string) => {
    let response
    let options = {
        method: 'GET' as const,
        url: 'https://youtube-search-and-download.p.rapidapi.com/video',
        params: {id: req},
        headers: {
            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
            'X-RapidAPI-Key': 'cc1d5404e0mshd38a0f446bc1c38p157a2ejsn3dbd7e08ff46'
        }
    };

    response = axios.request(options).then(function (response) {
        return response.data.videoDetails
    }).catch(function (error) {
        console.error(error);
    });
    return response
}

export const getCannelInfo = (req:string) => {
    let response
    let options = {
        method: 'GET' as const,
        url: 'https://youtube-search-and-download.p.rapidapi.com/channel',
        params: {id: req},
        headers: {
            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
            'X-RapidAPI-Key': 'cc1d5404e0mshd38a0f446bc1c38p157a2ejsn3dbd7e08ff46'
        }
    };

    response = axios.request(options).then(function (response) {
        console.log(response.data)
        return response.data
    }).catch(function (error) {
        console.error(error);
    });
    return response
}

export const getChannelBack = (req:string) => {
    let response
    var options = {
        method: 'GET' as const,
        url: `https://youtube-data-scraper.p.rapidapi.com/channel/${req}`,
        headers: {
            'X-RapidAPI-Host': 'youtube-data-scraper.p.rapidapi.com',
            'X-RapidAPI-Key': 'cc1d5404e0mshd38a0f446bc1c38p157a2ejsn3dbd7e08ff46'
        }
    };

    response= axios.request(options).then(function (response) {
        console.log(response.data);
        return response.data
    }).catch(function (error) {
        console.error(error);
    });
    return response
}

export const getDonwloadOpts = (req:string) =>{


    let response
    let options = {
        method: 'GET' as const,
        url: 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl',
        params: {id: req},
        headers: {
            'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com',
            'X-RapidAPI-Key': 'cc1d5404e0mshd38a0f446bc1c38p157a2ejsn3dbd7e08ff46'
        }
    };

    response = axios.request(options).then(function (response) {
        return response.data.link
    }).catch(function (error) {
        console.error(error);
    });
    return response
}

export const useFetchSearch = (req:string, sort:Sort) => {
    var options = {
        method: 'GET' as const,
        url: 'https://youtube-search-and-download.p.rapidapi.com/search',
        params: {
            query: req,
            type: 'v',
            sort: sort
        },
        headers: {
            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
            'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

export type Sort = 'r'| 'ra' | 'u' | 'v'

export const searchRequest =  (req: string, s:Sort = 'v') => {
    let response
    var options = {
        method: 'GET' as const,
        url: 'https://youtube-search-and-download.p.rapidapi.com/search',
        params: {
            query: req,
            type: 'v',
            sort: s
        },
        headers: {
            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
            'X-RapidAPI-Key': 'cc1d5404e0mshd38a0f446bc1c38p157a2ejsn3dbd7e08ff46'
        }
    };

    response = axios.request(options).then(function (response) {
        console.log(response.data);
        return response.data.contents
     }).catch(function (error) {
        console.error(error);
    });
    return response

}


