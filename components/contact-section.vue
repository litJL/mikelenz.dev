<template>
    <div class="group relative flex h-full w-full flex-col overflow-hidden">
        <!-- Card BG -->
        <div
            class="absolute left-0 top-0 flex h-full w-full flex-col justify-end"
        >
            <div
                class="w-full rounded-lg bg-gradient-to-r from-cyan-700 to-cyan-900 transition-all group-hover:grow"
            ></div>
        </div>
        <UIcon
            name="i-heroicons-megaphone-solid"
            class="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all group-hover:left-1/4 group-hover:size-96 group-hover:opacity-5"
        />
        <div
            class="z-10 flex h-full w-full flex-col justify-between p-4 opacity-0 transition group-hover:opacity-100"
        >
            <div>
                <h2 class="flex items-baseline text-4xl font-bold">
                    CONTACT
                    <div
                        class="h-1 grow rounded bg-gradient-to-r from-transparent to-white"
                    ></div>
                </h2>
                <div class="flex gap-8 h-full">
                    <div class="flex flex-col gap-4 w-64">
                        <p class="mt-4 max-w-md text-lg text-cyan-100">
                            You can reach me at
                            <a
                                href="mailto:business.ml.jl@gmail.com"
                                class="text-cyan-300 underline"
                            >
                                business.ml.jl@gmail.com
                            </a>
                            or by using the form to the right.
                        </p>
                        <div>
                          <!-- Socials #TODO -->
                        </div>
                    </div>
                    <div class="grow ">
                      <UForm :state class="grid grid-cols-2 gap-2" @submit="onSubmit">
                        <UFormGroup label="Email" name="email">
                          <UInput v-model="state.email" color="cyan"/>
                        </UFormGroup>
                        <UFormGroup label="Subject" name="subject">
                          <UInput v-model="state.subject" color="cyan"/>
                        </UFormGroup>
                        <UFormGroup label="Message" name="message" class="col-span-2">
                          <UTextarea v-model="state.message" color="cyan"/>
                        </UFormGroup>
                        <UButton type="submit" icon="i-heroicons-paper-airplane" class="w-32" block color="cyan">Send</UButton>
                      </UForm>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const state = reactive({
  email: '',
  subject: '',
  message: ''
})

const onSubmit = () => {
  console.log(state)
}
</script>

<style></style>
