const whyUs = [
    {
        image: "images/WhyUS-icon-1.png",
        text: "Premium Beans"
    },
    {
        image: "images/WhyUS-icon.png",
        text: "Fresh Pastries"
    },
    {
        image: "images/WhyUS-icon-2.png",
        text: "Free Wifi"
    },
    {
        image: "images/WhyUS-icon-3.png",
        text: "Locally Roasted"
    },
];

const track = document.querySelector(".why-us-track");

for (let i = 0; i < whyUs.length * 3; i++) {

    const item = whyUs[i % whyUs.length];

    track.innerHTML += `
        <div class="why-us-item">
            <img src="${item.image}" alt="${item.text}">
            <span>${item.text}</span>
        </div>
    `;
}
const testimonial = [
    {
        name: "Jessica M.",
        message: " The coffee is the best ive ever tasted!",
        rating: 5
    },
    {
        name: "David L.",
        message: "Cozy vibes, great service, and even better coffee",
        rating: 5
    },
    {
        name: "Sarah K.",
        message: "I come here every week. Highly reccommend!",
        rating: 5
    }
]
const testimonialContainer = document.getElementById("testimonial-container")
testimonialContainer.innerHTML = testimonial.map(testimonial => `
    <div class="testimonial-card">
        <p>"${testimonial.message}"</p>
        <h3>${testimonial.name}</h3>
        <span>★★★★★</span>
    </div>
`).join("");

const viewMoreButton = document.querySelectorAll('[data-open-button]')
const closeButton = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

viewMoreButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.openButton)
        openModel(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.our-coffee.active')

    modals.forEach(modal => {
        closeModel(modal)
    })
})

closeButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.our-coffee')
        closeModel(modal)
    })
})

function openModel(modal) {
    if (modal == null) return

    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModel(modal) {
    if (modal == null) return

    modal.classList.remove('active')
    overlay.classList.remove('active')
}
// Hello 