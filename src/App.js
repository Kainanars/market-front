import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import AddProductPage from './AddProductPage';
import EditProductPage from './EditProductPage';
import ProductListPage from './ProductListPage';
import Navbar from './Navbar';
import Footer from './Footer';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



const App = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <Box p="4" pl="400px" pr={"400px"}> {/* Adiciona um espaçamento à esquerda para evitar que os inputs se estiquem */}
        <BrowserRouter>
          <Routes>
            <Route path="/add" element={<AddProductPage />} />
            <Route path="/edit/:id" element={<EditProductPage />} />
            <Route path="/" element={<ProductListPage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Box>
    </ChakraProvider>
  );
};

export default App;
