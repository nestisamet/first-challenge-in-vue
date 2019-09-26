<template>
    <div>
         <b-container>
            <b-row class="justify-content-md-center margin-center-top">
                    <b-card
                    title="NEW STUDENT"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-6 text-center display-flex"
                    >  
                        <hr/>
                        <b-card-text>
                            <b-form class="login" @submit.prevent="handleRegisterStudentSubmit">
                                <b-form-group><b-form-input required v-model="idendity_no" type="text" placeholder="TC No"/> </b-form-group>
                                <b-form-group><b-form-input required v-model="email" type="text" placeholder="E-mail"/>      </b-form-group>
                                <b-form-group><b-form-input required v-model="name" type="text" placeholder="Name"/> </b-form-group>
                                <b-form-group><b-form-input required v-model="surname" type="text" placeholder="Surname"/></b-form-group>
                                <hr/>
                                <b-col><b-button class="full-width" variant="danger" v-if="!isSaved" size="sm" type="submit">SAVE</b-button> </b-col>
                                <b-col><b-button class="full-width" variant="success" v-if="isSaved" size="sm" type="submit">SAVED - Redirecting</b-button> </b-col>
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
    name:'registerstudent',
    data(){
        return{
            accessData:[],
            idendity_no:"",
            email:"",
            name:"",
            surname:"",
            isSaved:false
        }
    },
    methods:{
          routeNav(e){
            this.$router.push(e);
        },
          async handleRegisterStudentSubmit(){
          let self=this;
          let postData={idendity_no:this.idendity_no,email:this.email,name:this.name,surname:this.surname};
          axios({             
                    url: 'https://mulakat.stemizer.com/rest/student',
                    method:'post',
                    headers: {'Authorization':  "Bearer "+this.$stAuth.token},
                    data:postData
          }) 
          .then(function (response) {
               // handle success
              console.log(response);
              self.isSaved=true;
              setTimeout(self.routeNav("/"),2000);
          })
          .catch(function (error) {
              // handle error
              console.log(error);7
              self.isSaved=false;
          })
        }
    }
}
</script>
<style>

</style>