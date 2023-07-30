import { setCss } from "./utils.js";

function redirect(url) {

  $(location).attr('href',url);

}

async function click_enter(url) {

  $("#enter-button-link-wrapper").click(async function(e){

    e.preventDefault();

    setCss("#portfolio-domain-logo", "background-image", "url(../assets/logo/Portfolio-Domains-Logo-b.png)");
    setCss("#enter-button-link-wrapper", "display", "none");

    $("body").animate({ backgroundColor : "#3D6599" }, 1000);
    $("#portfolio-domain-logo").animate({ width : "37vw", height : "37vw" }, 1000);

    await new Promise(r => setTimeout(r, 2000));
    
    $("body").animate({ backgroundColor : "white" }, 1000);
    $(".logo-screen").animate({ opacity : 0 }, 1000);
    $("#portfolio-domain-logo").animate({ opacity : 0 }, 1000);

    await new Promise(r => setTimeout(r, 1000));
    redirect(url);

  });

}

async function main() {

  var homepage_url = "./pages/homepage.html";
  click_enter(homepage_url);

}

main();


