const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')



const convertValues = async () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text');
    const currencyValeuText = document.getElementById("currency-value-text");


    

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high
    console.log(data)


    realValueText.innerHTML = inputReais

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    if (select.value === "U$ Dólar americano") {
        currencyValeuText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar)
    }

    if (select.value === "€ Euro") {
        currencyValeuText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro)
    }

    if (select.value === "Bitcoin") {
        currencyValeuText.innerHTML = new Intl.NumberFormat().format(inputReais / bitcoin)
    }

    



}

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')
    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (select.value === 'U$ Dólar americano') {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/estados-unidos.png"
    }

    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)