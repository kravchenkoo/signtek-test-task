<template>
    <div>
        {{ $route.params.id }}, thanks for geeting in touch with us, we will contact you soon!
        <br>
        <router-link to="/">Main</router-link>
    </div>
</template>
<script>
export default {
    methods: {
        myData() {
            console.log(this.$route)
        }
    },
    mounted() {
        this.myData();
    }
}
</script>
<style>
    
</style>