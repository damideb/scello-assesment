<template>
  <table class="mt-3">
    <thead>
      <tr>
        <th><input type="checkbox" /></th>
        <th>Name</th>
        <th>USER STATUS</th>
        <th>PAYMENT STATUS</th>
        <th>AMOUNT</th>
        <th class=""><img :src="MoreImage" alt="more-icon" /></th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(user, index) in users" :key="index">
        <tr class="main-row" @click="showIndex=index" :class="{'bg-[#F4F2FF]': index===showIndex}" >
          <td class="space-x-3">
            <input type="checkbox" /> <img :src="dropdownIcon" alt="dropdown-icon" class="inline" />
          </td>
          <td>
            <div>
              <h3>{{ user.user.name }}</h3>
              <h3 class="text-blue300 text-[13px]">{{ user.user.email }}</h3>
            </div>
          </td>
          <td>
            <div>
              <h3 class="bg-[#E6E6F2] w-fit py-[1px] px-2 mb-1 rounded-full text-[#4A4AFF]">
                &bull; {{ user.user.userStatus }}
              </h3>
              <h3 class="text-blue300 text-[13px]">Last Login: {{ user.user.lastLogin }}</h3>
            </div>
          </td>
          <td>
            <div>
              <h3
                class="w-fit mb-1 px-2 rounded-full"
                :class="{
                  paid: user.user.paymentStatus === 'Paid',
                  unpaid: user.user.paymentStatus === 'unpaid',
                  overdue: user.user.paymentStatus === 'overdue'
                }"
              >
                &bull; {{ user.user.paymentStatus }}
              </h3>
              <h3 class="text-[13px]">
                {{
                  user.user.paymentStatus === 'Paid'
                    ? 'Paid on'
                    : user.user.paymentStatus === 'unpaid'
                      ? 'Dues on'
                      : 'Dued on'
                }}
                {{ user.user.paymentDate }}
              </h3>
            </div>
          </td>
          <td>
            <div>
              <h3>${{ user.user.amount }}</h3>
              <h3 class="text-blue300 text-[13px]">USD</h3>
            </div>
          </td>
          <td class="text-blue300">
            <span>View More </span>
            <img :src="MoreImage" alt="more-icon" class="inline" />
          </td>
        </tr>

        <tr class="subrow " v-show="index===showIndex">
          <td colspan="6">
            <table class="nested-table">
              <thead >
                <tr >
                  <th>DATE</th>
                  <th>USER ACTIVITY</th>
                  <th>DETAIL</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(activity, i) in user.activities" :key="i" >
                  <td class="text-blue300">{{ activity.activeDate }}</td>
                  <td>{{ activity.activity }}</td>
                  <td>{{ activity.detail }}</td>
                </tr>
              </tbody>
              <tbody v-if="user.activities.length === 0">
                <td colspan="6">
                  <h3 class="text-center text-xl text-blue300 font-semibold py-7">
                    NO RECORDS FOUND
                  </h3>
                </td>
              </tbody>
            </table>
          </td>
        </tr>
      </template>

        <tr  v-show="users.length ===0">
            <td  colspan="6"><h3 class=" text-center text-xl text-blue300 py-3" >No User Found</h3></td>
        </tr>
    </tbody>
  </table>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import More from '../assets/icons/More.svg'
import dropdown from '../assets/icons/Union.svg'

const allUsers = defineProps(['users'])

const MoreImage = ref(More)
const dropdownIcon = ref(dropdown)
const showIndex = ref()
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th {
  color: #6e6893;
  font-size: 14px;
  background-color: #f4f2ff;
  padding: 15px !important;
}
th,
.main-row td {
  padding: 10px;
  /* border: 1px solid #ddd; */
  text-align: left;
  border-block: 1px solid #c6c2de;
  border-inline: none;
}

td {
  font-size: 14px;
}
/* tr.subrow {
  background-color: #f9f9f9;
} */
tr.main-row {
  cursor: pointer;
}
.nested-table {
 
  width: 90%;
  margin-inline: auto;
}

.nested-table td{
    background-color: #f4f2ff
}

.nested-table th{
    background-color: #F2F0F9;
}

.nested-table th,
.nested-table td {
  /* border: 1px solid #bbb; */
  
  padding: 8px;
  border: none;
  border-bottom: 1px solid #c6c2de;
}

/* tr.subrow:last-child {
 border: none !important;
} */

.paid {
  color: #007f00;
  background-color: #cdffcd;
}

.unpaid {
  background-color: #ffeccc;
  color: #965e00;
}

.overdue {
  background-color: #ffe0e0;
  color: #d30000;
}
</style>
