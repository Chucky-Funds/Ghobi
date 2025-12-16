// 1. Sticky Header Animation
        window.addEventListener('scroll', () => {
            const header = document.getElementById('main-header');
            if (window.scrollY > 50) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        });

        // 2. Reveal Sections on Scroll
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const elementVisible = 150;
            
            revealElements.forEach((reveal) => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                }
            });
        };
        window.addEventListener('scroll', revealOnScroll);
        // Trigger once on load
        revealOnScroll();

        // 3. Dynamic Particle Generation
        const particleContainer = document.getElementById('particle-container');
        for (let i = 0; i < 20; i++) {
            let p = document.createElement('div');
            p.classList.add('particle');
            p.style.left = Math.random() * 100 + '%';
            p.style.width = (Math.random() * 3 + 1) + 'px';
            p.style.height = p.style.width;
            p.style.animationDelay = (Math.random() * 5) + 's';
            p.style.animationDuration = (Math.random() * 10 + 10) + 's'; // Slow drift
            particleContainer.appendChild(p);
        }

        // 4. Countdown Timer Logic
        const countdownEl = document.getElementById('countdown');
        let timeInSeconds = 2 * 60 * 60 + 14 * 60 + 45; // 2h 14m 45s

        setInterval(() => {
            timeInSeconds--;
            if (timeInSeconds < 0) timeInSeconds = 86400; // Reset loop
            
            const h = Math.floor(timeInSeconds / 3600);
            const m = Math.floor((timeInSeconds % 3600) / 60);
            const s = Math.floor(timeInSeconds % 60);
            
            countdownEl.innerText = 
                `${h.toString().padStart(2, '0')} : ${m.toString().padStart(2, '0')} : ${s.toString().padStart(2, '0')}`;
        }, 1000);

        // 5. Mobile Nav Responsiveness (Simple toggle logic)
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        if(window.innerWidth <= 768) {
             mobileMenuBtn.style.display = 'block';
        }

        




        // LOcation
        const statesWithLGAs = {
  "Abia": [
    "Aba North","Aba South","Arochukwu","Bende","Ikwuano","Isiala Ngwa North","Isiala Ngwa South",
    "Isuikwuato","Obingwa","Ohafia","Osisioma","Ugwunagbo","Ukwa East","Ukwa West","Umuahia North",
    "Umuahia South","Umu Nneochi"
  ],
  "Adamawa": [
    "Demsa","Fufore","Ganye","Girei","Gombi","Guyuk","Hong","Jada","Lamurde","Madagali","Maiha",
    "Mayo-Belwa","Michika","Mubi North","Mubi South","Numan","Shelleng","Song","Toungo","Yola North","Yola South"
  ],
  "Akwa Ibom": [
    "Abak","Eastern Obolo","Eket","Esit Eket","Essien Udim","Etim Ekpo","Etinan","Ibeno","Ibesikpo Asutan",
    "Ibiono-Ibom","Ika","Ikono","Ikot Abasi","Ikot Ekpene","Ini","Itu","Mbo","Mkpat-Enin","Nsit-Atai","Nsit-Ibom",
    "Nsit-Ubium","Obot Akara","Okobo","Onna","Oron","Oruk Anam","Udung-Uko","Ukanafun","Uruan","Urue-Offong/Oruko","Uyo"
  ],
  "Anambra": [
    "Aguata","Anambra East","Anambra West","Anaocha","Awka North","Awka South","Ayamelum","Dunukofia","Ekwusigo",
    "Idemili North","Idemili South","Ihiala","Njikoka","Nnewi North","Nnewi South","Ogbaru","Onitsha North","Onitsha South",
    "Orumba North","Orumba South","Oyi"
  ],
  "Bauchi": [
    "Alkaleri","Bauchi","Bogoro","Damban","Darazo","Dass","Gamawa","Ganjuwa","Giade","Itas/Gadau","Jama’are","Katagum",
    "Kirfi","Misau","Ningi","Shira","Tafawa Balewa","Toro","Warji","Zaki"
  ],
  "Bayelsa": [
    "Brass","Ekeremor","Kolokuma/Opokuma","Nembe","Ogbia","Sagbama","Southern Ijaw","Yenagoa"
  ],
  "Benue": [
    "Ado","Agatu","Apa","Buruku","Gboko","Guma","Gwer East","Gwer West","Katsina-Ala","Konshisha","Kwande","Logo",
    "Makurdi","Obi","Ogbadibo","Ohimini","Oju","Okpokwu","Otukpo","Tarka","Ukum","Ushongo","Vandeikya"
  ],
  "Borno": [
    "Abadam","Askira/Uba","Bama","Bayo","Biu","Chibok","Damboa","Dikwa","Gubio","Guzamala","Gwoza","Hawul","Jere",
    "Kaga","Kala/Balge","Konduga","Kukawa","Kwaya Kusar","Mafa","Magumeri","Maiduguri","Marte","Mobbar","Monguno","Ngala","Nganzai","Shani"
  ],
  "Cross River": [
    "Abi","Akamkpa","Akpabuyo","Bakassi","Bekwarra","Biase","Boki","Calabar Municipal","Calabar South","Etung","Ikom",
    "Obanliku","Obubra","Obudu","Odukpani","Ogoja","Yakuur","Yala"
  ],
  "Delta": [
    "Aniocha North","Aniocha South","Bomadi","Burutu","Ethiope East","Ethiope West","Ika North East","Ika South",
    "Isoko North","Isoko South","Ndokwa East","Ndokwa West","Okpe","Oshimili North","Oshimili South","Patani",
    "Sapele","Udu","Ughelli North","Ughelli South","Ukwuani","Uvwie","Warri North","Warri South","Warri South West"
  ],
  "Ebonyi": [
    "Abakaliki","Afikpo North","Afikpo South","Ebonyi","Ezza North","Ezza South","Ikwo","Ishielu","Ivo","Izzi",
    "Ohaozara","Ohaukwu","Onicha"
  ],
  "Edo": [
    "Akoko-Edo","Egor","Esan Central","Esan North-East","Esan South-East","Esan West","Etsako Central","Etsako East",
    "Etsako West","Igueben","Ikpoba-Okha","Oredo","Orhionmwon","Ovia North-East","Ovia South-West","Owan East","Owan West","Uhunmwonde"
  ],
  "Ekiti": [
    "Ado-Ekiti","Efon","Ekiti East","Ekiti South-West","Ekiti West","Emure","Gbonyin","Ido-Osi","Ijero","Ikere","Ikole",
    "Ilejemeje","Irepodun/Ifelodun","Ise/Orun","Moba","Oye"
  ],
  "Enugu": [
    "Aninri","Awgu","Enugu East","Enugu North","Enugu South","Ezeagu","Igbo-Etiti","Igbo-Eze North","Igbo-Eze South",
    "Isi-Uzo","Nkanu East","Nkanu West","Nsukka","Oji River","Udenu","Udi","Uzo-Uwani"
  ],
  "FCT (Abuja)": [
    "Abaji","Bwari","Gwagwalada","Kuje","Kwali","Municipal Area Council"
  ],
  "Gombe": [
    "Akko","Balanga","Billiri","Dukku","FUNAKAY","Gombe","Kaltungo","Kwami","Nafada/Bajoga","Shongom","Yamaltu/Deba"
  ],
  "Imo": [
    "Aboh Mbaise","Ahiazu Mbaise","Ehime Mbano","Ezinihitte","Ideato North","Ideato South","Ihitte/Uboma","Ikeduru",
    "Isiala Mbano","Isu","Mbaitoli","Ngor Okpala","Njaba","Nkwerre","Nwangele","Obowo","Oguta","Ohaji/Egbema","Okigwe",
    "Orlu","Orsu","Oru East","Oru West","Owerri Municipal","Owerri North","Owerri West"
  ],
  "Jigawa": [
    "Auyo","Babura","Biriniwa","Birnin Kudu","Buji","Dutse","Gagarawa","Garki","Gumel","Guri","Gwaram","Gwiwa",
    "Hadejia","Jahun","Kafin Hausa","Kaugama","Kazaure","Kiri Kasama","Kiyawa","Maigatari","Malam Madori","Miga",
    "Roni","Sule Tankarkar","Taura","Yankwashi"
  ],
  "Kaduna": [
    "Birnin Gwari","Chikun","Giwa","Igabi","Ikara","Jaba","Jema’a","Kachia","Kaduna North","Kaduna South","Kagarko",
    "Kajuru","Kaura","Kauru","Kubau","Kudan","Lere","Makarfi","Sabon Gari","Sanga","Soba","Zangon Kataf","Zaria"
  ],
  "Kano": [
    "Ajingi","Albasu","Bagwai","Bebeji","Bichi","Bunkure","Dala","Dambatta","Dawakin Kudu","Dawakin Tofa","Doguwa","Fagge",
    "Gabasawa","Garko","Garun Mallam","Gaya","Gezawa","Gwale","Kabo","Kano Municipal","Karaye","Kibiya","Kiru","Kumbotso",
    "Kunchi","Kura","Madobi","Makoda","Minjibir","Nasarawa","Rano","Rimin Gado","Rogo","Shanono","Sumaila","Takai","Tarauni",
    "Tofa","Tsanyawa","Tudun Wada","Ungogo","Warawa","Wudil"
  ],
  "Katsina": [
    "Bakori","Batagarawa","Batsari","Baure","Bindawa","Charanchi","Dandume","Dan Musa","Daura","Dutsi","Dutsin Ma","Faskari",
    "Funtua","Ingawa","Jibia","Kafur","Kaita","Kankara","Kankia","Katsina","Kurfi","Mani","Mashi","Matazu","Musawa","Rimi",
    "Sabuwa","Safana","Sandamu","Zango"
  ],
  "Kebbi": [
    "Aliero","Arewa Dandi","Argungu","Augie","Bagudo","Birnin Kebbi","Bunza","Dandi","Fakai","Gwandu","Jega","Kalgo",
    "Koko/Besse","Maiyama","Ngaski","Sakaba","Shanga","Suru","Wasagu/Danko","Yauri","Zuru"
  ],
  "Kogi": [
    "Adavi","Ajaokuta","Ankpa","Bassa","Dekina","Ibaji","Idah","Igalamela-Odolu","Ijumu","Kabba/Bunu","Kogi","Lokoja",
    "Mopa-Muro","Ofu","Ogori/Magongo","Okehi","Okene","Olamaboro","Omala","Yagba East","Yagba West"
  ],
  "Kwara": [
    "Asa","Baruten","Edu","Ekiti Kwara","Ifelodun","Ilorin East","Ilorin South","Irepodun","Isin","Kaiama","Moro","Offa",
    "Oke Ero","Oyun","Pategi"
  ],
  "Lagos": [
    "Agege","Ajeromi/Ifelodun","Alimosho","Amuwo-Odofin","Apapa","Badagry","Epe","Eti-Osa","Ibeju-Lekki","Ifako-Ijaiye",
    "Ikeja","Ikorodu","Kosofe","Lagos Island","Lagos Mainland","Mushin","Ojo","Oshodi-Isolo","Shomolu","Surulere"
  ],
  "Nasarawa": [
    "Akwanga","Awe","Doma","Karu","Keana","Keffi","Kokona","Lafia","Nasarawa","Nasarawa Egon","Obi","Toto","Wamba"
  ],
  "Niger": [
    "Agaie","Agwara","Bida","Borgu","Bosso","Chanchaga","Edati","Gbako","Gurara","Katcha","Kontagora","Lapai",
    "Lavun","Magama","Mariga","Mashegu","Mokwa","Moya","Paikoro","Rafi","Rijau","Shiroro","Suleja","Tafa","Wushishi"
  ],
  "Ogun": [
    "Abeokuta North","Abeokuta South","Ado-Odo/Ota","Egbado North","Egbado South","Ewekoro","Ijebu East","Ijebu North",
    "Ijebu North East","Ijebu Ode","Ikenne","Imeko Afon","Ipokia","Odeda","Odogbolu","Ogun Waterside","Remo North","Sagamu",
    "Shagamu","Yewa North"
  ],
  "Ondo": [
    "Akoko North-East","Akoko North-West","Akoko South-East","Akoko South-West","Akure North","Akure South","Ese Odo",
    "Idanre","Ifedore","Ilaje","Ile-Oluji/Okeigbo","Irele","Odigbo","Okitipupa","Ondo East","Ondo West","Ose","Owo"
  ],
  "Osun": [
    "Aiyedire","Atakunmosa East","Atakunmosa West","Ayedaade","Ayedire","Boluwaduro","Boripe","Ede North","Ede South",
    "Egbedore","Ejigbo","Ife Central","Ife East","Ife North","Ife South","Ifedayo","Ifelodun","Ila","Ilesa East","Ilesa West",
    "Irepodun","Irewole","Isokan","Iwo","Obokun","Odo-Otin","Ola-Oluwa","Olorunda","Oriade","Orolu","Osogbo"
  ],
  "Oyo": [
    "Afijio","Akinyele","Atiba","Atisbo","Egbeda","Ibadan North","Ibadan North-East","Ibadan North-West","Ibadan South-East",
    "Ibadan South-West","Ibarapa Central","Ibarapa East","Ibarapa North","Ido","Irepo","Itesiwaju","Iwajowa","Kajola","Lagelu",
    "Ogbomosho North","Ogbomosho South","Ogo Oluwa","Olorunsogo","Oluyole","Orelope","Ori Ire","Oyo East","Oyo West","Saki East",
    "Saki West","Surulere"
  ],
  "Plateau": [
    "Barikin Ladi","Bassa","Bokkos","Jos East","Jos North","Jos South","Kanam","Kanke","Langtang North","Langtang South",
    "Mangu","Mikang","Pankshin","Qua’an Pan","Riyom","Shendam","Wase"
  ],
  "Rivers": [
    "Abua–Odual","Ahoada East","Ahoada West","Akuku-Toru","Andoni","Asari-Toru","Bonny","Degema","Eleme","Emuoha",
    "Etche","Gokana","Ikwerre","Khana","Obio-Akpor","Ogba–Egbema–Ndoni","Ogu–Bolo","Okrika","Omuma","Opobo–Nkoro",
    "Oyigbo","Port Harcourt","Tai","Tide"
  ],
  "Sokoto": [
    "Binji","Bodinga","Dange Shuni","Gada","Goronyo","Gudu","Gwadabawa","Illela","Isa","Kebbe","Kware","Rabah","Sabon Birni",
    "Shagari","Silame","Sokoto North","Sokoto South","Tambuwal","Tangaza","Tureta","Wamako","Wurno","Yabo"
  ],
  "Taraba": [
    "Ardo Kola","Bali","Donga","Gashaka","Gassol","Ibi","Jalingo","Karim Lamido","Kurmi","Lau","Sardauna","Takum","Ussa","Wukari","Yorro","Zing"
  ],
  "Yobe >": [
    "Bade","Bursari","Damaturu","Fika","Fune","Geidam","Gujba","Gulani","Jakusko","Karasuwa","Machina","Nangere","Nguru",
    "Tarmuwa","Yunusari","Yusufari"
  ],
  "Zamfara >": [
    "Anka","Bakura","Birnin Magaji/Kiyaw","Bukkuyum","Chafe","Gummi","Gusau","Kaura Namoda","Maradun","Maru","Shinkafi",
    "Talata Mafara","Tsafe","Zurmi"
  ]
};

