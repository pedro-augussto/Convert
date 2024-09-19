// COTAÇÃO 19/19/2024

const USD = 5.42;
const EUR = 6.04; 
const GGP = 7.20; 

const form = document.querySelector("form");
const amount =  document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById('description');
const result = document.getElementById("result");


amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex, "");
});


form.onsubmit = (event) => {
    event.preventDefault();

    switch(currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$");
            break;
            case "EUR":
                convertCurrency(amount.value, EUR, "€");
            break;
            case "GGP":
                convertCurrency(amount.value, GGP, "£");
            break;
        }
}

function convertCurrency(amount,price,symbol){
    try {
       description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;
       let total = amount * price;
        
        if(isNaN(total)) {
            return alert("Por favor, digite o valor corretamente.");
        }

       result.textContent = formatCurrencyBRL(total);
       footer.classList.add("show-result");
    } catch (error) {
        footer.classList.remove("show-result");
        console.log(error);
        alert("Não foi possivel converter. Tente novamente.");
    }
}


function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR",{
        style: "currency",
        currency: "BRL"
    })
}