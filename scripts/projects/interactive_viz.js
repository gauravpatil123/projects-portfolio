
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

}

main();