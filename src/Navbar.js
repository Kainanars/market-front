import { useState } from 'react'
import {
    useColorMode,
    Flex,
    Button,
    IconButton,
    Link
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons' // Importe os ícones MoonIcon e SunIcon
import { useColorModeValue } from '@chakra-ui/react';


const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    const [display, changeDisplay] = useState('none')
    const bgColorMenu = useColorModeValue('white', 'black');

    return (
        <Flex marginBottom={10}>
            <Flex
                position="fixed"
                top="1rem"
                right="1rem"
                align="center"
            >
                {/* Desktop */}
                <Flex
                    display={['none', 'none', 'flex', 'flex']}
                >
                    <Link href="/">
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Home"
                            my={5}
                            w="100%"
                        >
                            Home
                        </Button>
                    </Link>

                    <Link href="/cadastro">
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Cadastrar"
                            my={5}
                            w="100%"
                        >
                            Cadastrar
                        </Button>
                    </Link>

                </Flex>

                {/* Mobile */}
                <IconButton
                    aria-label="Open Menu"
                    size="lg"
                    mr={2}
                    icon={
                        <HamburgerIcon />
                    }
                    onClick={() => changeDisplay('flex')}
                    display={['flex', 'flex', 'none', 'none']}
                />
                <IconButton
                    aria-label="Toggle Dark Mode"
                    icon={isDark ? <MoonIcon /> : <SunIcon />}
                    onClick={toggleColorMode}
                    color={isDark ? 'yellow.300' : 'gray.800'}
                    bgColor={isDark ? 'gray.800' : 'yellow.300'}
                    _hover={{
                        color: isDark ? 'yellow.400' : 'gray.900',
                        bgColor: isDark ? 'gray.700' : 'yellow.400'
                    }}
                />
            </Flex>

            {/* Mobile Content */}
            <Flex
                w='100vw'
                display={display}
                bgColor={bgColorMenu}
                zIndex={20}
                h="100vh"
                pos="fixed"
                top="0"
                left="0"
                overflowY="auto"
                flexDir="column"
            >
                <Flex justify="flex-end">
                    <IconButton
                        mt={2}
                        mr={2}
                        aria-label="Close Menu"
                        size="lg"
                        icon={
                            <CloseIcon />
                        }
                        onClick={() => changeDisplay('none')}
                    />
                </Flex>

                <Flex
                    flexDir="column"
                    align="center"
                >
                    <Link href="/">
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Home"
                            my={5}
                            w="100%"
                        >
                            Home
                        </Button>
                    </Link>

                    <Link href="/cadastro">
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Cadastrar"
                            my={5}
                            w="100%"
                        >
                            Cadastrar
                        </Button>
                    </Link>

                </Flex>
            </Flex>
        </Flex>
    )
}

export default Navbar;
