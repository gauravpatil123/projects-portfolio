import { get_link_url, section_expand } from "../utils.js";

var problem_text1 = '<b>Problem</b><br>Initial problem statement from NYC DDC: "How might we communicate subsurface infrastructure construction projects to the people."';
var problem_text2 = "The NYC DDC is constantly building & maintaining infrastructure projects for the NYC public. But, these projects require opening up streets for an extensive amount of time.";
var problem_text3 = "How can we better communicate the purpose & necessity of the DDC projects to NYC residents & business owners?";
var problem_text4 = "<b>Client:</b> NYC Department of Design & Construction<br><b>Duration:</b> 15 Weeks<br><b>Team Members:</b> Gaurav Patil, Xinyu Wang."
var fig1_caption = "Fig #1: <i>Search Screen in Final Prototype</i>";

var fig2_caption = "Fig #2: <i>Project Timeline Outlining Critical Project Activities</i>";

var design_ideation_text1 = "Since the NYC DDC already has a functional website, we decided it was best to find a solution that utilizes and builds up on the current digital infrastructure. Based on NYC DDC’s available resources and their primary requirement we came to a conclusion to focus our design on a section of the NYC DDC website instead of creating a new mobile/web app altogether.";
var design_ideation_text2 = "Once it was decided which content pages were to be designed, we started brainstorming ideas for the page designs. The following are a few sets of Low-Fidelity sketch wireframes and ideas for specific task flows derived from the user research; many of these ideas were implemented in the prototypes.";
var fig3_caption = "Fig #3: <i>Low-Fidelity Sketch Wireframe #1</i>";
var fig4_caption = "Fig #4: <i>Low-Fidelity Sketch Wireframe #2 & Initial Sketch for Mobile App Pages</i>";

var mid_fidelity_text = "We conducted peer reviews on the low-fidelity task based sketch wireframes and implemented all the feedback & observations into our mid-fidelity prototypes. Moreover, we started to standardize the design by creating a style guide & asset panel for designing the prototype. This guide & asset panel included the fonts, button sizes, button versions, header, footer, spacing between content, navigation menu including the dropdowns; icons, logos, calendar and other page specific components.";
var fig5_caption = "Fig #5: <i>Select Mid-Fidelity Design Pages</i>";

var design_iteration_text1 = "Once the mid-fidelity prototype was ready, we began an iterative process of user testing & peer reviews. We updated the design at every iteration by taking into account the feedback & observations from the iterative process.";
var fig6_caption = "Fig #6: <i>Design Evolution of the Project Dashboard</i>";
var design_iteration_text2 = "The projects page or the project dashboards went through a lot of transformation throughout each iteration of the design process. The key changes were made in how the projects are displayed in cards, the search function & search bar and the addition of DDC’s critical subsurface infrastructure filters.";
var fig7_caption = "Fig #7: <i>Design Evolution of the Project Search Pages</i>";
var design_iteration_text3 = "The project search page went through changes in the search bars, filter buttons and the map design. The various search bars were combined into a single search bar having all their functionality in the final design.";
var design_iteration_text4 = "Further, the filter button was a feature that was most disliked by users in the user tests of the mid-fidelity design so in  the final design we updated the design to have filters for the most critical subsurface infrastructure work domains of the NYC DDC instead of a big filter button.";
var design_iteration_text5 = "Finally, we separated the search page from the earlier iterations into a search bar page and map page in the final design. Which according to our feedback provided a more smooth and cohesive user experience for the search function.";

var final_design_text1 = "All the critical pages of the final design are presented in the following subsections.";
var fig8_9_caption = "Fig #8 & #9: <i>Final Prototype Design of the Home & About Pages (Scrollable)</i>";
var fig10_12_caption = "Fig #10, #11 & #12: <i>Final Prototype Design of the Search Pages</i>";
var fig13_15_caption = "Fig #13, #14 & #15: <i>Final Prototype Design of the Project List Page (Scrollable)</i>";
var fig16_caption = "Fig #16: <i>Final Prototype Design of the Project Details Page (Scrollable)</i>";
var fig17_caption = "Fig #17: <i>Final Prototype Design Details for the Project Details Page #1</i>";
var fig18_caption = "Fig #18: <i>Final Prototype Design Details for the Project Details Page #2</i>";
var fig19_caption = "Fig #19: <i>Final Prototype Design Details for the Project List Page</i>";

var fig20_caption = "Fig #20: <i>Final Prototype Design Link Image</i>";

function main() {

    section_expand();

    get_link_url(".fig20", "link")

    $("#problem-text1").html(problem_text1);

    $("#problem-text2").html(problem_text2);

    $("#problem-text3").html(problem_text3);

    $("#problem-text4").html(problem_text4);

    $("#fig1-caption").html(fig1_caption);

    $("#fig2-caption").html(fig2_caption);

    $("#design-ideation-text1").html(design_ideation_text1);

    $("#design-ideation-text2").html(design_ideation_text2);

    $("#fig3-caption").html(fig3_caption);

    $("#fig4-caption").html(fig4_caption);

    $("#mid-fidelity-text").html(mid_fidelity_text);

    $("#fig5-caption").html(fig5_caption);

    $("#design-iteration-text1").html(design_iteration_text1);

    $("#fig6-caption").html(fig6_caption);

    $("#design-iteration-text2").html(design_iteration_text2);

    $("#fig7-caption").html(fig7_caption);

    $("#design-iteration-text3").html(design_iteration_text3);

    $("#design-iteration-text4").html(design_iteration_text4);

    $("#design-iteration-text5").html(design_iteration_text5);

    $("#final-design-text1").html(final_design_text1);

    $("#fig8-9-caption").html(fig8_9_caption);

    $("#fig10-12-caption").html(fig10_12_caption);

    $("#fig13-15-caption").html(fig13_15_caption);

    $("#fig16-caption").html(fig16_caption);

    $("#fig17-caption").html(fig17_caption);
    
    $("#fig18-caption").html(fig18_caption);
    
    $("#fig19-caption").html(fig19_caption);

    $("#fig20-caption").html(fig20_caption);

}

main();