<template>
  <div class="w-[300px] bg-[#081028] xl:h-screen grid justify-between">
    <div class="flex items-center justify-between px-6 py-[50px] gap-3">
      <img src="../../assets/LOGO.png" alt="logo" class="w-[60px]" />
      <h1 class="font-[700] text-[24px] text-[#7EBA34] 3xl:text-[16px]">Uchkurgan IT School</h1>
    </div>
    <div class="ml-6 grid justify-between">
      <ul class="space-y-2 font-medium mt-[16px]">
        <li v-for="link in navlink" :key="link.id">
          <router-link
            :to="link.link"
            class="px-6 py-4 flex items-center rounded-l-lg text-[16px] text-white hover:text-[#FFFFFF] hover:bg-[#7EBA34]"
          >
            <i :class="link.icon" class="text-[20px]"></i>
            <span class="ml-3">{{ link.title }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div>
    </div>
    <div class="grid ">
      <div class="px-6">
        <img src="../../assets/images/Sidebar/123.png" alt="account" class="w-[35px]">
        <div class="flex items-center justify-between gap-2 mt-[15px]">
            <h1 class="text-white text-[16px] font-bold">John DOE</h1>
          <div class="flex gap-1">
            <i class="far fa-bell text-white text-[20px] font-bold ml-5"></i>
            <div class="bg-red-600 w-[8px] h-[8px]  rounded-full"></div>
        </div>
        </div>
      </div>
     <div @click="logout" class="text-red-500 font-[700] text-[18px] px-10 py-[10px] flex items-center gap-6 hover:bg-red-500 hover:text-white cursor-pointer">
      <i class="bx bx-log-out float-end text-[18px]"></i>
      <h1>Chiqish</h1>
     </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import { NavLinks } from "../../constatnts/NavLinks";
  import { useRouter } from "vue-router";

  const navlink = ref(NavLinks);
  const router = useRouter();

  const logout = () => {
    localStorage.clear();
    router.push({ name: "login" });
  };

</script>

<style lang="scss" scoped></style>
