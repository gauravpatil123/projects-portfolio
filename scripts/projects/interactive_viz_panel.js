import {setCss, append_tag, append_link} from "../utils.js";

var project_thumbnail_url = "../../assets/thumbnails/us-congress-fall22.png";
var title = "The Transition in US Congress from 2014 - 2020";
var skills = ["Data Visualization", "Data Collection", "Data ETL"];
var tools = ["D3", "JavaScript", "CSS", "HTML"];
var link_titles = ["Repository", "Visualization"];
var link_srcs = ["https://github.com/gauravpatil123/Transitions-in-US-Congress", "https://gauravpatil123.github.io/Transitions-in-US-Congress"];

function main() {

    setCss("#project-thumbnail", "background-image", "url(" + project_thumbnail_url + ")");

    $("#project-title").html(title);

    skills.forEach(element => append_tag(element, "skills-container", "skill-item"));

    tools.forEach(element => append_tag(element, "tools-container", "tool-item"));

    // link_titles.forEach(element => append_tag(element, "links-container", "link-item"));

    for (let i = 0; i < link_titles.length; i++) {
        let element = link_titles[i];
        let src = link_srcs[i];
        append_link(element, src, "links-container", "link-item");
    }

    // link_titles.forEach((element, index) => append_link(element, link_srcs[index], "links-container", "link-item"));


}

main();