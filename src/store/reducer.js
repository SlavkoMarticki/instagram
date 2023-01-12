
import { db, storage } from "../firebase/firebase-config";
import { 
    where,
    collection,
    query,
    onSnapshot
 } from "firebase/firestore";
import { 
    ref,
    listAll,
    getDownloadURL 
} from "firebase/storage";


const user = {
    loginUser: {
        data: {},
        images: {}
    },
    searchUser: {
        data: {},
        images: {}
    },
    searchUserName: ""
};

const dataRef = collection(db, "users");

const reducer = (state = user, action) => {
    //user.push([]);
    if(action.type === "getUser"){
        const q = query(dataRef, where("email", "==", action.email));
        const imageRef = ref(storage, action.email);
        const imgData = []
  
        onSnapshot(q, (snapshot) => {
           
            snapshot.docs.map((doc) => {
                user.loginUser.data = doc.data()
                
            });
        });
        listAll(imageRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                  
                   imgData.push(url);
                   
                })
            })
            //console.log(imgData);
            user.loginUser.images = imgData;
        })
        console.log(user);
    }

    if(action.type === "searchUser"){
        user.searchUserName = action.userName
        const getEmail = query(dataRef, where("user_name", "==",  user.searchUserName));
        console.log(getEmail);
        let email = "";

        onSnapshot(getEmail, (snapshot) => {
            snapshot.docs.map((doc) => {
                email = doc.data().email;
                user.searchUser.data = doc.data();
            })
            console.log(user.searchUser);
        });
    }

    return state;
}


export default reducer;
