console.log("GAME STARTS")
var players = omegga.GetPlayers();
console.log("GAME STARTS")
while (players < 2) {
    omegga.broadcast("Waiting for another player!")
}
// Declare an array of values


// Pick a random index from the array
const index = Math.floor(Math.random() * players.length);

// Get the value at the chosen index
const bombholder = values[index];

console.log(bombholder); // Outputs a random value from the array

    // Get the selected option
end
