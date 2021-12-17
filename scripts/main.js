
function buttonClick(){
    const outBox = document.getElementById('outBox');
    const inBox = document.getElementById("inBox");
    const inputString = inBox.value;
    outBox.value = shift(inputString);
}

function shift(str){
    const OFFSET = 1;
    var outputString = "";
    for(let i = 0; i < str.length ; i++){
      var char = str.charCodeAt(i);
      outputString += String.fromCharCode(char - OFFSET)
    }
    console.log(outputString)
    return outputString;
  }