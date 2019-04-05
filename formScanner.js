function addEvent(options) {
    let formList = document.getElementsByTagName("form");
    for (let i = 0; i < formList.length; i++) {
        formList[i].addEventListener("submit", function () {
            if (typeof (validator) === "function") {
                validator(formData, options, formList[i].id);
            } else {
                console.error("validator is not function");
            }
        })
    }
}

function validator(callback, data, id) {
    console.log("validator");
    callback(data, id);
}

function formData(settings, id) {
    let measuringTimeStart = performance.now(),
        form = new FormData(document.forms[id]),
        object = {};
    form.forEach((value, key) => {
        object[key] = value;
    });
    formData = JSON.stringify(object);
    let measuringTimeStop = performance.now();
    console.log(measuringTimeStop - measuringTimeStart);
    xmlRequest(formData, settings);
}

function xmlRequest(requestData, options) {
    for (let fld in options) {
        this[fld] = options[fld];
    }
    let xhr = new XMLHttpRequest();
    xhr.open("GET", options.url, true);
    xhr.setRequestHeader("X-Auth", options.idUser);
    xhr.send(requestData);
}