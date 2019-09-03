$(document).ready(() => {
    /*
    Load proposal data using ajax
    */
    function loadProposal() {
        let id = $("#proposal-id").text()
        addSkeleton("#proposal-name")
        addSkeleton("#proposal-theme")
        addSkeleton("#proposal-date")
        addSkeleton("#proposal-place")
        addSkeleton("#proposal-forms")

        $.ajax({
            url: "/proposal/ajax-get-data",
            method: "GET",
            data: { id: id }
        }).done(result => {
            showResult("#proposal-name", result.name)
            showResult("#proposal-theme", result.theme)
            showResult("#proposal-date", result.date)
            showResult("#proposal-place", result.place)
            showResult("#proposal-forms", result.forms)
        })
    }

    /*
    Add skeleton loading class to element
    @params STRING selector
    */
    function addSkeleton(selector) {
        $(selector).addClass('skeleton')
    }

    /*
    Remove skeletion loading class from element
    @params STRING selector
    */
    function removeSkeleton(selector) {
        $(selector).removeClass('skeleton')
    }

    /*
    Show / Print result to div element
    Used by loadProposal()
    @params STRING selector
    @params STRING resultValue
    */
    function showResult(selector, resultValue) {
        removeSkeleton(selector)
        $(selector).text(resultValue)
    }

    /*
    Append list result to <ol> element
    Used by loadList()
    @params STRING selector
    @params STRING resultValue
    @params STRING type (participant and committee has unique position value)
    */
    function showList(selector, resultsValue, type) {
        removeSkeleton(selector)
        if (type == 'participant') {
            $.each(resultsValue, (index, value) => {
                $(selector).append('<li>' + value.name + ': <b>' + value.number + '</b> Orang</li>')
            })
        } else if (type == 'committee') {
            $.each(resultsValue, (index, value) => {
                $(selector).append('<li>' + value.position + ': <b>' + value.name + '</b></li>')
            })
        } else if (type == 'revision') {
            $.each(resultsValue, (index, value) => {
                // Create Edit Button for every revision
                let i = '<i class="fa fa-pencil"></i>'
                let a = '<a id="revision-' + index++ + '" class="revision-item">' + i + '</a>'
                let editButton = '<span class="badge badge-warning badge-pill">' + a + '</span>'

                i = '<i class="fa fa-trash"></i>'
                a = '<a id="delete-revision-' + index++ + '" class="delete-revision-item">' + i + '</a>'
                let deleteButton = '<span class="badge badge-danger badge-pill">' + a + '</span>'

                let content = value.name + ' ' + editButton + ' ' + deleteButton
                let li = '<li>' + content + '</li>'

                $(selector).append(li)
            })
        } else if (type == 'orgRevision') {
            $.each(resultsValue, (index, value) => {

                let li = '<li>' + value.name + '</li>'

                $(selector).append(li)
            })
        } else {
            $.each(resultsValue, (index, value) => {
                $(selector).append('<li>' + value.name + '</li>')
            })
        }
    }

    /*
    Append row result to <tbody> element
    Used by loadRows()
    @params STRING selector
    @params STRING resultValue
    @params STRING type (schedule, rundown, budget, income)
    */
    function showRow(selector, resultsValue, type) {
        removeSkeleton(selector)
        if (type == 'schedule') {
            showScheduleRow(selector, resultsValue)
        } else if (type == 'rundown') {
            showRundownRow(selector, resultsValue)
        } else if (type == 'budget') {
            showBudgetRow(selector, resultsValue)
        } else {
            showIncomeRow(selector, resultsValue)
        }
    }

    /*
    Append schedule row result to <tbody> element
    Used by loadRows()
    @params STRING selector
    @params STRING resultValue
    */
    function showScheduleRow(selector, resultsValue) {
        $.each(resultsValue, (index, value) => {
            let row = '<tr>' +
                '<td width="10%">' + ++index + '</td>' +
                '<td>' + value.name + '</td>' +
                '<td width="20%">' + value.date + '</td>' +
                '<td width="20%">' + value.pic + '</td>' +
                '</tr>';

            $(selector).append(row)
        })
    }

    /*
    Append rundown row result to <tbody> element
    Used by loadRows()
    @params STRING selector
    @params STRING resultValue
    */
    function showRundownRow(selector, resultsValue) {
        $.each(resultsValue, (index, value) => {
            let row = '<tr>' +
                '<td width="10%">' + ++index + '</td>' +
                '<td>' + value.start + ' - ' + value.finish + '</td>' +
                '<td width="20%">' + value.name + '</td>' +
                '<td width="20%">' + value.pic + '</td>' +
                '<td width="20%">' + value.notes + '</td>' +
                '</tr>';

            $(selector).append(row)
        })
    }

    /*
    Append income row result to <tbody> element
    Used by loadRows()
    @params STRING selector
    @params STRING resultValue
    */
    function showIncomeRow(selector, resultsValue) {
        $.each(resultsValue, (index, value) => {
            let total = value.quantity * value.price

            let row = '<tr>' +
                '<td width="10%">' + ++index + '</td>' +
                '<td>' + value.name + '</td>' +
                '<td width="20%">' + value.quantity + '</td>' +
                '<td width="20%" class="money">' + value.amount + '</td>' +
                '<td width="20%" class="money">' + total + '</td>' +
                '</tr>';

            $(selector).append(row)
        })

        $('.money').simpleMoneyFormat()
    }

    /*
    Append budget row result to <tbody> element
    Used by loadRows()
    @params STRING selector
    @params STRING resultValue
    */
    function showBudgetRow(selector, resultsValue) {
        $.each(resultsValue, (index, value) => {
            let total = value.quantity * value.price

            let row = '<tr>' +
                '<td width="10%">' + ++index + '</td>' +
                '<td>' + value.division.name + '</td>' +
                '<td>' + value.name + '</td>' +
                '<td width="20%">' + value.quantity + '</td>' +
                '<td width="20%" class="money">' + value.price + '</td>' +
                '<td width="20%" class="money">' + total + '</td>' +
                '</tr>';

            $(selector).append(row)
        })

        $('.money').simpleMoneyFormat()
    }

    /*
    Get Proposal Childs data (such as: backgrounds) using ajax
    and append it to List
    @params STRING selector
    @params STRING url
    @params STRING type (default="")
    */
    function loadList(selector, url, type = "") {
        let id = $("#proposal-id").text()
        addSkeleton(selector)

        $.ajax({
            url: url,
            method: "GET",
            data: { proposalId: id }
        }).done(result => {
            showList(selector, result, type)
        })
    }

    /*
    Get Proposal Childs data (such as: schedules) using ajax
    and append it to Table
    @params STRING selector
    @params STRING url
    @params STRING type (default="")
    */
    function loadRows(selector, url, type = "") {
        let id = $("#proposal-id").text()
        addSkeleton(selector)

        $.ajax({
            url: url,
            method: "GET",
            data: { proposalId: id }
        }).done(result => {
            showRow(selector, result, type)
        })
    }

    // Get Proposal Data
    loadProposal()

    // Get Child Data
    loadList("#proposal-backgrounds", "/proposal-background/ajax-get-data")
    loadList("#proposal-purposes", "/proposal-purpose/ajax-get-data")
    loadList("#proposal-participants", "/proposal-participant/ajax-get-data", 'participant')
    loadList("#proposal-committees", "/proposal-committee/ajax-get-data", 'committee')
    loadList("#revisions", "/proposal-revision/ajax-get-data", 'revision')
    loadList("#org-revisions", "/proposal-revision/ajax-get-data", 'orgRevision')
    loadRows("#proposal-schedules", "/proposal-schedule/ajax-get-data", 'schedule')
    loadRows("#proposal-rundowns", "/proposal-rundown/ajax-get-data", 'rundown')
    loadRows("#proposal-budgets", "/proposal-budget/ajax-get-data", 'budget')
    loadRows("#proposal-incomes", "/proposal-income/ajax-get-data", 'income')

    // Propose the Proposal
    $('#btn-propose').click(() => {
        let confirm = window.confirm("Ajukan sekarang?")

        if (confirm) {
            let id = $("#proposal-id").text()

            $("div#divLoading").addClass('show');

            $.ajax({
                url: "/proposal/propose",
                method: "POST",
                data: { id: id }
            }).done(result => {
                $("div#divLoading").removeClass('show');
                window.location.href = "/";
            })
        }
    })

    $(document).on('click', '#add-background', (e) => {
        e.preventDefault();
        let next = $('.field-background').length
        var addto = "#field" + next;
        var newIn = '' +
            '<div id="field-background-' + next + '" class="field-background">' +
            '<div class="row">' +
            '<div class="col-10">' +
            '<div class="form-group">' +
            '<input id="backgrounds[' + next + ']" name="backgrounds[' + next + ']" type="text" placeholder="Masukan latar belakang" class="form-control input-md">' +
            '</div>' +
            '</div>' +
            '<div class="col">' +
            '<button id="remove-background-' + (next) + '" class="btn btn-danger remove-me mb-2" ><i class="fas fa-minus"></i></button>' +
            '</div>' +
            '</div>' +
            '</div>';
        $('#field-background').append(newIn)
        $("#field-background-" + next).attr('data-source', $(addto).attr('data-source'));
        $("#count").val(next);
    })


    $(document).on('click', '.btn-edit', (event) => {
        var target = $(event.currentTarget)
        let title = target.attr('id').replace("btn-edit-", "")

        if (title == 'proposal') {
            $("div#divLoading").addClass('show')
            proposalModal(title)
            $('#btn-modal-edit').attr("data-title", title)
        } else if (title == 'backgrounds') {
            backgroundsModal()
            $('#btn-modal-edit').attr("data-title", title)
        } else if (title == 'purposes') {
            purposesModal()
            $('#btn-modal-edit').attr("data-title", title)
        }
    })

    function purposesModal() {
        let id = $('#proposal-id').text()
        $.ajax({
            url: "/proposal-purpose/ajax-get-data",
            method: "GET",
            data: { proposalId: id }
        }).done(result => {
            $("div#divLoading").removeClass('show');
            $('#edit-modal').modal('show')
            $('#edit-modal-label').text('Edit tujuan')

            let input = ''

            let inputId = '<input type="hidden" id="proposal-id" name="proposalId" value="' + id + '">'
            $('#body-edit').html('<form id="revise-purpose" method="POST" action="/proposal-purpose/revise">' +
                '<div id="field-purpose">' + inputId + '</div>' +
                '</form>'
            )

            $.each(result, (index, purpose) => {
                let button = ''
                let length = result.length - 1
                if (index == 0) {
                    button = '<button id="add-purpose" name="add-purpose" class="btn btn-primary"><i class="fas fa-plus"></i></button>'
                } else {
                    button = '<button id="remove-purpose-' + (index) + '" type="button"' +
                        'class="btn btn-danger remove-me mb-2" ><i class="fas fa-minus"></i></button>'
                }

                let newInput = '<div id="field-purpose-' + index + '" class="field-purpose">' +
                    '<div class="row">' +
                    '<div class="col-10">' +
                    '<div class="form-group">' +
                    '<input id="purposes[' + index + ']" name="purposes[' + index + ']" value="' + purpose.name + '" type="text" placeholder="Masukan latar belakang"' +
                    'class="form-control">' +
                    '</div>' +
                    '</div>' +
                    '<div class="col">' +
                    '<div class="form-group">' +
                    button +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                input = input + newInput

            })
            $('#field-purpose').append(input)
        })
    }

    function backgroundsModal() {
        let id = $('#proposal-id').text()
        $.ajax({
            url: "/proposal-background/ajax-get-data",
            method: "GET",
            data: { proposalId: id }
        }).done(result => {
            $("div#divLoading").removeClass('show');
            $('#edit-modal').modal('show')
            $('#edit-modal-label').text('Edit latar belakang')

            let input = ''

            let inputId = '<input type="hidden" id="proposal-id" name="proposalId" value="' + id + '">'
            $('#body-edit').html('<form id="revise-background" method="POST" action="/proposal-background/revise">' +
                '<div id="field-background">' + inputId + '</div>' +
                '</form>'
            )

            $.each(result, (index, background) => {
                let button = ''
                let length = result.length - 1
                if (index == 0) {
                    button = '<button id="add-background" name="add-background" class="btn btn-primary"><i class="fas fa-plus"></i></button>'
                } else {
                    button = '<button id="remove-background-' + (index) + '" type="button"' +
                        'class="btn btn-danger remove-me mb-2" ><i class="fas fa-minus"></i></button>'
                }

                let newInput = '<div id="field-background-' + index + '" class="field-background">' +
                    '<div class="row">' +
                    '<div class="col-10">' +
                    '<div class="form-group">' +
                    '<input id="backgrounds[' + index + ']" name="backgrounds[' + index + ']" value="' + background.name + '" type="text" placeholder="Masukan latar belakang"' +
                    'class="form-control">' +
                    '</div>' +
                    '</div>' +
                    '<div class="col">' +
                    '<div class="form-group">' +
                    button +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                input = input + newInput

            })
            $('#field-background').append(input)
        })
    }

    function proposalModal(title) {
        let id = $('#proposal-id').text()
        $.ajax({
            url: "/proposal/ajax-get-data",
            method: "GET",
            data: { id: id }
        }).done(result => {
            $("div#divLoading").removeClass('show');
            $('#edit-modal').modal('show')
            $('#edit-modal-label').text('Edit ' + title)

            let name = '<div class="form-group">' +
                '<label for="name">Nama Kegiatan</label>' +
                '<input type="text" class="form-control" id="name" placeholder="Masukan nama kegiatan" name="name" value="' + result.name + '">' +
                '</div>'
            let theme = '<div class="form-group">' +
                '<label for="theme">Tema</label>' +
                '<input type="text" class="form-control" id="theme" placeholder="Masukan tema kegiatan" name="theme"' +
                'value="' + result.theme + '">' +
                '</div>'
            let date = '<div class="form-group">' +
                '<label for="theme">Waktu</label>' +
                '<div class="input-group date" id="datetimepicker-event" data-target-input="nearest">' +
                '<input type="text" class="form-control datetimepicker-input" placeholder="Masukan waktu kegiatan"' +
                'data-target="#datetimepicker-event" name="date" value="' + result.date + '"/>' +
                '<div class="input-group-append" data-target="#datetimepicker-event" data-toggle="datetimepicker">' +
                '<div class="input-group-text"><i class="fa fa-calendar"></i></div>' +
                '</div>' +
                '</div>' +
                '</div>'
            let place = '<div class="form-group">' +
                '<label for="place">Tempat</label>' +
                '<input type="text" class="form-control" id="place" placeholder="Masukan tempat kegiatan" name="place"' +
                'value="' + result.place + '">' +
                '</div>'
            let forms = '<div class="form-group">' +
                '<label for="forms">Bentuk Kegiatan</label>' +
                '<input type="text" class="form-control" id="place" placeholder="Masukan bentuk kegiatan" name="forms"' +
                'value="' + result.forms + '">' +
                '</div>'
            $('#body-edit').html(name + theme + date + place + forms)
        })
    }

    $(document).on('click', '.remove-me', (event) => {
        event.preventDefault();
        var target = $(event.currentTarget)
        var fieldNum = target.attr('id').replace("remove-background-", "");
        var fieldID = "#field-background-" + fieldNum;
        $(this).remove();
        $(fieldID).remove();
    })
})
