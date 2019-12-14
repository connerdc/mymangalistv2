import React, { useEffect, useState } from 'react';
const axios = require('axios').default;

function Page() {
    //const [getUrl, setGetUrl] = useState('https://www.reddit.com/hot.json');
    const [getUrl, setGetUrl] = useState('https://www.reddit.com/r/manga/search?q=boku+no+hero+academia&limit=10.json');
    const [apiResponse, setApiResponse] = useState({});

    useEffect(() => {
        axios({
            method: 'get',
            url: getUrl,
            data: {
                'Content-Type':  'application/json' 
            }
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