let dietsCloseElement = document.getElementsByClassName('closeLeft');
let dietsLittleCircle = document.getElementsByClassName('circleLeft');

let dietsLittleCircleArray = [];
for (let i = 0; i < dietsLittleCircle.length; i++) {
    dietsLittleCircleArray.push(dietsLittleCircle[i]);
}

let dietsClickElement = (t) => {
    let dietsChecked = document.getElementsByClassName('checkedLeft');
    if (dietsChecked.length >= 2) {
        return false;
    } else if (dietsChangeText[t].style.color == 'black') {
        dietsChangeText[t].style.color = '#030303'
    } else {
        let getStyleFromLittleCircle = getComputedStyle(dietsLittleCircleArray[t]);
        let getPropertyBackground = getStyleFromLittleCircle.getPropertyValue('background');
        dietsBigButtonArray[t].style.background = getPropertyBackground;
        dietsLittleCircleArray[t].style.display = 'none';
        dietsCloseElement[t].style.display = 'flex';
        dietsCloseElement[t].style.color = 'white';
        dietsChangeText[t].style.color = 'white';
        dietsBigButtonArray[t].style.border = 'none';
        dietsBigButtonArray[t].classList.add('checkedLeft');
        dietsBigButtonArray[t].style.height = '37px';
    }
};

let dietsBigButtonArray = [];
let dietsButtonBig = document.getElementsByClassName('first');
let dietsChangeText = document.getElementsByClassName('changeTextLeft');
for (let t = 0; t < dietsButtonBig.length; t++) {
    dietsBigButtonArray.push(dietsButtonBig[t]);
    dietsBigButtonArray[t].onclick = dietsClickElement.bind(this, t);
}

let dietsToCloseElement = (g) => {
    dietsBigButtonArray[g].style.background = 'none';
    dietsLittleCircleArray[g].style.display = 'flex';
    dietsCloseElement[g].style.display = 'none';
    dietsChangeText[g].style.color = 'black';
    dietsBigButtonArray[g].classList.remove('checkedLeft');
    dietsBigButtonArray[g].style.border = '1px solid grey';
};
for (let g = 0; g < dietsCloseElement.length; g++) {
    dietsCloseElement[g].onclick = dietsToCloseElement.bind(this, g);
}
let foodCloseElement = document.getElementsByClassName('closeRight');
let foodLittleCircleArray = [];
let foodLittleCircle = document.getElementsByClassName('circleRight');
for (let i = 0; i < foodLittleCircle.length; i++) {
    foodLittleCircleArray.push(foodLittleCircle[i]);
}

let foodClickElement = (t) => {
    let checkedRight = document.getElementsByClassName('checkedRight');
    if (checkedRight.length >= 1) {
        return false;
    } else if (foodChangeText[t].style.color == 'black') {
        foodChangeText[t].style.color = '#030303'
    } else {
        let getStyleFromLittleCircle = getComputedStyle(foodLittleCircleArray[t]);
        let getPropertyBackground = getStyleFromLittleCircle.getPropertyValue('background');
        foodButtonBigArray[t].style.background = getPropertyBackground;
        foodLittleCircleArray[t].style.display = 'none';
        foodCloseElement[t].style.display = 'flex';
        foodCloseElement[t].style.color = 'white';
        foodChangeText[t].style.color = 'white';
        foodButtonBigArray[t].style.border = 'none';
        foodButtonBigArray[t].classList.add('checkedRight');
        foodButtonBigArray[t].style.height = '37px';
    }
};

let foodButtonBigArray = [];
let foodButtonBig = document.getElementsByClassName('second');
let foodChangeText = document.getElementsByClassName('changeTextRight');
for (let t = 0; t < foodButtonBig.length; t++) {
    foodButtonBigArray.push(foodButtonBig[t]);
    foodButtonBigArray[t].onclick = foodClickElement.bind(this, t);
}

let foodToCloseElement = (g) => {
    foodButtonBigArray[g].style.background = 'none';
    foodLittleCircleArray[g].style.display = 'flex';
    foodCloseElement[g].style.display = 'none';
    foodChangeText[g].style.color = 'black';
    foodButtonBigArray[g].classList.remove('checkedRight');
    foodButtonBigArray[g].style.border = '1px solid grey';
};

for (let g = 0; g < foodCloseElement.length; g++) {
    foodCloseElement[g].onclick = foodToCloseElement.bind(this, g);
}
