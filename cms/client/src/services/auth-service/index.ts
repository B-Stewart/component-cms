import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const auth = getAuth();
export const createUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
  } catch (error) {
    console.error(`${error.code} - ${error.message}`);
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
  } catch (error) {
    console.error(`${error.code} - ${error.message}`);
  }
};

export const onAuthStateChange = async (callback: (user) => any) => {
  //user.uid works
  return onAuthStateChanged(auth, callback);
};

export const getCurrentUser = () => auth.currentUser;
