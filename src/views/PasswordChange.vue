<template>
    <div>
        <b-container>
          <b-row class="justify-content-md-center margin-center-top">
                  <b-card
                  title="PASSWORD CHANGE"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-6 text-center display-flex"
                  >  
                    <hr/>
                    <b-card-text>
                    <b-form class="password-change" @submit.prevent="handleRegisterStudentSubmit">
                        <b-form-group><b-form-input required v-model="current_password" type="text"  placeholder="Current Password"/> </b-form-group>
                        <b-form-group><b-form-input required v-model="password" type="text" placeholder="New Password"/>      </b-form-group>
                        <b-form-group><b-form-input required v-model="password_confirmation" type="text" placeholder="New Password Repeat"/></b-form-group>
                        <hr/>
                        <b-form-group><b-button class="full-width" variant="danger" v-if="!isSaved" size="sm" type="submit">SAVE</b-button></b-form-group>
                       <b-form-group>  <b-button class="full-width" variant="success" v-if="isSaved" size="sm" type="submit">SAVED</b-button></b-form-group>
                    </b-form>
                    </b-card-text>               
                </b-card>
          </b-row>
    </b-container>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'passwordchange',
    data(){
            return{
                accessData:[],
                current_password:"",
                password:"",
                password_confirmation:"",
                isSaved:false
            }
        },
        methods:{
            routeNav(e){
                this.$router.push(e);
            },
            async handleRegisterStudentSubmit(){
                let self=this;
                let postData={ current_password:this.current_password, password:this.password, password_confirmation:this.password_confirmation };
                axios({             
                        url: 'https://mulakat.stemizer.com/rest/auth/changePassword',
                        method:'post',
                        headers: {'Authorization':  "Bearer "+this.$stAuth.token},
                        data:postData
                }) 
                .then(function () { // response
                    // handle success
                    self.isSaved=true;
                    setTimeout(self.routeNav("/profile"),1500);
                })
                .catch(function () { // error
                    // handle error
                    self.isSaved=false;
                })
            }
    }
}
</script>
<style>

</style>