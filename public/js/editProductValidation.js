window.addEventListener('load', function () {

    let form = document.querySelector('.editProduct');


    form.addEventListener('submit', (e) => {

        e.preventDefault();

        let errors = [];

        let name = document.querySelector('#name');
        let price = document.querySelector('#price');
        let discount = document.querySelector('#discount');
        let caract1 = document.querySelector('#caract1');
        let caract2 = document.querySelector('#caract2');
        let caract3 = document.querySelector('#caract3');
        let caract4 = document.querySelector('#caract4');
        let description = document.querySelector('#description');

        if (!name.value) {
            errors.push('Debe introducir el nombre del producto');
            name.classList.add('error');
        } else {
            name.classList.remove('error');
        };
        if (!price.value) {
            errors.push('Debe introducir el precio del producto');
            price.classList.add('error');
        } else {
            price.classList.remove('error');
        };
        if (discount.value <= 0 || discount.value >= 100) {
            errors.push('Debe introducir el descuento del producto(1-99)');
            discount.classList.add('error');
        } else {
            discount.classList.remove('error');
        };
        
        if (!caract1.value) {
            errors.push('Debe introducir 4 caracteristicas del producto');
            caract1.classList.add('error');
        } else {
            caract1.classList.remove('error');
        };
        if (!caract2.value) {
            errors.push('Debe introducir 4 caracteristicas del producto');
            caract2.classList.add('error');
        } else {
            caract2.classList.remove('error');
        };
        if (!caract3.value) {
            errors.push('Debe introducir 4 caracteristicas del producto');
            caract3.classList.add('error');
        } else {
            caract3.classList.remove('error');
        };
        if (!caract4.value) {
            errors.push('Debe introducir 4 caracteristicas del producto');
            caract4.classList.add('error');
        } else {
            caract4.classList.remove('error');
        };
       
       
        if (!description.value) {
            errors.push('Debe introducir la descripcion del producto');
            description.classList.add('error');
        } else {
            description.classList.remove('error');
        };

        if (errors.length > 0) {
            let ulErrors = document.querySelector('.errors');
            console.log(ulErrors)
            ulErrors.classList.add('errorsStyle');
            ulErrors.innerHTML = '';
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += `<li >  ${errors[i]} </li>`;
            };
        } else {
            form.submit();
        }


    })

});