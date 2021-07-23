const products = document.querySelector("#products");
const orders = document.querySelector("#orders");
const pack = document.querySelector("#package");
const summary = document.querySelector(".calc__summary ul").children;
const total = document.querySelector("#total-price");
const drop = document.querySelector(".select__dropdown");
const accounting = document.querySelector("#accounting");
const terminal = document.querySelector("#terminal");
console.log(summary[0]);

const prices = {
    product: 0.5,
    order: 0.7,
    basic: 0,
    professional: 10,
    premium: 20,
    prodResult: 0,
    orderResult: 0,
    package: 0,
    accounting: 12.5,
    terminal: 7.5,
    accResult: 0,
    termResult: 0
}


products.addEventListener("change", function (){
    let result = 0;
    if(products.value > 0){
        prices.prodResult = products.value * prices.product;
        summary[0].style.display = "flex";
        summary[0].querySelector(".item__calc").innerHTML = `${products.value} * $0.5`;
        summary[0].querySelector(".item__price").innerHTML = `$${prices.prodResult.toFixed(2)}`
    }
    updateTotal()
    console.log(result);
} )
orders.addEventListener("change", function (){
    let result = 0;
    if(orders.value > 0){
        prices.orderResult = orders.value * prices.order;
        summary[1].style.display = "flex";
        summary[1].querySelector(".item__calc").innerHTML = `${orders.value} * $0.7`;
        summary[1].querySelector(".item__price").innerHTML = `$${prices.orderResult.toFixed(2)}`
    }
    updateTotal()
    console.log(result);
} )

accounting.addEventListener("click", function (){
    if(accounting.checked){
        summary[3].style.display = "flex"
        summary[3].querySelector(".item__price").innerHTML = `$${prices.accounting}`
        prices.accResult += prices.accounting
        updateTotal()

    }else{
        summary[3].style.display = "none"
        prices.accResult -= prices.accounting
        updateTotal()
    }
})
terminal.addEventListener("click", function (){
    if(terminal.checked){
        summary[4].style.display = "flex"
        summary[4].querySelector(".item__price").innerHTML = `$${prices.terminal}`
        prices.termResult += prices.terminal
        updateTotal()

    }else{
        summary[4].style.display = "none"
        prices.termResult -= prices.terminal
        updateTotal()
    }
})


pack.addEventListener("click", function (e){
    console.log(e.target);
    drop.style.display = "block";
    if(e.target.dataset.value === "basic"){
        pack.querySelector(".select__input").innerText = e.target.dataset.value
        drop.style.display = "none";
        summary[2].style.display = "flex";
        summary[2].querySelector(".item__calc").innerHTML = `${e.target.dataset.value}`;
        summary[2].querySelector(".item__price").innerHTML = `$${prices.basic}`
        prices.package = prices.basic;
        updateTotal()
    }else if(e.target.dataset.value === "professional"){
        pack.querySelector(".select__input").innerText = e.target.dataset.value
        drop.style.display = "none";
        summary[2].style.display = "flex";
        summary[2].querySelector(".item__calc").innerHTML = `${e.target.dataset.value}`;
        summary[2].querySelector(".item__price").innerHTML = `${prices.professional}`
        prices.package = prices.professional;
        updateTotal()
    }else if(e.target.dataset.value === "premium"){
        pack.querySelector(".select__input").innerText = e.target.dataset.value
        drop.style.display = "none";
        summary[2].style.display = "flex";
        summary[2].querySelector(".item__calc").innerHTML = `${e.target.dataset.value}`;
        summary[2].querySelector(".item__price").innerHTML = `${prices.premium}`
        prices.package = prices.premium;
        updateTotal()
    }

})

function updateTotal(){
    let result = prices.prodResult + prices.orderResult + prices.package + prices.accResult + prices.termResult;
    total.innerHTML = `TOTAL: $${result.toFixed(2)}`;
    if(result > 0){
        total.style.display = "flex";
    }else{
        total.style.display = "none"
    }

}
// total.innerText = prices.prodResult + prices.orderResult;
// console.log(total.innerText);


function calculator(a, b){

}