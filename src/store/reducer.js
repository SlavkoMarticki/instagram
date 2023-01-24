
import { db, storage } from "../firebase/firebase-config";
import { 
    where,
    collection,
    query,
    onSnapshot,
    updateDoc,
    doc,
    arrayUnion
 } from "firebase/firestore";
import { 
    ref,
    listAll,
    getDownloadURL,
    deleteObject,
    getStorage
} from "firebase/storage";


const user = {
    loginUser: {
        data: {
            id: ""
        },
        images: {}
    },
    searchUser: {
        data: {
            id: "",
            email: "",
            followers: [],
            following: [],
            user_name: ""
        },
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
                user.loginUser.data.id = doc.id
                
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
        
    }

    if(action.type === "searchUser"){
        user.searchUserName = action.userName
        

        const getUserData = () => {
            const getData = query(dataRef, where("user_name", "==",  user.searchUserName));

            onSnapshot(getData, (snapshot) => {
                snapshot.docs.map((doc) => {
                    //user.searchUser.data = doc.data();
                    user.searchUser.data.id = doc.id
                    user.searchUser.data.email = doc.data().email;
                    user.searchUser.data.user_name = doc.data().user_name;
                    user.searchUser.data.following = doc.data().following;
                    user.searchUser.data.followers = doc.data().followers;
                })
            }); 
            
            return user.searchUser.data.email;
        }
        const getImages = () => {
            
           
            const imageRef = ref(storage, action.userEmail);
            const imgData = [];
            
            listAll(imageRef).then((res) => {
            
                res.items.forEach((item) => {
                    getDownloadURL(item).then((url) => {
                      
                       imgData.push(url);
                       
                    });
                })
              
                user.searchUser.images = imgData;

            })
        }
        getUserData();
        getImages();
    }
    if(action.type === "follow"){

  
        const loginUserDocument = doc(db, "users", user.loginUser.data.id);  
        const loginNewDocument = { following: arrayUnion(user.searchUser.data.user_name)};
        
       
        const searchUserDocument = doc(db, "users", user.searchUser.data.id);
        const searchNewDocument = { followers: arrayUnion(user.loginUser.data.user_name)}

        updateDoc(loginUserDocument, loginNewDocument);
        updateDoc(searchUserDocument, searchNewDocument);
        alert("follow from reducer");
    }
    if(action.type === "unfollow"){
        alert("unfollow from reducer");
    }
    if(action.type === "deleteImage"){
        const storage = getStorage();
        console.log(user.loginUser.data.email);
        console.log(action.deleteImgUrl);
        const imgRef = ref(storage, user.loginUser.data.email + "/" + action.deleteImgUrl)
        
        deleteObject(imgRef).then(() => {
           alert("Uspesno")
          }).catch((error) => {
            alert("Error")
          });
    }

    return state;
}
export default reducer;
