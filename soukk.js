// comment here ****
let names = 'soukk';
// document.write(name)
/*
  comment multi
  line  
 */
console.log(names)
// object variable
const person = {
    name: 'soukk',
    phone: '7777 7777',
    address: {
        village: 'phonthong',
        district:'Xaysettha',
        province: 'Vientiance'
    },
    offices: ['BitDigo','wecare','MTS'],
}
console.log(person)
console.log(person.name)
console.log(person.address.village)
console.log(person.offices[0])
// function
function sayHi(name) {
    alert(`Hi. ${name}`)
}
// sayHi('soukk')
// sayHi('Alex')

// function call api
async function getApi(){
   try {
       const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
       // send request api from server 
       // [http method: GET,POST,DELETE,PUT...etc]
       const req = await fetch(url, {
           method:'GET'
       })
       console.log(req)
       const res = await req.json() // convert data to [JSON data]
       console.log(res)
       // javaScript [DOM]
       document.getElementById('time').innerText = res.time.updated
       document.getElementById('USD').innerText = res.bpi.USD.rate
       document.getElementById('EUR').innerText = res.bpi.EUR.rate
       

   } catch (error) {
       console.error(error)
   }
}
// call function
getApi()