import { useState } from "react";
import { useProductsAction } from "../../components/Provider/ProductsProvider";
import styles from "./Search.module.css"

const Search = ({filter}) => {
    const dispatch = useProductsAction();

    const [value,setValue] = useState("");

    const searchHandler = (e) => {
        dispatch({type:"filter" , event : filter});
        dispatch({type:"search" , event : e});
        setValue(e.target.value);
    }
    return ( 
        <div className={styles.search_input}>
            <input type="text"
            placeholder="Search Products..."
            onChange={searchHandler}
            className={styles.search}
            value={value}>
            </input>
        </div>
     );
}
 
export default Search;