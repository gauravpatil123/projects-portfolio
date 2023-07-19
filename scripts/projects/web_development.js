import { get_link_url } from "../utils.js";

var fig1_caption = "Fig #1: <i>Watchlist Web Application Logo</i>";
var introduction_text1 = "This project intends to help its users keep track of watchable content of their interest by enabling them to create a personal WatchList; and solve the problem of choosing what content to watch by attempting to create a recommendation system that delivers suggestions based on multiple parameter inputs by the user. In doing so, this project provides its users the affordance of an interactive web interface which is supported by an efficient backend & database system.";
var introduction_text2 = "This project is intended to help its user keep track of movies or series, with an interactive WatchList, for content that they might be interested in watching later; and recommend the content items to the user on demand. This project is aimed at helping the user to choose what content to watch when they are in a state of indecisiveness.";
var introduction_text3 = "I have at times faced this problem of being indecisive when it comes to choosing content to watch in my free time. I have previously tried to solve this issue for myself and have written program in python to help me with the same. Although the attempted python solution works for now it has several shortcomings such as, unavailability of a database to store the user data and serve the application; and the display & interaction limitations of the command line interface of the program.";
var introduction_text4 = "Since this is an issue in which I have already invested some time previously, I was interested in making a database backed solution for this problem. This project has presented me with an opportunity to formulate an elegant web based solution with an interactive interface which is supported with an efficient backend database system.";

function main() {

    $("#fig1-caption").html(fig1_caption);

    $("#introduction-text1").html(introduction_text1);

    $("#introduction-text2").html(introduction_text2);

    $("#introduction-text3").html(introduction_text3);

    $("#introduction-text4").html(introduction_text4);

}

main();