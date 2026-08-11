const whyUs = [
    {image: "images/WhyUS-icon-1.png",
        text: "Premium Beans"
    },
    {image: "images/WhyUS-icon.png",
        text: "Fresh Pastries"
    },
    {image: "images/WhyUS-icon-2.png",
        text: "Free Wifi"
    },
    {image: "images/WhyUS-icon-3.png",
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