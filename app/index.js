function myFun1(){
    let random = Math.floor(Math.random() * 3)

    let rocks = document.getElementById("user").src="rock.png";

    if(random == 0){
        let rock = document.getElementById("comp").src="rock.png";
        if(rocks && rock){
            document.getElementById("result").innerHTML = "MATCH DRAW🤝🏻";
        }
    }
    else if(random == 1){
        let paper = document.getElementById("comp").src="paper.png";
        if(rocks && paper){
            document.getElementById("result").innerHTML = "YOU LOST THE GAME📵";
        }
    }
    else if(random == 2){
        let scissor = document.getElementById("comp").src="scissor.png";
        if(rocks && scissor){
            document.getElementById("result").innerHTML = "YOU WIN THE GAME🏆";
        }
    }
}

function myFun2(){
    let random = Math.floor(Math.random() * 3)

    let papers = document.getElementById("user").src="paper.png";

    if(random == 0){
        let rock = document.getElementById("comp").src="rock.png";
        if(papers && rock){
            document.getElementById("result").innerHTML = "YOU WIN THE GAME🏆";
        }
    }
    else if(random == 1){
        let paper = document.getElementById("comp").src="paper.png";
        if(papers && paper){
            document.getElementById("result").innerHTML = "MATCH DRAW🤝🏻";
        }
    }
    else if(random == 2){
        let scissor = document.getElementById("comp").src="scissor.png";
        if(papers && scissor){
            document.getElementById("result").innerHTML = "YOU LOST THE GAME📵";
        }
    }
}
function myFun3(){
    let random = Math.floor(Math.random() * 3)

    let scissors = document.getElementById("user").src="scissor.png";

    if(random == 0){
        let rock = document.getElementById("comp").src="rock.png";
        if(scissors && rock){
            document.getElementById("result").innerHTML = "YOU LOST THE GAME📵";
        }
    }
    else if(random == 1){
        let paper = document.getElementById("comp").src="paper.png";
        if(scissors && paper){
            document.getElementById("result").innerHTML = "YOU WIN THE GAME🏆";
        }
    }
    else if(random == 2){
        let scissor = document.getElementById("comp").src="scissor.png";
        if(scissors && scissor){
            document.getElementById("result").innerHTML = "MATCH DRAW🤝🏻";
        }
    }
}