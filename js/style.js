/* Inicio los Popovers */
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})

var popover = new bootstrap.Popover(document.getElementById("buscador"));
let buscador = document.getElementById("buscador");
let flagBuscador = false;

let buscadorHandlerF = (e) => {
    setTimeout(() => {
        let idPopover = e.getAttribute("aria-describedby");
        if (idPopover) {
            console.log(idPopover);
            console.log($("#" + idPopover));
            $("#" + idPopover).find(".popover-body").html('<input type="text" class="form-control" id="search" placeholder="Noticias, Eventos...">');
        }
    }, 2);
}



if ($(window).width() > 960) {
    $('.nav-item').hover(
        function () {
            let width = $(this).width();
            $(this).css("background-color", "#0b5479");
            $(this).find("#principal").addClass('show');
            $(this).find(".dropdown-menu").width(width);
        },
        function () {
            $(this).css("background-color", "rgb(20, 154, 204)");
            $(this).find(".dropdown-menu").removeClass('show');
        }
    )
    $('.dropdown-menu').hover(
        function () {
            $(this).parent().css("background-color", "#0b5479");
        }
    )
} else {
    $('.nav-item').hover(
        function () {
            let width = $(this).width();
            $(this).css("background-color", "#0b5479");
            $(this).find("#principal").addClass('show');
            $(this).find(".dropdown-menu").width(width);
        },
        function () {
            $(this).css("background-color", "rgb(20, 154, 204)");
            $(this).find(".dropdown-menu").removeClass('show');
        }
    )
    $('.dropdown-menu').hover(
        function () {
            $(this).parent().css("background-color", "#0b5479");
        }
    )
}