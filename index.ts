import inquirer from 'inquirer';
import chalk from 'chalk';

console.log(chalk.white.bold.bgMagenta('Hello MetaVerse Fellows!'));
console.log(chalk.bgCyan.underline.bold('Try my calculator!'));

let res = { ans: 'y'};

async function loadCalc() {
	let num1 = await inquirer.prompt([{
	type: "number",
	name: "num1",
	message: "Enter First Number"
}])

let num2 = await inquirer.prompt([{
	type: "number",
	name: "num2",
	message: "Enter Second Number"
}]);

let operator = await inquirer.prompt([{
	type: "string",
	name: "operation",
	message: "ENTER OPERATOR"
}])


switch (operator.operation) {
	case "+":
		console.log(`${num1.num1} ${operator.operation} ${num2.num2} = `+ (num1.num1 + num2.num2) );
		break;
	case "-":
		console.log(`${num1.num1} ${operator.operation} ${num2.num2} = `+ (num1.num1 - num2.num2) );
		break;
	case "*":
		console.log(`${num1.num1} ${operator.operation} ${num2.num2} = `+ (num1.num1 * num2.num2) );
		break;
	case "/":
		console.log(`${num1.num1} ${operator.operation} ${num2.num2} = `+ (num1.num1 / num2.num2) );
		break;

	default:
		console.log('Operator is not valid');
		break;
}
}

do {
	await loadCalc();
	res = await inquirer.prompt([{
		type: "string",
		name: "ans",
		message: "Do you want to continue?(y)"
	}])
	// console.log(res.ans);
	
}while(res.ans === "y" || res.ans === "yes" || res.ans === "Yes" || res.ans === "Y")