<template>
  <div class="item">
    <div class="wImage">
      <a href="" class="image">
        <img data-src="http://localhost:9000/uploads/2020/07/06/2020-07-06__202451360-dong-ho-nhap-khau2.jpg" class="lazy" src="/view/lazy.jpg"/>
      </a>  
    </div>
    <div class="info">
      <p>40mm | 5ATM | Sapphire</p>        
      <a href="" class="name">pro_name</a>
      <div style="display:flex">
        <img style="width:15.96px;height:15.96px" src="//laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"> 
        <img style="width:15.96px;height:15.96px" src="//laz-img-cdn.alicdn.com/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"> 
      </div>
      <div class="price">
        <p class="new">pro_price đ</p>
      </div>
      <div class="count">
        <div class="bg" style="width: {{ rand(10,100)}}%"></div>
        <span class="text">Còn lại 12</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "ListProduct", 
  }
</script>
