window.addEventListener('load', function(){
    
    let deleteForm = document.querySelectorAll('.form-delete');
   
    deleteForm.forEach(form => {
        form.addEventListener('click', e => {
            e.preventDefault();
            Swal.fire({
                title: 'Estas seguro?',
                text: "No vas a poder recuperar el producto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Borrar Producto!'
              }).then((result) => {
                if (result.isConfirmed) {
                    form.submit();
                }
              })
            
        })
    })
});