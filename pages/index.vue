<template>
    <div class="graph-paper min-h-screen overflow-x-hidden bg-gray-950">
        <section id="Home">
            <UContainer
                class="group/bento py-32"
                :ui="{ constrained: 'max-w-[96rem]' }"
            >
                <!-- Bento Grid -->
                <div
                    class="animate__animated animate__fadeIn relative z-10 w-full xl:h-[900px]"
                >
                    <!-- Actual Grid -->
                    <div
                        class="bento-grid grid h-full w-full place-content-center overflow-hidden rounded-lg bg-gray-900 p-4"
                        :style="{
                            transform: `translate(${5 - cornerOffsetX * 10}px, ${5 - cornerOffsetY * 10}px)`,
                        }"
                    >
                        <!-- 1 -->
                        <div
                            class="animate__animated animate__backInDown b1 bento-card center-card group z-10 flex flex-col items-center justify-between overflow-hidden"
                            style="animation-delay: 0.8s"
                        >
                            <CenterSection />
                        </div>
                        <!-- 2 -->
                        <div
                            class="animate__animated animate__fadeInLeft b2 bento-card"
                            style="animation-delay: 1.2s"
                        >
                            <AboutSection />
                        </div>
                        <!-- 3 -->
                        <div
                            class="animate__animated animate__fadeInRight b3 bento-card"
                            style="animation-delay: 1.3s"
                        >
                            <OtherExperiences />
                        </div>
                        <!-- 4 -->
                        <div
                            class="animate__animated animate__fadeInDown b4 bento-card"
                            style="animation-delay: 1.4s"
                        >
                            <EduSection />
                        </div>
                        <!-- 5 -->
                        <div
                            class="animate__animated animate__fadeInUp b5 bento-card"
                            style="animation-delay: 1.5s"
                        >
                            <ContactSection />
                        </div>
                        <!-- 6 -->
                        <div
                            class="animate__animated animate__fadeInRight b6 bento-card"
                            style="animation-delay: 1.6s"
                        >
                            <NuxtSection />
                        </div>
                    </div>
                    <!-- Details -->
                    <div
                        class="absolute -left-2 -top-2 -z-10 size-32 rounded-tl-lg bg-white/10"
                        :style="{
                            transform: `translate(${10 - cornerOffsetX * 20}px, ${10 - cornerOffsetY * 20}px)`,
                        }"
                    ></div>
                    <div
                        class="absolute -right-2 -top-2 -z-10 size-32 rounded-tr-lg bg-white/10"
                        :style="{
                            transform: `translate(${10 - cornerOffsetX * 20}px, ${10 - cornerOffsetY * 20}px)`,
                        }"
                    ></div>
                </div>

                <!-- Adornments -->
                <div
                    class="flex select-none items-center justify-between"
                    :style="{
                        transform: `translate(${5 - cornerOffsetX * 10}px, ${5 - cornerOffsetY * 10}px)`,
                    }"
                >
                    <span
                        class="animate__animated animate__fadeInLeft text-xs text-gray-600"
                        style="animation-delay: 1s"
                    >
                        GRID :
                        <ClientOnly>
                            <b class="text-gray-300">
                                {{
                                    width > 1280
                                        ? "BENTO ARRANGEMENT"
                                        : "LIST ARRANGEMENT"
                                }}
                            </b>
                        </ClientOnly>
                    </span>
                    <div
                        class="mx-4 flex h-1 grow items-center justify-center rounded bg-white text-xs font-bold text-transparent transition-all sm:h-0.5 sm:w-32 sm:grow-0 sm:group-hover/bento:h-1 sm:group-hover/bento:grow sm:group-hover/bento:bg-gray-800 sm:group-hover/bento:text-white"
                    >
                        IDK WHAT TO PUT HERE
                    </div>
                    <span
                        class="animate__animated animate__fadeInRight animate__delay-1s flex w-40 justify-between gap-2 text-xs text-gray-600"
                        style="animation-delay: 1.1s"
                    >
                        POSITION :
                        <div class="font-bold text-gray-300">
                            {{ x }}.0, {{ y }}.0
                        </div>
                    </span>
                </div>
            </UContainer>
        </section>
    </div>
</template>

<script lang="ts" setup>
const { x, y } = useMouse();
const { width, height } = useWindowSize();
const cornerOffsetX = computed(() =>
    width.value > 1280 ? x.value / width.value : 0.5,
);
const cornerOffsetY = computed(() =>
    width.value > 1280 ? y.value / height.value : 0.5,
);
</script>

<style scoped>
.bento-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(21, 64px);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
}

.b1 {
    grid-area: 1 / 1 / 4 / 4;
}
.b2 {
    grid-area: 4 / 1 / 10 / 4;
}
.b4 {
    grid-area: 10 / 1 / 13 / 4;
}
.b6 {
    grid-area: 13 / 1 / 16 / 4;
}
.b5 {
    grid-area: 16 / 1 / 19 / 4;
}
.b3 {
    grid-area: 19 / 1 / 22 / 4;
}

.bento-card {
    @apply rounded-lg bg-gray-800 shadow transition;
}

@media screen and (min-width: 1280px) {
    .bento-grid {
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        grid-template-rows: repeat(9, 1fr);
        grid-column-gap: 16px;
        grid-row-gap: 16px;
    }

    .b1 {
        grid-area: 4 / 4 / 7 / 7;
    }
    .b2 {
        grid-area: 1 / 1 / 7 / 4;
    }
    .b3 {
        grid-area: 1 / 7 / 4 / 10;
    }
    .b4 {
        grid-area: 1 / 4 / 4 / 7;
    }
    .b5 {
        grid-area: 7 / 1 / 10 / 7;
    }
    .b6 {
        grid-area: 4 / 7 / 10 / 10;
    }
}
</style>
