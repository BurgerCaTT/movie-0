document.addEventListener('DOMContentLoaded', function () {
    const tabsNav = document.querySelectorAll('#tabs-nav-content-head li');
    const tabContents = document.querySelectorAll('.tab-content-head');

    // Initialize first tab and content
    tabsNav[0].classList.add('active');
    tabContents.forEach((tab, index) => {
        if (index !== 0) tab.style.display = 'none';
    });

    tabsNav.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();  // Prevent default anchor behavior

            // Remove 'active' class from all tabs and hide all contents
            tabsNav.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.style.display = 'none');

            // Add 'active' class to the clicked tab
            tab.classList.add('active');

            // Show the corresponding content
            const activeTab = tab.querySelector('a').getAttribute('href');
            document.querySelector(activeTab).style.display = 'block';
        });
    });
});
