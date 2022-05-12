window.addEventListener('load', function () {

    console.log(sessionStorage.products);


    const submitsAddToCart = document.querySelectorAll('#submitButton');
    console.log(submitsAddToCart)

    function addProductToCart() {
        let name = document.getElementById('productName').value
        let price = document.getElementById('productPrice').value
        let img = document.getElementById('productImg').value
        let id = document.getElementById('productId').value

        let products = JSON.parse(sessionStorage.getItem('products'));

        if (products == null) {
            sessionStorage.setItem('products', JSON.stringify([{
                name: name,
                price: price,
                img: img,
                id: id
            }]))
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'El producto se agrego exitosamente al carrito',
                showConfirmButton: false,
                timer: 1500
            })
        } else {

            let isNotInCart;

            for (let product of products) {

                if (product.id == id) {
                    isNotInCart = false;
                    break;
                } else {
                    isNotInCart = true;
                }
            }

            if (isNotInCart) {

                products.push({
                    name: name,
                    price: price,
                    img: img,
                    id: id
                })
                sessionStorage.setItem('products', JSON.stringify(products))
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'El producto se agrego exitosamente al carrito',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else {
                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: 'El producto ya se encuentra en el carrito',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    }

    for (let submit of submitsAddToCart) {

        submit.addEventListener('click', () => {

            addProductToCart();

        })
    }

    const submitsBuyNow = document.querySelectorAll('#buyNowButton');

    for (let submitBuyNow of submitsBuyNow) {

        submitBuyNow.addEventListener('click', () => {

            let products = JSON.parse(sessionStorage.getItem('products'));
            let id = document.getElementById('productId').value

            if (products == null) {

                addProductToCart();
                setTimeout(function () {
                    window.location.href = "http://localhost:3000/products/cart"
                }, 1600);

            } else {

                let isNotInCart;

                for (let product of products) {

                    if (product.id == id) {
                        isNotInCart = false;
                        break;
                    } else {
                        isNotInCart = true;
                    }
                }

                if (isNotInCart) {

                    addProductToCart();
                    setTimeout(function () {
                        window.location.href = "http://localhost:3000/products/cart"
                    }, 1600);


                } else {
                    window.location.href = "http://localhost:3000/products/cart"
                }
            }

        })
    }
});

