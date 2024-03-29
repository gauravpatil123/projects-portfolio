import { get_link_url, section_expand } from "../utils.js";

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
var about_text5 = "1. Make the process of purchasing tickets through their website easy & intuitive.<br>2. Revise the Information architecture of the website to make its programs & offerings easily & intuitively accessible to their users.";

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
var data_collection_text7 = "1. Visitors like to plan their visits & book tickets in advance.<br>2. Visitors use online resources including the museums website for planning visits.<br> 3. People need to know the information about costs, travel directions, locations, food options & exhibits.<br>4. People usually prefer to use the mobile website first before going on the desktop version.<br> 5. Visitors dislike crowds or guided tours in the museum.";

var persona_text1 = "Based on the affinity mapping, I came up with a representative persona to have a better idea of our target visitors as well as our design goals.";
var persona_text2 = "<u>The Museum Enthusiast</u>: He usually visits the museum website to plan his visit & purchases tickets online. He values clear information about location, travel, ticket prices & museum policies above other things.";
var fig13_caption = "Fig #13: <i>User Persona created for the NYTM | Museum Enthusiast - Sid Shaw</i>";

var fig14_caption = "Fig #14: <i>Logos of the 9 chosen competitors for analysis</i>";
var market_research_text1 = "1. To establish a benchmark for the redesign of the NYTM website by looking at the websites of its direct and indirect competitors.<br>2. To analyze the pros and cons of the competitor websites along a range of qualitative dimensions.";
var market_research_text2 = "1. Conducted a comprehensive review of 9 competitor websites (8 museums & 1 botanical garden) across 6 dimensions which include homepage aesthetics, homepage content, planning your visit, navigation & search, ticketing & mobile experience.<br>2. After the review we scored the websites along the mentioned dimensions on a scale of 1 to 3, 1 being lowest & 3 being the highest.";
var fig15_caption = "Fig #15: <i>Chart showing the scores of the competitor websites along the dimensions</i>";
var market_research_text3 = "1. Clean, minimalistic & visually appealing homepages using current pictures or videos from the museum.<br>2. Info about opening hours, tickets, current exhibits & need to know instructions on the homepage.<br>3. Clear, concise & intuitive “Plan your visits” page for smooth user experience.<br>4. Intuitive navigation menu with clear hierarchy & a working search function.<br>5. Ticketing access from the homepage with clear policies and pricing.<br>6. Calendar for tickets reservations with times and dates grayed out when full."; 
var market_research_text4 = "1. Too many tabs, unclear location information & misplaced information on the “Plan your Visits” page.<br>2. Multiple buttons on internal pages for reserving tickets can become confusing.<br>3. Too much unnecessary information on the mobile website clutters the webpage.";

var info_arch_text1 = "We created 55 cards to represent the content on the NYTM website and created an open card sort study using Optimal Workshop. We conducted the card sort study with 6 participants - 3 moderated & 3 unmoderated.";
var fig16_caption = "Fig #16: <i>Similarity Matrix from Optimal Workshop showing the created card groups & ungrouped cards</i>";
var info_arch_text2 = "After all the card sort studies were conducted we analyzed the results using a similarity matrix generated by Optimal Workshop.<br>1. We grouped these cards into 8 categories based on their relative similarity on the generated similarity matrix.<br>2. These cards were further divided into subgroups using the similarity matrix.<br>3. Groups and subgroups were labeled to create navigation menu buttons.<br>4. After the grouping was done, the remaining ungrouped cards were placed based on our intuition or their proximity to other similar cards on the similarity matrix. These card groups were tested later during the tree test.";
var info_arch_text3 = "Once we had finished grouping all the cards, we created the first draft of the new Information Architecture for the website. Further, we created 9 tasks to test the pages in this new Information Architecture. We used Optimal Workshop to create the Tree Test, and conducted 8 unmoderated and 3 moderated tests.";
var fig17_caption = "Fig #17: <i>First draft of the new Information Architecture showing the pages selected for testing in Tree Tests</i>"; 
var info_arch_text4 = "We analyzed the results from the Tree Tests and gained the following insights:<br>1. The “General Memberships”, “Tickets” & “Press Contact” pages were successfully navigated and easily found by the users.<br>2. The donations task was most unsuccessful with 9 of 11 participants failing to navigate to the page. Moreover, participants were confused and went back and forth through a lot of pages before selecting their option, this behavior suggested creating an independent category for donations.<br>3. Participants failed to locate at-home “Activities for Kids” page, participants also failed to distinguish between the at-home & on-site offering on the “Collections” page. This suggested that we should create a clear distinction between the at-home and on-site offerings.<br>4. No participants were able to find the museum financials suggesting that we create an independent category for it as well.<br>5. Although participants were able to navigate to the “Accessibility” category, they were not able to choose the correct subcategory, it was clear that too much specificity in this category was creating confusion.<br>These key insights led us to make some revisions in the information architecture.";
var fig18_19_20_21_22_caption = "Fig #18, #19, #20, #21 & #22: <i>Results of Tree Tests from Optimal Workshop showing the failed tasks</i>";
var fig23_caption = "Fig #23: <i>New Information Architecture for NYTM website</i>";

