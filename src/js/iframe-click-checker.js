window.addEventListener('DOMContentLoaded', function () {
    window.focus();

    window.addEventListener('blur', function () {
        setTimeout(function () {
            if (document.activeElement.tagName === 'IFRAME') {
                console.log('clicked');
            }
        });
    });
});
