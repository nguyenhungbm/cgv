<template>
  <HeaderLayout />  
   
  <FooterLayout />
</template>

<script>
import HeaderLayout from "./Layout/HeaderLayout.vue";
import FooterLayout from "./Layout/FooterLayout.vue";
export default {
  name: "HomeScreen",
  components: {
    HeaderLayout,
    FooterLayout,
  },
};
</script>

