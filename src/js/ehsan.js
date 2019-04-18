$(".fa-bars").on("click", function () {
    $(".side-nav").removeClass("d-none");
});

$(".close-side").on("click", function () {
    $(".side-nav").addClass("d-none");
});

$(".fa-filter").on("click", function () {
    $(".spinner-border").removeClass("d-none");
    $.get("../api/admin-cases.json", function (data) {
        alert(data.data[0].title);
    });
    $(".spinner-border").addClass("d-none");
});

$("#accept").on("click", function () {
    $(this).removeClass("btn-bg-shadow");
    $("#manage").removeClass("btn-bg-stone");
    $("#manage").addClass("btn-bg-shadow");
    $(this).addClass("btn-bg-stone");
    $("#manage_users").addClass("d-none");
    $("#accept_users").removeClass("d-none");
});

$("#manage").on("click", function () {
    $(this).removeClass("btn-bg-shadow");
    $("#accept").removeClass("btn-bg-stone");
    $("#accept").addClass("btn-bg-shadow");
    $(this).addClass("btn-bg-stone");
    $("#manage_users").removeClass("d-none");
    $("#accept_users").addClass("d-none");
});