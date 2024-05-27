let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Nichat Compression Ignition Engine',
        image: 'op.png',
        price: 400000 
    },
    {
        id: 2,
        name: 'Internal Combustion Engine ',
        image: '2.png',
        price: 45000 
    },
    {
        id: 3,
        name: 'Cylindrical Air Filter',
        image: '3.png',
        price: 750 
    },
    {
        id: 4,
        name: 'Toyota Genuine Shock Absorber',
        image: '4.png',
        price: 14000 
    },
    {
        id: 5,
        name: ' Alternator',
        image: '5.png',
        price: 3200 
    },
    {
        id: 6,
        name: 'Denso Spark Plug',
        image: '8.png',
        price: 6000 
        
    },
    {
        id: 7,
        name: 'EAGLE F1 Tire',
        image: '6.png',
        price: 7000 
        
    },
    {
        id: 8,
        name: 'Cinturato P1',
        image: '9.png',
        price: 13000 
      
    },
    {
        id: 9,
        name: 'MAP5 ',
        image: '10.png',
        price: 8000 
      
    }
    ,
    {
        id: 10,
        name: 'APLLO ALNAC 4G ',
        image: '11.png',
        price: 8200 
      
    },
    {
        id: 11,
        name: 'APOLO QUANTUM PLUS',
        image: '12.png',
        price: 14000 
      
    },
    {
        id: 12,
        name: 'APOLLO ALTUST ',
        image: '13.png',
        price: 13000 
      
    },
    {
        id: 13,
        name: 'VOLVO NX120-7 ',
        image: '14.png',
        price: 14000 
      
    },
    {
        id: 14,
        name: 'KRANK PREMIUM N50ZL ',
        image: '15.png',
        price: 11500 
      
    },
    {
        id: 15,
        name: 'HIMKO SILVA  ',
        image: '16.png',
        price: 12500 
      
    },
    {
        id: 16,
        name: 'LUCAS ULTIMA SMF NX120 ',
        image: '17.png',
        price: 15000 
      
    },
    {
        id: 17,
        name: 'YUASA MAINTENANCE ',
        image: '18.png',
        price: 10000 
      
    } ,
    {
        id: 18,
        name: 'GLOBATT ACE BATTERY ',
        image: '19.png',
        price: 10500 
      
    }
];


let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="img/${value.image}"/>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}