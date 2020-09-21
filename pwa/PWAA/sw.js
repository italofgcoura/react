// ALTERAR A VERSÃO CASO ALGUM DOS ASSETS TENHO SIDO ALTERADO PARA REINSTALAR O SW
const cacheStatica = 'statica-v1';
const cacheDinamica = 'dinamica-v1';

const assets = [
    '/',
    '/index.html',
    '/fallback-page.html',
    '/acoes/acoes.js',
    '/acoes/db.js',
    '/acoes/dbHome.js',
    '/estilos/estilos.css'];

// sw instalado
self.addEventListener('install', event => {
    console.log("SW Instalado")
    //waitUntil serve para o install não desligar o service worker enquanto os assets não forem carregados 
    event.waitUntil(
        caches.open(cacheStatica).then(cache => {
            cache.addAll(assets);
        })
    )
});

// sw ativado
self.addEventListener('activate', event => {
    console.log("ativado")
    event.waitUntil(
        // quando for ativado, pegamos todas as key de todas as caches disponíveis
        caches.keys().then(keys => {
            console.log(keys)
            // dispara uma função de callback
            // promise All retorna todas as keys
            return Promise.all(keys
                // filtra-se as keys, se não forem iguais ao nome da cache atual (static Assets)
                .filter(key => key !== cacheStatica && key !== cacheDinamica)
                .map(key => caches.delete(key))
            );
        })
    )
});

// fetch events
// quando o usuário entra no app, e visita a página, dispara o fetch
self.addEventListener('fetch', event => {
    // AQUI VAI INTERCEPTAR O FETCH
    // respondWith PAUSA o fetch e verifica se está na cashe, SE não estiver vai pro servidor
    event.respondWith(
        // verifica na cashe se existe a página/recurso que foi feito o fetch
        caches.match(event.request).then(cacheResponse => {
            // se tiver na cache retorna na cacheResponse
            return cacheResponse || fetch(event.request).then(fetchResponse => {
                return caches.open(cacheDinamica).then(cache => {
                    cache.put(event.request.url, fetchResponse.clone());
                    return fetchResponse;
                })
            });
        }).catch(() => {
            if (event.request.url.indexOf('.html') > -1) {
                return caches.match('fallback-page.html')
            }
        })

    );
});