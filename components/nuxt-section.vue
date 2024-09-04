<template>
    <div class="group relative flex h-full w-full flex-col overflow-hidden">
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
                <h2 class="flex items-baseline text-6xl font-bold">
                    NUXT
                    <div
                        class="h-1 grow rounded bg-gradient-to-r from-transparent to-white"
                    ></div>
                </h2>
                <div class="flex xl:flex-col gap-8 xl:gap-0">
                    <p class="mt-4 max-w-md text-lg text-emerald-100">
                        Since early 2023 I have been using Nuxt for almost every
                        project of mine. It has quickly become my main framework
                        because of the impeccable DX and its approach to a
                        complete web solution.
                    </p>
                    <p class="mt-4 max-w-md text-lg text-emerald-100">
                        This website is built with Nuxt, which is why it has its
                        own section.
                    </p>
                </div>
            </div>
            <!-- stats -->
            <div class="flex justify-end text-sm text-emerald-100">
                <span>
                    Experience:
                    <b>almost 2 years</b>
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style></style>
