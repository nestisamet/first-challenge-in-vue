import { EventEmitter } from "events";
import axios from "axios";

const localStorageKey = "stAuth";
const loginEvent = "loginEvent";
const expiredResponseCode="1.0.1";
const invalidResponseCode="1.0.2";

class stAuthService extends EventEmitter {
  token = null;
  profile = null;
  tokenExpiry = null;
  code=null;
  loggedIn=null;
  error=null;
  errorMessage=null;
  self=this;

  async login(email,password,locale='tr') {   
    let result=false;  
    let selfInternal=this;     
    const postData={email:email,password:password,locale:locale};
    axios.defaults.headers.post['Content-Type'] ='application/json';
    return  axios.post('https://mulakat.stemizer.com/rest/auth/signin', postData)          
    .then(function (response) {
        console.log(response);
        let authResult=response.data;
        selfInternal.token = authResult.token;
        selfInternal.profile = authResult.accountInfo;
        selfInternal.code=authResult.code;
        selfInternal.loggedIn=true;
        // Convert the expiry time from seconds to milliseconds,
        // required by the Date constructor
        // this.tokenExpiry = new Date(this.profile.exp * 1000);
        selfInternal.emit(loginEvent, {
          loggedIn: true,
          error: null,
          errorMsg: null
        });

        localStorage.setItem(localStorageKey, JSON.stringify(authResult));
        result=true;
        return result;
    })
    .catch(function (error) {
        console.log(error);
        result=false;
        return result;
    });  
  }

  logOut() {  
    let self=this;
     try{

      axios({
        url: 'https://mulakat.stemizer.com/rest/auth/signout',
        method:'delete',
        headers: {'Authorization':  "Bearer "+self.getToken()}
      })       
      .then(function (response) {
          console.log(response);
          if(response.data.success===true){
             console.log("success logout");
          }               
      })
      .catch(function (error) {
          console.log(error);
      });
    }catch{
      console.log("error try--catch");
    }    
  
    localStorage.removeItem(localStorageKey);
    this.token = null;
    this.tokenExpiry = null;
    this.profile = null;
    this.code=null;
    this.loggedIn=null;
    location.reload();
  }

  async register(account_code,email,name,surname,password){
    let postData={account_code,email:email,name:name,surname:surname,password:password};
    axios.defaults.headers.post['Content-Type'] ='application/json';
    return  axios.post('https://mulakat.stemizer.com/rest/account/signup', postData) 
    .then(function (response) {
     // handle success
        console.log(response);
        self.data=response.data;
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
  }

  isAuthenticated() {
    return (
        this.token && localStorage.getItem(localStorageKey) !== undefined 
    );
  }
  isLocalStorage(){
    if (localStorage.getItem(localStorageKey)=== null ||localStorage.getItem(localStorageKey)=== undefined){
      console.log("Access toke does not exist Renws error");
      return false;
    }
    return true;
  }
  getToken(){
    if ( this.isLocalStorage()){
      let jsonAuth=JSON.parse(localStorage.getItem(localStorageKey));  
      this.token=jsonAuth.token;
      return jsonAuth.token;
    }
    return undefined
  }
  getIsLogin(){
    if ( this.isLocalStorage()){
      let jsonAuth=JSON.parse(localStorage.getItem(localStorageKey));  
      this.token=jsonAuth.token;
      return jsonAuth.token;
    }
    return undefined
  }

  isTokenValid() {
    return this.code!==expiredResponseCode && this.code!==invalidResponseCode;
  }
  loadAuthInit(){
    let selfInternal=this;
    if ( this.isLocalStorage()){
      let jsonAuth=JSON.parse(localStorage.getItem(localStorageKey));  
      selfInternal.token = jsonAuth.token;
      selfInternal.profile = jsonAuth.accountInfo;
      selfInternal.code=jsonAuth.code;
      selfInternal.loggedIn=true; 
      return true;   
    }
    return false;
  }
  renewTokens() {
    let jsonAuth=null;
    console.log("here");
      if (localStorage.getItem(localStorageKey)=== null ||localStorage.getItem(localStorageKey)=== undefined){
        console.log("Access toke does not exist Renews error");
        return false;
      }
      jsonAuth=JSON.parse(localStorage.getItem(localStorageKey));  
      if (jsonAuth.token=== undefined || jsonAuth.token=== null) {
         console.log("Not logged in");
      }else{        
        console.log(jsonAuth["token"]);
        axios.post('https://mulakat.stemizer.com/rest/auth/refresh',{token:jsonAuth["token"]})          
        .then(function (response) {
            console.log(response);
            if(response.data.success===true){
               console.log("success refresh");
            }               
        })
        .catch(function (error) {
            console.log("Error refresh");
            console.log(error);
        });
          //check session
          //error
          //else
          //this.localLogin(authResult);
      }    
  }
 
}

const service = new stAuthService();

service.setMaxListeners(5);

export default service;
