<template>
  <div class="w-full px-0 lg:p-0">
    <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="text-md text-white font-bold uppercase bg-gray-500">
            <tr class="">
              <th scope="col" class="px-4 py-3 text-left">T/R</th>
              <th scope="col" class="px-4 py-3 text-left">
                  Ismi va Familiyasi
                </th>
                <th scope="col" class="px-4 py-3 text-left">Kurs kategoriyasi</th>
              <th scope="col" class="px-4 py-3 text-left">Kurs nomi</th>
              <th scope="col" class="px-4 py-3 text-left">Kur haqida</th>
              <th scope="col" class="px-4 py-3 text-left">Kurs narxi</th>
              <th scope="col" class="px-4 py-3 text-left">Kurs videosi</th>
            </tr>
          </thead>
          <tbody class="">
            <tr v-for="el in users" :key="el.id" class="border-b dark:border-gray-700">
              <td class="px-4 py-3">{{el.id}}</td>
              <td class="px-4 py-3 flex items-center gap-4">{{el.course_category}}</td>
              <td class="px-4 py-3">{{el.course_name}}</td>
              <td class="px-4 py-3">{{el.title}}</td>
              <td class="px-4 py-3">{{el.description}}</td>
              <td class="px-4 py-3">{{el.course_price}}</td>
              <td class="px-4 py-3"><video :src="el.course_video"></video></td>
              <td class="px-4 py-3">{{el.createdAt.slice(0, 10)}} - {{el.createdAt.slice(11, 19)}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted } from 'vue';
  import axios from 'axios';

  const users = ref([]);
  const error = ref(null);

  onMounted(async () => {
    try {
      const response = await axios.get('http://localhost:1987/api/course');
      users.value = response.data;
      console.log(users.value);
      localStorage.setItem("length", users.value.length)
    } catch (err) {
      error.value = 'Failed to fetch users';
    }
  });
</script>

<style lang="scss" scoped></style>
