let btn = document.getElementById("getprice");
let price = document.getElementById("price");
let coinhead = document.getElementById("coin");
let updTime = document.querySelector("#updTime");

function getPrice() {
    let url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            coinhead.innerHTML = `Current Bitcoin Price`;
            price.innerHTML = data.bpi['USD'].symbol + data.bpi['USD'].rate;
            updTime.innerHTML = new Date().toLocaleString();
        });
}



const changeData = (id) => {
    console.log('run');
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`;
    fetch(url)
        .then(function (response) {
            return response.json(); 
        })
        .then(function (data) {
            console.log(data);
            coinhead.innerHTML = `Current ${id} Price`;
            price.innerHTML = `${data[id].usd} $`;
            updTime.innerHTML = new Date().toLocaleString();
        });
}



getPrice();

btn.addEventListener("click", function () {
    getPrice()
});

