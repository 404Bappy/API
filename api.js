//JavaScript Object// Notation
//--->> JSON (JAVASCRIPT OBJECT NOTATION)

const user = {id: 11, name: 'HAba Goba', job: 'baker'}
const stringified =JSON.stringify(user)
//console.log(user); 
//console.log(stringified); 


const shop = {
    name : 'KAGU STORE',
    address: 'hospital road',
    profit : 20000,
    products: ['laptop', 'mobile','speaker'],
    isExpensive: false

}

const shopStringified = JSON.stringify(shop);
console.log(shop);
console.log(shopStringified);