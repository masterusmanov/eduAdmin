<template>
    <div class="h-screen px-5 py-5 overflow-y-auto">
        <h1 class="font-[700] text-[24px]">Dashboard</h1>
        <div class="my-10 flex justify-between gap-4">
            <div v-for="statistik in Statistika" :key="statistik.id" class="w-1/4 border p-5 rounded-xl bg-gray-100">
                <i :class="statistik.icon" class="text-[28px] text-[#77BF44] rounded-full"></i>
                <h1 class="text-[18px] font-[700] my-[10px]">{{statistik.title}}</h1>
                <h1 class="text-[22px] font-[700] text-[#77BF44]">{{statistik.num}}</h1>
            </div>
        </div>
        <div class="flex items-center gap-6">
            <div class="w-1/2">
                <MainTable/>
            </div>
            <ChartComponent class=" mx-auto"/>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from "vue";
    import { Statistika } from "../../constatnts/Statistika";
    import ChartComponent from "../../components/Charts/ChartComponent.vue";
    import MainTable from '../../components/Tables/MainTable.vue';

    const statistika = ref(Statistika);
</script>

<style lang="scss" scoped>

</style>