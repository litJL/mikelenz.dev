<template>
    <div class="group relative flex h-full w-full flex-col overflow-hidden">
        <!-- Card BG -->
        <div class="absolute left-0 top-0 flex h-full w-full justify-end">
            <div
                class="rounded-lg bg-gradient-to-l from-violet-900 to-violet-700 transition-all group-hover:grow"
            ></div>
        </div>
        <UIcon
            name="i-heroicons-bookmark-solid"
            class="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all group-hover:top-1/4 group-hover:size-96 group-hover:opacity-5"
        />
        <div
            class="z-10 flex h-full w-full flex-col justify-between p-4 opacity-0 transition group-hover:opacity-100"
        >
            <div class="flex flex-col grow">
                <h2 class="flex items-baseline text-2xl font-bold">
                    OTHER EXPERIENCES
                    <div
                        class="h-1 grow rounded bg-gradient-to-r from-transparent to-white"
                    ></div>
                </h2>
                <div class="flex flex-wrap justify-center items-center grow text-violet-100">
                  Imagine some logos here or something #TODO
                </div>
            </div>
            <!-- stats -->
            <div class="flex justify-end text-sm text-violet-200">
                <span>
                  Experience varies between entries.
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style></style>
