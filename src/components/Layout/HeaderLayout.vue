<template>
  <div class="header-language-background">
    <div class="header-container">
      <div class="header-language-right">
        <div class="header-career os"  v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
           <flag :iso="entry.flag" v-bind:squared=false />
            {{entry.title}}
        </div>
        
        <div class="header-career mn-myticket">
          <p>
            <a href="https://www.cgv.vn/default/sales/order/history/">
              Vé Của Tôi
            </a>
          </p>
        </div>
        <div class="header-language-container">
          <div class="store-language-container">
            <div class="form-language">
              <ul
                id="select-language"
                title="Ngôn ngữ"
                onchange="window.location.href=this.value"
              >
                <li
                  value="https://www.cgv.vn/en/customer/account/create/?___from_store=default"
                >
                  <a
                    href="https://www.cgv.vn/en/customer/account/create/?___from_store=default"
                    ><span>EN</span></a
                  >
                </li>
                <li
                  value="https://www.cgv.vn/default/customer/account/create/?___from_store=default"
                  class="current"
                  selected="selected"
                >
                  <span>VN</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-top-account">
          <div class="account-header-wrapper mn-login">
            <router-link to="/auth/login" class="topskip-link skip-account">
              <span class="label"> {{ $t('message.login')}}/  {{ $t('message.register')}}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <header id="header" class="page-header">
    <div class="page-header-container">
     <router-link to="/" class="logo" >
        <img
          src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png"
          alt="CGV Cinemas"
          class="large"
        />
        <img
          src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo-small.png"
          alt="CGV Cinemas"
          class="small"
        />
     </router-link>
      <!-- Skip Links -->
      <div class="skip-links">
        <a href="#header-nav" class="skip-link skip-nav">
          <span class="icon"></span>
          <span class="label">Menu</span>
        </a>
        <a
          href="https://www.cgv.vn/default/sales/order/history/"
          class="skip-myticket"
        >
          <span class="icon"></span>
        </a>
        <!--<a href="#header-search" class="skip-link skip-search">
                                <span class="icon"></span>
                                <span class="label">Tìm kiếm</span>
                                </a>-->
        <div class="account-cart-wrapper">
          <a
            href="https://www.cgv.vn/default/customer/account/"
            data-target-element="#header-account"
            class="skip-link skip-account"
          >
            <span class="icon"></span>
            <span class="label"> {{ $t('message.login')}}/  {{ $t('message.register')}}</span>
          </a>
        </div>
      </div>
      <!-- Navigation -->
      <div id="header-nav" class="skip-content">
        <nav id="nav">
          <ol class="nav-primary">
            <li class="level0 nav-1 first last parent">
              <a
                href="https://www.cgv.vn/default/movies.html"
                class="level0 has-children"
                >Phim</a
              >
              <ul class="level0">
                <li class="level1 nav-1-1 first">
                  <a
                    href="https://www.cgv.vn/default/movies/now-showing.html"
                    class="level1"
                    >Phim Đang Chiếu</a
                  >
                </li>
                <li class="level1 nav-1-2 last">
                  <a
                    href="https://www.cgv.vn/default/movies/coming-soon-1.html"
                    class="level1"
                    >Phim Sắp Chiếu</a
                  >
                </li>
              </ul>
            </li>
            <!--li class="level0 nav-2 first last">
                                        <a class="level0" href="https://www.cgv.vn/default/cinox/reserve/">Lịch Chiếu</a>
                                        </li-->
            <li class="level0 nav-2 parent first last">
              <a class="level0 has-children" href="javascript: void(0);"
                >Rạp CGV</a
              >
              <ul class="level0">
                <li class="level1 nav-3-1 last">
                  <a
                    class="level1"
                    href="https://www.cgv.vn/default/cinox/site/"
                    >Tất Cả Các Rạp</a
                  >
                </li>
                <li class="level1 nav-3-2 last">
                  <a
                    class="level1"
                    href="https://www.cgv.vn/default/theaters/special/gold-class"
                    >Rạp Đặc Biệt</a
                  >
                </li>
                <li class="level1 nav-3-3 last">
                  <a
                    class="level1"
                    href="https://www.cgv.vn/default/cinemas/site/process"
                    >Rạp sắp mở</a
                  >
                </li>
              </ul>
            </li>
            <li class="level0 nav-4 parent first last">
              <a class="level0 has-children" href="javascript: void(0);"
                >Thành viên</a
              >
              <ul class="level0">
                <li class="level1 nav-4-2 first">
                  <!--<a class="level0" href="https://www.cgv.vn/default/sales/order/history/">Thành viên</a>-->
                  <a
                    class="level1"
                    href="https://www.cgv.vn/default/customer/account/login"
                    >Tài khoản CGV</a
                  >
                </li>
                <li class="level1 nav-4-3 last">
                  <a
                    class="level1"
                    href="https://www.cgv.vn/default/cgv-membership"
                    >Quyền lợi</a
                  >
                </li>
              </ul>
            </li>
            <li class="level0 nav-5 parent first last">
              <a class="level0 has-children" href="javascript: void(0);"
                >Cultureplex</a
              >
              <ul class="level0">
                <!--						<li class="level1 nav-5-1 ">
                                                <a class="level1" href=""></a>
                                                </li>
                                                -->
                <li class="level1 nav-5-1">
                  <a
                    class="level1"
                    href="https://www.cgv.vn/default/online-store/movie-voucher.html"
                    >Quầy Online</a
                  >
                </li>
                <li class="level1 nav-5-1">
                  <a class="level1" href="https://www.cgv.vn/default/groupsale"
                    >Sự Kiện & Vé Nhóm</a
                  >
                </li>
                <li class="level1 nav-5-1">
                  <a class="level1" href="https://www.cgv.vn/default/cgv-online"
                    >e-CGV</a
                  >
                </li>
                <li class="level1 nav-5-1">
                  <a class="level1" href="https://www.cgv.vn/default/gift-card"
                    >Thẻ Quà Tặng</a
                  >
                </li>
              </ul>
            </li>
            <li class="level0 nav-6 last">
              <a class="level0" href="https://www.cgv.vn/default/careers"
                >Tuyển dụng</a
              >
            </li>
            <li class="level0 nav-6 last">
              <a class="level0" href="https://www.cgv.vn/default/newsoffer"
                >Tin mới & Ưu đãi</a
              >
            </li>
            <!--li class="level0 nav-6 parent first last">
                                        <a class="level0" href="https://www.cgv.vn/default/choi-le-cgv">Vui lễ CGV</a>
                                        </li-->
          </ol>
        </nav>
      </div>
      <!-- Search -->
      <div id="header-search" class="skip-content">
        <div class="header-search-left">
          <p class="kenhcine">
            <a
              href="https://kenhcine.cgv.vn/"
              title="Kênh Cine - Tổng hợp tin tức điện ảnh mới nhất"
              target="_blank"
              ><img
                alt="kênh Cine"
                src="https://www.cgv.vn/media/wysiwyg/2019/AUG/kenhcine.gif"
            /></a>
          </p>
        </div>
        <div class="header-search-right">
          <p>
            <a href="https://www.cgv.vn/default/movies/now-showing.html"
              ><img
                alt=""
                src="https://www.cgv.vn/media/wysiwyg/news-offers/mua-ve_ngay.png"
            /></a>
          </p>
        </div>
      </div>
      <!-- Account -->
      <div id="header-account" class="skip-content">
        <div class="links">
          <ul>
            <li class="first">
              <a
                href="https://www.cgv.vn/default/customer/account/"
                title="Tài khoản"
                >Tài khoản</a
              >
            </li>
            <li>
              <a
                href="https://www.cgv.vn/default/checkout/cart/"
                title="Giỏ hàng"
                class="top-link-cart"
                >Giỏ hàng</a
              >
            </li>
            <li>
              <a
                href="https://www.cgv.vn/default/checkout/"
                title="Thanh toán"
                class="top-link-checkout"
                >Thanh toán</a
              >
            </li>
            <li><router-link to="/auth/register"> {{ $t('message.register')}}</router-link></li>
            <li class="last">
              <router-link to="/auth/login"> {{ $t('message.login')}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import i18n from '@/plugins/i18n/i18n'
export default {
  name: "HeaderLayout", 
  data() {
    return {
      languages: [
        { flag: 'us', language: 'en', title: 'English' },
        { flag: 'vn', language: 'vi', title: 'Tiếng Việt' }
      ]
    }
    },
    methods: {
      changeLocale(locale) {
        i18n.locale = locale;
      }
    }
  } 
</script>
