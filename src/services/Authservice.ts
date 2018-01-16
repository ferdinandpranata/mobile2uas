import firebase from 'firebase';

export class AuthService{
    signup(email: string, password: string){
        let res = firebase.auth().createUserWithEmailAndPassword(email,password);
        console.log(res);
        return res;
    }

    signin(email:string, password:string){
        console.log(email + password);
        let result=firebase.auth().signInWithEmailAndPassword(email, password);
        console.log(result);
        return result;
    }
    updatePassword(newPassword:string){
        var user = firebase.auth().currentUser;
        
        user.updatePassword(newPassword).then(function() {
            return "update berhasil";
        }).catch(function(error) {
            return error;
        });
        
    }

    logout() {
        firebase.auth().signOut();
    }
}