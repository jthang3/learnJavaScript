"use strict"

const measureKelvin = () => {
    const measurement = {
        type: "temp",
        unit: "celsius",
        value: prompt("Degrees celsius: ")
    };
    const kelvin = measurement.value + 273;
    return kelvin;
}
console.log(measureKelvin());