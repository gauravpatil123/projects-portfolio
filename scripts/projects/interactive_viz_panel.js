import {setCss, append_tag} from "../utils.js";

var project_thumbnail_url = "../../assets/thumbnails/us-congress-fall22.png";
var title = "The Transition in US Congress from 2014 - 2020";
var skills = ["Data Visualization", "Data Collection", "Data ETL"];
var tools = ["D3", "JavaScript", "CSS", "HTML"];
var links = ["Repository", "Visualization"]

function main() {

    setCss("#project-thumbnail", "background-image", "url(" + project_thumbnail_url + ")");

    $("#project-title").html(title);

    skills.forEach(element => append_tag(element, "skills-container", "skill-item"));

    tools.forEach(element => append_tag(element, "tools-container", "tool-item"));

    links.forEach(element => append_tag(element, "links-container", "link-item"));

}

main();