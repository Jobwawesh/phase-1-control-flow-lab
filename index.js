function scuberGreetingForFeet(distance){

    let result;
    if (distance <= 400){
      result = 'This one is on me!';
      return result
  }else if (distance > 2000 && distance < 2500){
    result = 'I will gladly take your thirty bucks.';
    return result
  }
  else {
  result = 'No can do.'
  return result
  }
}

function ternaryCheckCity(city){
  if(city === "NYC"){
    return "Ok, sounds good.";
  }
  else{
    return "No go.";
  }
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':{
      return "Thank you so much.";
    }break;
    case 'not as generous':{
      return "Thank you.";
    }
    default :{
      return "Bye.";
    }
  }
}