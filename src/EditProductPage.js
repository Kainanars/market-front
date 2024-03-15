import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Heading, VStack, Input, Button } from '@chakra-ui/react';
const navigate = useNavigate;

const EditProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://market-4c5n.onrender.com/api/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error(error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://market-4c5n.onrender.com/api/products/${id}`, product)
            .then(() => {
                navigate('/');
            })
            .catch(error => console.error(error));
    };

    return (
        <Box>
            <Heading>Edit Product</Heading>
            {product && (
                <VStack as="form" onSubmit={handleSubmit} spacing="4" mt="4">
                    <Input placeholder="Name" value={product.Name} onChange={e => setProduct({ ...product, Name: e.target.value })} />
                    <Input placeholder="Description" value={product.Description} onChange={e => setProduct({ ...product, Description: e.target.value })} />
                    <Input placeholder="Price" value={product.Price} onChange={e => setProduct({ ...product, Price: e.target.value })} />
                    <Input placeholder="Quantity In Stock" value={product.QuantityInStock} onChange={e => setProduct({ ...product, QuantityInStock: e.target.value })} />
                    <Button type="submit">Save</Button>
                </VStack>
            )}
        </Box>
    );
};

export default EditProductPage;
