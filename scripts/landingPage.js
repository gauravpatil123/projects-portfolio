import { setCss } from "./utils.js";

function redirect(url) {

  $(location).attr('href',url);

}

async function click_enter(url) {

  $("#enter-button-link-wrapper").click(async function(e){

    e.preventDefault();
    
    $("#domain-logo").toggleClass("portfolio-domain-logo", false)
    $("#domain-logo").addClass("portfolio-domain-logo-clicked");
    setCss("body", "background-image", "none");
    setCss("#enter-button-link-wrapper", "display", "none");

    $("body").animate({ backgroundColor : "#3D6599" }, 1000);
    $(".portfolio-domain-logo-clicked").animate({ width : "37vw", height : "37vw" }, 1000);

    await new Promise(r => setTimeout(r, 2000));
    
    $("body").animate({ backgroundColor : "white" }, 1000);
    $(".logo-screen").animate({ opacity : 0 }, 1000);
    $(".portfolio-domain-logo-clicked").animate({ opacity : 0 }, 1000);

    await new Promise(r => setTimeout(r, 1000));
    redirect(url);

  });

}

async function main() {

  var homepage_url = "./pages/homepage.html";
  click_enter(homepage_url);

}

main();


