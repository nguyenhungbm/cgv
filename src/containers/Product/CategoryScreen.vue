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
                <li @click="filterPrice(5)">
                  <a href="javascript:; ">Từ cao đến thấp</a>
                </li>
                <li @click="filterPrice(6)">
                  <a href="javascript:; ">Từ thấp đến cao</a>
                </li>
              </ul>
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
import { filter, orderBy} from "lodash";
export default {
  name: "CategoryScreen",
   data() {
    return {
      products: [],
      productFilter: [],
      slug : this.$route.query.slug
    }
  },
  components: {
    HeaderLayout,
    FooterLayout,
    ItemProduct
  },
  watch: {
    '$route.params': 'functionToRunWhenParamsChange',
  },
  async created() {
    const response = await getListProductInCategory(this.slug);
    this.products = response.products.data;
    this.productFilter = this.products;
},
  methods: {
    updateHandler(number){
      alert(number);
    },
    filterPrice(value){
      if (value == 0) {
        this.productFilter = filter(this.products, function(pro) { return pro.pro_price < 2000000; });
      }
      if (value == 1) {
        this.productFilter = filter(this.products, function(pro) { return pro.pro_price > 2000000 && pro.pro_price < 5000000 });
      }
      if (value == 2) {
        this.productFilter = filter(this.products, function(pro) { return pro.pro_price > 5000000 && pro.pro_price < 10000000 });
      }
      if (value == 3) {
        this.productFilter = filter(this.products, function(pro) { return pro.pro_price > 10000000 && pro.pro_price < 50000000 });
      }
      if (value == 4) {
        this.productFilter = filter(this.products, function(pro) { return pro.pro_price > 50000000 });
      }
      if (value == 5) {
        this.productFilter = orderBy(this.productFilter, ['pro_price'], ['asc']);
      }
      if (value == 6) {
        this.productFilter = orderBy(this.productFilter, ['pro_price'], ['desc']);
      }
      // if (value == 0) {
      //   this.productFilter = this.products.filter((pro) => pro.pro_price < 2000000 );
      // } else if (value == 1) {
      //   this.productFilter = this.products.filter((pro) => pro.pro_price > 2000000 && pro.pro_price < 5000000 );
      // } else if (value == 2) {
      //   this.productFilter = this.products.filter((pro) => pro.pro_price > 5000000 && pro.pro_price < 10000000 );
      // } else if (value == 3) {
      //   this.productFilter = this.products.filter((pro) => pro.pro_price > 10000000 && pro.pro_price < 50000000 );
      // } else if (value == 4) {
      //   this.productFilter = this.products.filter((pro) => pro.pro_price > 50000000 );
      // }
      return true;
    },
  }
};
</script>

