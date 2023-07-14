import { get_link_url } from "../utils.js";

var problem_text1 = "Communicating Subsurface Infrastructure";
var problem_text2 = "The NYC DDC is constantly building & maintaining infrastructure projects for the NYC public. But, these projects require opening up streets for an extensive amount of time.";
var problem_text3 = "How can we better communicate the purpose & necessity of the DDC projects to NYC residents & business owners?";
var fig1_caption = "Fig #1: <i>Search Screen in Final Prototype</i>";

var fig2_caption = "Fig #2: <i>Project Timeline Outlining Critical Project Activities</i>";

var design_ideation_text1 = "Since the NYC DDC already has a functional website, we decided it was best to find a solution that utilizes and builds up on the current digital infrastructure. Based on NYC DDC’s available resources and their primary requirement we came to a conclusion to focus our design on a section of the NYC DDC website instead of creating a new mobile/web app altogether.";
var design_ideation_text2 = "Once it was decided which content pages were to be designed, we started brainstorming ideas for the page designs. The following are a few sets of Low-Fidelity sketch wireframes and ideas for specific task flows derived from the user research; many of these ideas were implemented in the prototypes.";
var fig3_caption = "Fig #3: <i>Low-Fidelity Sketch Wireframe #1</i>";
var fig4_caption = "Fig #4: <i>Low-Fidelity Sketch Wireframe #2 & Initial Sketch for Mobile App Pages</i>";

function main() {

    $("#problem-text1").html(problem_text1);

    $("#problem-text2").html(problem_text2);

    $("#problem-text3").html(problem_text3);

    $("#fig1-caption").html(fig1_caption);

    $("#fig2-caption").html(fig2_caption);

    $("#design-ideation-text1").html(design_ideation_text1);

    $("#design-ideation-text2").html(design_ideation_text2);

    $("#fig3-caption").html(fig3_caption);

    $("#fig4-caption").html(fig4_caption);

}

main();