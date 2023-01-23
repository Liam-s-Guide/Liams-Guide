    let myVar;

    function myFunction() {
    myVar = setTimeout(showContent, 5500);
    myVar = setTimeout(showPage, 6000);
    myVar = setTimeout(display, 7550);
    myVar = setTimeout(liamSlide, 6250);
}
    function showContent(){
    document.getElementById("myDiv").style.display = "block";
}
    function showPage() {
    document.getElementById("loader-wrapper").style.opacity = "0";
    document.getElementById("myDiv").style.opacity = "1";
    document.querySelector("body").style.margin = "0 0 0 0";
}
    function display(){
    document.getElementById("loader-wrapper").style.display = "none";
    document.querySelector("body").style.margin = "0 0 0 0";

}
    function liamSlide(){
        document.getElementById("liam").style.opacity = "1";
    }