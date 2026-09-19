document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
mainNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const quoteForm = document.getElementById('quoteForm');
quoteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const company = document.getElementById('qCompany').value.trim();
  const name = document.getElementById('qName').value.trim();
  const contact = document.getElementById('qContact').value.trim();
  const item = document.getElementById('qItem').value.trim();
  const message = document.getElementById('qMessage').value.trim();

  const subject = `[견적문의] ${company} - ${name}`;
  const bodyLines = [
    `회사명: ${company}`,
    `담당자명: ${name}`,
    `연락처: ${contact}`,
    `문의 품목/수량: ${item || '(미기재)'}`,
    '',
    '문의 내용:',
    message || '(미기재)'
  ];
  const mailto = `mailto:eyshim@sfnetworks.co.kr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
  window.location.href = mailto;
});
