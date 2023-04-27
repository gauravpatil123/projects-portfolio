function setCss(querySelector, property, value) {

  $(querySelector).css(property, value);
  
}

function switch_class_to(query_selector) {

  $(".filter-button").removeClass("filter-button-selected");
  $(query_selector).addClass("filter-button-selected");

}

export { setCss, switch_class_to };