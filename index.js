function scuberGreetingForFeet(ride){
  var charge;
  if (ride <=400){
    charge = "This one is on me!";
  }
  else if (ride > 400 && ride < 2000) {
    charge = "That will be twenty bucks.";
  }
  else if (ride <= 2500){
    charge ="I will gladly take your thirty bucks.";
  }
  else {
    charge = "No can do.";
  }
  return charge;
}

function ternaryCheckCity(city){
  var response;
  if (city=="NYC"){
    response = "Ok, sounds good.";
  }
  else {
    response = "No go.";
  }
  return response;
}

function switchOnCharmFromTip(tip){
  var charm;
  if (tip =="generous"){
    charm="Thank you so much.";
  }
  else if(tip == "not as generous"){
    charm="Thank you.";
  }
  else {
    charm = "Bye.";
  }
  return charm;
}