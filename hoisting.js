

function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return "maybe";
}




function crazy() {
  // fix the code in here:
  thisIsCrazy();

  function thisIsCrazy(){
    console.log("hey!!!")
  }
}
crazy()();


function sayMyName() {
  // fix the code in here:
  var name = "Kristin";
  sayMy();

  function sayMy() {
    console.log(name);
  }
}

sayMyName()();
