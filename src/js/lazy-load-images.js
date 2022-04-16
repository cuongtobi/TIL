window.addEventListener('DOMContentLoaded', function () {
    var observer,
        options = {
            rootMargin: '0px',
            threshold: 0.05
        },
        allTheLazyImages = document.querySelectorAll('.lazy');

    function lazyLoader(e) {
        e.forEach(function (e) {
            e.intersectionRatio > 0 && lazyLoadImage(e.target);
        });
    }

    function lazyLoadImage(e) {
        e.onload = function () {
            e.classList.remove('lazy');
        };
        e.getAttribute('data-src') && (e.src = e.dataset.src, 'IntersectionObserver' in window && observer.unobserve(e));
    }
    if ('IntersectionObserver' in window) {
        observer = new IntersectionObserver(lazyLoader, options);
        allTheLazyImages.forEach(function (e) {
            observer.observe(e);
        });
    } else {
        for (var i = 0; i < allTheLazyImages.length; i++) {
            lazyLoadImage(allTheLazyImages[i]);
        }
    }
});
