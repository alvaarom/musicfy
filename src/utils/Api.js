import app from "./Firebase";
import { getFirestore, doc, collection, getDoc } from "firebase/firestore";

const db = getFirestore(app);
const Admins = collection(db, "admins");

export async function isUserAdmin(uid) {
  const refDoc = doc(Admins, uid);
  const snap = await getDoc(refDoc);
  const exists = snap.exists();
  return exists;
}
