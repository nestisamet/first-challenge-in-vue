<template>
    <div>
         <b-container>
          <b-row class="justify-content-md-center margin-center-top">
                  <b-card
                  title="LOGIN"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-6 text-center display-flex"
                  >  
                    <hr/>
                    <b-card-text>
                    <form class="login" @submit.prevent="handleLoginSubmit">

                        <label>E-mail</label>
                        <b-input required v-model="email" type="text" placeholder="E-mail"/>
                        <label>Password</label>
                        <b-input  required v-model="password" type="password" placeholder="Password"/>
                        <hr/>
                        <b-button class="full-width" variant="success" size="sm" type="submit">Login</b-button>
                    </form>
                    </b-card-text>
               
                </b-card>
          </b-row>
    </b-container>
       
    </div>
</template>
<script>
export default {
    name:'login',
    data(){
        return{
            accessData:[],
            email:"",
            password:"",
            resultx:false
        };
    },
    methods:{
         async handleLoginSubmit(){
          await this.$stAuth.login(this.email,this.password)
          .then((result)=>{                  
                   if(result===true){
                       location.reload();
                         this.$router.push("home");
                   } else{
                       this.resultx="E-mail or Password incorrect";
                   }                
            })
          .catch((err)=>{
                  console.log(err); this.result="Please get in touch with support";
            });
       
         }
    },
    async created() {
            try {
                if (this.$stAuth.loadAuthInit()){
                    this.$router.push('home');
                }
            }catch{
                
            }        
    }
}
</script>
<style>
.margin-center-top{
    margin-top:3%;
}
.full-width{
    width:100%;
}
</style>