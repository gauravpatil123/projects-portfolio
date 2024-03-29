import {setCss, append_tag, append_link, get_link_url} from "../utils.js";

var project_thumbnail_url = "../../assets/thumbnails/pfch-mid-sp22.png";
var title = "IMDb Dataset Network Visualization";
var skills = ["Data ETL", "Data Cleaning", "API's"];
var tools = ["Python", "Gephi"];
var link_titles = ["Repository", "Data Documentation", "Data Download"];
var link_srcs = ["https://github.com/gauravpatil123/IMDb-Dataset-Visualization-PFCH", "https://developer.imdb.com/non-commercial-datasets", "https://datasets.imdbws.com"];

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