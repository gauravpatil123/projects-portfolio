import { setCss } from "./utils.js";

function redirect(url) {

  $(location).attr('href',url);

}

async function click_enter(url) {

  $("#enter-button-link-wrapper").click(async function(e){

    //get color hex from caa global variables
    e.preventDefault();
    $("body").animate({ backgroundColor : "#3D6599" }, 1000);

    await new Promise(r => setTimeout(r, 2000));
    
    //change white to require colors from style sheet
    $("body").animate({ backgroundColor : "white" }, 1000);
    $(".logo-screen").animate({ opacity : 0 }, 1000);

    await new Promise(r => setTimeout(r, 1000));
    redirect(url);

  });

}

async function main() {

  var homepage_url = "./pages/homepage.html";
  click_enter(homepage_url);

}

main();


