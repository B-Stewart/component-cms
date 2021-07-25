import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase.config";

export default async () => {
  /**
   * The code to be executed should be placed within a default function that is
   * exported by the global script. Ensure all of the code in the global script
   * is wrapped in the function() that is exported.
   */

  // TODO: Replace the following with your app's Firebase project configuration

  const firebaseApp = initializeApp(firebaseConfig);
};
