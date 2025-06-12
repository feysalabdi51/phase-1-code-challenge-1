function calculateBodaFare() {
    const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
    const distance = parseFloat(input);

    // Validate input
    if (isNaN(distance) || distance < 0) {
        console.log("Please enter a valid number of kilometers.");
        return;
    }

    const baseFare = 50;         // Flat fee for the ride
    const ratePerKm = 15;        // Cost per kilometer
    const tripCost = distance * ratePerKm;
    const totalCost = baseFare + tripCost;

    // Output the fare breakdown
    console.log("Uko kwote? To ni " + distance + " km:");
    console.log("Ukikalia Pikipiki: KES " + baseFare);
    console.log("Mpaka Uko: KES " + tripCost);
    console.log("Total: KES " + totalCost);
    console.log("Panda Pikipiki!");
}

calculateBodaFare();
