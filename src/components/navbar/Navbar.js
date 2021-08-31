// import { useState } from "react";
import { useProducts } from "../Provider/ProductsProvider";
import styles from "./Navbar.module.css";




const Navbar = () => {
    
const products = useProducts();

const totalPro = () => {
    const totalProduct = products.reduce((acc,ref)=>{
        return acc + ref.quantity
    },0)
    return totalProduct;
}

    return ( 
        <header className={styles.navbar}>
            <h1>Mahziyar Shopping</h1>
            <p>
            {totalPro()}
            </p>
        </header>
     );
}
 
export default Navbar;