var lives = 2;
var points = 0;

function clickbg() {
  lives = lives - 1;
  setText("livespot1", lives);
  setText("livespot2", lives);
  setText("livespot3", lives);
  setText("livespot4", lives);
  if (lives == 0) {
    setScreen("wrongscreen");
    lives = 2;
    setText("livespot1", lives);
    setText("livespot2", lives);
    setText("livespot3", lives);
    setText("livespot4", lives);
    points = 0;
    setText("pointspot1", points);
    onEvent("startoverbutton(wrong)", "click", function( ) {
      setScreen("beg1");
    });
    onEvent("gohomebutton(wrong)", "click", function( ) {
      setScreen("HomeScreen");
    });
  }
}

onEvent("h2playbutton(home)", "click", function( ) {
  setScreen("how2play");
});
onEvent("homepage(h2p)", "click", function( ) {
  setScreen("HomeScreen");
});
onEvent("Startbutton(home)", "click", function( ) {
  setScreen("beg1");
});

onEvent("begin1", "click", function( ) {
  setScreen("spot1");
});
onEvent("calculator2", "click", function( ) {
  setScreen("beg2");
});
onEvent("spot1background", "click", function( ) {
  clickbg();
});

onEvent("Begin2", "click", function( ) {
  points = points + 1;
  setText("pointspot2", points);
  lives = 2;
  setText("livespot2", lives);
  setScreen("spot2");
});
onEvent("fish2", "click", function( ) {
  setScreen("beg3");
});
onEvent("spot2background", "click", function( ) {
  clickbg();
});

onEvent("begin3", "click", function( ) {
  points = points + 1;
  setText("pointspot3", points);
  lives = 2;
  setText("livespot3", lives);
  setScreen("spot3");
});
onEvent("airplane2", "click", function( ) {
  setScreen("beg4");
});
onEvent("spot3background", "click", function( ) {
  clickbg();
});

onEvent("begin4", "click", function( ) {
  points = points + 1;
  setText("pointspot4", points);
  lives = 2;
  setScreen("spot4");
});
onEvent("sun2", "click", function( ) {
  setScreen("endscreen");
});
onEvent("spot4background", "click", function( ) {
  clickbg();
});

onEvent("gohome(end)", "click", function( ) {
  setScreen("HomeScreen");
});
