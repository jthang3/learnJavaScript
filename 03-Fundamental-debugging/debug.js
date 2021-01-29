"use strict"

const measureKelvin = () => {
    const measurement = {
        type: "temp",
        unit: "celsius",
        value: prompt("Degrees celsius: ")
    };

    var myNumber = parseFloat(measurement.value);
    const kelvin = myNumber + 273;
    return kelvin;
}
console.log(measureKelvin());