let firstNumber = parseFloat(prompt('Перше дійсне число','0'))
let secondNumber = parseFloat(prompt('Друге дійсне число', '0'))

let sum = firstNumber + secondNumber
let mult = firstNumber * secondNumber
let div = firstNumber / secondNumber


document.write(`
   <table border="2px">
   <tr>
    <th>Сума</th>
      <td>${sum}</td>
    </tr>
    <tr>
      <th>Добуток</th>
      <td>${mult}</td>
    </tr>
    <tr>
      <th>Частка</th>
      <td>${div}</td>
   </tr>
   </table>`)