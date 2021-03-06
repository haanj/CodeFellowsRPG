

var textBox = new Image();

function showTextBox() {


  console.log('show Text Box');


  textBox.src = 'images/battleScene/upperTextBox1.png';
  textBox.xcoord = 4;
  textBox.ycoord = 7;


  ctx.drawImage(textBox, textBox.xcoord, textBox.ycoord);

}


function hideTextBox() {

  clearCanvas(ctx);
  ctx.fillStyle = 'black';
  ctx.fillRect(0,0,appWidth, appHeight);
  setTimeout(function(){
    ctx.drawImage(background,0,0);
    ctx.drawImage(monster,282,140);
    ctx.drawImage(heroStats,0,375);
    ctx.drawImage(battleOptions, 150, 370);
    ctx.drawImage(shield, 165, 375);
    //text stuff for heroStatus
    ctx.font = '14px Arial';
    ctx.fillStyle = '#121f1f';
    ctx.fillText('Hero Name',400,390);
    ctx.fillText('HP:',20,420);
    //text stuff for battleOptions
    ctx.fillText('Attack', 200, 395);


    console.log('transition complete!'); }, 10);
}

var count = 1;

var myText;

function setWinner(winner, loser) {

  myText = winner + ' defeats ' + loser;
}

function setAttacker(entity) {


  myText = entity + ' swings for ';
}

function setDamage(dmg) {

  myText += dmg;
}


function textAnimate(entity) {


  ctx.font = 'normal 16px "verdana"';
  ctx.fillStyle = '#121f1f';
  ctx.fillText(myText.substr(0, count), 28, 42);
  count++;

  if (count < myText.length + 1) {

    requestAnimationFrame(textAnimate);
  }

  if (count > myText.length) {

    count = 1;
    return;
  }
}
