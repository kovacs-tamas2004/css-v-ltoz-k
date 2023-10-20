function changeColor() {
    let color = document.getElementById("allcolor").value;
    let text = document.getElementById("alltext").value;
    let doboz1 = document.getElementById("box1");
    let doboz2 = document.getElementById("box2");
    let doboz3 = document.getElementById("box3");
    let doboz4 = document.getElementById("box4");
    let doboz5 = document.getElementById("box5");
    let doboz6 = document.getElementById("box6");
    let doboz7 = document.getElementById("box7");
    let doboz8 = document.getElementById("box8");
    
    if(text == 1){
        doboz1.style.backgroundColor = color;
    }

    if(text == 2){
        doboz2.style.backgroundColor = color;
    }

    if(text == 3){
        doboz3.style.backgroundColor = color;
    }

    if(text == 4){
        doboz4.style.backgroundColor = color;
    }

    if(text == 5){
        doboz5.style.backgroundColor = color;
    }

    if(text == 6){
        doboz6.style.backgroundColor = color;
    }

    if(text == 7){
        doboz7.style.backgroundColor = color;
    }

    if(text == 8){
        doboz8.style.backgroundColor = color;
    }
}