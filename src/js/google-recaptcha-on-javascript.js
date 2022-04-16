window.onScriptLoad = function () {
    // this callback will be called by recaptcah/api.js once its loaded. If we used
    // render=explicit as param in script src, then we can explicitly render reCaptcha at this point

    // element to "render" invisible captcha in
    var htmlEl = document.querySelector('.g-recaptcha');

    // option to captcha
    var captchaOptions = {
        sitekey: '6Lck',
        size: 'invisible',
        // tell reCaptcha which callback to notify when user is successfully verified.
        // if this value is string, then it must be name of function accessible via window['nameOfFunc'], 
        // and passing string is equivalent to specifying data-callback='nameOfFunc', but it can be
        // reference to an actual function
        callback: window.onUserVerified
    };

    // Only for "invisible" type. if true, will read value from html-element's data-* attribute if its not passed via captchaOptions
    var inheritFromDataAttr = true;

    // now render
    recaptchaId = window.grecaptcha.render(htmlEl, captchaOptions, inheritFromDataAttr);
};

// this is assigned from "data-callback" or render()'s "options.callback"
window.onUserVerified = function (token) {
    alert('User Is verified');
    console.log('token=', token);
};


// click handler for form's submit button
function onSubmitBtnClick() {
    var token = window.grecaptcha.getResponse(recaptchaId);

    // if no token, mean user is not validated yet
    if (!token) {
        // trigger validation
        window.grecaptcha.execute(recaptchaId);
        return;
    }

    var xhrData = {
        'g-recaptcha-response': token
        // more ajax body/data here
    };

    // proceed with appending more ajax call data to xhrData and then rest of ajax call process
    // var xhr = new XMLHttpRequest();
    // ... ... .... ... ... 
}
