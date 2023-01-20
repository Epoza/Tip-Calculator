var area = document.getElementById("pop-out")
var inputAmount = document.querySelector("input")
var tipSlider = document.getElementById("tipSlider")
var tipAmountText = document.getElementById("tipAmountText")
var totalText = document.getElementById("totalText")

area.addEventListener('input', () =>{ // checks for input changes within the pop-out div
    console.log(inputAmount.value)
    tipAmount = inputAmount.value * (tipSlider.value/100)
    total = (inputAmount.value * (tipSlider.value/100)) + parseInt(inputAmount.value) // inputAmount.value is a string and needs to be converted to an integer to avoid adding errors
    tipAmountText.innerText = tipAmount.toFixed(2) // toFixed(2) rounds decimal to two places
    totalText.innerText = total.toFixed(2)
})