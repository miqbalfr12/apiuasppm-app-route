import {
 collection,
 doc,
 getDoc,
 getDocs,
 getFirestore,
 orderBy,
 query,
 where,
 addDoc,
 limitToLast,
 updateDoc,
 deleteDoc,
} from "firebase/firestore";
import app from "@/lib/firebase/init";

const firestore = getFirestore(app);

export async function retrieveData(collectiongName: string) {
 const snapshot = await getDocs(collection(firestore, collectiongName));
 const data = snapshot.docs.map((doc) => ({
  id: doc.id,
  ...doc.data(),
 }));

 return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
 const snapshot = await getDoc(doc(firestore, collectionName, id));
 const data = snapshot.data();
 if (data) data.id = snapshot.id;
 return data;
}

export async function addData(collectiongName: string, data: object) {
 const docRef = await addDoc(collection(firestore, collectiongName), data);
 console.log("Document written with ID: ", docRef.id);
 console.log("Document: ", docRef);
 return docRef;
}

export async function updateData(
 collectiongName: string,
 id: string,
 data: object
) {
 const docRef = doc(firestore, collectiongName, id);
 await updateDoc(docRef, data);
 return true;
}
