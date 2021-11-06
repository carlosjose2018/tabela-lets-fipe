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
        console.log(item)
        const option = document.createElement('option')
        option.innerText = item.nome
        option.value = item.codigo
        formOptions.appendChild(option) /* option.classList.add(item) */
      }
    })
})

const formOptionAno = document.querySelector('.form-option-modelo')

formOptionAno.addEventListener('click', () => {
  const valueAno = formOptionAno.options[formOptionAno.selectedIndex].value
  const valueNumber = Number(valueAno)
  console.log(typeof valueAno)

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
        formOptions.appendChild(option) /* option.classList.add(item) */
      }
    })
})

const btnSaveFipe = document.querySelector('.fipe-save')
const modalFipe = document.querySelector('.modal-fipe')
btnSaveFipe.addEventListener('click', () => {
  modalFipe.classList.toggle('hidden')
})
