//First defining form fields as variables and ensuring output is blank//

function FormSubmit() {

    const inputTemp = Number(document.getElementById('input_temp').value);
    const tempFrom = document.getElementById('dropdown_input').value;
    const tempTo = document.getElementById('dropdown_output').value;
    const decimalPlaces = Number(document.getElementById('decimals').value);
    document.getElementById('output_div').innerHTML = ""

    //Defining functions required (nested)//

    //Function to check input and output temperature scale is not the same//

    function isSame(innie, out) {
        if (innie == out) {
            window.alert("Please choose a different temperature scale to convert to")
            return true
        }

        else {
            return false
        }
    }

    //Function to ensure input not blank//
    function isBlank(input) {
        if (input == "") {
            window.alert("Please fill in a temperature value")
            return true
        }

        else {
            return false
        }

    }

    //Functions for maths calculations for conversions//

    //Celcius to Fahrenheit//
    function convertCelFah(x) {
        return ((x * 9 / 5) + 32)
    }

    //Fahrenheit to Celcius//
    function convertFahCel(x) {
        return ((x - 32) * 5 / 9)
    }

    //Celcius to Kelvin//
    function convertCelKel(x) {
        return (x + 273.15)
    }

    //Kelvin to Celcius//
    function convertKelCel(x) {
        return (x - 273.15)
    }

    //Fahrenheit to Kelvin//
    function convertFahKel(x) {
        return (((x - 32) * 5 / 9) + 273.15)
    }

    //Kelvin to Fahrenheit//
    function convertKelFah(x) {
        return (((x - 273.15) * 9 / 5) + 32)
    }


    //Function to convert temperature scale to unit symbol//
    function tempLetter(temp) {
        if (temp == "celcius") {
            return "C"
        }

        else if (temp == "fahrenheit") {
            return "F"
        }

        else if (temp == "kelvin") {
            return "K"
        }
    }

    //Function to add answer to html//

    function outputAnswer(unit1, unit2, input, output) {
        document.getElementById('output_div').innerHTML += `<p>${input}°${unit1} is equal to</p><h1>${output}°${unit2}</h1>`
    }

    //Overall code//

    let sameCheck = isSame(tempFrom, tempTo)
    let blankCheck = isBlank(inputTemp)

    if (sameCheck == false && blankCheck == false) {

        let result 

        if (tempFrom == 'celcius' && tempTo == "fahrenheit") {
            result = convertCelFah(inputTemp).toFixed(decimalPlaces);
        } 
        
        else if (tempFrom == "fahrenheit" && tempTo == "celcius") {
            result = convertFahCel(inputTemp).toFixed(decimalPlaces);
        } 
        
        else if (tempFrom == 'celcius' && tempTo == "kelvin") {
            result = convertCelKel(inputTemp).toFixed(decimalPlaces);
        }
        
        else if (tempFrom == 'kelvin' && tempTo == "celcius") {
            result = convertKelCel(inputTemp).toFixed(decimalPlaces);
        } 
        
        else if (tempFrom == 'fahrenheit' && tempTo == "kelvin") {
            result = convertFahKel(inputTemp).toFixed(decimalPlaces);
        } 
        
        else if (tempFrom == 'kelvin' && tempTo == "fahrenheit") {
            result = convertKelFah(inputTemp).toFixed(decimalPlaces);
        }


        symbolIn = tempLetter(tempFrom)
        symbolOut = tempLetter(tempTo)

        outputAnswer(symbolIn, symbolOut, inputTemp, result)



    } 
    
    else {
        document.getElementById('output_div').innerHTML = ""
    }


}

//Function to change between dark and light theme - uses class switching, and in CSS document there is alternate styling for different classes//

function setThemeLight() {

    document.getElementById("background_container").className = "background_light"
    document.getElementById("container").className = "container_light"
    document.getElementById("dark_light_mode").className = "button_mode_light"
    document.getElementById("output_div").className = "output_light"
    
}

function setThemeDark() {
    document.getElementById("background_container").className = "background_dark"
    document.getElementById("container").className = "container_dark"
    document.getElementById("dark_light_mode").className = "button_mode_dark"
    document.getElementById("output_div").className = "output_dark"
}











