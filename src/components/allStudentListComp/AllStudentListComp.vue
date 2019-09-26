<template>
    <div>
        <b-list-group>
            <b-list-group-item v-bind:key="item.id" v-for="item in data" class="mt-3">
                  <b-input-group size="sm" prepend=".Name" >
                    <b-form-input disabled v-model="item.name">   </b-form-input>
                </b-input-group>
                 <b-input-group size="sm" prepend="E-mail ">
                    <b-form-input disabled v-model="item.email">  <br/> </b-form-input>
                </b-input-group>
                 <b-input-group size="sm" prepend="TC No">
                    <b-form-input disabled v-model="item.idendity_no">   </b-form-input>
                </b-input-group> 
                <b-label v-if="item.parents.length>0">{{item.name}} PARENTS </b-label>
                <hr />  
                <b-list-group-item v-bind:key="par.account_code" v-for="par in item.parents" class="mt-3">

                        <b-input-group size="sm" prepend="Name">
                            <b-form-input disabled v-model="par.name">   </b-form-input>
                        </b-input-group>  
                        <b-input-group size="sm" prepend="Surname">
                            <b-form-input disabled v-model="par.surname">   </b-form-input>
                        </b-input-group>    
                        <b-input-group size="sm" prepend="Mobile">
                            <b-form-input disabled v-model="par.mobile">   </b-form-input>
                        </b-input-group>  
                        <b-input-group size="sm" prepend="E-mail">
                            <b-form-input disabled v-model="par.email">   </b-form-input>
                        </b-input-group>  
                </b-list-group-item>
            </b-list-group-item>
        </b-list-group>         
    </div>
</template>
<script>
export default {
    name:'allstudentlistcomp',
    props:['data'],
    methods:{
        
    }
}
</script>
<style scoped>
/*.input-group-label-width-fix*/
.input-group > .input-group-prepend > .input-group-text{
    min-width: 80px;
}
/*Form input disabled color change*/
.form-control:disabled{
    background-color: #fff;
}

</style>