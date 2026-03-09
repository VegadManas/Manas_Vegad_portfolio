'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "106e59d833ba4ce95513a8c3bba1cc99",
".git/config": "de3934f2ae3a0a8681d39ec000e7d5ec",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "de25c7876d1bfe42f30a9921221e33bb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9253716f28ef405208866a9054960ff4",
".git/logs/refs/heads/main": "9253716f28ef405208866a9054960ff4",
".git/logs/refs/remotes/origin/main": "5086eecd402f4f2a75c3570a94d9525f",
".git/objects/07/4285bc38a8b4353dae4b79e5b6760c3f52f666": "c0e98545ab35b5a54df4c6facd9d51bc",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/13/762327252ab28e62f14c6f36d8cc685fb937aa": "3627c7b5b0543007d735a89d7fcdd8c4",
".git/objects/16/b7ed7ef3f3923246e01af5ceb9fabf2447f52f": "0bf4fc8735053541d6cea394ade1f486",
".git/objects/17/41c90f24aca70ca470afe3d784f0a66312a48f": "999a05651465dd08c1ee014783705aae",
".git/objects/18/ff2fa93cf6ac0c89c7610485908698005f19da": "be3288c4e1d4775768cb42b785e1e7b7",
".git/objects/1c/3058eed9b00bc9f363afefb51e0b33ea4169c4": "7740bacb7a8ac818bb7aceeeaa6d9832",
".git/objects/1e/0f532206ca8302ffb079f5d55af4e096deefc3": "b3376e15c013c8e6deed35bcfef2768d",
".git/objects/29/5e9c17a7d6c4e36a8c106c82bf0352c9657eed": "fe20a76ac92dc399f733dea9f50be7f3",
".git/objects/36/417071f2db90e269ed9e77724884a557ae7b63": "ca88c91e69a46a54bd296ddb0b5404d9",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3c/dd3397f8b3781dbc8fd49259341b59a7251ef9": "cc4b65bcb5f20b85c6a4318021efc9eb",
".git/objects/43/1d4aa72f971da691e54b7aab886be32d798a0f": "3d6327c3d9d1e1fe4d4a47542bf58f94",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/56/aa5752da776058484a2ccbab6fa6cad7e61d00": "3a5f6005466c1ed9411b7550c2db5b1d",
".git/objects/57/1e254c98a5d78afb996fb041d47a08b8336336": "4d7747b149c931e8023519661a3cf134",
".git/objects/60/3e240a278b73ed56f04bdd30d1dcf436fac93f": "40fb39fb00e9f68657410c146e37e67d",
".git/objects/60/e67f673ad85ed0046f0307d51a6bfa0a62f18b": "dfc088a90a8498a8694be7d57912b3a1",
".git/objects/61/83a168e499afc7ecb077ccf9a42f3aba78b484": "c8650fb417fc943d0b4d852c3872eb9a",
".git/objects/66/2e1b7420b901547c3c3a63f9228119287198ab": "df52d245d446efcd3534c131972f0618",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/74/f0a37ecb8c9e14934b3ad17c4b5d7f95ded4c7": "bfb7361b8dd958154718fc2b232d9589",
".git/objects/79/8fac387887bdf757f726b27cffee5161df45d4": "0a245bd8e549be620087b67856ff083e",
".git/objects/7b/13b553cd677e658fc5c34cc66c5fc534881dd0": "048b7d0c87117cb01ab9deb34a3b7915",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/87/ba18fbae46dfc05ccea966f919c97aa0d7f8dc": "d332e4d25bfa732859dc4f323274d076",
".git/objects/88/0985e00d65597b80d2356cca50be0eec18f2b8": "f966c15a6817a5453d03f080ac28747d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/cd119ad65e3a70ffe8fc6ad971324a9a80263c": "cb45fb3507e0b5f2143b1d694755fa0b",
".git/objects/8d/2ecd461380e0fa356ff4b2550026eab851596e": "e467a2489ddf075a69331ba56706d9ed",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/8a05d3e8288e10549ea3dceda2a05085faaeb8": "674235a3505fcfc12825b0268bf8c1f2",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/98/e3614831dfba837a53fd5f0ab00c629eab5acd": "16b0eafbd46e00b0902fae23362aef43",
".git/objects/9f/5270714cf6d18793262ea715019de2f83737c0": "8b8289c7167120127c004eb5d0279395",
".git/objects/a0/7dcdfc88452941270bf3ffb93eff5887fceb91": "436e7e7d4075084a515880dc6d775b49",
".git/objects/a3/6dc4effdd00deb411b818dafdea288c0a199d4": "585849f9e69e38c4e58e31572293173e",
".git/objects/a6/56dd9cfed9e5877c672722155760c35cda811c": "02a9ca1e6e9fad53ddf31ef026160e50",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a8/39de708a4a10ddba5c4f1bbc92fc582ecfa20e": "6d35c12ad2822896ec6a542821f02960",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bd/cf4a289f796a589f68e8124aef4c7679075e39": "a052de01e99ab9ae1f25354758a17067",
".git/objects/c6/a586e7be6951d8025871aa67aad44249754c86": "9107957a62f1b7fd1494c686d120cb8d",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/ca/98028697fac4518c87cf896616ddd8eea71bd2": "2a8183082fe78e5bc7a9b0882e2b3f0a",
".git/objects/ce/654929f6e0895494be7771acd96138419ff061": "421b2ea6b299df70d44c2d0dd8af81b4",
".git/objects/d1/6e8bade0a8ca3f21341acd215ede656bc5dc93": "e859433b2d371d9fa415b4be2be3d51a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/14e453e727ff029908a1c4a10a359743cd31ab": "9e3feaf04c083ef3f144e9614f74a8fe",
".git/objects/d9/0c57dcbb1b01dbb10292e36d9e96c82cc7096b": "f390fb5605479cb43bcbe73c507e22aa",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/d9/e179a29b2ba13ee5f1b2867fd12c96db3ec116": "c07915a026993a80214ae3f09da895cf",
".git/objects/da/71784140f4f0fcacafb45d42354c0461a5e637": "66833f0587f3760377a2be598b051cda",
".git/objects/e2/265fbae734b7f400a2314086731ae63b49f55b": "847a6412068e6d3e8dc15ea14beaa5d8",
".git/objects/e2/3de3d0b09b6c0615471a4fbea006ae9fa79031": "098f562f50cf6069a95faba23b506bac",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/ec18758a0d15c0557405de461ee36df168de5b": "04ab34208ea42cec30a53edf79c715a8",
".git/objects/f5/f64175ffe13841fd510eafaf54ff298a02ac1b": "ec2063e43ad1336b8a3de19ef996d483",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fe/9233361e5066f62bce6353ad63ddc72da60f10": "3b75fff8686040247185861f3963aabd",
".git/refs/heads/main": "d799f2c2737fac4aacfe76857ae062bd",
".git/refs/remotes/origin/main": "d799f2c2737fac4aacfe76857ae062bd",
"assets/AssetManifest.bin": "00d6920af1f00505e22935394cb3249f",
"assets/AssetManifest.bin.json": "f47dc5058e5133df91faeb88b1ce2615",
"assets/assets/images/c.png": "8df039df833d0ef3147aca98e3221027",
"assets/assets/images/mobilescreen.jpeg": "3eb125a821a00208ecc2243e5e4c4806",
"assets/assets/images/projects/dps/logo.png": "e006f0e6eb75394e7b495d1986efd6e2",
"assets/assets/images/projects/dps/ss1.png": "fbca127fcd6c941742184ad1134163fc",
"assets/assets/images/projects/dps/ss2.png": "cdd4e52decfdc42e7be7d6c22e5f2dd2",
"assets/assets/images/projects/dps/ss3.png": "a88fb70ba9e9780f69b3ff49755642a1",
"assets/assets/images/projects/dps/ss4.png": "a88fb70ba9e9780f69b3ff49755642a1",
"assets/assets/images/projects/mortease/logo.png": "77b8398d4671f6815d9f6e1916aa5111",
"assets/assets/images/projects/mortease/ss1.apk": "faa4497c6f09c50741cef4bd806a79bd",
"assets/assets/images/projects/mortease/ss1.jpeg": "0086e1fdffb595316d4b56e1609c838a",
"assets/assets/images/projects/mortease/ss2.jpeg": "857c73119aa9cb33a11d05d172fa1634",
"assets/assets/images/projects/mortease/ss3.jpeg": "8b9740ab0d2de0f760d14b514f6497b0",
"assets/assets/images/projects/studdybuddy/logo.png": "200759b425e3ea8c9a67a6e814e7fe5c",
"assets/assets/images/projects/studdybuddy/sreenshot_1.jpg": "ae1dbdba535722c37e6b52d91c887e41",
"assets/assets/images/projects/studdybuddy/sreenshot_2.jpg": "c8a3faca048b9d971e6e1923dbc82482",
"assets/assets/images/projects/studdybuddy/sreenshot_3.jpg": "ffbb02e4d8b766d2ddc75c8df8b87db9",
"assets/assets/images/projects/studdybuddy/sreenshot_4.jpg": "697966977e82936cf4361aca4fb9cd37",
"assets/assets/images/projects/weatherapp/logo.png": "1f18197d471b01da820a321a41dcae48",
"assets/assets/images/projects/weatherapp/s1.jpeg": "1f9de57decb77d4f47bcd684b70a9d0c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e42e4ba9b5c100ca99a266c4e9f3561f",
"assets/NOTICES": "70f7f21f766b13901294c87b8fe89b3e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "4aadfe2fae29431b230a66d36641ae33",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5e081ee9ee4f462ae441f1059d51fe2b",
"/": "5e081ee9ee4f462ae441f1059d51fe2b",
"main.dart.js": "ebb4d8768aca4638bca70ab547a7b3c2",
"manifest.json": "f3e5a96dc20004ae1c5e675fbf46eb27",
"version.json": "96d1ae67ef64deeb742e092f4e2801ec"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
