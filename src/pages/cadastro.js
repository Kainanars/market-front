import React, { useState } from 'react';
import axios from 'axios';
import { Box, Heading, VStack, Input, Button, HStack, Flex, useMediaQuery } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Cadastro() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantityInStock, setQuantityInStock] = useState('');
    const router = useRouter()

    const handleGoBack = () => {
        router.back()
        router.push('/')
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://market-4c5n.onrender.com/api/products', {
            Name: name,
            Description: description,
            Price: price,
            QuantityInStock: quantityInStock
        })
            .then(() => {
                setName('');
                setDescription('');
                setPrice('');
                setQuantityInStock('');
            })
            .catch(error => console.error(error));
    };

    const [isMobile] = useMediaQuery("(max-width: 767px)");

    return (
        <Box>
            <Flex justify="center" marginBottom={5} marginTop={20}>
                <Heading>Cadastrar Produto</Heading>
            </Flex>
            <VStack
                as="form"
                onSubmit={handleSubmit}
                spacing="4"
                mt="4"
                padding={4}
                maxWidth={isMobile ? "90%" : "40%"}
                marginX={isMobile ? "auto" : "auto"}
            >
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
