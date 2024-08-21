import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'


const userDetails = [
  {
    user: {
      name: 'Justin Septimus',
      userStatus: 'Active',
      paymentStatus: 'Paid',
      amount: 200,
      paymentDate: '15/Apr/2020',
      email: 'example@gmail.com',
      lastLogin: '12/Apr/2020'
    },
    activities: [
      {
        activeDate: '12/Apr/2020',
        activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
      },
      {
        activeDate: '12/Apr/2020',
        activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
      },
      {
        activeDate: '12/Apr/2020',
        activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
      }
    ]
  },
  {
    user: {
      name: 'Anika Rhiel Madsen',
      userStatus: 'Active',
      paymentStatus: 'overdue',
      amount: 300,
      paymentDate: '15/Apr/2020',
      email: 'dami@gmail.com',
      lastLogin: '12/Apr/2020'
    },
    activities: [
      {
        activeDate: '12/Apr/2020',
        activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
      }
    ]
  },
  {
    user: {
      name: 'Miracle Vaccaro',
      userStatus: 'Active',
      paymentStatus: 'Paid',
      amount: 250,
      paymentDate: '15/Apr/2020',
      email: 'anita@gmail.com',
      lastLogin: '12/Apr/2020'
    },
    activities: []
  },
  {
    user: {
      name: 'Erin Levin',
      userStatus: 'Active',
      paymentStatus: 'unpaid',
      amount: 200,
      paymentDate: '15/Apr/2020',
      email: 'Levin@gmail.com',
      lastLogin: '12/Apr/2020'
    },
    activities: [
      {
        activeDate: '12/Apr/2020',
        activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
      },
      {
        activeDate: '12/Apr/2020',
        activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
      }
    ]
  },
  {
    user: {
      name: 'Mira Herwitz',
      userStatus: 'inActive',
      paymentStatus: 'Paid',
      amount: 200,
      paymentDate: '15/Apr/2020',
      email: 'example@gmail.com',
      lastLogin: '14/Apr/2020'
    },
    activities: []
  },
  {
    user: {
      name: 'Jaxson Siphron',
      userStatus: 'inActive',
      paymentStatus: 'Paid',
      amount: 750,
      paymentDate: '15/Apr/2020',
      email: 'peace@gmail.com',
      lastLogin: '12/Apr/2020'
    },
    activities: [
      {
        activeDate: '12/Apr/2020',
        activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
      }
    ]
  },
  {
    user: {
      name: 'Mira Levin',
      userStatus: 'Active',
      paymentStatus: 'unpaid',
      amount: 200,
      paymentDate: '15/Apr/2020',
      email: 'fake@gmail.com',
      lastLogin: '14/Apr/2020'
    },
    activities: [
      {
        activeDate: '12/Apr/2020',
        activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
      },
      {
        activeDate: '12/Apr/2020',
        activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
      }
    ]
  },
  {
    user: {
      name: 'Lincoln Levin',
      userStatus: 'Active',
      paymentStatus: 'Paid',
      amount: 370,
      paymentDate: '15/Apr/2020',
      email: 'example@gmail.com',
      lastLogin: '14/Apr/2020'
    },
    activities: [
      {
        activeDate: '12/Apr/2020',
        activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
      },
      {
        activeDate: '12/Apr/2020',
        activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
      }
    ]
  },
  {
    user: {
      name: 'Phillip Saris',
      userStatus: 'inActive',
      paymentStatus: 'unpaid',
      amount: 200,
      paymentDate: '15/Apr/2020',
      email: 'example@gmail.com',
      lastLogin: '15/Apr/2020'
    },
    activities: [
      {
        activeDate: '12/Apr/2020',
        activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
      },
      {
        activeDate: '12/Apr/2020',
        activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
      }
    ]
  },
  {
    user: {
      name: 'Cheyenne Ekstrom Bothman',
      userStatus: 'inActive',
      paymentStatus: 'Paid',
      amount: 150,
      paymentDate: '15/Apr/2020',
      email: 'example@gmail.com',
      lastLogin: '15/Apr/2020'
    },
    activities: [
      {
        activeDate: '12/Apr/2020',
        activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
      },
      {
        activeDate: '12/Apr/2020',
        activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.'
      }
    ]
  }
]

export const useUserStore = defineStore('Users', () => {
  const allUsers = ref(userDetails)
  const filteredUsers = ref([...allUsers.value])
  const checkedUsers = ref([])
  const sortUsers = ref('')

  const getPaidUsers = computed(() =>
    filteredUsers.value.filter((users) => users.user.paymentStatus === 'Paid')
  )
  const getunPaidUsers = computed(() =>
    filteredUsers.value.filter((users) => users.user.paymentStatus === 'unpaid')
  )
  const getOverdueUsers = computed(() =>
    filteredUsers.value.filter((users) => users.user.paymentStatus === 'overdue')
  )

  const paymentDue = computed(() => {
    const dueUsers = filteredUsers.value.filter((users) => users.user.paymentStatus !== 'Paid')
    const dues = dueUsers.reduce((total, due) => {
      return total + due.user.amount
    }, 0)

    return Intl.NumberFormat().format(dues)
  })

  function searchUsers(val) {
    if (val) {
      const result = allUsers.value.filter((user) =>
        user.user.name.toLowerCase().includes(val.toLowerCase())
      )
      filteredUsers.value = result
    } else {
      filteredUsers.value = [...allUsers.value]
    }
  }

  function sortedUsers(){
   if(sortUsers.value ==='default'){
     return filteredUsers.value =[...allUsers.value]
   }

   filteredUsers.value.sort((a,b)=>{
      if(sortUsers.value ==='firstName'){
        return a.user.name.localeCompare(b.user.name)
      }
        if (sortUsers.value === 'lastName') {
          return a.user.name.split(' ').pop().localeCompare(b.user.name.split(' ').pop())
        }
        if (sortUsers.value === 'email') {
          return a.user.email.localeCompare(b.user.email)
        }
   })
  
  }

  watch(sortUsers, ()=>sortedUsers())

  function setCheckedUsers(user, event) {
    event.stopPropagation() // prevent the event from bubbling to the parent
    if (event.target.checked) {
      checkedUsers.value.push(user)
    } else {
      checkedUsers.value.splice(checkedUsers.value.indexOf(user), 1) // Remove 1 user from the index of the user inputted
    }
  }

  function payDues() {
    const dueUsers = checkedUsers.value.filter((user) => user.user.paymentStatus !== 'Paid')

    dueUsers.forEach((user) => {
      user.user.paymentStatus = 'Paid'
    })
  }

  return {
    allUsers,
    getPaidUsers,
    getunPaidUsers,
    getOverdueUsers,
    paymentDue,
    filteredUsers,
    sortUsers,
    sortedUsers,
    searchUsers,
    setCheckedUsers,
    payDues
  }
})
