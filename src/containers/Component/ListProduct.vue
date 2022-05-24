<template>
<div  v-for="product in products" :key="product.id">
  <div class="item">
    <div class="wImage">
      <router-link :to="{name : 'DetailScreen', params : { id: product.id } }" class="image">
        <img :src="product.pro_avatar" class="lazy"/>
      </router-link>  
    </div>
    <div class="info">
      <p>40mm | 5ATM | Sapphire</p>        
      <router-link :to="{name : 'DetailScreen', params : { id: product.id } }" class="name">{{product.pro_name}}</router-link>
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
  }
</script>
