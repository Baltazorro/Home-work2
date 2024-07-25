let productPrise = parseFloat(prompt('Введіть вартість товару','0'))
let quantityGoods = parseFloat(prompt('Клькість товару','0'))

let totalPrise = productPrise*quantityGoods

const VAT_PERCENTAGE = 5

let vatValue = totalPrise * VAT_PERCENTAGE /100

document.write(`
<table border="2px">
<tr>
    <th>Загальна вартість товару</th>
      <td>${totalPrise}</td>
    </tr>
    <tr>
      <th>ПДВ від загальної вартості</th>
      <td>${vatValue}</td>
    </tr>
</table>`)