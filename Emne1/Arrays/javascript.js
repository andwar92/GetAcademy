//Model
const app = document.getElementById('app');
let vendor = ['Sword',
    'Shield',
    'Health potion',
    'Dagger',]
let isTrue = false;
let backpack = [];

//Veiw
updateVeiw();
function updateVeiw() {
    app.innerHTML = /*HTML*/`
    <div>
        <h1>Vendor</h1>
        <ul>${showVendor()}</ul>
    </div>
    <div>
    <h1>Backpack</h1>
        <button onclick = "openInventory()"> Inventory </button> 
        <ul>
            ${isTrue ? showBackpack() : ''}
        </ul>
    </div>
    `;
}

function showVendor() {
    let html = '';
    for (let i = 0; i < vendor.length; i++) {
        html += /*HTML*/`
        <li>
            <p>${vendor[i]}</p>
            <button onclick="addItem('${vendor[i]}', ${i})">Add</button>
        </li>`;
    }
    return html;
};

function showBackpack() {
    let html = '';
    for (let i = 0; i < backpack.length; i++) {
        html += /*HTML*/`<li>
    <p>${backpack[i]}</p>
    <button onclick="sellItem('${backpack[i]}', ${i})">Sell</button>
    </li>`;
    }
    return html;
};

//Controller
function moveItem(item, index, toArray, fromArray) {
    toArray.push(item)
    fromArray.splice(index, 1)
    updateVeiw();
};
function sellItem(item, index) {
    vendor.push(item)
    backpack.splice(index, 1)
    updateVeiw();
};

function addItem(item, index) {
    backpack.push(item)
    vendor.splice(index, 1)
    updateVeiw();
};

function openInventory() {
    isTrue = !isTrue;
    updateVeiw();
};


