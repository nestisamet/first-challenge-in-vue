<template>
  <b-container>
          <b-row class="justify-content-md-center margin-center-top" >
            <HomeLoginOutCont  v-bind:isLogin="isLogin"></HomeLoginOutCont>
          </b-row>
    </b-container>
</template>

<script>
import HomeLoginOutCont from '../containers/homeConts/HomeLogInOutCont';

export default {
  name: "home",
  props:['isLogin'],
  data(){
    return{
    }
  },
  components:{
    HomeLoginOutCont  
  },
  methods:{

  },
  created(){
    
  }
};
</script>

<style lang="scss" scoped>
.next-steps {
  .fa-link {    
    margin-right: 5px;
  }
}
.margin-center-top{
  margin-top: 3%;
}
</style>
