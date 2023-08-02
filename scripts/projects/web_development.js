import { section_expand } from "../utils.js";

var fig1_caption = "Fig #1: <i>Watchlist Web Application Logo</i>";
var introduction_text1 = "This project intends to help its users keep track of watchable content of their interest by enabling them to create a personal WatchList; and solve the problem of choosing what content to watch by attempting to create a recommendation system that delivers suggestions based on multiple parameter inputs by the user. In doing so, this project provides its users the affordance of an interactive web interface which is supported by an efficient backend & database system.";
var introduction_text2 = "This project is intended to help its user keep track of movies or series, with an interactive WatchList, for content that they might be interested in watching later; and recommend the content items to the user on demand. This project is aimed at helping the user to choose what content to watch when they are in a state of indecisiveness.";
var introduction_text3 = "I have at times faced this problem of being indecisive when it comes to choosing content to watch in my free time. I have previously tried to solve this issue for myself and have written program in python to help me with the same. Although the attempted python solution works for now it has several shortcomings such as, unavailability of a database to store the user data and serve the application; and the display & interaction limitations of the command line interface of the program.";
var introduction_text4 = "Since this is an issue in which I have already invested some time previously, I was interested in making a database backed solution for this problem. This project has presented me with an opportunity to formulate an elegant web based solution with an interactive interface which is supported with an efficient backend database system.";

var dataset_text = "The dataset is user specific and consists of details & metadata of the movie, series or any other content types that the user wants to put on their WatchList. The whole dataset will be created by the users themselves by adding data to their WatchList through the web application, without requiring the application to have a default set of dataset to be stored. This will grant the users much flexibility to store the data as they wish. Some attributes that the dataset has are content type, content name, users interest scale, content genres, current status etc. Some automatically added attributes to the user input data are content id, date added, time added, date removed, time removed etc.";

var fig2_caption = "Fig #2: <i>Entity Relationship Diagram of the SQL Database</i>";
var database_design_text = "The database designed for this project is a SQL based relational database as shown in the ERD above. The database is normalized to the third normal form. The many to many relations in the tables are handled using join/junction tables as shown in the ERD.";

var fig3_caption = "Fig #3: <i>Screenshot of the Login Page</i>";
var web_interface_design_text1 = "The login page is also the landing page of the web application. Here users can simply login to their previously created account or click on the signup button to create an account on the signup page.";
var fig4_caption = "Fig #4: <i>Screenshot of the Sign Up Page</i>";
var web_interface_design_text2 = "Users can create new user accounts for the WatchList web application on the sign up page for personal use.";
var fig5_6_caption = "Fig #5 & #6 (Scroll): <i>Screenshot of an Example User Homepage Interface</i>";
var web_interface_design_text3 = "The Homepage is where the user can add new content to the users Watchlist, view the created WatchList and also interact with the content of the created WatchList to see details or modify status of individual content items."; 
var fig7_8_caption = "Fig #7 & #8 (Scroll): <i>Screenshot of an Example User Recommendation Page Interface</i>";
var web_interface_design_text4 = "The recommendation page has three recommendation panels. The first two panels show the random first & random three choices selected from the list respectively. The third recommendation panel is a poll function which asks for a numerical user input for the number of total votes. Then distributes these votes in the users watchlist items and displays the results in descending order. The user can use this poll function any number of times during a single session."; 
var fig9_11_caption = "Fig #9, #10 & #11 (Scroll): <i>Screenshot of an Example User Account Page Interface</i>";
var web_interface_design_text5 = "The account page displays the user information and also allows the users to logout from their account. Further, the account page also has two other lists which contain items that are watched and items that are removed from the watchlist. The user can also interact with the items in these lists to change their status to either put them back to the watchlist, remove them or delete them permanently from their account.";

var backend_development_text1 = "The backend development for this web application is done using PHP and the database is interacted with SQL queries used within PHP. The user inputs throughout the application are collected using forms and are passed for backend processing in php for further actions. While the full scope of the backend system and code is available on the github repository a few key backend operations are described in the following sections."; 
var fig12_13_caption = "Fig #12 & #13 (Scroll): <i>Screenshot showing example of password handling for the application</i>";
var backend_development_text2 = "The user passwords are stored after hashing them using the password_hash function of php at signup and verified using password_verify function of php at login."; 
var fig14_15_caption = "Fig #14 & #15 (Scroll): <i>Screenshots showing sanitizeString function & example of string sanitization instance</i>";
var backend_development_text3 = "The user inputs are sanitized at every instance throughout the web application using the sanitizeString function shown above to prevent any malicious exploits like php injection attacks etc.";
var fig16_17_caption = "Fig #16 & #17 (Scroll): <i>Screenshots showing user session initialization & sessions destruction</i>";
var backend_development_text4 = "The user sessions are handled using the $_SESSION array in php and the session is initialized once the user successfully logins at the login page. Further, the session is destroyed once the user successfully logs out at the account page.";
var fig18_20_caption = "Fig #18, #19 & #20 (Scroll): <i>Screenshots showing pdo object creation & example instances of using it to execute SQL queries</i>";
var backend_development_text5 = "The SQL database is interacted by creating the pdo object in php and the same pdo object is used to pass & execute SQL queries and also to retrieve the outpost from the executed SQL queries. All the SQL queries used in this web application are passed via this pdo object created in php.";

function main() {

    section_expand();

    $("#fig1-caption").html(fig1_caption);

    $("#introduction-text1").html(introduction_text1);

    $("#introduction-text2").html(introduction_text2);

    $("#introduction-text3").html(introduction_text3);

    $("#introduction-text4").html(introduction_text4);

    $("#dataset-text").html(dataset_text);

    $("#fig2-caption").html(fig2_caption);

    $("#database-design-text").html(database_design_text);

    $("#fig3-caption").html(fig3_caption);

    $("#web-interface-design-text1").html(web_interface_design_text1);

    $("#fig4-caption").html(fig4_caption);

    $("#web-interface-design-text2").html(web_interface_design_text2);

    $("#fig5-6-caption").html(fig5_6_caption);

    $("#web-interface-design-text3").html(web_interface_design_text3);

    $("#fig7-8-caption").html(fig7_8_caption);

    $("#web-interface-design-text4").html(web_interface_design_text4);

    $("#fig9-11-caption").html(fig9_11_caption);

    $("#web-interface-design-text5").html(web_interface_design_text5);

    $("#backend-development-text1").html(backend_development_text1);

    $("#fig12-13-caption").html(fig12_13_caption);

    $("#backend-development-text2").html(backend_development_text2);

    $("#fig14-15-caption").html(fig14_15_caption);

    $("#backend-development-text3").html(backend_development_text3);

    $("#fig16-17-caption").html(fig16_17_caption);

    $("#backend-development-text4").html(backend_development_text4);

    $("#fig18-20-caption").html(fig18_20_caption);

    $("#backend-development-text5").html(backend_development_text5);

}

main();