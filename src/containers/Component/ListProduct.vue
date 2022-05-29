<template>
<carousel :items-to-show="5" :wrap-around="true">
<slide v-for="product in products" :key="product.id">   
  <div class="item">
    <div class="wImage">
      <WrapperImage @click="goToDetailProduct(product.pro_slug)">
        <img :src="product.pro_avatar" class="lazy"/>
      </WrapperImage>  
    </div>
    <div class="info">
      <p>40mm | 5ATM | Sapphire</p>        
      <span @click="goToDetailProduct(product.pro_slug)" class="name">{{product.pro_name}}</span>
      <div style="display:flex">
        <img style="width:15.96px;height:15.96px" src="//laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"> 
        <img style="width:15.96px;height:15.96px" src="//laz-img-cdn.alicdn.com/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"> 
      </div>
      <div class="price">
        <p class="new">{{ formatMoney(product.pro_price) }} đ</p>
      </div>
      <WrapperProgress :maxWidth="randomNumber() + '%'">
        <div class="process"></div>
        <span class="text">Còn lại {{product.pro_amount}} </span>
      </WrapperProgress>
    </div>
  </div>
</slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>

</template>
<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import * as Styled from "./styled";

export default {
    name: "ListProduct", 
    props: ['products'],
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
      WrapperImage: Styled.WrapperImage,
      WrapperProgress: Styled.WrapperProgress,
    },
    methods: {
      goToDetailProduct(slug){
         this.$router.push({
          name: "ProductScreen",
          params: {
            slug: `${slug}`,
          },
        })
      },
      randomNumber : function(){
        return Math.floor(Math.random() * (100 - 10 + 10)) + 10;
      },
      formatMoney(money){
        var formatter = new Intl.NumberFormat('en-US', {
        });
        return formatter.format(money);
      }
    }
  }
</script>
<style> 
.carousel__prev, .carousel__next{
  background-color: red !important;
}
</style>
