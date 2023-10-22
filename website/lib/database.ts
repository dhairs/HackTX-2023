import { firestore } from "./firestore";

export interface UserData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: Date;
  isDriver: boolean;
  price?: number;
  rating?: number;
  joinDate: Date;
  onboarded: boolean;
}

export function getUserData(userId: string): UserData {
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

  return data;
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

// // set user's username
// export function setUsername(userId: string, newUser: string) {
//   var data = getUserData(userId);
//   data.username = newUser;
//   updateUser(userId, data);
// }

// set driver's username
export function setPrice(userId: string, newPrice: number) {
  var data = getUserData(userId);
  data.price = newPrice;
  updateUser(userId, data);
}

// update driver's rating
export function updateRating(userId: string, newRating: number) {
  var data = getUserData(userId);
  data.rating = newRating;
  updateUser(userId, data);
}

// set user's username
export function setDoB(userId: string, newDoB: Date) {
  var data = getUserData(userId);
  data.dateOfBirth = newDoB;
  updateUser(userId, data);
}
