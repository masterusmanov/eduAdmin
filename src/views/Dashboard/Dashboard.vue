<template>
    <div class="h-screen flex ">
        <Sidebar />
        <div class="w-full mx-5">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
    import Sidebar from '../../components/Sidebar/Sidebar.vue'
</script>

<style lang="scss" scoped>

</style>