import { Homepage } from './Pages/Homepage'
import { AddCountry } from './Pages/AddCountry';
import { AddCity } from './Pages/AddCity';
import { Routes, Route } from 'react-router-dom';

export const Allroutes = () => {

    return (

        <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/add-city' element={<AddCity/>}></Route>   
            <Route path='/add-country' element={<AddCountry/>}></Route>
        </Routes>
    )
}