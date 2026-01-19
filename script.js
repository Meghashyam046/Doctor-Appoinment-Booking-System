const doctors = [{
        name: "Dr. Rohan Mehta",
        specialty: "Cardiologist",
        fee: 800,
        img: "https://media.istockphoto.com/photos/portrait-of-a-indian-young-doctor-picture-id501700790?k=6&m=501700790&s=612x612&w=0&h=8eY9OR9hZ552_VDLetvKeMKerMkdlVVgNSrByAN8MTk="
    },
    {
        name: "Dr. Sameer Khanna",
        specialty: "Dermatologist",
        fee: 600,
        img: "https://img.freepik.com/premium-photo/smiling-middleaged-indian-doctor-standing-medical-uniform-against-hospital-backgroundcreated-with-generative-ai-technology_132358-14444.jpg"
    },
    {
        name: "Dr. Neha Gupta",
        specialty: "Pediatrician",
        fee: 500,
        img: "https://img.freepik.com/free-photo/friendly-smiling-female-indian-doctor_93675-49035.jpg?size=626&ext=jpg"
    },
    {
        name: "Dr. Arjun Singh",
        specialty: "Neurologist",
        fee: 1000,
        img: "https://img.freepik.com/premium-photo/portrait-young-indian-doctor-with-stethoscope-white-background_900706-27645.jpg?w=2000"
    },
    {
        name: "Dr. Priya Sharma",
        specialty: "Gynecologist",
        fee: 700,
        img: "https://t4.ftcdn.net/jpg/03/20/74/45/360_F_320744517_TaGkT7aRlqqWdfGUuzRKDABtFEoN5CiO.jpg"
    },
    {
        name: "Dr. Vivek Nair",
        specialty: "Orthopedic",
        fee: 900,
        img: "https://media.istockphoto.com/id/1437865571/photo/smiling-indian-doctor-standing-in-hallway-of-modern-hospital-against-background-of-working.jpg?s=170667a&w=0&k=20&c=uho4_6AnDjRFadiePWrz2tdg7gcbCLVboQXsvT0O3-c="
    },
    {
        name: "Dr. Anil Kapoor",
        specialty: "General Physician",
        fee: 400,
        img: "https://residentsmedical.com/wp-content/uploads/2022/12/picture-of-indian-doctor-behind-indian-and-american-flag-standing-proud.jpg"
    },
    {
        name: "Dr. Sneha Reddy",
        specialty: "Ophthalmologist",
        fee: 650,
        img: "https://img.freepik.com/premium-photo/indian-female-doctor-portrait-south-indian-young-lady-doctor-holding-stethoscope-hand_527904-1841.jpg?w=996"
    },
    {
        name: "Dr. Karan Malhotra",
        specialty: "ENT Specialist",
        fee: 550,
        img: "https://img.freepik.com/premium-photo/portrait-young-handsome-indian-man-doctor-white_251136-79251.jpg"
    },
    {
        name: "Dr. Aditi Deshmukh",
        specialty: "Dentist",
        fee: 500,
        img: "https://www.internationalinsurance.com/wp-content/uploads/2021/04/Indian-doctor-at-desk-scaled.jpg"
    }
];

const doctorList = document.getElementById("doctorList");
const searchInput = document.getElementById("searchInput");
const modal = document.getElementById("appointmentModal");
const appointmentForm = document.getElementById("appointmentForm");
const confirmation = document.getElementById("confirmation");
const confirmMessage = document.getElementById("confirmMessage");

let selectedDoctor = null;
let selectedFee = 0;

// Render doctors
function renderDoctors(filter = "") {
    doctorList.innerHTML = "";
    doctors
        .filter(doc => doc.name.toLowerCase().includes(filter.toLowerCase()) ||
            doc.specialty.toLowerCase().includes(filter.toLowerCase()))
        .forEach(doc => {
            const card = document.createElement("div");
            card.className = "doctor-card";
            card.innerHTML = `
        <img src="${doc.img}" alt="${doc.name}">
        <h3>${doc.name}</h3>
        <p>${doc.specialty}</p>
        <p class="fee">₹${doc.fee}</p>
        <button onclick="bookAppointment('${doc.name}', ${doc.fee})">Book Appointment</button>
      `;
            doctorList.appendChild(card);
        });
}

// Search functionality
searchInput.addEventListener("input", e => {
    renderDoctors(e.target.value);
});

// Open booking modal
function bookAppointment(doctorName, fee) {
    selectedDoctor = doctorName;
    selectedFee = fee;
    modal.style.display = "flex";
}

// Close modal
function closeModal() {
    modal.style.display = "none";
}

// Handle form submission
appointmentForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("patientName").value;
    const email = document.getElementById("patientEmail").value;
    const date = document.getElementById("appointmentDate").value;
    const time = document.getElementById("appointmentTime").value;

    confirmMessage.textContent =
        `${name}, your appointment with ${selectedDoctor} is confirmed on ${date} at ${time}. 
    Consultation Fee: ₹${selectedFee}. We’ll contact you at ${email}.`;

    modal.style.display = "none";
    confirmation.style.display = "block";
});

// Close confirmation
function closeConfirmation() {
    confirmation.style.display = "none";
}

// Initial render
renderDoctors();
