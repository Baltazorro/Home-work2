let lengthCent = parseFloat(prompt('Довжина у сантиметрах','0'))

const metersInCentimeters = lengthCent / 100
const kilometersInCentimeters = lengthCent / 100000

document.write(`
   <table border="2px">
   <tr>
       <th>Метрів (у вказаних сантиметрах)</th>
         <td>${metersInCentimeters}</td>
       </tr>
       <tr>
         <th>Кілометрів (у вказаних сантиметрах)</th>
         <td>${kilometersInCentimeters}</td>
       </tr>
   </table>`)