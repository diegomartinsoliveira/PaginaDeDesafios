const span = document.querySelector('span')
const btnStart = document.querySelector('#btnStart')
const btnPause = document.querySelector('#btnPause')
const btnClean = document.querySelector('#btnClean')

var interval

btnStart.onclick = () => {
  btnStart.disabled = true
  btnPause.disabled = false
  let teste = document.createElement('table')
  teste.classList = 'numeros'
  document.querySelector('.mostraNum').appendChild(teste)

  var value = parseFloat(span.innerHTML)

  interval = setInterval(() => {
    value += 2
   if(value == 50){
    for (let i = 0; i <=50; i++) {
      if(i % 2 == 0){
      let tr = document.createElement('tr')
      let td = document.createElement('td') 
      
      td.innerHTML = i + ","
      tr.appendChild(td)
      document.querySelector('.numeros').appendChild(tr)
      document.getElementById("numPares").innerHTML = "<h2>Números pares são:<h2>"
      
      console.log(i)
      clearInterval(interval)
          }
       }
   }

    span.innerHTML = value.toFixed(1)
   }, 100);
 }

btnPause.onclick = () => {

  if (span == 50) {
  btnStart.disabled = true
  } else {
  btnPause.disabled = false
  }
  clearInterval(interval)
}

btnClean.onclick = () => {
  btnStart.disabled = false
  btnPause.disabled = true
  
  clearInterval(interval)
  span.innerHTML = "0"
  if(document.querySelector('.numeros') !== null){
    document.querySelector('.numeros').remove()
    document.getElementById("numPares").innerHTML = ""
  }
}