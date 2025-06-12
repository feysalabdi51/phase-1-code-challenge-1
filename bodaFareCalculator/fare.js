function calculateBodaFare() {
    const distance = parseFloat(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"));

    if (isNaN(distance) || distance < 0) {
        console.log("Please enter a valid number of kilometers.");
        return;
    }

    const baseFare = 50;
    const chargePerKm = 15;
    const totalFare = baseFare + (distance * chargePerKm);

    `console.log(Uko kwote? To ni ${distance} km:);
    console.log(Ukikalia Pikipiki: KES ${baseFare});
    console.log(Mpaka Uko: KES ${distance * chargePerKm});
    console.log(Total: KES ${totalFare});
    console.log(Panda Pikipiki!);`
}

calculateBodaFare();