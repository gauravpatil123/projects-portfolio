import {setCss, append_tag, append_link, get_link_url} from "../utils.js";

var project_thumbnail_url = "../../assets/thumbnails/nytm-info-arch-fall23-2.png";
var title = "Revamping the Web Experience of New York Transit Museum";
var skills = ["User Research", "Info Architecture", "User Testing", "Design Prototyping"];
var tools = ["Figma", "InVision", "Optimal Workshop", "Miro"];
var link_titles = ["Desktop Prototype", "Mobile Prototype"];
var link_srcs = ["https://www.figma.com/proto/tHUygQAe9on6YCAjvu19D4/INFO---643---Final-Mid-Fidelity-Prototype-Design?page-id=0%3A1&node-id=1%3A3&viewport=120%2C-96%2C0.13&scaling=min-zoom&starting-point-node-id=1%3A3&show-proto-sidebar=1", "https://www.figma.com/proto/tHUygQAe9on6YCAjvu19D4/INFO---643---Final-Mid-Fidelity-Prototype-Design?page-id=0%3A1&node-id=1%3A9&viewport=120%2C-96%2C0.13&scaling=min-zoom&starting-point-node-id=1%3A9&show-proto-sidebar=1"];

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