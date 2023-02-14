import React from 'react';
//import react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import pages
import Home from './pages/Home';
import Product1 from './pages/Product1';
import Product2 from './pages/Product2';
import Product3 from './pages/Product3';
import Product4 from './pages/Product4';
import Product5 from './pages/Product5';
import Product6 from './pages/Product6';
import Product7 from './pages/Product7';
import Product8 from './pages/Product8';
//subcategory
//supermarket
import Freshfood from './subcategory/supermarket/Freshfood'
import CandyandChocolate from './subcategory/supermarket/CandyandChocolate'
//beauty
import Bodycare from './subcategory/beauty/Bodycare';
import Cosmetics from './subcategory/beauty/Cosmetics';
import Dentalcare from './subcategory/beauty/Dentalcare';
import Haircare from './subcategory/beauty/Haircare';
import Men from './subcategory/beauty/Men';
import SanitaryPad from './subcategory/beauty/SanitaryPad';
import Skincare from './subcategory/beauty/Skincare';
//health
import AccessoriesFitness from './subcategory/health/AccessoriesFitness';
import Fitness from './subcategory/health/Fitness';
import Sports from './subcategory/health/Sports';
//House_and_garden
import Bathroom from './subcategory/House_and_garden/Bathroom';
import Bedroom from './subcategory/House_and_garden/Bedroom';
import Furniture from './subcategory/House_and_garden/Furniture';
import GardenTools from './subcategory/House_and_garden/GardenTools';
import GardeningEquipment from './subcategory/House_and_garden/GardeningEquipment';
import Kitchen from './subcategory/House_and_garden/Kitchen';
import KitchenFurniture from './subcategory/House_and_garden/KitchenFurniture';
import LivingRoomFurniture from './subcategory/House_and_garden/LivingRoomFurniture';
import OfficeFurniture from './subcategory/House_and_garden/OfficeFurniture';
import OutdoorFurniture from './subcategory/House_and_garden/OutdoorFurniture';
import PlantWatering from './subcategory/House_and_garden/PlantWatering';
//pets
import CatFood from './subcategory/pets/CatFood';
import Cleaning from './subcategory/pets/Cleaning';
import DogFood from './subcategory/pets/DogFood';
import Feeding from './subcategory/pets/Feeding';
import PetHouse from './subcategory/pets/PetHouse';
import Toys from './subcategory/pets/Toys';
//mother_and_child
import Baby from './subcategory/mother_and_child/Baby';
import BabyDiaper from './subcategory/mother_and_child/BabyDiaper';
import Equipment from './subcategory/mother_and_child/Equipment';
//fashion
import Bag from './subcategory/fashion/Bag';
import Glasses from './subcategory/fashion/Glasses';
import Shoe from './subcategory/fashion/Shoe';

import ProductDetails from './pages/ProductDetails';
//import componrnts
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'


const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/supermarket' element={<Product1 />} />
        <Route path='/beauty' element={<Product2 />} />
        <Route path='/health' element={<Product3 />} />
        <Route path='/electrical' element={<Product4 />} />
        <Route path='/House_and_garden' element={<Product5 />} />
        <Route path='/pets' element={<Product6 />} />
        <Route path='/mother_and_child' element={<Product7 />} />
        <Route path='/fashion' element={<Product8 />} />
        {/* subcategory */}
        { /* supermarket */ }
        <Route path='/freshfood' element={<Freshfood />} />
        <Route path='/CandyandChocolate' element={<CandyandChocolate />} />
        { /* beauty */ }
        <Route path='/Bodycare' element={<Bodycare />} />
        <Route path='/Cosmetics' element={<Cosmetics />} />
        <Route path='/Dentalcare' element={<Dentalcare />} />
        <Route path='/Haircare' element={<Haircare />} />
        <Route path='/Men' element={<Men />} />
        <Route path='/SanitaryPad' element={<SanitaryPad />} />
        <Route path='/Skincare' element={<Skincare />} />
        { /* health */ }
        <Route path='/AccessoriesFitness' element={<AccessoriesFitness />} />
        <Route path='/Fitness' element={<Fitness />} />
        <Route path='/Sports' element={<Sports />} />
        { /* House_and_garden */ }
        <Route path='/Bathroom' element={<Bathroom />} />
        <Route path='/Bedroom' element={<Bedroom />} />
        <Route path='/Furniture' element={<Furniture />} />
        <Route path='/GardeningEquipment' element={<GardeningEquipment />} />
        <Route path='/GardenTools' element={<GardenTools />} />
        <Route path='/Kitchen' element={<Kitchen />} />
        <Route path='/KitchenFurniture' element={<KitchenFurniture />} />
        <Route path='/LivingRoomFurniture' element={<LivingRoomFurniture />} />
        <Route path='/OfficeFurniture' element={<OfficeFurniture />} />
        <Route path='/OutdoorFurniture' element={<OutdoorFurniture />} />
        <Route path='/PlantWatering' element={<PlantWatering />} />
        { /* Pets */ }
        <Route path='/CatFood' element={<CatFood />} />
        <Route path='/DogFood' element={<DogFood />} />
        <Route path='/Cleaning' element={<Cleaning />} />
        <Route path='/Feeding' element={<Feeding />} />
        <Route path='/PetHouse' element={<PetHouse />} />
        <Route path='/Toys' element={<Toys />} />
        { /* mother_and_child */ }
        <Route path='/Baby' element={<Baby />} />
        <Route path='/BabyDiaper' element={<BabyDiaper />} />
        <Route path='/Equipment' element={<Equipment />} />
        { /* fashion */ }
        <Route path='/Bag' element={<Bag />} />
        <Route path='/Glasses' element={<Glasses />} />
        <Route path='/Shoe' element={<Shoe />} />

        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
      <Sidebar />
      <Footer />
    </Router>
  </div>;
};

export default App;
