# Olá !

## \_Me Chamo José Carlos ,sou aluno da Lets'Code logo embaixo segue meu projeto sinta a vontade para usar e principalmente dá feedback!

[![N|Solid](https://lh3.googleusercontent.com/q4MvYYFk6NuIW0XBEMTYPES2B1ZubmRxGGt0rUH5BUEVDh6nNqWp16NVYrrdvq13YtNK=s170)]()

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Nesse projeto utilizei algumas tecnologias.

- HTML5
- CSS3
- BOOTSTRAP 5
- ✨JAVASCRIPT ES6
- ✨Api https://deividfortuna.github.io/fipe/

## BIBLIOTECAS UTILIZADAS

A biblioteca é de grande utilidade para um desenvolvedor, através dela pode ver como um codigo pode ser usado .

- [HTML 5](https://www.w3schools.com/tags/tag_doctype.asp)
- [CSS3](https://www.w3schools.com/css/)
- [BOOTSTRAP 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [JAVASCRIPT ES6](https://www.w3schools.com/js/)

## Desenvolvimento ✨Lets`Fipe ✨

Projeto em JavaScript utilizando os seguintes conceitos:

1.Seletores
2.Manipulação de DOM
3.Escuta de eventos
4.Manipulação de classes de CSS
5)utilização de Api https://deividfortuna.github.io/fipe/

1)Seletores:✨
//document.querySelector('.form-car') com ajuda do querySelector("") poderemos pegar a div ou classe que desejamos trabalhar.

```sh
const formCar = document.querySelector('.form-car')
```

2)Manipulação de DOM:✨
//Nessa abar criamos option utilizando o createElement e criamos classe com classList.

```sh
 const formOptions = document.querySelector('.form-option-marca')
      console.log(data)
      for (const key of data) {
        const option = document.createElement('option')
        option.value = key.codigo
        option.innerText = key.nome
        formOptions.appendChild(option)
      }
```

3)Esculta de Eventos:✨
//addEventListener captura um click no input a partir desse envento varias interações ocorrem no codigo como criação de classe ou mesmo criação de novos elementos dentro do html ex:div e parágrafos.

```sh
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
```

4)Manipulação de classes de CSS:✨
// modalFipe.classList.toggle('hidden') Com ajuda do toggle verificamos que existe uma classe hidden caso não exista a mesma será criada.

```sh
const btnSaveFipe = document.querySelector('.fipe-save')
const modalFipe = document.querySelector('.modal-fipe')
btnSaveFipe.addEventListener('click', () => {
  modalFipe.classList.toggle('hidden')
})
}
```

5)utilização de Api https://deividfortuna.github.io/fipe/:✨
// Utilizamos o fetch para consumir nossa api e transformamos em json.

```sh
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
```

## License

MIT

**Free Software, Hell Yeah!**
