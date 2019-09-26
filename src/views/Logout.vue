<template>
   <div>
         <b-container>
             <b-row class="justify-content-md-center margin-center-top">
                  <b-card
                  title="Logging Out"
                  tag="article"
                  style="width:100%"
                  class="mb-6 text-center display-flex"
                  >  
                    <hr/>
                    <b-card-text>
                    <label> {{profileName}}</label>
                    </b-card-text>
               
                </b-card>
             </b-row>
         </b-container>       
    </div>
</template>
<script>
import { EventEmitter } from "events";
export default {
    name:'logout',
    data(){
        return{
            profileName:""
        }
    },
    methods:{

    },
    async created(){
        this.profileName=this.$stAuth.profile["name"];
         let self=this;
        console.log("logout");
         this.$emit("loginEvent", {
          loggedIn: false,
          error: null,
          errorMsg: null
        });
        setTimeout(()=>{
            self.$stAuth.logOut();
            self.$router.push('login');
        },2500);
    }
}
</script>