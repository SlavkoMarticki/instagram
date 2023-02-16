
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
            id: "",
            email: "",
            followers: [],
            following: [],
            user_name: ""
        },
        images: {},
        followingUsersImages: []
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
                
                user.loginUser.data.email = doc.data().email;
                user.loginUser.data.followers = doc.data().followers;
                user.loginUser.data.following = doc.data().following;
                user.loginUser.data.user_name = doc.data().user_name;
                user.loginUser.data.id = doc.id;
                
                localStorage.setItem("loginUser", JSON.stringify(user.loginUser));
                
            });
        });
        listAll(imageRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    const imgLocation = item._location.path_
                    const subName = imgLocation.substring(imgLocation.indexOf("/")+1, imgLocation.length);
                    const data = {
                        imgUrl: url,
                        imgName: subName
                    }
                    imgData.push(data);
                    localStorage.setItem("loginUserImages", JSON.stringify(imgData));
                    
                    
                })
            })
        })    
    }

    if(action.type === "searchUser"){
           
        
        const imageRef = ref(storage, action.userEmail);
        const data = [];
           
        listAll(imageRef).then((res) => {
            console.log(res);
            res.items.forEach((item) => {
                
                getDownloadURL(item).then((url) => {
                    data.push(url)
                   localStorage.setItem("searchUserImages", JSON.stringify(data))
                });
            });
        })
        
        
        
    }
    if(action.type === "follow"){

  
        const loginUserDocument = doc(db, "users", user.loginUser.data.id);  
        const loginNewDocument = { following: arrayUnion(user.searchUser.data.user_name)};
        
       
        const searchUserDocument = doc(db, "users", user.searchUser.data.id);
        const searchNewDocument = { followers: arrayUnion(user.loginUser.data.user_name)}

        updateDoc(loginUserDocument, loginNewDocument);
        updateDoc(searchUserDocument, searchNewDocument);
        
    }
    if(action.type === "unfollow"){
     
        const loginUserDocument = doc(db, "users", user.loginUser.data.id);  
        const loginUserFollowing = user.loginUser.data.following;
        const newLoginUserFollowing = loginUserFollowing.filter((e) => {return e !== user.searchUser.data.user_name})
        const loginNewDocument = { following: newLoginUserFollowing};
        updateDoc(loginUserDocument, loginNewDocument);
        
       
        const searchUserDocument = doc(db, "users", user.searchUser.data.id);
        const searchUserFollowers = user.searchUser.data.following;
        const newSearchUserFollowers = searchUserFollowers.filter((e) => {return e !== user.loginUser.data.user_name});
        const searchNewDocument = { followers: newSearchUserFollowers}
        updateDoc(searchUserDocument,searchNewDocument);

        

    }
    if(action.type === "deleteImage"){

        const imgRef = ref(storage, user.loginUser.data.email + "/" + action.name)
        
        deleteObject(imgRef).then(() => {
           alert("Uspesno")
        }).catch((error) => {
            alert("Oops! Something is wrong")
        });
    }

    if(action.type === "getAllFollowersImages"){   

        const getEmails = () => {
            
            const emails = [];    
            const userNames = user.loginUser.data.following;


            const mappedData = userNames.forEach((userName) => { 
                const test = [];
                const getData = query(dataRef, where("user_name", "==",  userName));

                onSnapshot(getData,  (snapshot) => {
  
                    // snapshot.docChanges().forEach((change) => {
                    //     emails.push(change.doc.data().email);
                    // })
                    snapshot.docs.map((doc) => {
                        test.push(doc.data().email);
                    });
                }); 

                return test;
                
            });
           // console.log(userNames);
            //console.log([...emails]);
            return emails
        }
       
        const getFollowersImagesUrls = () => {
            const emails = getEmails();
            
        
            
            
            // emails.forEach(email => {
            //     console.log(email);
            //     const imageRef = ref(storage, email);
            //     listAll(imageRef).then((res) => {
            //         res.items.forEach((item) => { 
            //                 getDownloadURL(item).then((url) => {
            //                     user.loginUser.followingUsersImages.push(url);
            //                     console.log(user.loginUser.followingUsersImages);
            //             });
            //         })
            //     })
           
            // });
            
        }
        
        getFollowersImagesUrls();
        
        
       
    }

    if(action.type === "setProfileImg"){
        alert(action.name);
    }

    return state;
}
export default reducer;
