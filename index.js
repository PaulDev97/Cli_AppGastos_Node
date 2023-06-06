import { getData, saveFile } from './readWritePromises.js';
import { promptGasto } from './promtGastos.js';





const addExpense = async () => {

  const prompts = await promptGasto()

  const gastoJson =  await getData("./gastos.json")

  const agregarGasto = [...gastoJson, prompts]

  saveFile("./gastos.json", agregarGasto)


}

addExpense()