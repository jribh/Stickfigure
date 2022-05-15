(function(){

let figColor='red';
let ratio = 0.8;
let figThickness = 1.5 * ratio + 1.5;

let svgFigSize = 1000;
let circleRadius = 3 * ratio + 2;

// hints

let hint1Btn = document.querySelector("#hint1-btn");
let hint2Btn = document.querySelector("#hint2-btn");
let hint3Btn = document.querySelector("#hint3-btn");


let hintBg= document.querySelector("#hint-bg");
let hint1 = document.querySelector("#hint-1");
let hint2 = document.querySelector("#hint-2");
let hint3 = document.querySelector("#hint-3");

hint1Btn.addEventListener('mouseover', ()=> {
  hintBg.style.display = "block";
  hint1.style.display = "flex";
})

hint1Btn.addEventListener('mouseout', ()=> {
  hintBg.style.display = "none";
  hint1.style.display = "none";
})

hint2Btn.addEventListener('mouseover', ()=> {
  hintBg.style.display = "block";
  hint2.style.display = "flex";
})

hint2Btn.addEventListener('mouseout', ()=> {
  hintBg.style.display = "none";
  hint2.style.display = "none";
})

hint3Btn.addEventListener('mouseover', ()=> {
  hintBg.style.display = "block";
  hint3.style.display = "flex";
})

hint3Btn.addEventListener('mouseout', ()=> {
  hintBg.style.display = "none";
  hint3.style.display = "none";
})


// let svgGrid = document.querySelector("#svg-grid");
let imageContainer = document.querySelector("#image-container");
let stickmanDiv = document.querySelector("#stickman-div");

let lockChekcbox = document.querySelector("#locked-checkbox");

let topHeading = document.querySelector("#top-heading");

// image buttons

let bgImage = document.querySelector("#bg-image");

let abstractmanButton = document.querySelector("#abstractman-button");
let samaButton = document.querySelector("#sama-button");
let eluraButton = document.querySelector("#elura-button");
let abstractNatarajaButton = document.querySelector("#abstractnataraja-button");
let fullsplitButton = document.querySelector("#fullsplit-button");
let halfsplitButton = document.querySelector("#halfsplit-button");
let natarajaButton = document.querySelector("#nataraja-button");
let twofiguresButton = document.querySelector("#twofigures-button");
let bharatnatyam1Button = document.querySelector("#bharatnatyam1-button");
let bharatnatyam2Button = document.querySelector("#bharatnatyam2-button");
let bhuleshwarButton = document.querySelector("#bhuleshwar-button");


abstractmanButton.addEventListener('click', function() {
  bgImage.src = "Images/abstractman.png";
  topHeading.innerText = "Human Body Abstraction"
})

samaButton.addEventListener('click', function() {
  bgImage.src = "Images/sama.jpeg";
  topHeading.innerText = "Sama"
})

eluraButton.addEventListener('click', function() {
  bgImage.src = "Images/elura.png";
  topHeading.innerText = "Dancing Figure"
})

abstractNatarajaButton.addEventListener('click', function() {
  bgImage.src = "Images/abstractnataraja.jpeg";
  topHeading.innerText = "Nataraja Pose Abstract"
})

fullsplitButton.addEventListener('click', function() {
  bgImage.src = "Images/fullsplit.jpeg";
  topHeading.innerText = "Cave Sculpture"
})

halfsplitButton.addEventListener('click', function() {
  bgImage.src = "Images/halfsplit.jpeg";
  topHeading.innerText = "Cave Sculpture"
})

natarajaButton.addEventListener("click", ()=> {
  bgImage.src = "Images/nataraja.png";
  topHeading.innerText = "Nataraja"
})



twofiguresButton.addEventListener('click', function() {
  bgImage.src = "Images/twofigures.jpeg";
  topHeading.innerText = "Two Figures"
})

bharatnatyam1Button.addEventListener("click", ()=> {
  bgImage.src = "Images/bharatnatyam1.png";
  topHeading.innerText = "Bharatnatyam Pose"
})

bharatnatyam2Button.addEventListener("click", ()=> {
  bgImage.src = "Images/bharatnatyam2.png";
  topHeading.innerText = "Bharatnatyam Pose"
})

bhuleshwarButton.addEventListener("click", ()=> {
  bgImage.src = "Images/bhuleshwar.png";
  topHeading.innerText = "Bhuleshwar Temple Devi"
})

// image move buttons

let moveUp = document.querySelector("#move-up");
let moveDown = document.querySelector("#move-down");
let moveLeft = document.querySelector("#move-left");
let moveRight = document.querySelector("#move-right");

let i=10;
let j=10;
let k=10;
let m=10;

moveUp.addEventListener('click', ()=> {
  bgImage.style.marginBottom = i + "px";
  i = i+10;
})

moveDown.addEventListener('click', function() {
  bgImage.style.marginTop = j + "px";
  j = j+10;
})

moveLeft.addEventListener('click', function() {
  bgImage.style.marginRight = k + "px";
  k = k+10;
})

moveRight.addEventListener('click', function() {
  bgImage.style.marginLeft = m + "px";
  m = m+10;
})

//image scale range

let range = document.querySelector("#scale-range");
let scaleValue;


range.addEventListener('input', ()=> {
  scaleValue = parseInt(range.value)*5 - 250;
  bgImage.width = 500 + scaleValue;
})






// fabric js

// let imageNataraja = document.querySelector("#nataraja-img");
// imageNataraja.style.width = "600px";

// let canvas = new fabric.Canvas("c");
// canvas.setHeight(innerHeight);
// canvas.setWidth(innerWidth);

// let imageNatarajaInstance = new fabric.Image(imageNataraja, {
//   // left:innerWidth/2,
//   // top:innerHeight/2,
//   scaleX : 0.57,
//   scaleY : 0.57
// });

// canvas.selection = true;

// canvas.add(imageNatarajaInstance);
// canvas.centerObject(imageNatarajaInstance)



// svg grid

// svgGrid.setAttribute("width", `${537 * ratio}px`);
// svgGrid.setAttribute("height", `${537 * ratio}px`);
// imageContainer.style.width = 450+'px';

var deg2rad = (180/Math.PI);

//el is svg
function svg(el, parent){
  var attr = arguments[arguments.length-1];

  if(!parent || !el){
    throw 'Error: Parent and type can not be null'
  }else if(parent.appendChild){

    // append the svg to the stickman div
    el = document.createElementNS('http://www.w3.org/2000/svg', el);
    parent.appendChild(el);
  }
  if(!parent.appendChild || attr != parent){
    for(var key in attr)
      el.setAttribute(key, attr[key]+'');
  }
  return el;
}

Element.prototype.X = function(){
  this.parentNode.removeChild(this);
}

Element.prototype.toFront = function(){
  this.parentNode.appendChild(this)
}

function Figure(src, draw){
  //a figure is composed of lines or circles
  //each line/circle contains 2 points, one flexible, one anchored to another point
  //they all go down to a root point, which has no parent.
  var pos = [
    src.pos[0], src.pos[1]
  ]
  this.root = new Root(src.angle, pos, false, draw);
  (function(parent, C){
    for(var i = 0; i < C.length; i++){
      var child = C[i]
      var el = new(child.type == 'line'?Line:Circle)(parent, child.angle, child.length , child.width, child.color)
      arguments.callee(el, child.C); //recurse
    }
  })(this.root, src.C);
  
  this.root.rA();
}


// for creating the circles
function createShapeHandle(shape, color){
  (shape.end = svg('circle', shape.draw, {
    fill: color || figColor,
    r: circleRadius
  })).on('mousedown',function(e){ //not very memsafe
    if(!e.button && !e.ctrlKey) current_shape = shape;
    selected_shape = shape;
  })
}


function Root(angle, pos, noend, draw){
  //this is a root point.
  var point = this;
  var draw = this.draw = draw;
  
  this.T = 'root'
  if(!noend) createShapeHandle(this, figColor);
  this.P = pos||[500,500]
  this.render()
  this.R = angle||0;
  this.C = [];
  
}

var rootproto = Root.prototype;

rootproto.all = function(){
  var all = [];
  (function(C){
    for(var i = 0; i < C.length; i++){
      all.push(C[i]);
      arguments.callee(C[i].C)
    }
  })(this.C);
  return all
}
rootproto.save = function(){
  for(var i = 0, C = []; i < this.C.length; i++){
    C.push(this.C[i].save())
  }
  return {
    type: this.T,
    pos: this.P,
    angle: Math.floor(this.R * deg2rad),
    C: C
  }
}

rootproto.render = function(){
  if(this.end) svg(this.end, {cx: this.P[0], cy: this.P[1]}).toFront();
}
rootproto.move = rootproto.rotate = function(x,y){
  this.P = [x,y]
}
rootproto.pos = function(){
  return this.P;
}
rootproto.angle = function(){
  return this.R;
}
rootproto.rA = function(){
  this.render()
  for(var l = this.C.length;l--;)
    this.C[l].rA();
}
rootproto.X = function(){
  this.deleted = true;
  
  while(this.C.length > 0)
    this.C[0].X();
  
  if(this.end)
    this.end.X();
}

function Shape(){} //empty object which is extended upon

var shapeproto = Shape.prototype;

shapeproto.angle = function(){
  return this.A.angle() + this.R
}
shapeproto.rotate = function(x, y){
  var pos = this.A.pos()
  var angle = Math.atan2(y - pos[1], x - pos[0]) - this.A.angle()
  this.R = angle;
}
shapeproto.move = function(x, y){
  var pos = this.A.pos()
  this.rotate(x, y);
  this.length = Math.sqrt(Math.pow(x-pos[0],2)+Math.pow(y-pos[1],2))
}
shapeproto.pos = function(){
  //time for some trigonometry!
  var anchor = this.A.pos()
  var dy = Math.sin(this.angle()) * this.length;
  var dx = Math.cos(this.angle()) * this.length;
  return [anchor[0] + dx, anchor[1] + dy];
}
shapeproto.rA = function(){
  this.render();
  for(var i = 0; i < this.C.length; i++){
    this.C[i].rA()
  }
}
shapeproto.X = function(){
  this.deleted = true;

  while(this.C.length > 0){
    this.C[0].X();
  }
  
  this.shape.X();
  if(this.end) this.end.X();
  
  //*
  for(var i = 0; i < this.A.C.length; i++){
    if(this.A.C[i] == this){
      this.A.C.splice(i,1);
    }
  }
  //*/
  
}


shapeproto.save = function(){
  for(var i = 0, C = []; i < this.C.length; i++){
    C.push(this.C[i].save())
  }
  return {
    type: this.T,
    length: Math.floor(this.length),
    width: this.width,
    color: this.color,
    angle: Math.floor(this.R * deg2rad),
    C: C
  }
}

function Line(anchor, angle, length, width, color, noend){
  //a shape is a rendering of 2 arbitrary points
  var line = this;
  this.T = 'line'
  this.A = anchor; //type = shape.
  var draw = this.draw = anchor.draw;
  
  this.C = [];
  this.length = length||50;
  this.R = angle/deg2rad;
  this.shape = svg('line', draw);//draw.path('')
  this.width = width||6;
  this.color = color||figColor;
  if(!noend) createShapeHandle(this);
  this.A.C.push(this);
  
  this.render();
  
}
var lineproto = Line.prototype = new Shape();

lineproto.render = function(){
  var anchor = this.A.pos()
  var end = this.pos()
  svg(this.shape, {
    x1: anchor[0], 
    y1: anchor[1], 
    x2: end[0], 
    y2: end[1], 
    'stroke-width': this.width+'px', 
    stroke: this.color, 
    'stroke-linecap': 'round'
  });
  if(this.end) svg(this.end, {cx: end[0], cy: end[1]}).toFront();
}


function Circle(anchor, angle, length, width, color, noend){
  //a shape is a rendering of 2 arbitrary points
  var circle = this;
  this.A = anchor; //type = shape.
  this.C = [];
  this.T = 'circle'
  this.length = length||50;
  var draw = this.draw = anchor.draw;
  this.R = angle/deg2rad;
  this.shape = svg('circle', draw);
  this.width = width||6;
  this.color = color||figColor;
  if(!noend) createShapeHandle(this);

  this.A.C.push(this);
  
  this.render();
  
}
var circleproto = Circle.prototype = new Shape();

circleproto.render = function(){
  var anchor = this.A.pos()
  var end = this.pos();
  svg(this.shape, {r: this.length/2, cx: (anchor[0]+end[0])/2, cy: (anchor[1]+end[1])/2, 'stroke-width': this.width+'px', stroke: this.color, fill: 'none'});
  if(this.end) svg(this.end, {cx: end[0], cy: end[1]}).toFront();
}


function $(id){return document.getElementById(id);}
function hide(ids){show(ids, true)}
function show(ids,hidden){
  ids.split(' ').map(function(x){$(x).style.display=hidden?'none':'inline'})
}


var length_locked = true;

lockChekcbox.addEventListener('change', ()=> {
  if(lockChekcbox.checked) {
    length_locked = true;
  } else {
    length_locked = false;
  }
})

String.prototype.on = function(event, handler){
  $(this).on(event, handler);
}

String.prototype.pc = function(handler){
  $(this).parentNode.on('click', handler);
}


Element.prototype.on = function(event, handler){
  this.addEventListener(event, handler, true);
}

Element.prototype.text = function(text){
  this.textContent = this.innerText = text;
}

var domstore = {};

Element.prototype.data = function(attr, obj){
  if(!this.__magicDataID) this.__magicDataID = Math.random().toString(36).substr(4);
  if(!domstore[this.__magicDataID]) domstore[this.__magicDataID] = {};
  if(obj){
    domstore[this.__magicDataID][attr] = obj;
  }
  return domstore[this.__magicDataID][attr];
}


var draw, current_shape, fig_list = [];			


function clone(obj){ //recursive object cloning function
  if(obj.pop){
    var nobj = [];
    for(var i = 0, l = obj.length; i < l; i++) nobj.push(clone(obj[i]));
    return nobj;
  }else if(typeof obj == 'object'){
    var nobj = {};
    for(var i in obj) nobj[i] = clone(obj[i]);
    return nobj;
  }else return obj;
}


//function for adding the stickman to canvas

function addFigure(name, src, out){

  var magicness = out||src;

  // make figure and set its position
  var fg = clone(magicness);
  fg.pos[0] = svgFigSize/2;
  fg.pos[1] = svgFigSize/2;
  fig_list.push(new Figure(fg, draw));
  
}


draw = svg('svg', stickmanDiv);
//draw is the svg

draw.style.zIndex = "1";

// let chakraImage = document.createElement('img');
// chakraImage.src="gridchakra.png";
// // chakraImage.setAttribute('height', '542');
// chakraImage.style.position = 'absolute';
// chakraImage.style.zIndex = 1;
// // chakraImage.style.top = 0;

// stickmanDiv.appendChild(chakraImage);



addFigure('Man',
  {
    type:'root',
    'pos':[200,200],
    angle : 0,
    C : [ 
          {type:'line',length:ratio*120,'width':figThickness,color:figColor,angle:125, C:[{type:'line',length:ratio*90,'width':figThickness,color:figColor,angle:282, C:[{type:'line',length:ratio*30,'width':figThickness,color:figColor,angle:133, C:[]}]}]},
          {type:'line',length:ratio*120,'width':figThickness,color:figColor,angle:55, C:[{type:'line',length:ratio*90,'width':figThickness,color:figColor,angle:-282, C:[{type:'line',length:ratio*30,'width':figThickness,color:figColor,angle:-133, C:[]}]}]},
          {
            type:'line',length:ratio*95,'width':figThickness,color:figColor,angle:-90,
            C : [
                  {type:'line',length:ratio*15,'width':figThickness,color:figColor,angle:0, C:[{type:'circle',length:ratio*40,'width':figThickness,color:figColor,angle:0,C:[]}]},
                  {type:'line',length:ratio*43,'width':figThickness,color:figColor,angle:90, C:[{type:'line',length:ratio*70,'width':figThickness,color:figColor,angle:65, C:[{type:'line',length:ratio*80,'width':figThickness,color:figColor,angle:92, C:[]}]}]},
                  {type:'line',length:ratio*43,'width':figThickness,color:figColor,angle:-90, C:[{type:'line',length:ratio*70,'width':figThickness,color:figColor,angle:-65, C:[{type:'line',length:ratio*80,'width':figThickness,color:figColor,angle:-92, C:[]}]}]}
                ]
          }
        ]
  }
)

// 120 90 30 15 40 43 70 80

// important for setting svg dimensions when resizing window
this.onresize = function(){
  svg(draw, {width: svgFigSize, height: svgFigSize});
}

function addFrame(noselect){
  onresize();
}
addFrame()

let l = innerWidth/2 - svgFigSize/2;
let h = innerHeight/2 - svgFigSize/2;


'stickman-div'.on('mousemove', function(event){
  event.preventDefault()

  // to move the man around
  if(current_shape){
    if(event.shiftKey || !length_locked){
			
      current_shape.move(event.clientX - l, event.clientY - h)
      //somewhat a misnomer, its more of resizing
    }else{
			
    }
    current_shape.rotate(event.clientX - l, event.clientY - h)
    current_shape.rA()
    //render_info();
  }
  
});


'stickman-div'.on('mouseup', function(event){
	event.preventDefault()
	current_shape = null;
  is_resize = 0;
})





})()