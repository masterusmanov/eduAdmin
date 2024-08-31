    const length = localStorage.getItem("length");
    const cor_stud_length = localStorage.getItem("cor_stud_length")    


export const Statistika = [
    {
      id: 1,
      icon: "fas fa-chalkboard-teacher",
      title: "Umumiy kurslar soni",
      num: length + " ta",
    },
    {
      id: 2,
      icon: "fas fa-user-graduate",
      title: "Kurs foydalanuvchilari",
      num: length + " ta",
    },
    {
      id: 3,
      icon: "	fas fa-user-friends",
      title: "Web sahifa foydalanuvchilari",
      num: length + " ta",
    },
    {
      id: 4,
      icon: "fas fa-graduation-cap",
      title: "Offline kurs o'quvchilari",
      num: cor_stud_length + " ta",
    }
  ]