var solution_synthesis_text1 = "Once the information architecture was ready, we created user stories and task flows for 2 tasks - purchasing a ticket & reserving a school field trip - to map out all the pages that need to be designed."; 
var fig24_25_caption = "Fig #24 & #25: <i>User stories for the two tasks</i>";
var fig26_27_caption = "Fig #26 & #27: <i>Task Flows for the two tasks</i>";
var solution_synthesis_text2 = "Once we decided on all the content pages that were to be designed, we started brainstorming ideas for the page designs. The following are a few sketches and ideas that I came up with, many of these ideas were implemented in the prototypes.";
var fig28_38_caption = "Fig #28 to #38 (scroll): <i>Design Sketches for the NYTM Website</i>";

var user_testing_text1 = "After the design sketches and ideas for the web pages were ready, the team made the paper prototypes using the best ideas and design features from the sketches. We used Sketch and Invision for creating the Low-Fidelity Paper Prototypes.";
var fig39_caption = "Fig #39: <i>Desktop Paper Prototype</i>";
var fig40_caption = "Fig #40: <i>Mobile Paper Prototype</i>";
var user_testing_text2 = "Once the low-fidelity paper prototypes were ready we conducted 6 moderated user tests and concluded with the following insights.<br>1. The inclusion of the word “private” in the “Private Tours & Events” category was confusing or misleading for some users. We decided to change the category to “Tours & Events”.<br>2. Participants expected to be able to click on images of the various School Field trips types in the “School Field Trips” page to proceed with the booking process. We decided to add this feature in our further designs.<br>3. The ticket prices and quantities not being on the same page was confusing some users. We decided to put this information together on the respective reserve pages."; 

var mid_fidelity_text = "We implemented all the feedback, observations & findings from the user tests on the low-fidelity prototype into our final mid-fidelity prototypes. Moreover, we standardized the design by creating a style guide & asset panel for designing the prototype. This guide & asset panel included the fonts, button sizes, button versions, header, footer, spacing between content, navigation menu including the dropdowns; icons, logos, calendar and other page specific components.";
var fig41_42_caption = "Fig #41 & #42: <i>Mid-Fidelity task-based prototype pages for NYTM desktop website</i>";
var fig43_44_caption = "Fig #43 & #44: <i>Mid-Fidelity task-based prototype pages for NYTM mobile website</i>";
var fig45_caption = "Fig #45: <i>Decision #1 & #2 | Ticket Button & Hours Information on Homepage</i>";
var fig46_caption = "Fig #46: <i>Decision #3 | Separated different content types on pages with a separator line</i>";
var fig47_caption = "Fig #47: <i>Decision #4 & #5 | Category selection buttons & Intuitive icons for visitor policies</i>";
var fig48_caption = "Fig #48: <i>Decision #6 | Added a calendar for choosing the date & time for reserving tickets</i>";
var fig49_caption = "Fig #49: <i>Decision #7 | Added a confirmation page after completing the purchase</i>";
var fig50_caption = "Fig #50: <i>Decision #8 | Linked the images to their respective booking pages</i>";
var fig51_caption = "Fig #51: <i>Decision #9 | Clearly mentioned purchase summary before checkout</i>";
var fig52_caption = "Fig #52: <i>Decision #10 | Added text to clearly convey the waitlist option to users</i>";

