<template>
    <div class="w-[300px] bg-[#081028] h-screen">
      <div class="flex items-center justify-between p-6 gap-3">
        <img src="../../assets/LOGO.png" alt="logo" class="w-[80px] ">
        <h1 class="text-white font-[700] text-[30px]">Uchkurgan IT School</h1>
      </div>  
        <div class="ml-6">
            <ul class="space-y-2 font-medium mt-[16px]">
                <li v-for="link in navlink" :key="link.id">
                  <router-link
                    :to="link.link"
                    class="flex items-center p-2 rounded-lg text-[18px] text-white hover:text-[#FFFFFF] hover:bg-[#7EBA34]"
                  >
                  <i :class="link.icon"></i>
                    <span class="ml-3">{{ link.title }}</span>
                  </router-link>
                </li>
              </ul>
      
        </div>
    </div>
    
</template>

<script setup>
    import { ref, onMounted } from "vue";
    // import { useRouter } from "vue-router";
    import { NavLinks } from '../../constatnts/NavLinks';
    const navlink = ref(NavLinks);
</script>

<style lang="scss" scoped>

</style>