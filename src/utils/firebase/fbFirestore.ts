import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  query,
  where,
  onSnapshot,
} from "@firebase/firestore";

import { db } from "./fbInit";

export const MyAddDoc = (collectionName: string, objectData: object) => {
  const docRef = addDoc(collection(db, collectionName), objectData);
  console.log(docRef);
};
// ------------------------------
export const MySetDoc = (collectionName: string, docId: string, objectData: object) => {
  setDoc(doc(db, collectionName, docId), objectData);
};
// ------------------------------
export const MyGetDoc = (collectionName: string, docId: string) => {
  getDoc(doc(db, collectionName, docId)).then((a) => {
    if (a.exists()) {
      console.log(a);
    } else {
      console.log("error");
    }
  });
};
// ------------------------------
export const MyGetDocs = (collectionName: string) => {
  getDocs(collection(db, collectionName)).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
    });
  });
};
// ------------------------------
export const MyGetQuiryDocs = (collectionName: string) => {
  const q = query(collection(db, collectionName), where("id", "<", 10));
  getDocs(q).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
    });
  });
};
// ------------------------------
export const InitSnapshot = (collectionName: string) => {
  const q = query(collection(db, collectionName), where("id", "<", 10));
  onSnapshot(
    q,
    (snap) => {
      snap.forEach((doc) => {
        console.log(doc);
      });
    },
    (error) => {
      console.log("firebase : onSnapshot :", error.message);
    }
  );
};
