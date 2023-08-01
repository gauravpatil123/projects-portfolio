import { mobile_menu_nav } from "./utils.js";

function main() {

    if (window.matchMedia("(max-width: 1199px)").matches) {

        mobile_menu_nav();
      
    }

}

main();