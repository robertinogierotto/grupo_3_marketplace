window.addEventListener('load', function(){
    console.log('conected!')
    let deleteForm = document.querySelectorAll('.form-delete');
   
    deleteForm.forEach(form => {
        form.addEventListener('click', e => {
            e.preventDefault();
            Swal.fire({
                title: 'Estas seguro?',
                text: "No vas a poder recuperar el usuario!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Borrar Usuario!'
              }).then((result) => {
                if (result.isConfirmed) {
                    form.submit();
                }
              })
            
        })
    })
});