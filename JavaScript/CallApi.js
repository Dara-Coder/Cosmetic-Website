class Api{
    constructor()
    {}

    get = (endpoint) => {
        const response = fetch(endpoint,{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json());
        return response;
    }

    post = (endpoint,param) => {
        const response = fetch(endpoint,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        })
        .then(response => response.json());
        return response;
    }
}

const base_url = (window.location.protocol+'//'+window.location.hostname+':8000');
const api = new Api();