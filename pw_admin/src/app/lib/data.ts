// import { getFirestore, query, where } from "firebase/firestore";
// import { initializeApp } from "firebase/app";
// import { FirebaseConfig } from "../util/configs";
// import { addDoc, getDocs, collection } from "firebase/firestore";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   getAuth,
// } from "firebase/auth";

// import { iUser } from "@/app/lib/definitions";

// const app = initializeApp(FirebaseConfig);
// // const auth = getAuth();
// const db = getFirestore(app);

// // get current user
// const currentUser = auth.currentUser;
// console.log(currentUser);

// const loginWithEmailAndPassword = ({
//   email,
//   password,
// }: {
//   email: string;
//   password: string;
// }) => {
//   return signInWithEmailAndPassword(auth, email, password);
// };

// const signUpWithEmailAndPassword = ({
//   email,
//   password,
// }: {
//   email: string;
//   password: string;
// }) => {
//   return createUserWithEmailAndPassword(auth, email, password);
// };

// async function signOut() {
//   try {
//     console.log("Signing out...");
//     localStorage.removeItem("userData");
//     return auth.signOut();
//   } catch (error) {
//     console.error("Error signing out with Google", error);
//   }
// }

// const addUserToDb = async ({ name, uid, authProvider, email }: iUser) => {
//   await addDoc(collection(db, "users"), {
//     uid: uid,
//     name: name,
//     authProvider: authProvider,
//     email: email,
//   });
// };

// const getUserData = async (userUid: unknown) => {
//   const q = query(collection(db, "users"), where("uid", "==", userUid));
//   const doc = await getDocs(q);
//   const data = doc.docs[0].data();

//   return data;
// };

// const addToDb = async () => {
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815,
//     });

//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// };

// const addTest2 = async () => {
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: "Alan",
//       middle: "Mathison",
//       last: "Turing",
//       born: 1912,
//     });

//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// };

// const getData = async () => {
//   const querySnapshot = await getDocs(collection(db, "users"));
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data().first}`);
//   });
// };

// export {
//   app,
//   db,
//   addUserToDb,
//   loginWithEmailAndPassword,
//   signUpWithEmailAndPassword,
//   getUserData,
//   signOut,
//   addToDb,
//   addTest2,
//   getData,
// };
