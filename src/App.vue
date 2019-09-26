<template>
  <div id="app">
          <b-navbar toggleable="md" type="dark" variant="info">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> 
            <b-container>
                        <b-navbar-nav>
                          <b-row>
                          <b-button size="sm" variant="info"  v-on:click="routeNav('home')">Home</b-button >
                          <b-button size="sm"  variant="info" href="#" v-on:click="routeNav('profile')" v-if="isLogin">Profile</b-button >
                          <b-button size="sm"  variant="info" href="#"  v-if="!isLogin" disabled>Profile</b-button >
                          <b-button size="sm" variant="info"  v-on:click="routeNav('registerstudent')" v-if="isLogin">Register Student </b-button> 
                          </b-row> 
                        </b-navbar-nav>
                        <b-col ml="auto" v-if="widthMobile"></b-col>
                        <b-navbar-nav class="pull-right">  
                          <b-row>
                            <b-button size="sm" variant="info"  v-on:click="routeNav('logout')" v-on:loginEvent="isLoginChange" v-if="isLogin">LOGOUT </b-button>     
                            <b-button size="sm" variant="info"  v-on:click="routeNav('login')"  v-if="!isLogin">LOGIN </b-button>
                            <b-button size="sm" varjdoc3 style laravel documentationiant="info"   v-on:click="routeNav('register')"  v-if="!isLogin">REGISTER </b-button>   
                            </b-row>            
                        </b-navbar-nav >  
            </b-container>
        </b-navbar>
        <b-container>
            <router-view isLogin="isLogin"/>   
        </b-container> 
  </div>
</template>

<script>
import { EventEmitter } from "events";
export default {
  name: 'app',
  components: {
   
  },
  data(){
    return{
      profileAuth:"",
      isLogin:false,
      widthMobile:false
    };
  },
  methods:{  
    routeNav(e){
      
      this.$router.push(e);
    },
    isLoginChange(e){
      console.log("looo");
        console.log(e);
    }
  },
   async created() { 
     if(window.innerWidth<960){
       this.widthMobile=true;
     }
     // await this.$stAuth.renewTokens();
    try {   
      if (this.$stAuth.loadAuthInit()){       
        this.isLogin=this.$stAuth.loggedIn;
        this.profileAuth=this.$stAuth.profile;
      }else{
        this.isLogin=false;
      }
     
    
    } catch {
      // Supress the 'not logged in' error as we can illegitimately get that
      // when processing the callback url
    }
  }
}
</script>

<style>
#app {
 
}
</style>
