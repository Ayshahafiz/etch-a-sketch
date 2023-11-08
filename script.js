const grid = document.getElementById("grid");

let num = 1;

function container(){
    
    const cont = document.createElement("div");
    cont.className = `container ${num++}`;
    console.log(cont);
      for (let i = 0; i < 16; i++){
        let squareLoop = document.createElement("div");
        squareLoop.className = "square";
        squareLoop.style.cssText = 'width: 500%; height: 0; padding : 10px;;';
        squareLoop.addEventListener(
            "mouseover", event => {
              event. target. style. backgroundColor = "blue";

            });

          squareLoop.addEventListener(
            "mouseout", event => {
              console.log("out");
            });

        cont.appendChild(squareLoop);  
      }
    
    
    document.getElementById("grid").appendChild(cont);
}

const callFunction = (func,number) => {
    for (let i = 0; i < number; i++) {
        func()
    }
}

callFunction(container, 16);


/*function promptBox(){
  let n = prompt("Please enter the number of squares you would like :");
  if (n >= 1 || n <= 100){
    
    callFunction(container, n)
    
  }
} 
promptBox();*/