                              
                              
                              // nav
let navbar = document.querySelector(".links");
let bars = document.querySelector(".fa-bars");
let xmark = document.querySelector(".fa-xmark");
let responsnav = document.querySelector(".responnav");

responsnav.addEventListener("click", () => {
  bars.classList.toggle("active");
  xmark.classList.toggle("active");
  navbar.classList.toggle("active");
});


                          //home
let specialties = [
  {
    name: "Surgery",
    desc: "Select preffered doctor and time slot to book an in-clinic or video consultation.",
    icon: "images/surgical-items.png",
    link: "#",
  },

  {
    name: "Ophthalmology",
    desc: "Select preffered doctor and time slot to book an in-clinic or video consultation.",
    icon: "images/6696519.png",
    link: "#",
  },

  {
    name: "Orthopedics",
    desc: "Select preffered doctor and time slot to book an in-clinic or video consultation.",
    icon: "images/2426107.png",
    link: "#",
  },

  {
    name: "Cosmetology",
    desc: "Select preffered doctor and time slot to book an in-clinic or video consultation.",
    icon: "images/8206723.png",
    link:"#"
  },
      ];

    
    const container = document.getElementById("container-spec");

    specialties.forEach(spec => {
      let card = document.createElement("div");
      card.className = "card";

      let title = document.createElement("div");
      title.className = "title";
      title.textContent = spec.name;

      let icons = document.createElement("img");
      icons.className = "icons-desc";
      icons.src = spec.icon ;

      let desc = document.createElement("div");
      desc.className = "desc";
      desc.textContent = spec.desc;

      card.appendChild(title);
      card.appendChild(icons);
      card.appendChild(desc);

      // Click event
      card.onclick = () => {
        window.location.href = spec.link;
      };
      
      container.appendChild(card);
    });
  

