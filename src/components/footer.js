import { Container, Stack, IconButton, ButtonGroup, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaInstagram, FaDocker } from 'react-icons/fa';
import NextLink from 'next/link';

export default function Footer() {
    return (
        <Container bg="lightblue.500" as="footer" role="contentinfo" py={{ base: '12', md: '16' }} minW="100%">
            <Stack spacing={{ base: '4', md: '5' }}>
                <Stack justify="space-between" direction="row" align="center">
                    <ButtonGroup variant="tertiary">
                        <IconButton as={NextLink} href="https://www.linkedin.com/in/kainanars/" aria-label="LinkedIn" icon={<FaLinkedin />} />
                        <IconButton as={NextLink} href="https://hub.docker.com/u/devknx" aria-label="Docker Hub" icon={<FaDocker />} />
                        <IconButton as={NextLink} href="https://github.com/Kainanars" aria-label="Twitter" icon={<FaGithub />} />
                        <IconButton as={NextLink} href="https://www.instagram.com/kainan.ars/" aria-label="GitHub" icon={<FaInstagram />} />
                    </ButtonGroup>
                </Stack>
                <Text fontSize="sm" color="fg.subtle">
                    &copy; {new Date().getFullYear()} Kainan Rodrigues. All rights reserved.
                </Text>
            </Stack>
        </Container>
    );
}
