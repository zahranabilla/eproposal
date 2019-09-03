$(document).ready(function () {
    var next = 0;
    $("#add-rundown").click(function (e) {
        e.preventDefault();
        var addto = "#field" + next;
        next = next + 1;
        var newIn = '' +
            '<div id="field-rundown-' + next + '" name="field-rundown-' + next + '">' +
            '<div class="row">' +
            '<div class="col-3">' +
            '<div class="form-group">' +
            '<input id="rundowns-name[' + next + ']" name="rundownsname[' + next + ']" type="text" placeholder="Rencana Kegiatan" class="form-control input-md">' +
            '</div>' +
            '</div>' +
            '<div class="col-2">' +
            '<div class="form-group">' +
            '<div class="input-group date rundown-start" id="datetimepicker-rundown-start' + next + '" data-target-input="nearest">' +
            '<input type="text" class="form-control datetimepicker-input"' +
            'placeholder="Waktu Mulai" data-target="#datetimepicker-rundown-start' + next + '" name="rundownsstart[' + next + ']" />' +
            '<div class="input-group-append" data-target="#datetimepicker-rundown-start' + next + '" data-toggle="datetimepicker">' +
            '<div class="input-group-text"><i class="fa fa-clock-o"></i></div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="col-2">' +
            '<div class="form-group">' +
            '<div class="input-group date rundown-finish" id="datetimepicker-rundown-finish' + next + '" data-target-input="nearest">' +
            '<input type="text" class="form-control datetimepicker-input"' +
            'placeholder="Waktu Selesai" data-target="#datetimepicker-rundown-finish' + next + '" name="rundownsfinish[' + next + ']" />' +
            '<div class="input-group-append" data-target="#datetimepicker-rundown-finish' + next + '" data-toggle="datetimepicker">' +
            '<div class="input-group-text"><i class="fa fa-clock-o"></i></div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="col-2">' +
            '<div class="form-group">' +
            '<input id="rundowns-pic[' + next + ']" name="rundownspic[' + next + ']" type="text" placeholder="PiC" class="form-control input-md">' +
            '</div>' +
            '</div>' +
            '<div class="col-2">' +
            '<div class="form-group">' +
            '<input id="rundowns-notes[' + next + ']" name="rundownsnotes[' + next + ']" type="text" placeholder="Notes" class="form-control input-md">' +
            '</div>' +
            '</div>' +
            '<div class="col">' +
            '<button id="remove-rundown-' + (next) + '" class="btn btn-danger remove-rundown-me mb-2" ><i class="fas fa-minus"></i></button>' +
            '</div>' +
            '</div>' +
            '</div>';
        var newInput = $(newIn);
        $('#field-rundown').append(newIn)
        $("#field-rundown-" + next).attr('data-source', $(addto).attr('data-source'));
        $("#count").val(next);

        $('.remove-rundown-me').click(function (e) {
            e.preventDefault();
            var fieldNum = this.id.replace("remove-rundown-", "");
            var fieldID = "#field-rundown-" + fieldNum;
            $(this).remove();
            $(fieldID).remove();
        });
     
        $('.rundown-start').datetimepicker({
            locale: 'en',
            format: 'HH:mm'
        });

        $('.rundown-finish').datetimepicker({
            locale: 'en',
            format: 'HH:mm'
        });
    });
});