var rgb = [255,0,0]
var toolOpacity = [255,255,100,255,255]
var sizeConst
var opacityConst

function setup() {
  createCanvas(700,600)
  background(0)
  sizeConst = 485
  opacityConst = 485
}

function draw() {
  //-----------PAINT MENUU-----------
  noStroke()
  fill(100)
  rect(600, 0, 100, height)
  //klean skreen
  stroke(0)
  strokeWeight(3)
  fill(0, toolOpacity[0])
  rect(620, 30, 60,40)
  //eraser
  fill(255, toolOpacity[1])
  rect(620, 100, 60, 40)
  //red color
  fill(255,0,0, toolOpacity[2])
  rect(620, 170, 60, 40)
  //green color
  fill(0,255,0, toolOpacity[3])
  rect(620, 240, 60, 40)
  //blue color
  fill(0,0,255, toolOpacity[4])
  rect(620, 310, 60, 40)

  //size modulator
  fill(0)
  rect(630, 400, 5, 170)
  fill(255,255,0)
  rect(625, sizeMod(), 15, 10)
  //opacity modulator
  fill(0)
  rect(665, 400, 5, 170)
  fill(255,0,255)
  rect(660, opacityMod(), 15, 10)

  //-------MENU ACXIONS---------
  if(mouseIsPressed && mouseX > 600){
    //klean skreen
    if (mouseX > 620 && mouseX < 680 && mouseY > 30 && mouseY < 70){
      background(0)
    }
    //activ8 er8ser
    if (mouseX > 620 && mouseX < 680 && mouseY > 100 && mouseY < 140){
      activeTool(1)
      activeColor(3)
    }
    //activate red color
    if (mouseX > 620 && mouseX < 680 && mouseY > 170 && mouseY < 210){
      activeTool(2)
      activeColor(0)
    }
    //activate grEEn color
    if (mouseX > 620 && mouseX < 680 && mouseY > 240 && mouseY < 280){
      activeTool(3)
      activeColor(1)
    }
    //activate blu color
    if (mouseX > 620 && mouseX < 680 && mouseY > 310 && mouseY < 340){
      activeTool(4)
      activeColor(2)
    }
  }

  //------PAINTING MEKHANISM---------
  if(mouseIsPressed && mouseX < 600){
    noStroke()
    fill(rgb[0],rgb[1],rgb[2], getOpacity(opacityConst))
    ellipse(mouseX, mouseY, getSize(sizeConst))
  }
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡
//reduce opacity of the tool button for indicate activeness
function activeTool(toolIndex){
  for(let i = 0; i < toolOpacity.length; i++){
    if (toolOpacity[i] != 255){
      toolOpacity[i] = 255
    }
  }
  toolOpacity[toolIndex] = 100
}

//select active rgb color or eraser
function activeColor(rgbIndex){
  for (let c = 0; c < rgb.length; c++){
    if(rgb[c] == 255){
      rgb[c] = 0
    }
  }

  if (rgbIndex < 3){
    rgb[rgbIndex] = 255
  }
}

//modulate size of paintbrushh (((move controller)))
function sizeMod(){
  if(mouseIsPressed && mouseX >= 630 && mouseX <= 635){
    if(mouseY >= 400 && mouseY <= 570){
      sizeConst = mouseY
      return sizeConst
    } else{
      return sizeConst
    }
  } else{
    return sizeConst
  }
}
//modulate opacity of paintBrushh (((move controoller)))
function opacityMod(){
  if(mouseIsPressed && mouseX >= 665 && mouseX <= 670){
    if(mouseY >= 400 && mouseY <= 570){
      opacityConst = mouseY
      return opacityConst
    } else{
      return opacityConst
    }
  } else{
    return opacityConst
  }
}

//returnz the ellipse size based on the size modulator location
function getSize(sizeModLoc){
  return map(sizeModLoc, 400, 570, 100, 3)
}
//return$ color opacity based on the op. mod. Y-location
function getOpacity(opModLoc){
  return map(opModLoc, 400, 570, 255, 1)
}