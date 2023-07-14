import { get_link_url } from "../utils.js";

var problem_text1 = "Communicating Subsurface Infrastructure";
var problem_text2 = "The NYC DDC is constantly building & maintaining infrastructure projects for the NYC public. But, these projects require opening up streets for an extensive amount of time.";
var problem_text3 = "How can we better communicate the purpose & necessity of the DDC projects to NYC residents & business owners?";
var fig1_caption = "Fig #1: <i>Search Screen in Final Prototype</i>";


function main() {

    $("#problem-text1").html(problem_text1);

    $("#problem-text2").html(problem_text2);

    $("#problem-text3").html(problem_text3);

    $("#fig1-caption").html(fig1_caption);

}

main();