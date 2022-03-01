<template>
  <HeaderLayout />
    <div class="col1-layout">
      <div class="main">
          <div class="col-main">
              <div class="account-wrap">
                  <div class="col2-set">
                      <div class="cgv-login-register-form">
                          <div class="r-login">
                              <h2><span id="form-login-content"  class="active"><router-link to="/auth/login"> {{ $t('message.login')}}</router-link></span><span id="form-register-content"><router-link to="/auth/register"> {{ $t('message.register')}}</router-link></span></h2>
                              <div class="cgvfc form-register-content">
                                  <form class="cgv-signup-form" name="cgv-signup-form" id="cgv-signup-form">
                                      <fieldset>
                                          <label for="r-email">Email<span>*</span></label>
                                          <input type="text" id="register_email" name="register_email" class="input-text required-entry" placeholder="Email" autocomplete="off" onkeyup="validateForm(this.id,'email')" >
                                          <label for="r-password">Mật khẩu<span>*</span></label>
                                          <input type="password" id="register_password" name="register_password" class="input-text required-entry" placeholder="Mật khẩu" autocomplete="new-password" onkeyup="validateForm(this.id,'password')" ><span class="icon-eye"></span>
                                      </fieldset>
                                      <div>
                                          <li class="captcha-input-container" id="captcha-input-box-user_create">
                                              <label for="captcha_user_create" class="required"><em>*</em>Vui lòng nhập ký tự bên dưới</label>
                                              <div class="input-box captcha">
                                                  <input name="captcha[user_create]" type="text" class="input-text required-entry" id="captcha_user_create" autocomplete="off" />
                                              </div>
                                          </li>
                                          <li class="captcha-img-container">
                                              <div class="captcha-image" id="captcha-image-box-user_create">
                                                  <img id="captcha-reload" class="captcha-reload" src="https://www.cgv.vn/skin/frontend/base/default/images/reload.png" alt="Reload captcha" onclick="$('user_create').captcha.refresh(this)">
                                                  <img id="user_create" class="captcha-img" height="50" src="https://www.cgv.vn/media/captcha/base/a478709797bb03ed6039b9822edf53b8.png"/>
                                              </div>
                                          </li>
                                      </div>
                                      <div class="terms-register">
                                          <label class="r-terms">
                                          <input type="checkbox" checked="checked" name="cgv-terms" id="cgv-terms" value="ok" onchange="validateForm(this.id,'terms')"> Tôi đồng ý với <a href='https://www.cgv.vn/default/terms-use/'>Điều Khoản Sử Dụng của CGV</a>          </label>
                                          <input type="button" id="cgv-btnsignup" value=" {{ $t('message.register')}}">
                                      </div>
                                      <div class="cgv-register-requirement"></div>
                                      <div><input name="form_key" type="hidden" value="JTWRRsVymgM2Rmms" /></div>
                                  </form>
                              </div>
                              <span id="error-validate"></span>
                              <div id="correct" style="color:gray;"></div>
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
                          <div class="banner-login-page">
                          </div>
                      </div>
                  </div>
              </div>
              <div id="reloading-mask" style="left: -2px; top: 0px;">
                  <p class="loader" id="loading_mask_loader">
                      <img src="https://www.cgv.vn/skin/frontend/cgv/default/images/ajax-loader.gif" alt="Loading...">
                      <br>Đang tải thông tin...	
                  </p>
              </div>
                           
          </div>
      </div>
  </div>
  <FooterLayout />
</template>

<script>
import HeaderLayout from "@/components/Layout/HeaderLayout.vue";
import FooterLayout from "@/components/Layout/FooterLayout.vue";
export default {
  name: "LoginScreen",
  components: {
    HeaderLayout,
    FooterLayout,
  },
};
</script>

