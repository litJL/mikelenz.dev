<template>
    <div class="group relative flex h-full w-full flex-col overflow-hidden">
        <!-- Card BG -->
        <div
            class="absolute left-0 top-0 flex h-full w-full justify-start"
        >
            <div
                class=" rounded-lg bg-gradient-to-r from-orange-900 to-orange-700 transition-all group-hover:grow"
            ></div>
        </div>
        <UIcon
            name="i-heroicons-user-solid"
            class="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all group-hover:left-3/4 group-hover:size-96 group-hover:opacity-5"
        />
        <div
            class="z-10 flex h-full w-full flex-col justify-between p-4 opacity-0 transition group-hover:opacity-100"
        >
            <div>
                <h2 class="flex items-baseline text-5xl font-bold">
                    ABOUT ME
                    <div
                        class="h-1 grow rounded bg-gradient-to-r from-transparent to-white"
                    ></div>
                </h2>
                <p class="mt-4 max-w-md text-lg text-orange-100">
                  I am a 23 year old software engineer from Germany with a passion for web development and design. Currently I am working for the startup company <a href="https://cando-solutions.com" class="underline font-bold">CanDo Solutions</a> as a web developer and designer. 
                </p>
                <p class="mt-4 max-w-md text-lg text-orange-100">
                  Some Hobbies of mine include speedcubing, playing the piano, and videogames. I also dabble in learning languages (french and japanese).
                </p>
            </div>
            <!-- stats -->
            <div class="flex justify-end text-sm text-orange-200">
                <span>
                    Time left to live:
                    <b>hopefully 60-70 years</b>
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style></style>
