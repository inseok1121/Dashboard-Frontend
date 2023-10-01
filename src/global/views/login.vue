<template>
  <div class="flex-container">
    <div class="image-panel"></div>
    <div class="login-panel">
      <button @click="toMain">login</button>
    </div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
export default {
  setup(){
    const router = useRouter();

    const toMain = () => {
      router.push({
        path: '/main',
        query: {
          requiredAuth: true
        },
      })
    }
    
    return {
      toMain
    }
  }

}
</script>
<style>
.flex-container{
  display: flex;
  height: 100%;
}
::-webkit-scrollbar{
  display: none;
}

.image-panel{
  flex: 8;
  background-image: url("../assets/background.jpg");
  background-size: cover;
  height: 100%;
}

.image-panel::before{
  content: "";
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
}

.login-panel{
  flex: 2;
  background-color: beige;
  height: 100%
}
</style>