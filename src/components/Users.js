import React, { useEffect } from "react";
import { Avatar, Wrap, WrapItem, Stack, Link, Center, LinkBox } from '@chakra-ui/react';
import { useRecoilState, useSetRecoilState } from "recoil";
import { usersAtom, selectedUserIdAtom } from "../atoms/Atoms";
import axios from "axios";

function Users() {
    const [users, setUsers] = useRecoilState(usersAtom);
    const setSelectedUserId = useSetRecoilState(selectedUserIdAtom);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            setUsers(response?.data);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    function handleUserClick(evt) {
        evt.preventDefault();
        setSelectedUserId(evt?.target?.dataset?.id);
    }

    function renderUsers(userData) {
        return userData.map((user, index) => {
            return (
                <WrapItem key={user.id}>
                    <LinkBox data-id={user.id}>
                        <Avatar size='xl' key={user.id} bg="teal.500" name={user.name} />
                        <Center><Link data-id={user.id} onClick={handleUserClick} alt={user.username}>{user.name}</Link></Center>
                    </LinkBox>
                </WrapItem>
            )
        })
    }

    return (
        <div>
            <Stack direction='row' className="userList">
                <Wrap spacing='10rem' justify='center' align='center'>
                    {renderUsers(users)}
                </Wrap>
            </Stack>
        </div>
    );
}

export default Users;