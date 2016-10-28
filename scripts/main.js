"use strict";

jQuery(function($){
    let key = 'dc6zaTOxFJmzC',
    limit=6, 
    tag='funny';
 
let getInfo = () => {
    $.ajax({
        url: 'http://api.giphy.com/v1/gifs/search?q='+tag+'&api_key='+key+'&limit='+limit,
        dataType: 'json',
        type: 'GET',
        parameters: {
            'q':tag, 
            'api_key': key,
            'limit': limit
        },
        success: function(result){
            console.log(result);
            var template = Handlebars.compile( $('#template').html()  );
            $('.updates').empty().append( template(result)  );
        },
        error: function(result){
            console.log("error");
        }
    });
}
    $(document).ready(function () {
        getInfo();
        setInterval(getInfo, 60000);
    });;
});