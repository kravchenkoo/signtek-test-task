<template>
    <div class="tiles__wrapper">
        <tiles v-if="!isPostsLoading" :tiles="content.tiles"></tiles>
        <div v-if="!isPostsLoading" class="solutions"><h1>LÖSUNGEN</h1><p>{{ solutions }}</p></div>
        <contact v-if="!isPostsLoading"
        />
        <transition name="loader">
            <loader v-if="isPostsLoading"/>
        </transition>
    </div>
</template>
<script>
import client from '@/contenful/contentful';
import Tiles from '@/components/Tiles';
import Contact from '@/components/Contact';
import Loader from '@/components/Loader.vue'
export default {
    components: {
        Tiles, Contact, Loader
    },
    data() {
        return {
            content: {},
            solutions: '',
            isPostsLoading: false,
        }
    },
    methods: {
        async fetchPosts() {
            try {
                this.isPostsLoading = true;
                const response = await client.getEntry('64Whtc9ipft3qU46aWnLzQ').then(function (entry) {
                    return entry.fields;
                });
                this.solutions = response.solutions.content[0].content[0].value;
                this.content = response;
            } catch (e) {
                alert(e)
            } finally {
                this.isPostsLoading = false
            }
        },
    },
    computed: {

    },
    watch: {

    },
    mounted() {
        this.fetchPosts();
    },
    
}
</script>
<style lang="scss" scoped>
.tiles__wrapper {
    display: grid;
    grid-template-rows: 1fr 1fr;
    .solutions {
        padding: 232px 100px 0 150px;
        background-color:  #000930;
        color: #fff;
        h1 {
            margin: 0;
            font-size: 1.27em;
            font-weight: 500;
            color: #1F8CA5;
        }
        p {
            margin: 0;
            padding: 0;
            font-size: 4rem;
        }
        @media (max-width: 600px) {
            padding: 100px 30px 0 30px;
            p {
            margin: 0;
            padding: 0;
            font-size: 3rem;
        }
        }
    }
    @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        .solutions {
            padding: 210px 120px 0 80px;
            background-color:  #000930;
            color: #fff;
            h1 {
                font-size: 2.4rem;
            }
            p {
                font-size: 3.2rem;
                line-height: 38px;
            }
        }
    }
}
.loader-enter-active,
.loader-leave-active {
    transition: all .5s ease;
}

.loader-leave-to {
    opacity: 0;
}
.loader-move {
    transition: transform .5s ease;
}
</style>