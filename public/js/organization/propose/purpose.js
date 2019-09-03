$(document).ready(function () {
    var next = 0;
    $("#add-purpose").click(function (e) {
        e.preventDefault();
        var addto = "#field" + next;
        next = next + 1;
        var newIn = '' +
            '<div id="field-purpose-' + next + '" name="field-purpose-' + next + '">' +
            '<div class="row">' +
            '<div class="col-11">' +
            '<div class="form-group">' +
            '<input id="purposes[' + next + ']" name="purposes[' + next + ']" type="text" placeholder="Masukan tujuan" class="form-control input-md">' +
            '</div>' +
            '</div>' +
            '<div class="col">' +
            '<button id="remove-purpose-' + (next) + '" class="btn btn-danger remove-purpose-me mb-2" ><i class="fas fa-minus"></i></button>' +
            '</div>' +
            '</div>' +
            '</div>';
        var newInput = $(newIn);
        $('#field-purpose').append(newIn)
        $("#field-purpose-" + next).attr('data-source', $(addto).attr('data-source'));
        $("#count").val(next);

        $('.remove-purpose-me').click(function (e) {
            e.preventDefault();
            var fieldNum = this.id.replace("remove-purpose-", "");
            var fieldID = "#field-purpose-" + fieldNum;
            $(this).remove();
            $(fieldID).remove();
        });
    });
});