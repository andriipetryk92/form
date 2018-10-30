let dietsCloseLeft = document.getElementsByClassName('closeLeft');
let dietsLittleCircle = document.getElementsByClassName('circleLeft');

let dietsLittleCircleArray = [];
for (let i = 0; i < dietsLittleCircle.length; i++) {
    dietsLittleCircleArray.push(dietsLittleCircle[i]);
}

let clickLeft = (t) => {
    let checkedLeft = document.getElementsByClassName('checkedLeft');
    if (checkedLeft.length >= 2) {
        return false;
    } else if (changeTextLeft[t].style.color == 'black') {
        changeTextLeft[t].style.color = '#030303'
    } else {
        let e = getComputedStyle(dietsLittleCircleArray[t]);
        let b = e.getPropertyValue('background');
        dietsBigButtonArray[t].style.background = b;
        dietsLittleCircleArray[t].style.display = 'none';
        dietsCloseLeft[t].style.display = 'flex';
        dietsCloseLeft[t].style.color = 'white';
        changeTextLeft[t].style.color = 'white';
        dietsBigButtonArray[t].style.border = 'none';
        dietsBigButtonArray[t].classList.add('checkedLeft');
        dietsBigButtonArray[t].style.height = '37px';
    }
};

let dietsBigButtonArray = [];
let dietsButtonBig = document.getElementsByClassName('first');
let changeTextLeft = document.getElementsByClassName('changeTextLeft');
for (let t = 0; t < dietsButtonBig.length; t++) {
    dietsBigButtonArray.push(dietsButtonBig[t]);
    dietsBigButtonArray[t].onclick = clickLeft.bind(this, t);
}

let closedLeft = (g) => {
    dietsBigButtonArray[g].style.background = 'none';
    dietsLittleCircleArray[g].style.display = 'flex';
    dietsCloseLeft[g].style.display = 'none';
    changeTextLeft[g].style.color = 'black';
    dietsBigButtonArray[g].classList.remove('checkedLeft');
    dietsBigButtonArray[g].style.border = '1px solid grey';
};
for (let g = 0; g < dietsCloseLeft.length; g++) {
    dietsCloseLeft[g].onclick = closedLeft.bind(this, g);
}
let foodCloseRight = document.getElementsByClassName('closeRight');
let foodLittleCircleArray = [];
let foodLittleCircle = document.getElementsByClassName('circleRight');
for (let i = 0; i < foodLittleCircle.length; i++) {
    foodLittleCircleArray.push(foodLittleCircle[i]);
}

let clickRight = (t) => {
    let checkedRight = document.getElementsByClassName('checkedRight');
    if (checkedRight.length >= 1) {
        return false;
    } else if (changeTextRight[t].style.color == 'black') {
        changeTextRight[t].style.color = '#030303'
    } else {
        let a = getComputedStyle(foodLittleCircleArray[t]);
        let v = a.getPropertyValue('background');
        foodButtonBigArray[t].style.background = v;
        foodLittleCircleArray[t].style.display = 'none';
        foodCloseRight[t].style.display = 'flex';
        foodCloseRight[t].style.color = 'white';
        changeTextRight[t].style.color = 'white';
        foodButtonBigArray[t].style.border = 'none';
        foodButtonBigArray[t].classList.add('checkedRight');
        foodButtonBigArray[t].style.height = '37px';
    }
};

let foodButtonBigArray = [];
let foodButtonBig = document.getElementsByClassName('second');
let changeTextRight = document.getElementsByClassName('changeTextRight');
for (let t = 0; t < foodButtonBig.length; t++) {
    foodButtonBigArray.push(foodButtonBig[t]);
    foodButtonBigArray[t].onclick = clickRight.bind(this, t);
}

let closedRight = (g) => {
    foodButtonBigArray[g].style.background = 'none';
    foodLittleCircleArray[g].style.display = 'flex';
    foodCloseRight[g].style.display = 'none';
    changeTextRight[g].style.color = 'black';
    foodButtonBigArray[g].classList.remove('checkedRight');
    foodButtonBigArray[g].style.border = '1px solid grey';
};

for (let g = 0; g < foodCloseRight.length; g++) {
    foodCloseRight[g].onclick = closedRight.bind(this, g);
}
