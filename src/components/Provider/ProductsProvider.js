import React, { createContext, useContext, useReducer} from 'react';
import { productsData } from '../../products';
import _ from "lodash"


const ProductsContext = createContext();
const ProductsContextDispature = createContext();

const initialState = productsData;

const reducer = (state,action) => {
    switch(action.type){

        case "increment" :
            const index = state.findIndex(item => item.id === action.id);
            const product = {...state[index]};
            product.quantity ++;
            const newProducts = [...state];
            newProducts[index] = product;
            return newProducts;

        case "decrement" :
            {
                const index = state.findIndex(item => item.id === action.id);
                const product = {...state[index]};
                const newProducts = [...state];
            
                if(product.quantity === 1){
                const filteredProductRemove = state.filter(p => p.id !== action.id);
                return filteredProductRemove
            
                }else{
                    product.quantity --;
                    newProducts[index] = product;
                    return newProducts
                }
            }
        case "delete":
                const filteredProduct = state.filter(p => p.id !== action.id);
                return filteredProduct;
                
        case "filter":
            if(action.event.value===""){
                return productsData;
            }else{
                const filteredProducts = productsData.filter( p => p.availableSizes.indexOf(action.event.value) >=0);
                return filteredProducts
            }
        case "price" : 
        const products = [...state]
  
        if(action.event.value==="Low"){
           return _.orderBy(products, ['price'],['asc']);
        }else{
           return _.orderBy(products, ['price'],['desc']);
        }
        case "search" : 
        const value = action.event.target.value;
        if(value ===""){
            return state;
        }
        const updatedSearch = state.filter( p => p.title.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) >=0);
        return updatedSearch

        default:
            return state;
    }
}


const ProductsProvider = ({children}) => {

    const [products,dispatch] = useReducer(reducer,initialState);
    
    return (

        <ProductsContext.Provider value={products}>
            <ProductsContextDispature.Provider value={dispatch}>
                {children}
            </ProductsContextDispature.Provider>
        </ProductsContext.Provider>

     );
    }
    
    export default ProductsProvider;

    export const useProducts = () => useContext(ProductsContext);

    export const useProductsAction = () => {
        return useContext(ProductsContextDispature);
    };
