$(document).ready(function() {

    // AJAX GET
    $('.get-more').click(function(){

        $.ajax({
//            type: "GET",
//            url: "/ajax/more/",
//            success: function(data) {
//                for(i = 0; i < data.length; i++){
//                    $('ul').append('<li>'+data[i]+'</li>');
//                }
//            }
            type: "GET",
            url: "/eis/data/SalesPvsrCym/",
            dataType: "JSON",
            success: function(data) {
                //alert("a");
                //var data = JSON.parse(data);
                //var data = JSON.stringify(data);
                //alert("b");

                $.each(data, function(i, item) {
                    $("#result").append(i + "번 " + item.yymm + " " + item.planamt + " " + item.rsltamt + " " + "<br>");
                });
            },
            error: function() {
                alert("Error is occured!");
            },
            complete: function() {
                //alert("Completed!");
            }
        });

    });


    // AJAX POST
    $('.add-todo').click(function(){
      console.log('am i called');

        $.ajax({
            type: "POST",
            url: "/ajax/add/",
            dataType: "json",
            data: { "item": $(".todo-item").val() },
            success: function(data) {
                alert(data.message);
            }
        });

    });


    // CSRF code (using jQuery)
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');

    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });

});
