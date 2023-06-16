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

export { setCss, switch_class_to, redirect, append_tag };