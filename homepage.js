// import { setCss } from "./landingPage";

function setCss(querySelector, property, value) {

    $(querySelector).css(property, value);
  
}


async function main() {

    $("#filter-data").on("click", function(){

        setCss(".portfolio-piece-box", "display", "none");
        setCss(".data", "display", "block");

    });

    $("#filter-design").on("click", function(){

        setCss(".portfolio-piece-box", "display", "none");
        setCss(".design", "display", "block");

    });

    $("#filter-document").on("click", function(){

        setCss(".portfolio-piece-box", "display", "none");
        setCss(".document", "display", "block");

    });

    $("#filter-all").on("click", function(){

        setCss(".portfolio-piece-box", "display", "block");

    });



}

main();