<template>
  <HeaderLayout />
 <div id="product">
   <div class="wrp">
      <div class="nameCate lsh">
         <a href="javascript://" class="name">{{ product.product.pro_name }} </a>
      </div>
      <div class="detailPro">
         <div class="top">
            <div class="left">
               <div class="imgLarge slick-initialized slick-slider"><i class="fas fa-chevron-left slick-arrow" style="display: inline;"></i><div class="slick-list draggable"><div class="slick-track" style="opacity: 1; width: 1431px;"><div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 477px; position: relative; left: 0px; top: 0px; z-index: 999; opacity: 1;"><div><div class="img" style="width: 100%; display: inline-block;">
                     <div class="wImage">
                        <a href="javascript://" class="image" tabindex="0">
                           <img :src="product.product.pro_avatar">
                        </a>
                     </div>
                  </div></div></div></div></div><i class="fas fa-chevron-right slick-arrow" style="display: inline;"></i></div>
            </div>
            <div class="right">
               <h1 style="position:relative"><a href="javascript://" class="namePro">{{ product.product.pro_name }}</a> <i class="fa fa-eye"></i>&nbsp; {{ product.product.pro_view }} 
                  <a href="http://localhost:9000/user/ajax_favourite/11" class="js-login js-add-favourite"><i class="fa fa-heart-o"></i></a>&nbsp;<div class="favourite" style="position: absolute;bottom: 0;margin-left: 60px;"> {{ product.product.pro_favourite }} </div>
               </h1>
               <div class="price">
                  <div class="price1">
                     <span class="text">Giá niêm yết </span>
                     <span class="numb cc4161c"> {{ formatMoney(product.product.pro_price) }}đ</span>
                                       </div>
               </div>
               <h3 class="descript">
                  <div class="item">
                     <span class="text">Số lượng</span>
                     <span class="num">{{ product.product.pro_amount }}</span>
                  </div>
                  <div class="item">
                     <span class="text">Độ chịu nước</span>
                     <span class="num">3ATM</span>
                  </div>
                  <div class="item">
                     <span class="text">Chất liệu mặt</span>
                     <span class="num">Kính sapphire</span>
                  </div>
                  <div class="item">
                     <span class="text">Năng lượng sử dụng</span>
                     <span class="num">Quartz/Pin </span>
                  </div>
               </h3>
               <div class="btnCart">
                  <a class="muangay" href="javascript:;" @click="addCard(product.product)">
                     <span>Mua ngay</span>
                     <span>Giao hàng miễn phí - Thanh toán tại nhà</span>
                  </a>
               </div>
            </div>
         </div>
         <div class="bot">
            <div class="detail">
               <div class="otherPro slideRes">
                  <h3 class="title">Có thể bạn sẽ thích</h3>
                  <div class="group slide">
                    <div class="item"  v-for="list in product.productSuggest" :key="list.id">
                      <div class="wImage">
                        <a :href="'/product/' + list.pro_slug" class="image">
                          <img :data-src="list.pro_avatar" alt="Đồng hồ Philippe Auguste PA5004A" class="lazy" :src="list.pro_avatar">
                        </a>                 
                      </div>
                      <h3 class="info">
                        <a :href="'/product/' + list.pro_slug" class="name">
                          {{list.pro_name}}           
                        </a>
                        <div class="price">
                            <p class="new">{{ formatMoney(list.pro_price) }} đ</p>                  
                        </div>
                      </h3>
                  </div> 
                 </div>
               </div>
               <div class="dn dbTablet">
                  <div class="thongsokythuat">
                     <div class="titleR">Thông số kỹ thuật</div>
                     <div class="group">
                        <div class="item">
                           <p class="text1">Đường kính mặt</p>
                           <p class="text2"><a href="javarscript://">27mm</a></p>
                        </div>
                        <div class="item">
                           <p class="text1">Chống nước</p>
                           <p class="text2"><a href="javarscript://">3ATM</a></p>
                        </div>
                        <div class="item">
                           <p class="text1">Chất liệu mặt</p>
                           <p class="text2">Kính sapphire</p>
                        </div>
                        <div class="item">
                           <p class="text1">Năng lượng sử dụng</p>
                           <p class="text2">Quartz/Pin </p>
                        </div>
                        <div class="item">
                           <p class="text1">Size dây</p>
                           <p class="text2">12mm</p>
                        </div>
                        <div class="item">
                           <p class="text1">Chất liệu dây</p>
                           <p class="text2">Hợp kim mạ PVD</p>
                        </div>
                        <div class="item">
                           <p class="text1">Chất liệu vỏ</p>
                           <p class="text2">Hợp kim mạ PVD , đính đá swarovsky</p>
                        </div>
                        <div class="item">
                           <p class="text1">Kiểu dáng</p>
                           <p class="text2">Nữ</p>
                        </div>
                        <div class="item">
                           <p class="text1">Xuất xứ</p>
                           <p class="text2">China</p>
                        </div>
                        <div class="item">
                           <p class="text1">Chế độ bảo hành</p>
                           <p class="text2">Bảo hành quốc tế <b>10</b> năm</p>
                        </div>
                     </div>
                  </div>

                  <div class="box_policy">
                     <div class="fs14">
                        <img class="mr-1" src="/view/css/icon/box.png" height="17">
                        Sản phẩm Fullbox:
                     </div>
                     <div style="display: flex;padding-top: 5px;font-style: italic;">
                        <a class="name" href="javascript://"> <span>
                              Hộp đựng, thẻ bảo hành quốc tế, thẻ khách hàng thân thiết, khăn lau (đối với kính mắt)</span>
                        </a>
                     </div>
                     <div class="pt10 fs14">
                        <img class="mr-1" src="/view/css/icon/bh10.png" height="17">
                        <a class="name" href="/chinh-sach-chung/2/1.-Chinh-sach-bao-hanh.html">
                           Chế độ bảo hành 10 năm <span>(Xem chi tiết)</span>
                        </a>
                     </div>
                     <div class="pt10 fsfs1416">
                        <img class="mr-1" src="/view/css/icon/doi.png" height="17">
                        <a class="name" href="javascript://">
                           30 ngày đổi sản phẩm miễn phí.
                        </a>
                     </div>
                     <div class="pt10 fs14">
                        <img class="mr-1" src="/view/css/icon/ship.png" height="17">
                        <a class="name" href="javascript://">
                           Giao miễn phí, nhận hàng kiểm tra trước khi thanh toán
                        </a>
                     </div>
                     <div class="pt10 fs14">
                        <img class="mr-1" src="/view/css/icon/vat.png" height="17">
                        <a class="name" href="javascript://">
                           Chính hãng 100% - xuất hoá đơn VAT
                        </a>
                     </div>
                  </div>
               </div>
               <div class="splienquan">
                  <div class="item">
                     <div class="left">
                        <div class="wImage">
                           <a href="javascript://" class="image">
                              <img src="http://localhost:9000/uploads/2020/07/06/2020-07-06__2078177429-dong-ho-nhap-khau6.jpg" class="lazy">
                           </a>
                        </div>
                        <div class="info">
                           <a href="javascript://" class="name">
                              {{ product.product.pro_name }}
                           </a>
                           <p class="price">  {{ formatMoney(product.product.pro_price) }}đ </p>
                        </div>
                     </div>
                     <div class="lstBtn">
                        <a href="http://localhost:9000/add/11" class="buttn muangay">Mua ngay</a>
                     </div>
                  </div>
               </div>
            </div>
            <div class="detailRight">
               <div class="dntablet">
                  <div class="thongsokythuat">
                     <div class="titleR">Thông số kỹ thuật</div>
                     <div class="group">
                        <div class="item">
                           <p class="text1">Đường kính mặt</p>
                           <p class="text2"><a href="javarscript://">27mm</a></p>
                        </div>
                        <div class="item">
                           <p class="text1">Chống nước</p>
                           <p class="text2"><a href="javarscript://">3ATM</a></p>
                        </div>
                        <div class="item">
                           <p class="text1">Chất liệu mặt</p>
                           <p class="text2">Kính sapphire</p>
                        </div>
                        <div class="item">
                           <p class="text1">Năng lượng sử dụng</p>
                           <p class="text2">Quartz/Pin </p>
                        </div>
                        <div class="item">
                           <p class="text1">Size dây</p>
                           <p class="text2">12mm</p>
                        </div>
                        <div class="item">
                           <p class="text1">Chất liệu dây</p>
                           <p class="text2">Hợp kim mạ PVD</p>
                        </div>
                        <div class="item">
                           <p class="text1">Chất liệu vỏ</p>
                           <p class="text2">Hợp kim mạ PVD , đính đá swarovsky</p>
                        </div>
                        <div class="item">
                           <p class="text1">Kiểu dáng</p>
                           <p class="text2">Nữ</p>
                        </div>
                        <div class="item">
                           <p class="text1">Xuất xứ</p>
                           <p class="text2">China</p>
                        </div>
                        <div class="item">
                           <p class="text1">Chế độ bảo hành</p>
                           <p class="text2">Bảo hành quốc tế <b>10</b> năm</p>
                        </div>
                     </div>
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
import { getDetailProduct } from "@/plugins/api/product";
import { addCart } from "@/plugins/api/cart";
export default {
  name: "ProductScreen",
   data() {
    return {
      product: null,
      slug : this.$route.params.slug
    }
  },
  components: {
    HeaderLayout,
    FooterLayout,
  },
  async created() {
    const detailProduct = await getDetailProduct(this.slug);
    this.product = detailProduct;
  },
   methods: {
      formatMoney(money){
         var formatter = new Intl.NumberFormat('en-US');
         return formatter.format(money);
      },
      async addCard(product){
         try {
            const res = await addCart(product.id);
            this.$toast.success('Success');
         } catch (error) {
            this.$toast.error(error.message);
         }
      }
   }
};
</script>

