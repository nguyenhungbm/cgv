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
                      {{ $t("message.login") }}</router-link
                    ></span
                  ><span id="form-register-content" class="active">
                    {{ $t("message.register") }}</span
                  >
                </h2>
                <div class="cgvfc form-register-content">
                  <form
                    class="cgv-signup-form"
                    name="cgv-signup-form"
                    id="cgv-signup-form"
                  >
                    <fieldset>
                      <label for="r-fname">{{ $t('message.name') }}<span>*</span></label>
                      <input
                        type="text"
                        id="register_fullname"
                        ref="name"
                        name="register_fullname"
                        class="input-text required-entry"
                         :placeholder="$t('message.name')"
                        autocomplete="off"
                      />
                      <label for="r-phone">{{ $t('message.phone') }}<span>*</span></label>
                      <input
                        type="text"
                        id="register_phone"
                        name="register_phone"
                        class="input-text required-entry"
                         :placeholder="$t('message.phone')"
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
                      <label for="r-password">{{ $t('message.password') }}<span>*</span></label>
                      <input
                        type="password"
                        id="register_password"
                        name="register_password"
                        class="input-text required-entry"
                        :placeholder="$t('message.password')"
                        autocomplete="new-password"
                        ref="password"
                      /><span class="icon-eye"></span>
                      <label for="r-birthday">Ngày sinh<span>*</span></label>
                      <select
                        id="r-day"
                        name="r-day"
                        class="r-bday input-text required-entry"
                        ref="day"
                      >
                        <option value="">Ngày</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                      </select>
                      <select
                        id="r-month"
                        name="r-month"
                        class="r-bmonth input-text required-entry"
                        ref="month"
                      >
                        <option value="">Tháng</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                      <select
                        id="r-year"
                        name="r-year"
                        class="r-byear input-text required-entry"
                        ref="year"
                      >
                        <option value="">Năm</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                        <option value="1990">1990</option>
                        <option value="1989">1989</option>
                        <option value="1988">1988</option>
                        <option value="1987">1987</option>
                        <option value="1986">1986</option>
                        <option value="1985">1985</option>
                        <option value="1984">1984</option>
                        <option value="1983">1983</option>
                        <option value="1982">1982</option>
                        <option value="1981">1981</option>
                        <option value="1980">1980</option>
                        <option value="1979">1979</option>
                        <option value="1978">1978</option>
                        <option value="1977">1977</option>
                        <option value="1976">1976</option>
                        <option value="1975">1975</option>
                        <option value="1974">1974</option>
                        <option value="1973">1973</option>
                        <option value="1972">1972</option>
                        <option value="1971">1971</option>
                        <option value="1970">1970</option>
                        <option value="1969">1969</option>
                        <option value="1968">1968</option>
                        <option value="1967">1967</option>
                        <option value="1966">1966</option>
                        <option value="1965">1965</option>
                        <option value="1964">1964</option>
                        <option value="1963">1963</option>
                        <option value="1962">1962</option>
                        <option value="1961">1961</option>
                        <option value="1960">1960</option>
                        <option value="1959">1959</option>
                        <option value="1958">1958</option>
                        <option value="1957">1957</option>
                        <option value="1956">1956</option>
                        <option value="1955">1955</option>
                        <option value="1954">1954</option>
                        <option value="1953">1953</option>
                        <option value="1952">1952</option>
                        <option value="1951">1951</option>
                        <option value="1950">1950</option>
                        <option value="1949">1949</option>
                        <option value="1948">1948</option>
                        <option value="1947">1947</option>
                        <option value="1946">1946</option>
                        <option value="1945">1945</option>
                        <option value="1944">1944</option>
                        <option value="1943">1943</option>
                        <option value="1942">1942</option>
                      </select>
                      <label for="r-fname" class="gender-title"
                        ><span class="sp-gender">{{ $t('message.sex') }}</span><span>*</span>
                        <input
                          type="radio"
                          name="r-gender"
                          id="male-gender"
                          value="1"
                          ref="sex"
                        />
                        {{ $t('message.male') }}
                        <input
                          type="radio"
                          name="r-gender"
                          id="female-gender" 
                          value="2"
                          ref="sex"
                        />
                        {{ $t('message.female') }}</label>
                      <label for="r-city">{{ $t('message.address') }}<span>*</span></label>
                      <v-select  v-model="selected"
                      :options="city"
                      :searchable="false"
                      :close-on-select="false"
                      :allow-empty="false"
                      :placeholder="$t('message.address')"
                      label="name"
                      track-by="name"   />
                      
                     
                    </fieldset>
                    <div>
                      <li
                        class="captcha-input-container"
                        id="captcha-input-box-user_create"
                      >
                        
                      </li>
                       
                    </div>
                    <div class="terms-register">
                      <label class="r-terms">
                        <input
                          type="checkbox"
                          checked="checked"
                          name="terms"
                          value="1"
                          ref="term"
                        />
                        Tôi đồng ý với
                        <a href="#">Điều Khoản Sử Dụng của CGV</a>
                      </label>
                      <input
                        type="button"
                        id="cgv-btnsignup"
                        :value="$t('message.register')"
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
import HeaderLayout from "@/components/Layout/HeaderLayout.vue"
import FooterLayout from "@/components/Layout/FooterLayout.vue"
import httpRequest from "@/plugins/api/api.js"
import listApi from "@/plugins/api/listApi.js"
import { ref } from "vue";
export default {
  name: "LoginScreen",
    components: {
        HeaderLayout,
        FooterLayout, 
    },
    data() {
      return {
        city : [],
        errors: [],
      }
    },
   
    async created() {
      await this.getCity();
    },
    setup() {
    /* pass value to captcha  */
    const inputValue = ref(null);

    const getCaptchaCode = (value) => {
      /* you can access captcha code */
      console.log(value);
    };
    const checkValidCaptcha = (value) => {
      /* expected return boolean if your value and captcha code are same return True otherwise return False */
      console.log(value);
    };
    return {
      inputValue,
      getCaptchaCode,
      checkValidCaptcha,
    }
    },
    methods: {
      async getCity(){
        try {
          const response = await httpRequest.get(listApi.PROVINCE_API)
          this.city = response.data;
        } catch (error) {
          this.errors = error.error;
      }
      }
    },
};
</script>
