const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const project = PROJECTS[id] || PROJECTS.salesflow;

document.title = `${project.title} | أحمد الدرباق`;
document.getElementById('projectCategory').textContent = project.categoryLabel;
document.getElementById('projectTitle').textContent = project.title;
document.getElementById('projectSubtitle').textContent = project.subtitle;
document.getElementById('projectSummary').textContent = project.summary;
document.getElementById('projectDescription').textContent = project.summary;

document.getElementById('featureList').innerHTML = project.features.map((feature, index) => `
  <div class="feature-item"><span>${String(index + 1).padStart(2, '0')}</span><strong>${feature}</strong></div>
`).join('');

document.getElementById('detailVisual').className = `detail-visual detail-${project.accent} reveal`;
document.getElementById('detailVisual').innerHTML = `
  <img class="detail-cover-image" src="../assets/images/projects/${id}/cover.jpg" alt="صورة ${project.title}"
       onload="this.classList.add('loaded');this.parentElement.classList.add('has-detail-photo')"
       onerror="this.remove()" />
  <div class="detail-screen">
    <div class="detail-screen-top"><span></span><span></span><span></span><b>${project.title}</b></div>
    <div class="detail-screen-body">
      <aside><i></i><i></i><i></i><i></i></aside>
      <main><div class="detail-title-line"></div><div class="detail-metrics"><b></b><b></b><b></b></div><div class="detail-table"><i></i><i></i><i></i><i></i></div></main>
    </div>
  </div>`;


const gallery = document.getElementById('projectGallery');
if (gallery) {
  gallery.innerHTML = [1, 2, 3].map(number => `
    <div class="gallery-slot">
      <img src="../assets/images/projects/${id}/${number}.jpg"
           alt="صورة ${number} من مشروع ${project.title}"
           onload="this.classList.add('loaded');this.parentElement.classList.add('has-image')"
           onerror="this.remove()" />
      <div class="gallery-placeholder">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 4h16v16H4V4Zm2 2v9.2l3.6-3.6 2.6 2.6 2.2-2.2L18 15.6V6H6Zm2.5 4A1.5 1.5 0 1 0 8.5 7a1.5 1.5 0 0 0 0 3Z"/>
        </svg>
        <strong>مكان صورة المشروع</strong>
        <span>../assets/images/projects/${id}/${number}.jpg</span>
      </div>
    </div>
  `).join('');
}


document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
