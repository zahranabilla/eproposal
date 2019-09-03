$(document).ready(function () {
    var next = 0;
    $("#add-schedule").click(function (e) {
        e.preventDefault();
        var addto = "#field" + next;
        next = next + 1;
        var newIn = '' +
            '<div id="field-schedule-' + next + '" name="field-schedule-' + next + '">' +
            '<div class="row">' +
            '<div class="col-5">' +
            '<div class="form-group">' +
            '<input id="schedules-name[' + next + ']" name="schedulesname[' + next + ']" type="text" placeholder="Rencana Kegiatan" class="form-control input-md">' +
            '</div>' +
            '</div>' +
            '<div class="col-3">' +
            '<div class="form-group">' +
            '<div class="input-group date schedule-date" id="datetimepicker' + next + '" data-target-input="nearest">' +
            '<input type="text" class="form-control datetimepicker-input"' +
            'placeholder="Target Tanggal" data-target="#datetimepicker' + next + '" name="schedulesdate[' + next + ']" />' +
            '<div class="input-group-append" data-target="#datetimepicker' + next + '" data-toggle="datetimepicker">' +
            '<div class="input-group-text"><i class="fa fa-calendar"></i></div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="col-3">' +
            '<div class="form-group">' +
            '<input id="schedules-pic[' + next + ']" name="schedulespic[' + next + ']" type="text" placeholder="PiC" class="form-control input-md">' +
            '</div>' +
            '</div>' +
            '<div class="col">' +
            '<button id="remove-schedule-' + (next) + '" class="btn btn-danger remove-schedule-me mb-2" ><i class="fas fa-minus"></i></button>' +
            '</div>' +
            '</div>' +
            '</div>';
        var newInput = $(newIn);
        $('#field-schedule').append(newIn)
        $("#field-schedule-" + next).attr('data-source', $(addto).attr('data-source'));
        $("#count").val(next);

        $('.remove-schedule-me').click(function (e) {
            e.preventDefault();
            var fieldNum = this.id.replace("remove-schedule-", "");
            var fieldID = "#field-schedule-" + fieldNum;
            $(this).remove();
            $(fieldID).remove();
        });

        $('.schedule-date').datetimepicker({
            locale: 'en',
            format: 'YYYY-MM-DD'
        });
    });
});