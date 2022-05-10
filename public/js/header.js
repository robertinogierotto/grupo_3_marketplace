window.addEventListener("load", function () {

    function setNumberOfProducts () {
        let numberOfProdcutsInCart = document.getElementById('numberOfProductsInCart');
        let numberOfProducts;
        if(sessionStorage.products != null) {
            numberOfProducts = JSON.parse(sessionStorage.getItem('products')).length;
        } else {
            numberOfProducts = 0;
        }
    
        numberOfProdcutsInCart.innerHTML = numberOfProducts;   
    }

    setNumberOfProducts();

    window.addEventListener('click', () => {
        setNumberOfProducts();
    })


    let burgerMenu = document.querySelector(".burger-menu");
    let burgerDropDown = document.querySelector(".dropdown-burger");
    let userDropDown = document.querySelector(".userAll");
    let userActions = document.querySelector(".userAcctions");

    burgerMenu.addEventListener("click", (e) => {
        burgerDropDown.style.display = "block";
    });

    burgerDropDown.addEventListener("mouseleave", (e) => {
        burgerDropDown.style.display = "none";
    });

    userDropDown.addEventListener("click", (e) => {
        userActions.style.display = "block";
    });

    userActions.addEventListener("mouseleave", (e) => {
        userActions.style.display = "none";
    });

    let logOut = document.querySelector('.logout');
    logOut.addEventListener('click', () => {
        sessionStorage.removeItem('products')
    })

    let searchForm = document.querySelector('.form');

    searchForm.addEventListener('submit', (e) => {

        e.preventDefault();

        let searchText = document.querySelector('.input').value;
        let searchError = document.querySelector('.searchError');

        searchError.innerHTML = '';

        if(searchText) {

            searchForm.submit();

        } else {

            searchError.innerHTML += 'Debe introducir un producto/marca para realizar la busqueda'
            
        }

    })
});
