#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: "Enter Your Name:"
    }]);
let opponent = await inquirer.prompt([{
        name: "select",
        type: "list",
        message: "Select Your Opponent:",
        choices: ["Skeleton", "Alien", "Zombie"]
    }]);
let P1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    //Skeleton
    if (opponent.select === "Skeleton") {
        let ask = await inquirer.prompt([{
                name: "opt",
                type: "list",
                message: "What do you like to do?",
                choices: ["Attack", "Drink Potion", "Run for life"]
            }]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(chalk.greenBright("=".repeat(70)));
                console.log(`\n ${P1.name} your fuel is ${P1.fuel}\n`);
                console.log(chalk.greenBright("=".repeat(70)));
                console.log(chalk.greenBright("=".repeat(70)));
                console.log(`\n ${o1.name} your fuel is ${o1.fuel}\n`);
                console.log(chalk.greenBright("=".repeat(70)));
                if (P1.fuel <= 0) {
                    console.log(chalk.bgCyanBright(`\n ${P1.name} You Lost! Better Luck next time.\n`));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.greenBright("=".repeat(70)));
                console.log(`\n ${P1.name} your fuel is ${P1.fuel}\n`);
                console.log(chalk.greenBright("=".repeat(70)));
                console.log(chalk.greenBright("=".repeat(70)));
                console.log(`\n ${o1.name} your fuel is ${o1.fuel}\n`);
                console.log(chalk.greenBright("=".repeat(70)));
                if (o1.fuel <= 0) {
                    console.log(chalk.blueBright("=".repeat(70)));
                    console.log(chalk.yellowBright(`\n ${P1.name} You Won! Congratulations.\n`));
                    console.log(chalk.blueBright("=".repeat(70)));
                    process.exit();
                }
            }
        }
        if (ask.opt === "Drink Potion") {
            P1.fuelIncrease();
            console.log(chalk.yellowBright("=".repeat(70)));
            console.log(`\n ${P1.name} drank potion. Your fuel is ${P1.fuel}\n`);
            console.log(chalk.yellowBright("=".repeat(70)));
        }
        if (ask.opt === "Run for life") {
            console.log(chalk.blueBright("=".repeat(70)));
            console.log(`\n ${P1.name} You Lost! Better Luck next time.\n`);
            console.log(chalk.blueBright("=".repeat(70)));
            process.exit();
        }
    }
    //Alien
    if (opponent.select === "Alien") {
        let ask = await inquirer.prompt([{
                name: "opt",
                type: "list",
                message: "What do you like to do?",
                choices: ["Attack", "Drink Potion", "Run for life"]
            }]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(chalk.yellowBright("=".repeat(70)));
                console.log(`\n ${P1.name} your fuel is ${P1.fuel}\n`);
                console.log(chalk.yellowBright("=".repeat(70)));
                console.log(chalk.yellowBright("=".repeat(70)));
                console.log(`\n ${o1.name} your fuel is ${o1.fuel}\n`);
                console.log(chalk.yellowBright("=".repeat(70)));
                if (P1.fuel <= 0) {
                    console.log(chalk.yellowBright(`\n ${P1.name} You Lost! Better Luck next time.\n`));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.yellowBright("=".repeat(70)));
                console.log(`\n ${P1.name} your fuel is ${P1.fuel}\n`);
                console.log(chalk.yellowBright("=".repeat(70)));
                console.log(chalk.yellowBright("=".repeat(70)));
                console.log(`\n ${o1.name} your fuel is ${o1.fuel}\n`);
                console.log(chalk.yellowBright("=".repeat(70)));
                if (o1.fuel <= 0) {
                    console.log(chalk.blueBright("=".repeat(70)));
                    console.log(chalk.yellowBright(`\n ${P1.name} You Won! Congratulations.\n`));
                    console.log(chalk.blueBright("=".repeat(70)));
                    process.exit();
                }
            }
        }
        if (ask.opt === "Drink Potion") {
            P1.fuelIncrease();
            console.log("=".repeat(70));
            console.log(`\n ${P1.name} drank potion. your fuel is ${P1.fuel}\n`);
            console.log("=".repeat(70));
        }
        if (ask.opt === "Run for life") {
            console.log(chalk.blueBright("=".repeat(70)));
            console.log(`\n ${P1.name} You Lost! Better Luck next time.\n`);
            console.log(chalk.blueBright("=".repeat(70)));
            process.exit();
        }
    }
    //Zombie
    if (opponent.select === "Zombie") {
        let ask = await inquirer.prompt([{
                name: "opt",
                type: "list",
                message: "What do you like to do?",
                choices: ["Attack", "Drink Potion", "Run for life"]
            }]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log("=".repeat(70));
                console.log(`\n ${P1.name} your fuel is ${P1.fuel}\n`);
                console.log("=".repeat(70));
                console.log(chalk.yellowBright("=".repeat(70)));
                console.log(`\n ${o1.name} your fuel is ${o1.fuel}\n`);
                console.log(chalk.yellowBright("=".repeat(70)));
                if (P1.fuel <= 0) {
                    console.log(chalk.yellowBright(`\n ${P1.name} You Lost! Better Luck next time.\n`));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.yellowBright("=".repeat(70)));
                console.log(`\n ${P1.name} your fuel is ${P1.fuel}\n`);
                console.log(chalk.yellowBright("=".repeat(70)));
                console.log(chalk.yellowBright("=".repeat(70)));
                console.log(`\n ${o1.name} your fuel is ${o1.fuel}\n`);
                console.log(chalk.yellowBright("=".repeat(70)));
                if (o1.fuel <= 0) {
                    console.log(chalk.blueBright("=".repeat(70)));
                    console.log(chalk.yellowBright(`\n ${P1.name} You Won! Congratulations.\n`));
                    console.log(chalk.blueBright("=".repeat(70)));
                    process.exit();
                }
            }
        }
        if (ask.opt === "Drink Potion") {
            P1.fuelIncrease();
            console.log("=".repeat(70));
            console.log(`\n ${P1.name} drank potion. your fuel is ${P1.fuel}\n`);
            console.log("=".repeat(70));
        }
        if (ask.opt === "Run for life") {
            console.log(chalk.blueBright("=".repeat(70)));
            console.log(`\n ${P1.name} You Lost! Better Luck next time.\n`);
            console.log(chalk.blueBright("=".repeat(70)));
            process.exit();
        }
    }
} while (true);
