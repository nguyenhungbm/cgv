<template>
  <div class="item">
    <div class="wImage">
      <a href="/"  class="image">
        <img src="http://localhost:9000/uploads/2020/07/06/2020-07-06__202451360-dong-ho-nhap-khau2.jpg" alt="Jacques Lemans" class="lazy" />
      </a> 
    </div>
    <div class="info">
      <p>34mm | 10ATM</p>
      <a href="/"  class="name">
        <h3>{{ $product->pro_name}}</h3>
      </a>
      <div style="display:flex">
        <img style="width:15.96px;height:15.96px" src="//laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"> 
        <img style="width:15.96px;height:15.96px" src="//laz-img-cdn.alicdn.com/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"> 
      </div>
      <div class="price">
        <p class="new">{{ number_format($product->pro_price - $product->pro_sale,0,',','.') }}đ</p>
        <p class="old">{{ number_format($product->pro_price,0,',','.') }}đ</p>
      </div>
      <div class="count">
        <div class="bg" style="width: {{ rand(10,70)}}%"></div>
        <span class="text">Còn lại {{$product->pro_amount}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductItem", 
   data() {
    return {
    }
  },
  }
 
</script>
