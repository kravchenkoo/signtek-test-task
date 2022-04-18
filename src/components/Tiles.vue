<template>
    <ul class="tiles">
        <li 
            v-for="tile in tiles" 
            :key="tile.id"
            :class="tile.aditionalClases"
            class="tiles__tile"
            :style="{ backgroundColor: tile.backgroundColor }"
        >
            {{ tile.body || "placeholder" }}
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        tiles: {
            type: Array,
            default: () => [],
        }
    }
}
</script>
<style lang="scss" scoped>
.tiles {
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    &__tile {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 105px 25px;
        list-style: none;
        text-align: center;
        text-transform: uppercase;
        &--big-vertical {
            grid-column-start: 2;
            grid-column-end: 3;
            grid-row-start: 1;
            grid-row-end: 3;
        }
        &--big-horizontal {
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 3;
            grid-row-end: 4;
        }
    }
    @media (max-width: 600px) {
        &__tile {
            font-size: 3.5vw;
        }
    }
    @media (min-width: 1200px) {
        grid-template-rows: 1fr 1fr 1fr 1fr;
        &__tile {
            padding: 80px 20px;
            font-size: 2.4rem;
        }
    }

}
</style>