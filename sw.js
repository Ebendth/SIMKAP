const CACHE='uebungen-v15';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png',
 './simkap/','./simkap/index.html','./dauf/','./dauf/index.html','./vigilanz/','./vigilanz/index.html','./stopsignal/','./stopsignal/index.html'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
// Netz zuerst (damit Updates ankommen), offline aus dem Speicher
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  e.respondWith(fetch(e.request).then(r=>{ if(r.ok){const c=r.clone(); caches.open(CACHE).then(ca=>ca.put(e.request,c));} return r; })
    .catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||(e.request.mode==='navigate'?caches.match('./index.html'):undefined))));
});
