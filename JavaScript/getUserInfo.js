window.addEventListener('DOMContentLoaded',() => {
    fetch('https://api.ipify.org?format=json')
    .then(res => res.json())
    .then(d => {
        fetch(`https://api.iplocation.net/?ip=${d.ip}`)
        .then(res => res.json())
        .then(d => {
            fetch(`${base_url}/api/front-end/save`,{
                method: 'POST',
                headers: {
                    Accept: 'applications/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(d)
            });
        });
    });
});