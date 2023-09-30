import {setCss, append_tag, append_link, get_link_url} from "../utils.js";

var project_thumbnail_url = "../../assets/thumbnails/got-networks-sum22.png";
var title = "Network Visaulizations of - <i>The Game of Thrones</i>";
var skills = ["Data Visualization", "Data ETL", "Data Munging"];
var tools = ["Python", "Gephi", "Adobe Illustrator"];
var link_titles = ["Repository", "Base Dataset"];
var link_srcs = ["https://github.com/gauravpatil123/Network-Graphs-of-Game-of-Thrones-The-Series/tree/main", "https://networkofthrones.wordpress.com/data"];

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