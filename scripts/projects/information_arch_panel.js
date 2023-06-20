import {setCss, append_tag, append_link, get_link_url} from "../utils.js";

var project_thumbnail_url = "../../assets/thumbnails/nytm-info-arch-fall23.png";
var title = "Revamping the Web Experience of New York Transit Museum";
var skills = [];
var tools = [];
var link_titles = [];
var link_srcs = [];

function main() {

    setCss("#project-thumbnail", "background-image", "url(" + project_thumbnail_url + ")");

    $("#project-title").html(title);

}

main();