

/*          Start ADD Buttons     */
let serves_2 = document.getElementById('serves_2');
let serves_4 = document.getElementById('serves_4');
let serves_6 = document.getElementById('serves_6');

let serves_2_table = document.getElementById('serves_2_table');
let serves_4_table = document.getElementById('serves_4_table');
let serves_6_table = document.getElementById('serves_6_table');

let addTr = (type, quantity) => {
    let length = document.getElementsByClassName('row_' + type).length;

    for (let index = 1; index <= quantity; index++) {
        let element = document.querySelectorAll('#myTable_2 tr.row_2:nth-child(' + (length + index) + ')')[0];
        let firstInput = '';
        let secondInput = '';
        let thirdInput = '';
        let firstSelect = '';
        let secondSelect = '';

        if (type !== 2 && element) {
            firstInput = element.getElementsByClassName('inputFirst_2')[0].value;
            secondInput = element.getElementsByClassName('inputSecond_2')[0].value;
            thirdInput = element.getElementsByClassName('inputThird_2')[0].value;
            firstSelect = element.getElementsByClassName('selectFirst_2')[0].value;
            secondSelect = element.getElementsByClassName('selectSecond_2')[0].value;
        }

        let row = document.getElementById('myTable_' + type).insertRow();
        row.innerHTML =
            '                       <th>' + (length + index) + '</th>\n' +
            '                       <td class="firstInput"><input value="' + firstInput + '" class="table_' + type + '_input inputFirst_2" placeholder="Ingredient" type="text" name="ingredient_' + (length + index) + '"></td>\n' +
            '                       <td class="secondInput"><input value="' + secondInput + '" class="table_' + type + '_input inputSecond_2" placeholder="Amount" type="text" name="amount_' + (length + index) + '"></td>\n' +
            '                       <td class="firstSelect"><select  class="table_' + type + '_input selectFirst_2" name="unit_' + (length + index) + '">\n' +
            '                           <option value="" disabled selected>Unit</option>\n' +
            '                           <option value="1">1</option>\n' +
            '                           <option value="2">2</option>\n' +
            '                           <option value="3">3</option>\n' +
            '                           <option value="4">4</option>\n' +
            '                       </select></td>\n' +
            '                       <td class="thirdInput"><input value="' + thirdInput + '" class="table_' + type + '_input inputThird_2" placeholder="Product URL" type="text" name="url_' + (length + index) + '"></td>\n' +
            '                       <td class="secondSelect"><select value="' + secondSelect + '" class="table_' + type + '_input selectSecond_2" name="city_' + (length + index) + '">\n' +
            '                           <option value="" disabled selected>City</option>\n' +
            '                           <option value="ternopil">Ternopil</option>\n' +
            '                           <option value="lviv">Lviv</option>\n' +
            '                           <option value="Kyiv">Kyiv</option>\n' +
            '                           <option value="dnipro">Dnipro</option>\n' +
            '                       </select></td>';
        row.className = "row_" + type;
    }

};

var startWithQauntity = 10;
var addMultipleQauntity = 10;

// start with columns
addTr(2, startWithQauntity);
addTr(4, startWithQauntity);
addTr(6, startWithQauntity);

// add single row
let addIngredient_2 = document.getElementById('oneIngredient_2');
let addIngredient_4 = document.getElementById('oneIngredient_4');
let addIngredient_6 = document.getElementById('oneIngredient_6');
addIngredient_2.onclick = function () { addTr(2, 1) };
addIngredient_4.onclick = function () { addTr(4, 1) };
addIngredient_6.onclick = function () { addTr(6, 1) };

//add ten rows
let tenIngredient_2 = document.getElementById('tenIngredient_2');
let tenIngredient_4 = document.getElementById('tenIngredient_4');
let tenIngredient_6 = document.getElementById('tenIngredient_6');
tenIngredient_2.onclick = function () { addTr(2, addMultipleQauntity) };
tenIngredient_4.onclick = function () { addTr(4, addMultipleQauntity) };
tenIngredient_6.onclick = function () { addTr(6, addMultipleQauntity) };

//update columns
['change', 'keyup'].forEach(function(event) {
    document.addEventListener(event, function (e) {
        if (Array.from(e.target.classList).indexOf('table_2_input') !== -1) {
            let index = Array.from(e.target.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode) + 1;
            document.querySelectorAll('#myTable_4 tr.row_4:nth-child(' + index + ') .' + e.target.classList[1] + ', #myTable_6 tr.row_6:nth-child(' + index + ') .' + e.target.classList[1] + '').forEach(function (el) {
                el.value = e.target.value;
            });
        }
    });
})



