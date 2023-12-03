const API_KEY ="a305215b-709e-4761-ba95-6e14baedda2f";

export const getMatchInfo=() => {
    const url ='https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0';

    return fetch(url).then((res)=>res.json()).catch((err)=>console.log(err))
}

export const getMatchScore=() => {
    const url ='https://api.cricapi.com/v1/cricScore?apikey==${API_KEY}';

    return fetch(url).then((res)=>res.json()).catch((err)=>console.log(err))
}