function calculateMaturityAmount(){
    // Get the input from the form 

    const principle = parseFloat(document.getElementById('principle').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    // perform the calculation

    const maturityAmount = principle + (principle *interestRate*tenure)/100
    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;


}

//Event Listner to the calculator

document.getElementById('calculatebtn').addEventListener('click',calculateMaturityAmount);