<template>
    <header
        class="animate__animated animate__fadeInDown animate__fast fixed left-0 top-0 z-50 w-full"
    >
        <UContainer>
            <div
                class="absolute left-1/2 top-0 h-16 w-full -translate-x-1/2 -translate-y-2/3 bg-white/15 blur-2xl"
            ></div>
            <nav
                class="mt-4 flex h-16 w-full items-center justify-between rounded-full bg-gray-900/80 px-8 shadow-lg ring-2 ring-gray-700/50 backdrop-blur-md"
            >
                <span class="logotype flex h-full items-center font-bold">
                    mikelenz.dev
                </span>
                <ul class="flex gap-1">
                    <li v-for="link in links">
                        <UButton
                            variant="link"
                            :label="link.label"
                            color="gray"
                            :to="link.link"
                            class="linkglow"
                        />
                    </li>
                </ul>
            </nav>
        </UContainer>
    </header>
    <div>
        <slot />
    </div>
    <footer
        class="from-primary-300 to-primary-500 relative flex h-16 w-full items-center justify-center bg-gradient-to-tr"
    >
        <span class="text-sm text-black">
            &copy; 2024 Mike Lenz, All Rights Reserved &CenterDot;
            <UButton
                label="Legal Notice"
                variant="link"
                size="sm"
                color="white"
                :padded="false"
            />
        </span>
        <div
            class="hideout pointer-events-none absolute left-0 top-0 h-full w-full"
        ></div>
    </footer>
</template>

<script lang="ts" setup>
const links = [
    {
        label: "Projects",
        link: "#Projects",
    },
    {
        label: "Contact",
        link: "#Contact",
    },
];
</script>

<style scoped>
@keyframes glow {
    0% {
        text-shadow: 0 1px 2rem transparent;
    }
    50% {
        text-shadow: 0 1px 1rem white;
    }
    100% {
        text-shadow: 0 1px 2rem transparent;
    }
}

.logotype {
    animation: glow 10s ease-in-out infinite;
}

.linkglow {
    transition: ease-out 250ms;
}

.linkglow:hover {
    text-shadow: 0 1px 2rem white;
}
</style>
