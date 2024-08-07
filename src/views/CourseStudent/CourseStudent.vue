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
                <form @submit.prevent="addContact($event)">
                    <div class="grid gap-4 mb-4 sm:grid-cols-1">
                        <div class="flex justify-between gap-6">
                            <div class="w-[48%]">
                                <div class="mt-3">
                                    <label for="student_id" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">O'quvchi ID raqami</label>
                                    <input v-model="contactInfo.student_id" type="text" name="student_id" id="student_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="O'quvchi ID raqami" required="">
                                </div>
                                <div class="mt-3">
                                  <label for="student_name" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">O'quvchi F.I.O</label>
                                  <input v-model="contactInfo.student_name" type="text" name="student_name" id="student_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ismi familiyasi va otasining ismi" required="">
                                </div>
                                <div class="mt-3 flex items-center justify-between">
                                  <div class="">
                                    <label for="selectSex" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Jinsi</label>
                                    <select id="selectSex" @change="handleSelectSexChange($event.target.value)" class="w-[100%] font-bold py-2 px-2 text-[14px] border border-gray-300 outline-none rounded-lg">
                                      <option value="Erkak">Erkak</option>
                                      <option value="Ayol">Ayol</option>
                                    </select>
                                  </div>
                                  <div>
                                    <label for="birthdate" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Tug'ilgan sanasi</label>
                                    <input v-model="contactInfo.birthdate" id="birthdate" type="date" name="birthdate" class="rounded-lg outline-none border-gray-300">
                                  </div>
                                  <div class="">
                                    <label for="identity_document" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Shaxsni tasdiqlovchi hujjat</label>
                                    <input v-model="contactInfo.identity_document" type="text" name="identity_document" id="identity_document" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="AA   _________________" required="">
                                  </div>
                                </div>
                                <div class="mt-3">
                                    <label for="address" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Manzili</label>
                                    <input v-model="contactInfo.address" type="text" name="address" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Manzili" required="">
                                </div>
                                <div class="mt-3 flex items-center justify-between">
                                   <div>
                                     <label for="social_status" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Tinglovchini ijtimoiy statusi</label>
                                    <input v-model="contactInfo.social_status" type="text" name="social_status" id="social_status" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="O'quvchi yoki talaba " required="">
                                   </div>
                                   <div>
                                     <label for="phone_number" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Telefon raqami</label>
                                    <input v-model="contactInfo.phone_number" type="tel" name="phone_number" id="phone_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Telefon raqami" required="">
                                   </div>
                                </div>
                                <div class="mt-3 flex items-center justify-between gap-3">
                                    <div>
                                      <label for="course_name" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Kurs nomi</label>
                                      <input v-model="contactInfo.course_name" type="text" name="course_name" id="course_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kurs nomi" required="">
                                    </div>
                                    <div>
                                      <label for="start_date" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Boshlanish sanasi</label>
                                      <input v-model="contactInfo.start_date" id="start_date" type="date" name="start_date" class="rounded-lg outline-none border-gray-300">
                                    </div>
                                    <div>
                                      <label for="duration" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Davomiyligi</label>
                                      <input v-model="contactInfo.duration" type="text" name="duration" id="duration" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kurs davomiyligi" required="">
                                    </div>
                                </div>
                            </div>
                            <div class="w-[48%]">
                                <div class="mt-3 flex items-center justify-between gap-3">
                                  <div>
                                    <label for="end-date" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Tugash sanasi</label>
                                    <input  id="end_date" type="date" name="end_date" class="rounded-lg outline-none border-gray-300">
                                  </div>
                                  <div>
                                    <label for="course_price" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Bir kurs narxi</label>
                                    <input v-model="contactInfo.course_price" type="text" name="course_price" id="course_price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bir kurs narxi" required="">
                                  </div>
                                  <div>
                                    <label for="listener_status" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Tinglovchi statusi</label>
                                    <input v-model="contactInfo.listener_status" type="text" name="listener_status" id="listener_status" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tinglovchi statusi" required="">
                                  </div>
                                </div>
                                <div class="mt-3 flex items-center gap-6">
                                  <div>
                                    <label for="contract" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Shartnoma raqami va sanasi</label>
                                    <input v-model="contactInfo.contract" type="text" name="contract" id="contract" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Shartnoma raqami va sanasi" required="">
                                  </div>
                                  <div>
                                    <label for="teacher" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">O'qituvchi</label>
                                    <input v-model="contactInfo.teacher" type="text" name="teacher" id="teacher" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-[280px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="O'qituvchi F.I.O" required="">
                                  </div>
                                </div>
                                <div class="mt-3 flex items-center justify-between">
                                  <div>
                                    <label for="group" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Guruh</label>
                                    <input v-model="contactInfo.group" type="text" name="group" id="group" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Guruh" required="">
                                  </div>
                                  <div>
                                    <label for="days" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Kuni</label>
                                    <select id="days"  @change="handleDaysChange($event.target.value)" class="w-[100%] font-bold py-2 px-2 text-[14px] border border-gray-300 outline-none rounded-lg">
                                      <option value="Har kuni">Har kuni</option>
                                      <option value="Toq kunlari">Toq kunlar</option>
                                      <option value="Juft kunlar">Juft kunlar</option>
                                    </select>
                                  </div>
                                  <div>
                                    <label for="select_time" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Kurs vaqti</label>
                                    <select id="select_time" @change="handleSelectTimeChange($event.target.value)" class="w-[100%] font-bold py-2 px-2 text-[14px] border border-gray-300 outline-none rounded-lg">
                                      <option value="08:00-10:00">8:00-10:00 </option>
                                      <option value="9:00-11:00">9:00-11:00</option>
                                      <option value="10:00-12:00">10:00-12:00</option>
                                      <option value="13:00-15:00">13:00-15:00</option>
                                      <option value="14:00-16:00">14:00-16:00</option>
                                      <option value="15:00-17:00">15:00-17:00</option>
                                      <option value="16:00-18:00">16:00-18:00</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="mt-3 flex items-center gap-4">
                                  <div>
                                     <label for="bootcamp" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Qaysi kursga o'tdi</label>
                                    <input v-model="contactInfo.bootcamp" type="text" name="bootcamp" id="bootcamp" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-[310px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Qaysi kursga o'tdi" required="">
                                  </div>
                                  <div>
                                     <label for="sertificate_status" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Sertifikat statusi</label>
                                    <input v-model="contactInfo.sertificate_status" type="text" name="sertificate_status" id="sertificate_status" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sertifikat statusi" required="">
                                  </div>
                                </div>
                                <div class="mt-3 flex items-center gap-4">
                                  <div>
                                     <label for="sertificate" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Sertifikat № va sana</label>
                                    <input v-model="contactInfo.sertificate" type="text" name="sertificate" id="sertificate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-[310px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sertifikat № va sana" required="">
                                  </div>
                                  <div>
                                    <label for="employment" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Ish bilan ta'minlanish</label>
                                    <input v-model="contactInfo.employment" type="text" name="employment" id="employment" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ish bilan ta'minlanish" required="">
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div class="">
                              <p v-if="imageUrl" class="text-red-500 font-bold">Rasm yuklandi!</p>
                            </div>
                            
                          </div>
                          <div class="flex justify-end items-center">
                            <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Saqlash
                            </button>
                          </div>
                        </form>
                        <div class="grid justify-beetwen items-center my-14 gap-6">
                            <h3 class="text-[] font-[500]">Rasm yuklash PNG, JPG (400x300px)</h3>
                            <div class="w-[90%] flex gap-6 items-center  ">
                                <input type="file" @change="handleFileChange" />
                                <button class="bg-blue-600 text-white px-3 py-1 rounded-lg" @click="uploadImage">Rasm yuklang!</button>
                            </div>
                        </div>
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
              <th scope="col" class="px-4 py-3 text-center border border-white"></th>
            </tr>
          </thead>
          <tbody class="">  
            <tr v-for="(el, index) in paginatedData" :key="el.id" class="border-b dark:border-gray-700"> 
              <td class="px-4 py-3 text-center border border-black">{{index + 1}}</td>
              <td class="px-4 py-3 text-center border border-black">{{el.student_id}}</td>
              <td class="px-4 py-3 border border-black">{{el.student_name}}</td>
              <td class="px-4 py-3 text-center border border-black">{{el.birthdate}}</td>
              <td class="px-4 py-3 text-center border border-black">{{el.identity_document}}</td>
              <td class="px-4 py-3 border border-black">{{el.address}}</td>
              <td class="px-4 py-3 text-center border border-black">{{el.phone_number}}</td>
              <td class="px-4 py-3 border border-black">{{el.social_status}}</td>
              <td class="px-4 py-3 border border-black">{{el.course_name}}</td>
              <td class="px-4 py-3 text-center border border-black">{{el.start_date}}</td>
              <td class="px-4 py-3 border border-black">
                <router-link to="/detail_student" @click="detail(el.id)" class="text-blue-500 font-[700]">Batafsil</router-link>
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
    import { courseStudentStore } from '../../stores/CourseStudentStore/courseStudentStore';
    import {useRouter} from 'vue-router'
    import { courseStudent } from '../../services/CourseStudent/index';
    import { storage } from '../../firebase'; 
    import {getDownloadURL, uploadBytes, ref as firebaseRef} from 'firebase/storage'
    
    const modal = vueRef(false);  
    const isShowModal = vueRef(false);
    const currentPage = vueRef(1);
    const itemsPerPage = 8;
    
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

    const handleSelectSexChange = (selectedValue) => {
      contactInfo.selectSex = selectedValue;
      console.log(contactInfo.selectSex);
    };

    const handleDaysChange = (selectedValue) => {
      contactInfo.days = selectedValue;
      console.log(contactInfo.days);
    };

    const handleSelectTimeChange = (selectedValue) => {
      contactInfo.select_time = selectedValue;
      console.log(contactInfo.select_time.value);
    };

    const detail = (id) => {
      sessionStorage.setItem('student_id', id)
    }
  
    
    const contactInfo = reactive({
        student_id: '',
        student_name: '',
        selectSex: '',
        birthdate: '',
        identity_document: '',
        address: '',
        social_status: '',
        phone_number: '',
        course_name: '',
        start_date: '',
        duration: '',
        end_date: '',
        course_price: '',
        listener_status: '',
        contract: '',
        teacher: '',
        group: '',
        days: '',
        select_time: '',
        bootcamp: '',
        sertificate_status: '',
        sertificate: '',
        employment: '',
        course_studentPhoto: ''
    })
    
  const toggleModal = () => {
    if(modal.value){
      isUpdate.value = false;
    Object.keys(contactInfo).forEach(key => contactInfo[key] = '');
    }
    modal.value = !modal.value;
  };
    
  const getlist = () => {
    courseStudent.list().then((res)=>{
      store.state.list = res.data    
    }).catch((error)=>{
        console.log(error.message);
      })
  }
    
    const addContact=(evet)=>{
        evet.preventDefault();
        const contact = { ...contactInfo, course_studentPhoto: imageUrl.value}
          
        console.log('Payload:', contact);

        courseStudent.create(contact).then((res)=>{
            if(res.status === 201){
                Object.keys(contactInfo).forEach(key => contactInfo[key] = '');
                imageUrl.value = '';
                toggleModal();
                getlist();
            }
        }).catch((error)=>{
          console.log(error.message);
          console.log('Response Data:', error.response.data);
        })
  }

  const removeContact = (id) => {
    
      courseStudent.remove(id).then((res)=>{
          if(res.status == 200){
              getlist();
          }
      }).catch((error)=>{
          console.log(error);
      })
  }
    // =============================================================
    const handleFileChange = (e) => {
          file.value = e.target.files[0];
      };
  
    const uploadImage = async () => {
      if (file.value) {
          try {
          console.log(file.value);
          const storageRef = firebaseRef(storage, 'students/' + file.value.name);
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
        getlist()
    })

    const totalPages = computed(() => {
    return Math.ceil(computedList.value.length / itemsPerPage);
  });

  const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return Array.isArray(computedList.value) ? computedList.value.slice(start, end) : [];
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
  