<template>
    <div class="grid gap-6 items-center w-[700px]">
      <h1 class="text-center font-[700] text-[24px]">{{new Date().getFullYear()}}-yil statistikasi</h1>
      <canvas id="myChart"></canvas>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue';
  import Chart from 'chart.js/auto';

  const labels = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentyabr', "Oktyabr", "Noyabr", 'Dekabr'];
  const data = {
    labels: labels,
    datasets: [{
      label: 'Offline kurs o`quvchilari',
      backgroundColor: '#7EBA34',
      borderColor: '#7EBA34',
      data: [0, 10, 20, 15, 40, 30, 60, 70, 80, 90, 100],
    },
    {
      label: 'Online kurs Foydalanuvchilari',
      backgroundColor: 'rgb(255, 99, 100)',
      borderColor: 'rgb(255, 99, 100)',
      data: [30, 15, 25, 20, 27, 38, 57, 47, 70, 37, 90, 82],
    },
    {
      label: 'Online kurs Foydalanuvchilari',
      backgroundColor: '#081028',
      borderColor: '#081028',
      data: [20, 45, 75, 40, 47, 68, 27, 87, 50, 67, 45, 42],
    }
  ]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };  
  onMounted(()=>{
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );
  });
  </script>
  
  <style scoped>
 
  </style>
  