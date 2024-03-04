'use strict';
(function()
{
    const self = document.getElementById('_menu_container');
    let html = '',
    moreMenu = '';

    api.get(`${base_url}/api/front-end/category`).then(res => {
        if(res.status_code === 200)
        {
            const d = res.data || [];
            (d || []).forEach((mn,i) => {
                if(i<7)
                {
                    html += `<li class="product-click fs-5" data-category="${mn.category_key || 'home'}">${mn.name || ''}</li>`;
                }
                else
                {
                    moreMenu += `<li class="product-click fs-5" data-category="${mn.category_key || 'home'}">${mn.name || ''}</li>`;
                }
            });
    
            if(moreMenu)
            {
                html += `<li id="_menu_ct_box1" class="position-relative">
                    <span>More</span>
                    <div class="menus-box-container" style="display:none">
                        <ul>${moreMenu}</ul>
                    </div>
                </li>`;
            }
            
            if(self)
            {
                self.innerHTML = `<ul>${html}</ul>`;
                if(moreMenu) displayMenuBox(self);
                setClickEvent(self);
            }
        }
    });
})();

const displayMenuBox = (div) => {
    const moreBtn = div.querySelector('#_menu_ct_box1'),
    menuBox = moreBtn.querySelector('.menus-box-container');
    moreBtn.onclick = function(e)
    {
        e.preventDefault();
        menuBox.style.display = 'block';
    }

    document.onmouseup = function(e)
    {
        if(!menuBox.contains(e.target))
        {
            menuBox.style.display = 'none';
        }
    }
}

const setClickEvent = (div) => {
    const menuList = div.querySelectorAll('.product-click');
    let previousElement = null,
    routes = [];

    menuList.forEach(menu => {
        menu.addEventListener('click',function(e)
        {
            e.preventDefault();
            if(previousElement)
            {
                previousElement.classList.remove('active');
            }
            this.classList.add('active');
            previousElement = this;
            const category = this.dataset.category;
            
            api.post(`${base_url}/api/front-end/brand`,{
                category: category
            }).then(res => {
                if(res.status_code === 200)
                {
                    const data = res.data || [];
                    window.location.hash = category.replace(/\_/g,'-');
                    renderBrandList(data);
                }
            });
        });
        routes.push({
            path: menu.dataset.category.replace(/\_/g,'-'),
            callback: () => {
                menu.dispatchEvent(new Event('click',{
                    bubbles: true,
                    cancelable: false
                }));
            }
        });
    });
    const router = new Router(routes);
    window.addEventListener('hashchange',() => {
        const pathName = window.location.hash.slice(1);
        router.loadRoute(pathName);
    });
}