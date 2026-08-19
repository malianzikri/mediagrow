// MediaGrow main interactions + GA4 event tracking
// GA4 Measurement ID is loaded separately in each page <head>: G-76RTVNNKVB

const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', nav.classList.contains('open'));
  });
}

// Safely send GA4 events. If Analytics is blocked/not loaded,
// website interactions continue working normally.
function trackEvent(eventName, params = {}) {
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', eventName, {
    page_path: window.location.pathname,
    page_title: document.title,
    transport_type: 'beacon',
    ...params
  });
}

function cleanText(value) {
  return String(value || '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 120);
}

// Track important CTA/link clicks using event delegation.
document.addEventListener('click', (event) => {
  const el = event.target.closest('a, button');
  if (!el) return;

  const text = cleanText(el.textContent || el.getAttribute('aria-label'));
  const textLower = text.toLowerCase();
  const href = el.tagName === 'A' ? (el.getAttribute('href') || '') : '';

  // 1) WhatsApp clicks — strongest direct-contact signal.
  if (/wa\.me|api\.whatsapp\.com|whatsapp\.com/i.test(href)) {
    trackEvent('whatsapp_click', {
      link_text: text || 'WhatsApp',
      link_url: href,
      click_location: el.classList.contains('sticky-wa') ? 'sticky_whatsapp' : 'page_cta'
    });
  }

  // 2) Consultation CTA clicks (can be WA or internal contact page).
  if (
    textLower.includes('konsultasi') ||
    textLower.includes('ngobrol gratis') ||
    textLower.includes('mulai konsultasi')
  ) {
    trackEvent('consultation_click', {
      link_text: text,
      link_url: href || '(button)'
    });
  }

  // 3) Pricing/package interest clicks.
  if (
    textLower.includes('lihat paket') ||
    textLower.includes('tanya paket') ||
    textLower.includes('lihat semua paket') ||
    textLower.includes('minta pricelist') ||
    textLower.includes('pricelist')
  ) {
    trackEvent('pricing_click', {
      link_text: text,
      link_url: href || '(button)'
    });
  }

  // 4) Case-study clicks.
  if (/\/case-study\//i.test(href)) {
    trackEvent('case_study_click', {
      link_text: text || 'Case Study',
      link_url: href
    });
  }
});

// WhatsApp consultation form.
const form = document.querySelector('[data-wa-form]');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const fd = new FormData(form);
    const kebutuhan = cleanText(fd.get('layanan'));

    // Recommended GA4 lead event. Keep this separate from whatsapp_click
    // so one form submission does not count as two lead conversions.
    trackEvent('generate_lead', {
      method: 'whatsapp_form',
      lead_service: kebutuhan || 'belum_dipilih'
    });

    const msg = `Halo MediaGrow, saya ingin konsultasi.\n\nNama: ${fd.get('nama')}\nBisnis: ${fd.get('bisnis')}\nKebutuhan: ${fd.get('layanan')}\nPesan: ${fd.get('pesan')}`;

    window.open(
      'https://wa.me/6283155507877?text=' + encodeURIComponent(msg),
      '_blank',
      'noopener'
    );
  });
}
