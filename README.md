# etch-a-sketch

function smallSquare(){

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
        
}