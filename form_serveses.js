let serves_4_table = document.getElementsByClassName('serves_4_table')[0];
let serves_6_table = document.getElementsByClassName('serves_6_table')[0];

serves_4_table.style.display = 'none';
serves_6_table.style.display = 'none';

function selectOption(event) {
    event.options[event.selectedIndex].setAttribute('selected', '');
}

let addTr = (type, quantity, containerNumber = 0) => {
    let length = document.querySelectorAll('.all:nth-child(' + (containerNumber + 1) + ') .row_' + type).length;

    for (let index = 1; index <= quantity; index++) {
        let element = document.querySelectorAll('.all:nth-child(' + (containerNumber + 1) + ') .myTable_2 tr.row_2:nth-child(' + (length + index) + ')')[0];
        let firstInput = '';
        let secondInput = '';
        let thirdInput = '';
        if (type !== 2 && element) {
            firstInput = element.getElementsByClassName('inputFirst_2')[0].value;
            secondInput = element.getElementsByClassName('inputSecond_2')[0].value;
            thirdInput = element.getElementsByClassName('inputThird_2')[0].value;
        }

        let row = document.querySelectorAll('.all:nth-child(' + (containerNumber + 1) + ') .myTable_' + type)[0].insertRow();
        row.innerHTML =
            `                       <th>${length + index}</th>\n` +
            `                       <td class="firstInput"><input value="${firstInput}" class="table_${type}_input inputFirst_2" placeholder="Ingredient" type="text" name="ingredient_${length + index}"></td>\n` +
            `                       <td class="secondInput"><input value="${secondInput}" class="table_${type}_input inputSecond_2" placeholder="Amount" type="text" name="amount_${length + index}"></td>\n` +
            `                       <td class="firstSelect"><select class="table_${type}_input selectFirst_2" name="unit_${length + index}" onchange="selectOption(this);">\n` +
            `                           <option value="" disabled selected>Unit</option>\n` +
            `                           <option value="1">1</option>\n` +
            `                           <option value="2">2</option>\n` +
            `                           <option value="3">3</option>\n` +
            `                           <option value="4">4</option>\n` +
            `                       </select></td>\n` +
            `                       <td class="thirdInput"><input value="${thirdInput}" class="table_${type}_input inputThird_2" placeholder="Product URL" type="text" name="url_${length + index}"></td>\n` +
            `                       <td class="secondSelect"><select class="table_${type}_input selectSecond_2" name="city_${length + index}" onchange="selectOption(this);">\n` +
            `                           <option value="" disabled selected>City</option>\n` +
            `                           <option value="ternopil">Ternopil</option>\n` +
            `                           <option value="lviv">Lviv</option>\n` +
            `                           <option value="Kyiv">Kyiv</option>\n` +
            `                           <option value="dnipro">Dnipro</option>\n` +
            `                       </select></td>`;
        row.className = "row_" + type;
    }
};

let startWithQauntity = 10;

addTr(2, startWithQauntity);
addTr(4, startWithQauntity);
addTr(6, startWithQauntity);

['change', 'keyup'].forEach(function (event) {
    document.addEventListener(event, function (e) {
        if (Array.from(e.target.classList).indexOf('table_2_input') !== -1) {
            let index = Array.from(e.target.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode) + 1;
            document.querySelectorAll('.myTable_4 tr.row_4:nth-child(' + index + ') .' + e.target.classList[1] + ', .myTable_6 tr.row_6:nth-child(' + index + ') .' + e.target.classList[1] + '').forEach(function (el) {
                el.value = e.target.value;
                el.options && el.selectedIndex && selectOption(el);
            });
        }
    });
});

document.addEventListener('click', function (e) {
    if (Array.from(e.target.classList).indexOf('serves') !== -1) {
        let index = Array.from(e.target.parentNode.children).indexOf(e.target) + 1;
        let serves = e.target.parentNode.parentNode.getElementsByClassName('serves');
        for (let i = 0; i < serves.length; i++) {
            serves[i].style.fontWeight = 'normal';
        }
        e.target.style.fontWeight = 'bold';
        let serves_tables = e.target.parentNode.parentNode.getElementsByClassName('serves_table');
        for (let i = 0; i < serves_tables.length; i++) {
            serves_tables[i].style.display = 'none';
        }
        e.target.parentNode.parentNode.getElementsByClassName('serves_' + index * 2 + '_table')[0].style.display = 'block';
    } else if (Array.from(e.target.classList).indexOf('add_button') !== -1) {
        addingNewRows(e);
    }
});

let addingNewRows = (e) => {
    const allContainers = Array.prototype.slice.call(document.querySelectorAll('.my_form .all'));
    const currentAllContainer = e.target.parentNode.parentNode.parentNode;
    const currentAllContainerIndex = allContainers.indexOf(currentAllContainer);
    const currentServesTable = e.target.parentNode.parentNode;
    const servesTableNumber = Array.prototype.slice.call(currentAllContainer.getElementsByClassName('serves_table')).indexOf(currentServesTable);
    const tableTypeToAppend = (servesTableNumber + 1) * 2;
    const rows_to_add = parseInt(e.target.dataset.type);
    addTr(tableTypeToAppend, rows_to_add, currentAllContainerIndex);
};
let addNewPlace = () => {
    let newIng = document.getElementsByClassName('all')[0];
    let last = document.getElementsByClassName('last')[0];
    let cln = newIng.cloneNode(true);
    document.getElementsByClassName('my_form')[0].insertBefore(cln, last);
};

let newButton = document.getElementById('newForm');
newButton.onclick = addNewPlace;

let return_object = () => {
    let obj = {};
    document.querySelectorAll('.all:first-child .serves_table').forEach(function (table) {
        let tableName = table.getElementsByTagName('table')[0].classList[0];
        obj[tableName] = {};

        table.querySelectorAll('tr').forEach(function (row) {
            let rowName = row.getElementsByTagName('th')[0].innerHTML;
            obj[tableName][rowName] = {};
            row.querySelectorAll('input, select').forEach(function (input) {
                obj[tableName][rowName][input.name] = input.value;
            })
        })
    });
    let objectJSON = JSON.stringify(obj);
    document.getElementById('objectPlace').innerHTML = objectJSON;
    return false;
};
