<template>
  <div class="flex-container">
    <div class="image-panel"></div>
    <div class="login-panel">
      <div class="login">
        <div id="form">
          <form @submit.prevent="doLogin">
            <label for="email">Email</label>
            <input type="text" id="email" v-model="email" placeholder="elon@musk.io" autocomplete="off">

            <label for="password">Password</label>&nbsp;
            <i class="fas" :class="[passwordFieldIcon]" @click="hidePassword = !hidePassword"></i>
            <input :type="passwordFieldType" id="password" v-model="password" placeholder="**********">

            <button type="submit">Log in</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
import { computed, ref } from "vue";

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
    };

    const email = ref("");
    const hidePassword = ref(true);
    const password = ref("");

    const passwordFieldIcon = computed(() => hidePassword.value ? "fa-eye" : "fa-eye-slash");
    const passwordFieldType = computed(() => hidePassword.value ? "password" : "text");

    const doLogin = () => alert("Not implemented yet :O");
      
    return {
      toMain,
      email,
      password,
      passwordFieldIcon,
      passwordFieldType,
      doLogin
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
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
}

div#form {
  background-color:beige;
  border-radius: 5px;
  box-shadow: 0px 0px 0px 0px #666;
  color: #ecf0f1;
  width: 260px;
  padding: 35px;
}

div#form label{
  color: #333
}

div#form button{
  color: #333
}

@media screen and (max-width: 600px) {
  div#login {
    align-items: unset;
    background-color: unset;
    display: unset;
    justify-content: unset;
  }

  div#login div#description {
    margin: 0 auto;
    max-width: 350px;
    width: 100%;
  }

  div#form {
    border-radius: unset;
    box-shadow: unset;
    width: 100%;
  }

  div#login div#form form {
    margin: 0 auto;
    max-width: 280px;
    width: 100%;
  }
}
</style>