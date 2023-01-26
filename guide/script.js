    let myVarGuide;

    function myFunction() {
        myVarGuide = setTimeout(showContent, 3500);
        myVarGuide = setTimeout(showPage, 4000);
        myVarGuide = setTimeout(display, 5550);
        myVarGuide = setTimeout(liamSlide, 4750);
}
    function showContent(){
    document.getElementById("myDiv").style.display = "block";
}
    function showPage() {
    document.getElementById("loader-wrapper-Guide").style.opacity = "0";
    document.getElementById("myDiv").style.opacity = "1";
    document.querySelector("body").style.margin = "0 0 0 0";
    document.getElementById("opacityContent").style.opacity = "1";
}
    function display(){
    document.getElementById("loader-wrapper-Guide").style.display = "none";
    document.querySelector("body").style.margin = "0 0 0 0";

}
    function liamSlide(){
        document.getElementById("liam").style.opacity = "1";
    }