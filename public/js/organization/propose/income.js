$(document).ready(function () {
    var next = 0;
    $("#add-income").click(function (e) {
        e.preventDefault();
        var addto = "#field" + next;
        next = next + 1;
        var newIn = '' +
            '<div id="field-income-' + next + '" name="field-income-' + next + '">' +
            '<div class="row">' +
            '<div class="col-5">' +
            '<div class="form-group">' +
            '<input id="incomes-name[' + next + ']" name="incomesname[' + next + ']" type="text" placeholder="Keterangan" class="form-control input-md">' +
            '</div>' +
            '</div>' +
            '<div class="col-2">' +
            '<div class="form-group">' +
            '<input id="incomes-quantity[' + next + ']" name="incomesquantity[' + next + ']" type="text" placeholder="Jumlah" class="form-control input-md">' +
            '</div>' +
            '</div>' +
            '<div class="col-2">' +
            '<div class="form-group">' +
            '<input id="incomes-amount[' + next + ']" name="incomesamount[' + next + ']" type="text" placeholder="Harga Satuan" class="form-control input-md">' +
            '</div>' +
            '</div>' +
            '<div class="col-2">' +
            '<div class="form-group">' +
            '</div>' +
            '</div>' +
            '<div class="col">' +
            '<button id="remove-income-' + (next) + '" class="btn btn-danger remove-income-me mb-2" ><i class="fas fa-minus"></i></button>' +
            '</div>' +
            '</div>' +
            '</div>';
        var newInput = $(newIn);
        $('#field-income').append(newIn)
        $("#field-income-" + next).attr('data-source', $(addto).attr('data-source'));
        $("#count").val(next);

        $('.remove-income-me').click(function (e) {
            e.preventDefault();
            var fieldNum = this.id.replace("remove-income-", "");
            var fieldID = "#field-income-" + fieldNum;
            $(this).remove();
            $(fieldID).remove();
        });
    });
});