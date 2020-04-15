

// $('.search-button').click(function () {
//     alert("Button clicked!");
// })



var displayWikipediaData = function() {

    var $linksElement = $('#links');
    var searchString = $('#searchString').val();
    console.log(searchString);
    var wikipediaUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchString + "&format=json&callback=?";

    $.ajax({
        url: wikipediaUrl,
        dataType: "jsonp",
        jsonp: "callback"
        , success: function(res) {
            var linkLists = res[1];
            console.log(linkLists); 
            linkLists.forEach(function(item) {
                var url = 'https://en.wikipedia.org/wiki/' + item;
                $linksElement.append( '<li><a href="' + url  + '">' + item + '</a></li>' );
                return url
            });   

        }
 
         
    });
    return false;
};  

$('#form').submit(displayWikipediaData); 