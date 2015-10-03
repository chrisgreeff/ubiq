angular.module("ubiq.templates").run(["$templateCache", function($templateCache) {$templateCache.put("ubiq/pages/landing/landing.html","<div class=\"uq-landing-video-fullscreen-container\">\n  <a class=\"uq-landing-video-fullscreen-close fa fa-close\" href=\"javascript:void(0)\"></a>\n  <video class=\"uq-landing-video-fullscreen\"\n    src=\"assets/videos/promo.mp4\"\n    preload=\"auto\"\n    controls=\"true\">\n  </video>\n</div>\n<div class=\"uq-landing-video-container\">\n  <video class=\"uq-landing-video\" src=\"assets/videos/landing-loop.mp4\" autoplay preload=\"auto\" muted loop></video>\n</div>\n<div class=\"uq-landing\">\n  <div class=\"uq-landing-content\">\n    <div class=\"uq-landing-logo\">\n      <svg class=\"ubiq-logo-container\" viewBox=\"0 0 90 90\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n        <!-- Generator: Sketch Beta 3.4 (15009) - http://www.bohemiancoding.com/sketch -->\n        <title>Artboard Copy</title>\n        <desc>Created with Sketch Beta.</desc>\n        <defs>\n          <path id=\"path-1\" d=\"M0,0.0173076923 L49.8259542,0.0173076923 L49.8259542,15 L0,15\"></path>\n          <linearGradient x1=\"3.74939946e-31%\" y1=\"100%\" x2=\"100%\" y2=\"1.11022302e-14%\" id=\"linearGradient-3\">\n            <stop stop-color=\"#0077FF\" offset=\"0%\"></stop>\n            <stop stop-color=\"#0082FF\" offset=\"49.613361%\"></stop>\n            <stop stop-color=\"#00AAFF\" offset=\"100%\"></stop>\n          </linearGradient>\n        </defs>\n        <g id=\"Logo\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n          <g id=\"Artboard-Copy\" sketch:type=\"MSArtboardGroup\">\n            <g id=\"Page-1-+-Clip-2-Copy\" sketch:type=\"MSLayerGroup\" transform=\"translate(20.000000, 17.000000)\">\n              <g  class=\"ubiq-logo-text\"id=\"Page-1\" transform=\"translate(0.000000, 42.000000)\">\n                <g id=\"Group-3\">\n                  <mask id=\"mask-2\" sketch:name=\"Clip 2\" fill=\"white\">\n                    <use xlink:href=\"#path-1\"></use>\n                  </mask>\n                  <g id=\"Clip-2\"></g>\n                </g>\n                <path d=\"M22.4415649,10.1596154 C22.4415649,9.57076923 22.2224809,9.16230769 21.7835496,8.93461538 C21.3453817,8.70730769 20.7606489,8.59346154 20.0301145,8.59346154 L18.1366031,8.59346154 L18.1366031,11.8469231 L20.0495802,11.8469231 C20.3156107,11.8469231 20.5911832,11.8234615 20.8766794,11.7765385 C21.1625573,11.7296154 21.4217176,11.6457692 21.6541603,11.5253846 C21.8866031,11.405 22.075916,11.2342308 22.2224809,11.0134615 C22.3686641,10.7926923 22.4415649,10.5080769 22.4415649,10.1596154 M21.9831679,4.51615385 C21.9831679,4.03423077 21.8003435,3.68269231 21.4350763,3.46192308 C21.0694275,3.24076923 20.5282061,3.13038462 19.8106489,3.13038462 L18.1366031,3.13038462 L18.1366031,6.06269231 L19.9701908,6.06269231 C20.6079771,6.06269231 21.1026336,5.93230769 21.4549237,5.67115385 C21.8068321,5.40961538 21.9831679,5.025 21.9831679,4.51615385 M25.8499618,10.4811538 C25.8499618,11.2576923 25.6965267,11.9107692 25.3915649,12.4392308 C25.085458,12.9684615 24.6801145,13.3930769 24.1755344,13.7146154 C23.6705725,14.0357692 23.0957634,14.2669231 22.4514885,14.4076923 C21.8068321,14.5480769 21.1457634,14.6184615 20.4682824,14.6184615 L16.5423282,14.6184615 C15.6064504,14.6184615 14.8476718,13.8538462 14.8476718,12.9107692 L14.8476718,2.10653846 C14.8476718,1.16346154 15.6064504,0.398846154 16.5423282,0.398846154 L20.4682824,0.398846154 C21.0133206,0.398846154 21.5713359,0.456153846 22.1427099,0.569615385 C22.7137023,0.683461538 23.2316412,0.877692308 23.6972901,1.15192308 C24.1621756,1.42692308 24.5408015,1.79846154 24.8335496,2.26692308 C25.1251527,2.73538462 25.2717176,3.33115385 25.2717176,4.05423077 C25.2717176,4.84461538 25.0587405,5.49730769 24.6339313,6.01269231 C24.2087405,6.52807692 23.6503435,6.89923077 22.9595038,7.12692308 L22.9595038,7.16730769 C23.3583588,7.23461538 23.7335496,7.35807692 24.0858397,7.53884615 C24.4373664,7.71961538 24.7434733,7.95076923 25.0026336,8.23153846 C25.2617939,8.51307692 25.4675191,8.84115385 25.6205725,9.21576923 C25.7732443,9.59076923 25.8499618,10.0126923 25.8499618,10.4811538 M11.669542,11.5959231 C11.3836641,12.2986154 10.9748855,12.9013077 10.4435878,13.4032308 C9.91229008,13.9055385 9.2710687,14.2966923 8.52030534,14.5782308 C7.76954198,14.8593846 6.9359542,15.0001538 6.01877863,15.0001538 C5.08900763,15.0001538 4.25160305,14.8593846 3.50770992,14.5782308 C2.76343511,14.2966923 2.13290076,13.9055385 1.61419847,13.4032308 C1.09625954,12.9013077 0.69778626,12.2986154 0.418396947,11.5959231 C0.139389313,10.8928462 7.63358782e-05,10.1132308 7.63358782e-05,9.25592308 L7.63358782e-05,2.10592308 C7.63358782e-05,1.16323077 0.758473282,0.399 1.69396947,0.399 L1.69396947,0.399 C2.62984733,0.399 3.38824427,1.16323077 3.38824427,2.10592308 L3.38824427,8.97515385 C3.38824427,9.36323077 3.43824427,9.73130769 3.53748092,10.0793846 C3.63748092,10.4278462 3.78977099,10.739 3.99625954,11.0132308 C4.20198473,11.2878462 4.47412214,11.5055385 4.81305344,11.6663077 C5.15198473,11.8266923 5.56076336,11.9070769 6.03900763,11.9070769 C6.51725191,11.9070769 6.92564885,11.8266923 7.26458015,11.6663077 C7.60351145,11.5055385 7.87908397,11.2878462 8.09167939,11.0132308 C8.30427481,10.739 8.45694656,10.4278462 8.55007634,10.0793846 C8.64282443,9.73130769 8.68977099,9.36323077 8.68977099,8.97515385 L8.68977099,2.10592308 C8.68977099,1.16323077 9.44854962,0.399 10.3840458,0.399 L10.4038931,0.399 C11.3393893,0.399 12.0977863,1.16323077 12.0977863,2.10592308 L12.0977863,9.25592308 C12.0977863,10.1132308 11.9550382,10.8928462 11.669542,11.5959231 M28.1015267,12.8911923 L28.1015267,2.12619231 C28.1015267,1.17234615 28.869084,0.398884615 29.8156489,0.398884615 L29.8156489,0.398884615 C30.7622137,0.398884615 31.5293893,1.17234615 31.5293893,2.12619231 L31.5293893,12.8911923 C31.5293893,13.8450385 30.7622137,14.6185 29.8156489,14.6185 L29.8156489,14.6185 C28.869084,14.6185 28.1015267,13.8450385 28.1015267,12.8911923 M45.3415649,7.36815385 C45.3415649,6.75238462 45.245,6.18315385 45.0526336,5.66123077 C44.8598855,5.13892308 44.5873664,4.69046154 44.2358397,4.31546154 C43.8835496,3.94084615 43.4614122,3.64930769 42.9698092,3.44161538 C42.4782061,3.23430769 41.9400382,3.13007692 41.355687,3.13007692 C40.784313,3.13007692 40.2560687,3.23430769 39.7709542,3.44161538 C39.2858397,3.64930769 38.864084,3.94084615 38.505687,4.31546154 C38.1465267,4.69046154 37.8675191,5.13892308 37.6682824,5.66123077 C37.4690458,6.18315385 37.3694275,6.75238462 37.3694275,7.36815385 C37.3694275,8.01084615 37.4656107,8.59661538 37.6583588,9.12546154 C37.8507252,9.65430769 38.1232443,10.1096923 38.4755344,10.4912308 C38.8274427,10.8727692 39.2457634,11.1673846 39.7312595,11.3746923 C40.2159924,11.5823846 40.7507252,11.6862308 41.335458,11.6862308 C41.9068321,11.6862308 42.4385115,11.5823846 42.9301145,11.3746923 C43.4217176,11.1673846 43.8469084,10.8727692 44.2053053,10.4912308 C44.5644656,10.1096923 44.8430916,9.65430769 45.0427099,9.12546154 C45.2419466,8.59661538 45.3415649,8.01084615 45.3415649,7.36815385 L45.3415649,7.36815385 Z M41.2358397,14.6185385 C40.1198092,14.6185385 39.0965267,14.4577692 38.1667557,14.1366154 C37.2366031,13.8150769 36.4427099,13.3431538 35.7850763,12.7204615 C35.1270611,12.0977692 34.615229,11.3346923 34.2499618,10.4308462 C33.8846947,9.527 33.7022519,8.49276923 33.7022519,7.32815385 C33.7022519,6.24315385 33.8946183,5.25276923 34.2804962,4.35546154 C34.665229,3.45853846 35.2003435,2.68853846 35.8846947,2.04584615 C36.5690458,1.40315385 37.3793511,0.904307692 38.316374,0.549307692 C39.2530153,0.195076923 40.2659924,0.0173846154 41.355687,0.0173846154 C42.4446183,0.0173846154 43.4549237,0.195076923 44.3850763,0.549307692 C45.3148473,0.904307692 46.1190458,1.40007692 46.7969084,2.03584615 C47.4743893,2.672 48.0026336,3.43507692 48.3812595,4.32546154 C48.7598855,5.21584615 48.9491985,6.19661538 48.9491985,7.26738462 C48.9491985,7.817 48.8892748,8.32892308 48.7694275,8.80392308 C48.6499618,9.27969231 48.4908015,9.71123077 48.2915649,10.0996923 C48.0919466,10.4877692 47.8659924,10.8327692 47.6137023,11.1339231 C47.3610305,11.4350769 47.1087405,11.6862308 46.8564504,11.887 L46.8564504,11.947 L48.4572137,11.9146923 C49.2087405,11.8993077 49.825916,12.5089231 49.825916,13.2662308 C49.825916,14.0131538 49.2251527,14.6185385 48.484313,14.6185385 L41.2358397,14.6185385 Z\" id=\"Fill-4\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n              </g>\n              <path class=\"ubiq-logo-mark\" d=\"M26.107181,7.08781205 L26.107181,26.7866338 C26.107181,27.6260165 25.4933264,28.483962 24.6577843,28.7105569 C23.6991299,28.971077 22.892819,28.3619165 22.892819,27.4222517 L22.892819,7.6545127 C22.892819,4.37038003 20.2304355,2.17761551 16.9463028,2.75647804 C13.6623835,3.33576729 11,6.46734312 11,9.75147578 L11,21.4176999 C11,28.8210806 17.0965126,33.7479197 24.5001067,32.4423319 C31.9034874,31.1369574 38,24.0602404 38,16.6568597 L38,4.99063559 C38,2.06133093 35.8812736,0.000213366208 33.093004,0 C32.7552453,0 32.4083118,0.0300846353 32.0534838,0.0926009341 C28.7695645,0.671890188 26.107181,3.80367938 26.107181,7.08781205 Z\" id=\"Clip-2-Copy\" fill=\"url(#linearGradient-3)\" sketch:type=\"MSShapeGroup\"></path>\n            </g>\n          </g>\n        </g>\n      </svg>\n    </div>\n    <div class=\"uq-landing-header\">Dance everywhere.</div>\n    <div class=\"uq-landing-sub-header\">Take dance classes online, on-demand.</div>\n    <button class=\"uq-landing-play\">\n      <i class=\"fa fa-play\"></i>\n    </button>\n    <div id=\"mc_embed_signup\">\n      <form action=\"http://ubiqstudios.us11.list-manage.com/subscribe/post?u=99160718fa96fabb3cb3f3728&amp;id=f94e975877\" method=\"post\" id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\" target=\"_blank\" novalidate>\n        <div id=\"mc_embed_signup_scroll\">\n          <input type=\"email\" value=\"\" name=\"EMAIL\" class=\"email\" id=\"mce-EMAIL\" placeholder=\"Email address\" required><input type=\"submit\" value=\"Get early access\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button\">\n          <div style=\"position: absolute; left: -5000px;\">\n            <input type=\"text\" name=\"b_db5056b448153ed514339df40_e95544f881\" tabindex=\"-1\" value=\"\">\n          </div>\n        </div>\n      </form>\n    </div>\n    <!-- <div class=\"uq-landing-subscriptions\">Join <span class=\"uq-landing-subscriptions-count\">645</span> other early birdies</div> -->\n  </div>\n</div>\n");}]);