const conversionRates = {
    inches: {
        feet: 0.083333,
        yards: 0.027778
    },
    feet: {
        inches: 12,
        yards: 0.333333
    },
    yards: {
        inches: 36,
        feet: 3
    }
};

document.getElementById("conversion-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get user input
    const value = document.getElementById("value").value;
    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;

    // Perform conversion
    const result = value * conversionRates[fromUnit][toUnit];

    // Display result
    document.getElementById("result").innerHTML = value + " " + fromUnit + " is equal to " + result + " " + toUnit;
});
