<template>
    <div>
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
                            <b-form class="register" @reset="onReset" @submit.prevent="handleRegisterSubmit">
                                <b-form-group><b-form-input required v-model="account_code" type="text" placeholder="Account Code"/>  </b-form-group>
                                <b-form-group><b-form-input required v-model="email" type="text" placeholder="E-mail"/>      </b-form-group>
                                <b-form-group><b-form-input required v-model="name" type="text" placeholder="Name"/> </b-form-group>
                                <b-form-group><b-form-input required v-model="surname" type="text" placeholder="Surname"/> </b-form-group>
                                <b-form-group><b-form-input required v-model="password" type="password" placeholder="Password"/></b-form-group>
                                <hr/>
                                <b-button variant="danger" type="submit">Register</b-button>
                            </b-form>
                        </b-card-text>               
                    </b-card>
            </b-row>
    </div>
</template>
<script>
export default {
    name:'register',
    data(){
        return{
            accessData:[],
            account_code:"",
            email:"",
            name:"",
            surname:"",
            password:""
        };
    },
    methods:{
       async handleRegisterSubmit(){
          //this.$stAuth.login(this.username,this.password);
          // email name password surname
            let postData={account_code:this.account_code,email:this.email,name:this.name,surname:this.surname,password:this.password};
            await this.$stAuth.register(this.account_code,this.email,this.name,this.surname,this.password).then((result)=>{console.log(result);});
        },
        onReset(evt) {
            evt.preventDefault()
            // Reset our form values
            this.form.email = ''
            this.form.name = ''
            this.form.food = null
            this.form.checked = []
         }
    },
    created(){
        
            this.account_code="";
            this.email="";
            this.name="";
            this.surname="";
            this.password="";
    }
}
</script>