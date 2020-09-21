$(document).ready(function () {
    $(".menu-item").click(function () {
        $(".menu-item").removeClass("menu__active");
        $(this).addClass("menu__active");
    });

    $(".opcao").click(function () {
        var email = $(this).text();
        $("#email-selecionado").text(email);
    })

   
});