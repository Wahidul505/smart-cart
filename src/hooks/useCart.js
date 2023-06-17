import { useEffect, useState } from "react"
import {getStoredCart} from '../utilities/localStorageDb';

const useCart = products =>{
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const storedProduct = products.find(product => product.id === id);
            if(storedProduct){
                storedProduct.quantity = storedCart[id];
                savedCart.push(storedProduct);
            }
        }
        setCart(savedCart);
    }, [products])
    return [cart, setCart];
}
export default useCart;