const countrySelect = document.querySelector('.country-select');
const wrapper = countrySelect.parentElement;

// Default selection
let selectedState = 'Lagos';
let selectedLGA = 'Ikeja';
updateCountryText();

// Update display
function updateCountryText() {
  const textEl = countrySelect.querySelector('.location-text');
  if (textEl) {
    textEl.textContent = `Nigeria (NGN), ${selectedState}, ${selectedLGA}`;
  } else {
    countrySelect.innerHTML = `<i class="fas fa-map-marker-alt"></i> Nigeria (NGN), ${selectedState}, ${selectedLGA} <i class="fas fa-caret-down"></i>`;
  }
}

// Show state list on click
countrySelect.addEventListener('click', function (e) {
  e.stopPropagation();
  const existingStateList = wrapper.querySelector('.state-list');

  if (existingStateList) {
    existingStateList.remove();
    document.querySelectorAll('.lga-list').forEach(el => el.remove());
    return;
  }

  const stateUl = document.createElement('ul');
  stateUl.className = 'state-list';

  Object.keys(statesWithLGAs).forEach(state => {
    const li = document.createElement('li');
    li.textContent = state;
    li.dataset.state = state;
    li.style.position = 'relative';

    // Add arrow to indicate LGA
    if (statesWithLGAs[state] && statesWithLGAs[state].length) {
      const arrow = document.createElement('span');
      arrow.textContent = ' ►';
      arrow.style.float = 'right';
      li.appendChild(arrow);
    }

    stateUl.appendChild(li);

    // Hover to show LGA
    li.addEventListener('mouseenter', () => {
      document.querySelectorAll('.lga-list').forEach(el => el.remove());

      const lgaUl = document.createElement('ul');
      lgaUl.className = 'lga-list';

      const lgas = statesWithLGAs[state];
      if (!lgas) return;

      lgas.forEach(lga => {
        const lgaLi = document.createElement('li');
        lgaLi.textContent = lga;

        lgaLi.addEventListener('click', () => {
          selectedState = state;
          selectedLGA = lga;
          updateCountryText();

          stateUl.remove();
          lgaUl.remove();
        });

        lgaUl.appendChild(lgaLi);
      });

      wrapper.appendChild(lgaUl);

      const liRect = li.getBoundingClientRect();
      const wrapperRect = wrapper.getBoundingClientRect();

      lgaUl.style.position = 'absolute';
      lgaUl.style.top = `${liRect.top - wrapperRect.top + wrapper.scrollTop}px`;
      lgaUl.style.left = `${stateUl.offsetWidth}px`;
      lgaUl.style.zIndex = '1000';

      lgaUl.addEventListener('mouseleave', () => {
        lgaUl.remove();
      });
    });
  });

  wrapper.appendChild(stateUl);
});

