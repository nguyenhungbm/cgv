<template>
  <HeaderLayout />  
   
  <FooterLayout />
</template>

<script>
import HeaderLayout from "@/containers/Layout/HeaderLayout.vue";
import FooterLayout from "@/containers/Layout/FooterLayout.vue";
import { getListDashboard } from "@/plugins/api/category";
export default {
  name: "HomeScreen",
  components: {
    HeaderLayout,
    FooterLayout,
  },
  data() {
    return {
      list : []
    }
  },
  async created() {
    const list = await getListDashboard();
    this.list = list;
    console.log(list);
  },
};
</script>

