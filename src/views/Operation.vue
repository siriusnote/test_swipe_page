<template>
    <vueper-slides 
        :arrows="false"
        :bullets="false"
        :dragging-distance="70"
        :initSlide="$store.state.mode"
        fixed-height="100vh"
        @slide="onSlideUpdate('slide', $event)"
    >
        <vueper-slide 
            v-for="(mode, i) in modes"
            :key="i" 
            :content="mode.content"
        >
            <template #content>
                <component v-bind:is="mode.content"/>
            </template>
        </vueper-slide>
    </vueper-slides>

</template>

<script>
    import { mapMutations } from 'vuex'

    import { VueperSlides, VueperSlide } from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css'

    import ModeOne from '@/views/modes/ModeOne.vue'
    import ModeTwo from '@/views/modes/ModeTwo.vue'
    import ModeThree from '@/views/modes/ModeThree.vue'
    
    export default {
        components: { VueperSlides, VueperSlide, ModeOne, ModeTwo, ModeThree },
        data: () => ({
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
        methods: {
            ...mapMutations([
                'updateMode'
            ]),
            onSlideUpdate (eventName, params) {
                let currentMode = params.currentSlide.index + 1
                this.updateMode(currentMode)
            }
        }
    };
</script>

<style scoped>
    html {font: 12px Tahoma, Geneva, sans-serif;}
    * {margin: 0;padding: 0;color: #fff;}
</style>