const renderMenu = new function(){
    const self = document.getElementById('_menu_container');
    let html = '',
    moreMenu = '';

    fetch('../Json/menu.json').then(res => res.json()).then(d => {
        d && d.forEach((mn,i) => {
            if(i<7){
                html += `<li>${mn.name ? mn.name : ''}</li>`;
            }
            else{
                moreMenu += `<li>${mn.name ? mn.name : ''}</li>`;
            }
        });

        if(moreMenu){
            html += `<li id="_menu_ct_box1" class="position-relative">
                <span>More</span>
                <div class="menus-box-container" style="display:none">
                    <ul>${moreMenu}</ul>
                </div>
            </li>`;
        }
        self.innerHTML = `<ul>${html}</ul>`;
        displayMenuBox(self);
    }).catch(error => {
        console.error('Error:', error);
    });
}();

const displayMenuBox = (div) => {
    const moreBtn = div.querySelector('#_menu_ct_box1'),
    menuBox = moreBtn.querySelector('.menus-box-container');
    moreBtn.onclick = function(e){
        e.preventDefault();
        menuBox.style.display = 'block';
    }

    document.onmouseup = function(e){
        if(!menuBox.contains(e.target)){
            menuBox.style.display = 'none';
        }
    }
}