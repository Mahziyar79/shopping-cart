import React from 'react';
import './App.css';
import Filter from './components/Filter/Filter';
import Wrapper from './components/hoc/Wrapper';
import Navbar from './components/navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import ProductsProvider from './components/Provider/ProductsProvider';



const App = () => {
    return(
        <> 
        <ProductsProvider>
        <Navbar />
        <Filter />
        <h2> first App Component</h2>
        <ProductList />
        </ProductsProvider>
        </>
    )    
}             


export default Wrapper(App,"container");

