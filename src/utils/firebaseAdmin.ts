import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue, Filter } from 'firebase-admin/firestore';

initializeApp({
    credential: applicationDefault()
});

const db = getFirestore();

//read
async function quickstartListen(db: any) {
    const snapshot = await db.collection('users').get();
    snapshot.forEach((doc: any) => {
        console.log(doc.id, '=>', doc.data());
    });
}
quickstartListen(db);


// add
async function quickstartAddData(db: any) {
    const docRef = db.collection('users').doc('alovelace');

    await docRef.set({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
    });
}
quickstartAddData(db);

// update
async function updateDocument(db: any) {
    const cityRef = db.collection('cities').doc('DC');
    const res = await cityRef.update({ capital: true });

    console.log('Update: ', res);
}
updateDocument(db);

// delete
async function deleteDocument(db: any) {
    const res = await db.collection('cities').doc('DC').delete();

    console.log('Delete: ', res);
}

deleteDocument(db);