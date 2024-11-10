// Select elements
const toggleSearchBtn = document.getElementById('toggle-search-btn'); // Nút toggle để mở thanh tìm kiếm
const inputHeaderAuth = document.querySelector('.input-header-auth'); // Container chứa thanh tìm kiếm
const closeSearchBtn = document.querySelector('.header-search-close'); // Nút "x" để đóng thanh tìm kiếm
const headerBtn = document.querySelector('.header-btn'); // Nút header-btn mà bạn muốn ẩn đi

// Add event listener for the toggle button to open/close search form
toggleSearchBtn.addEventListener('click', function() {
    // Toggle the 'input-header-auth--active' class để hiện/ẩn thanh tìm kiếm
    inputHeaderAuth.classList.toggle('input-header-auth--active');

    // Khi thanh tìm kiếm hiện ra, ẩn nút header-btn
    headerBtn.style.display = 'none';
});

// Add event listener for the close button (x button)
closeSearchBtn.addEventListener('click', function() {
    // Remove the 'input-header-auth--active' class để ẩn thanh tìm kiếm
    inputHeaderAuth.classList.remove('input-header-auth--active');

    // Khi nhấn nút "x", hiện lại nút header-btn
    headerBtn.style.display = 'block';
});



// Lấy phần tử cần sử dụng
const headerBtn1 = document.querySelector('.header-btn');
const headerNav = document.querySelector('.header-nav');

// Thêm sự kiện click cho nút
headerBtn.addEventListener('click', function() {
    // Toggle class 'header-nav--active' cho header-nav
    headerNav.classList.toggle('header-nav--active');

    // Toggle class 'button-btn-active' cho nút
    headerBtn1.classList.toggle('button-btn-active');
});

