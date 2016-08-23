function rand(no) {
  return Math.floor(Math.random() * no);
} 
a =[1, 2, 3, 4, 5, 6, 7, 8, 9];
var val = 0;
var pos = 0;
var run1 = false;
//console.log(second);
var run='true';
function start() {
  if (run=='false') {
    return;
  }
  run='false';
  second = setInterval(second1, 1000);
 t = 1;
while  (a.length > 0) {
  k = document.getElementById(t);
  ran = rand(9 - t);
  k.innerHTML = a[ran];
  a.splice(ran, 1);
  t = t + 1;
}
a = [1, 2, 3, 4, 5, 6, 7, 8, 9]; document.getElementById(34).innerHTML=5;
document.getElementById(34).style.color='white';
}

function stop() {
  clearInterval(second);
  run='true';
  
}

function Down(elem) {
  // console.log(elem);
  val = elem.innerHTML;
  pos = elem.id;
  run1 = true;
}

function Up(elem) {
  if (run1 === true) {
    //console.log("TRUE");
    temp = elem.innerHTML;
    elem.innerHTML = val;
    document.getElementById(pos).innerHTML = temp;
    run1 = false;
  }
}
//var seconds = setInterval(seconds5, 5000);

function seconds5() {
  t1 = rand(9);
  a.splice(t1, 1);
  t2 = rand(8);
  interchange(t1, t2);
  a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}

function interchange(t1, t2) {
  te1 = document.getElementById(t1);
  te2 = document.getElementById(t2);
  temp = te1.innerHTML;
  // console.log("interchanged" + temp + te2.innerHTML);
  te1.innerHTML = te2.innerHTML;
  te2.innerHTML = temp;
}
var count = 0;
//console.log(document.getElementById("count").innerHTML);
function second1() {
  count += 1;
  // console.log('TRUe');
  x = document.getElementById(34);
  // console.log(x.innerHTML);
  if (x.innerHTML > 1) {
    if (x.innerHTML < 4) {
      document.getElementById(34).style.color = 'red';
    }
    x.innerHTML -= 1;
  } else {
    document.getElementById(34).style.color = 'white';
    x.innerHTML = 5;
    t1 = rand(9);
    a.splice(t1, 1);
    t2 = rand(8);
    run1=false;
    interchange(t1, t2);
    a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
  var i = null;
  for (i = 1; i < 10; i++) {
   // console.log(i, document.getElementById(i).innerHTML);
    if (document.getElementById(i).innerHTML != i) {
      break;
    }
  }
  //console.log(i);
  if (i == 10) {
    alert("You won");
    console.log(count);
    if (document.getElementById("count").innerHTML !== "") {
      if (count < document.getElementById("count").innerHTML) {
        document.getElementById("count").innerHTML = count;
      }
    } else {
      document.getElementById("count").innerHTML = count;
      
    }
    count=0;
    clearInterval(second);
    run='true';
  }
}
