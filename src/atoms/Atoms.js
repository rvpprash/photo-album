import {
    atom,
    selector,
    useRecoilState,
    useRecoilValue
} from 'recoil';

export const usersAtom = atom({
    key: "usersAtom",
    default: [],
});

export const selectedUserIdAtom = atom({
    key: "selectedUserIdAtom",
    default: 0,
});

export const albumAtom = atom({
    key: "albumAtom",
    default: [],
});

export const selectedAlbumIdAtom = atom({
    key: "selectedAlbumId",
    default: 0,
});

export const photoAtom = atom({
    key: "photoAtom",
    default: [],
});

export const selectedPhotoAtom = atom({
    key: "selectedPhotoAtom",
    default: 0,
});