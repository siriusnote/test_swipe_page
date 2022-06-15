<template>
    <swiper
        ref='mySwiper'
        class="swiper"
        :initialSlide="$store.state.mode"
        :slides-per-view="1"
        :loop="true"
        @slideChange="onSlideChange"
    >
        <swiper-slide
            v-for="(mode, i) in modes"
            :key="i" 
        >
            <component v-bind:is="mode.content"/>
        </swiper-slide>
    </swiper>

</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    // @ts-ignore
    import { mapMutations } from 'vuex'

    import type SwiperClass from 'swiper'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import 'swiper/css'
    import 'swiper/css/pagination'
    import 'swiper/css/navigation'

    import ModeOne from '@/views/modes/ModeOne.vue'
    import ModeTwo from '@/views/modes/ModeTwo.vue'
    import ModeThree from '@/views/modes/ModeThree.vue'
    
    export default defineComponent({
        name: 'operation',
        components: {  Swiper, SwiperSlide, ModeOne, ModeTwo, ModeThree },
        data: () => ({
            swiperRef: null,
            lock: false,
            modes: [
                {
                    title: 'Daily Mode',
                    content: "ModeOne"
                },
                {
                    title: 'Energy Mode',
                    content: "ModeTwo"
                },
                {
                    title: 'Disaster Mode',
                    content: "ModeThree"
                }
            ]
        }),
        computed: {
            allowTouchMove() {
                console.log({lock: this.lock})
                return !this.lock
            }
        },
        methods: {
            ...mapMutations([
                'updateMode'
            ]),
            onSlideChange (swiper:SwiperClass) {
                swiper.disable()
                let currentMode = swiper.realIndex
                this.updateMode(currentMode)
                setTimeout(() => {
                    swiper.enable()
                },2000)

            }
        }
    })
</script>

<style scoped>
    html {font: 12px Tahoma, Geneva, sans-serif;}
    * {margin: 0;padding: 0;color: #fff;}
    .swiper {height:calc(100vh - 59px)}
</style>