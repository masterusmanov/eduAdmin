<template>
    <div>
       <div class="flex mt-[50px] gap-6">
           <div class="px-5 w-full ">
                <div class="flex justify-center gap-[100px]">
                    <div class="">
                        <img :src="computedList.course_studentPhoto" alt="human" class="w-[150px] border border-black p-1 mx-auto">
                        <h1 class="text-[18px] font-[700] text-center my-[10px] m-5">{{computedList.student_name}}</h1>
                    </div>
                    <div class="grid gap-6">
                        <div>
                            <table class="w-full text-md">
                                <thead class="text-sm text-white font-bold uppercase bg-gray-500">
                                    <tr class="">
                                        <th scope="col" class="px-4 py-3 text-center border border-white">Tug'ilgan sanasi</th>
                                        <th scope="col" class="px-4 py-3 text-center border border-white">Shaxsni tasdiqlovchi hujjat <br> (yoki ota-onasi)</th>
                                        <th scope="col" class="px-4 py-3 text-center border border-white">Manzili</th>
                                        <th scope="col" class="px-4 py-3 text-center border border-white">Telefon raqami</th>
                                        <th scope="col" class="px-4 py-3 text-center border border-white">Jinsi</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-gray-100">
                                    <tr class="border-b dark:border-gray-700">
                                        <td class="px-4 py-3 text-center">{{computedList.birthdate}}</td>
                                        <td class="px-4 py-3 text-center">{{computedList.identity_document}}</td>
                                        <td class="px-4 py-3 text-center">{{computedList.address}}</td>
                                        <td class="px-4 py-3 text-center">{{computedList.phone_number}}</td>
                                        <td class="px-4 py-3 text-center">{{computedList.selectSex}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <table class="w-full text-md">
                                <thead class="text-sm text-white font-bold uppercase bg-gray-500">
                                    <tr class="">
                                        <th scope="col" class="px-4 py-3 text-center border border-white">Tinglovchini ijtimoiy statusi</th>
                                        <th scope="col" class="px-4 py-3 text-center border border-white">Kurs nomi</th>
                                        <th scope="col" class="px-4 py-3 text-center border border-white">Boshlanish sanasi</th>
                                        <th scope="col" class="px-4 py-3 text-center border border-white">Davomiyligi</th>
                                        <th scope="col" class="px-4 py-3 text-center border border-white">Tugash sanasi</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-gray-100">
                                    <tr class="border-b dark:border-gray-700">
                                        <td class="px-4 py-3 text-center">{{computedList.social_status}}</td>
                                        <td class="px-4 py-3 text-center">{{computedList.course_name}}</td>
                                        <td class="px-4 py-3 text-center">{{computedList.start_date}}</td>
                                        <td class="px-4 py-3 text-center">{{computedList.duration}}</td>
                                        <td class="px-4 py-3 text-center">{{computedList.end_date}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
           </div>
       </div>
       <div class="my-[50px]">
            <table class="w-full text-md">
                <thead class="text-sm text-white font-bold uppercase bg-gray-500">
                    <tr class="">
                        <th scope="col" class="px-4 py-3 text-center border border-white">Kurs narxi</th>
                        <th scope="col" class="px-4 py-3 text-center border border-white">O'qituvchi</th>
                        <th scope="col" class="px-4 py-3 text-center border border-white">Shartnoma raqami va sanasi</th>
                        <th scope="col" class="px-4 py-3 text-center border border-white">Tinglovchi statusi</th>
                    </tr>
                </thead>
                <tbody class="bg-gray-100">
                    <tr class="border-b dark:border-gray-700">
                        <td class="px-4 py-3 text-center">{{computedList.course_price}}</td>
                        <td class="px-4 py-3 text-center">{{computedList.teacher}}</td>
                        <td class="px-4 py-3 text-center">{{computedList.contract}}</td>
                        <td class="px-4 py-3 text-center">{{computedList.listener_status}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="my-[50px]">
            <table class="w-full text-md">
                <thead class="text-sm text-white font-bold uppercase bg-gray-500">
                    <tr class="">
                        <th scope="col" class="px-4 py-3 text-center border border-white">Guruhi</th>
                        <th scope="col" class="px-4 py-3 text-center border border-white">Kuni</th>
                        <th scope="col" class="px-4 py-3 text-center border border-white">Vaqti</th>
                        <th scope="col" class="px-4 py-3 text-center border border-white">Qaysi kursga o'tdi</th>
                        <th scope="col" class="px-4 py-3 text-center border border-white">Sertifikat statusi</th>
                        <th scope="col" class="px-4 py-3 text-center border border-white">Sertifikat No. va sanasi</th>
                        <th scope="col" class="px-4 py-3 text-center border border-white">Ish bilan ta'minlanish</th>
                    </tr>
                </thead>
                <tbody class="bg-gray-100">
                    <tr class="border-b dark:border-gray-700">
                        <td class="px-4 py-3 text-center">{{computedList.group}}</td>
                        <td class="px-4 py-3 text-center">{{computedList.days}}</td>
                        <td class="px-4 py-3 text-center">{{computedList.select_time}}</td>
                        <td class="px-4 py-3 text-center">{{computedList.bootcamp}}</td>
                        <td class="px-4 py-3 text-center">{{computedList.sertificate_status}}</td>
                        <td class="px-4 py-3 text-center">{{computedList.sertificate}}</td>
                        <td class="px-4 py-3 text-center">{{computedList.employment}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <router-link to="/course_student" class="bg-[#3a5327] py-2 px-4 font-bold text-white rounded-lg float-right mx-[10px] hover:bg-[#314125]">Orqaga</router-link>
            <button @click="openModal" class="bg-red-400 py-2 px-4 font-bold text-white rounded-lg float-right mx-[10px] hover:bg-red-600">O'quvchi ma'lumotini yangilash</button>
            <button  @click="toggleModal" class="bg-[#77BF44] py-2 px-4 font-bold text-white rounded-lg float-right hover:bg-[#3a5327] flex items-center gap-3">Chop etish <i class='bx bx-printer'></i></button>
        </div>
        
        <!-- Modal -->
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
                   <div class="flex mt-[50px] gap-6">
           <div class="px-5 w-full ">
                <div class="flex justify-center gap-[100px]">
                    <div class="">
                        <img :src="computedList.course_studentPhoto" alt="human" class="w-[150px] border border-black p-1 mx-auto">
                        <h1 class="text-[18px] font-[700] text-center my-[10px] m-5">{{computedList.student_name}}</h1>
                    </div>
                    <div class="grid gap-6">
                        <div>
                            <table class="w-full text-md">
                                <thead class="text-sm text-white font-bold uppercase bg-gray-500">
                                    <tr class="">
                                        <th scope="col" class="px-4 py-3 text-center border border-white">Tug'ilgan sanasi</th>
                                        <th scope="col" class="px-4 py-3 text-center border border-white">Shaxsni tasdiqlovchi hujjat <br> (yoki ota-onasi)</th>
                                        <th scope="col" class="px-4 py-3 text-center border border-white">Manzili</th>
                                        <th scope="col" class="px-4 py-3 text-center border border-white">Telefon raqami</th>
                                        <th scope="col" class="px-4 py-3 text-center border border-white">Jinsi</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-gray-100">
                                    <tr class="border-b dark:border-gray-700">
                                        <td class="px-4 py-3 text-center">{{computedList.birthdate}}</td>
                                        <td class="px-4 py-3 text-center">{{computedList.identity_document}}</td>
                                        <td class="px-4 py-3 text-center">{{computedList.address}}</td>
                                        <td class="px-4 py-3 text-center">{{computedList.phone_number}}</td>
                                        <td class="px-4 py-3 text-center">{{computedList.selectSex}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <table class="w-full text-md">
                                <thead class="text-sm text-white font-bold uppercase bg-gray-500">
                                    <tr class="">
                                        <th scope="col" class="px-4 py-3 text-center border border-white">Tinglovchini ijtimoiy statusi</th>
                                        <th scope="col" class="px-4 py-3 text-center border border-white">Kurs nomi</th>
                                        <th scope="col" class="px-4 py-3 text-center border border-white">Boshlanish sanasi</th>
                                        <th scope="col" class="px-4 py-3 text-center border border-white">Davomiyligi</th>
                                        <th scope="col" class="px-4 py-3 text-center border border-white">Tugash sanasi</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-gray-100">
                                    <tr class="border-b dark:border-gray-700">
                                        <td class="px-4 py-3 text-center">{{computedList.social_status}}</td>
                                        <td class="px-4 py-3 text-center">{{computedList.course_name}}</td>
                                        <td class="px-4 py-3 text-center">{{computedList.start_date}}</td>
                                        <td class="px-4 py-3 text-center">{{computedList.duration}}</td>
                                        <td class="px-4 py-3 text-center">{{computedList.end_date}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
           </div>
       </div>
       <div class="my-[25px]">
            <table class="w-full text-md">
                <thead class="text-sm text-white font-bold uppercase bg-gray-500">
                    <tr class="">
                        <th scope="col" class="px-4 py-3 text-center border border-white">Kurs narxi</th>
                        <th scope="col" class="px-4 py-3 text-center border border-white">O'qituvchi</th>
                        <th scope="col" class="px-4 py-3 text-center border border-white">Shartnoma raqami va sanasi</th>
                        <th scope="col" class="px-4 py-3 text-center border border-white">Tinglovchi statusi</th>
                    </tr>
                </thead>
                <tbody class="bg-gray-100">
                    <tr class="border-b dark:border-gray-700">
                        <td class="px-4 py-3 text-center">{{computedList.course_price}}</td>
                        <td class="px-4 py-3 text-center">{{computedList.teacher}}</td>
                        <td class="px-4 py-3 text-center">{{computedList.contract}}</td>
                        <td class="px-4 py-3 text-center">{{computedList.listener_status}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="my-[25px]">
            <table class="w-full text-md">
                <thead class="text-sm text-white font-bold uppercase bg-gray-500">
                    <tr class="">
                        <th scope="col" class="px-4 py-3 text-center border border-white">Guruhi</th>
                        <th scope="col" class="px-4 py-3 text-center border border-white">Kuni</th>
                        <th scope="col" class="px-4 py-3 text-center border border-white">Vaqti</th>
                        <th scope="col" class="px-4 py-3 text-center border border-white">Qaysi kursga o'tdi</th>
                        <th scope="col" class="px-4 py-3 text-center border border-white">Sertifikat statusi</th>
                        <th scope="col" class="px-4 py-3 text-center border border-white">Sertifikat No. va sanasi</th>
                        <th scope="col" class="px-4 py-3 text-center border border-white">Ish bilan ta'minlanish</th>
                    </tr>
                </thead>
                <tbody class="bg-gray-100">
                    <tr class="border-b dark:border-gray-700">
                        <td class="px-4 py-3 text-center">{{computedList.group}}</td>
                        <td class="px-4 py-3 text-center">{{computedList.days}}</td>
                        <td class="px-4 py-3 text-center">{{computedList.select_time}}</td>
                        <td class="px-4 py-3 text-center">{{computedList.bootcamp}}</td>
                        <td class="px-4 py-3 text-center">{{computedList.sertificate_status}}</td>
                        <td class="px-4 py-3 text-center">{{computedList.sertificate}}</td>
                        <td class="px-4 py-3 text-center">{{computedList.employment}}</td>
                    </tr>
                </tbody>
            </table>
            <div class="py-5">
                <button onclick="window.print()" class="bg-[#77BF44] py-2 px-4 font-bold text-white rounded-lg float-right hover:bg-[#77BF24]"><i class='bx bx-printer text-[22px]'></i></button>
                <button @click='toggleModal' class="bg-red-400 py-2 px-4 font-bold text-white rounded-lg float-right mx-[10px] hover:bg-red-600">Yopish</button>
            </div>              
        </div>
            </div>
        </div>
    </div>
<!-- ======================== Modal =================================== -->
        <div v-if="isOpen" class="overflow-y-auto flex  bg-[rgba(0,0,0,0.4)] overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full" @click="closeModal">
            <div class="relative w-[550px] p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5" @click.stop>
                <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                    <h3 class="text-[24px] font-semibold text-gray-900 dark:text-white">
                        <span>O'quvchi haqidagi malumotlarni yangilash</span>
                    </h3>
                    <button @click="closeModal" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <form  @submit.prevent="modifyContact($event)">
                    <div class="grid gap-4 mb-4 sm:grid-cols-1">
                        <div class="flex justify-between gap-6">
                            <div class="">
                                <div class="flex gap-6 mt-6">
                                    <div>
                                        <label for="teacher" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">O'qituvchi</label>
                                        <input v-model="computedList.teacher" type="text" name="teacher" id="teacher" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-[280px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="O'qituvchi F.I.O" required="">
                                    </div>
                                    <div>
                                         <label for="phone_number" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Telefon raqami</label>
                                        <input v-model="computedList.phone_number" type="phone" name="phone_number" id="phone_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Telefon raqami" required="">
                                    </div>
                                </div> 
                                <div class="flex gap-6 mt-6">
                                    <div class="">
                                        <label for="course_price" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Bir kurs narxi</label>
                                        <input v-model="computedList.course_price" type="text" name="course_price" id="course_price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bir kurs narxi" required="">
                                    </div>
                                    <div class="">
                                        <label for="listener_status" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Tinglovchi statusi</label>
                                        <input v-model="computedList.listener_status" type="text" name="listener_status" id="listener_status" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tinglovchi statusi" required="">
                                    </div>
                                </div>
                                <div class="flex gap-6 mt-6">
                                    <div>
                                        <label for="group" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Guruh</label>
                                        <input v-model="computedList.group" type="text" name="group" id="group" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Guruh" required="">
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
                                <div class="grid gap-6 mt-6">
                                    <div class="mt-3 flex items-center justify-between">
                                        <div>
                                            <label for="bootcamp" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Qaysi kursga o'tdi</label>
                                            <input v-model="computedList.bootcamp" type="text" name="bootcamp" id="bootcamp" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-[310px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Qaysi kursga o'tdi" required="">
                                        </div>
                                        <div>
                                            <label for="sertificate_status" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Sertifikat statusi</label>
                                            <input v-model="computedList.sertificate_status" type="text" name="sertificate_status" id="sertificate_status" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sertifikat statusi" required="">
                                        </div>
                                </div>
                                <div class="mt-3 flex items-center gap-4">
                                  <div>
                                     <label for="sertificate" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Sertifikat № va sana</label>
                                    <input v-model="computedList.sertificate" type="text" name="sertificate" id="sertificate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-[310px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sertifikat № va sana" required="">
                                  </div>
                                  <div>
                                    <label for="employment" class="block mb-2 text-[16px] font-medium text-gray-900 dark:text-white">Ish bilan ta'minlanish</label>
                                    <input v-model="computedList.employment" type="text" name="employment" id="employment" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ish bilan ta'minlanish" required="">
                                  </div>                                  
                                </div>
                                </div>
                            </div>
                        </div>                      
                    </div>
                    <div class="flex justify-end items-center">
                        <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Yangilash
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {ref as vueRef, reactive, computed, onMounted} from 'vue';
    import { courseStudentStore } from '../../stores/CourseStudentStore/courseStudentStore';
    import { courseStudent } from '../../services/CourseStudent/index';
    import { useRouter } from 'vue-router'

    const modal = vueRef(false);  
    const isOpen = vueRef(false);
    const inputData = vueRef('');
    const router = useRouter();
    const store = courseStudentStore();
    const isUpdate = vueRef(false);
    let computedList = vueRef([]);

    const toggleModal = () => {
        modal.value = !modal.value
    }

    const openModal = () => {
        isOpen.value = true;
    };

    const closeModal = () => {
        isOpen.value = false;
    };

    const handleDaysChange = (selectedValue) => {
      contactInfo.days = selectedValue;
      console.log(contactInfo.days);
    };

    const handleSelectTimeChange = (selectedValue) => {
      contactInfo.select_time = selectedValue;
      console.log(contactInfo.select_time.value);
    };

    const contactInfo = reactive({
        phone_number: '',
        course_price: '',
        listener_status: '',
        teacher: '',
        group: '',
        days: '',
        select_time: '',    
        bootcamp: '',
        sertificate_status: '',
        sertificate: '',
        employment: '',
        course_studentPhoto: ''
    });

   

     const getList = () => {
    const id = sessionStorage.getItem('student_id'); 
    if (id) {
        courseStudent.listId(id)
            .then((res) => {
                store.state.list = res.data;
                console.log(store.state.list);
            })
            .catch((error) => {
                console.log(error.message);
            });
    } else {
        console.error("No student ID found in sessionStorage");
    }
};


     const modifyContact = (event) => {
        event.preventDefault();
        
        const student_id = sessionStorage.getItem('student_id');
        if (!student_id) {
            toast.error('Student ID not found!');
            return;
        }

        const contact = { ...contactInfo };
        console.log('Modified Contact:', contact);

        courseStudent.update(student_id, contact).then((res) => {
            if (res.status === 200) {
                toast.success('Successfully updated contact!', { autoClose: 1000, theme: 'dark', pauseOnHover: false });
                
                Object.keys(contactInfo).forEach(key => contactInfo[key] = '');
                isUpdate.value = false;
                getList();
                toggleModal();
            }
        }).catch((error) => {
            toast.error(error.message);
            console.error('Error updating contact:', error);
        });
    }
    
    computedList = computed(() => {
        return store.state.list;
    })

    onMounted(() => {
        getList()
    })
</script>

<style lang="scss" scoped>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: grid;
        justify-content: center;
        align-items: center;
        }

        .modal-content {
        background-color: white;
        padding: 20px;
        border-radius: 5px;
    }
</style>