    let myVar;

    function myFunction() {
    myVar = setTimeout(showContent, 3500);
    myVar = setTimeout(showPage, 4000);
    myVar = setTimeout(display, 5550);
    myVar = setTimeout(liamSlide, 4750);
}
    function showContent(){
    document.getElementById("myDiv").style.display = "block";
}
    function showPage() {
    document.getElementById("loader-wrapper").style.opacity = "0";
    document.getElementById("myDiv").style.opacity = "1";
    document.querySelector("body").style.margin = "0 0 0 0";
    document.getElementById("opacityContent").style.opacity = "1";
}
    function display(){
    document.getElementById("loader-wrapper").style.display = "none";
    document.querySelector("body").style.margin = "0 0 0 0";

}
    function liamSlide(){
        document.getElementById("liam").style.opacity = "1";
    }

    function hamburger(){
        myVar = setTimeout(opacityOn, 100);
        document.getElementById("myDiv").style.display = "none";
        document.getElementById("myDiv").style.opacity = "0";
        document.getElementById("hamburgerMenu").style.display = "block";
        function opacityOn(){
            document.getElementById("hamburgerMenu").style.opacity = "1";
        }

    }

    function hamburgerClose(){
        myVar = setTimeout(opacityOff, 400);
        myVar = setTimeout(opacityOff2, 450);
        document.getElementById("hamburgerMenu").style.opacity = "0";
        function opacityOff(){
            document.getElementById("hamburgerMenu").style.display = "none";
            document.getElementById("myDiv").style.display = "block";
        }
        function opacityOff2(){
            document.getElementById("myDiv").style.opacity = "1";
        }


    }