let serves_2_show = () => {
    serves_6.style.fontWeight = 'normal';
    serves_2.style.fontWeight = 'bold';
    serves_4.style.fontWeight = 'normal';
    serves_2_table.style.display = 'block';
    serves_4_table.style.display = 'none';
    serves_6_table.style.display = 'none';
};
serves_2.onclick = serves_2_show;

let serves_4_show = () => {
    serves_6.style.fontWeight = 'normal';
    serves_2.style.fontWeight = 'normal';
    serves_4.style.fontWeight = 'bold';
    serves_2_table.style.display = 'none';
    serves_4_table.style.display = 'block';
    serves_6_table.style.display = 'none';
};
serves_4.onclick = serves_4_show;

let serves_6_show = () => {
    serves_6.style.fontWeight = 'bold';
    serves_2.style.fontWeight = 'normal';
    serves_4.style.fontWeight = 'normal';
    serves_2_table.style.display = 'none';
    serves_4_table.style.display = 'none';
    serves_6_table.style.display = 'block';
};
serves_6.onclick = serves_6_show;

/*         End   ADD  Buttons     */


/*        Start     Tags   */
let closeLeft = document.getElementsByClassName('closeLeft');
let closeRight = document.getElementsByClassName('closeRight');
let litFirst = document.getElementsByClassName('circleLeft');


let littleFirst = [];
for (let i = 0; i < litFirst.length; i++) {
    littleFirst.push(litFirst[i]);
}

let clickLeft = (t) => {
    let checkedLeft = document.getElementsByClassName('checkedLeft');
    if (checkedLeft.length >= 2) {
        return false;
    } else if (changeTextLeft[t].style.color == 'black') {
        changeTextLeft[t].style.color = '#030303'
    } else {
        let e = getComputedStyle(littleFirst[t]);
        let b = e.getPropertyValue('background');
        bigFirst[t].style.background = b;
        littleFirst[t].style.display = 'none';
        closeLeft[t].style.display = 'flex';
        closeLeft[t].style.color = 'white';
        changeTextLeft[t].style.color = 'white';
        bigFirst[t].style.border = 'none';
        bigFirst[t].classList.add('checkedLeft');
        bigFirst[t].style.height = '37px';
    }
};

let bigFirst = [];
let first = document.getElementsByClassName('first');
let changeTextLeft = document.getElementsByClassName('changeTextLeft');
for (let t = 0; t < first.length; t++) {
    bigFirst.push(first[t]);
    bigFirst[t].onclick = clickLeft.bind(this, t);
}

let closedLeft = (g) => {
    bigFirst[g].style.background = 'none';
    littleFirst[g].style.display = 'flex';
    closeLeft[g].style.display = 'none';
    changeTextLeft[g].style.color = 'black';
    bigFirst[g].classList.remove('checkedLeft');
    bigFirst[g].style.border = '1px solid grey';
};
for (let g = 0; g < closeLeft.length; g++) {
    closeLeft[g].onclick = closedLeft.bind(this, g);
}

let littleSecond = [];
let litSecond = document.getElementsByClassName('circleRight');
for (let i = 0; i < litSecond.length; i++) {
    littleSecond.push(litSecond[i]);
}

let clickRight = (t) => {
    let checkedRight = document.getElementsByClassName('checkedRight');
    if (checkedRight.length >= 1) {
        return false;
    } else if (changeTextRight[t].style.color == 'black') {
        changeTextRight[t].style.color = '#030303'
    } else {
        let a = getComputedStyle(littleSecond[t]);
        let v = a.getPropertyValue('background');
        bigSecond[t].style.background = v;
        littleSecond[t].style.display = 'none';
        closeRight[t].style.display = 'flex';
        closeRight[t].style.color = 'white';
        changeTextRight[t].style.color = 'white';
        bigSecond[t].style.border = 'none';
        bigSecond[t].classList.add('checkedRight');
        bigSecond[t].style.height = '37px';
    }
};

let bigSecond = [];
let second = document.getElementsByClassName('second');
let changeTextRight = document.getElementsByClassName('changeTextRight');
for (let t = 0; t < second.length; t++) {
    bigSecond.push(second[t]);
    bigSecond[t].onclick = clickRight.bind(this, t);
}

let closedRight = (g) =>{
    bigSecond[g].style.background = 'none';
    littleSecond[g].style.display = 'flex';
    closeRight[g].style.display = 'none';
    changeTextRight[g].style.color = 'black';
    bigSecond[g].classList.remove('checkedRight');
    bigSecond[g].style.border = '1px solid grey';
};

for (let g = 0; g < closeRight.length; g++) {
    closeRight[g].onclick = closedRight.bind(this, g);
}

/*        End      Tags      */
