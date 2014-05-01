$(document).ready(function() {
    //console.log('kore');
    //var apiUrl = "http://localhost/bbc/api/";
    var apiUrl = "http://386softs.com/bbc/api/";
    //var apiUrl2 = "http://localhost/bbc/api/";

    if (localStorage.getItem("ptn_categories") === null) {
        //console.log('empty');

        $.get(apiUrl + "categories/0", function(data) {
            window.localStorage.setItem("ptn_categories", JSON.stringify(data));
        }, "json");

        //NEWS CATEGORY
        $.get(apiUrl + "posts/2", function(data) {
            window.localStorage.setItem("ptn_news", JSON.stringify(data));
        }, "json");

        //SPECIA REPORTS CATEGORY
        $.get(apiUrl + "posts/17", function(data) {
            window.localStorage.setItem("ptn_special_reports", JSON.stringify(data));
        }, "json");


        //BUSINESS CATEGORY
        $.get(apiUrl + "posts/30", function(data) {
            window.localStorage.setItem("ptn_business", JSON.stringify(data));
        }, "json");


        //ENTERTAINMENT CATEGORY
        $.get(apiUrl + "posts/24", function(data) {
            window.localStorage.setItem("ptn_entertainment", JSON.stringify(data));
        }, "json");


        //SPORTS CATEGORY
        $.get(apiUrl + "posts/1", function(data) {
            window.localStorage.setItem("ptn_sports", JSON.stringify(data));
        }, "json");
    } else {
        // console.log('not empty');
    }

    //LOAD CATEGORIES
    var datum = JSON.parse(window.localStorage.getItem("ptn_categories"));
    $.each(datum, function(key, value) {
        $("#ptn_home").after("<li><a class='ico gallery' id='" + value.slug + "' href='javascript:;'>" + value.name + "</a></li>");
    });

    //LOAD NEWS
    var ptnNews = JSON.parse(window.localStorage.getItem("ptn_news"));
    $.each(ptnNews, function(key, value) {
        $("#news_block").append("<a href='page-reader.html?post_id=" + value.ID + "&category_id=2&category_key=ptn_news' class='swiper-slide' style='padding-right: 5px;'><img src='" + value.image + "' style='width:120px !important; height: 120px !important;'><span>" + value.post_title + "</span></a>");
    });

    //LOAD SPECIAL REPORTS
    var ptnSpecialReport = JSON.parse(window.localStorage.getItem("ptn_special_reports"));
    $.each(ptnSpecialReport, function(key, value) {
        $("#special_report_block").append("<a href='page-reader.html?post_id=" + value.ID + "&category_id=17&category_key=ptn_special_reports' class='swiper-slide' style='padding-right: 5px;'><img src='" + value.image + "' style='width:120px !important; height: 120px !important;'><span>" + value.post_title + "</span></a>");
    });

    //LOAD BUSINESS
    var ptnBusiness = JSON.parse(window.localStorage.getItem("ptn_business"));
    $.each(ptnBusiness, function(key, value) {
        $("#business_block").append("<a href='page-reader.html?post_id=" + value.ID + "&category_id=30&category_key=ptn_business' class='swiper-slide' style='padding-right: 5px;'><img src='" + value.image + "' style='width:120px !important; height: 120px !important;'><span>" + value.post_title + "</span></a>");
    });


    //LOAD ENTERTAINMENT
    var ptnENTERTAINMENT = JSON.parse(window.localStorage.getItem("ptn_entertainment"));
    $.each(ptnENTERTAINMENT, function(key, value) {
        $("#entertainment_block").append("<a href='page-reader.html?post_id=" + value.ID + "&category_id=24&category_key=ptn_entertainment' class='swiper-slide' style='padding-right: 5px;'><img src='" + value.image + "' style='width:120px !important; height: 120px !important;'><span>" + value.post_title + "</span></a>");
    });


    //LOAD SPORTS
    var ptnSport = JSON.parse(window.localStorage.getItem("ptn_sports"));
    $.each(ptnSport, function(key, value) {
        $("#sport_block").append("<a href='page-reader.html?post_id=" + value.ID + "&category_id=1&category_key=ptn_sports' class='swiper-slide' style='padding-right: 5px;'><img src='" + value.image + "' style='width:120px !important; height: 120px !important;'><span>" + value.post_title + "</span></a>");
    });

});