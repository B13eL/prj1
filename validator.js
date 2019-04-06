function validator() {
    let x = document.forms['zero'].name.value;
    if (x !== 'Alex') {
        console.error("Field 'name' must be 'Alex'");
    }
}