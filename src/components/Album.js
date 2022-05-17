import React, { useEffect } from "react";
import { Wrap, WrapItem, Stack, Box, Link, Heading } from '@chakra-ui/react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { selectedUserIdAtom, albumAtom, selectedAlbumIdAtom } from "../atoms/Atoms";
import axios from "axios";

function Albums() {
    const [albums, setAlbums] = useRecoilState(albumAtom);
    const selectedUserId = useRecoilValue(selectedUserIdAtom);
    const setSelectedAlbum = useSetRecoilState(selectedAlbumIdAtom);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${selectedUserId}`).then(response => {
            setAlbums(response?.data);
        }).catch(error => {
            console.log(error);
        })
    }, [selectedUserId]);

    function renderAlbums(albums) {
        return albums.map((album, index) => {
            return (
                <WrapItem key={album.id}>
                    <Box
                        maxW={'445px'}
                        w={'400px'}
                        bg={'white'}
                        _dark={{ bg: 'gray.900' }}
                        boxShadow={'2xl'}
                        rounded={'sm'}
                        p={6}
                        overflow={'hidden'}>
                        <Box
                            h={'210px'}
                            bg={'gray.100'}
                            mt={-6}
                            mx={-6}
                            mb={6}
                            pos={'relative'}>
                        </Box>
                        <Stack>
                            <Heading
                                color={'gray.700'}
                                _dark={{ bg: 'white' }}
                                fontSize={'2xl'}
                                fontFamily={'body'}>
                                <Link data-id={album.id} onClick={handleAlbumClick}>
                                    {album.title}
                                </Link>
                            </Heading>
                        </Stack>
                    </Box>
                </WrapItem>
            )
        })
    }

    function handleAlbumClick(evt) {
        evt.preventDefault();
        setSelectedAlbum(evt?.target?.dataset?.id);
    }
    return (
        <div>
            <Stack direction='row' className="userList">
                <Wrap spacing='10rem' justify='center' align='center'>
                    {albums.length > 0 ? renderAlbums(albums) : ""}
                </Wrap>
            </Stack>
        </div>
    );
}

export default Albums;