window.addEventListener('load', function(){

    let form = document.querySelector('.editProfile');

    console.log(form);

    form.addEventListener('submit', (e) => {

        e.preventDefault();

        let errors = [];
        
        let name = document.querySelector('#name');
        
        let lastName = document.querySelector('#lastName');
        console.log(lastName);
        if(!name.value) {
            errors.push('Debe introducir su nombre!');
            name.classList.add('error');
        } else {
            name.classList.remove('error');
        };
        
        if (!lastName.value) {
            errors.push('Debe introducir su apellido!');
            lastName.classList.add('error');            
        } else {
            lastName.classList.remove('error');
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
                title: 'Datos actualizados!',
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: '#3598FE',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ok!'
               })
            .then((result) => {
                if (result.isConfirmed) {
                  window.location.href = 'http://localhost:3000';
                  location.reload();
                }
              })
        }


    })
    
});