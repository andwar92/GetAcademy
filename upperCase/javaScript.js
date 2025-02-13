let navn = document.getElementById("app").innerText;

function upperCase() {
    navn = navn.charAt(0).toUpperCase() + navn.substring(1).toLowerCase();
    document.getElementById("app").innerText = navn;
    console.log(navn)
}