import React, { useEffect } from "react";
import { Stack, Box, Image, Wrap, WrapItem, Container } from '@chakra-ui/react';
import { useRecoilState, useRecoilValue } from "recoil";
import { photoAtom, selectedAlbumIdAtom } from "../atoms/Atoms";
import axios from "axios";

function Photos() {
    const [photos, setPhotos] = useRecoilState(photoAtom);
    const selectedAlbumId = useRecoilValue(selectedAlbumIdAtom);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${selectedAlbumId}`).then(response => {
            setPhotos(response?.data);
        }).catch(error => {
            console.log(error);
        })
    }, [selectedAlbumId]);

    function renderPhotos(photos) {
        return photos.map((photo, index) => {
            return (
                <WrapItem key={photo.id}>
                <Box
                    role={'group'}
                    key={photo.id}
                    className={'photoBox'}
                    p={6}
                    w={'full'}
                    bg={'white'}
                    _dark={{ bg: 'gray.800' }}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}>
                    <Box
                        bg={'gray.100'}
                        boxShadow={'2xl'}
                        pos={'relative'}
                        className='photoThumbnail'
                    >
                        <Image
                            boxSize='200px'
                            objectFit='cover'
                            rounded={'lg'}
                                height={130}
                                width={182}
                            src={photo.thumbnailUrl}
                            alt={photo.title} />
                    </Box>
                </Box>
                </WrapItem>
            )
        })
    }

    return (
        <div>
            <Container>
                <Wrap spacing='2rem' className='photoContainer'>
                    {photos && photos.length > 0 ? renderPhotos(photos) : ""}
                </Wrap>
            </Container>
        </div>
    );
}

export default Photos;