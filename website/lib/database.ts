import { firestore } from "./firestore";

export function getUserData(userId: string) {
  const docRef = firestore.collection("users").doc(userId);

  docRef.get().then((doc) => {
    if (doc.exists) {
      const data = doc.data();
      console.log(data);
    } else {
      console.log("No such document!");
    }
  });

  // var firstName = userId.;

  var lastName;
}
