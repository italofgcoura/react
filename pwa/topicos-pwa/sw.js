const staticCache = 'statica-v5';
const dynamicCache = 'dinamica-v5';
const assets = [
    '/',
    '/index.html',
    '/fallback-page.html',
    '/acoes/acoes.js',
    '/dbHome.js',
    '/estilos/estilos.css',];

// função para  limitar o tamanho da cache

const tamanhoCache = (nomeCache, tamCache) => {
    caches.open(nomeCache).then(cache => {
        cache.keys().then(keys => {
            if (keys.length > tamCache) {
                cache.delete(keys[0])
                    .then(tamanhoCache(nomeCache, tamCache));
            }
        })
    })
};

// sw instalado
self.addEventListener('install', event => {
    console.log("SW  Instalado")
    //waitUntil serve para o install não desligar o service worker enquanto os assets não forem carregados 
    event.waitUntil(
        caches.open(staticCache).then(cache => {
            // console.log('cashe assets');
            cache.addAll(assets);
        })
    )
});

// sw aativado
self.addEventListener('activate', event => {
    event.waitUntil(
        // quando for ativado, pegamos todas as key de todas as caches disponíveis
        caches.keys().then(keys => {
            // console.log(keys)
            // dispara uma função de callback
            // promise All retorna todas as keys
            return Promise.all(keys
                // filtra-se as keys, se não forem iguais ao nome da cache atual (static Assets)
                .filter(key => key != staticCache && key != dynamicCache)
                .map(key => caches.delete(key))
            );
        })
    )
});

// sw aativado

// quando o usuário está online e entra na tela, se ele acessar
// uma página, o código abaixo verifica se a página já não está na cache,
// se não estiver ele guarda na cache específica, que é a cache dinâmica
// isso é feito para não gastar recurso "à toa"

self.addEventListener('fetch', event => {
    if (event.request.url.indexOf('firestore.googleapis.com') === -1) {
        console.log(event);
        event.respondWith(
            caches.match(event.request).then(cacheRes => {
                // se estiver já na cashe, retorna a o asset, se não retorna o request
                return cacheRes || fetch(event.request).then(fetchRes => {
                    // para guardar um asset que não está guardado já
                    return caches.open(dynamicCache).then(cache => {
                        cache.put(event.request.url, fetchRes.clone());
                        tamanhoCache(dynamicCache, 15);
                        return fetchRes;
                    })
                });
            }).catch(() => {
                // se o asset que for acessado for html e não tiver na cache, retorna a página callback default html
                if (event.request.url.indexOf('.html') > -1) {
                    return caches.match('/fallback-page.html');
                }

            })
        );
    }
});




// NOTAS
// SEMPRE QUE SE ALTERAR ALGUMA COISA NOS ASSETS, TEM DE ATUALIZAR O SW
// PARA QUE ELE REINSTALE E PEGUE OS NOVOS ASSETS