function clientForm() {
    document.querySelector('.client-container').classList.toggle('hidden')

    document.querySelector('.product-container').classList.add('hidden')

}

function productForm() {
    document.querySelector('.product-container').classList.toggle('hidden')

    document.querySelector('.client-container').classList.add('hidden')
}


const clientBtn = document.querySelector('.client')
clientBtn.addEventListener('click', clientForm)


const productBtn = document.querySelector('.product')
productBtn.addEventListener('click', productForm)

// Data Getter
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
})

// Client info
let clientName = document.querySelector('#name')
let email = document.querySelector('#email')
let birth = document.querySelector('#birth')
let tel = document.querySelector('#tel')
let city = document.querySelector('#city')
let state = document.querySelector('#state')
let address = document.querySelector('#address')

// Product info
let product = document.querySelector('#product')
let brand = document.querySelector('#brand')
let color = document.querySelector('#color')
let price = document.querySelector('#price')
let code = document.querySelector('#code')
let date = document.querySelector('#date')


// Local Storage

// Client
const submitClient = document.querySelector('#submit-client');

submitClient.addEventListener('click', function() {
    window.localStorage.setItem('Nome do Cliente', clientName.value);
    window.localStorage.setItem('Email do Cliente', email.value);
    window.localStorage.setItem('Nascimento do Cliente', birth.value);
    window.localStorage.setItem('Telefone do Cliente', tel.value);
    window.localStorage.setItem('Cidade do Cliente', city.value);
    window.localStorage.setItem('Estado do Cliente', state.value);
    window.localStorage.setItem('Endereço do Cliente', address.value);
    alert('Cliente cadastrado com sucesso')
    document.location.href='/';
})


// Product
const submitProduct = document.querySelector('#submit-product');

submitProduct.addEventListener('click', function() {
    window.localStorage.setItem('Nome do Produto', product.value);
    window.localStorage.setItem('Marca do Produto', brand.value);
    window.localStorage.setItem('Cor do Produto', color.value);
    window.localStorage.setItem('Preço do Produto', price.value);
    window.localStorage.setItem('Código do Produto', code.value);
    window.localStorage.setItem('Data da Compra do Produto', date.value);
    alert('Produto cadastrado com sucesso')
    document.location.href='/';
})
