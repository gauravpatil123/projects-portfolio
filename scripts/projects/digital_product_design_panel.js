import {setCss, append_tag, append_link, get_link_url} from "../utils.js";

var project_thumbnail_url = "../../assets/thumbnails/nyc-ddc-product-design-sp23-5.png";
var title = "Communicating Subsurface Infrastructure for NYC DDC";
var skills = ["Wireframing", "Prototype Design", "User Testing", "Info Architecture"];
var tools = ["Figma", "Adobe Illustrator"];
var link_titles = ["Prototype"];
var link_srcs = ["https://www.figma.com/proto/Q0qMa8yHzh4Vqpfptnxpsd/Xinyu-Wang-%26-Gaurav-Patil---Digital-Product-Design-Assignments?page-id=1%3A9&type=design&node-id=473-1178&viewport=462%2C326%2C0.07&t=glaTkkN16jSwr2rs-1&scaling=scale-down&starting-point-node-id=473%3A1178&mode=design"];

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