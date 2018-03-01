'use strict';

javascript:(function () {
    let checkExistFunc = (selector, index) => {
        let checkExist = setInterval(() => {
            if (document.querySelectorAll(selector)[index] !== undefined) {
                document.querySelectorAll(selector)[index].click();
                console.log(`${selector} Exists!`);
                clearInterval(checkExist);
            }
        }, 1000);
    };

    let make = document.querySelector('input[name=make]');
    make.value = "9";
    make.dispatchEvent(new Event('blur', {bubbles: true}));

    let model = document.querySelector('input[name=model]');
    model.value = "1626";
    model.dispatchEvent(new Event('blur', {bubbles: true}));

    let priceFrom = document.querySelector('select[name=pricefrom]');
    priceFrom.value = "1000";
    priceFrom.dispatchEvent(new Event('change', {bubbles: true}));

    let pic = document.querySelector('input[name=pic]');
    pic.click();

    checkExistFunc('button', 0);

    /* For React 16, because React onChange event is synthetical，and use descriptor to intercept value, so we need to
    set native input value here.
    */

    let setNativeInputValue = (ele, value) => {
        const nativeInputValueSetter = (Object)
            .getOwnPropertyDescriptor((window).HTMLInputElement.prototype, 'value')
            .set;
        nativeInputValueSetter.call(ele, value);
    };

    let powerFrom = document.querySelector('input[name=powerfrom]');
    setNativeInputValue(powerFrom, '1000');
    powerFrom.dispatchEvent(new Event('input', {bubbles: true}));
    powerFrom.dispatchEvent(new Event('blur', {bubbles: true}));

    let J=document.querySelector('input[name=J]');
    J.click();
})();



