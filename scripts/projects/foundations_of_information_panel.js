import {setCss, append_tag, append_link, get_link_url} from "../utils.js";

var project_thumbnail_url = "../../assets/thumbnails/seminar-paper-foundations-sp22.png";
var title = "Environmental Effects of Electric Vehicles";
var skills = ["Research Methods", "Qualitative Research", "Critical Thinking"];
var tools = ["Zotero"];
var link_titles = ["Research Paper"];
var link_srcs = ["../../assets/projects/foundations_of_information/seminar_research_paper.pdf"];

function main() {

    setCss("#project-thumbnail", "background-image", "url(" + project_thumbnail_url + ")");

    $("#project-title").html(title);

    skills.forEach(element => append_tag(element, "skills-container", "skill-item"));

    tools.forEach(element => append_tag(element, "tools-container", "tool-item"));

    for (let i = 0; i < link_titles.length; i++) {
        let element = link_titles[i];
        let src = link_srcs[i];
        append_link(element, src, "links-container", "link-item");
    }

    get_link_url(".link-item");

}

main();