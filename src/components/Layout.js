import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Grid,
    GridItem,
    Container,
    Box,
    Heading
} from '@chakra-ui/react'
import React from "react";
import Users from './Users';
import Album from './Album';
import Photos from './Photos';

function Layout() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box
                sx={{ cursor: "pointer" }}
                w="100%"
                bg="#344955"
                p={4}
                color="white"
                textAlign="center"
                onClick={onOpen}
            >
                <Heading as="h6" size="md">
                    Select User
                </Heading>
            </Box>
            <Drawer
                id="drawerContainer"
                size="sm"
                isOpen={isOpen}
                placement="top"
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Select a user to view album</DrawerHeader>
                    <DrawerBody>
                        <Users />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            <Grid templateColumns='repeat(5, 1fr)' gap={4} height='100%' bg='papayawhip'>
                <GridItem colSpan={2} >
                    <Container maxW="xl" centerContent>
                        <Box padding='4' color='black' maxW='md'>
                            <Album />
                        </Box>
                    </Container>
                </GridItem>
                <GridItem colStart={3} colEnd={6}>
                    <Photos />
                </GridItem>
            </Grid>
        </>
    )
}

export default Layout;