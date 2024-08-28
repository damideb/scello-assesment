<script setup>
import { defineProps, ref } from 'vue'
import More from '../assets/icons/More.svg'
import dropdown from '../assets/icons/Union.svg'
import { useUserStore } from '../stores/userStore.js'

const {users} = defineProps(['users'])

const MoreImage = ref(More)
const dropdownIcon = ref(dropdown)
const showIndex = ref()
const selectedUser = ref([])

const store = useUserStore()

const { setCheckedUsers } = store
</script>

<template>
  <div class="overflow-x-auto no-scrollbar w-full mt-3 bg-blue100">
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
          <tr
            class="main-row"
            @click="showIndex = index"
            :class="{ 'bg-[#F4F2FF]': index === showIndex }"
          >
            <td class="space-x-3 text-nowrap">
              <input
                type="checkbox"
                v-model="selectedUser"
                @click.stop
                :value="user"
                @change="setCheckedUsers(user, $event)"
              />
              <img
                :src="dropdownIcon"
                alt="dropdown-icon"
                class="inline"
                :class="{ ' rotate-180': index === showIndex }"
              />
            </td>
            <td>
              <div>
                <h3>{{ user.user.name }}</h3>
                <h3 class="text-blue300 text-[13px]">{{ user.user.email }}</h3>
              </div>
            </td>
            <td>
              <div>
                <h3
                  :class="{'bg-blue100 text-blue300': user.user.userStatus==='inActive', 'bg-[#E6E6F2] text-[#4A4AFF]': user.user.userStatus==='Active'}"
                  class=" w-fit text-nowrap py-[1px] px-2 mb-1 rounded-full "
                >
                  &bull; {{ user.user.userStatus }}
                </h3>
                <h3 class="text-blue300 text-[13px]">Last Login: {{ user.user.lastLogin }}</h3>
              </div>
            </td>
            <td>
              <div>
                <h3
                  class="w-fit text-nowrap mb-1 px-2 rounded-full"
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

          <tr class="subrow" v-show="index === showIndex">
            <td colspan="6">
              <table class="nested-table">
                <thead>
                  <tr>
                    <th>DATE</th>
                    <th>USER ACTIVITY</th>
                    <th>DETAIL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(activity, i) in user.activities" :key="i">
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

        <tr v-show="users.length === 0">
          <td colspan="6"><h3 class="text-center text-xl text-blue300 py-3">No User Found</h3></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

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
  text-wrap: nowrap;
}
th,
.main-row td {
  padding: 10px 20px;
  text-align: left;
  border-block: 1px solid #c6c2de;
  border-inline: none;
}

tr.main-row {
  background-color: white;
}

td {
  font-size: 14px;
}

tr.main-row {
  cursor: pointer;
}
.nested-table {
  width: 90%;
  margin-inline: auto;
}

.nested-table td {
  background-color: #f4f2ff;
}

.nested-table th {
  background-color: #f2f0f9;
}

.nested-table th,
.nested-table td {
  padding: 8px;
  border: none;
  border-bottom: 1px solid #c6c2de;
}

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
