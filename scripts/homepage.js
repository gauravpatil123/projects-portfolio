import { setCss, mobile_menu_nav, switch_class_to, redirect } from "./utils.js";

//global variable
var project_domains = {
    "project-1" : "Data Science | Interactive Data Viz",
    "project-2" : "Data Science | Data Viz | Data Art",
    "project-3" : "Web Development | Database Design",
    "project-4" : "Info-Architecture | Prototyping | UX Research",
    "project-5" : "Digital Product Design | Prototyping",
    "project-6" : "Research Paper | Research Methodology",
    "project-7" : "Project 7 domain",
    "project-8" : "Project 8 domain"
}

var DATA_PROJETCS = ["#project-1", "#project-2", "#project-3"];
var DESIGN_PROJECTS = ["#project-3", "#project-4", "#project-5"];
var DOCUMENT_PROJECTS = ["#project-6"];
var ALL_PROJECTS = ["#project-1", "#project-2", "#project-3", "#project-4", "#project-5", "#project-6"];

var home_intro_text = "";

async function main() {

    $("#home-intro").html(home_intro_text);

    $("#filter-data").on("click", function(){

        switch_class_to("#filter-data");
        setCss(".portfolio-piece-box", "display", "none");
        //setCss(".data", "display", "flex");

        DATA_PROJETCS.forEach(e => {
            setCss(e, "display", "flex");            
        });

    });

    $("#filter-design").on("click", function(){

        switch_class_to("#filter-design");
        setCss(".portfolio-piece-box", "display", "none");
        //setCss(".design", "display", "flex");

        DESIGN_PROJECTS.forEach(e => {
            setCss(e, "display", "flex");            
        });

    });

    $("#filter-document").on("click", function(){

        switch_class_to("#filter-document");
        setCss(".portfolio-piece-box", "display", "none");
        //setCss(".document", "display", "flex");

        DOCUMENT_PROJECTS.forEach(e => {
            setCss(e, "display", "flex");            
        });


    });

    $("#filter-all").on("click", function(){

        switch_class_to("#filter-all");
        //setCss(".portfolio-piece-box", "display", "flex");

        ALL_PROJECTS.forEach(e => {
            setCss(e, "display", "flex");            
        });


    });

    $(".portfolio-piece-box").hover(function(){

        var selector = "#" + this.id + " .inner .project-domain";
        var domain_text = project_domains[this.id];
        $(selector).html(domain_text);

    }, function(){

        var selector = "#" + this.id + " .inner .project-domain";
        $(selector).html("");

    })

    $("#project-1").on("click", function() {

        var url = "./projects/interactive_viz.html";
        redirect(url);

    })

    $("#project-2").on("click", function() {

        var url = "./projects/imdb_data_viz.html";
        redirect(url);

    })

    $("#project-3").on("click", function() {

        var url = "./projects/web_development.html";
        redirect(url);

    })

    $("#project-4").on("click", function() {

        var url = "./projects/information_arch.html";
        redirect(url);

    })

    $("#project-5").on("click", function() {

        var url = "./projects/digital_product_design.html";
        redirect(url);

    })

    $("#project-6").on("click", function() {

        var url = "./projects/foundations_of_information.html";
        redirect(url);

    })

}

main();