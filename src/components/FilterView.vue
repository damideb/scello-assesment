<template>
  <div class="bg-white w-48 p-5 space-y-5 text-[#25213B] rounded-lg z-50 border-blue500 border">
    <div class="flex justify-between">
      <h4>Default</h4>
      <input
        type="radio"
        name="sortUser"
       
        value="default"
        v-model="sortUsers"
        class="p-5 accent-[#6D5BD0] size-4"
      />
    </div>

    <div class="flex justify-between">
      <h4>First Name</h4>
      <input
        type="radio"
        name="sortUser"
        value="firstName"
        v-model="sortUsers"
        class="p-5 accent-[#6D5BD0] size-4"
      />
    </div>

    <div class="flex justify-between">
      <h4>Last Name</h4>
      <input
        type="radio"
        name="sortUser"
        value="lastName"
        v-model="sortUsers"
        class="p-5 accent-[#6D5BD0] size-4"
      />
    </div>

    <div class="flex justify-between">
      <h4>Email</h4>
      <input
        type="radio"
        name="sortUser"
        value="email"
        v-model="sortUsers"
        class="p-5 accent-[#6D5BD0] size-4"
      />
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/userStore.js'
import { storeToRefs } from 'pinia'

const store = useUserStore()

const { sortUsers } = storeToRefs(store)
</script>

<style lang="scss" scoped></style>
