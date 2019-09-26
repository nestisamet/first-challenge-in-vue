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
            </b-list-group-item>
        </b-list-group>         
    </div>
</template>
<script>
export default {
    name:'studentlistcomp',
    props:['data'],
    methods:{
        
    }
}
</script>
<style scoped>
/*.input-group-label-width-fix*/
.input-group > .input-group-prepend > .input-group-text{
    min-width: 70px;
}
/*Form input disabled color change*/
.form-control:disabled{
    background-color: #fff;
}

</style>