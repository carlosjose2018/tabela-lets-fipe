const formCar = document.querySelector('.form-car')
let valueCar

formCar.addEventListener('click', () => {
  valueCar = formCar.options[formCar.selectedIndex].value
  const url = `https://parallelum.com.br/fipe/api/v1/${valueCar}/marcas`
  console.log(url)
  fetch(url)
    .then(function (response) {
      return response.json()
    })
    .then((data) => {
      const formOptions = document.querySelector('.form-option-marca')
      console.log(data)
      for (const key of data) {
        const option = document.createElement('option')
        option.value = key.codigo
        option.innerText = key.nome
        formOptions.appendChild(option)
      }
    })
})

const formOptionMarca = document.querySelector('.form-option-marca')
let valueMarca
formOptionMarca.addEventListener('click', () => {
  valueMarca = formOptionMarca.options[formOptionMarca.selectedIndex].value

  const urlValue = `https://parallelum.com.br/fipe/api/v1/${valueCar}/marcas/${valueMarca}/modelos`
  fetch(urlValue)
    .then(function (response) {
      return response.json()
    })
    .then((data) => {
      const formOptions = document.querySelector('.form-option-modelo')

      for (const item of data.modelos) {
        const option = document.createElement('option')
        option.innerText = item.nome
        option.value = item.codigo
        formOptions.appendChild(option)
      }
    })
})

const formOptionModelo = document.querySelector('.form-option-modelo')
let valueNumber
formOptionModelo.addEventListener('click', () => {
  const valueModelo =
    formOptionModelo.options[formOptionModelo.selectedIndex].value
  valueNumber = Number(valueModelo)
  console.log(typeof valueModelo)

  const urlValueAno = `https://parallelum.com.br/fipe/api/v1/${valueCar}/marcas/${valueMarca}/modelos/${valueNumber}/anos`
  fetch(urlValueAno)
    .then(function (response) {
      return response.json()
    })
    .then((data) => {
      console.log(data)
      const formOptions = document.querySelector('.form-option-ano')

      for (const item of data) {
        console.log(item)
        const option = document.createElement('option')
        option.innerText = item.nome
        option.value = item.codigo
        formOptions.appendChild(option)
      }
    })
})

const formOptionAno = document.querySelector('.form-option-ano')

formOptionAno.addEventListener('click', () => {
  const valueAno = formOptionAno.options[formOptionAno.selectedIndex].value

  console.log(typeof valueAno)

  const urlValueAno = `https://parallelum.com.br/fipe/api/v1/${valueCar}/marcas/${valueMarca}/modelos/${valueNumber}/anos/${valueAno}`
  fetch(urlValueAno)
    .then(function (response) {
      return response.json()
    })
    .then((data) => {
      console.log(data)
      const formOptions = document.querySelector('.form-option-valor')
      const optionAno = document.createElement('option')
      optionAno.innerText = data.Valor
      optionAno.value = 1
      formOptions.appendChild(optionAno)

      const formOptionValor = document.querySelector('.form-option-valor')
      formOptionValor.addEventListener('click', () => {
        const bgTranparent = document.querySelector('.bg-transparent')
        bgTranparent.classList.add('hidden')
        const valueValor =
          formOptionValor.options[formOptionValor.selectedIndex].value
        const valueNumber = Number(valueValor)
        const main = document.querySelector('.main')
        if (valueNumber === 1) {
          console.log('deu certo')
          const divBody = document.createElement('div')
          const pCar = document.createElement('p')
          const pMa = document.createElement('p')
          const pMo = document.createElement('p')
          const pAn = document.createElement('p')
          const pV = document.createElement('p')
          const btnClose = document.createElement('button')
          const mainModal = document.createElement('div')
          divBody.classList.add('modal-fipe')
          mainModal.classList.add('modal-main')
          main.appendChild(divBody)
          divBody.appendChild(mainModal)
          mainModal.appendChild(pCar)
          mainModal.appendChild(pMa)
          mainModal.appendChild(pMo)
          mainModal.appendChild(pAn)
          mainModal.appendChild(pV)
          divBody.appendChild(btnClose)
          pCar.innerText = `Codifo Fipe : ${data.CodigoFipe}`
          pMa.innerText = `Marca: ${data.Marca}`
          pMo.innerText = `Modelo : ${data.Modelo}`
          pAn.innerText = `Ano : ${data.AnoModelo}`
          pV.innerText = `valor : ${data.Valor}`
          btnClose.classList.add('bg-style')
          btnClose.innerText = 'fechar'
          btnClose.addEventListener('click', () => {
            divBody.classList.add('hidden')
            bgTranparent.classList.remove('hidden')
          })
        }
      })
    })
})
