let birthDate = parseInt(prompt('Дата вашого народження','0'))
let currentDate = 2024

let howOld = currentDate - birthDate

document.write(`
   <table border="2px">

    <th>Ваш вік</th>
      <td>${howOld}</td>

   </table>`)