function get(url) {
    fetch(url, {
        method: 'GET',
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
};

// get('https://min-api.cryptocompare.com/data/v2/news/?lang=EN');