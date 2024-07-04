<template>
    <div class="flex items-center">
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
      label: 'Offline kurs foydalanuvchilari',
      backgroundColor: '#7EBA34',
      borderColor: '#7EBA34',
      data: [0, 10, 5, 2, 20, 30, 45, 27, 60, 47, 80, 72],
    },
    {
      label: 'Online kurs Foydalanuvchilari',
      backgroundColor: 'rgb(255, 99, 100)',
      borderColor: 'rgb(255, 99, 100)',
      data: [30, 15, 25, 20, 27, 38, 57, 47, 70, 37, 90, 82],
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
  