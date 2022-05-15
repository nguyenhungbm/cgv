<template>
  <HeaderLayout />
 <div class="container"><br>
<div class="login">
<h1 class=" text-center">ĐĂNG NHẬP BẰNG</h1><br><br>
<a href="http://localhost:9000/auth/redirect/facebook" class="btn btn-blue"><i class="fa fa-facebook-f mr-1"></i> FACEBOOK</a>
<a href="http://localhost:9000/auth/redirect/google" class="btn btn-red"><i class="fa fa-google"></i>  GOOGLE</a><br>
<br>
<h1 class=""> HOẶC ĐĂNG KÝ TÀI KHOẢN TẠI ĐÂY</h1><br>
</div>
<form method="POST" class="col-md-8" @submit.prevent="pressed">
  <div class="form-group">
    <label for="register_fullname">{{ $t('name') }} <b class="red">(*)</b> </label>
    <input
      type="text"
      id="register_fullname"
      ref="username"
      name="register_fullname"
      class="input-text required-entry form-control"
      :placeholder="$t('name')"
      autocomplete="off" 
      :rules="isRequired"
    />
  </div>
  
  <div class="form-group">
    <label for="register_email">Email <b class="red">(*)</b> </label>
    <input
      type="text"
      id="register_email"
      name="register_email"
      class="input-text required-entry form-control"
      placeholder="Email"
      autocomplete="off"
      ref="email"
    />
  </div>

 <div class="form-group">
    <label for="register_phone">Phone <b class="red">(*)</b> </label>
    <input
      type="text"
      id="register_phone"
      name="phone"
      class="input-text required-entry form-control"
      :placeholder="$t('phone')"
      autocomplete="off"
      ref="phone"
    />
  </div>

  <div class="form-group">
    <label for="register_password">{{ $t('password') }}<b class="red">(*)</b> </label>
    <input
      type="password"
      id="register_password"
      name="register_password"
      class="input-text required-entry form-control"
      :placeholder="$t('password')"
      autocomplete="new-password"
      ref="password"
    />
  </div>

  <div class="form-group">
    <label for="registers_passworsd">{{ $t('confirm_password') }}<b class="red">(*)</b> </label>
    <input
      type="password"
      id="registers_passworsd"
      name="confirm_password"
      class="input-text required-entry form-control"
      :placeholder="$t('confirm_password')"
      autocomplete="off"
      ref="confirm_password"
    />
  </div>

  <label for="r-city">{{ $t('address') }}<span>*</span></label>
    <v-select v-model="address" :options="city" :placeholder="$t('address')"  label="name"   />
    <label for="r-birthday">Ngày sinh<span>*</span></label>
    <Datepicker v-model="birthday" id="r-birthday" :placeholder="$t('birthday')" ></Datepicker>
    <label for="r-fname" class="gender-title">{{ $t('sex') }}<span> *</span>
    <input type="radio" name="r-gender" id="male-gender" value="0"  ref="sex" checked />{{ $t('male') }}
    <input type="radio" name="r-gender" id="female-gender"  value="1" ref="sex" />{{ $t('female') }}</label>
    <br>
  <button type="submit" class="btn btn-primary">{{ $t('register') }}</button>
  <router-link to="/" class="btn btn-danger"><i class="fa fa-undo"></i>{{ $t('back') }}</router-link><br><br>
  <router-link to="/auth/login" class="link" >{{ $t('login') }}</router-link><br>
  <a class="link" href="http://localhost:9000/account/forgot-password">{{ $t('forgot_password') }}</a><br>
</form><br>

</div>
  <FooterLayout />
</template>

<script>
import HeaderLayout from "@/containers/Layout/HeaderLayout.vue"
import FooterLayout from "@/containers/Layout/FooterLayout.vue"
import httpRequest from "@/plugins/api/api.js"
import listApi from "@/plugins/api/listApi.js"
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { setAccessToken } from "@/plugins/utils/cookie";
import { register } from "@/plugins/api/auth";

export default {
  name: "LoginScreen",
    components: {
      Datepicker,
      HeaderLayout,
      FooterLayout,
    },
    data() {
      return {
        errors: [],
        city: [],
      }
    },
   
    async created() {
      await this.getCity();
    },
    methods: {
       isRequired(value) {
        return value ? true : 'This field is required';
      },
      async getCity(){
        try {
          const response = await httpRequest.get(listApi.PROVINCE_API)
          this.city = response.data;
        } catch (error) {
          this.errors = error.error;
      }
      },
      async pressed(e){
        e.preventDefault();
         try {
          const data = {
            name : this.$refs.username.value,
            phone : this.$refs.phone.value,
            email : this.$refs.email.value,
            password : this.$refs.password.value,
            password_confirmation : this.$refs.confirm_password.value,
            birthday : this.birthday,
            gender : this.$refs.sex.value,
            address : this.address.code ? this.address.code : 0,
          }
          const res = await register(data);
          setAccessToken(res.access_token, res.expires_in);
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

<style> .form-control{display: block;width: 100%;height: 34px;padding: 6px 12px;font-size: 14px;line-height: 1.42857143;color: #555;background-color: #fff;background-image: none;border: 1px solid #ccc;border-radius: 4px; }.container{width:50%;margin:0 auto;}.btn-danger{background-color: #d9534f;}.btn-primary{background-color: #3c8dbc;}.btn{display: inline-block;padding: 6px 12px;margin-bottom: 0;font-size: 14px;font-weight: 400;line-height: 1.42857143;text-align: center;white-space: nowrap;vertical-align: middle;-ms-touch-action: manipulation;touch-action: manipulation;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;background-image: none;border: 1px solid transparent;border-radius: 4px;}label{font-size: 18px;font-weight: 500;line-height:32px;color: inherit;}.red{color:red }.has-error{color:red } .has-error input{border:1px solid red}.d-none{display:none}
.login{width: 70%;text-align: center;margin: 0 auto;color:white !important}.login h1{ font-size:25px;border-bottom:2px solid black;color:black !important}
.btn-blue{border-radius:10px;background-color:#3578E5}.btn-red{border-radius:10px;background-color:red}.col-md-8 {margin-left: 10% !important;}.container{width:70% !important}</style>
