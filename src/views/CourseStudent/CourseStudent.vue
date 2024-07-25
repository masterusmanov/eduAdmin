<template>
    <div class="container mx-auto">
        <div class="my-[50px] ml-5 flex justify-between items-center pr-5">
            <h1 class="text-[24px] font-[700]">IT school o'quvchilari ro'yhati</h1>
            <button @click="toggleModal" class="bg-[#77BF44] pb-1 rounded-lg px-4 text-[32px] text-white font-bold">+</button>
        </div>
  
  
      <!-- Main modal -->
      <div tabindex="-1" aria-hidden="true" class="overflow-y-auto flex  bg-[rgba(0,0,0,0.4)] overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full" :class="modal ? '' : 'hidden'">
            
        <div class="relative p-4  max-w-6xl h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative w-[1100px] p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
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
                <form >
                    <div class="grid gap-4 mb-4 sm:grid-cols-1">
                        <div class="flex justify-between gap-6">
                            <div class="w-[48%]">
                                <div class="mt-3">
                                    <label for="dish_uzb" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">O'quvchi ID raqami</label>
                                    <input v-model="contactInfo.dish_uzb" type="text" name="dish_uzb" id="dish_uzb" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="O'quvchi ID raqami" required="">
                                </div>
                                <div class="mt-3">
                                  <label for="dish_rus" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">O'quvchi F.I.O</label>
                                  <input v-model="contactInfo.dish_rus" type="text" name="dish_rus" id="dish_rus" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ismi familiyasi va otasining ismi" required="">
                                </div>
                                <div class="mt-3 flex items-center justify-between">
                                  <div class="">
                                    <label for="timeSelector" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Jinsi</label>
                                    <select id="timeSelector" class="w-[100%] font-bold py-2 px-2 text-[14px] border border-gray-300 outline-none rounded-lg">
                                      <option value="time1">Erkak</option>
                                      <option value="time2">Ayol</option>
                                    </select>
                                  </div>
                                  <div>
                                    <label for="timeSelector" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Tug'ilgan sanasi</label>
                                    <input id="date" type="date" name="date" class="rounded-lg outline-none border-gray-300">
                                  </div>
                                  <div class="">
                                    <label for="note_uzb" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Shaxsni tasdiqlovchi hujjat</label>
                                    <input v-model="contactInfo.note_uzb" type="text" name="note_uzb" id="note_uzb" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="AA   _________________" required="">
                                  </div>
                                </div>
                                <div class="mt-3">
                                    <label for="note_uzb" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Manzili</label>
                                    <input v-model="contactInfo.note_uzb" type="text" name="note_uzb" id="note_uzb" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Manzili" required="">
                                </div>
                                <div class="mt-3 flex items-center justify-between">
                                   <div>
                                     <label for="note_rus" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Tinglovchini ijtimoiy statusi</label>
                                    <input v-model="contactInfo.note_rus" type="text" name="note_rus" id="note_rus" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="O'quvchi yoki talaba " required="">
                                   </div>
                                   <div>
                                     <label for="note_rus" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Telefon raqami</label>
                                    <input type="phone" name="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Telefon raqami" required="">
                                   </div>
                                </div>
                                <div class="mt-3 flex items-center justify-between gap-3">
                                    <div>
                                      <label for="note_eng" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Kurs nomi</label>
                                      <input v-model="contactInfo.note_eng" type="text" name="note_eng" id="note_eng" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kurs nomi" required="">
                                    </div>
                                    <div>
                                      <label for="note_eng" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Boshlanish sanasi</label>
                                      <input id="start_date" type="date" name="start_date" class="rounded-lg outline-none border-gray-300">
                                    </div>
                                    <div>
                                      <label for="note_eng" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Davomiyligi</label>
                                      <input v-model="contactInfo.note_eng" type="text" name="note_eng" id="note_eng" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kurs davomiyligi" required="">
                                    </div>
                                </div>
                            </div>
                            <div class="w-[48%]">
                                <div class="mt-3 flex items-center justify-between gap-3">
                                  <div>
                                    <label for="note_eng" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Tugash sanasi</label>
                                    <input id="end_date" type="date" name="end_date" class="rounded-lg outline-none border-gray-300">
                                  </div>
                                  <div>
                                    <label for="note_eng" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Bir kurs narxi</label>
                                    <input v-model="contactInfo.note_eng" type="text" name="note_eng" id="note_eng" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bir kurs narxi" required="">
                                  </div>
                                  <div>
                                    <label for="note_eng" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Tinglovchi statusi</label>
                                    <input v-model="contactInfo.note_eng" type="text" name="note_eng" id="note_eng" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tinglovchi statusi" required="">
                                  </div>
                                </div>
                                <div class="mt-3 flex items-center gap-6">
                                  <div>
                                    <label for="calories" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Shartnoma raqami va sanasi</label>
                                    <input v-model="contactInfo.note_eng" type="text" name="note_eng" id="note_eng" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Shartnoma raqami va sanasi" required="">
                                  </div>
                                  <div>
                                    <label for="calories" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">O'qituvchi</label>
                                    <input v-model="contactInfo.note_eng" type="text" name="note_eng" id="note_eng" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-[280px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="O'qituvchi F.I.O" required="">
                                  </div>
                                </div>
                                <div class="mt-3 flex items-center justify-between">
                                  <div>
                                    <label for="dish_price" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Guruh</label>
                                    <input v-model="contactInfo.dish_price" type="text" name="dish_price" id="dish_price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Guruh" required="">
                                  </div>
                                  <div>
                                    <label for="dish_price" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Kuni</label>
                                    <select id="timeSelector" class="w-[100%] font-bold py-2 px-2 text-[14px] border border-gray-300 outline-none rounded-lg">
                                      <option value="time1">Har kuni</option>
                                      <option value="time2">Toq kunlar</option>
                                      <option value="time2">Juft kunlar</option>
                                    </select>
                                  </div>
                                  <div>
                                    <label for="dish_price" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Kurs vaqti</label>
                                    <select id="timeSelector" class="w-[100%] font-bold py-2 px-2 text-[14px] border border-gray-300 outline-none rounded-lg">
                                      <option value="time1">8:00-10:00 </option>
                                      <option value="time2">9:00-11:00</option>
                                      <option value="time3">10:00-12:00</option>
                                      <option value="time4">13:00-15:00</option>
                                      <option value="time5">14:00-16:00</option>
                                      <option value="time6">15:00-17:00</option>
                                      <option value="time7">16:00-18:00</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="mt-3 flex items-center gap-4">
                                  <div>
                                     <label for="dish_eng" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Qaysi kursga o'tdi</label>
                                    <input v-model="contactInfo.dish_eng" type="text" name="dish_eng" id="dish_eng" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-[310px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Qaysi kursga o'tdi" required="">
                                  </div>
                                  <div>
                                     <label for="dish_eng" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Sertifikat statusi</label>
                                    <input v-model="contactInfo.dish_eng" type="text" name="dish_eng" id="dish_eng" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sertifikat statusi" required="">
                                  </div>
                                </div>
                                <div class="mt-3 flex items-center gap-4">
                                  <div>
                                     <label for="dish_eng" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Sertifikat № va sana</label>
                                    <input v-model="contactInfo.dish_eng" type="text" name="dish_eng" id="dish_eng" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-[310px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sertifikat № va sana" required="">
                                  </div>
                                  <div>
                                    <label for="dish_eng" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Ish bilan ta'minlanish</label>
                                    <input v-model="contactInfo.dish_eng" type="text" name="dish_eng" id="dish_eng" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ish bilan ta'minlanish" required="">
                                  </div>
                                </div>
                                <div class="grid justify-beetwen items-center my-14 gap-6">
                                    <h3 class="text-[] font-[500]">Rasm yuklash PNG, JPG (400x300px)</h3>
                                    <div class="w-[90%] flex gap-6 items-center  ">
                                        <input type="file" @change="handleFileChange" />
                                        <button class="b  g-blue-600 text-white px-3 py-1 rounded-lg" @click="uploadImage">Rasm yuklang!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                      <div class="">
                          <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image" />
                      </div>
                      
                    </div>
                    <div class="flex justify-end items-center">
                        <button v-if="!isUpdate" @click="addContact($event)" type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Saqlash
                        </button>
                        <button v-else @click="modifyContact($event)" type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Yangilash
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- -------------------------end of modal------------------------------------- -->
  
    <div class="w-full px-0 lg:p-0">
    <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="text-md text-white font-bold uppercase bg-gray-500">
            <tr class="">
              <th scope="col" class="px-4 py-3 text-center border border-white">T/R</th>
              <th scope="col" class="px-4 py-3 text-center border border-white">ID</th>
              <th scope="col" class="px-4 py-3 text-center border border-white">Ismi va Familiyasi</th>
              <th scope="col" class="px-4 py-3 text-center border border-white">Tug`ilgan sanasi</th>
              <th scope="col" class="px-4 py-3 text-center border border-white">Shaxsni tasdiqlovchi hujjat (yoki ota-onasi)</th>
              <th scope="col" class="px-4 py-3 text-center border border-white">Manzil</th>
              <th scope="col" class="px-4 py-3 text-center border border-white">Telefon raqami</th>
              <th scope="col" class="px-4 py-3 text-center border border-white">Tinglovchining ijtimoiy statusi</th>
              <th scope="col" class="px-4 py-3 text-center border border-white">Kurs nomi</th>
              <th scope="col" class="px-4 py-3 text-center border border-white">Boshlanish sanasi</th>
              <th scope="col" class="px-4 py-3 text-center border border-white"></th>
            </tr>
          </thead>
          <tbody class="">
            <!-- v-for="el in users" :key="el.id"  --> 
            <tr href="/detail_student" class="border-b dark:border-gray-700"> 
              <td class="px-4 py-3 text-center border border-black">1</td>
              <td class="px-4 py-3 text-center border border-black">1234</td>
              <td class="px-4 py-3 border border-black">Eshmatov Toshmat Eshon o`g`li</td>
              <td class="px-4 py-3 text-center border border-black">01.01.2008</td>
              <td class="px-4 py-3 text-center border border-black">INA-123456</td>
              <td class="px-4 py-3 border border-black">Uchqo`rg`on tumani Andijon MFY Andijon ko`chasi</td>
              <td class="px-4 py-3 text-center border border-black">+998901234567</td>
              <td class="px-4 py-3 border border-black">O`quvchi 40-maktab</td>
              <td class="px-4 py-3 border border-black">Foundation</td>
              <td class="px-4 py-3 text-center border border-black">23.07.2024 yil</td>
              <td class="px-4 py-3 border border-black"><router-link to="/detail_student" class="text-blue-500 font-[700]">Batafsil</router-link></td>
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
    import { initDropdowns, Modal } from 'flowbite'
    import { courseStudentStore } from '../../stores/CourseStudentStore/courseStudentStore';
    import {useRouter} from 'vue-router'
    import { courseStudent } from '../../services/CourseStudent/index';
    import { storage } from '../../firebase'; 
    import {getDownloadURL, uploadBytes, ref as firebaseRef} from 'firebase/storage'
    
    const modal = vueRef(false);  
    const isShowModal = vueRef(false);
    // const currentPage = ref(1);
    // const itemsPerPage = 10;
    
    function showModal() {
        isShowModal.value = !isShowModal.value
    }
  
    const router = useRouter();
    const store = courseStudentStore();
    const isUpdate = vueRef(false);
    let computedList = vueRef([]);
    const file = vueRef(null);
    const imageUrl = vueRef('');
    const uploadProgress = vueRef(0);
    
    const contactInfo = reactive({
        note_uzb: '',
        dish_uzb: '',
        dish_rus: '',
        dish_eng: ''
    })
    
    const toggleModal = () => {
        
        if(modal.value){
            isUpdate.value = false
            contactInfo.note_uzb=''
            contactInfo.dish_uzb=''
            contactInfo.dish_rus=''
            contactInfo.dish_eng=''
        }
        modal.value = !modal.value
    }
    
    const updateList = () => {
        courseStudent.list().then((res)=>{
            store.state.list = res.data    
        }).catch((error)=>{
            if(error.message == 'Request failed with status code 401' || error.message == 'token expired' || error.message == 'token not found'){
                router.push({note_uzb: 'login'})
            }
            else{
                console.log(error);
            }
            console.log(error.message);
        })
    }
    
    const addContact=(evet)=>{
        evet.preventDefault();
        const contact = {
            note_uzb: contactInfo.note_uzb,
            dish_uzb: contactInfo.dish_uzb,
            dish_rus: contactInfo.dish_rus,
            dish_eng: imageUrl.value
        }
    
        courseStudent.create(contact).then((res)=>{
            if(res.status == 201){
                contactInfo.note_uzb=''
                contactInfo.dish_uzb=''
                contactInfo.dish_rus=''
                imageUrl.value=''
                toggleModal()
                updateList();
            }
        }).catch((error)=>{
            if(error.message == 'Request failed with status code 401' || error.message == 'token expired' || error.message == 'token not found'){
                router.push({note_uzb: 'login'})
            }
            console.log(error.message);
        })
  }
  const detail = (id) => {
      localStorage.setItem()
    }
  
    // =============================================================
    const handleFileChange = (e) => {
          file.value = e.target.files[0];
      };
  
      const uploadImage = async () => {
      if (file.value) {
          try {
          console.log(file.value);
          const storageRef = firebaseRef(storage, 'employee/' + file.value.note_uzb);
          const uploadTask = uploadBytes(storageRef, file.value);
  
          uploadTask
              .then((snapshot) => {
              return getDownloadURL(storageRef);
              })
              .then((downloadURL) => {
              imageUrl.value = downloadURL;
              console.log(imageUrl.value);
              })
              .catch((error) => {
              console.error('Error uploading the image:', error);
              });
          } catch (error) {
          console.error('Error uploading the image:', error);
          }
      } else {
          console.warn('Please select a file first.');
      }
      };
  // =========================================================
    
    computedList = computed(()=> {
        return store.state.list;
    })
    
    onMounted(()=>{
        updateList()
        initDropdowns()
    })

  //   const totalPages = computed(() => {
  //   return Math.ceil(computedList.value.length / itemsPerPage);
  // });

  // const paginatedData = computed(() => {
  //   const start = (currentPage.value - 1) * itemsPerPage;
  //   const end = start + itemsPerPage;
  //   return computedList.value.slice(start, end);
  // });

  // const prevPage = () => {
  //   if (currentPage.value > 1) {
  //     currentPage.value -= 1;
  //   }
  // };

  // const nextPage = () => {
  //   if (currentPage.value < totalPages.value) {
  //     currentPage.value += 1;
  //   }
  // };
  </script>
  
  <style lang="scss" scoped>
  </style>
  