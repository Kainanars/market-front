import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Heading, VStack, Input, Button, HStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Edicao() {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (id) {
            axios.get(`https://market-4c5n.onrender.com/api/products/${id}`)
                .then(response => setProduct(response.data))
                .catch(error => console.error(error));
        }
    }, [id]);

    const handleGoBack = () => {
        router.back();
        router.push('/');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://market-4c5n.onrender.com/api/products/${id}`, product)
            .then(() => {
                router.push('/');
            })
            .catch(error => console.error(error));
    };

    return (
        <Box>
            <Heading>Editar Produto</Heading>
            {product && (
                <VStack as="form" onSubmit={handleSubmit} spacing="4" mt="4">
                    <Input placeholder="Nome" value={product.Name} onChange={e => setProduct({ ...product, Name: e.target.value })} />
                    <Input placeholder="Descrição" value={product.Description} onChange={e => setProduct({ ...product, Description: e.target.value })} />
                    <Input placeholder="Preço" value={product.Price} onChange={e => setProduct({ ...product, Price: e.target.value })} />
                    <Input placeholder="Quantidade" value={product.QuantityInStock} onChange={e => setProduct({ ...product, QuantityInStock: e.target.value })} />
                    <HStack spacing="4" mt="4" justifyContent="space-between">
                        <Button onClick={handleGoBack} colorScheme="blue">Voltar</Button>
                        <Button type="submit" colorScheme="yellow">Salvar</Button>
                    </HStack>
                </VStack>
            )}
        </Box>
    );
};
