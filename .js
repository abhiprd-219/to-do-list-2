

$(function() {
    $("#add").on("click", function() {
        var val = $("input").val();
        if(val !== '') {
            var elem = $("<li></li>").text(val);
            $(elem).append("<button class='remover'>   X</button>");
            $("#mylist").append(elem);
            $("input").val("");
            $(".remover").on("click", function() {
                $(this).parent().remove();
            });
        }
    });
});

function ask(){
     $(".loader").hide()
     $(".body").show()
}
