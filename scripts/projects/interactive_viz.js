
var introduction_text = "“The Transition in US Congress from 2014 - 2020” is an interactive visualization of the composition of US congress and major events during the 2014 - 2020 timeframe. The visualization is created using HTML5, CSS & D3 in JavaScript. Unlike other visualizations that try to display the same information using maps, this project has attempted to distance itself from maps & geographies of the land. This project starts with the representation of the US House of Representatives that formed after the 2014 election in the 114th US Congress shown in Fig #1. The user can then interact with the visualization & navigate through intuitive buttons and a year slider to find more information. The visualization also has a story-telling component which can be accessed with a horizontal scroll interaction to show the major events as shown in Fig #2. These major events start from 2014 and continue to build the narrative chronologically as the user interacts with the visualization through time.";
var fig1_caption = "Fig #1: <i>US House of Representatives 2014</i>";
var fig2_caption = "Fig #2: <i>Major events during the 114th US Congress</i>";

var concept_idea_text1 = "In the present day most of the representations of US election results use visualizations in which the states are oriented to form a distorted map of the US. I planned to discard the distorted map and orient states in a rectangular format. The states still conserve their relative position from the map but the districts are not oriented in a distorted shape of the states. Moreover, in many of the current representations the districts are not positioned in a sequential manner, I planned to correct that discrepancy since my arrangement is in a rectangle. Below Fig #3 is one such example from the New York Times for the 2022 election.";
var fig3_caption = "Fig #3: <i>New York Times Visualization of the 2022  Election Coverage</i>";
var concept_idea_text2 = "In the initial prototype, I planned to create an abstraction to represent the composition of the US house of representatives through years. As shown in Fig #4, each seat is represented by a square and the color will represent the party of the candidate.";
var fig4_caption = "Fig #4: <i>Prototype 1 | US House of Representatives Screen</i>";
var concept_idea_text3 = "I planned to add the overall house composition at the bottom in a semi-circular doughnut chart with some statistics. In addition to this I planned to add interactive features (slider / buttons/ dropdowns) to interact with the year and to change from house to senate. Moreover I planned to include additional features like hover and tooltips etc.";
var fig5_caption = "Fig #5: <i>Prototype 1 | US Senate Screen</i>";
var concept_idea_text4 = "Finally, I planned to represent the senate as shown in Fig #5. This screen will also have all the features from the house screen shown in Fig #4.";

var fig6_caption = "Fig #6: <i>Prototype 2 | US HOR Grid View</i>";
var fig7_caption = "Fig #7: <i>Prototype 2 | US Senate Grid View</i>";
var fig8_caption = "Fig #8: <i>Prototype 2 | US HOR Grid Collapse View</i>";
var prototype_evolution_text1 = "1. Changed the representation of seats in the state grid view (for both houses) by adding a padding between squares making them separate from each other.<br>2. Switched the location of the title from bottom-right to top-center.<br>3. Changed the location of the arc semicircle and moved it into the state grid view in the US house of representatives screen.";
var prototype_evolution_text2 = "1. Added two buttons on top to switch between the houses of congress.<br>2. Added a year slider at the bottom as an interactive feature.<br>3. Added two buttons at the very bottom - state grid view & collapse grid view for the viewer to interact and look at the respective forms of display.<br>4. Added a proportional horizontal bar on the collapse grid view to show the strengths of respective political parties in the selected house.";
var fig9_caption = "Fig #9: <i>Prototype 3 | Layout showing the addition of Details & Major Events sections</i>";
var fig10_caption = "Fig #10: <i>Prototype 3 | Details Section</i>";
var fig11_caption = "Fig #11: <i>Prototype 3 | Tooltip Design</i>";
var prototype_evolution_text3 = "1. Added a static project title at top of the visualization - this will not change during any interactivity or transformations.<br>2. Scaled the layout of the seats to have space on the right side of svg for details, statistics & Major events.<br>3. Added the details sections which will have the details for the selected house including leadership details and statistics about bills & resolutions.<br>4. Added a section for major events - this will have text for major events that transpired during the timeframe of the selected congress.<br>5. Designed the first draft of the hover tooltip on seats.";
var fig12_caption = "Fig #12: <i>Prototype 4 | Layout showing the additions and changes to prototype #3 on House Screen</i>";
var fig13_caption = "Fig #13: <i>Prototype 4 | Layout showing the position of Major Events</i>";
var fig14_caption = "Fig #14: <i>Prototype 4 | Layout showing the additions and changes on Senate Screen</i>";
var fig15_16_caption = "Fig #15 & #16: <i>Prototype 4 | Tooltips templates with applied colors</i>";
var prototype_evolution_text4 = "1. Changed the orientations of state grids for seats in both the houses of Congress to fit the details panel to the right on the same screen. (the states are arranged differently).<br>2. Changed the location of the “<i>seats arcs</i>” from the bottom left to below the details panel.<br>3. Changed the bars that showed statistics for Bills & Resolutions to text, since their graphical representation made little sense.<br>4. Changes the position of “<i>Major Events</i>” to even right of the “<i>Details Panel</i>”."; 
var prototype_evolution_text5 = "1. Added the “<i>President in Office</i>” text bar to accompany the chart title.<br>2. Added a scroll arrow at the right on the bottom of the “<i>Details Panel</i>” to access the “<i>Major Events</i>” text with a scroll interaction."; 
var prototype_evolution_text6 = "1. Deleted the grid collapse view feature from the visualization (including the buttons & pages). While the feature was an interesting idea, I wanted to focus on the interactivity of the state grid views and get them to work smoothly.";

