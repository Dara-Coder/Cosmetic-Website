'use strict';
const renderBrandList = (d=null) => {
    d = d || [];
    const self = document.getElementById('_main_container');
    let html = '',
    i = 1;

    (d || []).forEach((brand, index) => {
        i = (index) % 5 === 0 ? 1 : i;
        html += `<div class="card-product product-details overflow-hidden animate__animated animate__backInRight animate__delay-${i}s" data-brand="${brand.brand_key || 'dior'}" data-id="${brand.id}">
            <div class="w-100">
                <img class="product-show" src="${brand.image_url || ''}" alt="brand-image"/>
            </div>
            <div class="w-100 px-2 mt-1">
                <p class="text-dark limit-line fs-5 fw-semibold">${brand.name || ''}</p>
            </div>
        </div>`;
        i++;
    });
    html = `<div class="d-flex flex-wrap gap-2 justify-content-around mb-3 animate__animated animate__fadeInUp">${html}</div>`;

    self.innerHTML = html;
    const previousDiv = self.previousElementSibling;
    previousDiv.style.display = 'block';
    setClickEventProductList(self);
}

const setClickEventProductList = (div) => {
    const productDetailsList = div.querySelectorAll('.product-details');
    productDetailsList.forEach(product => {
        product.onclick = function(e)
        {
            e.preventDefault();
            const brand_id = this.dataset.id;
            api.post(`${base_url}/api/front-end/product-list`,{
                brand_id: brand_id
            }).then(res => {
                if(res.status_code === 200)
                {
                    const data = res.data || [];
                    renderProductList(div,data);
                }
            });
        };
    });
}

const renderProductList = (div,d=null) => {
    d = d || [];
    const previousDiv = div.previousElementSibling;
    previousDiv.style.display = 'block';
    let html = '',
    i = 1;

    (d || []).forEach((product, index) => {
        i = (index) % 5 === 0 ? 1 : i;
        html += `<div class="card-product product-view-details overflow-hidden animate__animated animate__backInRight animate__delay-${i}s" data-id="${product.id || 1}">
            <div class="w-100">
                <img class="product-show" src="${product.image_url || ''}" alt="product-image"/>
            </div>
            <div class="w-100 px-2 mt-1">
                <p class="text-dark limit-line p-0 m-0">
                    <span>Code</span>
                    <span class="px-1">:</span>
                    <span class="fw-semibold">${product.code || ''}</span>
                </p>
            </div>
            <div class="w-100 px-2 mt-1">
                <p class="text-dark limit-line">
                    <span>Product</span>
                    <span class="px-1">:</span>
                    <span class="fw-semibold">${product.name || ''}</span>
                </p>
            </div>
            <div class="w-100 px-2 mt-2">
                <p class="text-end text-dark fs-5">Price: ${product.price || ''}$</p>
            </div>
        </div>`;
        i++;
    });
    div.innerHTML = `<div class="d-flex flex-wrap gap-2 justify-content-around">${html}</div>`;
    setClickEventProductListView(div);
}

const setClickEventProductListView = (div) => {
    const productViewList = div.querySelectorAll('.product-view-details');
    productViewList.forEach(productView => {
        productView.onclick = function(e)
        {
            e.preventDefault();
            const product_id = this.dataset.id;
            api.post(`${base_url}/api/front-end/product-details`,{
                product_id: product_id
            }).then(res => {
                if(res.status_code === 200)
                {
                    const data = res.data || {};
                    viewProductDetail(div,data);
                }
            });
        }
    });
}

