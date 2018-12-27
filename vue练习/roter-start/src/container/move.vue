<template>
        <section>
            <div class="title">
                <router-link to="/hot">正在热映</router-link>
                <router-link to="/coming">即将上映</router-link>
            </div>
            <router-view></router-view>
        </section>
    
</template>

<script>
export default {
    name:'move'
}
</script>

<style>

</style>
