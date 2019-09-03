$(document).ready(function () {
    var next = 0;
    $("#add-committee").click(function (e) {
        e.preventDefault();
        var addto = "#field" + next;
        next = next + 1;
        var newIn = '' +
            '<div id="field-committee-' + next + '" name="field-committee-' + next + '">' +
            '<div class="row">' +
            '<div class="col-6">' +
            '<div class="form-group">' +
            '<input id="committees-position[' + next + ']" name="committeesposition[' + next + ']" type="text" placeholder="Masukan posisi" class="form-control input-md">' +
            '</div>' +
            '</div>' +
            '<div class="col-5">' +
            '<div class="form-group">' +
            '<input id="committees-name[' + next + ']" name="committeesname[' + next + ']" type="text" placeholder="Masukan nama" class="form-control input-md">' +
            '</div>' +
            '</div>' +
            '<div class="col">' +
            '<button id="remove-committee-' + (next) + '" class="btn btn-danger remove-committee-me mb-2" ><i class="fas fa-minus"></i></button>' +
            '</div>' +
            '</div>' +
            '</div>';
        var newInput = $(newIn);
        $('#field-committee').append(newIn)
        $("#field-committee-" + next).attr('data-source', $(addto).attr('data-source'));
        $("#count").val(next);

        $('.remove-committee-me').click(function (e) {
            e.preventDefault();
            var fieldNum = this.id.replace("remove-committee-", "");
            var fieldID = "#field-committee-" + fieldNum;
            $(this).remove();
            $(fieldID).remove();
        });
    });
});