<script setup>
import { storeToRefs } from 'pinia'
import TableView from './components/TableView.vue'
import './assets/main.css'
import { useUserStore } from './stores/userStore.js'
import { ref } from 'vue'
import filterIcon from './assets/icons/Vector.svg'

const store = useUserStore()

const {searchUsers} = store
const { filteredUsers, getPaidUsers, getunPaidUsers, getOverdueUsers, paymentDue } = storeToRefs(store)
const filter = ref('all')
const filterImage = ref(filterIcon)
const inputVal = ref('')

</script>

<template>
  <div class="w-4/5 mx-auto bg-blue100 p-10 mt-10 font-inter rounded-lg">
    <header>
      <h1 class="text-blue300 font-semibold">TABLE HEADING</h1>
      <div
        class="flex justify-between text-sm font-medium text-blue300 mt-3 border-b-[1.5px] border-blue500 px-2"
      >
        <div class="flex gap-5">
          <button
            @click="filter = 'all'"
            class="px-3 pb-2"
            :class="{ 'border-b-[3px] border-black': filter === 'all' }"
          >
            All
          </button>
          <button
            @click="filter = 'paid'"
            class="pb-2 px-3"
            :class="{ 'border-b-[3px] border-black': filter === 'paid' }"
          >
            Paid
          </button>
          <button
            @click="filter = 'unPaid'"
            class="pb-2 px-3"
            :class="{ 'border-b-[3px] border-black': filter === 'unPaid' }"
          >
            Unpaid
          </button>
          <button
            @click="filter = 'overdue'"
            class="pb-2 px-3"
            :class="{ 'border-b-[3px] border-black': filter === 'overdue' }"
          >
            Overdue
          </button>
        </div>
        <div>
          <p class="">Total payable amount : <span>{{ paymentDue }}</span> USD</p>
        </div>
      </div>
    </header>

    <main class="bg-white py-3 mt-3 rounded-lg">
      <section class="flex px-3 justify-between">
        <section class="flex gap-5">
          <button class="border-blue500 border-[1.5px] px-2 rounded"> <img :src="filterImage" class="inline mr-2" alt=" filter-icon"> Filter</button>
          <div>
            <input
              class="p-3 w-[400px] bg-[#F4F2FF] rounded-lg text-sm text-blue300 focus:border-blue300 focus:border-2 outline-none placeholder:text-blue300"
              placeholder="Search Users by Name, Email or Date"
              v-model="inputVal"
              @input="searchUsers(inputVal)"
            />
          </div>
        </section>
        <button class="bg-purple100 py-1 px-3 text-white rounded-lg">PAY DUES</button>
      </section>
      <div v-if="filter === 'all'">
        <TableView :users="filteredUsers" />
      </div>

      <div v-if="filter === 'paid'">
        <TableView :users="getPaidUsers" />
      </div>

      <div v-if="filter === 'unPaid'">
        <TableView :users="getunPaidUsers" />
      </div>

      <div v-if="filter === 'overdue'">
        <TableView :users="getOverdueUsers" />
      </div>
    </main>
  </div>
</template>