const viewProductDetail = (div,data=null) => {
    const d = data ? data.data : [];
    const previousDiv = div.previousElementSibling;
    previousDiv.style.display = 'none';

    const html = `<div class="d-flex justify-content-center animate__animated animate__fadeInUp">
        <div class="product-details-view">
            <div class="product-slider w-50">
                <img class="product-image w-100 h-100" src="${d.image_list ? d.image_list[0].image_url : ''}" alt="product-slider"/>
                <div class="d-flex justify-content-between position-absolute w-100 h-100 z-1 top-0">
                    <div class="d-flex align-items-center h-100 ps-2">
                        <div class="btn-slider-decrement d-flex align-items-center justify-content-center p-3 rounded-circle border border-1" role="button">
                            <i class="fa-solid fa-chevron-left fs-5 fw-bold text-white"></i>
                        </div>
                    </div>
                    <div class="d-flex align-items-center h-100 pe-2">
                        <div class="btn-slider-increment d-flex align-items-center justify-content-center p-3 rounded-circle border border-1" role="button">
                            <i class="fa-solid fa-chevron-right fs-5 fw-bold text-white"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-50">
                <div class="d-flex justify-content-end">
                    <p class="fw-semibold fs-5 m-0 p-0 text-nowrap">Code : ${d.code || ''}</p>
                </div>
                <p class="fw-bold fs-5">${d.name || ''}</p>
                <p class="ps-3 mt-3">${d.description || ''}</p>
                <p class="fw-bold mt-3">Price: ${d.price || 0}$</p>
                <div class="d-flex align-items-center gap-2 mt-3 flex-wrap">
                    <div class="d-flex gap-1 align-items-center">
                        <button class="btn btn-sm btn-outline-danger btn-decrement">
                            <i class="fa-solid fa-minus fs-5"></i>
                        </button>
                        <p class="show-product-amount">1</p>
                        <button class="btn btn-sm btn-outline-success btn-increment">
                            <i class="fa-solid fa-plus fs-5"></i>
                        </button>
                    </div>
                    <div class="d-block">
                        <button class="btn btn-sm btn-primary btn-get-product" data-id="${d.id || 0}">Get Product</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    div.innerHTML = html;
    const containerSlider = div.querySelector('.product-slider');
    let i = 0;

    setInterval(() => {
        if(i === (d.image_list.length) || 0) i = 0;
        if(d.image_list[0])
        {
            containerSlider.innerHTML = `<img class="product-image w-100 h-100" src="${d.image_list ? d.image_list[i].image_url : ''}" alt="product-slider"/>
            <div class="d-flex justify-content-between position-absolute w-100 h-100 z-1 top-0">
                <div class="d-flex align-items-center h-100 ps-2">
                    <div class="btn-slider-decrement d-flex align-items-center justify-content-center p-3 rounded-circle border border-1" role="button">
                        <i class="fa-solid fa-chevron-left fs-5 fw-bold text-white"></i>
                    </div>
                </div>
                <div class="d-flex align-items-center h-100 pe-2">
                    <div class="btn-slider-increment d-flex align-items-center justify-content-center p-3 rounded-circle border border-1" role="button">
                        <i class="fa-solid fa-chevron-right fs-5 fw-bold text-white"></i>
                    </div>
                </div>
            </div>`;
        }
        i++;
        i = viewProductImage(i,(d.image_list.length || 0),div.firstChild,d.image_list);
    },5000);
    renderRelatedProduct(div,data.related);
    setBookingProduct(div);
    i = viewProductImage(i,(d.image_list.length || 0),div.firstChild,d.image_list);
}

const viewProductImage = (index,length,div,d=[]) => {
    const btnDecrement = div.querySelector('.btn-slider-decrement'),
    btnIncrement = div.querySelector('.btn-slider-increment'),
    imageElement = div.querySelector('.product-image');

    if(btnDecrement)
    {
        btnDecrement.onclick = function(e)
        {
            e.preventDefault();
            if(index > 0)
            {
                index--;
                if(imageElement)
                    imageElement.src = d[index];
            }
            else
            {
                index = (length-1);
                if(imageElement)
                    imageElement.src = d[index];
            }
        }
    }

    if(btnIncrement)
    {
        btnIncrement.onclick = function(e)
        {
            e.preventDefault();
            if(index < (length-1))
            {
                index++;
                if(imageElement)
                    imageElement.src = d[index];
            }
            else
            {
                index = 0;
                if(imageElement)
                    imageElement.src = d[index];
            }
        }
    }
    return index;
}

let productList = [],
productBookedList = [];
const setBookingProduct = (div) => {
    const btnDecrement = div.querySelector('.btn-decrement'),
    btnIncrement = div.querySelector('.btn-increment'),
    productBooked = div.querySelector('.show-product-amount'),
    getProduct = div.querySelector('.btn-get-product');

    btnDecrement.onclick = function(e)
    {
        e.preventDefault();
        let value = parseInt(productBooked.textContent);
        if(value > 1)
        {
            productBooked.textContent = parseInt(productBooked.textContent) - 1;
        }
        else
        {
            productBooked.textContent = 1;
        }
    }

    btnIncrement.onclick = function(e)
    {
        e.preventDefault();
        let value = parseInt(productBooked.textContent);
        if(value >= 1)
        {
            productBooked.textContent = parseInt(productBooked.textContent) + 1;
        }
        else
        {
            productBooked.textContent = 1;
        }
    }

    getProduct.onclick = function(e)
    {
        e.preventDefault();
        const productId = this.dataset.id;
        fetch('../Json/login.json').then(res => res.json()).then(d => {
            d.forEach(user => {
                if((user.login_name == 'peter') && (user.password == '123456'))
                {
                    if(!productList[0])
                    {
                        productList.push(productId);
                        const Toast = Swal.mixin({
                            toast: true,
                            position: "top-end",
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.onmouseenter = Swal.stopTimer;
                                toast.onmouseleave = Swal.resumeTimer;
                            }
                        });
                        Toast.fire({
                            icon: "success",
                            title: "Your product has been saved"
                        });
                    }
                    else
                    {
                        const exist = productList.includes(productId);
                        if(exist)
                        {
                            Swal.fire({
                                title: "Product Already Exist!",
                                icon: "warning",
                                width: 400
                            });
                        }
                        else
                        {
                            productList.push(productId);
                            const Toast = Swal.mixin({
                                toast: true,
                                position: "top-end",
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                                didOpen: (toast) => {
                                    toast.onmouseenter = Swal.stopTimer;
                                    toast.onmouseleave = Swal.resumeTimer;
                                }
                            });
                            Toast.fire({
                                icon: "success",
                                title: "Your product has been saved"
                            });
                        }
                    }
                    fetch('../Json/productDetails.json').then(res => res.json()).then(d => {
                        productBookedList = d.filter(value => productList.includes(value.id));
                    })
                    .catch(err => {
                        console.log(err);
                    });
                }
                else
                {
                    modelDialog();
                }
            });
        })
        .catch(err => {
            console.log(err);
        });
    }
}