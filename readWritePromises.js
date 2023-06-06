import fs from 'fs'

export const getData = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile( file, "utf-8", (error, content) => {
      if(error) {
        reject(error)
      }
      else {
        resolve(JSON.parse(content))
      }
    })
  })
}



export const saveFile = (file, newData) => {
  return new Promise((resolve, reject) => {
    fs.writeFile( file, JSON.stringify(newData), (error) => {
      if(error){
        reject(error)
      }
      else{
        resolve("Se escribió archivo correctamente")
      }

      
    })
  })
}