var dataset_text1 = "Even though all the data required to build this project was available on various online sources, a compiled dataset with all the required data elements was hard to find. So I decided to build the datasets myself and tailor them to the needs of this project. These constructed datasets are available on the GitHub project repository.";
var fig17_caption = "Fig #17: <i>Screenshot of Number of seats csv data</i>";
var dataset_text2 = "First, I started collecting data related to the number of seats that each state represents in the US House of Representatives through the years. Further, I collected the data for the individual chambers of US congress, the House & the Senate. This data included the election year, the name of the winning candidate, the party of the winning candidate, the state, and the district number. Moreover, for the Senate seats I collected additional data that included whether the seat was contested in the current cycle, the seat class & whether the seat was a part of a special election.";
var fig18_caption = "Fig #18: <i>Screenshot of House of Representatives csv data</i>";
var fig19_caption = "Fig #19: <i>Screenshot of Senate csv data</i>";
var dataset_text3 = "I started collecting data from the 2020 election cycle working backwards in election cycles. I finished by collecting the data for four election cycles (~8years), from 2014 to 2020.";
var fig20_caption = "Fig #20: <i>Screenshot of Congress Details JSON data</i>";
var dataset_text4 = "After the election data for both the houses was collected, I started to collect the details of each formed Congress from 2014 - 2020. This data included the party leaders of both the houses, the seats won by their parties, the tenure of the Congress & election date.";
var fig21_caption = "Fig #21: <i>Screenshot of Bills & Major events JSON data</i>";
var dataset_text5 = "Further, I also collected statistical data for Bills & Resolutions for both the houses of Congress from 2014 to 2020 through their official website. This included the number of bills introduced, reported & passed. Finally, I also collected the data for the major events from several sources (these are described in detail in the appendix).";

var evaluation_text1 = "The project was initially planned to span over at least 2 decades, but due to several constraints including time and data collection I decided to cover the project only from years 2014 to 2020. But even with the limited scope the project is quite interactive with a lot of major events and transitions to see in the US Congress. During this timeframe the control of both the houses flipped from one party to the other as well as a lot of new members were elected.";
var evaluation_text2 = "In this visualization I have attempted to showcase the representation of each house of the US congress from 2014 to 2020. Moreover, along with the composition of the US Congress, I have also attempted to include statistics about the Bills & Resolutions during the congress tenure to provide a statistical overview of the selected chamber. Further, the highlighted major events will provide even more context and build an informative narrative along with the transition of the US Congress through years.";
var evaluation_text3 = "This project will allow easy understanding of the representational changes that took place in both the houses of Congress through a visual medium. While at the same time provide other related contextual information in the form of major events that will help understand the reasons, circumstances or scenarios that led to the transition or change in the seats/composition.";
var evaluation_text4 = "This form of at-a-glance visual representation of political data will help simplify the delivery of information and help its users better understand the changing scenarios & other factors through interactivity. Being able to see the changes happen visually with user interaction may also be more impactful than just reading about it or looking up the information through other mediums.";
var evaluation_text5 = "The choice of representing the House of Representatives seats as small rectangles in sequential form without any geographical association within the state will increase the searchability for any user looking for specific seats or representatives. The complete lack of map in this project helps normalize the overwhelming effect created by similar (but misleading) visual representations in a map format. The notion that land doesn’t vote, people do - fits this visualization.";
var fig22_caption = "Fig #22: <i>US Senate 2014</i>";
var evaluation_text6 = "Further, I decided to blur the senate seats which were not contested in the current election cycle as shown in Fig #22, but nevertheless provide information in the form of tooltips when hovering over these seats. This was to provide the user with an intuitive way to infer which seats were contested in the current election cycle while simultaneously not losing the ability to look up information about the other seats.";
var fig23_24_caption = "Fig #23 & #24: <i>Tooltip Design for US House of Representatives</i>";
var fig25_26_caption = "Fig #25 & #26: <i>Tooltip Design for US Senate</i>"; 
var evaluation_text7 = "Additionally, the tooltips are also designed to convey the information clearly to the user. The tooltips have text information about the state, seat, representative & the party. Moreover, the tooltip background also changes color based on the party to provide an extra layer of visual communication for the user. This design is shown in Figs #23 - #26.";
var fig27_28_caption = "Fig #27 & #28: <i>Semicircular Arcs for House & Senate</i>"; 
var evaluation_text8 = "Further, the semicircular arc at the bottom right is designed to provide a quick at-glance visual representation of statistical information about the seat distribution in the selected house as shown in Fig #27 & #28.";
var evaluation_text9 = "The color choices were made taking into account factors such as intuition, accessibility and familiarity. I decided to use the official colors of the two major parties (Democratic & Republican) to represent them since those have a high familiarity. The colors used for other smaller parties & independent candidates are chosen so that the user can intuitively and clearly differentiate between them. All the colors chosen are also colorblind safe; this enables this visualization to have a greater degree of accessibility.";
var evaluation_text10 = "Typography also plays a significant role in creating a visual impact and setting a tone for this visualization. I have used 2 custom font families in this visualizations - “<i>Pinyon Script</i>” & “<i>Playfair Display</i>”. Most of the top level headings and titles have the first font which is cursive and gives the visualization a very “<i>Political & Antiquited</i>” feel whereas the later font is used in descriptive texts of major events, naming the states & in the tooltip information since it as a clearer font and will help in the readability of the text.";
var evaluation_text11 = "I decided to have the major events listed behind a horizontal scroll interaction, this adds to the interactivity of the visualization. The user may choose to look & explore the major events and scroll back for the visual representation of the seats at his pace and needs.";

