
var introduction_text = "“The Transition in US Congress from 2014 - 2020” is an interactive visualization of the composition of US congress and major events during the 2014 - 2020 timeframe. The visualization is created using HTML5, CSS & D3 in JavaScript. Unlike other visualizations that try to display the same information using maps, this project has attempted to distance itself from maps & geographies of the land. This project starts with the representation of the US House of Representatives that formed after the 2014 election in the 114th US Congress shown in Fig #1. The user can then interact with the visualization & navigate through intuitive buttons and a year slider to find more information. The visualization also has a story-telling component which can be accessed with a horizontal scroll interaction to show the major events as shown in Fig #2. These major events start from 2014 and continue to build the narrative chronologically as the user interacts with the visualization through time.";
var fig1_caption = "Fig #1: <i>US House of Representatives 2014</i>";
var fig2_caption = "Fig #2: <i>Major events during the 114th US Congress</i>";

function main() {

    $("#introduction-text").html(introduction_text);
    
    $("#fig1-caption").html(fig1_caption);

    $("#fig2-caption").html(fig2_caption);

}

main();