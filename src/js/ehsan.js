$(".fa-bars").on("click", function () {
    $(".side-nav").removeClass("d-none");
});

$(".close-side").on("click", function () {
    $(".side-nav").addClass("d-none");
});

$(".fa-filter").on("click", function () {
    $(".spinner-border").removeClass("d-none");
    $.get("https://jsonplaceholder.typicode.com/users/1", function (data) {

    });
    $(".spinner-border").addClass("d-none");
});