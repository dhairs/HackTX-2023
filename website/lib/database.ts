import { firestore } from "./firestore";

//instance

interface UserData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  username: string;
}

export function getUserData(userId: string) {
  const docRef = firestore.collection("users").doc(userId);

  var data: UserData = {} as UserData;
  docRef.get().then((doc) => {
    if (doc.exists) {
      data = doc.data() as UserData;
      console.log(data);
    } else {
      console.log("No such document!");
    }
  });

  //store all values into userData
  var userData = {
    firstName: data.firstName,
    lastName: data.lastName,
    phoneNumber: data.phoneNumber,
    email: data.email,
    username: data.username,
  };

  return userData;
}

// update the user's info
export function updateUser(userId: string, newData: UserData) {
  firestore
    .collection("users")
    .doc(userId)
    .update({ ...newData });
}

// set user's first name
export function setFirstName(userId: string, newFirstName: string) {
  var data = getUserData(userId);
  data.firstName = newFirstName;
  updateUser(userId, data);
}

// set user's last name
export function setLastName(userId: string, newLastName: string) {
  var data = getUserData(userId);
  data.lastName = newLastName;
  updateUser(userId, data);
}

// set user's email
export function setEmail(userId: string, newEmail: string) {
  var data = getUserData(userId);
  data.firstName = newEmail;
  updateUser(userId, data);
}

// set user's phone number
export function setPhoneNumber(userId: string, newPhone: string) {
  var data = getUserData(userId);
  data.firstName = newPhone;
  updateUser(userId, data);
}

// set user's username
export function setUsername(userId: string, newUser: string) {
  var data = getUserData(userId);
  data.username = newUser;
  updateUser(userId, data);
}
