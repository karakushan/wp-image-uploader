// upload images


(function ($) {
    $(document).on('change', '.fileInput', function (event) {
        var file_data = event.target.files[0];
        var tempImage = URL.createObjectURL(file_data);
        var input = $(this);
        // загружаем фон
        $(input.data("target")).css("background-image", "url(" + tempImage + ")");

        if (window.FormData) {
            formdata = new FormData();
        }
        formdata.append('file', file_data);
        formdata.append('action', 'wpui_upload');
        $.ajax({
            url: wpiu.ajaxurl,
            type: 'POST',
            data: formdata,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (response) {
                input.prev().val(response.url).change();
            }
        });


    });
})(jQuery);