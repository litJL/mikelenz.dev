<template>
    <div class="group/main">
        <div id="cursor" class="xl:group-hover/main:bg-white rounded-full absolute top-0 left-0  z-[60] pointer-events-none -translate-x-1/2 -translate-y-1/2" ref="cursor"></div>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
    </div>
</template>

<script lang="ts" setup>
const cursor = ref<HTMLElement | null>(null)
const {x,y} = useMouse()

let lastPosition = { x: 0, y: 0 }
const updateCursor = () => {
    (cursor.value as HTMLElement).style.left = x.value + 'px';
    (cursor.value as HTMLElement).style.top = y.value + 'px';

    const velocity = Math.sqrt((x.value - lastPosition.x) ** 2 + (y.value - lastPosition.y) ** 2);

    (cursor.value as HTMLElement).style.width = useClamp(12-velocity,4,8) + 'px';
    (cursor.value as HTMLElement).style.height = useClamp(12-velocity,4,8)  + 'px';

    lastPosition = { x: x.value, y: y.value };
}

onMounted(() => {
    window.addEventListener('mousemove', updateCursor);
})
</script>

<style>
*{
    cursor: none
}
</style>