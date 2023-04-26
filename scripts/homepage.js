import { setCss } from "./utils.js";

//global variable
var project_titles = {
    "project-1" : "IMDb Dataset Network Visualization",
    "project-2" : "Project 2 title",
    "project-3" : "Project 3 title",
    "project-4" : "Project 4 title",
    "project-5" : "Project 5 title",
    "project-6" : "Project 6 title",
    "project-7" : "Project 7 title",
    "project-8" : "Project 8 title"
}

async function main() {

    $("#filter-data").on("click", function(){

        setCss(".portfolio-piece-box", "display", "none");
        setCss(".data", "display", "flex");

    });

    $("#filter-design").on("click", function(){

        setCss(".portfolio-piece-box", "display", "none");
        setCss(".design", "display", "flex");

    });

    $("#filter-document").on("click", function(){

        setCss(".portfolio-piece-box", "display", "none");
        setCss(".document", "display", "flex");

    });

    $("#filter-all").on("click", function(){

        setCss(".portfolio-piece-box", "display", "flex");

    });

    $(".portfolio-piece-box").hover(function(){

        var selector = "#" + this.id + " .inner .project-thumbnail-title";
        var title_text = project_titles[this.id];
        $(selector).html(title_text);
        var pd_selector = "#" + this.id + " .inner .project-domain";
        setCss(pd_selector, "display", "block");

    }, function(){

        var selector = "#" + this.id + " .inner .project-thumbnail-title";
        $(selector).html("");
        var pd_selector = "#" + this.id + " .inner .project-domain";
        setCss(pd_selector, "display", "none");

    })

}

main();