<template>
  <div class="w-full px-0 lg:p-0">
    <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="text-md text-white font-bold uppercase bg-gray-500">
            <tr class="">
              <th scope="col" class="px-4 py-3 text-left">
                Ismi va Familiyasi
              </th>
              <th scope="col" class="px-4 py-3 text-left">Telefon raqami</th>
              <th scope="col" class="px-4 py-3 text-left">Yo'nalishi</th>
              <th scope="col" class="px-4 py-3 text-left">Sanasi</th>
            </tr>
          </thead>
          <tbody class="">
            <tr v-for="el in paginatedData" :key="el.id" class="border-b dark:border-gray-700">
              <td class="px-4 py-3 flex items-center gap-4">
                <p>{{el.full_name}}</p>
              </td>
              <td class="px-4 py-3">{{el.phone}}</td>
              <td class="px-4 py-3">Dasturlash</td>
              <td class="px-4 py-3">{{el.createdAt.slice(0, 10)}} - {{el.createdAt.slice(11, 19)}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex justify-between items-center px-5 py-2">
        <button @click="prevPage" :disabled="currentPage === 1" class="bg-[#77BF44] rounded-lg text-white font-[700] px-2 py-1">Orqaga</button>
        <button @click="nextPage" :disabled="currentPage === totalPages" class="bg-[#77BF44] rounded-lg text-white font-[700] px-2 py-1">Keyingisi</button>
    </div>
    <p class="float-right px-5">{{ currentPage }} / {{ totalPages }} Sahifa</p>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted } from 'vue';
  import axios from 'axios';

  const users = ref([]);
  const currentPage = ref(1);
  const itemsPerPage = 10;
  const error = ref(null);

  onMounted(async () => {
    try {
      const response = await axios.get('http://localhost:1987/api/web-name');
      users.value = response.data;
      console.log(users.value);
      localStorage.setItem("length", users.value.length)
    } catch (err) {
      error.value = 'Failed to fetch users';
    }
  });
  
  const totalPages = computed(() => {
    return Math.ceil(users.value.length / itemsPerPage);
  });

  const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return users.value.slice(start, end);
  });

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value -= 1;
    }
  };

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value += 1;
    }
  };
</script>

<style lang="scss" scoped></style>
