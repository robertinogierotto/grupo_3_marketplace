window.addEventListener('load', function(){

    let form = document.querySelector('.formContact');

    form.addEventListener('submit', (e) => {

        e.preventDefault();

        let errors = [];
        
        let name = document.querySelector('#name');
        let email = document.querySelector('#email');
        let phone = document.querySelector('#phoneNumber');
        let country = document.querySelector('.infoPais');
        let message = document.querySelector('#message');

        if(!name.value) {
            errors.push('Debe introducir su nombre!');
            name.classList.add('error');
        } else {
            name.classList.remove('error');
        };
        if (!email.value) {
            errors.push('Debe introducir su email');
            email.classList.add('error');            
        } else {
            email.classList.remove('error');
        };
        if (!phone.value) {
            errors.push('Debe introducir su numero de teléfono');
            phone.classList.add('error');            
        } else {
            phone.classList.remove('error');
        };
        if (country.value == '') {
            errors.push('Debe seleccionar su país');
            country.classList.add('error');            
        } else {
            country.classList.remove('error');
        };
        if (!message.value) {
            errors.push('Debe introducir el mensaje que quiere mandar');
            message.classList.add('error');            
        } else {
            message.classList.remove('error');
        };

        if (errors.length > 0) {
            let ulErrors = document.querySelector('.errors');
            ulErrors.classList.add('errorsStyle');
            ulErrors.innerHTML = '';
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += `<li >  ${errors[i]} </li>`;
            };
        }else{
            form.submit();
            Swal.fire({
                title: 'Mensaje enviado con éxito!',
                text: "Revisa tu casilla de correo, te enviamos la confirmación del mensaje",
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: '#3598FE',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Perfecto!'
              }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'http://localhost:3001';
                }
              })
        }


    })
    
});