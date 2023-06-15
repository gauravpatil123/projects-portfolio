
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

}

main();