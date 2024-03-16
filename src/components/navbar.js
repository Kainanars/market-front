import { useState, useEffect } from "react";
import { useColorMode, Flex, Button, IconButton, Link } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/react";

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isMenuOpen, setMenuOpen] = useState(false);
    const bgColorMenu = useColorModeValue("white", "black");
    const [mounted, setMounted] = useState(false)

    useEffect(() => { setMounted(true) }, [])

    if (!mounted) return null

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <Flex marginBottom={10}>
            <Flex position="fixed" top="1rem" right="1rem" align="center">
                {/* Desktop */}
                <Flex display={["none", "none", "flex", "flex"]}>
                    <Link href="/" passHref>
                        <Link>
                            <Button variant="ghost" aria-label="Home" my={5} w="100%">
                                Home
                            </Button>
                        </Link>
                    </Link>

                    <Link href="/cadastro" passHref>
                        <Link>
                            <Button variant="ghost" aria-label="Cadastrar" my={5} w="100%">
                                Cadastrar
                            </Button>
                        </Link>
                    </Link>
                </Flex>

                {/* Mobile */}
                <Flex>
                    <IconButton
                        aria-label="Open Menu"
                        size="lg"
                        mr={2}
                        icon={<HamburgerIcon />}
                        onClick={toggleMenu}
                        display={["flex", "flex", "none", "none"]}
                    />
                    <IconButton
                        aria-label="Toggle Dark Mode"
                        icon={isDark ? <MoonIcon /> : <SunIcon />}
                        onClick={toggleColorMode}
                        color={isDark ? "yellow.300" : "gray.800"}
                        bgColor={isDark ? "gray.800" : "yellow.300"}
                        _hover={{
                            color: isDark ? "yellow.400" : "gray.900",
                            bgColor: isDark ? "gray.700" : "yellow.400",
                        }}
                    />
                </Flex>
            </Flex>

            {/* Mobile Content */}
            <Flex
                w="100vw"
                display={isMenuOpen ? "flex" : "none"}
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
                        icon={<CloseIcon />}
                        onClick={toggleMenu}
                    />
                </Flex>

                <Flex flexDir="column" align="center">
                    <Link href="/" passHref>
                        <Link>
                            <Button variant="ghost" aria-label="Home" my={5} w="100%">
                                Home
                            </Button>
                        </Link>
                    </Link>

                    <Link href="/cadastro" passHref>
                        <Link>
                            <Button variant="ghost" aria-label="Cadastrar" my={5} w="100%">
                                Cadastrar
                            </Button>
                        </Link>
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    );
}