var fig53_caption = "Fig #53: <i>Desktop Prototype Link</i>";
var fig54_caption = "Fig #54: <i>Mobile Protoytpe Link</i>";
var fig_web_caption = "<i>Desktop Prototype Link</i>";
var fig_mobile_caption = "<i>Mobile Prototype Link</i>";

var conclusion_text1 = "The results of this project over its duration of 15 weeks have provided solutions to many existing problems on the current NYTM website. By implementing the designs & features that are mentioned above in this study including - the revised Information Architecture, added calendar in the ticket reservation pages, inclusion of icons for visitor policies & adding images for each type of school trip - the user experience of the NYTM website can be significantly improved making it more intuitive for its users.";
var conclusion_text2 = "Looking back at the entire project the major takeaway for me is the whole process of research & design itself. The learned technical know-how of tools used during this project like Figma, Sketch & Invision are an added bonus.";
var conclusion_text3 = "First Step to move forward with this project is conducting the User Tests using the Mid-Fidelity prototypes. Followed by the prototype revision implementing the feedback and observations from the user tests. ";
var conclusion_text4 = "After the required changes, this project can finally move into the design of High-Fidelity prototypes. This stage will involve a lot more visual design including colors, images & graphics. Once the High-Fidelity prototype designs are done, a more comprehensive usability study can be performed on the prototype to assess its usability.";
var conclusion_text5 = "As an alternative path to carry this project forward, one can also look into designing any of the other pages and task flows required for the full website. This can be done following the same iterative process as described above in this study. Some pages & task flows for future work can include the “exhibits” & “archive” pages; and the “make a donation” task flow.";

function main() {

    section_expand();

    get_link_url("#fig55", "link");
    
    get_link_url("#fig56", "link");

    $("#fig-web-caption").html(fig_web_caption);

    $("#fig-mobile-caption").html(fig_mobile_caption);

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

    $("#persona-text1").html(persona_text1);

    $("#persona-text2").html(persona_text2);

    $("#fig13-caption").html(fig13_caption);

    $("#fig14-caption").html(fig14_caption);

    $("#market-research-text1").html(market_research_text1);

    $("#market-research-text2").html(market_research_text2);

    $("#fig15-caption").html(fig15_caption);

    $("#market-research-text3").html(market_research_text3);

    $("#market-research-text4").html(market_research_text4);

    $("#info-arch-text1").html(info_arch_text1);

    $("#fig16-caption").html(fig16_caption);

    $("#info-arch-text2").html(info_arch_text2);

    $("#info-arch-text3").html(info_arch_text3);

    $("#fig17-caption").html(fig17_caption);

    $("#info-arch-text4").html(info_arch_text4);

    $("#fig18-19-20-21-22-caption").html(fig18_19_20_21_22_caption);

    $("#fig23-caption").html(fig23_caption);

    $("#solution-synthesis-text1").html(solution_synthesis_text1);

    $("#fig24-25-caption").html(fig24_25_caption);

    $("#fig26-27-caption").html(fig26_27_caption);

    $("#solution-synthesis-text2").html(solution_synthesis_text2);

    $("#fig28-38-caption").html(fig28_38_caption);

    $("#user-testing-text1").html(user_testing_text1);

    $("#fig39-caption").html(fig39_caption);

    $("#fig40-caption").html(fig40_caption);

    $("#user-testing-text2").html(user_testing_text2);

    $("#mid-fidelity-text").html(mid_fidelity_text);

    $("#fig41-42-caption").html(fig41_42_caption);

    $("#fig43-44-caption").html(fig43_44_caption);

    $("#fig45-caption").html(fig45_caption);

    $("#fig46-caption").html(fig46_caption);

    $("#fig47-caption").html(fig47_caption);

    $("#fig48-caption").html(fig48_caption);

    $("#fig49-caption").html(fig49_caption);

    $("#fig50-caption").html(fig50_caption);

    $("#fig51-caption").html(fig51_caption);

    $("#fig52-caption").html(fig52_caption);

    $("#fig53-caption").html(fig53_caption);

    $("#fig54-caption").html(fig54_caption);

    $("#conclusion-text1").html(conclusion_text1);

    $("#conclusion-text2").html(conclusion_text2);

    $("#conclusion-text3").html(conclusion_text3);

    $("#conclusion-text4").html(conclusion_text4);

    $("#conclusion-text5").html(conclusion_text5);

}

main();