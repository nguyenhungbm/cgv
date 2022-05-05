<template>
  <HeaderLayout />
  <div class="col1-layout">
    <div class="main">
      <div class="col-main">
        <div class="account-wrap">
          <div class="col2-set">
            <div class="cgv-login-register-form">
              <div class="r-login">
                <h2>
                  <span id="form-login-content"
                    ><router-link to="/auth/login">
                      {{ $t("login") }}</router-link
                    ></span
                  ><span id="form-register-content" class="active">
                    {{ $t("register") }}</span
                  >
                </h2>
                <div class="cgvfc form-register-content">
                  <form
                    class="cgv-signup-form"
                    name="cgv-signup-form"
                    id="cgv-signup-form"
                    @submit.prevent="pressed"
                  >
                    <fieldset>
                      <label for="r-fname">{{ $t('name') }}<span>*</span></label>
                      <Field
                        type="text"
                        id="register_fullname"
                        ref="username"
                        name="register_fullname"
                        class="input-text required-entry form-control"
                        :placeholder="$t('name')"
                        autocomplete="off" 
                        :rules="isRequired"
                      />
                      <label for="r-phone">{{ $t('phone') }}<span>*</span></label>
                      <input
                        type="text"
                        id="register_phone"
                        name="register_phone"
                        class="input-text required-entry"
                         :placeholder="$t('phone')"
                        autocomplete="off"
                        ref="phone"
                      />
                      <label for="r-email">Email<span>*</span></label>
                      <input
                        type="text"
                        id="register_email"
                        name="register_email"
                        class="input-text required-entry"
                        placeholder="Email"
                        autocomplete="off"
                        ref="email"
                      />
                      <label for="register_password">{{ $t('password') }}<span>*</span></label>
                      <input
                        type="password"
                        id="register_password"
                        name="register_password"
                        class="input-text required-entry"
                        :placeholder="$t('password')"
                        autocomplete="new-password"
                        ref="password"
                      /><span class="icon-eye"></span>
                      <label for="registers_password">{{ $t('confirm_password') }}<span>*</span></label>
                      <input
                        type="password"
                        id="registers_password"
                        name="confirm_password"
                        class="input-text required-entry"
                        :placeholder="$t('confirm_password')"
                        autocomplete="off"
                        ref="confirm_password"
                      /><span class="icon-eye"></span>
                       <label for="r-city">{{ $t('address') }}<span>*</span></label>
                      <v-select  v-model="address"
                      :options="city"
                      :placeholder="$t('address')"
                      label="name"
                      class="form-control" />
                      <label for="r-birthday">Ngày sinh<span>*</span></label>
                      <Datepicker v-model="birthday" :placeholder="$t('confirm_password')"></Datepicker>
                      <label for="r-fname" class="gender-title"
                        >Giới tính<span class="sp-gender">{{ $t('sex') }}</span><span> *</span>
                        <input
                          type="radio"
                          name="r-gender"
                          id="male-gender"
                          value="1"
                          ref="sex"
                        />
                        {{ $t('male') }}
                        <input
                          type="radio"
                          name="r-gender"
                          id="female-gender" 
                          value="2"
                          ref="sex"
                        />
                        {{ $t('female') }}</label>
                     
                    </fieldset>
                     
                    <div class="terms-register">
                      <input
                        type="submit"
                        id="cgv-btnsignup"
                        :value="$t('register')"
                      />
                    </div>
                  </form>
                </div>
                <span id="error-validate"></span>
                <div id="correct" style="color: gray"></div>
                <div id="seconds"></div>
              </div>
              <div class="l-login">
                <div id="slider-container">
                  <div class="mySlides fade">
                    <img src="https://www.cgv.vn/media/wysiwyg/2020/3.jpg" />
                  </div>
                  <div class="mySlides fade">
                    <img src="https://www.cgv.vn/media/wysiwyg/2020/1.jpg" />
                  </div>
                  <div class="mySlides fade">
                    <img src="https://www.cgv.vn/media/wysiwyg/2020/2.jpg" />
                  </div>
                  <!-- Next and previous buttons -->
                  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                  <a class="next" onclick="plusSlides(1)">&#10095;</a>
                </div>
                <!-- The dots/circles -->
                <div class="cgv-dots">
                  <span class="dot" onclick="currentSlide(0)"></span>
                  <span class="dot" onclick="currentSlide(1)"></span>
                  <span class="dot" onclick="currentSlide(2)"></span>
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="banner-login-page"></div>
            </div>
          </div>
        </div>
        <div id="reloading-mask" style="left: -2px; top: 0px">
          <p class="loader" id="loading_mask_loader">
            <img
              src="https://www.cgv.vn/skin/frontend/cgv/default/images/ajax-loader.gif"
              alt="Loading..."
            />
            <br />Đang tải thông tin...
          </p>
        </div>
      </div>
    </div>
  </div>
  <FooterLayout />
</template>

<script>
import HeaderLayout from "@/containers/Layout/HeaderLayout.vue"
import FooterLayout from "@/containers/Layout/FooterLayout.vue"
import httpRequest from "@/plugins/api/api.js"
import listApi from "@/plugins/api/listApi.js"
import axios from "axios";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import {  Field } from 'vee-validate';

export default {
  name: "LoginScreen",
    components: {
      Datepicker,
      HeaderLayout,
      FooterLayout,
      Field,
    },
    data() {
      return {
        errors: [],
        city: [],
        username : '', 
        phone : '',
        email : '',
        password : '',
        confirm_password : '',
        birthday : null,
        sex : '',
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
      pressed(e){
        e.preventDefault();
        const data = {
          username : this.$refs.username.value,
          phone : this.$refs.phone.value,
          email : this.$refs.email.value,
          password : this.$refs.password.value,
          confirm_password : this.$refs.confirm_password.value,
          birthday : this.birthday,
          sex : this.$refs.sex.value,
          city : this.address,
        }
        axios.post(listApi.MOCK_API +'/users', data)
          .then(
            res => {
              console.log(res);
              localStorage.setItem('token', res.data.username);
              this.$router.push('/');
              this.$toast.success(res.statusText);
            }
          ).catch(
            err => {
              console.log(err);
              this.$toast.error(err);
            }
          )
      }
    },
};
</script>
