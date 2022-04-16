<template>
  <HeaderLayout />
    <div class="col1-layout">
      <div class="main">
          <div class="col-main">
              <div class="account-wrap">
                  <div class="col2-set">
                      <div class="cgv-login-register-form">
                          <div class="r-login">
                              <h2><span id="form-login-content"  class="active"><router-link to="/auth/login"> {{ $t('login')}}</router-link></span><span id="form-register-content"><router-link to="/auth/register"> {{ $t('register')}}</router-link></span></h2>
                              <div class="cgvfc form-register-content">
                                  <form class="cgv-signup-form" name="cgv-signup-form" id="cgv-signup-form">
                                      <fieldset>
                                          <label for="r-email">Email<span>*</span></label>
                                          <input type="text" id="register_email" name="register_email" class="input-text required-entry" placeholder="Email" autocomplete="off">
                                          <label for="r-password">Mật khẩu<span>*</span></label>
                                          <input type="password" id="register_password" name="register_password" class="input-text required-entry" placeholder="Mật khẩu" autocomplete="new-password" ><span class="icon-eye"></span>
                                      </fieldset>
                                      <div class="terms-register">
                                          <label class="r-terms">
                                          <input type="checkbox" checked="checked" name="cgv-terms" id="cgv-terms" value="ok" onchange="validateForm(this.id,'terms')"> Tôi đồng ý với <a href='https://www.cgv.vn/default/terms-use/'>Điều Khoản Sử Dụng của CGV</a>          </label>
                                          <input type="button" id="cgv-btnsignup" :value="$t('login')">
                                      </div>
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
import HeaderLayout from "@/containers/Layout/HeaderLayout.vue";
import FooterLayout from "@/containers/Layout/FooterLayout.vue";
export default {
  name: "LoginScreen",
  components: {
    HeaderLayout,
    FooterLayout,
  },
};
</script>

