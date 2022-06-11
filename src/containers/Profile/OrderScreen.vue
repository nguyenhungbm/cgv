<template>
  <HeaderLayout />
  <div class="lzd-playground-main">
<div class="lzd-playground-nav">
    <div class="member-info">
        <p>
            <span>Xin chào, </span>
            <span id="lzd_current_logon_user_name">Satosis</span>
        </p>
    </div>
    <ul class="nav-container">
        <li class="item" id="Manage-My-Account"><a class="active" href="http://localhost:9000/user">
            <span>Quản lý tài khoản</span></a>
            <ul class="item-container">
                <li id="My-profile" class="sub"><a href="http://localhost:9000/user/profile">Thông tin cá nhân</a></li>
            </ul>
        </li>
        <li class="item" id="My-Orders"><a href="http://localhost:9000/user/orders?status=0">
            <span>Đơn hàng của tôi</span></a>
            <ul class="item-container">
                <li id="Returns" class="sub"><a href="http://localhost:9000/user/orders?status=3">Đơn hàng đã nhận</a></li>
                <li id="Returns" class="sub"><a href="http://localhost:9000/user/orders?status=2">Đơn hàng đang chờ</a></li>
                <li id="Cancellations" class="sub"><a href="http://localhost:9000/user/orders?status=-1">Đơn hàng hủy</a></li>
            </ul>
        </li>
    </ul>
</div>

<div class="lzd-playground-right">
   <div class="breadcrumb">
      <a class="first" href="//my.lazada.vn/customer/order/index/">Đơn hàng của tôi</a>
   </div>
   <div id="container" class="container">
      <div class="order-list">
         <div class="order-list-tabs">
            <a href="http://localhost:9000/user/orders?status=0"><span class="order-tab-item  order-tab-item-active ">Tất cả({{ transaction.allTransaction }})</span></a>
            <a href="http://localhost:9000/user/orders?status=1"><span class="order-tab-item ">Tiếp nhận( {{ transaction.defaultTransaction }})</span></a>
            <a href="http://localhost:9000/user/orders?status=2"><span class="order-tab-item ">Đang vận chuyển({{ transaction.processTransaction }})</span></a>
            <a href="http://localhost:9000/user/orders?status=3"><span class="order-tab-item ">Đã bàn giao( {{ transaction.successTransaction }})</span></a>
            <a href="http://localhost:9000/user/orders?status=-1"><span class="order-tab-item ">Đã hủy( {{ transaction.deletedTransaction}})</span></a>
         </div>
      </div>
      <div class="orders" v-if="list.length" id="orderList">
            <div class="order" v-for="trans in list" :key="trans.id" >
                  <div class="order-info">
                     <div class="pull-left">
                        <div class="info-order-left-text">Đơn hàng <a class="http://localhost:9000/sp/faefae-282"> #29 </a></div>
                           <p class="text info desc">Đặt lúc 2022-05-14 18:51:22 </p>
                     </div>
                  </div>
                     
                  <div class="order-item">
                     <div class="item-pic"><a href="http://localhost:9000/sp/faefae-32"><img src="http://localhost:9000/uploads/2021/01/20/2021-01-20__apple-watch-s3-gps-42mm-vien-nhom-day-cao-su-denct-600x600.png" style="object-fit: contain;"></a></div>
                     <div class="item-main item-main-mini">
                        <div class="text title item-title">faefae</div>
                        <p class="text desc"></p>
                        <p class="text desc bold"></p>
                     </div>
                     <div class="item-quantity"><span class="text desc info multiply">Qty:</span><span class="text">&nbsp;4</span></div>
                     <div class="label label-primary">
                        <p class="capsule 
                                                                         error                         ">Đã hủy</p>
                     </div>
                  </div>
                    
            </div>
               
           
         </div>
      </div>
      </div>
   </div>
  <FooterLayout />
</template>

<script>
import HeaderLayout from "@/containers/Layout/HeaderLayout.vue";
import FooterLayout from "@/containers/Layout/FooterLayout.vue";
import { getOrderDetail } from "@/plugins/api/cart";
import ListProduct from "@/containers/Component/ListProduct.vue"
import { ref, onMounted  } from 'vue';
export default {
  name: "OrderScreen",
  components: {
    HeaderLayout,
    FooterLayout,
    ListProduct
  },
  data() {
    return {
      transaction : [],
      list : [],
      pagination: null,
    }
  },
  mounted() {
    const listElm = document.querySelector('.customer-account-create')
    listElm.addEventListener('scroll', function(){
      if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
        const next_page_url = get(this.pagination, "next_page_url");
        if (next_page_url) {
          this.getOrder(next_page_url);
        }
      }
    }) 
  },
   created() {
    const list = this.getOrder();
    this.list = list;
  }, 
  methods: { 
    async getOrder(fullUrl = null){
      const response = await getOrderDetail(fullUrl);
      const { data, ...pagination } = response.transaction;
      console.log(data);
      this.list = data;
      this.transaction = response;
      this.pagination = pagination;
    }, 
  }
};
</script>
<style scoped>
@import '//laz-g-cdn.alicdn.com/lzdmod/playground-nav/5.0.0/pc/index.css';
</style>