const getStoredCart = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}
const setToDb = (id)=>{
    const cart = getStoredCart();
    if(!cart[id]){
        cart[id] = 1;
    }
    else{
        cart[id] = cart[id] + 1;
    }
    localStorage.setItem('cart',JSON.stringify(cart));
}
const removeFromDb = id =>{
    const cart = getStoredCart();
    delete cart[id];
    localStorage.setItem('cart',JSON.stringify(cart));
}
const removeAllDb = () =>{
    localStorage.removeItem('cart');
}
export {setToDb, getStoredCart, removeAllDb, removeFromDb}