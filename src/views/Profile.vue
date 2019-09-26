<template>
    <div>
         <b-container>
          <b-row class="justify-content-md-center margin-center-top">
                  <b-card
                  title="PROFILE"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-6 text-center display-flex"
                  >  
                    <hr/>
                    <b-card-text>
                    <b-form class="login" @submit.prevent="handleProfileSubmit">                        
                        <b-form-group><b-form-input required v-model="account_code" type="text"  disabled placeholder="Account Code"/>  </b-form-group>
                        <b-form-group><b-form-input required v-model="email" disabled type="text" placeholder="E-mail"/>            </b-form-group>
                        <b-form-group><b-form-input required v-model="name" type="text" placeholder="Name"/></b-form-group>
                        <b-form-group><b-form-input required v-model="surname" type="text" placeholder="Surname"/></b-form-group>
                        <hr/>
                        <b-form-group><b-button class="full-width" variant="danger" v-if="!isSaved" size="sm" type="submit">SAVE</b-button>  </b-form-group>
                        <b-form-group> <b-button class="full-width" variant="success" v-if="isSaved" size="sm" type="submit">SAVED</b-button></b-form-group>
                    </b-form>
                    <b-form-group> <b-button class="full-width" variant="success"  size="sm" v-on:click="routeNav('/passwordchange')" type="submit">Password Change</b-button> </b-form-group>
                    </b-card-text>               
                </b-card>
          </b-row>
    </b-container>
       
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name:'profile',
  data(){
        return{
            accessData:[],
            id:0,
            account_code:"",
            email:"",
            name:"",
            surname:"",
            isSaved:false
        };
    },
    methods:{
       routeNav(e){
            this.$router.push(e);
            },
       async handleProfileSubmit(){
          let self=this;
          let postData={name:this.name,surname:this.surname};
          axios({             
                  url: 'https://mulakat.stemizer.com/rest/profile',
                  method:'post',
                  headers: {'Authorization':  "Bearer "+this.$stAuth.token},
                  data:{name:this.name,surname:this.surname}
          }) 
          .then(function (response) {
               // handle success
              console.log(response);
              self.isSaved=true;
          })
          .catch(function (error) {
              // handle error
              console.log(error);7
              self.isSaved=false;
          })
        }
    },
    created(){
      var self=this;
      var instance = axios.create({
        baseURL: 'https://mulakat.stemizer.com',
        headers: {'Authorization':  "Bearer "+this.$stAuth.token}
      });
       console.log(this.$stAuth.token);
       axios.defaults.headers.post['Content-Type'] ="application/x-www-form-urlencoded";
       instance(         
            { 
                    url: '/rest/profile',
                    method:'get',
                }
          )
          .then(function (response) {
               // handle success
              console.log(response);
               //{this.account_code,this.email, this.name,this.surname,this.password}
               
             const {id,account_code,email,name,surname}=response.data;
             self.id=id;
             self.account_code=account_code;
             self.email=email;
             self.name=name;
             self.surname=surname;
          })
          .catch(function (error) {
              // handle error
              console.log(error);
          })
    }
};
</script>
