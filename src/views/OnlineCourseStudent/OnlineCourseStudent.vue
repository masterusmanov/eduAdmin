<template>
    <div class="container mx-auto">
        <div class="my-[50px] ml-5 flex justify-between items-center pr-5">
            <h1 class="text-[24px] font-[700]">Online o'quv platformasidagi o'quvchilar ro'yhati</h1>
            <div class="flex items-center gap-6">
              <div class="flex items-center  rounded-lg w-[300px] px-1">
                <input v-model="searchQuery" type="text" class="rounded-lg w-full " placeholder="F.I.O bo'yicha Izlash. . .">
                <i class='bx bx-search absolute ml-[270px]'></i>
              </div>
            </div>
        </div>

      <!-- Main modal -->
      <div tabindex="-1" aria-hidden="true" class="overflow-y-auto flex  bg-[rgba(0,0,0,0.4)] overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full" :class="modal ? '' : 'hidden'">
            
        <div class="relative p-4  max-w-6xl h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative w-[500px] p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                <!-- Modal header -->
                <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                    <h3 class="text-[24px] font-semibold text-gray-900 dark:text-white">
                        <span>O'quvchi haqida malumotlar</span>
                    </h3>
                    <button @click='toggleModal' type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <form @submit.prevent="modifyContact($event)">
                    <div class="grid gap-4 mb-4 sm:grid-cols-1">
                        <div class="flex justify-between gap-6">
                            <div class="">
                                <div class="mt-3 grid gap-6 items-center justify-between">
                                    <div>
                                      <label for="phone" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Telefon raqami</label>
                                     <input v-model="contactInfo.phone" type="tel" name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Telefon raqami" required="">
                                    </div>
                                   <div>
                                     <label for="password" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Password</label>
                                    <input v-model="contactInfo.password" type="text" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="P@$$w0rd" required="">
                                   </div>
                                </div>
                            </div>    
                        </div>
                        <div class="flex justify-end items-center">
                            <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Ma'lumotni yangilash
                            </button>
                        </div>
                    </div>
                </form>    
            </div>
        </div>
    </div>
    <!-- -------------------------end of modal------------------------------------- -->
  
    <div class="w-full px-0 lg:p-0">
    <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-[11px]">
          <thead class="text-md text-white font-bold uppercase bg-gray-500">
            <tr class="">
              <th scope="col" class="px-4 py-3 text-center ">T/R</th>
              <th scope="col" class="px-4 py-3 text-center border border-white">Ismi va Familiyasi</th>
              <th scope="col" class="px-4 py-3 text-center border border-white">Telefon raqami</th>
              <th scope="col" class="px-4 py-3 text-center border border-white">Password</th>
              <th scope="col" class="px-4 py-3 text-center"></th>
              <th scope="col" class="px-4 py-3 text-center"></th>
            </tr>
          </thead>
          <tbody class="">  
            <!-- v-for="(el, index) in paginatedData.slice().reverse()" -->
            <tr  v-for="(el, index) in paginatedData" :key="el.id" class="border-b dark:border-gray-700"> 
              <td class="px-4 py-3 text-center border border-black">{{index + 1}}</td>
              <td class="px-4 py-3 text-center border border-black">{{el.first_name}} {{el.last_name}}</td>
              <td class="px-4 py-3 text-center border border-black">{{el.phone}}</td>
              <td class="px-4 py-3 text-center border border-black">{{el.password}}</td>
              <td class="px-4 py-3 border border-black">
                <button @click="updateContact(el.id)" class="text-blue-500 font-[700]">Ma'lumot yangilash</button>
              </td>
              <td class="px-4 py-3 text-center border border-black"><i class='bx bx-trash text-[20px] text-red-500 cursor-pointer'  @click="removeContact(el.id)"></i></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex justify-between items-center px-5 py-2">
        <button @click="prevPage" :disabled="currentPage === 1" class="bg-[#77BF44] rounded-lg text-white font-[700] px-2 py-1">Orqaga</button>
        <button @click="nextPage" :disabled="currentPage === totalPages" class="bg-[#77BF44] rounded-lg text-white font-[700] px-2 py-1">Keyingisi</button>
    </div>
    <p class="float-right px-5">{{ currentPage }} / {{ totalPages }} Sahifa</p>
    </div>
  </div>
  </div>
  
  </template>
  
  <script setup>
    import {ref as vueRef, reactive, computed, onMounted} from 'vue'
    // import { Modal } from 'flowbite'
    import { onlineCourseStudent } from '../../stores/OnlineCourseStudent/OnlineCourseStudent';
    import {useRouter} from 'vue-router'
    import { OnlineCourseStudent } from '../../services/OnlineCourseStudent/index';
   
    
    const modal = vueRef(false);  
    const currentPage = vueRef(1);
    const itemsPerPage = 12;
  
    const router = useRouter();
    const store = onlineCourseStudent();
    const isUpdate = vueRef(false);
    let computedList = vueRef([]);
    const searchQuery = vueRef('');
  
    
    const contactInfo = reactive({
        phone: '',
        password: '',
    })
    
  const toggleModal = () => {
    if(modal.value){
      isUpdate.value = false;
    Object.keys(contactInfo).forEach(key => contactInfo[key] = '');
    }
    modal.value = !modal.value;
  };
    
  const getlist = () => {
    OnlineCourseStudent.list().then((res)=>{
      store.state.list = Array.isArray(res.data) ? res.data : [];
    //   localStorage.setItem("cor_stud_length", res.data.length)    
    }).catch((error)=>{
        console.log(error.message);
      })
  }

  const filteredList = computed(() => {
      console.log('Filtered List:', store.state.list);
      return Array.isArray(store.state.list)
      ? store.state.list.filter(el => 
          el.last_name.includes(searchQuery.value)
        )
      : [];
    });


  const modifyContact=(event)=>{
        event.preventDefault();
        const id  = localStorage.getItem('id');
        if (!id) {
           console.error("Bunday ID yo'q")
            return;
        }
        const contact = { ...contactInfo };
        console.log('Modified Contact:', contactInfo);

        OnlineCourseStudent.update(id, contact).then((res)=>{
            if(res.status == 200){
                 Object.keys(contactInfo).forEach(key => contactInfo[key] = '');
                isUpdate.value = false;
                getlist();
                toggleModal()
            }
        }).catch((error)=>{
            if(error.message == 'Request failed with status code 401' || error.message == 'token expired' || error.message == 'token not found'){
                router.push({name: 'login'})
            }
            console.log(error);

        })
    }

  const removeContact = (id) => {
    
      OnlineCourseStudent.remove(id).then((res)=>{
          if(res.status == 200){
              getlist();
          }
      }).catch((error)=>{
          console.log(error);
      })
  }


  const updateContact = (id)=>{
        localStorage.setItem('id', id)
        // isUpdate.value = true;
        const foundContact = store.findOne(id)
        contactInfo.phone = foundContact[0].phone
        contactInfo.password = foundContact[0].password
        toggleModal();
    }
   
    
    computedList = computed(()=> {
        return store.state.list;
    })
    
    onMounted(()=>{
        getlist()
    })

    const totalPages = computed(() => {
    return Math.ceil(filteredList.value.length / itemsPerPage);
  });

  const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return Array.isArray(filteredList.value) ? filteredList.value.slice(start, end) : [];
  });

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value -= 1;
    }
  };

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value += 1;
    }
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
  