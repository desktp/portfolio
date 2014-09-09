function OnHover (divId){
  this.style.backgroundImage = "url(img/buttons/"+this.id+"-hover.gif";
}

function OffHover (divId){
}

function addEvent(evnt, elem, func) {
  if (elem.addEventListener)  // W3C DOM
    elem.addEventListener(evnt,func,false);
  else if (elem.attachEvent) { // IE DOM
    elem.attachEvent("on"+evnt, func);
  }
  else { // No much to do
    elem[evnt] = func;
  }
}

function removeClass(el, className){
  el.className = el.className.replace(className, "");
}

function addClass(el, className){
  el.className = el.className + " " +  className;
}

function onclick(evt){
  evt.preventDefault();
  ChangeActiveFrame(this.hash.substring(1));
}

var anchors = document.getElementsByTagName('a');

for(var i in anchors){
  if(!anchors[i]['href']) continue;
  addEvent("click", anchors[i], onclick);
  addEvent("mouseover", anchors[i], OnHover);
  addEvent("mouseout", anchors[i], OffHover);
}

var body = document.getElementsByTagName('body');
addEvent("hashchange", body, onhashchange)

function ChangeActiveFrame(activeDiv){
  var activeButton = activeDiv.substring(8);
  var buttonToChange = document.getElementById(activeButton);
  var otherButtons = document.getElementsByClassName('button');

  var otherDivs = document.getElementsByClassName('frame');

  for (var i = otherDivs.length - 1; i >= 0; i--) 
  {
    removeClass(otherDivs[i],"show");
  };
  
  for (var i =otherButtons.length - 1; i >= 0; i--)
  {
    otherButtons[i].style.backgroundImage = "url('img/buttons/"+otherButtons[i].id+"-default.gif')";
  };

  if(activeButton != ""){
    buttonToChange.style.backgroundImage = "url('img/buttons/"+buttonToChange.id+"-active.gif')";

    addClass(document.getElementById(activeDiv), "show");
  }
}