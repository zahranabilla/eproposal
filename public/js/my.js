// Navbar active toggle
$(document).ready(function () {
    $('a[href="' + this.location.pathname + '"]').parents('li').addClass('active');
});