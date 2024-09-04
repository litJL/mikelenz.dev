<template>
    <div class="graph-paper min-h-screen overflow-x-hidden bg-gray-950">
        <section id="Home">
            <UContainer
                class="group/bento pt-32"
                :ui="{ constrained: 'max-w-[96rem]' }"
            >
                <!-- Bento Grid -->
                <div
                    class="animate__animated animate__fadeIn relative z-10 w-full xl:h-[800px]"
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
                            class="animate__animated animate__fadeIn animate__delay-1s b1 bento-card center-card group z-10 flex flex-col items-center justify-between overflow-hidden xl:hover:scale-150 xl:hover:shadow-2xl"
                        >
                            <!-- Top -->
                            <div
                                class="flex h-8 w-full items-center justify-end opacity-0 transition group-hover:opacity-100"
                            ></div>
                            <!-- Center -->
                            <div class="flex items-center justify-center">
                                <div
                                    class="flex flex-col items-center justify-center border-0 border-gray-500 transition-all group-hover:border-r-2 group-hover:pr-4"
                                >
                                    <span class="text-4xl font-bold">
                                        MIKE LENZ
                                    </span>
                                    <span class="font-light text-gray-400">
                                        WEB DEVELOPER
                                    </span>
                                </div>
                                <div
                                    class="w-0 overflow-hidden opacity-0 transition-all group-hover:w-auto group-hover:pl-4 group-hover:opacity-100"
                                >
                                    <ul>
                                        <li>
                                            <span class="text-gray-400">
                                                Age:
                                            </span>
                                            <b>23</b>
                                        </li>
                                        <li>
                                            <span class="text-gray-400">
                                                Nationality:
                                            </span>
                                            <b>German</b>
                                        </li>
                                        <li>
                                            <span class="text-gray-400">
                                                Framework:
                                            </span>
                                            <b>Vue</b>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- Bottom -->
                            <div
                                class="flex h-8 w-full justify-end bg-gradient-to-r from-transparent to-white opacity-0 transition-opacity group-hover:opacity-100"
                            >
                                <UButton
                                    label="Contact Me! &rarr;"
                                    to="#Contact"
                                    variant="link"
                                    size="xs"
                                    color="white"
                                    class="text-black"
                                />
                            </div>
                        </div>
                        <!-- 2 -->
                        <div
                            class="animate__animated animate__fadeInLeft b2 bento-card"
                            style="animation-delay: 1.2s"
                        ></div>
                        <!-- 3 -->
                        <div
                            class="animate__animated animate__fadeInRight b3 bento-card"
                            style="animation-delay: 1.3s"
                        ></div>
                        <!-- 4 -->
                        <div
                            class="animate__animated animate__fadeInDown b4 bento-card group relative flex flex-col overflow-hidden"
                            style="animation-delay: 1.4s"
                        >
                            <!-- Card BG -->
                            <div
                                class="absolute left-0 top-0 flex h-full w-full flex-col justify-end"
                            >
                                <div
                                    class="w-full rounded-lg bg-black transition-all group-hover:grow"
                                ></div>
                            </div>
                            <UIcon
                                name="i-heroicons-academic-cap-solid"
                                class="absolute left-1/2 size-16 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all group-hover:size-96 group-hover:opacity-5"
                            />
                            <div
                                class="z-10 flex h-full w-full flex-col justify-between p-4 opacity-0 transition group-hover:opacity-100"
                            >
                                <div>
                                    <h2
                                        class="flex items-baseline text-4xl font-bold"
                                    >
                                        EDU & EXP
                                        <div
                                            class="h-1 grow rounded bg-gradient-to-r from-transparent to-white"
                                        ></div>
                                    </h2>
                                    <p
                                        class="mt-4 max-w-md text-lg text-gray-300"
                                    >
                                        I began coding in 2018 as part of my computer science education, which is nearing completion as I’m now in the final semester of my bachelor's degree.
                                    </p>
                                </div>
                                <!-- stats -->
                                <div
                                    class="flex justify-end text-sm text-gray-500"
                                >
                                    <span>
                                        Coding Experience:
                                        <b>6 years</b>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <!-- 5 -->
                        <div
                            class="animate__animated animate__fadeInUp b5 bento-card"
                            style="animation-delay: 1.5s"
                        ></div>
                        <!-- 6 -->
                        <div
                            class="animate__animated animate__fadeInRight b6 bento-card group relative flex flex-col overflow-hidden"
                            style="animation-delay: 1.6s"
                        >
                            <!-- Card BG -->
                            <div
                                class="absolute left-0 top-0 flex h-full w-full flex-col justify-end"
                            >
                                <div
                                    class="w-full rounded-lg bg-gradient-to-t from-[#3db684] to-[#00DC82] transition-all group-hover:grow"
                                ></div>
                            </div>
                            <img
                                :src="'/nuxt.svg'"
                                alt="nuxt logo"
                                class="absolute left-1/2 top-1/2 w-16 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all group-hover:w-96 group-hover:opacity-20"
                            />
                            <div
                                class="z-10 flex h-full w-full flex-col justify-between p-4 opacity-0 transition group-hover:opacity-100"
                            >
                                <div>
                                    <h2
                                        class="flex items-baseline text-6xl font-bold"
                                    >
                                        NUXT
                                        <div
                                            class="h-1 grow rounded bg-gradient-to-r from-transparent to-white"
                                        ></div>
                                    </h2>
                                    <p
                                        class="mt-4 max-w-md text-lg text-emerald-100"
                                    >
                                        Since early 2023 I have been using Nuxt
                                        for almost every project of mine. It has
                                        quickly become my main framework because
                                        of the impeccable DX and its approach to
                                        a complete web solution.
                                    </p>
                                </div>
                                <!-- stats -->
                                <div
                                    class="flex justify-end text-sm text-emerald-100"
                                >
                                    <span>
                                        Experience:
                                        <b>almost 2 years</b>
                                    </span>
                                </div>
                                
                            </div>
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
        <section id="About">
            <UContainer>
                <UDivider
                    icon="i-heroicons-chevron-down animate__animated animate__fadeInDown animate__slower animate__delay-1s"
                    class="animate__animated animate__fadeInDown animate__delay-1s my-16"
                />
            </UContainer>
        </section>
        <section id="Projects"></section>
        <section id="Contact"></section>
    </div>
</template>

<script lang="ts" setup>
const { x, y } = useMouse();
const { width, height } = useWindowSize();
const cornerOffsetX = computed(() =>
    width.value > 1024 ? x.value / width.value : 0,
);
const cornerOffsetY = computed(() =>
    width.value > 1024 ? y.value / height.value : 0,
);
</script>

<style scoped>
.bento-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(24, 64px);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
}

.b1 {
    grid-area: 1 / 1 / 4 / 4;
}
.b2 {
    grid-area: 4 / 1 / 10 / 4;
}
.b3 {
    grid-area: 10 / 1 / 13 / 4;
}
.b4 {
    grid-area: 13 / 1 / 16 / 4;
}
.b5 {
    grid-area: 16 / 1 / 22 / 4;
}
.b6 {
    grid-area: 22 / 1 / 25 / 4;
}

.bento-card {
    @apply rounded-lg bg-gray-800 shadow transition;
}

.center-card {
    @apply hover:bg-gray-700;
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
