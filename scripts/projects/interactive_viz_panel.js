import {setCss} from "../utils.js";

var project_thumbnail_url = "../../assets/thumbnails/us-congress-fall22.png";

function main() {

    setCss("#project-thumbnail", "background-image", "url(" + project_thumbnail_url + ")");


}

main();