$(document).ready(function() {

    //var apiUrl = "http://localhost/bbc/api/";
    var apiUrl = "http://386softs.com/bbc/api/";
    //var apiUrl2 = "http://localhost/bbc/api/";

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return (false);
    }

    window.post_id = getQueryVariable("post_id"); //GETS POST ID FROM URL
    window.category_id = getQueryVariable("category_id"); //GETS CATEGORY ID FROM URL
    window.categoryKey = getQueryVariable("category_key"); //GETS CATEGORY KEY FROM URL

    console.log(post_id);

    window.postKey = "ptn_post_" + post_id;
    window.categoryName = "ptn_post_category" + category_id;

    if (localStorage.getItem(postKey) === null) {

        $.get(apiUrl + "getPost/" + category_id + "/" + post_id, function(data) {
            window.localStorage.setItem(postKey, JSON.stringify(data));
        }, "json");
    }


    if (localStorage.getItem(categoryName) === null) {
        $.get(apiUrl + "getCategory/" + category_id, function(data) {
            window.localStorage.setItem(categoryName, JSON.stringify(data));
        }, "json");
    }

    if (localStorage.getItem("ptn_categories") === null) {
        //console.log('empty');

        $.get(apiUrl + "categories/0", function(data) {
            window.localStorage.setItem("ptn_categories", JSON.stringify(data));
        }, "json");

    }


    //LOAD CATEGORIES
    var datum = JSON.parse(window.localStorage.getItem("ptn_categories"));
    $.each(datum, function(key, value) {
        $("#ptn_home").after("<li><a class='ico gallery' id='" + value.slug + "' href='javascript:;'>" + value.name + "</a></li>");
    });

    //LOAD POST
    var value = JSON.parse(window.localStorage.getItem(postKey));
    console.log(value);
    $("#ptn_post").append("<div class='swiper-slide' id='first_post'><h3 class='body_text'>" + value.post_title + "</h3><time class='body_text'>" + value.post_date + "</time><div><img src='" + value.image + "' ></div><article class='body_text'>" + value.post_content + "</article></div>");


    //LOAD PAGE CATEGORY
    var val = JSON.parse(window.localStorage.getItem(categoryName));
    document.getElementById('category_title').innerHTML = val.name;

    //LOAD CATEGORIES
    var datum = JSON.parse(window.localStorage.getItem("ptn_categories"));
    $.each(datum, function(key, value) {
        $("#ptn_home").after("<li><a class='ico gallery' id='" + value.slug + "' href='javascript:;'>" + value.name + "</a></li>");
    });

    //LOAD NEWS
    var otherCategoryPosts = JSON.parse(window.localStorage.getItem(categoryKey));
    $.each(otherCategoryPosts, function(key, value) {
        $("#first_post").after("<div class='swiper-slide'><h3 class='body_text'>" + value.post_title + "</h3><time class='body_text'>" + value.post_date + "</time><div><img src='" + value.image + "' ></div><article class='body_text'>" + value.post_content + "</article></div>");
    });

});