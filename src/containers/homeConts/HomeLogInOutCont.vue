<template>
    <div>
        <HomeNoLogin v-if="!isLoginInternal"> </HomeNoLogin>
        <HomeLoggedInComp v-if="isLoginInternal">
            <StudentListComp v-bind:data="dataStudent"></StudentListComp>
            <AllStudentListComp v-bind:data="dataStudentWithParents"></AllStudentListComp>
            <hr />
            <b-row class="justify-content-md-center" >
              <b-button size="md" v-on:click="getParentsStudentsData">Parents Students</b-button>
              <b-button size="md" v-on:click="getAllStudentsData">All Students</b-button>
            </b-row>
          
        </HomeLoggedInComp>
    </div>
</template>
<script>
import HomeNoLogin from '../../components/homeComps/HomeNoLogin';
import HomeLoggedInComp from '../../components/homeComps/HomeLoggedInComp';
import StudentListComp from '../../components/studentListComp/StudentListComp';
import AllStudentListComp from '../../components/allStudentListComp/AllStudentListComp';
import axios from 'axios';

export default {
   name:'homelogincompcont',
   props:['isLogin'],
   components:{
      HomeNoLogin,
      HomeLoggedInComp,
      StudentListComp,
      AllStudentListComp
   },
   data(){
       return {
           dataStudent:[],
           dataStudentWithParents:[],
           isLoginInternal:this.$stAuth.loadAuthInit()
       }
   },
   methods:{
            mapStudentListCompData(data){
            const result = data.map((item) => {
                        return {
                                idendity_no:item.idendity_no,
                                email:item.email,
                                name: item.name
                            };
                });
                return result;
            },
            getParentsStudentsData(){
                let self=this;
                axios({             
                    url: 'https://mulakat.stemizer.com/rest/student/my',
                    method:'get',
                    headers: {'Authorization':  "Bearer "+this.$stAuth.token}
                }) 
                .then(function (response) {
                // handle success
                    console.log(response);
                    self.dataStudent=self.mapStudentListCompData(response.data);
                    //self.dataStudent=response.data;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
            },
              mapAllStudentsData(data){
                 const result = data.map((student) => {
                        return{
                                 idendity_no:student.idendity_no,
                                email:student.email,
                                name: student.name,
                                parents:
                                    student.parents.map((par)=>{
                                        return { 
                                            account_code:par.account_code,
                                            email:par.email,
                                            mobile:par.mobile,
                                            name:par.name,
                                            surname:par.surname
                                }})                                
                        };
                });
                console.log(result);
                return result;
            },
            getAllStudentsData(){
                let self=this;
                axios({             
                    url: 'https://mulakat.stemizer.com/rest/student',
                    method:'get',
                    headers: {'Authorization':  "Bearer "+this.$stAuth.token},
                }) 
                .then(function (response) {
                // handle success
                    console.log(response);
                    self.dataStudentWithParents=self.mapAllStudentsData(response.data);
                    //self.dataStudent=response.data;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
   },
   created(){
   },
   ready(){}

    
}
</script>
<style>

</style>