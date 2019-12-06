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

var precacheConfig = [["/3d-printing/index.html","ac0e99147962047b1c33595155209b00"],["/404/index.html","df8215fbd7b1de036f78d5fa255ab249"],["/_pages/database/addgene/index.html","825f5e06601ea27ea4bc39e7fb8c456e"],["/_pages/database/allen-brain-map/index.html","d77b0680c61c634efe4bea25740431b0"],["/_pages/database/data-repositories/index.html","76cfdf7389e48e34d247c2844b8b3211"],["/_pages/database/genome-rnai/index.html","c4feb1e2c258ce2becb26b07f9838891"],["/_pages/database/neuroelectro/index.html","c328bc380c41d2d0bfcdbc0df0452c05"],["/_pages/database/neuroimaging-databases/index.html","fd60ed8e27fcfaddd9f7caaba3f32c87"],["/_pages/database/neuromorpho/index.html","1902184b61a90deaef055e2123ba6969"],["/_pages/database/open-science-framework/index.html","5ad878cc86d0942e634792bf018faf60"],["/_pages/database/open-source-brain/index.html","1d69ebaa0e7366f9ac7efcce5ed6305a"],["/_pages/database/the-visible-human-project/index.html","95d82d4ce66336eb7a3d1928c4926c6c"],["/_pages/hardware/behaviour_tools/autoreward2/index.html","ed769c9f0ef357b87ac076530acb0fec"],["/_pages/hardware/behaviour_tools/behaviour_tools/index.html","4823572ac4b58e7bd1f73d0882a78360"],["/_pages/hardware/behaviour_tools/skinnerbox_rpi_python/index.html","2bdaa6e7baa52b4583643a50b26b777c"],["/_pages/hardware/benchtop/benchtop/index.html","a1fd08003d137fc9c266a3fd2b5b6ac2"],["/_pages/hardware/benchtop/centrifuges/Dremelfuge/index.html","b6366dbeb4508b439a4858a0ac93e294"],["/_pages/hardware/benchtop/centrifuges/Gogofuge/index.html","950f219affaf09799b3e5f4bc7db9357"],["/_pages/hardware/benchtop/centrifuges/OpenFuge/index.html","223a5d7e1730f0d6208983c3e341be3d"],["/_pages/hardware/benchtop/openspritzer/index.html","865a2aa05969e516994d9b9083e2d366"],["/_pages/hardware/benchtop/syringe_pumps/syringe_pump1/index.html","626b9de42dc386365e3d790d4ba986f9"],["/_pages/hardware/benchtop/thermocyclers/5_dollar_pcr/index.html","b41cb54d089c81f9851a8e246719f2be"],["/_pages/hardware/benchtop/thermocyclers/DIY_pcr/index.html","745320b8cae9f5ccc98b92d61959fe51"],["/_pages/hardware/benchtop/thermocyclers/open_pcr/index.html","ff9a0a6a00f4ac99289d9220938c0bac"],["/_pages/hardware/computer_clusters/boinc/index.html","98a113f06bd00e1cffd75a14719883a7"],["/_pages/hardware/computer_clusters/computer_clusters/index.html","dee267d31278a1fe921b6da926e531ee"],["/_pages/hardware/computer_clusters/parallela/index.html","f7e6e5744b2b6f62b1dc64d5041295c0"],["/_pages/hardware/computer_clusters/raspberry-pi-based/index.html","b489d7d5e16e6d66601823a6e455d726"],["/_pages/hardware/computers/computers/index.html","03cb9912e4ca8fe4cd0961acb034870c"],["/_pages/hardware/computers/red-pitaya/index.html","c689f78f945967ce4cdd0b45050833c4"],["/_pages/hardware/electrophysiology/animal/Backyard_brains/index.html","0522ca234f6e60de3767af95806811c2"],["/_pages/hardware/electrophysiology/animal/open-ephys/index.html","c2726bc95a27b1eca72e19c9b83701fe"],["/_pages/hardware/electrophysiology/electrophysiology/index.html","2eeb70995a6e6d92e609dfd310fcce70"],["/_pages/hardware/electrophysiology/human/attys/index.html","5292aceb42ef9b13a078305e683594fd"],["/_pages/hardware/electrophysiology/human/bio_amp/index.html","83c4d319e37b5ad4db45039be6f3d98b"],["/_pages/hardware/electrophysiology/human/bio_amp_back.jpg","9aaa15c385c9b5e8fdc05da7045265ad"],["/_pages/hardware/electrophysiology/human/bio_amp_frontal.jpg","3d657dfb8d0bf4def64975836264b46e"],["/_pages/hardware/electrophysiology/human/bpm_biosignal/index.html","abd5d09f6872517d5c3378a58f99d3e6"],["/_pages/hardware/electrophysiology/human/brain_map/index.html","88072af50c2ad1477c014295210f2b8e"],["/_pages/hardware/electrophysiology/human/open_bci/index.html","038b7ba5cc7faf18b8a19d2861dabad7"],["/_pages/hardware/electrophysiology/human/open_eeg/index.html","ef071cae56a6495add267893f8afcc19"],["/_pages/hardware/electrophysiology/human/open_exg/index.html","995b9427b778f8038536c3582cdefa1e"],["/_pages/hardware/microcontrollers/microcontrollers/index.html","bdc9e967f01f9ac9230ac2ab31d6b5b3"],["/_pages/hardware/microscopes/10_smartphone_microscope/index.html","d5562e29223e3dc2ac5b9da4891433ff"],["/_pages/hardware/microscopes/microscopes/index.html","9ac8a34022464a3eca91120d5ffaca2f"],["/_pages/hardware/microscopes/openflexure/index.html","1e526a422ecb2112a506cbda3a89c782"],["/_pages/hardware/microscopes/openstage/index.html","2010def916d6c2562f4d1eff443199b4"],["/_pages/hardware/microscopes/stereo_microscope/index.html","c111e6cc6ef133d0bb53caee4c254abe"],["/_pages/hardware/prosthetics_n_robots/fingertip_laser_sensor/index.html","b47c81ef0ebc8285c8f18cd193000c4a"],["/_pages/hardware/prosthetics_n_robots/intelligent_hearing_aid/index.html","5e2bcb1b1a929f36f33ead8ace9ef754"],["/_pages/hardware/prosthetics_n_robots/open-bionics/index.html","7f91084843e87d652504b9b821a9fb79"],["/_pages/hardware/prosthetics_n_robots/open_hand_project/index.html","07a05b4dadd30aca7a406ac9fe3e662f"],["/_pages/hardware/prosthetics_n_robots/prosthetics-and-robotics/index.html","32e68bda808e3d349fd602086e1c1487"],["/_pages/hardware/prosthetics_n_robots/super_releaser/index.html","457f0649d679d95f8d2d1aba1a1facbd"],["/_pages/hardware/prosthetics_n_robots/takktile/index.html","16091837fcd3c5f60f82c93d7165c703"],["/_pages/hardware/prosthetics_n_robots/the_yale_open_hand_project/index.html","8fa802ba194d76fce9bd74aa83da2817"],["/_pages/hardware/signal_generators/signal-generators/index.html","44d012dafc1845eec9e5d9aef927eb22"],["/_pages/hardware/stimulators/electric/tDCS/index.html","0e5624fed2c794132c2a560d9b227da0"],["/_pages/hardware/stimulators/optogenetics/optogenetics/index.html","48c86b4a27c95938fb5db58c322d182c"],["/_pages/hardware/stimulators/optogenetics/pulse-pal/index.html","72367dd2260521e1811d8541b6dbd5b5"],["/_pages/hardware/stimulators/stimulators/index.html","dd42f4ad0e76d9fec1d663c323e7d769"],["/_pages/hardware/stimulators/visual/BB_LED_matrix/index.html","b510903ef5a572bf6db6316ef715b1e9"],["/_pages/hardware/stimulators/visual/blinkeschild/index.html","4f43a1dab4231df50d9e9d9a1f2daeb6"],["/_pages/hardware/stimulators/visual/led_panels/index.html","ca275448ffc5aa54e59476cd273653e7"],["/_pages/learning/school_of_data/index.html","566ed68c5fcd455494d5431b1f44af4d"],["/_pages/learning/tutorials/human-psychophysics-using-arduino/arduino-script-posner-test/index.html","aa55b3befe718c017ad20ac62d288dc9"],["/_pages/learning/tutorials/human-psychophysics-using-arduino/index.html","d53e85dd471113be9ce7b7e9c2233b31"],["/_pages/learning/tutorials/human-psychophysics-using-arduino/python-posner-test/index.html","42861948bb475936ce3053414ce7b774"],["/_pages/learning/tutorials/human-psychophysics-using-arduino/schematics-posner-test/index.html","1e0b0bab5d48b483d00e207236c84de0"],["/_pages/learning/tutorials/index.html","73ec37b514cc089df7c90ef82c27a32b"],["/_pages/learning/tutorials/nose-poke-device-for-rats-using-arduino-and-3d-printed-parts/index.html","d1509463a45627380dc1aadd26e41355"],["/_pages/learning/tutorials/opening-mcd-files-with-python/index.html","3d359d3bcdaa52b60eea0ae4ad71c796"],["/_pages/learning/webportals/index.html","0a4e300bf9ef5de264e043caf05c19f8"],["/_pages/learning/youtube_as_a_resource_for_open_science_hardware/index.html","22aa502d5489cc7fc7888e00d754138d"],["/_pages/main_areas/backlog/index.html","8bd71344d41b6d2163d53bac25f46779"],["/_pages/main_areas/database/index.html","fc459e79b85f3b99f9aee14606fc8177"],["/_pages/main_areas/hardware/index.html","6f6ecb9a816fe6da6cafaee25b779e3d"],["/_pages/main_areas/learning/index.html","6670f90d26381cecb04f17fb14f54687"],["/_pages/main_areas/other/index.html","8a37798523c565e29cf17200c63244a4"],["/_pages/main_areas/software/index.html","afd865172ce21dc4336e9586d022641b"],["/_pages/other_projects/crowd-funding/index.html","775c30c2ad87ee141d13dceb1677dc14"],["/_pages/other_projects/open-lab-notebooks/index.html","e708336f878b4a5f6980d6bd19f48940"],["/_pages/other_projects/other-interesting-projects/index.html","a5715c0aee641d86f8d2e4dafe0ec524"],["/_pages/software/computer-vision-and-motion-tracking-software/index.html","c6a553f067cf5f543c69f4c378f8a508"],["/_pages/software/data-acquisition-and-processing/index.html","4d06e8fe64c389798618df9234ffd571"],["/_pages/software/data_analysis/brainbrowser/index.html","4c06d5e012426ec6fc8a58dc10c7023d"],["/_pages/software/data_analysis/data_analysis/index.html","ba3965299b1a153d578fcce8585d7302"],["/_pages/software/data_analysis/fiji/index.html","9f07f1a6f2a4f9150842b613d9415475"],["/_pages/software/data_analysis/nibabel/index.html","daa088cd7175a26f58b4d13c6af97ef0"],["/_pages/software/data_analysis/nipy/index.html","7ce8e6d4f9ac024de2cef9874cd8e58e"],["/_pages/software/data_analysis/pyspace/index.html","c1c24ecd1bd8e80b6a8f3f231df5a5ea"],["/_pages/software/data_analysis/tensor-flow/index.html","6d5070af7bccd7bf6678092349761db9"],["/_pages/software/image-office-suits-and-other-general-purpose-software/index.html","a6e291c3c475eebc67767e2ba20fcdff"],["/_pages/software/ipipet/index.html","c5367d899c5577f85b0d76908a9571f2"],["/_pages/software/lab-management-software/index.html","a00984130243da7b8486b760a5f35758"],["/_pages/software/linux-distributions/index.html","784fdc6e86e00d369525f8a5c4c04b97"],["/_pages/software/microscopes/micro-manager/index.html","accf2f3efacf8bcd1a28d9c33d991689"],["/_pages/software/microscopes/microscopes_software/index.html","da20610d1e5e330f3fdf1ccdebf1a3a7"],["/_pages/software/microscopes/ome-open-microscopy-environment/index.html","5c969c592db0b862d59cd687e800e65e"],["/_pages/software/psychophysics-toolboxes/index.html","513fa32c51643534daf18e7be5550c32"],["/_pages/software/python-for-neuroscience-frontiers-collection/index.html","e0c54ee4e375e9c822e629ffce57fdbf"],["/_pages/software/python-numpy-scipy-matplotlib/index.html","df35f18d7840eb7fe08af6f27b509407"],["/_pages/software/simulation_models/big-neuron/index.html","f1f26e678fe3b83b0e084e19c8863fac"],["/_pages/software/simulation_models/green-brain/index.html","b3c34685c10d8c55136269fb53f2d732"],["/_pages/software/simulation_models/neuronsneuronsneurons/index.html","f34a5a55fa8f166c55d90a4c91d79d7b"],["/_pages/software/simulation_models/simulation/index.html","2efebbc0ff03f591950a9cf8693d4392"],["/_pages/software/spike-gadgets/index.html","d52c2c0834406f09b132a5c6216129c1"],["/_pages/software/vision-egg/index.html","1c2142141e3095984eda3b5d409e1f5e"],["/about/index.html","4761689b3cc4fd4f553bf1c11c250bab"],["/assets/css/main.css","ece10e1ac7d9e87242a8df741a3016dd"],["/assets/img/favicon.jpg","ffb9f5c8afdda7fa4f3fd697e5147182"],["/assets/img/favicon_old.jpg","ffb9f5c8afdda7fa4f3fd697e5147182"],["/assets/img/icons/android-chrome-192x192.png","041b37a9d003b499cda832562f9a3c9a"],["/assets/img/icons/android-chrome-512x512.png","596fc7d9fbc24aeeb64fb67609e6fafe"],["/assets/img/icons/apple-touch-icon.png","8e307794c58beb5545d27b0862b89aed"],["/assets/img/icons/favicon-16x16.png","8fcbaa7e748a5b6649b572b26844b880"],["/assets/img/icons/favicon-32x32.png","b5a18daa995d5670d68be92792548561"],["/assets/img/icons/icon-github.svg","4e06335104a29f91e08d4ef420da7679"],["/assets/img/icons/icon-instagram.svg","1e1119e2628235ee4c8771bff15eb2ca"],["/assets/img/icons/icon-twitter.svg","30551913d5399d6520e8a74b6f1e23f0"],["/assets/img/icons/mstile-150x150.png","dc09becc475a7b1cf1a00ccbab55fb43"],["/assets/img/icons/safari-pinned-tab.svg","e92bcac58a0ad78152f640fa3b499c0c"],["/assets/img/pages/Parallella.jpg","28355ec3925e25b64c1a0e6193e0836c"],["/assets/img/pages/Parallella_lg.jpg","28355ec3925e25b64c1a0e6193e0836c"],["/assets/img/pages/Parallella_md.jpg","1a9b149e67821e45aebe54d76ba87a38"],["/assets/img/pages/Parallella_placehold.jpg","66a78a110decc7e1bc5e7333ba096d2c"],["/assets/img/pages/Parallella_sm.jpg","6df27c4301b489ac2286537a83b0b23e"],["/assets/img/pages/Parallella_thumb.jpg","b9299549f350d6f94783d8446427a6a6"],["/assets/img/pages/Parallella_thumb@2x.jpg","6a81faf6b011dd2a675d0cca539a9b69"],["/assets/img/pages/Parallella_xs.jpg","a19c4d450fc643d53202c50375da9a4c"],["/assets/img/pages/computer_cluster.jpg","7c37702d5be7dd36c12eddcf8efe3a23"],["/assets/img/pages/computer_cluster_lg.jpg","7c37702d5be7dd36c12eddcf8efe3a23"],["/assets/img/pages/computer_cluster_md.jpg","7c37702d5be7dd36c12eddcf8efe3a23"],["/assets/img/pages/computer_cluster_placehold.jpg","c5f3c5220eefa2b919ca37d1be8158ab"],["/assets/img/pages/computer_cluster_sm.jpg","7c37702d5be7dd36c12eddcf8efe3a23"],["/assets/img/pages/computer_cluster_thumb.jpg","4294f111e7c1f3b9a29437ba510c0159"],["/assets/img/pages/computer_cluster_thumb@2x.jpg","7c37702d5be7dd36c12eddcf8efe3a23"],["/assets/img/pages/computer_cluster_xs.jpg","c4f3020d1d7c4e3c2c8b638f593e9edb"],["/assets/img/pages/computers.jpg","385ec29156b75fe551d65be3b4ec6739"],["/assets/img/pages/computers_lg.jpg","385ec29156b75fe551d65be3b4ec6739"],["/assets/img/pages/computers_md.jpg","4e6ac419f2f5d736a10e7637551ee450"],["/assets/img/pages/computers_placehold.jpg","251263b8128e90c523a1a33d5eb76283"],["/assets/img/pages/computers_sm.jpg","7aea58e5d07d9af48e2ab2b0440f7a3c"],["/assets/img/pages/computers_thumb.jpg","3651ec14fd230f8a95ad9026c17c3da1"],["/assets/img/pages/computers_thumb@2x.jpg","385ec29156b75fe551d65be3b4ec6739"],["/assets/img/pages/computers_xs.jpg","8d12e9c9a9284804d527cbe6dc0c0e92"],["/assets/img/pages/led_panel.jpg","d0c5f57ed0cdfa652ccbabd96bbeb31b"],["/assets/img/pages/led_panel_lg.jpg","d0c5f57ed0cdfa652ccbabd96bbeb31b"],["/assets/img/pages/led_panel_md.jpg","f87f9b436515c5e39c1df392e82624cf"],["/assets/img/pages/led_panel_placehold.jpg","61344ff60ae4b84c8855a8f9a58b67b3"],["/assets/img/pages/led_panel_sm.jpg","ddd27e63386117c6274c67437b160cd0"],["/assets/img/pages/led_panel_thumb.jpg","7e5b5d696994a5df9d3d80d9729bd382"],["/assets/img/pages/led_panel_thumb@2x.jpg","d0c5f57ed0cdfa652ccbabd96bbeb31b"],["/assets/img/pages/led_panel_xs.jpg","edad284d5a9c368825de990ef055a315"],["/assets/img/pages/microcontroller.jpg","5b531f49991e90f5a29079e302b0025c"],["/assets/img/pages/microcontroller_lg.jpg","5b531f49991e90f5a29079e302b0025c"],["/assets/img/pages/microcontroller_md.jpg","91b9d96a50d5a0833f53d03404b597bf"],["/assets/img/pages/microcontroller_placehold.jpg","99504fb8f5c2c4e8d7351766e9c6beaa"],["/assets/img/pages/microcontroller_sm.jpg","1e13d7796410c220c8d3ab91f3511136"],["/assets/img/pages/microcontroller_thumb.jpg","73bd5f9fd9314e74f9b521bd4bf0752d"],["/assets/img/pages/microcontroller_thumb@2x.jpg","5b531f49991e90f5a29079e302b0025c"],["/assets/img/pages/microcontroller_xs.jpg","20395407dc4494e8e561c3bfa4c08015"],["/assets/img/pages/microscopes.jpg","8e6719adf43041dd9282c66b4a2312ef"],["/assets/img/pages/microscopes_lg.jpg","8e6719adf43041dd9282c66b4a2312ef"],["/assets/img/pages/microscopes_md.jpg","8e6719adf43041dd9282c66b4a2312ef"],["/assets/img/pages/microscopes_placehold.jpg","eee5c4ebcc2a5095bc22ae89aec6e798"],["/assets/img/pages/microscopes_sm.jpg","8e6719adf43041dd9282c66b4a2312ef"],["/assets/img/pages/microscopes_thumb.jpg","8e6719adf43041dd9282c66b4a2312ef"],["/assets/img/pages/microscopes_thumb@2x.jpg","8e6719adf43041dd9282c66b4a2312ef"],["/assets/img/pages/microscopes_xs.jpg","8e6719adf43041dd9282c66b4a2312ef"],["/assets/img/pages/openneuroscience.jpg","9c87656a5af4d34370e72b7a83971540"],["/assets/img/pages/openneuroscience_lg.jpg","c155bfa02a386a6cd1f221995511e16d"],["/assets/img/pages/openneuroscience_md.jpg","becfa230a37866e8d00e660d9c68d532"],["/assets/img/pages/openneuroscience_placehold.jpg","f63f36ec247011b657ca7ca202b8874a"],["/assets/img/pages/openneuroscience_sm.jpg","da18a98a28ea7c89f38974bdf1fa2c17"],["/assets/img/pages/openneuroscience_thumb.jpg","0149b6bdb81de9087db7515b6504b5b9"],["/assets/img/pages/openneuroscience_thumb@2x.jpg","2d9300d1246f4ce1328a2087c09059f9"],["/assets/img/pages/openneuroscience_xs.jpg","78d5ddd8f66d78e0f1bc59d3ad288c73"],["/assets/img/pages/shane-rounce-205187_placehold.jpg","249fc4a09bcfcbd7d5764f14c14ae82e"],["/assets/img/pages/shane-rounce-205187_thumb.jpg","c3b2dd0d95a6d3a44d7702f8c06b1e78"],["/assets/img/pages/sleek_placehold.jpg","0f48050cd7776895b98c6ce21597ff39"],["/assets/img/pages/sleek_thumb.jpg","f7b8a94ac9da8e5ea36bb9e459872400"],["/assets/img/pages/thermocycler.jpg","e72249bdec2da2bc22b5e1c1ba42e399"],["/assets/img/pages/thermocycler_lg.jpg","e72249bdec2da2bc22b5e1c1ba42e399"],["/assets/img/pages/thermocycler_md.jpg","2ee9a695daac390c5e3fb3851a9d126c"],["/assets/img/pages/thermocycler_placehold.jpg","96d4f9bed8893472e2c99ac9a94a7f74"],["/assets/img/pages/thermocycler_sm.jpg","6d72381889f8d39140889019a3e82a98"],["/assets/img/pages/thermocycler_thumb.jpg","783efb3cb6079faef48e552c93c821d6"],["/assets/img/pages/thermocycler_thumb@2x.jpg","e72249bdec2da2bc22b5e1c1ba42e399"],["/assets/img/pages/thermocycler_xs.jpg","fd0c4bd170d17786e658aa561dc7168b"],["/assets/img/posts/emile-perron-190221.jpg","4705474281b975b7a213b96e71f772e7"],["/assets/img/posts/emile-perron-190221_lg.jpg","aafe35b1dc6d9dc9293c8c2ef4121046"],["/assets/img/posts/emile-perron-190221_md.jpg","03ed35ed656429599daba312f0990a0f"],["/assets/img/posts/emile-perron-190221_placehold.jpg","67f40708f69ab671cee04d624258b85c"],["/assets/img/posts/emile-perron-190221_sm.jpg","4ce4178a62d5a456e90e7bc47bde50f5"],["/assets/img/posts/emile-perron-190221_thumb.jpg","f20085dfe2e36854f8a12f1fd6c50425"],["/assets/img/posts/emile-perron-190221_thumb@2x.jpg","b8fa22c3237de529316037f093b9cb4d"],["/assets/img/posts/emile-perron-190221_xs.jpg","ac32cbd525d72e932499668af5647d03"],["/assets/img/posts/shane-rounce-205187.jpg","bb774d6e05b2b55ffdabe11a8aac7c56"],["/assets/img/posts/shane-rounce-205187_lg.jpg","83cd838024fff9c3faec59fa1da97872"],["/assets/img/posts/shane-rounce-205187_md.jpg","628cf27bf658cf6de9df79ab9bf2cb2d"],["/assets/img/posts/shane-rounce-205187_placehold.jpg","249fc4a09bcfcbd7d5764f14c14ae82e"],["/assets/img/posts/shane-rounce-205187_sm.jpg","a2400a468e10d7d64528ac9c6bc3b6f0"],["/assets/img/posts/shane-rounce-205187_thumb.jpg","c3b2dd0d95a6d3a44d7702f8c06b1e78"],["/assets/img/posts/shane-rounce-205187_thumb@2x.jpg","b0722b63a92c92a44cd92c0201fc92a4"],["/assets/img/posts/shane-rounce-205187_xs.jpg","cd58fd23f3b3c1de2183beb9ed08327b"],["/assets/img/posts/sleek.jpg","a32252a618ffe8ae57c9ce9ab157a01b"],["/assets/img/posts/sleek_lg.jpg","95a1338aa524727f34950f269133e904"],["/assets/img/posts/sleek_md.jpg","4e35ceb2f5fffd3d758fade699b0b85a"],["/assets/img/posts/sleek_placehold.jpg","0f48050cd7776895b98c6ce21597ff39"],["/assets/img/posts/sleek_sm.jpg","f30af3d30b7df905d962e494750f5da0"],["/assets/img/posts/sleek_thumb.jpg","f7b8a94ac9da8e5ea36bb9e459872400"],["/assets/img/posts/sleek_thumb@2x.jpg","e67e2129dc58a100b98a5e027c964dbc"],["/assets/img/posts/sleek_xs.jpg","c8212cace6d446950556a3bf6efe4520"],["/assets/js/bundle.js","df854a763d7d3fd95381b95081eb822f"],["/categories/index.html","b948b99af41f0f60c44ab312ebc14eb3"],["/contact/index.html","58d87703c4aa87c282e3de557453989e"],["/gulpfile.babel.js","499ef2edde6e9b4fbafcb7c6f0cbc725"],["/index-1.html","74ae5fc7f9d3ce8a9eb84d22e16f8817"],["/index.html","80edc59a61090b47680050140d7db794"],["/sw.js","f2710c094d508263294e596fd56b173d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
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

var createCacheKey = function(originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function(originalUrl,
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







