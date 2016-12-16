"use strict";

var key = 'dc6zaTOxFJmzC',
    limit=6, 
    tag=["funny", "happy", "cat", "dog", "pizza"];
 
var getJSON = () => {
    $.ajax({
        url: 'http://api.giphy.com/v1/gifs/search?q='+tag[0]+'&api_key='+key+'&limit='+limit,
        dataType: 'json',
        type: 'GET',
        success:function(response) { 

                if(response.meta.status !== 200) {
                    $("#error").text(response.meta.msg + " " + response.meta.status);
                    $("#error").css("display","block");
                } else $("#error").css("display","none");
                 console.log(response);
                 var template = Handlebars.compile( $('#template').html()  );
                 $('.updates').append( template(response)  );
             },
             error:function(err) {
                $("#error").text(err.statusText + " " + err.status);
                $("#error").css("display","block");
                console.log(err); 
             }
    });
}

var changeValueTag = function() {
    tag.push(tag.shift());
}

$(document).ready(function () {
    setInterval(function(){
  getJSON();
  changeValueTag();}, 3000);
});