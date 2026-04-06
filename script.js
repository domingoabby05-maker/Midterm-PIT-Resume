$(".navbar a").click(function(e){
    e.preventDefault();

    $(".card").removeClass("highlight");

    let target = $(this).attr("href");

    $(target).addClass("highlight");

    $("html, body").animate({
        scrollTop: $(target).offset().top - 80
    }, 500);
});

document.getElementById("viewMoreBtn").addEventListener("click", () => {
    const extra = document.getElementById("extraProjects");
    const btn = document.getElementById("viewMoreBtn");

    if (extra.style.display === "none") {
        extra.style.display = "block";
        btn.textContent = "View Less Projects";
    } else {
        extra.style.display = "none";
        btn.textContent = "View More Projects";
    }
});

 // Dark mode toggle
$("#darkModeToggle").click(function() {
    $("body").toggleClass("dark-mode");
});