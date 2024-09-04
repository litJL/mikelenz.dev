<template>
    <div class="group relative flex h-full w-full flex-col overflow-hidden">
        <!-- Card BG -->
        <div
            class="absolute left-0 top-0 flex h-full w-full flex-col justify-start"
        >
            <div
                class="w-full rounded-lg bg-black transition-all group-hover:grow"
            ></div>
        </div>
        <UIcon
            name="i-heroicons-academic-cap-solid"
            class="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all group-hover:size-96 group-hover:opacity-5 group-hover:left-1/4"
        />
        <div
            class="z-10 flex h-full w-full flex-col justify-between p-4 opacity-0 transition group-hover:opacity-100"
        >
            <div>
                <h2 class="flex items-baseline text-4xl font-bold">
                    EDU & EXP
                    <div
                        class="h-1 grow rounded bg-gradient-to-r from-transparent to-white"
                    ></div>
                </h2>
                <p class="mt-4 max-w-md text-lg text-gray-300">
                    I began coding in 2018 as part of my computer science
                    education, which is nearing completion as I’m now in the
                    final semester of my bachelor's degree.
                </p>
            </div>
            <!-- stats -->
            <div class="flex justify-end text-sm text-gray-500">
                <span>
                    Coding Experience:
                    <b>6 years</b>
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style></style>
