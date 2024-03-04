const body = document.body;
api.get(`${base_url}/api/front-end/footer`).then(res => {
    if(res.status_code === 200)
    {
        const d = res.data || {},
        company = d.company || {},
        social = d.social || [];

        let divSocial = null;
        body.querySelectorAll('.data-set').forEach(el => {
            const f = el.name || el.getAttribute('name');
            
            if(f === 'social-media') divSocial = el;
            if(el.tagName === 'IMG')
            {
                el.src = company[f] || '';
            }
            else
            {
                el.textContent = company[f] || '';
            }
        });
        if(divSocial)
        {
            setSocialMedia(divSocial,social);
        }
    }
});

const setSocialMedia = (div,d=null) => {
    d = d || [];
    let html = '';
    (d || []).forEach(img => {
        html += `<div class="d-block">
            <a href="${img.url || 'javascript:void(0)'}" target="_blank" class="text-decoration-none text-dark">
                <img class="social-icon" src="${img.image_url || ''}" alt="facebook-logo"/>
            </a>
        </div>`;
    });
    div.innerHTML = html;
}