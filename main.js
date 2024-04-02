console.log(chalk.bgCyanBright("\t\t\t WELCOME TO MY AUTOMATED TELLER MACHINE\n\n"));
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 5000000; //dollar
let myPin = 7890;
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        type: "number",
        message: (chalk.green("PLEASE! Enter Your Pin")),
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.blueBright("Correct Pin Code!"));
    let operatonAns = await inquirer.prompt([{
            name: "operation",
            message: (chalk.yellow("PLEASE! Select Options")),
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"],
        }]);
    if (operatonAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: (chalk.yellowBright("Enter Your Amount")),
                type: "number",
            }]);
        myBalance -= amountAns.amount;
        if (amountAns.amount <= 5000000) {
            console.log(chalk.bgBlue(`Your Remaining Balance is :  ${myBalance}`));
        }
        else {
            console.log(chalk.bgBlue("Sorry! insufficient balance"));
        }
    }
    else if (operatonAns.operation === "fast cash") {
        let fastCash = await inquirer.prompt([{
                name: "cash",
                type: "list",
                message: (("Do You Want Fast Cash?")),
                choices: [5000, 10000, 15000, 20000, 25000]
            }]);
        myBalance -= fastCash.cash;
        console.log(chalk.bgBlue(`Your Remaining Balance is :  ${myBalance}`));
    }
    else if (operatonAns.operation === "check balance") {
        console.log(chalk.bgBlue(`Your Balance is :  ${myBalance}`));
    }
}
else {
    console.log(chalk.red("Invalid pin code "));
}
