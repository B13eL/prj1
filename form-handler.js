function init(options, validationFunction) {
    let formList = document.getElementsByTagName("form");
    for (let i = 0; i < formList.length; i++) {
        formList[i].addEventListener("submit", function () {
                if (Object.keys(options).length < 2) {
                    console.error("Options is empty");
                    return;
                }
                if (validationFunction === undefined) {
                    console.log("You can add 'validator' function");
                    formData(formList[i], options)
                } else {
                    validationFunction(formData);
                    formData(formList[i], options);
                }
            }
        )
    }
}

function formData(id, options) {
    let form = new FormData(id),
        formData = {};
    form.forEach((value, key) => {
        formData[key] = value;
    });
    xmlRequest(formData, options);
}

function xmlRequest(requestData, options) {
    for (let field in requestData) {
        if (requestData[field] === "") {
            console.error("You can't send empty form");
            return;
        }
    }
    for (let field in options) {
        if (options.hasOwnProperty(field))
            [field] = options[field];
    }
    let xhr = new XMLHttpRequest();
    xhr.open("GET", options['submitted-url'], true);
    xhr.setRequestHeader("X-Auth", options['auth-hash']);
    xhr.send(JSON.stringify(requestData));
    console.log(JSON.stringify(requestData));
}