// Make the country-select toggle also respond on keyboard and touch in an accessible way
countrySelect.addEventListener('keydown', function(e){
  if(e.key === 'Enter' || e.key === ' '){
    e.preventDefault();
    this.click();
  }
});

// Close dropdown if click outside
document.addEventListener('click', (e) => {
  const stateList = wrapper.querySelector('.state-list');
  if (!stateList) return;

  if (!wrapper.contains(e.target)) {
    stateList.remove();
    document.querySelectorAll('.lga-list').forEach(el => el.remove());
  }
});

// Close dropdown on page scroll
window.addEventListener('scroll', () => {
  const stateList = wrapper.querySelector('.state-list');
  if (stateList) {
    stateList.remove();
    document.querySelectorAll('.lga-list').forEach(el => el.remove());
  }
});




const searchInput = document.querySelector('.search-input');
const container = document.querySelector('.full-search');

// Example items
const items = ["Red T-shirt", "Blue Jeans", "Green Jacket", "Black Sneakers", "White Hoodie"];

let ul;

searchInput.addEventListener('input', () => {

    if (!searchInput.value.trim()) {
        if (ul) ul.remove();
        return;
    }

    if (ul) ul.remove();

    ul = document.createElement('ul');

    ul.innerHTML = '<li> Red clothes </li><li> Blue clothes </li><li> Green clothes </li>';
    ul.className = 'search-suggestions';

    container.appendChild(ul);
});

