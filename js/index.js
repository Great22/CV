$(document).ready(function () {
    $("#navbar-nav li a").on("click", function () {//锚点不起作用不得已而为之
        location.href = this.hash;
        console.log(this.hash)
        document.querySelector(this.hash).scrollIntoView(true);
    })
    screenThing();
    $(".show").hover(function () {

    });
})

function screenThing() {
    var wid = $(window).width();
    if (wid < 768) {
        $(".content").hide();
        $(".forkme-wid").css("display", "block");
        $(".forkme").hide();
    } else {
        $(".content").show();
        $(".forkme-wid").css("display", "none");
        $(".forkme").show();
    }
}
$(window).resize(function () {
    screenThing();
});
$(window).scroll(function () {
    var s = $(window).scrollTop();
    var conH = $(".content").height();
    s > conH ? $("#navbar").addClass("fixed") : $("#navbar").removeClass("fixed");
})
