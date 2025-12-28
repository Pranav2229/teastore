import { collection, writeBatch, doc } from "firebase/firestore";
import { db } from "../FireBaseConnection/FireBase";
import { teasData } from "../data/products";

export const uploadTeas = async () => {
    const batch = writeBatch(db);
    const teasRef = collection(db, "teas");

    teasData.forEach((tea) => {
        const teaDoc = doc(teasRef); // auto ID
        batch.set(teaDoc, {
            ...tea,
            createdAt: new Date()
        });
    });

    await batch.commit();
    alert('Updated')
    console.log("✅ All teas uploaded successfully");
};
