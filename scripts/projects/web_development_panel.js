import {setCss, append_tag, append_link, get_link_url} from "../utils.js";

var project_thumbnail_url = "../../assets/thumbnails/watchlist-sp23.png";
var title = "WatchList - User Content Recommendation System";
var skills = ["Database Design", "Interface Design", "Web Development"];
var tools = ["php", "MySQL", "JavaScript", "HTML + CSS"];
var link_titles = ["Repository", "Watch<i>List</i>"];
var link_srcs = ["https://github.com/gauravpatil123/Web-WatchList", "https://webdevdbcourses.prattsi.org/~gpatil/watchlist"];

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