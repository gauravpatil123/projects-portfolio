import { setCss, switch_class_to } from "./utils.js";

//global variable
var project_domains = {
    "project-1" : "Data Science | Data Viz | Data Art",
    "project-2" : "Data Science | Interactive Data Viz",
    "project-3" : "Web Development | Database Design",
    "project-4" : "Info-Architecture | Prototyping | UX Research",
    "project-5" : "Digital Product Design | Prototyping",
    "project-6" : "Research Paper | Research Methodology",
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