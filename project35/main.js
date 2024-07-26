function describeCity(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describeCity();
describeCity("Lahore");
describeCity("Kabul", "Afghanistan");
