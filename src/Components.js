import React, { useEffect, useState } from 'react';
const axios = require('axios').default;

function Page() {
    //const [getUrl, setGetUrl] = useState('https://www.reddit.com/hot.json');
    const [getUrl, setGetUrl] = useState('https://www.reddit.com/r/manga/search.json?q=my+hero+academia&restrict_sr=true&limit=10');
    const [apiResponse, setApiResponse] = useState({});

    useEffect(() => {
        axios({
            method: 'get',
            url: getUrl
        })
        .then(function(response) {
            setApiResponse(response);
        })
        .catch(function(response){
            setApiResponse(response);
        })
    }, [getUrl]);

    function displayJson(data) {
        console.log(apiResponse);
        return JSON.stringify(apiResponse);
    }

    return(
        <div>
            <h1>Hello.</h1>
            <h1>{displayJson({apiResponse})}</h1>
        </div>
    )
}

export default Page;