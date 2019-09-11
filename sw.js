/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/3d-printing/index.html","3a2fa3f24b19a45f89775446146cac16"],["/404/index.html","0927b00128cb54bdb4e43b1a842efba4"],["/_pages/hardware/behaviour_tools/autoreward2/index.html","08d7f00f5167c111640c5824528234cc"],["/_pages/hardware/behaviour_tools/behaviour_tools/index.html","4d593e8cc80d88f2687ee314f837ac63"],["/_pages/hardware/behaviour_tools/skinnerbox_rpi_python/index.html","6dc14735840b6aaa8e383ec658e5b03a"],["/_pages/hardware/benchtop/benchtop/index.html","77dfb628dd0bd425a53fa7a71e443cb6"],["/_pages/hardware/benchtop/centrifuges/Dremelfuge/index.html","037ccaec8b8fa99929b7a99f4e2afbe0"],["/_pages/hardware/benchtop/centrifuges/Gogofuge/index.html","491826533901650dcbf0d693f6fea08f"],["/_pages/hardware/benchtop/centrifuges/OpenFuge/index.html","280e8c2da32c1942261ece5ffe6a3b43"],["/_pages/hardware/benchtop/openspritzer/index.html","f317b0cb0dbb5ffc4666c8d7918f1171"],["/_pages/hardware/benchtop/syringe_pumps/syringe_pump1/index.html","b3a1e37c1fed0b1125e160f2c8332d79"],["/_pages/hardware/benchtop/thermocyclers/5_dollar_pcr/index.html","0b0442bd9d769722f1e615ed732527d9"],["/_pages/hardware/benchtop/thermocyclers/DIY_pcr/index.html","f69fe18d3acf14d9f411595bb5e94e38"],["/_pages/hardware/benchtop/thermocyclers/open_pcr/index.html","3df6260a327a93870b34f702f5a6f01f"],["/_pages/hardware/benchtop/thermocyclers/thermocyclers/index.html","648be7224790453979d04670a61d7f32"],["/_pages/hardware/computer_clusters/boinc/index.html","67476f845081529e0b442121697d12e0"],["/_pages/hardware/computer_clusters/computer_clusters/index.html","b58fbb42f4f002454ecc5a79f4a2e54e"],["/_pages/hardware/computer_clusters/parallela/index.html","3b9fa514f8c4e3448b4e6885965ed26a"],["/_pages/hardware/computer_clusters/raspberry-pi-based/index.html","deb591ebb20c41543215f9c694f19b15"],["/_pages/hardware/computers/computers/index.html","a30a043f2a06313bad8a3ad8a6306159"],["/_pages/hardware/computers/red-pitaya/index.html","e646d827b344cf211993e544518d66f6"],["/_pages/hardware/electrophysiology/animal/Backyard_brains/index.html","2125c5bc7fe012e6e31ec2b18776e7e7"],["/_pages/hardware/electrophysiology/animal/open-ephys/index.html","6110631394db243e81ddc92edce76b1f"],["/_pages/hardware/electrophysiology/electrophysiology/index.html","f3654de90f728279042121aeb7ebfe22"],["/_pages/hardware/electrophysiology/human/attys/index.html","2ed9aa7ce51404d7258b6ce69fdb5405"],["/_pages/hardware/electrophysiology/human/bio_amp/index.html","af1835a0c293edd60376354b394ed7fe"],["/_pages/hardware/electrophysiology/human/bio_amp_back.jpg","9aaa15c385c9b5e8fdc05da7045265ad"],["/_pages/hardware/electrophysiology/human/bio_amp_frontal.jpg","3d657dfb8d0bf4def64975836264b46e"],["/_pages/hardware/electrophysiology/human/bpm_biosignal/index.html","af3430af2f0d341c824552cc5c9d970d"],["/_pages/hardware/electrophysiology/human/brain_map/index.html","465701af1c866175de71a67a82da472f"],["/_pages/hardware/electrophysiology/human/human-brain-interactors/index.html","836c1fbd8c964f963d9a87e787bdf944"],["/_pages/hardware/electrophysiology/human/open_bci/index.html","8bc6d08a4ede00e9d4031e3e7ae18c9f"],["/_pages/hardware/electrophysiology/human/open_eeg/index.html","b1e536f81ba772b423e4e4ea9e5fb917"],["/_pages/hardware/electrophysiology/human/open_exg/index.html","7f4ffea138547c219a2daf4d9699c210"],["/_pages/hardware/led_panels/led-panels/index.html","ba1627902417b0a298cd7f932c2be047"],["/_pages/hardware/microcontrollers/microcontrollers/index.html","3aadb5660219bfafb580c2a6b94eb219"],["/_pages/hardware/microscopes/10_smartphone_microscope/index.html","d7fe83585c2f16d48c18137f66ba5b41"],["/_pages/hardware/microscopes/microscopes/index.html","8ccc87b8756fa320bd750738289ab0b1"],["/_pages/hardware/microscopes/openflexure/index.html","5db24ee46aa1403cabbe7060d56c2b31"],["/_pages/hardware/microscopes/openstage/index.html","c8fd52cbe55412c147aabceb2af710bc"],["/_pages/hardware/microscopes/stereo_microscope/index.html","213709f579a31a4d2cae2a59a6357162"],["/_pages/hardware/optogenetics/optogenetics/index.html","05b959f68791226e9914f7ed27c41de3"],["/_pages/hardware/prosthetics_n_robots/fingertip_laser_sensor/index.html","b405e692b1887cd54fe6d341c4a8819d"],["/_pages/hardware/prosthetics_n_robots/intelligent_hearing_aid/index.html","abd5ee9e8d4eec55f7aa70fbcd25c8f4"],["/_pages/hardware/prosthetics_n_robots/open-bionics/index.html","46d32679ce3ab7a6013b579bbad52143"],["/_pages/hardware/prosthetics_n_robots/open_hand_project/index.html","328513fe4e85d9f79bf36967540901b4"],["/_pages/hardware/prosthetics_n_robots/prosthetics-and-robotics/index.html","ca6599a5938efa2ea0053486ed36e936"],["/_pages/hardware/prosthetics_n_robots/super_releaser/index.html","8f9bb45c6aa2635972a5f1479a5965dc"],["/_pages/hardware/prosthetics_n_robots/takktile/index.html","c5921ae8f7144a31bd8b4f89a9f3e3fc"],["/_pages/hardware/prosthetics_n_robots/the_yale_open_hand_project/index.html","544003aaabf6d33bba7435041608958e"],["/_pages/hardware/signal_generators/signal-generators/index.html","af6f5dab54b4a25c80450dbd2c39264c"],["/_pages/hardware/stimulators/electric/tDCS/index.html","d4fd8dd5c2bbf541404360f413d58732"],["/_pages/hardware/stimulators/optogenetics/optogenetics/index.html","26b31dbfa1ae650724457bd6959f22c7"],["/_pages/hardware/stimulators/optogenetics/pulse-pal/index.html","0bb08e6161fba343d26b3e05219be99a"],["/_pages/hardware/stimulators/stimulators/index.html","8dcd56f92c8a0dffe63f0e8586f33c4e"],["/_pages/hardware/stimulators/visual/BB_LED_matrix/index.html","1a1a770e68e596e86b8a217d0237beb9"],["/_pages/hardware/stimulators/visual/blinkeschild/index.html","6ec817300d1c40242df12a5671650e91"],["/_pages/hardware/stimulators/visual/led_panels/index.html","41f25730268fdf4c4457d7bc44086ffa"],["/_pages/hardware/supercomputers/boinc/index.html","2e20e26266796a71594dbb95649764ab"],["/_pages/hardware/supercomputers/parallela/index.html","a10e818f6bce9a682993bf9f4c20ce31"],["/_pages/hardware/supercomputers/raspberry-pi-based/index.html","dc48e1d47c9c5d096b010e221ed9db9e"],["/_pages/hardware/supercomputers/supercomputers/index.html","8531c4bb5ca9f3d467f89f4d19f3e5f7"],["/_pages/main_areas/backlog/index.html","32b29769de1be7635ff121a618b33877"],["/_pages/main_areas/database/index.html","62f60d62a0e3129ebd09deff1b3aeaee"],["/_pages/main_areas/hardware/index.html","1defc66e86a3720512f28802e914d996"],["/_pages/main_areas/learning/index.html","d3a1d644f77cd79ffbf926124402055c"],["/_pages/main_areas/other/index.html","0fa1239896012483378017e3f5e66958"],["/_pages/main_areas/software/index.html","a596f227a5b3a979909bb9f96157805d"],["/_pages/simulation_models/big-neuron/index.html","73cd69d161d13336e14be7d60a31da65"],["/_pages/simulation_models/green-brain/index.html","20cbbcf8cfd513a88330e250e004bc89"],["/_pages/simulation_models/neuronsneuronsneurons/index.html","9bac30540675bba75a772531edd2180b"],["/_pages/simulation_models/simulation/index.html","eaa910c0a2ade152218b8d6f0a10ca74"],["/_pages/software/computer-vision-and-motion-tracking-software/index.html","45eb6d64c439e55cba92a9fca28cb7e1"],["/_pages/software/data_analysis/brainbrowser/index.html","63d8594304d90510cd006d220c30b79c"],["/_pages/software/data_analysis/data_analysis/index.html","8d5f3569e9cbb77762b80e186122b222"],["/_pages/software/data_analysis/fiji/index.html","a69f995713f10ceb15069f2420f199ad"],["/_pages/software/data_analysis/nibabel/index.html","8ab0587cf348c542e678de795cd90fcf"],["/_pages/software/data_analysis/nipy/index.html","567bc82c2c0ad0ecad9376713f1e0173"],["/_pages/software/data_analysis/pyspace/index.html","b2fc65281486cc9b7187f4e610daf225"],["/_pages/software/data_analysis/tensor-flow/index.html","9185e962e45220b4b1c7108be51c7d88"],["/_pages/software/image-office-suits-and-other-general-purpose-software/index.html","d30d45ed486245d7f0dc74853d252baa"],["/_pages/software/ipipet/index.html","89f2e4aabc62e3978ec11ec41d2b364b"],["/_pages/software/lab-management-software/index.html","8a6a3f05a49c9e47c0f8a35e0815ef00"],["/_pages/software/linux-distributions/index.html","4ca2510f820652eecbcd5214d813a9c2"],["/_pages/software/microscopes/micro-manager/index.html","accf2f3efacf8bcd1a28d9c33d991689"],["/_pages/software/microscopes/microscopes_software/index.html","23ea2a2dc1d2413907107d81c6fb26d8"],["/_pages/software/microscopes/ome-open-microscopy-environment/index.html","15ca9a6310eb4535b888fdccf7480f05"],["/_pages/software/psychophysics-toolboxes/index.html","05708128d1323d865b10e8cb350b8fc6"],["/_pages/software/python-for-neuroscience-frontiers-collection/index.html","ad19e6cbc9bb2caf0c7d181220303754"],["/_pages/software/python-numpy-scipy-matplotlib/index.html","88f8c24de9e4b059c77bc6ae773baa0f"],["/_pages/software/spike-gadgets/index.html","59d3f24d9c29f901cbc7ac84c63b3942"],["/_pages/software/vision-egg/index.html","4829cdf6cefd7169026ee0e43d39de16"],["/about/index.html","92e00895da404fa85b68bf59ad0f3793"],["/assets/css/main.css","e27bd37969408ec9108dddd6595695b5"],["/assets/img/favicon.jpg","80624b26bf429a103d6310542a64f086"],["/assets/img/favicon_old.jpg","ffb9f5c8afdda7fa4f3fd697e5147182"],["/assets/img/icons/android-chrome-192x192.png","4df4c8779d47bcaa69516050281773b9"],["/assets/img/icons/android-chrome-256x256.png","939ec88a61f407945a27d867fca1651d"],["/assets/img/icons/apple-touch-icon.png","366666899d15cf8f6811cc73ee0d63de"],["/assets/img/icons/favicon-16x16.png","f625044491b20a5df78571ba266cbcf6"],["/assets/img/icons/favicon-32x32.png","67502381e45848a4ab76123364675ffe"],["/assets/img/icons/icon-github.svg","4e06335104a29f91e08d4ef420da7679"],["/assets/img/icons/icon-instagram.svg","1e1119e2628235ee4c8771bff15eb2ca"],["/assets/img/icons/icon-twitter.svg","30551913d5399d6520e8a74b6f1e23f0"],["/assets/img/icons/mstile-150x150.png","1cea2ceb806d1a018330a51a1d8b73b6"],["/assets/img/icons/safari-pinned-tab.svg","398ef6b25c0f7f3f6e54c112a8facc5f"],["/assets/img/pages/Parallella.jpg","28355ec3925e25b64c1a0e6193e0836c"],["/assets/img/pages/Parallella_lg.jpg","28355ec3925e25b64c1a0e6193e0836c"],["/assets/img/pages/Parallella_md.jpg","1a9b149e67821e45aebe54d76ba87a38"],["/assets/img/pages/Parallella_placehold.jpg","66a78a110decc7e1bc5e7333ba096d2c"],["/assets/img/pages/Parallella_sm.jpg","6df27c4301b489ac2286537a83b0b23e"],["/assets/img/pages/Parallella_thumb.jpg","b9299549f350d6f94783d8446427a6a6"],["/assets/img/pages/Parallella_thumb@2x.jpg","6a81faf6b011dd2a675d0cca539a9b69"],["/assets/img/pages/Parallella_xs.jpg","a19c4d450fc643d53202c50375da9a4c"],["/assets/img/pages/computer_cluster.jpg","7c37702d5be7dd36c12eddcf8efe3a23"],["/assets/img/pages/computer_cluster_lg.jpg","7c37702d5be7dd36c12eddcf8efe3a23"],["/assets/img/pages/computer_cluster_md.jpg","7c37702d5be7dd36c12eddcf8efe3a23"],["/assets/img/pages/computer_cluster_placehold.jpg","c5f3c5220eefa2b919ca37d1be8158ab"],["/assets/img/pages/computer_cluster_sm.jpg","7c37702d5be7dd36c12eddcf8efe3a23"],["/assets/img/pages/computer_cluster_thumb.jpg","4294f111e7c1f3b9a29437ba510c0159"],["/assets/img/pages/computer_cluster_thumb@2x.jpg","7c37702d5be7dd36c12eddcf8efe3a23"],["/assets/img/pages/computer_cluster_xs.jpg","c4f3020d1d7c4e3c2c8b638f593e9edb"],["/assets/img/pages/computers.jpg","385ec29156b75fe551d65be3b4ec6739"],["/assets/img/pages/computers_lg.jpg","385ec29156b75fe551d65be3b4ec6739"],["/assets/img/pages/computers_md.jpg","4e6ac419f2f5d736a10e7637551ee450"],["/assets/img/pages/computers_placehold.jpg","251263b8128e90c523a1a33d5eb76283"],["/assets/img/pages/computers_sm.jpg","7aea58e5d07d9af48e2ab2b0440f7a3c"],["/assets/img/pages/computers_thumb.jpg","3651ec14fd230f8a95ad9026c17c3da1"],["/assets/img/pages/computers_thumb@2x.jpg","385ec29156b75fe551d65be3b4ec6739"],["/assets/img/pages/computers_xs.jpg","8d12e9c9a9284804d527cbe6dc0c0e92"],["/assets/img/pages/shane-rounce-205187_placehold.jpg","249fc4a09bcfcbd7d5764f14c14ae82e"],["/assets/img/pages/shane-rounce-205187_thumb.jpg","c3b2dd0d95a6d3a44d7702f8c06b1e78"],["/assets/img/pages/sleek_placehold.jpg","0f48050cd7776895b98c6ce21597ff39"],["/assets/img/pages/sleek_thumb.jpg","f7b8a94ac9da8e5ea36bb9e459872400"],["/assets/img/posts/emile-perron-190221.jpg","4705474281b975b7a213b96e71f772e7"],["/assets/img/posts/emile-perron-190221_lg.jpg","aafe35b1dc6d9dc9293c8c2ef4121046"],["/assets/img/posts/emile-perron-190221_md.jpg","03ed35ed656429599daba312f0990a0f"],["/assets/img/posts/emile-perron-190221_placehold.jpg","67f40708f69ab671cee04d624258b85c"],["/assets/img/posts/emile-perron-190221_sm.jpg","4ce4178a62d5a456e90e7bc47bde50f5"],["/assets/img/posts/emile-perron-190221_thumb.jpg","f20085dfe2e36854f8a12f1fd6c50425"],["/assets/img/posts/emile-perron-190221_thumb@2x.jpg","b8fa22c3237de529316037f093b9cb4d"],["/assets/img/posts/emile-perron-190221_xs.jpg","ac32cbd525d72e932499668af5647d03"],["/assets/img/posts/shane-rounce-205187.jpg","bb774d6e05b2b55ffdabe11a8aac7c56"],["/assets/img/posts/shane-rounce-205187_lg.jpg","83cd838024fff9c3faec59fa1da97872"],["/assets/img/posts/shane-rounce-205187_md.jpg","628cf27bf658cf6de9df79ab9bf2cb2d"],["/assets/img/posts/shane-rounce-205187_placehold.jpg","249fc4a09bcfcbd7d5764f14c14ae82e"],["/assets/img/posts/shane-rounce-205187_sm.jpg","a2400a468e10d7d64528ac9c6bc3b6f0"],["/assets/img/posts/shane-rounce-205187_thumb.jpg","c3b2dd0d95a6d3a44d7702f8c06b1e78"],["/assets/img/posts/shane-rounce-205187_thumb@2x.jpg","b0722b63a92c92a44cd92c0201fc92a4"],["/assets/img/posts/shane-rounce-205187_xs.jpg","cd58fd23f3b3c1de2183beb9ed08327b"],["/assets/img/posts/sleek.jpg","a32252a618ffe8ae57c9ce9ab157a01b"],["/assets/img/posts/sleek_lg.jpg","95a1338aa524727f34950f269133e904"],["/assets/img/posts/sleek_md.jpg","4e35ceb2f5fffd3d758fade699b0b85a"],["/assets/img/posts/sleek_placehold.jpg","0f48050cd7776895b98c6ce21597ff39"],["/assets/img/posts/sleek_sm.jpg","f30af3d30b7df905d962e494750f5da0"],["/assets/img/posts/sleek_thumb.jpg","f7b8a94ac9da8e5ea36bb9e459872400"],["/assets/img/posts/sleek_thumb@2x.jpg","e67e2129dc58a100b98a5e027c964dbc"],["/assets/img/posts/sleek_xs.jpg","c8212cace6d446950556a3bf6efe4520"],["/assets/js/bundle.js","3b47333b32e608c89a002c9cbc9dc3b1"],["/autoreward2/index.html","649a0e43f86469685b305c6b5b110ec6"],["/categories/index.html","f26ed6a965f518da052f31aab7f878e4"],["/contact/index.html","299dfbf3e8f4dd3924e5b7dc020fe053"],["/getting-started/index.html","6acd5d53604b40f437a98b86ec3b6910"],["/gulpfile.babel.js","499ef2edde6e9b4fbafcb7c6f0cbc725"],["/index-1.html","cef04a1431d4a54e38e9e0a357759282"],["/index.html","2af3700f4dd4a0bfd54263018eb74163"],["/markdown-cheatsheet/index.html","7328e6c2d989a85e43c6d1c3de1b23df"],["/super-long-article/index.html","8ae7a75512612fd698e4262c118e962d"],["/sw.js","a80a28a2bd7360f8d78b11ccfd05c222"],["/welcome-to-jekyll/index.html","5c092587f084bdc05176df8f336ea478"],["/welcome-to-jekyll11/index.html","b97064bf1e73bc4b09e2cd30d278487d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







