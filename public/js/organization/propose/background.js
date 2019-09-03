$(document).ready(function () {
    var next = 0;
    $(document).on('click', '#add-background', (e) => {
        e.preventDefault();
        var addto = "#field" + next;
        next = next + 1;
        var newIn = '' +
            '<div id="field-background-' + next + '" name="field-background-' + next + '">' +
            '<div class="row">' +
            '<div class="col-11">' +
            '<div class="form-group">' +
            '<input id="backgrounds[' + next + ']" name="backgrounds[' + next + ']" type="text" placeholder="Masukan latar belakang" class="form-control input-md">' +
            '</div>' +
            '</div>' +
            '<div class="col">' +
            '<button id="remove-background-' + (next) + '" class="btn btn-danger remove-me mb-2" ><i class="fas fa-minus"></i></button>' +
            '</div>' +
            '</div>' +
            '</div>';
        var newInput = $(newIn);
        $('#field-background').append(newIn)
        $("#field-background-" + next).attr('data-source', $(addto).attr('data-source'));
        $("#count").val(next);

        $('.remove-me').click(function (e) {
            e.preventDefault();
            var fieldNum = this.id.replace("remove-background-", "");
            var fieldID = "#field-background-" + fieldNum;
            $(this).remove();
            $(fieldID).remove();
        });
    })
});