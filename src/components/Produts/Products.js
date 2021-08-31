import styles from './Product.module.css';
import { BiTrash } from "react-icons/bi";


const Products = (props) => {

    return(
        <div className ={styles.product}>
            
            <p>Product Name is : {props.product.title}</p>

            <p>Price is : {props.product.price}</p>
            
            <button className={`${styles.button} ${props.product.quantity === 1 && styles.remove}`}
            onClick = {props.ondecreament}>
                {props.product.quantity > 1 ? "-" : <BiTrash />}
            </button>

            <button className={styles.button} onClick = {props.onIncreament}>+</button>

            <button className={`${styles.button} ${styles.del}`} onClick = {props.onDelete}>Delete</button>

            <p className = {styles.increNum}>{props.product.quantity}</p>

        </div>
    )
}

export default Products;