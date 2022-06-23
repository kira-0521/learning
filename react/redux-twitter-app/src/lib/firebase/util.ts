import firebase from 'firebase/app'

/*

タイムスタンプ

*/
export const timestamp = firebase.firestore.FieldValue.serverTimestamp()
