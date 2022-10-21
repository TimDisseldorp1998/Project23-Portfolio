(function scrolledNavbar(navbar) {
    if (!navbar) return;

    var scrolledClass = navbar.getAttribute('data-scrolled-navbar-class');

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            navbar.classList.add(scrolledClass);
        } else {
            navbar.classList.remove(scrolledClass);
        }
    }
})(document.querySelector('.js-navbar'));

(function scrollTo(clickers) {
    if (!clickers) return;
    
    clickers = Array.prototype.slice.call(clickers);
    clickers.forEach(init);

    function init(clicker){
        var id = clicker.getAttribute("href").substr(1);
        var el = document.getElementById(id);

        clicker.addEventListener('click', onClick);

        function onClick(e) {
            e && e.preventDefault();
            el.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
})(document.querySelectorAll('.js-scroll-to'));