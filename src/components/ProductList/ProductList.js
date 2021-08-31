import Products from "../Produts/Products";
import React from 'react';
import styles from "./ProductList.module.css";
import { useProducts, useProductsAction } from "../Provider/ProductsProvider";

const ProductList = () => {
       
    const products = useProducts();
    const dispatch = useProductsAction()


        if(products.length === 0){
            return <div>You Dont have any Item in Your Cart</div>
        }
        return ( 
            <div className={styles.products}>
                {products.map(product => {
                    return ( <Products
                    product = {product}
                    key={product.id}
                    // onChange = {(e)=>onChangeInputHandler(e,product.id)}
                    onDelete = {()=>dispatch({type : "delete" , id : product.id})}
                    onIncreament = {()=>dispatch({type : "increment" , id : product.id})}
                    ondecreament = {()=>dispatch({type : "decrement" , id : product.id})}
                    />
                    )
                })}
            </div>
         );
    }

 
export default ProductList;