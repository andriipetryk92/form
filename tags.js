let dietsCloseElement = document.getElementsByClassName('closeDiets');
let dietsLittleCircle = document.getElementsByClassName('circleDiets');

let dietsLittleCircleArray = [];
for (let i = 0; i < dietsLittleCircle.length; i++) {
    dietsLittleCircleArray.push(dietsLittleCircle[i]);
}

let dietsClickElement = (t) => {
    let dietsChecked = document.getElementsByClassName('checkedDiets');
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
        dietsBigButtonArray[t].classList.add('checkedDiets');
        dietsBigButtonArray[t].style.height = '31px';
    }
};

let dietsBigButtonArray = [];
let dietsButtonBig = document.getElementsByClassName('first');
let dietsChangeText = document.getElementsByClassName('changeTextDiets');
for (let t = 0; t < dietsButtonBig.length; t++) {
    dietsBigButtonArray.push(dietsButtonBig[t]);
    dietsBigButtonArray[t].onclick = dietsClickElement.bind(this, t);
}

let dietsToCloseElement = (g) => {
    dietsBigButtonArray[g].style.background = 'none';
    dietsLittleCircleArray[g].style.display = 'flex';
    dietsCloseElement[g].style.display = 'none';
    dietsChangeText[g].style.color = 'black';
    dietsBigButtonArray[g].classList.remove('checkedDiets');
    dietsBigButtonArray[g].style.border = '1px solid #adadad';
};
for (let g = 0; g < dietsCloseElement.length; g++) {
    dietsCloseElement[g].onclick = dietsToCloseElement.bind(this, g);
}
let foodCloseElement = document.getElementsByClassName('closeFoods');
let foodLittleCircleArray = [];
let foodLittleCircle = document.getElementsByClassName('circleFoods');
for (let i = 0; i < foodLittleCircle.length; i++) {
    foodLittleCircleArray.push(foodLittleCircle[i]);
}

let foodClickElement = (t) => {
    let checkedFoods = document.getElementsByClassName('checkedFoods');
    if (checkedFoods.length >= 1) {
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
        foodButtonBigArray[t].classList.add('checkedFoods');
        foodButtonBigArray[t].style.height = '35px';
    }
};

let foodButtonBigArray = [];
let foodButtonBig = document.getElementsByClassName('second');
let foodChangeText = document.getElementsByClassName('changeTextFoods');
for (let t = 0; t < foodButtonBig.length; t++) {
    foodButtonBigArray.push(foodButtonBig[t]);
    foodButtonBigArray[t].onclick = foodClickElement.bind(this, t);
}

let foodToCloseElement = (g) => {
    foodButtonBigArray[g].style.background = 'none';
    foodLittleCircleArray[g].style.display = 'flex';
    foodCloseElement[g].style.display = 'none';
    foodChangeText[g].style.color = 'black';
    foodButtonBigArray[g].classList.remove('checkedFoods');
    foodButtonBigArray[g].style.border = '1px solid grey';
};

for (let g = 0; g < foodCloseElement.length; g++) {
    foodCloseElement[g].onclick = foodToCloseElement.bind(this, g);
}
