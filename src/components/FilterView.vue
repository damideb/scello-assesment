<template>
  <div class="bg-white w-48 p-5 space-y-5 text-[#25213B] rounded-lg z-50 border-blue500 border">
    <div class="flex justify-between items-center">
      <label for="default">
        Default
      </label>
      <input
        type="radio"
        name="sortUser"
       id="default"
        value="default"
        v-model="sortUsers"
        class="p-5 accent-[#6D5BD0] size-4"
      />
    </div>

    <div class="flex justify-between items-center">
      <label for="firstName" >First Name</label>
      <input
        type="radio"
        name="sortUser"
        id="firstName"
        value="firstName"
        v-model="sortUsers"
        class="p-5 accent-[#6D5BD0] size-4"
      />
    </div>

    <div class="flex justify-between items-center">
      <label for="lastName" >Last Name</label>
      <input
        type="radio"
        id="lastName"
        name="sortUser"
        value="lastName"
        v-model="sortUsers"
        class="p-5 accent-[#6D5BD0] size-4"
      />
    </div>

    <div class="flex justify-between items-center">
      <label for="email">Email</label>
      <input
        type="radio"
        id="email"
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
