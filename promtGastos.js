import inquirer from 'inquirer';

const questions = [
  {
    type: 'input',
    name: 'tipo_de_gasto',
    message: "Ingrese el tipo de gasto:",
  },
  {
    type: 'input',
    name: 'gasto',
    message: "Ingrese el gasto:",
    
  },
 
 
];


export const promptGasto = async () => {
  return await inquirer.prompt(questions)
}


