const menuBtn=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav-links');if(menuBtn&&nav){menuBtn.addEventListener('click',()=>{nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',nav.classList.contains('open'))})}
const form=document.querySelector('[data-wa-form]');if(form){form.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(form);const msg=`Halo MediaGrow, saya ingin konsultasi.

Nama: ${fd.get('nama')}
Bisnis: ${fd.get('bisnis')}
Kebutuhan: ${fd.get('layanan')}
Pesan: ${fd.get('pesan')}`;window.open('https://wa.me/6283155507877?text='+encodeURIComponent(msg),'_blank','noopener')})}
