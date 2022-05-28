<template>
<div  v-for="product in products" :key="product.id">
  <div class="item">
    <div class="wImage">
      <span @click="goToDetailProduct(product.pro_slug)" class="image">
        <img :src="product.pro_avatar" class="lazy"/>
      </span>  
    </div>
    <div class="info">
      <p>40mm | 5ATM | Sapphire</p>        
      <span @click="goToDetailProduct(product.pro_slug)" class="name">{{product.pro_name}}</span>
      <div style="display:flex">
        <img style="width:15.96px;height:15.96px" src="//laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"> 
        <img style="width:15.96px;height:15.96px" src="//laz-img-cdn.alicdn.com/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"> 
      </div>
      <div class="price">
        <p class="new">{{product.pro_price}} đ</p>
      </div>
      <div class="count">
        <div class="bg" style="width: 25%"></div>
        <span class="text">Còn lại {{product.pro_amount}}</span>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    name: "ListProduct", 
    props: ['products'],
    methods: {
      goToDetailProduct(slug){
         this.$router.push({
          name: "ProductScreen",
          params: {
            slug: `${slug}`,
          },
        })
      }
    }
  }
</script>
