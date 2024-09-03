import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';




const firebaseConfig = {
    apiKey: "AIzaSyBca9UCaHP6oKKpNDfbWBKZLN8sfShSK9I",
    authDomain: "kev-s-interiors-and-builders.firebaseapp.com",
    projectId: "kev-s-interiors-and-builders",
    storageBucket: "kev-s-interiors-and-builders.appspot.com",
    messagingSenderId: "370621973012",
    appId: "1:370621973012:web:49e21185c23fc74d8a1d01",
    measurementId: "G-SR2EN02P4Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

/**
 * Adds a project to Firestore.
 * @param {Object} project - The project data to be added.
 * @returns {Promise<void>}
 */
async function addProject(project) {
    try {
        await addDoc(collection(db, 'project'), project);
    } catch (error) {
        console.error('Error adding project:', error);
    }
}
/**
 * @param {any} contact
 */
async function addContact(contact) {
    try {
        await addDoc(collection(db, 'contact'), contact);
    } catch (error) {
        console.error('Error adding contact', error);
    }
}

/**
 * Adds a team member to Firestore.
 * @param {Object} teamMember - The team member data to be added.
 * @returns {Promise<void>}
 */
async function addTeamMember(teamMember) {
    try {
        await addDoc(collection(db, 'team'), teamMember);
    } catch (error) {
        console.error('Error adding team member:', error);
    }
}

/**
 * Uploads an image to Firebase Storage and returns its download URL.
 * @param {Blob} file - The image file to be uploaded.
 * @param {string} path - The path in Firebase Storage where the file will be stored.
 * @returns {Promise<string>} - The download URL of the uploaded image.
 */
async function uploadImage(file, path) {
    if (file instanceof Blob) {
        const uniqueFileName = `${uuidv4()}-${file}`;
        const storageRef = ref(storage, `${path}/${uniqueFileName}`);
        await uploadBytes(storageRef, file);
        return await getDownloadURL(storageRef);
    } else {
        throw new Error('The provided file is not a Blob.');
    }
}

export { auth, db, storage, addProject, addTeamMember,addContact, uploadImage,};
