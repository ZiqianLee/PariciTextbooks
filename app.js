// Combine the 3 data modules
const episodesData = [...episodes1, ...episodes2, ...episodes3];

document.addEventListener('DOMContentLoaded', () => {
    const menuList = document.getElementById('menu-list');
    const contentContainer = document.getElementById('content-container');
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menu-toggle');

    // Mobile Menu Toggle
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Close menu when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target) && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        }
    });

    // Initialize Menu
    episodesData.forEach((ep) => {
        const li = document.createElement('li');
        li.textContent = `Épisode ${ep.id}: ${ep.title}`;
        li.dataset.id = ep.id;
        li.addEventListener('click', () => loadChapter(ep.id, li));
        menuList.appendChild(li);
    });

    function loadChapter(id, activeLi) {
        // Update active menu item
        const items = menuList.querySelectorAll('li');
        items.forEach(i => i.classList.remove('active'));
        if (activeLi) activeLi.classList.add('active');

        // Close mobile sidebar if open
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('open');
        }

        // Add animate out
        contentContainer.style.opacity = 0;
        
        setTimeout(() => {
            renderContent(id);
            // Re-trigger animation
            contentContainer.classList.remove('animate-fade-in');
            void contentContainer.offsetWidth; // trigger reflow
            contentContainer.classList.add('animate-fade-in');
            contentContainer.style.opacity = 1;
            window.scrollTo(0,0);
        }, 200);
    }

    function renderContent(id) {
        const ep = episodesData.find(e => e.id === id);
        if (!ep) return;

        let html = `
            <div class="chapter-header">
                <h1 class="chapter-title">Épisode ${ep.id}: ${ep.title}</h1>
                <div class="chapter-theme">${ep.theme}</div>
            </div>
        `;

        // Render Vocabulary
        if (ep.vocabulary && ep.vocabulary.length > 0) {
            html += `
            <div class="section">
                <h3><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg> Vocabulary</h3>
                <div class="vocab-grid">
                    ${ep.vocabulary.map(v => `
                        <div class="vocab-item">
                            <div class="vocab-fr">${v.fr}</div>
                            <div class="vocab-en">${v.en}</div>
                            ${v.note ? `<div class="vocab-note">${v.note}</div>` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
            `;
        }

        // Render Grammar
        if (ep.grammar && ep.grammar.length > 0) {
            html += `
            <div class="section">
                <h3><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg> Grammar & Rules</h3>
                <div class="grammar-block">
                    ${ep.grammar.map(g => `
                        <div class="grammar-rule">
                            <h4>${g.title}</h4>
                            <div class="md-content">${g.explanation}</div>
                            ${g.examples && g.examples.length > 0 ? `
                            <div class="grammar-examples">
                                ${g.examples.map(ex => `
                                    <div class="example">
                                        <strong>${ex.fr}</strong> — ${ex.en}
                                    </div>
                                `).join('')}
                            </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
            `;
        }

        // Render Dialogues
        if (ep.dialogues && ep.dialogues.length > 0) {
            html += `
            <div class="section">
                <h3><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Dialogue Practice</h3>
                ${ep.dialogues.map(d => `
                    <div style="margin-bottom: 2rem;">
                        <h4 style="color: white; margin-bottom: 1rem;">${d.context}</h4>
                        <div class="dialogue">
                            ${d.lines.map(l => `
                                <div class="speech-bubble ${l.align === 'left' ? 'bubble-left' : 'bubble-right'}">
                                    <div class="speaker-name">${l.speaker}</div>
                                    <div class="speech-fr">${l.fr}</div>
                                    <div class="speech-en">${l.en}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
            `;
        }

        // Render Culture Notes
        if (ep.culture) {
            html += `
            <div class="section" style="border-left: 4px solid var(--accent-blue);">
                <h3><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg> Culture Québécoise</h3>
                <div class="md-content" style="color: var(--text-secondary);">
                    ${ep.culture}
                </div>
            </div>
            `;
        }

        contentContainer.innerHTML = html;
    }
});
