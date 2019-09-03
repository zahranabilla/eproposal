$(document).ready(function () {
    var next = 0;
    $("#add-participant").click(function (e) {
        e.preventDefault();
        var addto = "#field" + next;
        next = next + 1;
        var newIn = '' +
            '<div id="field-participant-' + next + '" name="field-participant-' + next + '">' +
            '<div class="row">' +
            '<div class="col-9">' +
            '<div class="form-group">' +
            '<input id="participants-name[' + next + ']" name="participantsname[' + next + ']" type="text" placeholder="Masukan tujuan" class="form-control input-md">' +
            '</div>' +
            '</div>' +
            '<div class="col-2">' +
            '<div class="form-group">' +
            '<input id="participants-number[' + next + ']" name="participantsnumber[' + next + ']" type="text" placeholder="Masukan tujuan" class="form-control input-md">' +
            '</div>' +
            '</div>' +
            '<div class="col">' +
            '<button id="remove-participant-' + (next) + '" class="btn btn-danger remove-participant-me mb-2" ><i class="fas fa-minus"></i></button>' +
            '</div>' +
            '</div>' +
            '</div>';
        var newInput = $(newIn);
        $('#field-participant').append(newIn)
        $("#field-participant-" + next).attr('data-source', $(addto).attr('data-source'));
        $("#count").val(next);

        $('.remove-participant-me').click(function (e) {
            e.preventDefault();
            var fieldNum = this.id.replace("remove-participant-", "");
            var fieldID = "#field-participant-" + fieldNum;
            $(this).remove();
            $(fieldID).remove();
        });
    });
});