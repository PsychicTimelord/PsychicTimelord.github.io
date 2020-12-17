function getParams() {
    var params = window.location.search.replace("?", "").split("&");
    document.getElementById("params").value = params;
    console.log(params)
}