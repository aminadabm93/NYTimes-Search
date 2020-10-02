var apiKey = "oNYUMi99QstVlfW0mNbzvbgYogNguMsA";

//save all info once submit is clicked
$("#search-btn").on("click",function(){
    var searchTerm = $("#search-term").val();
    var startYear = $("#start-year").val();
    var endYear = $("#end-year").val();
    var numRecords = parseInt($("#numRecords"));

    //use api and info to pull articles
    //use ajax
    //sample url

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + apiKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    });

});
