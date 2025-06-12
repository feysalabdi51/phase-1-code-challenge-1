function calculateChaiIngredients() {
    let input = prompt("Enter number of cups:");

    let cups = parseInt(input);
    if (!cups || cups < 1) {
        console.log("Invalid input. Try a number greater than 0.");
        return;
    }

    let w = 200 * cups; // water in ml
    let m = 50 * cups;  // milk in ml
    let t = cups;       // tea leaves in tbsp
    let s = 2 * cups;   // sugar in tsp

    `console.log("For " + cups + " cup(s) of chai:");
    console.log(" - Water: " + w + " ml");
    console.log(" - Milk: " + m + " ml");
    console.log(" - Tea Leaves: " + t + " tbsp");
    console.log(" - Sugar: " + s + " tsp"); `
}

calculateChaiIngredients();