document.addEventListener('click', (e) => {
    if (!ul) return;

    // if click is NOT inside the search container
    if (!container.contains(e.target)) {
        ul.remove();
        ul = null;
    }
});

window.addEventListener('scroll', () => {
    if (ul) {
        ul.remove();
        ul = null;
    }
});






        (function(){
            function onReady(fn){
                if(document.readyState !== 'loading') return fn();
                document.addEventListener('DOMContentLoaded', fn);
            }

            onReady(function(){
                var side = document.querySelector('.side-nav');
                if(!side) return;
                var items = Array.from(side.querySelectorAll('.nav-item'));
                var compactWidth = 72; // must match CSS compact width
                var gap = 12; // should roughly match .nav-item gap
                var shrinkTimer = null;
                var activeItem = null; // currently expanded item

                function measureLabel(label){
                    // Temporarily allow full width to measure
                    var prevMax = label.style.maxWidth;
                    label.style.maxWidth = 'none';
                    var w = Math.ceil(label.scrollWidth);
                    label.style.maxWidth = prevMax || '';
                    return w;
                }

                function enter(item){
                    if (window.innerWidth > 1230 || window.innerWidth < 921) return;
                    // cancel any pending collapse so new item stays expanded
                    if(shrinkTimer){ clearTimeout(shrinkTimer); shrinkTimer = null; }
                    activeItem = item;
                    var icon = item.querySelector('i');
                    var label = item.querySelector('.nav-text');
                    if(!icon || !label) return;

                    // measure label width
                    var labelW = measureLabel(label);

                    // compute desired nav width: compact + gap + label width
                    var desired = compactWidth + gap + labelW;

                    // set nav width (CSS transition handles smooth change)
                    side.style.width = desired + 'px';

                    // reveal label (allow it to expand)
                    label.style.transition = 'max-width 260ms var(--transition-curve), opacity 200ms var(--transition-curve)';
                    label.style.maxWidth = labelW + 'px';
                    label.style.opacity = '1';
                    label.style.textAlign = 'center';

                    // remove icon from flow (instant). Keeping this after width set
                    // avoids sudden layout jump before expansion starts.
                    icon.style.display = 'none';

                    // center the item content
                    item.style.justifyContent = 'center';
                }

                function leave(item){
                  if (window.innerWidth > 1230 || window.innerWidth < 921) return;
                    var icon = item.querySelector('i');
                    var label = item.querySelector('.nav-text');
                    if(!icon || !label) return;

                    // restore icon
                    icon.style.display = '';

                    // hide label
                    label.style.maxWidth = '0px';
                    label.style.opacity = '0';
                    item.style.justifyContent = '';

                    // If the item being left is the active one, schedule nav collapse.
                    // If another item became active in the meantime, the timer will
                    // be cleared by that item's enter() call.
                    if(activeItem === item){
                        shrinkTimer = setTimeout(function(){
                            side.style.width = compactWidth + 'px';
                            activeItem = null;
                            shrinkTimer = null;
                        }, 220);
                    }
                }

                // set initial compact width only between 921px and 1230px
                if(window.innerWidth <= 1230 && window.innerWidth >= 921) side.style.width = compactWidth + 'px';

                items.forEach(function(it){
                    if(!it.hasAttribute('tabindex')) it.setAttribute('tabindex','0');
                    it.addEventListener('mouseenter', function(){ enter(it); });
                    it.addEventListener('mouseleave', function(){ leave(it); });
                    it.addEventListener('focus', function(){ enter(it); });
                    it.addEventListener('blur', function(){ leave(it); });
                });

                // reset on resize
                window.addEventListener('resize', function(){
                  if(window.innerWidth>1230){
                    side.style.width = '';
                    items.forEach(function(it){
                      var icon = it.querySelector('i'); if(icon) icon.style.display = '';
                      var label = it.querySelector('.nav-text'); if(label){ label.style.maxWidth = ''; label.style.opacity = ''; }
                      it.style.justifyContent = '';
                    });
                  } else if (window.innerWidth >= 921) {
                    side.style.width = compactWidth + 'px';
                  } else {
                    // for very small screens revert to normal (no compact hover behavior)
                    side.style.width = '';
                  }
                });
            });
        })();

    // Toggle nav arrow character on click (flip '>' to '<')
    document.addEventListener('DOMContentLoaded', function(){
      const navToggleBtn = document.querySelector('.nav-toggle');
      if (!navToggleBtn) return;
      navToggleBtn.addEventListener('click', function(){
        const txt = navToggleBtn.textContent.trim();
        navToggleBtn.textContent = txt === '>' ? '<' : '>';
      });
    });

