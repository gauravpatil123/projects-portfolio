
var fig1_caption = "Fig #1: <i>Screenshot of the Redesigned Mid-Fidelity NYTM Desktop Homepage</i>";
var introduction_text = "The New York Transit Museum displays historical artifacts of the New York City Subway, bus & commuter rail systems in the greater New York City metropolitan region. This project attempts to improve the user experience of NYTM’s website based on insights from user interviews, market research and through the use of personas, user stories, revamped information architecture, wireframes & prototypes.";
var client_text = "New York Transit Museum";
var duration_text = "15 Weeks";
var team_text = "Nouran Sedaghat, Gaurav Patil, Julia Maloof";
var all_tools_text = "Miro, Google Workspace, Optimal Workshop, Sketch, Invision, Figma";
var my_role_text1 = "<b>Research & Analysis:</b> Screener forms, Questionnaires, Interview Protocol, Interviews, Affinity Mapping, Persona, Competitive Analysis, Card Sorting, Usability Testing, Tree Testing.";
var my_role_text2 = "<b>Design:</b> Information Architecture, Paper Sketches, Paper Prototypes, Medium-Fidelity Prototypes of “School Field Trip” pages.";

var fig2_caption = "Fig #2: <i>Project timeline showing various aspects of the project during its 15 weeks</i>";

var about_text1 = "Founded in 1976, the New York Transit Museum is dedicated to telling & preserving the stories of mass transportation. Keeping this goal in mind, the museum wants its visitors to have easy access to all its programs and offerings from their website. Hence they wanted designers to revise their sitemap & information architecture to achieve this goal.";
var fig3_4_caption = "Fig #3 & #4: <i>Screenshots of current NYTM webpages | Homepage & Tickets Page</i>";
var about_text2 = "Further, since the New York Transit Museum is a self-supporting division of the Metropolitan Transportation Authority, they also wanted designers to improve their ticket purchase process on the website and make it smooth & intuitive for their visitors.";
var about_text3 = "All these groups are potential visitors of the NYTM since the museum has educational, historic & informative offerings that have appeal for all these groups. Thus all these groups are essential for our research and are our target users."; 
var fig5_6_7_caption = "Fig #5, #6 & #7: <i>Icons Respectively Representing Educators, Students & Museum Enthusiasts</i>";
var about_text4 = "After the kick-off meeting with the client, we decided on the following goals for project:";
var about_text5 = "1. Make the process of purchasing tickets through their website easy & intuitive.";
var about_text6 = "2. Revise the Information architecture of the website to make its programs & offerings easily & intuitively accessible to their users.";

var data_collection_text1 = "<b>Sample Size:</b> 12 responses"; 
var fig8_9_caption = "Fig #8 & #9: <i>Screener Question Responses</i>";
var data_collection_text2 = "Since we wanted to base our research on frequent museum visitors who are more likely to use the museum website, we used the screener criteria from the above images to choose the candidates for user interviews."; 
var data_collection_text3 = "We conducted 6 moderated user interviews from the screened participants. These interviews were directed to find out their motivations & needs when they visit museums. The questions covered a range of topics including the frequency of visits, motivations, likes, dislikes, preferences & planning routines. The users were also asked for any additional feedback and insights they might have to offer.";
var data_collection_text4 = "After conducting the interviews we gathered all the information from our research notes and organized the gained insights on a Miro board. We color coded the notes according to the interview participants.";
var fig10_caption = "Fig #10: <i>Miro Board with Insights from the User Interviews | Color coded for participants</i>";
var data_collection_text5 = "Once we had all the insights, we started on the affinity mapping of these insights and grouped them into several categories. For grouping, we looked at recurring themes of insights to understand the motivations, behavior, habits & preferences of users."; 
var data_collection_text6 = "Once the groups were formed we started to see if these groups have any connections within themselves and connected these groups. We formed 20 major insight categories, many of which were divided into subcategories for more narrow insights.";
var fig11_caption = "Fig #11: <i>Miro Board with showing the Affinity Mapping | Board 1 of 2</i>";
var fig12_caption = "Fig #12: <i>Miro Board with showing the Affinity Mapping | Board 2 of 2</i>";
var data_collection_text7 = "1. Visitors like to plan their visits & book tickets in advance.";
var data_collection_text8 = "2. Visitors use online resources including the museums website for planning visits.";
var data_collection_text9 = "3. People need to know the information about costs, travel directions, locations, food options & exhibits.";
var data_collection_text10 = "4. People usually prefer to use the mobile website first before going on the desktop version.";
var data_collection_text11 = "5. Visitors dislike crowds or guided tours in the museum.";

var persona_text1 = "Based on the affinity mapping, I came up with a representative persona to have a better idea of our target visitors as well as our design goals.";
var persona_text2 = "<u>The Museum Enthusiast</u>: He usually visits the museum website to plan his visit & purchases tickets online. He values clear information about location, travel, ticket prices & museum policies above other things.";
var fig13_caption =  "Fig #13: <i>User Persona created for the NYTM | Museum Enthusiast - Sid Shaw</i>";

function main() {

    $("#fig1-caption").html(fig1_caption);

    $("#introduction-text").html(introduction_text);

    $("#client-text").html(client_text);

    $("#duration-text").html(duration_text);

    $("#team-text").html(team_text);

    $("#all-tools-text").html(all_tools_text);

    $("#my-role-text1").html(my_role_text1);

    $("#my-role-text2").html(my_role_text2);

    $("#fig2-caption").html(fig2_caption);

    $("#about-text1").html(about_text1);

    $("#fig3-4-caption").html(fig3_4_caption);

    $("#about-text2").html(about_text2);

    $("#about-text3").html(about_text3);

    $("#fig5-6-7-caption").html(fig5_6_7_caption);

    $("#about-text4").html(about_text4);

    $("#about-text5").html(about_text5);

    $("#about-text6").html(about_text6);

    $("#data-collection-text1").html(data_collection_text1);

    $("#fig8-9-caption").html(fig8_9_caption);

    $("#data-collection-text2").html(data_collection_text2);

    $("#data-collection-text3").html(data_collection_text3);

    $("#data-collection-text4").html(data_collection_text4);

    $("#fig10-caption").html(fig10_caption);

    $("#data-collection-text5").html(data_collection_text5);

    $("#data-collection-text6").html(data_collection_text6);

    $("#fig11-caption").html(fig11_caption);

    $("#fig12-caption").html(fig12_caption);

    $("#data-collection-text7").html(data_collection_text7);

    $("#data-collection-text8").html(data_collection_text8);

    $("#data-collection-text9").html(data_collection_text9);

    $("#data-collection-text10").html(data_collection_text10);

    $("#data-collection-text11").html(data_collection_text11);

    $("#persona-text1").html(persona_text1);

    $("#persona-text2").html(persona_text2);

    $("#fig13-caption").html(fig13_caption);

}

main();