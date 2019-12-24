function check() {
    let result = document.getElementById("result");
    if (document.getElementById("input1").value == document.getElementById("input2").value) {
        result.innerHTML = "Strings match!";
    } else {
        result.innerHTML = "Strings dont match!";
    }
}
