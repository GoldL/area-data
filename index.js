import area from './area.js'
import fs from 'fs'

let list = []

for (let [key, value] of Object.entries(area.province_list)) {
  let children = []
  for (let [cityKey, cityValue] of Object.entries(area.city_list)) {
    if (key.slice(0, 2) === cityKey.slice(0, 2)) {
      children.push({
        id: cityKey,
        value: cityValue,
        label: cityValue
      })
    }
  }
  list.push({
    id: key,
    value: value,
    label: value,
    children
  })
}
let json = JSON.stringify(list)
fs.writeFile('areaData.json', json, 'utf8', () => {
  console.log('打印成功')
})