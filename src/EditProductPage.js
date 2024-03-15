import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Heading, VStack, Input, Button, HStack } from '@chakra-ui/react';

const EditProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://market-4c5n.onrender.com/api/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error(error));
    }, [id]);

    const handleGoBack = () => {
        navigate(-1); // Voltar para a página anterior
    };

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

export default EditProductPage;
