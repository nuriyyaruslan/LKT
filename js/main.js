$(document).ready(function () {
    $(document).on("click", ".active-link li a", function (e) {
        e.preventDefault();
        $('.active-link li a.active').removeClass('active');
        $(this).addClass('active');
    });
})