// MOBILE: transform hero layout for ≤768px and revert on larger screens



// Hero slider initialization (Swiper) - pagination only, touch + mouse drag, magnetic snap
document.addEventListener('DOMContentLoaded', function(){
  try {
    if(!window.Swiper) return;

    var heroContainer = document.querySelector('.hero-full.swiper');
    if(!heroContainer) return;

    var swiper = new Swiper('.hero-full.swiper', {
      // core behavior
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      speed: 700,
      grabCursor: true,

      // allow momentum but snap to slides (magnetic feel)
      freeMode: {
        enabled: true,
        sticky: true
      },

      // disable other UI
      navigation: false,
      scrollbar: false,

      // pagination only
      pagination: {
        el: '.hero-full .swiper-pagination',
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active'
      },

      // touch behavior tuning
      resistanceRatio: 0.85,
      longSwipesRatio: 0.2,
      simulateTouch: true,
      touchRatio: 1,

      // accessibility & performance
      watchOverflow: true,
      preloadImages: true,
      updateOnWindowResize: true
    });

    // ensure pagination reflects correct slide after programmatic changes
    swiper.on('slideChange', function(){
      // noop: Swiper updates pagination automatically; keep hook for future extensions
    });

  } catch (e) {
    console.warn('Swiper failed to initialize', e);
  }
});


 document.addEventListener('DOMContentLoaded', function(){
                var toggle = document.querySelector('.nav-toggle');
                var side = document.querySelector('.side-nav');
                if(!toggle || !side) return;
                // reflect state to aria
                function setAria(open){ toggle.setAttribute('aria-expanded', open ? 'true' : 'false'); }
                setAria(side.classList.contains('open'));

                toggle.addEventListener('click', function(e){
                    e.stopPropagation();
                    var nowOpen = side.classList.toggle('open');
                    // let CSS handle the `left` positioning via `.side-nav.open`
                    setAria(nowOpen);
                });



                
                // Scroll to bottom when the 'Details' replacement is clicked on very small screens
                var topLinks = document.querySelector('.top-bar-links');
                if(topLinks){
                    topLinks.addEventListener('click', function(e){
                        if(window.innerWidth <= 460){
                            // smooth scroll to very bottom
                            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                        }
                    });
                }
            });