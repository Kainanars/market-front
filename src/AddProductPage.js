import React, { useState } from 'react';
import axios from 'axios';
import { Box, Heading, VStack, Input, Button } from '@chakra-ui/react';

const AddProductPage = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantityInStock, setQuantityInStock] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/products', {
            Name: name,
            Description: description,
            Price: parseFloat(price),
            QuantityInStock: parseInt(quantityInStock)
        })
            .then(() => {
                setName('');
                setDescription('');
                setPrice('');
                setQuantityInStock('');
            })
            .catch(error => console.error(error));
    };

    return (
        <Box>
            <Heading>Add Product</Heading>
            <VStack as="form" onSubmit={handleSubmit} spacing="4" mt="4">
                <Input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <Input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
                <Input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
                <Input placeholder="Quantity In Stock" value={quantityInStock} onChange={e => setQuantityInStock(e.target.value)} />
                <Button type="submit">Add</Button>
            </VStack>
        </Box>
    );
};

export default AddProductPage;
