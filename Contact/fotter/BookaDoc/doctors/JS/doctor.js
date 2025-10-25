// ------------------------------

// بنجيب العنصر الرئيسي من الصفحة (المفروض يكون فيه <div id="main"></div> في HTML)
let main = document.getElementById("main");

let primaryColor = "#008c95";

// نضيف شوية تنسيقات أساسية للعنصر الرئيسي
main.style.padding = "0";
main.style.margin = "0";  
main.style.height = "100vh";            // ارتفاع الصفحة بالكامل (100% من ارتفاع الشاشة)
main.style.fontWeight = "'Poppins', sans-serif";
// -------------------------------
// إنشاء قسم البحث الرئيسي (اللي فوق الصفحة)
let search = document.createElement("div");
main.appendChild(search);               // نضيفه داخل العنصر الرئيسي

// تنسيق صندوق البحث
search.style.width = "90%";
search.style.height = "20vh";
search.style.margin = "auto";           // علشان يكون في النص
search.style.display = "flex";
search.style.flexDirection = "column";
search.style.gap = "10%";
search.style.justifyContent = "flex-start";
// إنشاء div داخلي جوا search
let searchDiv = document.createElement("div");
search.appendChild(searchDiv);

// تنسيقات للـ div الداخلي
searchDiv.style.width = "100%";
searchDiv.style.height = "60%";
searchDiv.style.display = "flex";        // ترتيب أفقي للعناصر
searchDiv.style.gap = "10vw";            // مسافة بين العناصر
searchDiv.style.alignItems = "center";   // محاذاة رأسية
searchDiv.style.justifyContent = "space-between"; // توزيع العناصر بالتساوي

// مصفوفات لتخزين العناوين والمدخلات (inputs)
let heading = [];

// عمل حلقة لإنشاء صندوقين (واحد للعنوان والإنبوت)
for (let i = 0; i < 2; i++) {
    let inputDiv = document.createElement("div");  // الصندوق الأحمر لكل عنوان وإنبوت
    searchDiv.appendChild(inputDiv);
    inputDiv.style.width = "50%";
    inputDiv.style.height = "100%";

    // إنشاء العنوان (h3)
    let searchHeading = document.createElement("h3");
    heading.push(searchHeading);
    inputDiv.appendChild(searchHeading);
    searchHeading.style.fontSize = "15px";
    searchHeading.style.fontWeight = "700";
    searchHeading.style.color = "#2D2D32";
    // إنشاء input لكل عنوان
    let input = document.createElement("input");
    let select = document.createElement("select");
    // inputDiv.appendChild(input);
    // input.style.width = "90%";
    // input.style.height = "30%";
    if(i==0)
    {
        inputDiv.appendChild(input);
        input.style.width = "90%";
        input.style.height = "40%";
        input.style.border = "1px solid #008c95";
        input.style.borderBottom ="3px solid #008c95";
        input.placeholder = " Search here";
    }
    else {
        inputDiv.appendChild(select);
        select.style.width = "90%";
        select.style.height = "40%"; 
        select.style.border = "none";
        select.style.border = "1px solid #008c95";

        let governorates = ["Cairo","Giza","Alexandria","Aswan","Asyut","Beheira","Beni Suef","Dakahlia","Damietta","Faiyum","Gharbia","Ismailia","Kafr El Sheikh","Luxor","Matruh","Minya","Monufia","New Valley","North Sinai","Port Said","Qalyubia","Qena","Red Sea","Sharqia","Sohag","South Sinai","Suez"];

        // إضافة المحافظات داخل select
        for (let i = 0; i < governorates.length; i++) {
        let opt = document.createElement("option");
        opt.value = governorates[i].toLowerCase().replace(" ", "-");
        opt.text = governorates[i];
        select.appendChild(opt);
        }
    }
}

// تحديد النصوص للعناوين
heading[0].innerText = "Online Doctor Consultation";
heading[1].innerText = "Select Your City";
// heading[0].style.borderBottom

// ----------------------------------------------------
// إنشاء صف الفلاتر (Filter Row) أسفل منطقة البحث
let filterRow = document.createElement("div");
search.appendChild(filterRow);
// let filterIcons = filterRow.querySelectorAll('i');
// filterIcons.style.color = "#008c95";
// تنسيق صف الفلاتر
filterRow.style.height = "30%";
filterRow.style.width = "100%";
filterRow.style.display = "flex";
filterRow.style.gap = "15%";
filterRow.style.alignItems = "center";
filterRow.style.justifyContent = "start";
console.log(filterRow);
let filterItems = [];
let filterItemContent;
// إنشاء عناصر الفلاتر
for (let i = 0; i < 4; i++) {
  let filterItem = document.createElement("p");
  filterRow.appendChild(filterItem);
  filterItemContent = document.createElement("div");
  filterItem.appendChild(filterItemContent);
  filterItems.push(filterItemContent);  // المفروض دي تشتغل عادي
  filterItem.style.width = "fit-content";
  filterItem.style.height = "100%";
  filterItem.style.display = "flex";
  filterItem.style.alignItems = "center";
}
// console.log(filterItems);
filterItems[0].innerHTML = '<i class="fa-solid fa-sliders"  style="color:#008c95;"></i> Sort By : availability'
filterItems[1].innerHTML = 
`
    <input type="checkbox" id="filter1" name="online" name="consulting" value="online">  
    <label for="filter1">Online Consult</label>
`
filterItems[2].innerHTML =
`
    <input type="checkbox" id="filter2" name="online" name="consulting" value="online">  
    <label for="filter2">In-person Consult</label>
`
filterItems[3].innerHTML = ' <i class="fa-solid fa-filter" style="color:#008c95;"></i> <span>  Filter</span> '

