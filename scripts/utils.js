function setCss(querySelector, property, value) {

  $(querySelector).css(property, value);
  
}

function section_expand() {
  
  $(".collapse-button").on("click", function() {

    $(this).toggleClass("expand-button");
    $(this).parents(".project-section").children(".project-section-open").toggleClass("project-section-closed")

    if ($(this).hasClass("expand-button")) {
      
      console.log("has collapse class");

    } else {

      console.log("no collapse class");

    }

  })

}

function mobile_menu_nav() {

  $("#mobile-menu").on("click", function() {

    $("#mobile-menu").toggleClass("mobile-menu-open")

    if ($("#mobile-menu").hasClass("mobile-menu-open")) {

      setCss(".nav-menu-button-container", "display", "flex");

    } else {

      setCss(".nav-menu-button-container", "display", "none");

    }

  })

}

function switch_class_to(query_selector) {

  $(".filter-button").removeClass("filter-button-selected");
  $(query_selector).addClass("filter-button-selected");

}

function redirect(url) {

  $(location).attr('href',url);

}

function append_tag(element, parentselectorid, classname) {

  var selector = "#" + parentselectorid;
  var appendtext  = "<div class=" + classname + ">" + element + "</div>"; 
  $(selector).append(appendtext);

}

function append_link(element, src, parentselectorid, classname) {

  var selector = "#" + parentselectorid;
  var appendtext = "<div class=" + classname + " src=" + src + ">" +  element + "</div>";
  $(selector).append(appendtext);

}

function get_link_url(selector_class, link_src="src") {

  $(selector_class).on("click", function () {

      var element = $(this)[0];
      var src = $(element).attr(link_src);
      window.open(src, "_blank");

  })

}

export { setCss, section_expand, mobile_menu_nav, switch_class_to, redirect, append_tag, append_link, get_link_url };