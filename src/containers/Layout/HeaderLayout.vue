<template>
<Spinner v-if="isLoading" />
<div id="commonHead">   
    <div class="wrp">
        <h1 class="textLeft dnTablet-l">Đồng hồ nam, Đẳng cấp thương hiệu</h1>
        <form action="" class="frmSearch"  method="get"> 
            <div class="flex">
                <input type="text" name="keyword" id="keyword" autocomplete="off" value="" placeholder="Nhập từ khóa tìm kiếm..." /> 
                <button class="btnSearch"><i class="fa fa-search"></i></button>
            </div>     
        </form>   
        <ul class="menuRight dnTablet-l" v-if="user != null">
          <li><router-link to="/order" title="Home">Đơn hàng</router-link></li>
          <li><a href="javascript:;" @click="goToDetailCategory(cate.c_slug)">{{ user.name}}</a></li>
          <li><a href="javascript:;" v-on:click="logout">Đăng xuất</a></li>
        </ul>
        <ul class="menuRight dnTablet-l" v-else>
          <li><router-link to="/auth/login">Đăng nhập</router-link></li>
          <li><router-link to="/auth/register">Đăng ký</router-link></li>
        </ul>
    </div>
</div>
<div id="header">
    <div class="wrp">
        <router-link to="/" title="Home" class="logo">
            <img src="/view/img/logo.png" alt="Logo" class="logo"/>
        </router-link>
        <div id="menuMain">
            <ul>
                <li class="hasChild">
                    <a href="javascript:;" title="Đồng hồ chính hãng" >Đồng hồ chính hãng</a>
                    <ul>
                        <li>
                            <div class="subMenu" style="width: 250px;">                                             
                                <div class="group">                                       
                                    <div class="item" v-for="cate in category" :key="cate.id">
                                      <a href="javascript:;" @click="goToDetailCategory(cate.c_slug)" v-if="cate.c_cate == 'watch'" >{{ cate.c_name }}</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" title="Kinh mat thoi trang" >Kính mắt thời trang</a>
                    <ul>
                        <li>
                            <div class="subMenu" style="width: 250px;">
                                <div class="group">                                        
                                   <div class="item" v-for="cate in category" :key="cate.id">
                                      <a href="javascript:;" @click="goToDetailCategory(cate.c_slug)" v-if="cate.c_cate == 'glass'" >{{ cate.c_name }}</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul> 
                </li>
                <li>
                    <a href="javascript:;" title="Phu kien dong ho" >Phụ kiện đồng hồ</a>
                    <ul>
                        <li>
                            <div class="subMenu" style="width: 250px;">                                   
                                <div class="group">                                       
                                   <div class="item" v-for="cate in category" :key="cate.id">
                                      <a href="javascript:;" @click="goToDetailCategory(cate.c_slug)" v-if="cate.c_cate == 'accessories'" >{{ cate.c_name }}</a>
                                    </div>
                                </div> 
                            </div>
                        </li>
                    </ul> 
                </li>
            </ul>
        </div>
        <div class="right">
            <a href="tel:18006005" class="item">
                <span class="icon">
                    <img src="/view/img/hotline.png" alt="Hotline" />
                </span>
                <span class="text">
                    <span class="top">Hotline</span>
                    <span class="bot">1800 0000</span>
                </span>
            </a>
            <a href="javascript:;" @click="goToDetailCategory(cate.c_slug)" class="btnCart">
                <i class="fa fa-shopping-cart"></i>
                <span class="number">0</span>
            </a>
        </div>
    </div>
</div>
</template>
<script>
import i18n from '@/plugins/i18n/i18n'
import { revokeUser } from "@/plugins/utils/cookie";
import { getListCategory } from "@/plugins/api/category";
import { getUserInfo } from "@/plugins/utils/cookie";
import Spinner from "@/components/Spinner"
export default {
  name: "HeaderLayout", 
   data() {
    return {
      user: null,
      category : [],
      isLoading: true
    }
  },
	components: {
		Spinner
	},
  mounted() {
    setTimeout(() => this.isLoading = false, 2000);
  },
  async created() { 
    const cate = await getListCategory();
    this.category = cate.category;
    const res = getUserInfo();
    this.user = res;
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    },
    logout(e) {
      e.preventDefault();
      revokeUser();
      window.location.reload(); 
    },
    goToDetailCategory(slug){
        this.$router.push({
            name: "CategoryScreen",
            query: {
                slug: `${slug}`,
            },
    })
  }
  } 
} 
</script>
