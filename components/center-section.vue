<template>
    <div
        class="group relative flex h-full w-full flex-col overflow-hidden"
        id="container"
        @mouseover="hovered = true"
        @mouseleave="hovered = false"
    >
        <!-- Card BG -->
        <div
            class="absolute left-0 top-0 flex h-full w-full flex-col justify-end"
        >
            <div
                class="w-full rounded-lg bg-gradient-to-tr from-pink-400 to-violet-700 transition-all group-hover:grow"
            ></div>
        </div>
        <div
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold opacity-100 transition-all group-hover:scale-150 flex flex-col justify-center items-center"
        >
        <span>
            MIKE LENZ
        </span>
        <span class="text-xl font-light text-gray-400 h-6 overflow-hidden group-hover:h-0 transition-all">WEB DEVELOPER</span>
        </div>
        <div
            class="z-20 flex h-full w-full scale-110 flex-col justify-between opacity-0 group-hover:opacity-10"
        >
            <div class="relative h-full w-full">
                <svg
                    id="Layer_2"
                    data-name="Layer 2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 536.66 324.88"
                    preserveAspectRatio="none"
                    width="100%"
                    height="100%"
                >
                    <g id="Logomark_Dark" data-name="Logomark Dark">
                        <path
                            class="cls-1 drawing stroke-white"
                            d="m8,8.41s7,187,48,85S132.8-4.79,140.4,34.81,14,200.41,58,201.41,193.65,8.41,268.83,8.41,35,238.41,35,287.41s104.61,31.84,109.31-14.58S319.01,8.41,394.5,8.41,129.5,243.11,201.25,303.26s47.75-142.85,116.75-121.85-61,141,1,122,96.68-118.54,54.34-140.77S462.55-.59,508.28,8.41s-127.28,88-84.28,145-53,149-2,147,168.5-.5,66-103,40.66-99.2,40.66-99.2"
                        />
                    </g>
                </svg>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const hovered = ref(false);
</script>

<style scoped>
.cls-1 {
    fill: none;
    stroke-linecap: round;
    stroke-miterlimit: 10;
    stroke-width: 150px;
}
#container:hover .drawing {
    stroke-dasharray: 300;
    animation: draw 1s ease-out forwards;
}

@keyframes draw {
    to {
        stroke-dashoffset: 170;
        stroke-width: 0px;
    }
}
</style>
