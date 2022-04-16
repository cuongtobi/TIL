var lazyLoad = false;

function onLazyLoad() {
    if (lazyLoad === true) return;
    lazyLoad = true;

    document.removeEventListener('scroll', onLazyLoad);
    document.removeEventListener('mousemove', onLazyLoad);
    document.removeEventListener('mousedown', onLazyLoad);
    document.removeEventListener('touchstart', onLazyLoad);

    (function () {
        var n = document.createElement("script");
        n.async = !0, n.setAttribute('data-ad-client', 'XXXXXXXXXX'), document.head.appendChild(n), n.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
    })();

    setTimeout(function () {
        ! function (e, a, t, n, g, c, o) {
            e.GoogleAnalyticsObject = g, e.ga = e.ga || function () {
                (e.ga.q = e.ga.q || []).push(arguments)
            }, e.ga.l = 1 * new Date, c = a.createElement(t), o = a.getElementsByTagName(t)[0], c.async = 1, c.src = "https://www.google-analytics.com/analytics.js", o.parentNode.insertBefore(c, o)
        }(window, document, "script", 0, "ga"), ga("create", "UA-150930514-1", "auto"), ga("send", "pageview");
        // Tracking error page
        window.onerror = function (message, source, lineno, colno, error) {
            var label = location.href + ': ' + message + ' (' + source + ':' + lineno + (colno ? ':' + colno : '') + ')';
            console.log(label)
            ga('send', 'event', 'performance', 'error', label, 1, {
                nonInteraction: true
            });
            window.onerror = null;
        };
    }, 1);
}

document.addEventListener('scroll', onLazyLoad),
document.addEventListener('mousemove', onLazyLoad),
document.addEventListener('mousedown', onLazyLoad),
document.addEventListener('touchstart', onLazyLoad),
document.addEventListener('load', function () {
    document.body.clientHeight != document.documentElement.clientHeight && 0 == document.documentElement.scrollTop && 0 == document.body.scrollTop || onLazyLoad()
});
