window.addEventListener('load', function load(){

    let container = document.querySelector('.containerA')

    let products = JSON.parse(sessionStorage.getItem('products'));

    const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    function showProductsInCart () {
        if (products == null) {
            container.innerHTML = 'Todavia no seleccionaste ningun producto! <br> Clickea en "Agregar mas productos"'
        } else {
            for (let [i, product] of products.entries()) {
    
                container.innerHTML += `<article class="product-1">
                <img class="img" src="/images/products/${product.img}" alt="" />
                <p class="name">${product.name}</p>
                <div class="price" id="price${product.id}">${toThousand(product.price)}</div>
      
                <div class="quantity" onclick="priceUpdate(${product.id})">
                    <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="minus-btn" type="button" name="button">
                    <i class="fas fa-minus"></i>
                    </button>
                    <input id="quantInput${product.id}"  class="q-input" min="1" name="quantity" type="number" name="name" value="1" />
                    <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"  class="plus-btn" type="button" name="button">
                    <i class="fas fa-plus"></i>
                    </button> 
                </div>
      
                <div class="eliminar">
                  <button class="add" type="submit" onclick="deleteProduct(${product.id})" name="button">Eliminar</button>
                </div>
              </article>`
            }  
        }
    }

    showProductsInCart();

    window.deleteProduct = function (productId) {
    
        let products = JSON.parse(sessionStorage.getItem('products'))
    
        console.log(products);
    
        let productsToUpdate = products.filter(product => {
            return product.id != productId
        })
        
        if (productsToUpdate.length > 0) {
            sessionStorage.setItem('products', JSON.stringify(productsToUpdate));
        } else {
            sessionStorage.removeItem('products')
        }

        location.reload(); 
    }
    

    window.priceUpdate = function (productId) {

        let price = document.querySelector('#price' + productId);
        let quantity = document.querySelector('#quantInput' + productId).value;

        let originalPrice;

        for (const product of products) {
            if(product.id == productId) {
                originalPrice = product.price
            }   
        }

        price.innerHTML = toThousand(originalPrice * quantity);

    }

    function toNumber (string) {

        let number = [];

        for (let i = 0; i < string.length; i++) {
            if(string[i] != '.') {

                number.push(string[i])  

            }
        }

        return Number(number.join(''));
    }

    let totalInit = window.onclick = () => {

        let totalPrice = 0;
        let prices = document.querySelectorAll('.price');
        
        for (const price of prices) {
            totalPrice += toNumber(price.innerHTML);
        }
        
        let total = document.querySelector('.total-price');
        
        total.innerHTML = '$ ' + toThousand(totalPrice);
    }

    totalInit();
});


