/* Script Menu */
window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

/* Barra de busqueda */
document.getElementById('search-icon').addEventListener('click', function(event) {
    event.preventDefault();
    var searchBox = document.getElementById('searchBox');
    if (searchBox.style.display === 'none' || searchBox.style.display === '') {
        searchBox.style.display = 'block';
    } else {
        searchBox.style.display = 'none';
    }
});

document.getElementById('close-search').addEventListener('click', function(event) {
    var searchBox = document.getElementById('searchBox');
    searchBox.style.display = 'none';
});

