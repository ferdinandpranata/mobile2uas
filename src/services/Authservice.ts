import firebase from 'firebase';

export class AuthService{
    signup(email: string, password: string){
        let res = firebase.auth().createUserWithEmailAndPassword(email,password);
        console.log(res);
        return res;
    }

    signin(email:string, password:string){
        console.log(email + password);
        let result=firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
            console.log(result);
            return result;
        }).catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
              alert('Wrong password.');
            } else {
              alert(errorMessage);
            }
            console.log(error);
          
        });
        
    }
    updatePassword(newPassword:string){
        var user = firebase.auth().currentUser;
        
        user.updatePassword(newPassword).then(function() {
            return "update berhasil";
        }).catch(function(error) {
            return error;
        });
        
    }
    
    getActiveUser(){
        return firebase.auth().currentUser;
    }

    logout() {
        firebase.auth().signOut();
    }
}