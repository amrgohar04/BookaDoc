                              
                              
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

      
      card.onclick = () => {
        window.location.href = spec.link;
      };
      
      container.appendChild(card);
    });
  



  //fotter

  function buildFooter() {
  const finish = document.getElementById("finish"); 

  //part1(image)
  let imageFooter = document.createElement('div');
  imageFooter.className = 'image-fotter';

  let content = document.createElement('div');
  content.className = 'content';

  let p1 = document.createElement('p');
  p1.textContent = 'We exist for you';
  let h2 = document.createElement('h2');
  h2.textContent = 'Because we care for you';
  let p2 = document.createElement('p');
  p2.textContent = 'Now enjoy our health care services on our app';

  content.appendChild(p1);
  content.appendChild(h2);
  content.appendChild(p2);

  let downloadButtons = document.createElement('div');
  downloadButtons.className = 'download-buttons';

  let AppStore = document.createElement('a');
  AppStore.href = '#';
  AppStore.className = 'download-btn';
  AppStore.innerHTML = '<i class="fa-brands fa-apple"></i> App Store';

  const GooglePlay = document.createElement('a');
  GooglePlay.href = '#';
  GooglePlay.className = 'download-btn';
  GooglePlay.innerHTML = '<i class="fa-brands fa-google-play"></i> Google Play';

  downloadButtons.appendChild(AppStore);
  downloadButtons.appendChild(GooglePlay);

  imageFooter.appendChild(content);
  imageFooter.appendChild(downloadButtons);

  //part2(footer)
  let footer = document.createElement('footer');
  footer.className = 'fotter';

  let logo = document.createElement('img');
  logo.className = 'logofotter';
  logo.src = './images/logo.png';

  let desc = document.createElement('p');
  desc.textContent = 'Your easiest way to book appointments with trusted doctors across all specialties';

  let contactTitle = document.createElement('p');
  contactTitle.textContent = 'Contact us:';

  let numphone = document.createElement('div');
  numphone.className = 'numphone';
  numphone.innerHTML = '<i class="fa-solid fa-phone"></i> <a href="tel:+201000000000">+20 100 000 0000</a>';

  let email = document.createElement('div');
  email.className = 'email';
  email.innerHTML = '<i class="fa-regular fa-envelope"></i> <a href="mailto:info@minivezeeta.com">info@minivezeeta.com</a>';


  let comunication = document.createElement('div');
  comunication.className = 'comunication';

  let socialText = document.createElement('div');
  socialText.className = 'socialcomunication';
  socialText.innerHTML = 'Follow us: ' +
    '<a href="https://facebook.com" target="_blank" rel="noopener">Facebook</a> <span>·</span> ' +
    '<a href="https://twitter.com" target="_blank" rel="noopener">Twitter</a> <span>·</span> ' +
    '<a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a>';

  let socialIcons = document.createElement('div');
  socialIcons.className = 'iconssocialcomunication';
  socialIcons.innerHTML =
    '<a href="https://facebook.com" target="_blank" rel="noopener"><i class="fa-brands fa-facebook"></i></a>' +
    '<a href="https://twitter.com" target="_blank" rel="noopener"><i class="fa-brands fa-twitter"></i></a>' +
    '<a href="https://instagram.com" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i></a>';

  comunication.appendChild(socialText);
  comunication.appendChild(socialIcons);
  

  footer.appendChild(logo);
  footer.appendChild(desc);
  footer.appendChild(contactTitle);
  footer.appendChild(numphone);
  footer.appendChild(email);
  footer.appendChild(comunication);

  

  finish.appendChild(imageFooter);
  finish.appendChild(footer);
}


buildFooter();

