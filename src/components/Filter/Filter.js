import { useProductsAction } from "../Provider/ProductsProvider";
import { useEffect, useState } from "react";
import styles from "./filter.module.css"
import SelectComponent from "../../common/Select/Select";
import Search from "../../common/Search/Search";

const filterOptions = [
    {value : "" , label: "All"},
    {value : "S" , label : "S"},
    {value : "M" , label : "M"},
    {value : "L" , label : "L"},
    {value : "X" , label : "X"},
    {value : "XL" , label : "XL"},
    {value : "XXL" , label : "XXL"},
];
const prices = [
    {value : "Low" , label: "Low to High"},
    {value : "High" , label : "High to Low"},
];


const Filter = () => {
    
    const dispatch = useProductsAction();

    const [filter,setFilter] = useState("");
    const [price,setPrice] = useState("");

    const filterHandler = (selectedOption) => {
        dispatch({type:"filter" , event:selectedOption});
        dispatch({type:"price" , event:price});
        setFilter(selectedOption);
    }
    const priceHandler = (selectedOption) => {
        dispatch({type:"price" , event:selectedOption});
        setPrice(selectedOption);
    }

    useEffect(()=>{
        setFilter({value : "" , label: "All"})
    },[]);
    
    return ( 
        <>

            <Search filter={filter}/>

        <div className={styles.filter}>

            <SelectComponent
                title="order by Size"
                value = {filter}
                onChange={filterHandler}
                options={filterOptions}
            />
           
            <SelectComponent
                title="order by Price"
                value = {price}
                onChange={priceHandler}
                options={prices}
            />
        </div>
        
        </>
        
     );
}
 
export default Filter;