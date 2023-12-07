document.addEventListener("DOMContentLoaded", function() {
    var btnTopo = document.getElementById("btn-topo");
    var lastScrollTop = 0;

    window.addEventListener("scroll", function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;


        if (scrollTop > lastScrollTop && scrollTop > 100) {

            btnTopo.style.opacity = "1";
        } else {

            btnTopo.style.opacity = "0";
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    btnTopo.addEventListener("click", function() {
        console.log("Button Clicked");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
