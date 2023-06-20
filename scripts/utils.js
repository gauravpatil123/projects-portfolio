function setCss(querySelector, property, value) {

  $(querySelector).css(property, value);
  
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

function get_link_url() {

  $(".link-item").on("click", function () {

      console.log("clicked");
      var element = $(this)[0];
      var src = $(element).attr("src");
      window.open(src, "_blank");

  })

}

export { setCss, switch_class_to, redirect, append_tag, append_link, get_link_url };