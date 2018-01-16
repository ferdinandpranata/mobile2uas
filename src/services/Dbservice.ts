import firebase from 'firebase';

export class DBService{
    getUser(){
        var user = firebase.auth().currentUser;
        var name, email, photoUrl, uid, emailVerified;
        
        if (user != null) {
            name = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            emailVerified = user.emailVerified;
            uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                            // this value to authenticate with your backend server, if
                            // you have one. Use User.getToken() instead.
            return ([name, email, photoUrl, emailVerified, uid]);
        }
    }
    updateData(displayName:string,photoUrl:string){
        var user = firebase.auth().currentUser;
        let result = user.updateProfile({
            displayName: displayName,
            photoURL: photoUrl
          });
          let user1 = this.getUser();
        return user1;
    }
}