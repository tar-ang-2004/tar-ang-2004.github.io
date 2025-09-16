const username = 'tar-ang-2004';
const repoListEl = document.getElementById('repo-list');
const yearEl = document.getElementById('year');
const themeToggle = document.getElementById('theme-toggle');

yearEl.textContent = new Date().getFullYear();

// Theme handling
function setTheme(theme){
  document.documentElement.classList.toggle('light', theme === 'light');
  document.documentElement.classList.toggle('dark', theme === 'dark');
  localStorage.setItem('theme', theme);
  themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
}

const saved = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme:light)').matches ? 'light' : 'dark');
setTheme(saved);

themeToggle.addEventListener('click', ()=>{
  const now = document.documentElement.classList.contains('light') ? 'light' : 'dark';
  setTheme(now === 'light' ? 'dark' : 'light');
});

// Simple fetch with error handling and caching
async function fetchRepos(){
  const cacheKey = `ghrepos:${username}`;
  try{
    const cached = localStorage.getItem(cacheKey);
    if(cached){
      const parsed = JSON.parse(cached);
      const age = Date.now() - parsed.__fetchedAt;
      if(age < 1000 * 60 * 60) { // 1 hour
        return parsed.repos;
      }
    }

    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
    if(!res.ok) throw new Error('GitHub API error: '+res.status);
    const repos = await res.json();
    localStorage.setItem(cacheKey, JSON.stringify({__fetchedAt: Date.now(), repos}));
    return repos;
  }catch(err){
    console.error(err);
    // fallback to cached even if stale
    const cached = localStorage.getItem(cacheKey);
    if(cached) return JSON.parse(cached).repos;
    return [];
  }
}

function createRepoCard(repo){
  const el = document.createElement('article');
  el.className = 'repo-card';
  el.innerHTML = `
    <header>
      <h4><a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a></h4>
      <p class="repo-meta"><span>${repo.language || ''}</span><span>★ ${repo.stargazers_count}</span></p>
    </header>
    <p>${repo.description || ''}</p>
    <div class="repo-links">
      ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" rel="noopener">Live</a>` : ''}
      <a href="${repo.html_url}" target="_blank" rel="noopener">Code</a>
    </div>
  `;
  return el;
}

(async function render(){
  repoListEl.innerHTML = '<p>Loading repositories…</p>';
  const repos = await fetchRepos();
  repoListEl.innerHTML = '';
  if(!repos || repos.length === 0){
    repoListEl.innerHTML = '<p>No repositories found or an error occurred.</p>';
    return;
  }

  // Show featured: pick popular or recently updated
  repos.sort((a,b)=> (b.stargazers_count - a.stargazers_count) || (new Date(b.updated_at)-new Date(a.updated_at)));
  const featured = repos.slice(0, 12);
  featured.forEach(r=> repoListEl.appendChild(createRepoCard(r)));
})();
