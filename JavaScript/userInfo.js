'use strict';
(function()
{
    const userObj = document.getElementById('user_info');
    let dropdown;

    userObj.onclick = function(e)
    {
        e.preventDefault();
        const html = `<div class="dropdown-menu-user shadow overflow-hidden p-0">
            <p class="p-0 text-center bg-warning bg-opacity-50">
                <span class="fw-semibold">Hello!</span>
                <span class="fs-5">Peter</span>
            </p>
            <ul class="list-unstyled m-0 list-menu-option p-0">
                <li class="product-booked">
                    <span class="pe-2">
                        <i class="fa-solid fa-cart-shopping fs-5"></i>
                    </span>
                    <span>Product Booked</span>
                </li>
                <li class="logout">
                    <span class="pe-2 fs-5">
                        <i class="fa-solid fa-right-from-bracket"></i>
                    </span>
                    <span>Logout</span>
                </li>
            </ul>
        </div>`;
        dropdown = userObj.querySelector('.dropdown-menu-user');
        if(dropdown) dropdown = dropdown;
        else
            userObj.innerHTML += html;

        if(dropdown)
        {
            const logoutObj = dropdown.querySelector('.logout');
            if(logoutObj)
            {
                logoutObj.onclick = function(e)
                {
                    e.preventDefault();
                    Swal.fire({
                        title: "Do you want to log out?",
                        icon: 'question',
                        width: 400,
                        showCancelButton: true,
                        confirmButtonColor: "#dc3545",
                        confirmButtonText: "Logout",
                        denyButtonText: "Cancel"
                    })
                    .then(function(result)
                    {
                        if(result.isConfirmed)
                        {
                            Swal.fire({
                                title: "Logout Successfully!",
                                icon: "success",
                                width: 400
                            });
                        }
                    });
                }
            }

            const productBookedObj = dropdown.querySelector('.product-booked');
            if(productBookedObj)
            {
                productBookedObj.onclick = function(e)
                {
                    e.preventDefault();
                    offCanvas();
                }
            }
        }
    }

    document.onmouseup = function(e)
    {
        e.preventDefault();
        dropdown = userObj.querySelector('.dropdown-menu-user');
        if(dropdown && !dropdown.contains(e.target))
        {
            dropdown.remove();
        }
    }
})();