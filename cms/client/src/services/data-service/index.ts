import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

const db = getFirestore();

export class DataService {
  collectionName: string;

  constructor(collectionName: string) {
    this.collectionName = collectionName;
  }

  create = async (data: object) => {
    try {
      const docRef = await addDoc(collection(db, this.collectionName), data);
      console.log("Document written with ID: ", docRef.id);
      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // getAll = async () => {
  //   const querySnapshot = await getDocs(collection(db, this.collectionName));
  //   querySnapshot.forEach((doc) => {
  //     console.log(`${doc.id} => ${doc.data()}`);
  //   });
  // }
}

export const userService = new DataService("users");
