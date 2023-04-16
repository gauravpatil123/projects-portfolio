function setCss(querySelector, property, value) {

  $(querySelector).css(property, value);

}

function mouseEnter_enter_button() {

  $("#enter-button").html("Enter");
  setCss(".arrow-1", "display", "none");
  setCss(".arrow-2", "display", "none");

}

async function mouseExit_enter_button() {

  $("#enter-button").html("")
  await new Promise(r => setTimeout(r, 500));
  setCss(".arrow-1", "display", "block");
  setCss(".arrow-2", "display", "block");

}

function hover_enter_button() {

  $("#enter-button-link-wrapper").hover(mouseEnter_enter_button, mouseExit_enter_button);

}

function replaceHtmlText(text, selecterquery) {

  $(selecterquery).html("");
  $(selecterquery).html(text);

}

async function typeWelcomeText() {

  var textWrapper = document.querySelector('.text-animation .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/[a-zA-Z0-9.!]/g, "<span class='letter'>$&</span>");

  anime.timeline()//{loop: true})
    .add({
      targets: '.text-animation .line',
      scaleY: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700
    })
    .add({
      targets: '.text-animation .line',
      translateX: [0, document.querySelector('.text-animation .letters').getBoundingClientRect().width + 10],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100
    })
    .add({
      targets: '.text-animation .letter',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=775',
      delay: (el, i) => 34 * (i+1)
    })
    .add({
      targets: '.text-animation',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });

}

function typeAnimation(word) {

  replaceHtmlText(word, ".letters");
  setCss(".text-animation", "opacity", 1);
  typeWelcomeText();

}

function redirect(url) {

  (location).attr('href',url);
  //$("body").html("click is triggered")

}

async function click_enter(url) {

  $("#enter-button-link-wrapper").click(function(e){

    e.preventDefault();
    //$("body").transition({backgroundColor}, 0.6, ease);
    //$("body").css({ backgroundColor : "#3D6599"});
    $("body").animate({
      backgroundColor : "#3D6599"
    }, 1000);

    $("#welcome-text").animate({
      color : "#ffb7af"
    }, 1000);

    setCss(".arrows", "display", "none");
    setCss("#enter-button-link-wrapper", "display", "none");


  });

}

async function main() {

  //Enter button
  hover_enter_button();

  var homepage_url = "./pages/homepage.html";
  click_enter(homepage_url);

  //Welcome text animation
  typeWelcomeText();
  await new Promise(r => setTimeout(r, 4000));
  typeAnimation("I am Gaurav");
  await new Promise(r => setTimeout(r, 4000));
  typeAnimation("Welcome");
  await new Promise(r => setTimeout(r, 4000));

  //Setting final text
  setCss(".text-animation", "opacity", 1);
  setCss(".line", "display", "none");
  replaceHtmlText("Welcome.", ".letters");

}

main();


