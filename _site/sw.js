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

var precacheConfig = [["/3d-printing/index.html","9cd9ad80e93879f5e022c874a3d950af"],["/404/index.html","43001cd32b5cdbae0c18e1df3c102b8d"],["/_pages/database/addgene/index.html","87d60a5c346bdb1923cca75bdcfb717a"],["/_pages/database/allen-brain-map/index.html","bcd1b467d47fee7563ad2c29210b4dff"],["/_pages/database/data-repositories/index.html","824ec761fb48f47f94b99e0a444971d8"],["/_pages/database/genome-rnai/index.html","bf42a81fac7144894c535078e33ee741"],["/_pages/database/neuroelectro/index.html","7dba64054eb6f9ed9461335431a0876a"],["/_pages/database/neuroimaging-databases/index.html","45ca83dd87ef8f51988a01652135d368"],["/_pages/database/neuromorpho/index.html","7eb53cf32d284939b099c4918f2d0ac6"],["/_pages/database/open-science-framework/index.html","b21151a2998bdf4b4c86c86531293249"],["/_pages/database/open-source-brain/index.html","ef1f920614034d26bb2234cbbe845774"],["/_pages/database/the-visible-human-project/index.html","3cac84119a69386d9bab5b43b2857878"],["/_pages/hardware/behaviour_tools/autoreward2/index.html","1299e53f7c5042261540b95d7c37ab06"],["/_pages/hardware/behaviour_tools/behaviour_tools/index.html","cae1a416cbc79f8c8dd86c4fb5806af2"],["/_pages/hardware/behaviour_tools/skinnerbox_rpi_python/index.html","0938a7c58be1d6d5ecb14e18edaf69a7"],["/_pages/hardware/benchtop/benchtop/index.html","ce1709525ea33a7f8eb9c8c4192bc016"],["/_pages/hardware/benchtop/centrifuges/Dremelfuge/index.html","784e39a95c96853e205914fcd7477a81"],["/_pages/hardware/benchtop/centrifuges/Gogofuge/index.html","4adc592b7089ea37b0b0ac6196c72227"],["/_pages/hardware/benchtop/centrifuges/OpenFuge/index.html","c491fef1609e4eaf967ae4cb4141b860"],["/_pages/hardware/benchtop/openspritzer/index.html","19306e2f8329ccf45816716dcef750bc"],["/_pages/hardware/benchtop/syringe_pumps/syringe_pump1/index.html","0a9a88d0de79d09c3ad882344eb601cd"],["/_pages/hardware/benchtop/thermocyclers/5_dollar_pcr/index.html","08a5285a3612045b738587d4b2bb6abd"],["/_pages/hardware/benchtop/thermocyclers/DIY_pcr/index.html","b4f558632b59e65bd86bf1e5a41f6d39"],["/_pages/hardware/benchtop/thermocyclers/open_pcr/index.html","b731ff39063756e12833f07c48c59eca"],["/_pages/hardware/computer_clusters/boinc/index.html","e5282efb18a28c0f269668270f5804c6"],["/_pages/hardware/computer_clusters/computer_clusters/index.html","c644324ab4d51d27ffc899b9da999956"],["/_pages/hardware/computer_clusters/parallela/index.html","e5ee07295b2629baa195b933a5ab844e"],["/_pages/hardware/computer_clusters/raspberry-pi-based/index.html","1d91449b44e1cd02efd04d8c7d23977e"],["/_pages/hardware/computers/computers/index.html","53a5f9e9accbad6491d4549be15e351d"],["/_pages/hardware/computers/red-pitaya/index.html","93ec9e0e607f3e5f94ea80c05d462844"],["/_pages/hardware/electrophysiology/animal/Backyard_brains/index.html","92fbd3919e8d946eb9da952909fb3a75"],["/_pages/hardware/electrophysiology/animal/open-ephys/index.html","1a7cdc4ce0a4b0c2788ca395311f2362"],["/_pages/hardware/electrophysiology/electrophysiology/index.html","122c0fd119c255c380f0d72474e710ce"],["/_pages/hardware/electrophysiology/human/attys/index.html","3ca3381d0d22c3ab33210779540461fa"],["/_pages/hardware/electrophysiology/human/bio_amp/index.html","7827c8b95bb1b9d5142d9c65f7b30bf5"],["/_pages/hardware/electrophysiology/human/bio_amp_back.jpg","9aaa15c385c9b5e8fdc05da7045265ad"],["/_pages/hardware/electrophysiology/human/bio_amp_frontal.jpg","3d657dfb8d0bf4def64975836264b46e"],["/_pages/hardware/electrophysiology/human/bpm_biosignal/index.html","320f8ab51dfe35d3f9c3152026b76bd0"],["/_pages/hardware/electrophysiology/human/brain_map/index.html","f16993ae38dda9598a57714897180ed9"],["/_pages/hardware/electrophysiology/human/open_bci/index.html","6b2de2853f70eed8b1018c7c18001db9"],["/_pages/hardware/electrophysiology/human/open_eeg/index.html","3339ff49b999eb956f67e438742cc7cb"],["/_pages/hardware/electrophysiology/human/open_exg/index.html","ef3388a4640f28edf03f1b6964920a4d"],["/_pages/hardware/microcontrollers/microcontrollers/index.html","3cdb76dc8887c163d97243cce2bafb20"],["/_pages/hardware/microscopes/10_smartphone_microscope/index.html","2eb4fb74def0077042868fdd70cbfa48"],["/_pages/hardware/microscopes/microscopes/index.html","ad5ab9c3ceada6e7846a91e9b1507be5"],["/_pages/hardware/microscopes/openflexure/index.html","2cd899ce738cad365bacc41fc71fba29"],["/_pages/hardware/microscopes/openstage/index.html","8e74e863ef3a6ad279118e76b5a98369"],["/_pages/hardware/microscopes/stereo_microscope/index.html","926fb6d4db69abc38b46a12912de17d0"],["/_pages/hardware/prosthetics_n_robots/fingertip_laser_sensor/index.html","d0fdfc1941aae0c549abc7afda20c2ee"],["/_pages/hardware/prosthetics_n_robots/intelligent_hearing_aid/index.html","f40c4b269a1197f4391c5ac9e01adb21"],["/_pages/hardware/prosthetics_n_robots/open-bionics/index.html","7d9c67acc69c5f89965c6fadf0d461c8"],["/_pages/hardware/prosthetics_n_robots/open_hand_project/index.html","fd8550b48ece2134f24b6f14c9025b1d"],["/_pages/hardware/prosthetics_n_robots/prosthetics-and-robotics/index.html","844125dbeb5248bfdb28f7074186128f"],["/_pages/hardware/prosthetics_n_robots/super_releaser/index.html","50a4af2c5945d079264f783bae0588a5"],["/_pages/hardware/prosthetics_n_robots/takktile/index.html","8cce2cc526d86f86b87b6f271a1188a2"],["/_pages/hardware/prosthetics_n_robots/the_yale_open_hand_project/index.html","df955c99b173cee89aeb490505226b7b"],["/_pages/hardware/signal_generators/signal-generators/index.html","cb0f03545f8bf775b06b0037ea83780f"],["/_pages/hardware/stimulators/electric/tDCS/index.html","baf3ee983d1bc70ff6bf7780bf026178"],["/_pages/hardware/stimulators/optogenetics/optogenetics/index.html","5a3f598c8bb714cb86d34f6bae4a724d"],["/_pages/hardware/stimulators/optogenetics/pulse-pal/index.html","68b830cd93325470ebe5e0422349774b"],["/_pages/hardware/stimulators/stimulators/index.html","2f0f5297b797260bf435264c073677b8"],["/_pages/hardware/stimulators/visual/BB_LED_matrix/index.html","ec4a64d170f63cff96e207fe5800b93b"],["/_pages/hardware/stimulators/visual/blinkeschild/index.html","1400eb90da8051665a318a48d64fb1b4"],["/_pages/hardware/stimulators/visual/led_panels/index.html","2b276c691ad40d3815fbeec293595b65"],["/_pages/learning/school_of_data/index.html","42817ec7334415af08b033a9a6a89ca6"],["/_pages/learning/tutorials/human-psychophysics-using-arduino/arduino-script-posner-test/index.html","27c8343f15cebdf565ddfea508aed1da"],["/_pages/learning/tutorials/human-psychophysics-using-arduino/index.html","ecd58078fe840737b23e269a96e78f1d"],["/_pages/learning/tutorials/human-psychophysics-using-arduino/python-posner-test/index.html","7ef0112482d870855c31a2f4921e953e"],["/_pages/learning/tutorials/human-psychophysics-using-arduino/schematics-posner-test/index.html","e0db52305a4d90e088c899c3a83fd160"],["/_pages/learning/tutorials/index.html","3b1a291c41ec7bd0f9a6cd852369f285"],["/_pages/learning/tutorials/nose-poke-device-for-rats-using-arduino-and-3d-printed-parts/index.html","d668d45ada1cd0fb701df10861a13c6e"],["/_pages/learning/tutorials/opening-mcd-files-with-python/index.html","870a4d98977656eaa62fbf7d743d1c8a"],["/_pages/learning/webportals/index.html","b476077539932b0981844639889339d1"],["/_pages/learning/youtube_as_a_resource_for_open_science_hardware/index.html","c387599e5cc716694d843a206bc76f61"],["/_pages/main_areas/backlog/index.html","2bc8a066861cda32c32510117b2b826b"],["/_pages/main_areas/database/index.html","e18e597a1d871079d2577c1101adc2c0"],["/_pages/main_areas/hardware/index.html","f36e09924301bb8f90a47c38aea2187f"],["/_pages/main_areas/learning/index.html","977259efdf1924daecb5efdc570fb30f"],["/_pages/main_areas/other/index.html","12918ea1aeb84b357c52f8946bba4b5c"],["/_pages/main_areas/software/index.html","cd77f1228d3b3df643c208a58c731678"],["/_pages/other_projects/backlog/index.html","5730ed38598e3c4f9e9bb2b47884942e"],["/_pages/other_projects/crowd-funding/index.html","e258cfb558834767c9a74b226b8f61ce"],["/_pages/other_projects/open-lab-notebooks/index.html","ca546a270dd28c7a86c7a090afc9d543"],["/_pages/other_projects/other-interesting-projects/index.html","74e370f8075c4afd805eca1b4fa0fae0"],["/_pages/software/computer-vision-and-motion-tracking-software/index.html","ef1019d1eda18f077e1d7e5533ae6ad8"],["/_pages/software/data_analysis/brainbrowser/index.html","5c687f7b620741eb397f50395749b662"],["/_pages/software/data_analysis/data_analysis/index.html","a689f4670be427c46c3c2e0bb9a13997"],["/_pages/software/data_analysis/fiji/index.html","97a68102d9bc3cbc88f2e5a61c47fd7e"],["/_pages/software/data_analysis/nibabel/index.html","f7cc7c2d7974e179270c63038f4f64c9"],["/_pages/software/data_analysis/nipy/index.html","11ac1b055bbcf5130126ad65623665ab"],["/_pages/software/data_analysis/pyspace/index.html","cbb9094c3dbe78830377e52bcb595ed9"],["/_pages/software/data_analysis/tensor-flow/index.html","019638a1af708c5f07d29e7134959296"],["/_pages/software/image-office-suits-and-other-general-purpose-software/index.html","4f778afc7e4a944c9db7e6252805e775"],["/_pages/software/ipipet/index.html","db2b35f9c283b9026dd47fda6a42a7f1"],["/_pages/software/lab-management-software/index.html","6bd9cc9015d9c8c3b3f82654cd09c6f8"],["/_pages/software/linux-distributions/index.html","d245662437f0be12bea4a0af15098c9f"],["/_pages/software/microscopes/micro-manager/index.html","accf2f3efacf8bcd1a28d9c33d991689"],["/_pages/software/microscopes/microscopes_software/index.html","515cd535fb894c482b132e09ee4cc4a2"],["/_pages/software/microscopes/ome-open-microscopy-environment/index.html","418944c705393cc8f8866c276358c14e"],["/_pages/software/psychophysics-toolboxes/index.html","2399503e0347a8b7662cf3dad83d94a0"],["/_pages/software/python-for-neuroscience-frontiers-collection/index.html","01f59acccd16f601e6c4f0db7c9ec527"],["/_pages/software/python-numpy-scipy-matplotlib/index.html","81a95c515d35c659d5a95be221eaf809"],["/_pages/software/simulation_models/big-neuron/index.html","085dc29ca879ac2c9d9f08024e0ec935"],["/_pages/software/simulation_models/green-brain/index.html","9d3f42c448863098b1c875c7417442f0"],["/_pages/software/simulation_models/neuronsneuronsneurons/index.html","71aa9a962a85b8cc7194bdb8b17b4ff7"],["/_pages/software/simulation_models/simulation/index.html","b13d8b2d42f7b2e7bf2604ae197a2bb0"],["/_pages/software/spike-gadgets/index.html","8ebb1ef4beffe7373adfa05ab6d230fa"],["/_pages/software/vision-egg/index.html","a78f356c06b696b8d2ed323c5ab7a14e"],["/about/index.html","0ef3afdd510832fd0d69217b5af2faa4"],["/assets/css/main.css","e27bd37969408ec9108dddd6595695b5"],["/assets/img/favicon.jpg","ffb9f5c8afdda7fa4f3fd697e5147182"],["/assets/img/favicon_old.jpg","ffb9f5c8afdda7fa4f3fd697e5147182"],["/assets/img/icons/android-chrome-192x192.png","4df4c8779d47bcaa69516050281773b9"],["/assets/img/icons/android-chrome-256x256.png","939ec88a61f407945a27d867fca1651d"],["/assets/img/icons/apple-touch-icon.png","366666899d15cf8f6811cc73ee0d63de"],["/assets/img/icons/favicon-16x16.png","f625044491b20a5df78571ba266cbcf6"],["/assets/img/icons/favicon-32x32.png","67502381e45848a4ab76123364675ffe"],["/assets/img/icons/icon-github.svg","4e06335104a29f91e08d4ef420da7679"],["/assets/img/icons/icon-instagram.svg","1e1119e2628235ee4c8771bff15eb2ca"],["/assets/img/icons/icon-twitter.svg","30551913d5399d6520e8a74b6f1e23f0"],["/assets/img/icons/mstile-150x150.png","1cea2ceb806d1a018330a51a1d8b73b6"],["/assets/img/icons/safari-pinned-tab.svg","398ef6b25c0f7f3f6e54c112a8facc5f"],["/assets/img/pages/Parallella.jpg","28355ec3925e25b64c1a0e6193e0836c"],["/assets/img/pages/Parallella_lg.jpg","28355ec3925e25b64c1a0e6193e0836c"],["/assets/img/pages/Parallella_md.jpg","1a9b149e67821e45aebe54d76ba87a38"],["/assets/img/pages/Parallella_placehold.jpg","66a78a110decc7e1bc5e7333ba096d2c"],["/assets/img/pages/Parallella_sm.jpg","6df27c4301b489ac2286537a83b0b23e"],["/assets/img/pages/Parallella_thumb.jpg","b9299549f350d6f94783d8446427a6a6"],["/assets/img/pages/Parallella_thumb@2x.jpg","6a81faf6b011dd2a675d0cca539a9b69"],["/assets/img/pages/Parallella_xs.jpg","a19c4d450fc643d53202c50375da9a4c"],["/assets/img/pages/computer_cluster.jpg","7c37702d5be7dd36c12eddcf8efe3a23"],["/assets/img/pages/computer_cluster_lg.jpg","7c37702d5be7dd36c12eddcf8efe3a23"],["/assets/img/pages/computer_cluster_md.jpg","7c37702d5be7dd36c12eddcf8efe3a23"],["/assets/img/pages/computer_cluster_placehold.jpg","c5f3c5220eefa2b919ca37d1be8158ab"],["/assets/img/pages/computer_cluster_sm.jpg","7c37702d5be7dd36c12eddcf8efe3a23"],["/assets/img/pages/computer_cluster_thumb.jpg","4294f111e7c1f3b9a29437ba510c0159"],["/assets/img/pages/computer_cluster_thumb@2x.jpg","7c37702d5be7dd36c12eddcf8efe3a23"],["/assets/img/pages/computer_cluster_xs.jpg","c4f3020d1d7c4e3c2c8b638f593e9edb"],["/assets/img/pages/computers.jpg","385ec29156b75fe551d65be3b4ec6739"],["/assets/img/pages/computers_lg.jpg","385ec29156b75fe551d65be3b4ec6739"],["/assets/img/pages/computers_md.jpg","4e6ac419f2f5d736a10e7637551ee450"],["/assets/img/pages/computers_placehold.jpg","251263b8128e90c523a1a33d5eb76283"],["/assets/img/pages/computers_sm.jpg","7aea58e5d07d9af48e2ab2b0440f7a3c"],["/assets/img/pages/computers_thumb.jpg","3651ec14fd230f8a95ad9026c17c3da1"],["/assets/img/pages/computers_thumb@2x.jpg","385ec29156b75fe551d65be3b4ec6739"],["/assets/img/pages/computers_xs.jpg","8d12e9c9a9284804d527cbe6dc0c0e92"],["/assets/img/pages/shane-rounce-205187_placehold.jpg","249fc4a09bcfcbd7d5764f14c14ae82e"],["/assets/img/pages/shane-rounce-205187_thumb.jpg","c3b2dd0d95a6d3a44d7702f8c06b1e78"],["/assets/img/pages/sleek_placehold.jpg","0f48050cd7776895b98c6ce21597ff39"],["/assets/img/pages/sleek_thumb.jpg","f7b8a94ac9da8e5ea36bb9e459872400"],["/assets/img/posts/emile-perron-190221.jpg","4705474281b975b7a213b96e71f772e7"],["/assets/img/posts/emile-perron-190221_lg.jpg","aafe35b1dc6d9dc9293c8c2ef4121046"],["/assets/img/posts/emile-perron-190221_md.jpg","03ed35ed656429599daba312f0990a0f"],["/assets/img/posts/emile-perron-190221_placehold.jpg","67f40708f69ab671cee04d624258b85c"],["/assets/img/posts/emile-perron-190221_sm.jpg","4ce4178a62d5a456e90e7bc47bde50f5"],["/assets/img/posts/emile-perron-190221_thumb.jpg","f20085dfe2e36854f8a12f1fd6c50425"],["/assets/img/posts/emile-perron-190221_thumb@2x.jpg","b8fa22c3237de529316037f093b9cb4d"],["/assets/img/posts/emile-perron-190221_xs.jpg","ac32cbd525d72e932499668af5647d03"],["/assets/img/posts/shane-rounce-205187.jpg","bb774d6e05b2b55ffdabe11a8aac7c56"],["/assets/img/posts/shane-rounce-205187_lg.jpg","83cd838024fff9c3faec59fa1da97872"],["/assets/img/posts/shane-rounce-205187_md.jpg","628cf27bf658cf6de9df79ab9bf2cb2d"],["/assets/img/posts/shane-rounce-205187_placehold.jpg","249fc4a09bcfcbd7d5764f14c14ae82e"],["/assets/img/posts/shane-rounce-205187_sm.jpg","a2400a468e10d7d64528ac9c6bc3b6f0"],["/assets/img/posts/shane-rounce-205187_thumb.jpg","c3b2dd0d95a6d3a44d7702f8c06b1e78"],["/assets/img/posts/shane-rounce-205187_thumb@2x.jpg","b0722b63a92c92a44cd92c0201fc92a4"],["/assets/img/posts/shane-rounce-205187_xs.jpg","cd58fd23f3b3c1de2183beb9ed08327b"],["/assets/img/posts/sleek.jpg","a32252a618ffe8ae57c9ce9ab157a01b"],["/assets/img/posts/sleek_lg.jpg","95a1338aa524727f34950f269133e904"],["/assets/img/posts/sleek_md.jpg","4e35ceb2f5fffd3d758fade699b0b85a"],["/assets/img/posts/sleek_placehold.jpg","0f48050cd7776895b98c6ce21597ff39"],["/assets/img/posts/sleek_sm.jpg","f30af3d30b7df905d962e494750f5da0"],["/assets/img/posts/sleek_thumb.jpg","f7b8a94ac9da8e5ea36bb9e459872400"],["/assets/img/posts/sleek_thumb@2x.jpg","e67e2129dc58a100b98a5e027c964dbc"],["/assets/img/posts/sleek_xs.jpg","c8212cace6d446950556a3bf6efe4520"],["/assets/js/bundle.js","3b47333b32e608c89a002c9cbc9dc3b1"],["/categories/index.html","3510df23cb63c2e96d8dc30f2b2eadb9"],["/contact/index.html","a9261d4947c90e220a7ac4c22eef21c0"],["/getting-started/index.html","1aac4445c7f922847fa20057971eeb37"],["/gulpfile.babel.js","499ef2edde6e9b4fbafcb7c6f0cbc725"],["/index.html","ab74347d88dcdc9242612e0cbaa32369"],["/markdown-cheatsheet/index.html","5704420239d9fafad6e42315a4b89a10"],["/super-long-article/index.html","3c8746ac781961a3cddbf0f638fb11cf"],["/sw.js","c028ca8dec40afaad38ad37a8c5d4a67"],["/welcome-to-jekyll/index.html","c9646918da920d917f672dfeb461fe51"],["/welcome-to-jekyll11/index.html","e0ae6b97d093c92289697d081e8ffae5"]];
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







