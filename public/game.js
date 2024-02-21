// game.js

let money = 1000;
let month = 1;

const events = [
    { name: "Received Salary", amount: 2000 },
    { name: "Car Repair", amount: -500 },
    { name: "Dinner Out", amount: -100 },
    { name: "Found $50 on the street", amount: 50 },
    // Add more events as needed
];

const options = [
    { name: "Invest in Stocks", amount: -300, message: "Stocks didn't perform well this month." },
    { name: "Start a Side Business", amount: 500, message: "Your side business was successful!" },
    { name: "Take a Vacation", amount: -800, message: "Vacation was expensive." },
    // Add more options as needed
];

const randomEvents = [
    { name: "Surprise Gift", amount: 100, message: "Received a surprise gift!" },
    { name: "Utility Bill", amount: -150, message: "Utility bill arrived." },
    { name: "Tax Refund", amount: 300, message: "Got a tax refund." },
    // Add more random events as needed
];

const harderOptions = [
    { name: "Invest in Risky Venture", amount: -800, message: "The risky venture did not pay off." },
    { name: "Downsize Living Space", amount: 400, message: "Downsizing saved money on rent." },
    { name: "Enroll in Expensive Course", amount: -900, message: "The course was beneficial but expensive." },
    // Add more harder options as needed
];

const harderRandomEvents = [
    { name: "Medical Emergency", amount: -1200, message: "Unexpected medical expenses." },
    { name: "Job Loss", amount: -1500, message: "Lost your job. Finances are tight." },
    { name: "High-Risk Investment", amount: -1500, message: "The high-risk investment failed." },
    // Add more harder random events as needed
];

function startGame() {
    money = 1000;
    month = 1;
    updateMoneyDisplay();
    showOptions();
}

function restartGame() {
    const gameContainer = document.getElementById("game-container");
    gameContainer.innerHTML = ''; // Clear the game container

    startGame();
}
function updateMoneyDisplay() {
    document.getElementById("current-money").textContent = money;
    document.getElementById("current-month").textContent = `Month: ${month}`;
}

function showOptions() {
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "<h2>Choose an Option:</h2>";

    options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option.name;
        button.addEventListener("click", () => handleOptionClick(index));
        optionsContainer.appendChild(button);
    });
}

function showRandomEvent() {
    const randomIndex = Math.floor(Math.random() * randomEvents.length);
    const randomEvent = randomEvents[randomIndex];

    const eventContainer = document.getElementById("event-container");
    eventContainer.innerHTML = `<p>${randomEvent.message}</p>`;

    money += randomEvent.amount;
    updateMoneyDisplay();
}

function handleOptionClick(optionIndex) {
    const selectedOption = options[optionIndex];

    const eventContainer = document.getElementById("event-container");
    eventContainer.innerHTML = `<p>${selectedOption.message}</p>`;

    money += selectedOption.amount;
    updateMoneyDisplay();

    month++;

    if (money <= 0) {
        endGame("You went bankrupt! Budgeting is challenging.");
    } else if (month > 5) {
        showHarderRandomEvent();
        showHarderOptions();
    } else {
        showRandomEvent();
        showOptions();
    }
}

function showHarderOptions() {
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "<h2>Choose a Harder Option:</h2>";

    harderOptions.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option.name;
        button.addEventListener("click", () => handleHarderOptionClick(index));
        optionsContainer.appendChild(button);
    });
}

function showHarderRandomEvent() {
    const randomIndex = Math.floor(Math.random() * harderRandomEvents.length);
    const randomEvent = harderRandomEvents[randomIndex];

    const eventContainer = document.getElementById("event-container");
    eventContainer.innerHTML = `<p>${randomEvent.message}</p>`;

    money += randomEvent.amount;
    updateMoneyDisplay();
}

function
handleHarderOptionClick(optionIndex) {
    const selectedOption = harderOptions[optionIndex];

    const eventContainer = document.getElementById("event-container");
    eventContainer.innerHTML = `<p>${selectedOption.message}</p>`;

    money += selectedOption.amount;
    updateMoneyDisplay();

    month++;

    if (money <= 0) {
        endGame("You went bankrupt! Budgeting is challenging.");
    } else if (month > 10) {
        endGame("Congratulations! You completed the game without going bankrupt.");
    } else {
        showHarderRandomEvent();
        showHarderOptions();
    }
}

function endGame(message) {
    const gameContainer = document.getElementById("game-container");
    gameContainer.innerHTML = `<h1>Game Over</h1><p>${message}</p><p>Your final money: $${money}</p>`;

    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart Game";
    restartButton.addEventListener("click", restartGame);

    gameContainer.appendChild(restartButton);
}
