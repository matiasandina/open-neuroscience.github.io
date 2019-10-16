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

var precacheConfig = [["/3d-printing/index.html","b714f634e2228def40201b05e7a73edd"],["/404/index.html","81da23ee65e47e1c5b3e7675b2a708ee"],["/_pages/database/addgene/index.html","11cddffce01b6b831f81d36f96c4a4d4"],["/_pages/database/allen-brain-map/index.html","f1abc76b822c3c8f5ba65638d389aaf8"],["/_pages/database/data-repositories/index.html","794eb88a63c139ff1fa2fb030f9cd54d"],["/_pages/database/genome-rnai/index.html","0343ca4f84e3ef5a1c05fd133194a5a6"],["/_pages/database/neuroelectro/index.html","8aa61a1ac1e54372e496993755a92ad3"],["/_pages/database/neuroimaging-databases/index.html","62f0564bab26fab422dd40b990469500"],["/_pages/database/neuromorpho/index.html","fe2b424fafb837fb8c036185a7afafb1"],["/_pages/database/open-science-framework/index.html","000aeae8a5f6a6f45b7600994bc181f2"],["/_pages/database/open-source-brain/index.html","7345415be86d8cff2582af80cab8dc07"],["/_pages/database/the-visible-human-project/index.html","90dff48a584cbe1f6c33f7cc813387d2"],["/_pages/hardware/behaviour_tools/autoreward2/index.html","e1c76526459d20812d8ff8d31db2d108"],["/_pages/hardware/behaviour_tools/behaviour_tools/index.html","79b7e72ab7159fa3e595c297ec47f292"],["/_pages/hardware/behaviour_tools/skinnerbox_rpi_python/index.html","21ab2c5a79d6a94437e39f8d610e45b8"],["/_pages/hardware/benchtop/benchtop/index.html","8722db3cfc472c6ab778ff9905862e24"],["/_pages/hardware/benchtop/centrifuges/Dremelfuge/index.html","c0418072df62481bf9aafe785a372b6a"],["/_pages/hardware/benchtop/centrifuges/Gogofuge/index.html","aa97d6a298142aa91a00db859ffb4c1e"],["/_pages/hardware/benchtop/centrifuges/OpenFuge/index.html","3bd5b4ed6a09574fa503efb2f6a3ce3d"],["/_pages/hardware/benchtop/openspritzer/index.html","823ee3bd097f9fdf79e3006bad5253ef"],["/_pages/hardware/benchtop/syringe_pumps/syringe_pump1/index.html","f31c7640e97d05de360580e594f9cd52"],["/_pages/hardware/benchtop/thermocyclers/5_dollar_pcr/index.html","0103fe9fb3f83230791a7d98fdcee9ec"],["/_pages/hardware/benchtop/thermocyclers/DIY_pcr/index.html","80daf4c3ad888f791039be8a987a54c6"],["/_pages/hardware/benchtop/thermocyclers/open_pcr/index.html","622db7bbd7c073f770ae034d6ba2349e"],["/_pages/hardware/computer_clusters/boinc/index.html","cfc81c313c2b2ac7df2a42c38096ef82"],["/_pages/hardware/computer_clusters/computer_clusters/index.html","42f22f04baf2e10ccdd1f7e2ae4e052e"],["/_pages/hardware/computer_clusters/parallela/index.html","1fbaf479d88abf15a6ea3c794d09d190"],["/_pages/hardware/computer_clusters/raspberry-pi-based/index.html","a00bbdafec30534f3d4518fee12e5837"],["/_pages/hardware/computers/computers/index.html","e2d3fd7a279a5b16e4ef16551563ba7b"],["/_pages/hardware/computers/red-pitaya/index.html","f2b07a9008e6b3c47b1f57fc0cd0249d"],["/_pages/hardware/electrophysiology/animal/Backyard_brains/index.html","2537380927c984e9e16ed32ae5fb4359"],["/_pages/hardware/electrophysiology/animal/open-ephys/index.html","6524660fc55eb9da4d904607ae8a2918"],["/_pages/hardware/electrophysiology/electrophysiology/index.html","f93ea071a8d9b49e38cf5282f5f97a19"],["/_pages/hardware/electrophysiology/human/attys/index.html","472ce0c0822326774b3c054c1d999a82"],["/_pages/hardware/electrophysiology/human/bio_amp/index.html","559521eb341c10f1c8149ae01d67e1b1"],["/_pages/hardware/electrophysiology/human/bio_amp_back.jpg","9aaa15c385c9b5e8fdc05da7045265ad"],["/_pages/hardware/electrophysiology/human/bio_amp_frontal.jpg","3d657dfb8d0bf4def64975836264b46e"],["/_pages/hardware/electrophysiology/human/bpm_biosignal/index.html","d9c8b9c01365866af4d0cb78334a12ad"],["/_pages/hardware/electrophysiology/human/brain_map/index.html","689bc247db7b4484102f0edc6114708c"],["/_pages/hardware/electrophysiology/human/open_bci/index.html","e9cadf06b7846a5c94a2a98bfa1f628b"],["/_pages/hardware/electrophysiology/human/open_eeg/index.html","2b85166419eddc3f3d092d2993623f04"],["/_pages/hardware/electrophysiology/human/open_exg/index.html","db375166a46bcbc5ba583f187545ee39"],["/_pages/hardware/microcontrollers/microcontrollers/index.html","55e73ce1d70df15ad08acfb24f0327b9"],["/_pages/hardware/microscopes/10_smartphone_microscope/index.html","8ab98c6fc824a5b08b9721cd5ff448c2"],["/_pages/hardware/microscopes/microscopes/index.html","ce500df0bcb6fe249a81e388ad0344ed"],["/_pages/hardware/microscopes/openflexure/index.html","52915225a3ff47c960f3b81e88f403d5"],["/_pages/hardware/microscopes/openstage/index.html","a24b6ea88f69afda00c1e63b8a3598de"],["/_pages/hardware/microscopes/stereo_microscope/index.html","aacd007b94a1ac7da3fe190457811843"],["/_pages/hardware/prosthetics_n_robots/fingertip_laser_sensor/index.html","5160204a8f51e073555e60cadb47394e"],["/_pages/hardware/prosthetics_n_robots/intelligent_hearing_aid/index.html","933e91b0fc5d0598faffeb04a1158336"],["/_pages/hardware/prosthetics_n_robots/open-bionics/index.html","ad665065cc95a84946c446efe375c2c2"],["/_pages/hardware/prosthetics_n_robots/open_hand_project/index.html","b172e37359121fbd7014b6a4cb6babb1"],["/_pages/hardware/prosthetics_n_robots/prosthetics-and-robotics/index.html","9ef6c744ff4195eb8357321479243c3f"],["/_pages/hardware/prosthetics_n_robots/super_releaser/index.html","cb7b93643281104e64cd5b13683c36c3"],["/_pages/hardware/prosthetics_n_robots/takktile/index.html","eb3f127c96806f4377f1ea8781e64078"],["/_pages/hardware/prosthetics_n_robots/the_yale_open_hand_project/index.html","5e2592e419a09be5b58d9f8aa8de779d"],["/_pages/hardware/signal_generators/signal-generators/index.html","63ef5f8074c6b4148a761d2480774944"],["/_pages/hardware/stimulators/electric/tDCS/index.html","83b470d58cdf91cf790b6851120f5efd"],["/_pages/hardware/stimulators/optogenetics/optogenetics/index.html","d08f6f82816fa37ce4ab67b975ecaba7"],["/_pages/hardware/stimulators/optogenetics/pulse-pal/index.html","f41eae0ad669321bff4bf8a1af5e4376"],["/_pages/hardware/stimulators/stimulators/index.html","772c4a24f288dc8752585df8380bfeba"],["/_pages/hardware/stimulators/visual/BB_LED_matrix/index.html","0e1f774f7ddef48d76cff2c463cd6086"],["/_pages/hardware/stimulators/visual/blinkeschild/index.html","5fe0780c9c3e51a518907590c4190d71"],["/_pages/hardware/stimulators/visual/led_panels/index.html","0bbbabddeb57f144fbe52599c6e89063"],["/_pages/learning/school_of_data/index.html","cbb344ec855b2b1cad697b2fee3380c4"],["/_pages/learning/tutorials/human-psychophysics-using-arduino/arduino-script-posner-test/index.html","592e15e4b6f5c1ee37b114a22e06dbc9"],["/_pages/learning/tutorials/human-psychophysics-using-arduino/index.html","b2379cc25a8570d54460f040df18e51f"],["/_pages/learning/tutorials/human-psychophysics-using-arduino/python-posner-test/index.html","36d20d8f352b6ee9dd5ddba632c128e0"],["/_pages/learning/tutorials/human-psychophysics-using-arduino/schematics-posner-test/index.html","0d170630d251632d3f2c30deb8c312b6"],["/_pages/learning/tutorials/index.html","6e9a77c0a723ba4427dd3ed2f3d2f5e7"],["/_pages/learning/tutorials/nose-poke-device-for-rats-using-arduino-and-3d-printed-parts/index.html","2d616f5a208555c373c3ea6bdb9b3e0e"],["/_pages/learning/tutorials/opening-mcd-files-with-python/index.html","47d638474dedb58327478e842e5a7259"],["/_pages/learning/webportals/index.html","2e5699efebec4375b813f425222eb4d4"],["/_pages/learning/youtube_as_a_resource_for_open_science_hardware/index.html","f2473c6712aa1aaa30b84d29d946bbb9"],["/_pages/main_areas/backlog/index.html","092c4cb5256b012cfaefef5e41aed4a9"],["/_pages/main_areas/database/index.html","a0899981c8fe52877d7128c43012b78d"],["/_pages/main_areas/hardware/index.html","3308c1213e65524d77a066f7c8dcf6ba"],["/_pages/main_areas/learning/index.html","36e2897ce59b48ae26291499847829b0"],["/_pages/main_areas/other/index.html","5cd3aaf4c47f3ff8463cfbe0cd699582"],["/_pages/main_areas/software/index.html","569f8f1b30294f6d5c3d0397c717141e"],["/_pages/other_projects/crowd-funding/index.html","3ff0fb5a2589e68ae99064237cb1ade8"],["/_pages/other_projects/open-lab-notebooks/index.html","82a84ce777e286a1e487dd2d4b00bea3"],["/_pages/other_projects/other-interesting-projects/index.html","b41a18612202d9faf9d63918d84ea2b1"],["/_pages/software/computer-vision-and-motion-tracking-software/index.html","de639b0fa72afbd889959ef05455494d"],["/_pages/software/data_analysis/brainbrowser/index.html","9c03132519a76e7495d96e40230c97b1"],["/_pages/software/data_analysis/data_analysis/index.html","e0a8f55063f919adb17935e6a05ebd51"],["/_pages/software/data_analysis/fiji/index.html","e10cec98115e5ed11818113f3c353755"],["/_pages/software/data_analysis/nibabel/index.html","baaea4d7b09a6ef5e9ad331dcbf69f35"],["/_pages/software/data_analysis/nipy/index.html","51be796f788059154b2c0c53e948cbd5"],["/_pages/software/data_analysis/pyspace/index.html","6a96e6ae07e444f9824b1ceb9f68e7c9"],["/_pages/software/data_analysis/tensor-flow/index.html","7f62188b746b12859cfa74e1c6da2e55"],["/_pages/software/image-office-suits-and-other-general-purpose-software/index.html","43d46660a4e09351fbf372c7e5a64301"],["/_pages/software/ipipet/index.html","e72bdefc7a45f6161b9a2d21ad23bd00"],["/_pages/software/lab-management-software/index.html","1b033438e375548b06184c074827fd41"],["/_pages/software/linux-distributions/index.html","5889dadbf6bba003761ec210064cfe0b"],["/_pages/software/microscopes/micro-manager/index.html","accf2f3efacf8bcd1a28d9c33d991689"],["/_pages/software/microscopes/microscopes_software/index.html","7d23ae49433fe1eadf705d5916a45f01"],["/_pages/software/microscopes/ome-open-microscopy-environment/index.html","cb17086147d83d6a4e09246f81eba7ed"],["/_pages/software/psychophysics-toolboxes/index.html","a2a62e7e998bd4723e7008ccd00c323f"],["/_pages/software/python-for-neuroscience-frontiers-collection/index.html","092fc50277ba7f59cad7b3e2ba195033"],["/_pages/software/python-numpy-scipy-matplotlib/index.html","b601b7765599484348f8c3212dba8b3a"],["/_pages/software/simulation_models/big-neuron/index.html","da31cd93f47ea5898f43bab9f89bbf35"],["/_pages/software/simulation_models/green-brain/index.html","4d5b0b363a07e5f835959882405b3446"],["/_pages/software/simulation_models/neuronsneuronsneurons/index.html","1c8dbd6d3b41a818f54a34da5f0700a8"],["/_pages/software/simulation_models/simulation/index.html","99d1e27afc5c11308f1bce3d7f90cbd4"],["/_pages/software/spike-gadgets/index.html","f03ca7b17099f2767ca10d07c50ae6c1"],["/_pages/software/vision-egg/index.html","d6ee51d7f40d0d033725b3473d050dfd"],["/about/index.html","12c94eeef69009218212c4fd9048110b"],["/assets/css/main.css","e27bd37969408ec9108dddd6595695b5"],["/assets/img/favicon.jpg","ffb9f5c8afdda7fa4f3fd697e5147182"],["/assets/img/favicon_old.jpg","ffb9f5c8afdda7fa4f3fd697e5147182"],["/assets/img/icons/android-chrome-192x192.png","041b37a9d003b499cda832562f9a3c9a"],["/assets/img/icons/android-chrome-512x512.png","596fc7d9fbc24aeeb64fb67609e6fafe"],["/assets/img/icons/apple-touch-icon.png","8e307794c58beb5545d27b0862b89aed"],["/assets/img/icons/favicon-16x16.png","8fcbaa7e748a5b6649b572b26844b880"],["/assets/img/icons/favicon-32x32.png","b5a18daa995d5670d68be92792548561"],["/assets/img/icons/icon-github.svg","4e06335104a29f91e08d4ef420da7679"],["/assets/img/icons/icon-instagram.svg","1e1119e2628235ee4c8771bff15eb2ca"],["/assets/img/icons/icon-twitter.svg","30551913d5399d6520e8a74b6f1e23f0"],["/assets/img/icons/mstile-150x150.png","dc09becc475a7b1cf1a00ccbab55fb43"],["/assets/img/icons/safari-pinned-tab.svg","e92bcac58a0ad78152f640fa3b499c0c"],["/assets/img/pages/Parallella.jpg","28355ec3925e25b64c1a0e6193e0836c"],["/assets/img/pages/Parallella_lg.jpg","28355ec3925e25b64c1a0e6193e0836c"],["/assets/img/pages/Parallella_md.jpg","1a9b149e67821e45aebe54d76ba87a38"],["/assets/img/pages/Parallella_placehold.jpg","66a78a110decc7e1bc5e7333ba096d2c"],["/assets/img/pages/Parallella_sm.jpg","6df27c4301b489ac2286537a83b0b23e"],["/assets/img/pages/Parallella_thumb.jpg","b9299549f350d6f94783d8446427a6a6"],["/assets/img/pages/Parallella_thumb@2x.jpg","6a81faf6b011dd2a675d0cca539a9b69"],["/assets/img/pages/Parallella_xs.jpg","a19c4d450fc643d53202c50375da9a4c"],["/assets/img/pages/computer_cluster.jpg","7c37702d5be7dd36c12eddcf8efe3a23"],["/assets/img/pages/computer_cluster_lg.jpg","7c37702d5be7dd36c12eddcf8efe3a23"],["/assets/img/pages/computer_cluster_md.jpg","7c37702d5be7dd36c12eddcf8efe3a23"],["/assets/img/pages/computer_cluster_placehold.jpg","c5f3c5220eefa2b919ca37d1be8158ab"],["/assets/img/pages/computer_cluster_sm.jpg","7c37702d5be7dd36c12eddcf8efe3a23"],["/assets/img/pages/computer_cluster_thumb.jpg","4294f111e7c1f3b9a29437ba510c0159"],["/assets/img/pages/computer_cluster_thumb@2x.jpg","7c37702d5be7dd36c12eddcf8efe3a23"],["/assets/img/pages/computer_cluster_xs.jpg","c4f3020d1d7c4e3c2c8b638f593e9edb"],["/assets/img/pages/computers.jpg","385ec29156b75fe551d65be3b4ec6739"],["/assets/img/pages/computers_lg.jpg","385ec29156b75fe551d65be3b4ec6739"],["/assets/img/pages/computers_md.jpg","4e6ac419f2f5d736a10e7637551ee450"],["/assets/img/pages/computers_placehold.jpg","251263b8128e90c523a1a33d5eb76283"],["/assets/img/pages/computers_sm.jpg","7aea58e5d07d9af48e2ab2b0440f7a3c"],["/assets/img/pages/computers_thumb.jpg","3651ec14fd230f8a95ad9026c17c3da1"],["/assets/img/pages/computers_thumb@2x.jpg","385ec29156b75fe551d65be3b4ec6739"],["/assets/img/pages/computers_xs.jpg","8d12e9c9a9284804d527cbe6dc0c0e92"],["/assets/img/pages/led_panel.jpg","d0c5f57ed0cdfa652ccbabd96bbeb31b"],["/assets/img/pages/led_panel_lg.jpg","d0c5f57ed0cdfa652ccbabd96bbeb31b"],["/assets/img/pages/led_panel_md.jpg","f87f9b436515c5e39c1df392e82624cf"],["/assets/img/pages/led_panel_placehold.jpg","61344ff60ae4b84c8855a8f9a58b67b3"],["/assets/img/pages/led_panel_sm.jpg","ddd27e63386117c6274c67437b160cd0"],["/assets/img/pages/led_panel_thumb.jpg","7e5b5d696994a5df9d3d80d9729bd382"],["/assets/img/pages/led_panel_thumb@2x.jpg","d0c5f57ed0cdfa652ccbabd96bbeb31b"],["/assets/img/pages/led_panel_xs.jpg","edad284d5a9c368825de990ef055a315"],["/assets/img/pages/microcontroller.jpg","5b531f49991e90f5a29079e302b0025c"],["/assets/img/pages/microcontroller_lg.jpg","5b531f49991e90f5a29079e302b0025c"],["/assets/img/pages/microcontroller_md.jpg","91b9d96a50d5a0833f53d03404b597bf"],["/assets/img/pages/microcontroller_placehold.jpg","99504fb8f5c2c4e8d7351766e9c6beaa"],["/assets/img/pages/microcontroller_sm.jpg","1e13d7796410c220c8d3ab91f3511136"],["/assets/img/pages/microcontroller_thumb.jpg","73bd5f9fd9314e74f9b521bd4bf0752d"],["/assets/img/pages/microcontroller_thumb@2x.jpg","5b531f49991e90f5a29079e302b0025c"],["/assets/img/pages/microcontroller_xs.jpg","20395407dc4494e8e561c3bfa4c08015"],["/assets/img/pages/microscopes.jpg","8e6719adf43041dd9282c66b4a2312ef"],["/assets/img/pages/microscopes_lg.jpg","8e6719adf43041dd9282c66b4a2312ef"],["/assets/img/pages/microscopes_md.jpg","8e6719adf43041dd9282c66b4a2312ef"],["/assets/img/pages/microscopes_placehold.jpg","eee5c4ebcc2a5095bc22ae89aec6e798"],["/assets/img/pages/microscopes_sm.jpg","8e6719adf43041dd9282c66b4a2312ef"],["/assets/img/pages/microscopes_thumb.jpg","8e6719adf43041dd9282c66b4a2312ef"],["/assets/img/pages/microscopes_thumb@2x.jpg","8e6719adf43041dd9282c66b4a2312ef"],["/assets/img/pages/microscopes_xs.jpg","8e6719adf43041dd9282c66b4a2312ef"],["/assets/img/pages/openneuroscience.jpg","9c87656a5af4d34370e72b7a83971540"],["/assets/img/pages/openneuroscience_lg.jpg","c155bfa02a386a6cd1f221995511e16d"],["/assets/img/pages/openneuroscience_md.jpg","becfa230a37866e8d00e660d9c68d532"],["/assets/img/pages/openneuroscience_placehold.jpg","f63f36ec247011b657ca7ca202b8874a"],["/assets/img/pages/openneuroscience_sm.jpg","da18a98a28ea7c89f38974bdf1fa2c17"],["/assets/img/pages/openneuroscience_thumb.jpg","0149b6bdb81de9087db7515b6504b5b9"],["/assets/img/pages/openneuroscience_thumb@2x.jpg","2d9300d1246f4ce1328a2087c09059f9"],["/assets/img/pages/openneuroscience_xs.jpg","78d5ddd8f66d78e0f1bc59d3ad288c73"],["/assets/img/pages/shane-rounce-205187_placehold.jpg","249fc4a09bcfcbd7d5764f14c14ae82e"],["/assets/img/pages/shane-rounce-205187_thumb.jpg","c3b2dd0d95a6d3a44d7702f8c06b1e78"],["/assets/img/pages/sleek_placehold.jpg","0f48050cd7776895b98c6ce21597ff39"],["/assets/img/pages/sleek_thumb.jpg","f7b8a94ac9da8e5ea36bb9e459872400"],["/assets/img/pages/thermocycler.jpg","e72249bdec2da2bc22b5e1c1ba42e399"],["/assets/img/pages/thermocycler_lg.jpg","e72249bdec2da2bc22b5e1c1ba42e399"],["/assets/img/pages/thermocycler_md.jpg","2ee9a695daac390c5e3fb3851a9d126c"],["/assets/img/pages/thermocycler_placehold.jpg","96d4f9bed8893472e2c99ac9a94a7f74"],["/assets/img/pages/thermocycler_sm.jpg","6d72381889f8d39140889019a3e82a98"],["/assets/img/pages/thermocycler_thumb.jpg","783efb3cb6079faef48e552c93c821d6"],["/assets/img/pages/thermocycler_thumb@2x.jpg","e72249bdec2da2bc22b5e1c1ba42e399"],["/assets/img/pages/thermocycler_xs.jpg","fd0c4bd170d17786e658aa561dc7168b"],["/assets/img/posts/emile-perron-190221.jpg","4705474281b975b7a213b96e71f772e7"],["/assets/img/posts/emile-perron-190221_lg.jpg","aafe35b1dc6d9dc9293c8c2ef4121046"],["/assets/img/posts/emile-perron-190221_md.jpg","03ed35ed656429599daba312f0990a0f"],["/assets/img/posts/emile-perron-190221_placehold.jpg","67f40708f69ab671cee04d624258b85c"],["/assets/img/posts/emile-perron-190221_sm.jpg","4ce4178a62d5a456e90e7bc47bde50f5"],["/assets/img/posts/emile-perron-190221_thumb.jpg","f20085dfe2e36854f8a12f1fd6c50425"],["/assets/img/posts/emile-perron-190221_thumb@2x.jpg","b8fa22c3237de529316037f093b9cb4d"],["/assets/img/posts/emile-perron-190221_xs.jpg","ac32cbd525d72e932499668af5647d03"],["/assets/img/posts/shane-rounce-205187.jpg","bb774d6e05b2b55ffdabe11a8aac7c56"],["/assets/img/posts/shane-rounce-205187_lg.jpg","83cd838024fff9c3faec59fa1da97872"],["/assets/img/posts/shane-rounce-205187_md.jpg","628cf27bf658cf6de9df79ab9bf2cb2d"],["/assets/img/posts/shane-rounce-205187_placehold.jpg","249fc4a09bcfcbd7d5764f14c14ae82e"],["/assets/img/posts/shane-rounce-205187_sm.jpg","a2400a468e10d7d64528ac9c6bc3b6f0"],["/assets/img/posts/shane-rounce-205187_thumb.jpg","c3b2dd0d95a6d3a44d7702f8c06b1e78"],["/assets/img/posts/shane-rounce-205187_thumb@2x.jpg","b0722b63a92c92a44cd92c0201fc92a4"],["/assets/img/posts/shane-rounce-205187_xs.jpg","cd58fd23f3b3c1de2183beb9ed08327b"],["/assets/img/posts/sleek.jpg","a32252a618ffe8ae57c9ce9ab157a01b"],["/assets/img/posts/sleek_lg.jpg","95a1338aa524727f34950f269133e904"],["/assets/img/posts/sleek_md.jpg","4e35ceb2f5fffd3d758fade699b0b85a"],["/assets/img/posts/sleek_placehold.jpg","0f48050cd7776895b98c6ce21597ff39"],["/assets/img/posts/sleek_sm.jpg","f30af3d30b7df905d962e494750f5da0"],["/assets/img/posts/sleek_thumb.jpg","f7b8a94ac9da8e5ea36bb9e459872400"],["/assets/img/posts/sleek_thumb@2x.jpg","e67e2129dc58a100b98a5e027c964dbc"],["/assets/img/posts/sleek_xs.jpg","c8212cace6d446950556a3bf6efe4520"],["/assets/js/bundle.js","3b47333b32e608c89a002c9cbc9dc3b1"],["/categories/index.html","ddb28574773f3f9d4f8f4d8261d57016"],["/contact/index.html","e3703d69bb277e884fd8e13653f2a17d"],["/gulpfile.babel.js","499ef2edde6e9b4fbafcb7c6f0cbc725"],["/index-1.html","cef04a1431d4a54e38e9e0a357759282"],["/index.html","e2f2e161817d996767e74e8976a7aef2"]];
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







