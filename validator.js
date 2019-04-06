function validator() {
    let x = document.forms['zero'].name.value;
    if (x !== 'Alex') {
        console.log("Field 'name' must be 'Alex'");
    }
}