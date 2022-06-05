<template>
  <HeaderLayout />
  <div id="product">
    <div class="wrp">
      <div id="filter">
        <div class="order">
          <div class="price">
            <span>Giá: </span>
            <div class="lstPrice">
              <ul>
                <li @click="filterPrice(0)">
                  <a href="javascript:;"> Dưới 2 triệu</a>
                </li>
                <li @click="filterPrice(1)">
                  <a href="javascript:; ">Từ 2 triệu - 5 triệu</a>
                </li>
                <li @click="filterPrice(2)">
                  <a href="javascript:; ">Từ 5 triệu - 10 triệu</a>
                </li>
                <li @click="filterPrice(3)">
                  <a href="javascript:; ">Từ 10 triệu - 25 triệu</a>
                </li>
                <li @click="filterPrice(4)">
                  <a href="javascript:; ">Trên 50 triệu</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="right">
            <div class="function odering">
              <span class="openSubOrder">Sắp xếp <i class="fa fa-caret-down"></i></span>
              <div class="sub filter">
                <div class="group">
                  <ul>
                    <li>
                      <label class="active">
                        <span class="check"><i class="fa fa-check"></i></span>
                        <span><a href="#" title="San pham noi bat">Sản phẩm nổi bật</a></span>
                      </label>
                    </li>
                    <li>
                      <label class="">
                        <span class="check"><i class="fa fa-check"></i></span>
                        <span><a href="http://localhost:9000/san-pham/kinh-mat-diamond-d-11?s=2" title="Thap den cao">Giá thấp đến cao</a></span>
                      </label>
                    </li>
                    <li>
                      <label class="">
                        <span class="check"><i class="fa fa-check"></i></span>
                        <span><a href="http://localhost:9000/san-pham/kinh-mat-diamond-d-11?s=1" title="Cao xuong thap">Giá cao xuống thấp</a></span>
                      </label>
                    </li>
                  </ul>
                </div>
                <a href="javascript://" class="closeSub"><i class="fa fa-times-circle"></i></a>
              </div>
            </div>
          </div>
        </div>
    </div> 
    <div class="product">
      <div class="group active">
        <ItemProduct :products="productFilter"/>
         <v-pagination
            v-model="page"
            :pages="10"
            :range-size="1"
            active-color="#DCEDFF"
            @update:modelValue="updateHandler"
          />
      </div>
    </div> 
  </div>
</div>
  <FooterLayout />
</template>

<script>
import HeaderLayout from "@/containers/Layout/HeaderLayout.vue";
import FooterLayout from "@/containers/Layout/FooterLayout.vue";
import ItemProduct from "@/containers/Component/ItemProduct.vue"
import { getListProductInCategory } from "@/plugins/api/category";
import { filter } from "lodash";
export default {
  name: "CategoryScreen",
   data() {
    return {
      products: [],
      productFilter: [],
      slug : this.$route.params.slug
    }
  },
  components: {
    HeaderLayout,
    FooterLayout,
    ItemProduct
  },
  async created() {
    const response = await getListProductInCategory(this.slug);
    this.products = response.products.data;
    this.productFilter = this.products;
    console.log("products : " + this.products);
},
  methods: {
    updateHandler(number){
      alert(number);
    },
    filterPrice(value){
      if (value == 0) {
        this.productFilter = this.products.filter((pro) => pro.pro_price < 2000000 );
      } else if (value == 1) {
        this.productFilter = this.products.filter((pro) => pro.pro_price > 2000000 && pro.pro_price < 5000000 );
      } else if (value == 2) {
        this.productFilter = this.products.filter((pro) => pro.pro_price > 5000000 && pro.pro_price < 10000000 );
      } else if (value == 3) {
        this.productFilter = this.products.filter((pro) => pro.pro_price > 10000000 && pro.pro_price < 50000000 );
      } else if (value == 4) {
        this.productFilter = this.products.filter((pro) => pro.pro_price > 50000000 );
      }
      console.log("products2 : " + this.productFilter);
      return true;
    },
  }
};
</script>

