function calculateChaiIngredients() {
    let input = prompt("Enter number of cups:");
    let cups = parseInt(input);

    // Validate input
    if (isNaN(cups) || cups < 1) {
        console.log("Invalid input. Try a number greater than 0.");
        return;
    }

    // Ingredient calculations
    let water = 200 * cups; // ml
    let milk = 50 * cups;   // ml
    let tea = cups;         // tbsp
    let sugar = 2 * cups;   // tsp

    // Display the results
    console.log("For " + cups + " cup(s) of chai:");
    console.log(" - Water: " + water + " ml");
    console.log(" - Milk: " + milk + " ml");
    console.log(" - Tea Leaves: " + tea + " tbsp");
    console.log(" - Sugar: " + sugar + " tsp");
}

calculateChaiIngredients();

