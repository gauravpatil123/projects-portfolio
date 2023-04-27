import { setCss, switch_class_to } from "./utils.js";

//global variable
var project_domains = {
    "project-1" : "Data Science | Data Viz | Data Art",
    "project-2" : "Project 2 domain",
    "project-3" : "Project 3 domain",
    "project-4" : "Project 4 domain",
    "project-5" : "Project 5 domain",
    "project-6" : "Project 6 domain",
    "project-7" : "Project 7 domain",
    "project-8" : "Project 8 domain"
}

async function main() {

    $("#filter-data").on("click", function(){

        setCss(".portfolio-piece-box", "display", "none");
        setCss(".data", "display", "flex");
        switch_class_to("#filter-data");

    });

    $("#filter-design").on("click", function(){

        setCss(".portfolio-piece-box", "display", "none");
        setCss(".design", "display", "flex");
        switch_class_to("#filter-design");

    });

    $("#filter-document").on("click", function(){

        setCss(".portfolio-piece-box", "display", "none");
        setCss(".document", "display", "flex");
        switch_class_to("#filter-document");

    });

    $("#filter-all").on("click", function(){

        setCss(".portfolio-piece-box", "display", "flex");
        switch_class_to("#filter-all");

    });

    $(".portfolio-piece-box").hover(function(){

        var selector = "#" + this.id + " .inner .project-domain";
        var domain_text = project_domains[this.id];
        $(selector).html(domain_text);

    }, function(){

        var selector = "#" + this.id + " .inner .project-domain";
        $(selector).html("");

    })

}

main();