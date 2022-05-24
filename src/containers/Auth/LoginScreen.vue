<template>
  <HeaderLayout />
    <div class="container"><br>
<div class="login">
<h1 class=" text-center">ĐĂNG NHẬP BẰNG</h1><br><br>
<a href="http://localhost:9000/auth/redirect/facebook" class="  btn btn-blue"><i class="fa fa-facebook-f mr-1"></i> FACEBOOK</a>
<a href="http://localhost:9000/auth/redirect/google" class=" btn btn-red"><i class="fa fa-google"></i>  GOOGLE</a><br>
<br>
<h1 class=""> HOẶC ĐĂNG NHẬP BẰNG</h1><br>
</div>
<form method="POST" role="form" class="col-md-8" @submit.prevent="pressed">
  <div class="form-group ">
    <label for="xampleInputEmail1">Email <b class="red">(*)</b> </label>
    <input type="text" name="email" ref="email" class="form-control" id="xampleInputEmail1" value="hung@gmail.com" autocomplete="off">
      </div>

  <div class="form-group  ">
    <label for="xampleInputEmai1">{{ $t('password') }}<b class="red">(*)</b> </label>
    <input type="password" ref="password" name="password" value="123456" class="form-control" id="xampleInputEmai1" autocomplete="off">
      </div>
  <br>
  <div class="">
  <input type="checkbox" name="remember" id="feafea">Nhớ mật khẩu<br><br></div>
  <button type="submit" class="btn btn-primary">{{ $t('login') }}</button>
   <router-link to="/" class="btn btn-danger"><i class="fa fa-undo"></i>{{ $t('back') }}</router-link><br/>
    <router-link to="/auth/register" class="link">{{ $t('register') }}</router-link><br>
    <a class="link" href="http://localhost:9000/account/forgot-password">{{ $t('forgot_password') }}</a><br>
</form><br>

</div>
  <FooterLayout />
</template>

<script>
import HeaderLayout from "@/containers/Layout/HeaderLayout.vue";
import FooterLayout from "@/containers/Layout/FooterLayout.vue";
import { setAccessToken, setUserInfo } from "@/plugins/utils/cookie";
import { login } from "@/plugins/api/auth";
export default {
  name: "LoginScreen",
  components: {
    HeaderLayout,
    FooterLayout,
  },   
 
    methods: {
      async pressed(e){
        e.preventDefault();
        try {
          const data = {
            email : this.$refs.email.value,
            password : this.$refs.password.value,
          }
          const res = await login(data);
          const { user, expires_in, token} = res;
          setUserInfo(user, expires_in);
          setAccessToken(token, expires_in);
          this.$router.push('/');
          this.$toast.success("Welcome");
        } catch (error) {
          console.log(error);
          this.$toast.error(error.error);
        }
      }
    },
};
</script>
<style>
.form-control{display: block;width: 70%;height: 34px;padding: 6px 12px;font-size: 14px;line-height: 1.42857143;color: #555;background-color: #fff;background-image: none;border: 1px solid #ccc;border-radius: 4px; }.container{width:50%;margin:0 auto;}.btn-danger{background-color: #d9534f;}.btn-primary{background-color: #3c8dbc !important;}.btn{display: inline-block;padding: 6px 12px;margin-bottom: 0;font-size: 14px;font-weight: 400;line-height: 1.42857143;text-align: center;white-space: nowrap;vertical-align: middle;-ms-touch-action: manipulation;touch-action: manipulation;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;background-image: none;border: 1px solid transparent;border-radius: 4px;}label{font-size: 18px;font-weight: 500;line-height:32px;color: inherit;}.red{color:red }.has-error{color:red } .has-error input{border:1px solid red}.d-none{display:none}
.login{width: 70%;text-align: center;margin: 0 auto;color:white !important}.login h1{ font-size:25px;border-bottom:2px solid black;color:black !important}
.btn-blue{border-radius:10px;background-color:#3578E5}.btn-red{border-radius:10px;background-color:red}.link{ color:blue;text-decoration:underline;font-size:18px;line-height:24px}.col-md-8{margin-left:10%}.container{width: 70%;}
</style>
