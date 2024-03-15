import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { Box, Heading, VStack, Input, Button, HStack } from '@chakra-ui/react';

const AddProductPage = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantityInStock, setQuantityInStock] = useState('');
    const navigate = useNavigate();


    const handleGoBack = () => {
        navigate(-1); // Voltar para a página anterior
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://market-4c5n.onrender.com/api/products', {
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
            <Heading>Cadastrar Produto</Heading>
            <VStack as="form" onSubmit={handleSubmit} spacing="4" mt="4">
                <Input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
                <Input placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} />
                <Input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
                <Input placeholder="Quantidade" value={quantityInStock} onChange={e => setQuantityInStock(e.target.value)} />
                <HStack spacing="4" mt="4" justifyContent="space-between">
                    <Button onClick={handleGoBack} colorScheme="yellow">Voltar</Button>
                    <Button type="submit" colorScheme="green">Cadastrar</Button>
                </HStack>
            </VStack>
        </Box>
    );
};

export default AddProductPage;
