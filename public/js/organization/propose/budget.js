$(document).ready(function () {
    var next = 0;
    $("#add-budget").click(function (e) {
        e.preventDefault();
        var addto = "#field" + next;
        next = next + 1;
        var newIn = '' +
            '<div id="field-budget-' + next + '" name="field-budget-' + next + '">' +
            '<div class="row">' +
            '<div class="col-5">' +
            '<div class="form-group">' +
            '<input id="budgets-name[' + next + ']" name="budgetsname[' + next + ']" type="text" placeholder="Keterangan" class="form-control input-md">' +
            '</div>' +
            '</div>' +
            '<div class="col-2">' +
            '<div class="form-group">' +
            '<input id="budgets-quantity[' + next + ']" name="budgetsquantity[' + next + ']" type="text" placeholder="Jumlah" class="form-control input-md">' +
            '</div>' +
            '</div>' +
            '<div class="col-2">' +
            '<div class="form-group">' +
            '<input id="budgets-price[' + next + ']" name="budgetsprice[' + next + ']" type="text" placeholder="Harga Satuan" class="form-control input-md">' +
            '</div>' +
            '</div>' +
            '<div class="col-2">' +
            '<div class="form-group" id="bp-'+ next +'">' +
            '</div>' +
            '</div>' +
            '<div class="col">' +
            '<button id="remove-budget-' + (next) + '" class="btn btn-danger remove-budget-me mb-2" ><i class="fas fa-minus"></i></button>' +
            '</div>' +
            '</div>' +
            '</div>';
        var newInput = $(newIn);
        $('#field-budget').append(newIn)
        $("#field-budget-" + next).attr('data-source', $(addto).attr('data-source'));
        $("#count").val(next);
        $("#budget-dropdown-0").clone().prop('name', 'budget-dropdown[' + next + ']').appendTo("#bp-" + next);

        $('.remove-budget-me').click(function (e) {
            e.preventDefault();
            var fieldNum = this.id.replace("remove-budget-", "");
            var fieldID = "#field-budget-" + fieldNum;
            $(this).remove();
            $(fieldID).remove();
        });
    });
});