// -------------------------------------------------------------------------------------
let between = document.createElement('div');
main.appendChild(between);
between.style.height = "5vh";
// -------------------------------------------------------------------------------------
let doctors = document.createElement("section");
main.appendChild(doctors);
doctors.style.display = "grid";
doctors.style.gridTemplateColumns = "repeat(2,auto)";
doctors.style.alignItems = "space-around";
doctors.style.justifyContent = "space-between";
// doctors.style.backgroundColor = "yellow";
doctors.style.width = "90%";
doctors.style.margin = "auto";
doctors.style.gap = "8vw";
let doctor; 
let doctorNames = [
  "Dr. Ahmed Hassan","Dr. Mohamed Ali","Dr. Sara Mahmoud",  "Dr. Omar Khaled","Dr. Mona Youssef",  "Dr. Hany Ibrahim","Dr. Rania Adel", "Dr. Tamer Fathy","Dr. Dina Samir","Dr. Karim Mostafa","Dr. Nourhan Osama", "Dr. Ehab Nabil","Dr. Heba El-Sayed","Dr. Sherif Hossam","Dr. Aya Ibrahim","Dr. Mahmoud Tarek","Dr. Layla Mohamed","Dr. Walid Reda","Dr. Mariam Nasser","Dr. Ahmed Fathi","Dr. Yara Hisham","Dr. Samir Gamal","Dr. Reem Adel","Dr. Khaled Saad","Dr. Farah Magdy","Dr. Hossam Eldin","Dr. Nada Hassan","Dr. Mostafa Emad","Dr. Jana Khalil","Dr. Ali Hussein","Dr. Passant Ahmed","Dr. Moataz Youssef","Dr. Salma Reda","Dr. Youssef Nader","Dr. Esraa Tamer","Dr. Basel Fathy","Dr. Mariam Samy","Dr. Nader Khaled","Dr. Hagar Adel","Dr. Islam Hassan","Dr. Rawan Osama","Dr. Mahmoud Ezz","Dr. Nour Mohamed","Dr. Seif Tarek","Dr. Laila Fathi","Dr. Kareem Hany","Dr. Yasmine Ali","Dr. Adham Mostafa","Dr. Rahma Youssef","Dr. Malak Ibrahim","Dr. Ayman Said"
];
let specialties = [
  "Ophthalmology","Surgery","Dermatology","Orthopedics","Dermatology","Surgery","Ophthalmology","Orthopedics","Surgery","Dermatology","Ophthalmology","Orthopedics","Ophthalmology","Surgery","Dermatology","Orthopedics","Dermatology","Surgery","Orthopedics","Ophthalmology","Dermatology","Surgery","Orthopedics","Dermatology","Ophthalmology","Surgery","Orthopedics","Ophthalmology","Dermatology","Orthopedics","Surgery","Dermatology","Ophthalmology","Surgery","Orthopedics","Dermatology","Ophthalmology","Orthopedics","Dermatology","Surgery","Ophthalmology","Orthopedics","Dermatology","Ophthalmology","Surgery","Orthopedics","Dermatology","Surgery","Ophthalmology","Orthopedics","Dermatology"
];
const randomNumbers = [];
for (let i = 0; i < 50; i++) {
  randomNumbers.push(Math.floor(Math.random() * 10) + 1);
}
console.log(randomNumbers);
for(let i = 0;i<50;i++)
{
    let doctor = document.createElement('div');
    doctors.appendChild(doctor);
    doctor.style.width = "40vw";
    doctor.style.height = "50vh";
    // doctor.style.backgroundColor = "yellow";
    doctor.style.border = "2px solid black";
    doctor.style.display = "flex";
    doctor.style.flexDirection = "column";
    doctor.style.gap = "4%";
    doctor.style.border = "0";
    doctor.style.borderTop = "3px solid #008c95";
    let availableDiv = document.createElement('div');
    doctor.appendChild(availableDiv);
    availableDiv.style.height = "20%";
    availableDiv.style.display = "flex";
    availableDiv.style.alignItems = "center";
    availableDiv.style.justifyContent = "start";
    let available = document.createElement('p');
    availableDiv.appendChild(available);
    available.textContent = "Available in 13 mins";
    available.style.padding = "2vh 1vw";
    available.style.border = "3px solid #008c95";
    available.style.borderEndEndRadius = "4vh";
    available.style.borderStartEndRadius = "4vh";
    available.style.width = "fit-content";
    available.style.backgroundColor = primaryColor;
    available.style.color = "white";
    available.style.letterSpacing = "0.2px";
    
    let details = document.createElement('div');
    doctor.appendChild(details);
    details.style.height = "60%";
    details.style.width = "100%";
    // details.style.backgroundColor = "green";
    details.style.display = "flex";
    details.style.gap = "5%";
    let left = document.createElement('div');
    details.appendChild(left);
    left.style.width = "35%";
    left.style.height = "100%";
    left.style.display = "flex";
    left.style.flexDirection = "column";
    left.style.alignItems = "center";
    left.style.justifyContent = "start";
    left.style.gap = "10%";
    // left.style.backgroundColor = "violet";
    
    let doctorImg = document.createElement('img');
    left.appendChild(doctorImg);
    // doctorImg.style.backgroundColor = "blue";
    doctorImg.style.height = "16vh";
    doctorImg.style.width = "16vh";
    
    let detection = document.createElement('div');
    left.appendChild(detection);
    detection.style.width = "70%";
    detection.style.height = "30%";
    detection.style.backgroundColor = "white";
    detection.style.display = "flex";
    detection.style.alignItems = "center";
    detection.style.justifyContent = "space-around";
    for(let j=0;j<2;j++)
    {
        let detectionMethod = document.createElement('div');
        detection.appendChild(detectionMethod);
        detectionMethod.style.width = "40%";
        detectionMethod.style.height = "90%";
        // detectionMethod.style.backgroundColor = "black";
        detectionMethod.style.textAlign = "center";
        detectionMethod.style.letterSpacing = "0.3px";
        if(j==0)
        {
            detectionMethod.innerHTML =
            `
                <i class="fa-solid fa-video" style="color: #008c95;"></i>
                <p style="color: #008c95; font-size:13px">Video</p>
            `
        }
        else
        {
            detectionMethod.innerHTML = 
            `
                <i class="fa-solid fa-building" style="color: #008c95;"></i>
                <p style="color: #008c95; font-size:13px">In-person</p>
            `
        }
    }
    let right = document.createElement('div');
    details.appendChild(right);
    right.style.width = "60%";
    right.style.height = "100%";
    // right.style.backgroundColor = "black";
    right.querySelectorAll("p").forEach(p => p.style.color = "#5C5C5F");

    let doctorData = document.createElement('div');
    right.appendChild(doctorData);
    doctorData.style.display = "flex";
    doctorData.style.alignItems = "center";
    doctorData.style.justifyContent = "start";
    doctorData.style.gap = "10%";
    let doctorName = document.createElement('h3');
    doctorData.appendChild(doctorName);
    doctorName.textContent = doctorNames[i];
    doctorName.style.color = "black";
    let doctorRate=document.createElement("div");
    doctorData.appendChild(doctorRate);
    for(let j=0;j<4;j++)
    {
        doctorRate.innerHTML += '<i class="fa-solid fa-star" style="color: #198d0f;"></i>';
    }
    let doctorLevel = document.createElement('div');
    right.appendChild(doctorLevel);
    doctorLevel.style.display = "flex";
    doctorLevel.style.alignItems = "center";
    doctorLevel.style.gap = "25%";
    doctorLevel.style.backgroundColor = "white";
    doctorLevel.style.height = "5vh";
    doctorLevel.style.width = "100%";
    let doctorTitle = document.createElement('p');
    doctorLevel.appendChild(doctorTitle);
    doctorTitle.textContent = specialties[i];
    let doctorExperience = document.createElement('p');
    doctorLevel.appendChild(doctorExperience);
    doctorExperience.textContent =`${randomNumbers[i]} yrs experience`;
    let br = document.createElement('hr');
    br.style.width = "95%";
    br.style.color = "#5C5C5F";
    right.appendChild(br);
    let price = document.createElement('div');
    right.appendChild(price);
    price.textContent = `${randomNumbers[i]*100} EGP`;
    price.style.color = primaryColor;
    price.style.fontWeight = "700";
    let doctorDescription = document.createElement('p');
    right.appendChild(doctorDescription);
    doctorDescription.textContent = "MBBS, MD (Nepal Medical College) General practioner at Medicity Hospital, Bhaisepati";
    // -----------------------
    let appointment = document.createElement('button');
    doctor.appendChild(appointment);
    appointment.style.width = "100%";
    appointment.style.height = "12%";
    appointment.style.textAlign = "center";
    appointment.textContent = "Book Appointment";
    appointment.style.color = "white";
    appointment.style.backgroundColor = primaryColor;
    appointment.style.border = "1px solid #008c95";
    appointment.style.borderRadius = "2vh";
}


















//  192 - 219 - 231 - 235 - 275