function main() {

    $("#introduction-text").html(introduction_text);
    
    $("#fig1-caption").html(fig1_caption);

    $("#fig2-caption").html(fig2_caption);

    $("#concept_idea-text1").html(concept_idea_text1);

    $("#fig3-caption").html(fig3_caption);

    $("#concept_idea-text2").html(concept_idea_text2);

    $("#fig4-caption").html(fig4_caption);

    $("#concept_idea-text3").html(concept_idea_text3);

    $("#fig5-caption").html(fig5_caption);

    $("#concept_idea-text4").html(concept_idea_text4);

    $("#fig6-caption").html(fig6_caption);

    $("#fig7-caption").html(fig7_caption);

    $("#fig8-caption").html(fig8_caption);

    $("#prototype_evolution-text1").html(prototype_evolution_text1);

    $("#prototype_evolution-text2").html(prototype_evolution_text2);

    $("#fig9-caption").html(fig9_caption);

    $("#fig10-caption").html(fig10_caption);

    $("#fig11-caption").html(fig11_caption);

    $("#prototype_evolution-text3").html(prototype_evolution_text3);

    $("#fig12-caption").html(fig12_caption);

    $("#fig13-caption").html(fig13_caption);

    $("#fig14-caption").html(fig14_caption);

    $("#fig15-16-caption").html(fig15_16_caption);

    $("#prototype_evolution-text4").html(prototype_evolution_text4);

    $("#prototype_evolution-text5").html(prototype_evolution_text5);

    $("#prototype_evolution-text6").html(prototype_evolution_text6);

    $("#dataset-text1").html(dataset_text1);

    $("#fig17-caption").html(fig17_caption);

    $("#dataset-text2").html(dataset_text2);

    $("#fig18-caption").html(fig18_caption);

    $("#fig19-caption").html(fig19_caption);

    $("#dataset-text3").html(dataset_text3);

    $("#fig20-caption").html(fig20_caption);

    $("#dataset-text4").html(dataset_text4);

    $("#fig21-caption").html(fig21_caption);

    $("#dataset-text5").html(dataset_text5);

    $("#evaluation-text1").html(evaluation_text1);

    $("#evaluation-text2").html(evaluation_text2);

    $("#evaluation-text3").html(evaluation_text3);

    $("#evaluation-text4").html(evaluation_text4);

    $("#evaluation-text5").html(evaluation_text5);

    $("#fig22-caption").html(fig22_caption);

    $("#evaluation-text6").html(evaluation_text6);

    $("#fig23-24-caption").html(fig23_24_caption);

    $("#fig25-26-caption").html(fig25_26_caption);

    $("#evaluation-text7").html(evaluation_text7);

    $("#fig27-28-caption").html(fig27_28_caption);

    $("#evaluation-text8").html(evaluation_text8);

    $("#evaluation-text9").html(evaluation_text9);

    $("#evaluation-text10").html(evaluation_text10);

    $("#evaluation-text11").html(evaluation_text11);

}

main();