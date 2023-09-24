import React from 'react';
import ProductContext from '../context/product';
import Main from './main';
import { useState } from 'react';
const App = () => {
    const [state, setState] = useState([
        { id: 1, content: "Saturday" },
        { id: 2, content: "Sunday" },
        { id: 3, content: "Monday" }
    ])

    const handleAdd = (e)=>{
        setState(e)
    }
    return (
        <>
            <ProductContext.Provider value={{state}}>
                <Main add={handleAdd} value={state}/>
            </ProductContext.Provider>
        </>
    );
}

export default App;