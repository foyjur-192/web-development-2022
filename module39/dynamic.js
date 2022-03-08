const addItem = () => {
    const nameField = document.getElementById('product-name');
    const name = nameField.value;
    if (!name){
        return;
    }
    //display in the UI
    


    addProductToCart(name);
    //Add to local storage
    displayProduct(name);
    nameField.value = '';
}

const displayProduct = name => {
    const ul = document.getElementById('product');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
       cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}

const addProductToCart = name => {
    const cart = getCart();
    cart 
}