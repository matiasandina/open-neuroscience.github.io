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

var precacheConfig = [["/3d-printing/index.html","e2c348bc410abdca14ee38dd378b3eb6"],["/404/index.html","f2bdd6214ceca110d6da3c4855f5bc71"],["/_pages/database/addgene/index.html","d001cba58d98e95a8228693d3639ff60"],["/_pages/database/allen-brain-map/index.html","2f702b0221881f1fd18203f1378076ba"],["/_pages/database/data-repositories/index.html","9786d23cc739f397dc0426210c432e02"],["/_pages/database/genome-rnai/index.html","d805e2c7f072829c79af2d35db7c18be"],["/_pages/database/neuroelectro/index.html","d1a6be6622910eadceb22cbcd22dca5e"],["/_pages/database/neuroimaging-databases/index.html","f65bf3fd5c6dce200cb0db98121d17e7"],["/_pages/database/neuromorpho/index.html","82838a941669225c5c2a649aa17e808b"],["/_pages/database/open-science-framework/index.html","3a9a1cfd50505e33f1fd4ad75f6d6455"],["/_pages/database/open-source-brain/index.html","a25be46f70ad335041975dccfd41c7ec"],["/_pages/database/the-visible-human-project/index.html","cac6a128b31a8b7149e0c1d6aa436289"],["/_pages/hardware/behaviour_tools/autoreward2/index.html","6cbea96b31d86e851e69b62f5ce92ef8"],["/_pages/hardware/behaviour_tools/behaviour_tools/index.html","8f722ea9a76fe069a0894819497b56cc"],["/_pages/hardware/behaviour_tools/skinnerbox_rpi_python/index.html","7c022a83960182e1a423fa7cea008741"],["/_pages/hardware/benchtop/benchtop/index.html","9ed487afaa7f3f55c925bc135346fc0e"],["/_pages/hardware/benchtop/centrifuges/Dremelfuge/index.html","0c6004363eb7523c6afe35391c786325"],["/_pages/hardware/benchtop/centrifuges/Gogofuge/index.html","286d006e02fa08c2602c7541d7aaa81e"],["/_pages/hardware/benchtop/centrifuges/OpenFuge/index.html","118c80ebeb212ad74032939f71eacfaa"],["/_pages/hardware/benchtop/openspritzer/index.html","4e3be5317f20024de149cea001aa2413"],["/_pages/hardware/benchtop/syringe_pumps/syringe_pump1/index.html","6b1836228814a468b56c58c2e22e52c2"],["/_pages/hardware/benchtop/thermocyclers/5_dollar_pcr/index.html","cb38cae28f57325b9a7c06f8c30f27f7"],["/_pages/hardware/benchtop/thermocyclers/DIY_pcr/index.html","5aadcbf0a41eb03a466a408524cc56e9"],["/_pages/hardware/benchtop/thermocyclers/open_pcr/index.html","5e1814adf7dabc422491c258f9ffe296"],["/_pages/hardware/computer_clusters/boinc/index.html","56fc61969538233bc0b1ba4bb284a407"],["/_pages/hardware/computer_clusters/computer_clusters/index.html","c855334ffcf0c242021e8644f2d6173d"],["/_pages/hardware/computer_clusters/parallela/index.html","2b0d19d9d87fbcce2079cb19ecdc9cad"],["/_pages/hardware/computer_clusters/raspberry-pi-based/index.html","2ca6fdb8c0f72642f9f97cfe15705732"],["/_pages/hardware/computers/computers/index.html","d14162837a5ee32c0f21153c567af0cb"],["/_pages/hardware/computers/red-pitaya/index.html","fb57ae4f7adeccc7dfb5627f011db7e8"],["/_pages/hardware/electrophysiology/animal/Backyard_brains/index.html","f336e086511f98ff00c0cb036afe988c"],["/_pages/hardware/electrophysiology/animal/open-ephys/index.html","47ad1db3ef2ffba04cfdaf76d93ba8a9"],["/_pages/hardware/electrophysiology/electrophysiology/index.html","f7f6a03850fa7eec436ee686ea8994ae"],["/_pages/hardware/electrophysiology/human/attys/index.html","23b093b3dc761f35b1049aae56db7658"],["/_pages/hardware/electrophysiology/human/bio_amp/index.html","d893adc628dd267d1d740541996d0aa6"],["/_pages/hardware/electrophysiology/human/bio_amp_back.jpg","9aaa15c385c9b5e8fdc05da7045265ad"],["/_pages/hardware/electrophysiology/human/bio_amp_frontal.jpg","3d657dfb8d0bf4def64975836264b46e"],["/_pages/hardware/electrophysiology/human/bpm_biosignal/index.html","a923d9b314a43114c142106767819f56"],["/_pages/hardware/electrophysiology/human/brain_map/index.html","cedaa3dda170d448ff4aa355509bdcbf"],["/_pages/hardware/electrophysiology/human/open_bci/index.html","19148197698065f8cd9f5b09b5a861b7"],["/_pages/hardware/electrophysiology/human/open_eeg/index.html","27d8144317562883c0c1ce24fb6ba8d4"],["/_pages/hardware/electrophysiology/human/open_exg/index.html","932693cd44476a9a1e6691015dbc129a"],["/_pages/hardware/microcontrollers/microcontrollers/index.html","0444ffe1ae836092194a2ea4854c23d6"],["/_pages/hardware/microscopes/10_smartphone_microscope/index.html","16253e30939c48183de85b36f288b3e6"],["/_pages/hardware/microscopes/microscopes/index.html","981562efe4f1084705f07bc909b9171a"],["/_pages/hardware/microscopes/openflexure/index.html","9c3b2a774e57f3b283800a86df3d6fee"],["/_pages/hardware/microscopes/openstage/index.html","fc4866e1e3c75ed9b109cc8646b04128"],["/_pages/hardware/microscopes/stereo_microscope/index.html","206dadfa077d21628ccf624fa7e78b89"],["/_pages/hardware/prosthetics_n_robots/fingertip_laser_sensor/index.html","f99b414202cd635813cc9c74173bd6c4"],["/_pages/hardware/prosthetics_n_robots/intelligent_hearing_aid/index.html","e4729d492924f11d97a88f92d3f49361"],["/_pages/hardware/prosthetics_n_robots/open-bionics/index.html","8bca601821c0f1488990e62d080affd0"],["/_pages/hardware/prosthetics_n_robots/open_hand_project/index.html","9f35ee77d880bb39a34a7b5970780e7c"],["/_pages/hardware/prosthetics_n_robots/prosthetics-and-robotics/index.html","91196a42c0663ad338ef413f0c4edda2"],["/_pages/hardware/prosthetics_n_robots/super_releaser/index.html","4ce14596ba55c39877d1bbeb814b9189"],["/_pages/hardware/prosthetics_n_robots/takktile/index.html","d38778e2629deb3cecfbfae61d64aa32"],["/_pages/hardware/prosthetics_n_robots/the_yale_open_hand_project/index.html","5eb45fbc13f8c3f56cca58a680854b1b"],["/_pages/hardware/signal_generators/signal-generators/index.html","ac0b0bd528f7bf9f62174e17947c05da"],["/_pages/hardware/stimulators/electric/tDCS/index.html","2801c07207bd91b3365911dabcb328f2"],["/_pages/hardware/stimulators/optogenetics/optogenetics/index.html","037f9ba7cf5c8f2a53c3b1aa7184dce3"],["/_pages/hardware/stimulators/optogenetics/pulse-pal/index.html","bee2cad0cfa3fb29cfac89bb8aa387d2"],["/_pages/hardware/stimulators/stimulators/index.html","a7670d1f9e9d0fe2983398dfc8972abe"],["/_pages/hardware/stimulators/visual/BB_LED_matrix/index.html","69f55cb857673bc6921b590103ec3051"],["/_pages/hardware/stimulators/visual/blinkeschild/index.html","14423b07658a3b8e81df0a55f274ed4e"],["/_pages/hardware/stimulators/visual/led_panels/index.html","f7114e246bd488cd6efb02a98fa2e5e7"],["/_pages/learning/school_of_data/index.html","3c949876ee54266e18d9df0ec6835397"],["/_pages/learning/tutorials/human-psychophysics-using-arduino/arduino-script-posner-test/index.html","09c5ed2b2910bc614d03349a615be2b7"],["/_pages/learning/tutorials/human-psychophysics-using-arduino/index.html","f76020c47975f93114bfd93012cb1516"],["/_pages/learning/tutorials/human-psychophysics-using-arduino/python-posner-test/index.html","9767dcc60a27426de45b9128812ae40c"],["/_pages/learning/tutorials/human-psychophysics-using-arduino/schematics-posner-test/index.html","4d3a34dc4be5ae6a239c98cc1837c49b"],["/_pages/learning/tutorials/index.html","3c003f6dfc3e8b3fc75952852a3b8249"],["/_pages/learning/tutorials/nose-poke-device-for-rats-using-arduino-and-3d-printed-parts/index.html","8b736865ac85e0a7e7dd921f82fc72dd"],["/_pages/learning/tutorials/opening-mcd-files-with-python/index.html","6875252f66cf7a8d8bf590ae3f757e56"],["/_pages/learning/webportals/index.html","0f890272daced56384159f9f43679a63"],["/_pages/learning/youtube_as_a_resource_for_open_science_hardware/index.html","ac37e9f468eb0fb7ad688b876222a895"],["/_pages/main_areas/backlog/index.html","ac8ad1f5ac887413b278bba614ffd03f"],["/_pages/main_areas/database/index.html","c21a4c553fd27adbb298175f9a4d7e12"],["/_pages/main_areas/hardware/index.html","a8119dcdfd8e7f2f916cf66817aa37df"],["/_pages/main_areas/learning/index.html","a665d6a8fa8b17c2e4d1e0541c0ff084"],["/_pages/main_areas/other/index.html","245f1ff61a52a3cdc28a21e366c76f2e"],["/_pages/main_areas/software/index.html","834dba7d7b31c120fb35222b115465ac"],["/_pages/other_projects/crowd-funding/index.html","7b8a6e05f318dd26c69bee5f10bc61e3"],["/_pages/other_projects/open-lab-notebooks/index.html","21df759da464678186e7f0bae241b9a8"],["/_pages/other_projects/other-interesting-projects/index.html","e12e92d8f2118fa07830003b4a0d7edd"],["/_pages/software/computer-vision-and-motion-tracking-software/index.html","2011f2c417ec3648e62c195ab85700ea"],["/_pages/software/data_analysis/brainbrowser/index.html","37d7445f0261e62bdc783f9bf19f4f48"],["/_pages/software/data_analysis/data_analysis/index.html","7c9f90f65a240527a1a4c01f8cc9730d"],["/_pages/software/data_analysis/fiji/index.html","97cbc6b88bf70d88c8fd65e6732e7c65"],["/_pages/software/data_analysis/nibabel/index.html","ebea3ec3cd20bb807aa2294f1d11a1b5"],["/_pages/software/data_analysis/nipy/index.html","55c0459d08027767408f53df21ec7dc4"],["/_pages/software/data_analysis/pyspace/index.html","e94510c68f02d8a6d810ed588e1717a7"],["/_pages/software/data_analysis/tensor-flow/index.html","601fef701f49badfe42489f6da29c1e7"],["/_pages/software/image-office-suits-and-other-general-purpose-software/index.html","52d26d17fdc521d0d7eecaa51a9562b0"],["/_pages/software/ipipet/index.html","98f9d2d697325d602b66c6500ba2b80a"],["/_pages/software/lab-management-software/index.html","7a509a4cb795f9fc6064d825571eee6d"],["/_pages/software/linux-distributions/index.html","95d39b55de694206212dc624ee7e1919"],["/_pages/software/microscopes/micro-manager/index.html","accf2f3efacf8bcd1a28d9c33d991689"],["/_pages/software/microscopes/microscopes_software/index.html","7737e8d8520c6f4269f0fa7d4c3f3259"],["/_pages/software/microscopes/ome-open-microscopy-environment/index.html","3de838730eff975aa2d8e9b872ba0ec9"],["/_pages/software/psychophysics-toolboxes/index.html","1ad581792ce7890d9da6017c909758e4"],["/_pages/software/python-for-neuroscience-frontiers-collection/index.html","62f0c2f9c3a92a78f6bf7b525ae14274"],["/_pages/software/python-numpy-scipy-matplotlib/index.html","63bb6a9ef4f0505d06ed1450ee0adec3"],["/_pages/software/simulation_models/big-neuron/index.html","03660579576a812c367c41460801dba4"],["/_pages/software/simulation_models/green-brain/index.html","6587ac3b60c59e9bb80bd25b1a2c9c08"],["/_pages/software/simulation_models/neuronsneuronsneurons/index.html","3b85befe45e0a32239b99d18a479368a"],["/_pages/software/simulation_models/simulation/index.html","4ba3b13e58b4d6210437fe8953e0963f"],["/_pages/software/spike-gadgets/index.html","677d4e20df9d77eebacc27695068499a"],["/_pages/software/vision-egg/index.html","af4b5f2d66fc6691a370a7c1948a8da9"],["/about/index.html","ec32c709341355df816d7af58028453e"],["/assets/css/main.css","e27bd37969408ec9108dddd6595695b5"],["/assets/img/favicon.jpg","ffb9f5c8afdda7fa4f3fd697e5147182"],["/assets/img/favicon_old.jpg","ffb9f5c8afdda7fa4f3fd697e5147182"],["/assets/img/icons/android-chrome-192x192.png","4df4c8779d47bcaa69516050281773b9"],["/assets/img/icons/android-chrome-256x256.png","939ec88a61f407945a27d867fca1651d"],["/assets/img/icons/apple-touch-icon.png","366666899d15cf8f6811cc73ee0d63de"],["/assets/img/icons/favicon-16x16.png","f625044491b20a5df78571ba266cbcf6"],["/assets/img/icons/favicon-32x32.png","67502381e45848a4ab76123364675ffe"],["/assets/img/icons/icon-github.svg","4e06335104a29f91e08d4ef420da7679"],["/assets/img/icons/icon-instagram.svg","1e1119e2628235ee4c8771bff15eb2ca"],["/assets/img/icons/icon-twitter.svg","30551913d5399d6520e8a74b6f1e23f0"],["/assets/img/icons/mstile-150x150.png","1cea2ceb806d1a018330a51a1d8b73b6"],["/assets/img/icons/safari-pinned-tab.svg","398ef6b25c0f7f3f6e54c112a8facc5f"],["/assets/img/pages/Parallella.jpg","28355ec3925e25b64c1a0e6193e0836c"],["/assets/img/pages/Parallella_lg.jpg","28355ec3925e25b64c1a0e6193e0836c"],["/assets/img/pages/Parallella_md.jpg","1a9b149e67821e45aebe54d76ba87a38"],["/assets/img/pages/Parallella_placehold.jpg","66a78a110decc7e1bc5e7333ba096d2c"],["/assets/img/pages/Parallella_sm.jpg","6df27c4301b489ac2286537a83b0b23e"],["/assets/img/pages/Parallella_thumb.jpg","b9299549f350d6f94783d8446427a6a6"],["/assets/img/pages/Parallella_thumb@2x.jpg","6a81faf6b011dd2a675d0cca539a9b69"],["/assets/img/pages/Parallella_xs.jpg","a19c4d450fc643d53202c50375da9a4c"],["/assets/img/pages/computer_cluster.jpg","7c37702d5be7dd36c12eddcf8efe3a23"],["/assets/img/pages/computer_cluster_lg.jpg","7c37702d5be7dd36c12eddcf8efe3a23"],["/assets/img/pages/computer_cluster_md.jpg","7c37702d5be7dd36c12eddcf8efe3a23"],["/assets/img/pages/computer_cluster_placehold.jpg","c5f3c5220eefa2b919ca37d1be8158ab"],["/assets/img/pages/computer_cluster_sm.jpg","7c37702d5be7dd36c12eddcf8efe3a23"],["/assets/img/pages/computer_cluster_thumb.jpg","4294f111e7c1f3b9a29437ba510c0159"],["/assets/img/pages/computer_cluster_thumb@2x.jpg","7c37702d5be7dd36c12eddcf8efe3a23"],["/assets/img/pages/computer_cluster_xs.jpg","c4f3020d1d7c4e3c2c8b638f593e9edb"],["/assets/img/pages/computers.jpg","385ec29156b75fe551d65be3b4ec6739"],["/assets/img/pages/computers_lg.jpg","385ec29156b75fe551d65be3b4ec6739"],["/assets/img/pages/computers_md.jpg","4e6ac419f2f5d736a10e7637551ee450"],["/assets/img/pages/computers_placehold.jpg","251263b8128e90c523a1a33d5eb76283"],["/assets/img/pages/computers_sm.jpg","7aea58e5d07d9af48e2ab2b0440f7a3c"],["/assets/img/pages/computers_thumb.jpg","3651ec14fd230f8a95ad9026c17c3da1"],["/assets/img/pages/computers_thumb@2x.jpg","385ec29156b75fe551d65be3b4ec6739"],["/assets/img/pages/computers_xs.jpg","8d12e9c9a9284804d527cbe6dc0c0e92"],["/assets/img/pages/led_panel.jpg","d0c5f57ed0cdfa652ccbabd96bbeb31b"],["/assets/img/pages/led_panel_lg.jpg","d0c5f57ed0cdfa652ccbabd96bbeb31b"],["/assets/img/pages/led_panel_md.jpg","f87f9b436515c5e39c1df392e82624cf"],["/assets/img/pages/led_panel_placehold.jpg","61344ff60ae4b84c8855a8f9a58b67b3"],["/assets/img/pages/led_panel_sm.jpg","ddd27e63386117c6274c67437b160cd0"],["/assets/img/pages/led_panel_thumb.jpg","7e5b5d696994a5df9d3d80d9729bd382"],["/assets/img/pages/led_panel_thumb@2x.jpg","d0c5f57ed0cdfa652ccbabd96bbeb31b"],["/assets/img/pages/led_panel_xs.jpg","edad284d5a9c368825de990ef055a315"],["/assets/img/pages/microcontroller.jpg","5b531f49991e90f5a29079e302b0025c"],["/assets/img/pages/microcontroller_lg.jpg","5b531f49991e90f5a29079e302b0025c"],["/assets/img/pages/microcontroller_md.jpg","91b9d96a50d5a0833f53d03404b597bf"],["/assets/img/pages/microcontroller_placehold.jpg","99504fb8f5c2c4e8d7351766e9c6beaa"],["/assets/img/pages/microcontroller_sm.jpg","1e13d7796410c220c8d3ab91f3511136"],["/assets/img/pages/microcontroller_thumb.jpg","73bd5f9fd9314e74f9b521bd4bf0752d"],["/assets/img/pages/microcontroller_thumb@2x.jpg","5b531f49991e90f5a29079e302b0025c"],["/assets/img/pages/microcontroller_xs.jpg","20395407dc4494e8e561c3bfa4c08015"],["/assets/img/pages/microscopes.jpg","8e6719adf43041dd9282c66b4a2312ef"],["/assets/img/pages/microscopes_lg.jpg","8e6719adf43041dd9282c66b4a2312ef"],["/assets/img/pages/microscopes_md.jpg","8e6719adf43041dd9282c66b4a2312ef"],["/assets/img/pages/microscopes_placehold.jpg","eee5c4ebcc2a5095bc22ae89aec6e798"],["/assets/img/pages/microscopes_sm.jpg","8e6719adf43041dd9282c66b4a2312ef"],["/assets/img/pages/microscopes_thumb.jpg","8e6719adf43041dd9282c66b4a2312ef"],["/assets/img/pages/microscopes_thumb@2x.jpg","8e6719adf43041dd9282c66b4a2312ef"],["/assets/img/pages/microscopes_xs.jpg","8e6719adf43041dd9282c66b4a2312ef"],["/assets/img/pages/openneuroscience.jpg","134d444034e828c65358fd7c403803a2"],["/assets/img/pages/openneuroscience_lg.jpg","134d444034e828c65358fd7c403803a2"],["/assets/img/pages/openneuroscience_md.jpg","437d48f57b1ce1574c7dba3f31116e60"],["/assets/img/pages/openneuroscience_placehold.jpg","c90e58edddbea145bc212c0677094160"],["/assets/img/pages/openneuroscience_sm.jpg","eb70fc235628e444d5c76089e8ec34b6"],["/assets/img/pages/openneuroscience_thumb.jpg","7315cf3cf8b00369fd5340d21476adc9"],["/assets/img/pages/openneuroscience_thumb@2x.jpg","7a403e45bb03dace34a4f0710e47c72e"],["/assets/img/pages/openneuroscience_xs.jpg","c05487e325e5e60701dfcb4a372a5b97"],["/assets/img/pages/shane-rounce-205187_placehold.jpg","249fc4a09bcfcbd7d5764f14c14ae82e"],["/assets/img/pages/shane-rounce-205187_thumb.jpg","c3b2dd0d95a6d3a44d7702f8c06b1e78"],["/assets/img/pages/sleek_placehold.jpg","0f48050cd7776895b98c6ce21597ff39"],["/assets/img/pages/sleek_thumb.jpg","f7b8a94ac9da8e5ea36bb9e459872400"],["/assets/img/pages/thermocycler.jpg","e72249bdec2da2bc22b5e1c1ba42e399"],["/assets/img/pages/thermocycler_lg.jpg","e72249bdec2da2bc22b5e1c1ba42e399"],["/assets/img/pages/thermocycler_md.jpg","2ee9a695daac390c5e3fb3851a9d126c"],["/assets/img/pages/thermocycler_placehold.jpg","96d4f9bed8893472e2c99ac9a94a7f74"],["/assets/img/pages/thermocycler_sm.jpg","6d72381889f8d39140889019a3e82a98"],["/assets/img/pages/thermocycler_thumb.jpg","783efb3cb6079faef48e552c93c821d6"],["/assets/img/pages/thermocycler_thumb@2x.jpg","e72249bdec2da2bc22b5e1c1ba42e399"],["/assets/img/pages/thermocycler_xs.jpg","fd0c4bd170d17786e658aa561dc7168b"],["/assets/img/posts/emile-perron-190221.jpg","4705474281b975b7a213b96e71f772e7"],["/assets/img/posts/emile-perron-190221_lg.jpg","aafe35b1dc6d9dc9293c8c2ef4121046"],["/assets/img/posts/emile-perron-190221_md.jpg","03ed35ed656429599daba312f0990a0f"],["/assets/img/posts/emile-perron-190221_placehold.jpg","67f40708f69ab671cee04d624258b85c"],["/assets/img/posts/emile-perron-190221_sm.jpg","4ce4178a62d5a456e90e7bc47bde50f5"],["/assets/img/posts/emile-perron-190221_thumb.jpg","f20085dfe2e36854f8a12f1fd6c50425"],["/assets/img/posts/emile-perron-190221_thumb@2x.jpg","b8fa22c3237de529316037f093b9cb4d"],["/assets/img/posts/emile-perron-190221_xs.jpg","ac32cbd525d72e932499668af5647d03"],["/assets/img/posts/shane-rounce-205187.jpg","bb774d6e05b2b55ffdabe11a8aac7c56"],["/assets/img/posts/shane-rounce-205187_lg.jpg","83cd838024fff9c3faec59fa1da97872"],["/assets/img/posts/shane-rounce-205187_md.jpg","628cf27bf658cf6de9df79ab9bf2cb2d"],["/assets/img/posts/shane-rounce-205187_placehold.jpg","249fc4a09bcfcbd7d5764f14c14ae82e"],["/assets/img/posts/shane-rounce-205187_sm.jpg","a2400a468e10d7d64528ac9c6bc3b6f0"],["/assets/img/posts/shane-rounce-205187_thumb.jpg","c3b2dd0d95a6d3a44d7702f8c06b1e78"],["/assets/img/posts/shane-rounce-205187_thumb@2x.jpg","b0722b63a92c92a44cd92c0201fc92a4"],["/assets/img/posts/shane-rounce-205187_xs.jpg","cd58fd23f3b3c1de2183beb9ed08327b"],["/assets/img/posts/sleek.jpg","a32252a618ffe8ae57c9ce9ab157a01b"],["/assets/img/posts/sleek_lg.jpg","95a1338aa524727f34950f269133e904"],["/assets/img/posts/sleek_md.jpg","4e35ceb2f5fffd3d758fade699b0b85a"],["/assets/img/posts/sleek_placehold.jpg","0f48050cd7776895b98c6ce21597ff39"],["/assets/img/posts/sleek_sm.jpg","f30af3d30b7df905d962e494750f5da0"],["/assets/img/posts/sleek_thumb.jpg","f7b8a94ac9da8e5ea36bb9e459872400"],["/assets/img/posts/sleek_thumb@2x.jpg","e67e2129dc58a100b98a5e027c964dbc"],["/assets/img/posts/sleek_xs.jpg","c8212cace6d446950556a3bf6efe4520"],["/assets/js/bundle.js","3b47333b32e608c89a002c9cbc9dc3b1"],["/categories/index.html","985b40524643f289893a1edc2659af22"],["/contact/index.html","ccb0aebf9bf4beb7ba5d6a2bf55c9690"],["/getting-started/index.html","8a64a085c39cf8c52c7ebf6f4ec66671"],["/gulpfile.babel.js","499ef2edde6e9b4fbafcb7c6f0cbc725"],["/index-1.html","cef04a1431d4a54e38e9e0a357759282"],["/index.html","4f1f1cc931c750a15d088b362c0dd9bd"],["/markdown-cheatsheet/index.html","4d33b35016988599fe52dd6ea0ed75fa"],["/super-long-article/index.html","6cb33cdbebf58d9d448bae1c96e06b1c"],["/welcome-to-jekyll/index.html","ad68860a3f79c4da88d5de41d711ea66"],["/welcome-to-jekyll11/index.html","bf8b54c7ffa98cc415b7c2a489b6c2af"]];
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







