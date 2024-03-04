'use strict';
(function()
{
    const self = document.getElementById('_slider_container');
    let i = 0,
    clickSliderDecrement = null,
    clickSliderIncrement = null,
    imageElement = null;

    if(self)
    {
        api.get(`${base_url}/api/front-end/banner`).then(res => {
            if(res.status_code === 200)
            {
                const d = res.data || [];

                const length = d.length;
                self.innerHTML = `<img class="w-100 h-100 animate__animated animate__fadeInRight" src="${d[i].image_url || ''}" alt="${d[i].title || ''}" loading="lazy"/>
                <div class="d-flex justify-content-between position-absolute w-100 h-100 top-0 set-bg-text-slider animate__animated animate__fadeInLeft">
                    <div class="d-flex align-items-center h-100 ps-2">
                        <div class="click-slider-decrement rounded-3 border border-2 rounded-circle px-3 py-2" role="button">
                            <i class="fa-solid fa-chevron-left fs-5 text-white"></i>
                        </div>
                    </div>
                    <div class="d-block w-100 h-100">
                        <div class="ms-5 bg-body bg-opacity-50 w-50 w-md-75 p-3 h-100">
                            <p class="text-primary-emphasis fs-5 fw-bold limit-line-title">${d[i].title || ''}</p>
                            <p class="text-success-emphasis ps-3 mt-3">${d[i].description || ''}</p>
                            <button class="btn btn-outline-dark mt-3 float-end" type="button">Explore Now</button>
                        </div>
                    </div>
                    <div class="d-flex align-items-center h-100 pe-3">
                        <div class="click-slider-increment d-flex align-items-center justify-content-center rounded-3 border border-2 rounded-circle px-3 py-2" role="button">
                            <i class="fa-solid fa-chevron-right fs-5 text-white"></i>
                        </div>
                    </div>
                </div>`;

                clickSliderDecrement = self.querySelector('.click-slider-decrement'),
                clickSliderIncrement = self.querySelector('.click-slider-increment'),
                imageElement = self.querySelector('.img-slider');

                if(clickSliderDecrement)
                {
                    clickSliderDecrement.onclick = function(e)
                    {
                        e.preventDefault();
                        if(i > 0)
                        {
                            i--;
                            if(imageElement)
                                imageElement.src = d[i].image_url;
                        }
                        else
                        {
                            i = (length-1);
                            if(imageElement)
                                imageElement.src = d[i].image_url;
                        }
                    }
                }

                if(clickSliderIncrement)
                {
                    clickSliderIncrement.onclick = function(e)
                    {
                        e.preventDefault();
                        if(i < (length-1))
                        {
                            i = i+1;
                            if(imageElement)
                                imageElement.src = d[i].image_url;
                        }
                        else
                        {
                            i = 0;
                            if(imageElement)
                                imageElement.src = d[i].image_url;
                        }
                    }
                }

                setInterval(() => {
                    if(i === length) i = 0;

                    self.innerHTML = `<img class="img-slider w-100 h-100 animate__animated animate__fadeInRight" src="${d[i].image_url || ''}" alt="${d[i].title || ''}"/>
                    <div class="d-flex justify-content-between position-absolute w-100 h-100 top-0 set-bg-text-slider animate__animated animate__fadeInLeft">
                        <div class="d-flex align-items-center h-100 ps-2">
                            <div class="click-slider-decrement d-flex align-items-center justify-content-center rounded-3 border border-2 rounded-circle px-3 py-2" role="button">
                                <i class="fa-solid fa-chevron-left fs-5 text-white"></i>
                            </div>
                        </div>
                        <div class="d-block w-100 h-100">
                            <div class="ms-5 bg-body bg-opacity-50 w-50 p-3 h-100">
                                <p class="text-primary-emphasis fs-5 fw-bold">${d[i].title || ''}</p>
                                <p class="text-success-emphasis ps-3 mt-3 limited-description">${d[i].description || ''}</p>
                                <button class="btn btn-outline-dark mt-3 float-end" type="button">Explore Now</button>
                            </div>
                        </div>
                        <div class="d-flex align-items-center h-100 pe-3">
                            <div class="click-slider-increment d-flex align-items-center justify-content-center rounded-3 border border-2 rounded-circle px-3 py-2" role="button">
                                <i class="fa-solid fa-chevron-right fs-5 text-white"></i>
                            </div>
                        </div>
                    </div>`;
                    i++;
                    clickSliderDecrement = self.querySelector('.click-slider-decrement'),
                    clickSliderIncrement = self.querySelector('.click-slider-increment'),
                    imageElement = self.querySelector('.img-slider');

                    clickSliderDecrement.onclick = function(e)
                    {
                        e.preventDefault();
                        if(i > 0)
                        {
                            i--;
                            if(imageElement)
                                imageElement.src = d[i].image_url;
                        }
                        else
                        {
                            i = (length-1);
                            if(imageElement)
                                imageElement.src = d[i].image_url;
                        }
                    }

                    clickSliderIncrement.onclick = function(e)
                    {
                        e.preventDefault();
                        if(i < (length-1))
                        {
                            i++;
                            if(imageElement)
                                imageElement.src = d[i].image_url;
                        }
                        else
                        {
                            i = 0;
                            if(imageElement)
                                imageElement.src = d[i].image_url;
                        }
                    }
                },5000);
            }
        });
    }
})();