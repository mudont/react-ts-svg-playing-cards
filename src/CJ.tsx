import React from 'react';

export default function CJ(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="card" face="JC" height="3.5in" preserveAspectRatio="none" viewBox="-120 -168 240 336" width="2.5in" {...props}>
      <defs>
        <symbol id="VCJ" viewBox="-500 -500 1000 1000" preserveAspectRatio="xMinYMid">
          <path d="M50 -460L250 -460M150 -460L150 250A100 100 0 0 1 -250 250L-250 220" stroke="black" strokeWidth={80} strokeLinecap="square" strokeMiterlimit="1.5" fill="none" />
        </symbol>
        <symbol id="SCJ" viewBox="-600 -600 1200 1200" preserveAspectRatio="xMinYMid">
          <path d="M30 150C35 385 85 400 130 500L-130 500C-85 400 -35 385 -30 150A10 10 0 0 0 -50 150A210 210 0 1 1 -124 -51A10 10 0 0 0 -110 -65A230 230 0 1 1 110 -65A10 10 0 0 0 124 -51A210 210 0 1 1 50 150A10 10 0 0 0 30 150Z" fill="black" />
        </symbol>
        <symbol id="CJ6" preserveAspectRatio="none" viewBox="0 0 1300 2000">
          <path stroke="#44F" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} fill="none" d="M524.94219,513.71628 570,540 696.32944,478.87285M61.131504,535.03979C54.178982,543.56322 55,548.2266 59.572437,555.45395M57.436923,562.74915c-6.952522,8.52343 -6.131504,13.18681 -1.559067,20.41416M54.358105,590.66376c-6.952522,8.52343 -6.131504,13.18681 -1.559067,20.41416M61.336759,615.49956c-6.952522,8.52343 -6.131504,13.18681 -1.559067,20.41416M35,540c-3.989188,5.32793 -1.136095,7.23471 0,10M34.178982,567.91461c-3.989188,5.32793 -1.136095,7.23471 0,10M31.510673,596.03448c-3.989188,5.32793 -1.136095,7.23471 0,10M31.305418,620.66502c-3.989188,5.32793 -1.136095,7.23471 0,10M60,505c5,5 -5,25 -5,25M395,250c15,-20 25,-20 40,-20 15,0 40,20 40,20M535,255c15,-20 27.85465,-25.69394 45,-25 12.00867,0.48604 30,15 30,15M430.14851,245.27223C433.13092,248.92766 435,254.1728 435,260c0,11.04569 -6.71573,20 -15,20 -8.28427,0 -15,-8.95431 -15,-20 0,-6.19035 2.1093,-11.72383 5.42187,-15.39242M573.02246,250.0676C574.28068,252.994 575,256.385 575,260c0,11.04569 -6.71572,20 -14.99999,20 -8.28426,0 -15.87081,-6.05157 -15.87081,-17.09726 0,-6.37213 2.235,-12.04825 5.71679,-15.71076M610,510l78.91137,-37.13476M615,500l69.81856,-32.85579M480,460c10.05839,-6.04941 25,0 35,5" />
          <use xlinkHref="#SCJ" height={75} width={75} transform="translate(504,728)scale(1,0.8)rotate(0)translate(-37,-37)" />
          <use xlinkHref="#SCJ" height={75} width={75} transform="translate(504,844)scale(1,0.8)rotate(0)translate(-37,-37)" />
          <use xlinkHref="#SCJ" height={75} width={75} transform="translate(826,643)scale(1,0.8)rotate(0)translate(-37,-37)" />
        </symbol>
        <symbol id="CJ5" preserveAspectRatio="none" viewBox="0 0 1300 2000">
          <path stroke="#44F" strokeLinecap="round" strokeLinejoin="round" strokeWidth={6} fill="none" d="M921.5584,121.32505l-25.06035,-3.83091C790.98611,101.36213 682.19484,86.319179 569.24805,86.884766 501.47997,87.224118 432.21491,93.183179 361.26758,107.89648l-22.18361,4.59993M425,415c5,25 5,75 -30,85 -35,10 -70,-15 -70,-15M110,478.44827V160M7.4505806e-8,1660 110,1550V565.47619M109.95201,1423.7913C424.07906,1162.6897 468.2177,839.16669 479.23801,495.46355M355.72662,1118.1009C598.77762,1034.369 691.65151,666.22954 1063.9731,699.42986M337.79794,1152.6587C477.38073,1117.6271 566.80423,1000.2114 664.91602,900.93164 763.64016,801.0322 867.29093,716.74099 1042.0702,725.9351M452.01172,469.22266C442.44035,813.79185 407.37593,1129.2105 110,1387.1999M1075,473.93267v213.5947M1055,464.08046V698.41264M1035,455.45977V697.39668M905,420.77175V711.32982M885,417.69294V717.28043M888.35147,418.24254C1053.687,443.04334 1120.384,493.99629 1190.053,560.56336M411.10947,985.25328c28.18823,14.12981 52.95191,32.58732 77.58649,51.20782M425.07502,935.13431c39.01902,20.44444 70.87078,43.70883 100.95715,67.66779M431.6644,907.97662c43.89269,20.06879 81.16297,46.29935 117.27493,73.60764M439.19952,873.67289c45.42505,18.69801 84.55409,43.20019 120.34225,70.78225M475.75681,586.07993 580,645 885.05185,485.21094M473.69317,607.98768 580,670 885.07716,510.19768M472.06117,636.48852 585,695 884.97261,535.33716M560,682.15731V944.56475M580,692.02662V949.35427M600,686.94683V927.4386M730,617.81609V803.49173M750,607.24548v180.7166M770,596.88013v176.7134M478.28528,527.59159 570,580 889.1957,418.27418M685,765a20,20 0 0 0 -20,-20 20,20 0 0 0 -20,20 20,20 0 0 0 20,20 20,20 0 0 0 20,-20v0M645,745c-15,-30 10,-25 20,-20 10,-5 35,-10 20,20 30,-15 25,10 20,20 5,10 10.5986,34.35524 -20,20 15,30 -10,25 -20,20 -10,5 -35,10 -20,-20 -30,15 -25,-10 -20,-20 -5,-10 -10,-35 20,-20v0M621.22182,904.55082C621.28126,899.51183 623.14063,893.71874 625,890c-5,-10 -10,-35 20,-20 -15,-30 10,-25 20,-20 3.93291,-1.96646 10.186,-3.93291 15.41341,-3.7702M654.93215,657.28493C657.88917,659.01101 661.32909,660 665,660c10.34529,0 18.85601,-7.85473 19.89374,-17.92576M708.47024,629.03231C707.85847,633.05744 706.42923,637.14153 705,640c5,10 10.5986,34.35524 -20,20 15,30 -10,25 -20,20 -9.48298,4.74149 -32.455,9.48298 -22.01342,-15.62267M402.49337,1008.3289l67.14457,44.7631M905.36285,433.04428l129.76455,194.6469M1035.3607,626.95891l-47.64218,71.46328M905.81917,633.72876l45.6819,68.52284M1019.9947,450.00801C981.78128,507.32809 942.8382,565.7427 905.98244,621.02634M905.5499,674.78861l21.31847,31.97717M1016.1664,697.21275 1035,668.96289M438.92527,1000.6752l12.60593,-23.72532c12.10544,-20.21602 39.57139,-3.42402 28.54654,17.13075l-14.46068,24.47757M480.07774,994.08063c12.10544,-20.21603 37.36544,-2.35665 26.34059,18.19817l-12.10737,20.4941M411.10947,985.25328l14.08112,-26.50172c12.10545,-20.21602 37.36546,-2.35644 26.34061,18.19832M70,487.06896V200H1.1920929e-6M70,566.09195V554.18719M70,618.43185V578.40722M-1.4901161e-7,1600 70,1530V631.36289M2.9802322e-7,160H140L0,2.5M0,130H80L-1.1920929e-6,49.999999M315,895a7.5,7.5 0 0 1 -7.5,7.5 7.5,7.5 0 0 1 -7.5,-7.5 7.5,7.5 0 0 1 7.5,-7.5 7.5,7.5 0 0 1 7.5,7.5v0M315,895c30,-40 80,5 90,-10M315,900c9.92015,49.00602 72.40887,27.15943 75,45M317.96713,896.20352C350.85395,878.30444 400,925 405,885M390,945C395,915 323.66951,924.63575 317.58247,898.75815 342.27133,923.29003 385,930 395,920M395,920c4.03107,-20.98038 -63.40093,-33.21694 -80,-20M332.44813,825.12588a7.4603248,7.5 0 0 1 -7.02189,7.91627 7.4603248,7.5 0 0 1 -7.87438,-7.05923 7.4603248,7.5 0 0 1 7.02189,-7.91627 7.4603248,7.5 0 0 1 7.87438,7.05923v0M332.44813,825.12588C359.96735,783.47715 412.17911,825.54685 421.25746,810M332.7323,830.11771c12.63674,48.35917 73.45173,22.97793 77.03889,40.64131M335.46315,826.15791C367.10529,806.40905 418.56537,850.22034 421.25746,810M409.77119,870.75902c3.26042,-30.23667 -67.02919,-16.54114 -74.54485,-42.02868 25.91237,23.08119 68.72693,27.33886 78.08943,16.78384M413.31577,845.51418c2.81082,-21.17642 -64.85034,-29.54022 -80.58347,-15.39647M347.10147,748.30477a7.124427,7.5 0 0 1 -6.53004,8.0774 7.124427,7.5 0 0 1 -7.6729,-6.87428 7.124427,7.5 0 0 1 6.53004,-8.0774 7.124427,7.5 0 0 1 7.6729,6.87428v0M347.10147,748.30477c25.35824,-42.27737 76.13001,-1.43275 84.45577,-17.1865M347.48243,753.28866c13.12686,48.05245 70.6306,21.26415 74.44335,38.83942M350.00263,749.26643c29.77557,-20.47921 79.86795,22.12401 81.55461,-18.14816M421.92578,792.12808c2.44857,-30.30439 -64.35748,-14.9784 -72.09273,-40.2844 25.2461,22.4726 66.21555,25.73376 74.92225,14.9639M424.7553,766.80758c2.21835,-21.2361 -62.56284,-28.02466 -77.27287,-13.51892M358.61025,679.75951a6.8523829,7.5 0 0 1 -5.62361,8.638 6.8523829,7.5 0 0 1 -7.89211,-6.15508 6.8523829,7.5 0 0 1 5.6236,-8.638 6.8523829,7.5 0 0 1 7.89212,6.15508v0M358.61025,679.75951C379.59229,635.34548 431.45022,671.44835 438.19217,655M359.36641,684.69054c16.34992,46.68793 69.35127,14.79911 74.3841,31.96468M361.46578,680.45529C388.39141,657.35945 439.73629,695.27585 438.19217,655M433.75051,716.65522c-0.0318,-30.41379 -62.84669,-9.10381 -72.24499,-33.61686 25.95591,20.10679 65.47125,19.65141 72.96937,8.13409M434.47489,691.17245c0.45923,-21.3582 -62.15078,-22.26413 -75.10848,-6.48191M366.66849,602.4113a6.7617659,7.5 0 0 1 -5.54924,8.638 6.7617659,7.5 0 0 1 -7.78774,-6.15508 6.7617659,7.5 0 0 1 5.54924,-8.638 6.7617659,7.5 0 0 1 7.78774,6.15508v0M366.66849,602.4113c20.70458,-44.41403 71.87673,-8.31116 78.52952,-24.75951M367.41466,607.34233c16.1337,46.68793 68.43415,14.79911 73.40043,31.96468M369.48626,603.10708c26.56957,-23.09584 77.23545,14.82056 75.71175,-25.45529M440.81509,639.30701c-0.0314,-30.41379 -62.0156,-9.10381 -71.28961,-33.61686 25.61266,20.10679 64.60545,19.65141 72.00441,8.13409M441.52989,613.82424c0.45316,-21.3582 -61.32889,-22.26413 -74.11523,-6.48191M366.79778,536.69341a6.9239796,7.5 0 0 1 -5.48179,8.78876 6.9239796,7.5 0 0 1 -8.11376,-5.93781 6.9239796,7.5 0 0 1 5.48179,-8.78877 6.9239796,7.5 0 0 1 8.11376,5.93782v0M366.79778,536.69341c20.17245,-44.97276 73.38686,-10.29616 79.81857,-26.92336M367.6751,541.60227c17.59017,46.22728 70.39471,12.90213 75.87363,29.92503M369.69826,537.31105c26.66694,-23.82338 79.40485,12.6802 76.91809,-27.541M443.54873,571.5273c-0.73212,-30.40347 -63.69314,-7.38609 -73.75087,-31.63507 26.68173,19.39229 66.58705,17.8588 73.89608,6.14046M443.69394,546.03269c-0.0277,-21.36409 -63.29307,-20.56131 -76.01884,-4.43042M292.67212,964.01265a7.7297737,8.033013 0 0 1 -8.61448,6.99376 7.7297737,8.033013 0 0 1 -6.72975,-8.95243 7.7297737,8.033013 0 0 1 8.61448,-6.99376 7.7297737,8.033013 0 0 1 6.72975,8.95243v0M292.67212,964.01265c35.71441,-38.60581 81.20764,15.76164 93.32187,1.12124M292.04388,969.32805c3.99024,53.39265 70.658,38.32765 71.06695,57.63175M295.55612,965.67953c35.89054,-14.73384 80.29717,41.32467 90.43787,-0.54564M363.11083,1026.9598c8.8842,-31.23932 -65.29395,-30.30996 -68.26919,-58.61472 22.17303,29.30315 65.03917,42.01582 76.52515,32.69082M371.36679,1001.0359c6.75974,-21.77746 -60.68222,-43.59103 -79.32291,-31.70785M262.60643,1034.0629a7.6725262,8.0129647 0 0 1 -8.61142,6.8943 7.6725262,8.0129647 0 0 1 -6.60143,-8.9936 7.6725262,8.0129647 0 0 1 8.61145,-6.8943 7.6725262,8.0129647 0 0 1 6.6014,8.9936v0M262.60643,1034.0629c35.78576,-38.16922 80.46511,16.4917 92.61704,2.0034M261.93643,1039.3588c3.49397,53.295 69.79686,38.9005 70.03409,58.1595M265.45438,1035.7529c35.75198,-14.3562 79.33807,41.9811 89.76909,0.3134M331.97052,1097.5183c9.09099,-31.0759 -64.54282,-30.8523 -67.24858,-59.1134 21.75184,29.439 64.18765,42.526 75.66957,33.3334M340.39151,1071.7383c6.89968,-21.658 -59.84939,-44.0558 -78.45508,-32.3795M225.49119,1102.2459a7.898364,8.1522458 0 0 1 -9.76855,5.5913 7.898364,8.1522458 0 0 1 -5.417,-10.0827 7.898364,8.1522458 0 0 1 9.76855,-5.5911 7.898364,8.1522458 0 0 1 5.417,10.0825v0M225.49119,1102.2459c41.97521,-32.8135 79.53901,29.1789 94.01425,16.4995M224.04068,1107.4705c-4.17399,54.1772 65.42545,50.0605 62.87306,69.4779M228.14585,1104.392c38.48622,-8.8558 74.69364,54.6526 91.35959,14.3534M286.91374,1176.9484c13.76492,-29.85 -61.24325,-41.1399 -59.89841,-70.0022 17.87746,33.0261 59.18806,52.8316 72.21282,45.3767M299.22815,1152.3229c10.1674,-20.7155 -54.54881,-53.6928 -75.18747,-44.8524M177.4942,1171.1669a8.0838015,8.1216615 0 0 1 -10.52491,4.4844 8.0838015,8.1216615 0 0 1 -4.46342,-10.5744 8.0838015,8.1216615 0 0 1 10.5249,-4.4842 8.0838015,8.1216615 0 0 1 4.46343,10.5742v0M177.4942,1171.1669c46.14057,-27.9763 77.91722,37.4988 93.97092,26.5002M175.47371,1176.1864c-9.89085,53.2247 61.37742,56.6628 56.75725,75.6247M179.97264,1173.5798c40.09427,-4.6174 70.33247,62.2132 91.49248,24.0873M232.23096,1251.8111c17.11901,-28.087 -58.04976,-47.3731 -53.67499,-75.8229 14.75635,34.651 54.74027,58.7346 68.77352,52.7554M247.32949,1228.7436c12.50604,-19.4256 -49.92868,-59.0867 -71.85578,-52.5572M126.00296,1228.7656a8.4144971,8.7147547 0 0 1 -11.22436,4.0936 8.4144971,8.7147547 0 0 1 -3.95241,-11.6251 8.4144971,8.7147547 0 0 1 11.22433,-4.0934 8.4144971,8.7147547 0 0 1 3.95244,11.6249v0M126.00296,1228.7656c49.7453,-26.8527 78.51878,45.4068 95.90854,34.7095M123.579,1234.0049c-13.72081,56.3338 60.09544,64.8162 54.06817,84.8119M128.42156,1231.5165c41.95181,-2.2441 69.03931,71.3635 93.48994,31.9586M177.64717,1318.8168c19.6027,-28.9261 -57.23977,-54.6435 -50.85326,-84.8163 13.0869,38.1027 53.06615,66.5877 68.032,61.1297M194.82591,1295.1302c14.2497,-19.9611 -48.04473,-66.6408 -71.24691,-61.1253M110.3229,1212.5306C248.86351,1085.0942 364.67316,805.72847 350.93045,497.68883M128.50082,1363.3931C136.69929,1353.8007 126.18698,1335.1357 110,1320M110,1360c7.73824,5.0394 13.60908,4.7074 18.50082,3.3931M110,1385c5.30641,-6.5242 4.35523,-12.857 1.00345,-19.8725M110,1320c17.6894,18.5616 31.77766,36.9644 48.47052,14.6648M110.70376,1295.7933c22.17059,15.1963 35.71637,44.3443 47.53752,38.4248M110.31331,986.83572C198.98484,880.84738 217.43443,789.00309 236.45279,697.04425M15,200c0,24.26703 20,45.73297 20,70 0,24.26703 -20,45.73297 -20,70M17.257476,634.90582C22.489233,653.36612 35,670.80697 35,690c0,24.26703 -20,45.73297 -20,70M16.198926,609.32446c-0.448033,2.08152 -0.786429,4.1784 -0.987591,6.2945M15,340c0,24.26703 20,45.73297 20,70 0,24.26703 -20,45.73297 -20,70 0,18.66661 11.833887,35.67582 17.296014,53.57743M15,760c0,24.26703 20,45.73297 20,70 0,24.26703 -20,45.73297 -20,70 0,24.26703 20,45.73297 20,70 0,24.26703 -20,45.733 -20,70 0,24.267 20,45.733 20,70 0,24.267 -20,45.733 -20,70 0,24.267 20,45.733 20,70 0,24.267 -20,45.733 -20,70 0,24.267 20,45.733 20,70 0,24.267 -20,45.733 -20,70 0,24.267 20,45.733 20,70 0,17.9923 -10.994342,34.4448 -16.679976,51.6407M30,200c0,24.26703 20,45.73297 20,70 0,24.26703 -20,45.73297 -20,70M33.147354,637.8317C38.779746,655.21906 50,671.8238 50,690c0,24.26703 -20,45.73297 -20,70M30,340c0,24.26703 20,45.73297 20,70 0,24.26703 -20,45.73297 -20,70 0,18.20941 11.261297,34.84162 16.883466,52.26362M30,760c0,24.26703 20,45.73297 20,70 0,24.26703 -20,45.73297 -20,70 0,24.26703 20,45.73297 20,70 0,24.26703 -20,45.733 -20,70 0,24.267 20,45.733 20,70 0,24.267 -20,45.733 -20,70 0,24.267 20,45.733 20,70 0,24.267 -20,45.733 -20,70 0,24.267 20,45.733 20,70 0,24.267 -20,45.733 -20,70 0,24.267 20,45.733 20,70 0,8.7432 -2.596225,17.1229 -5.917871,25.4009M45,200c0,24.26703 20,45.73297 20,70 0,24.26703 -20,45.73297 -20,70M47.774248,636.65166C53.26688,654.46935 65,671.41304 65,690c0,24.26703 -20,45.73297 -20,70M45,340c0,24.26703 20,45.73297 20,70 0,24.26703 -20,45.73297 -20,70 0,11.02858 4.130819,21.47863 8.637809,31.87599M45,760c0,24.26703 20,45.73297 20,70 0,24.26703 -20,45.73297 -20,70 0,24.26703 20,45.73297 20,70 0,24.26703 -20,45.733 -20,70 0,24.267 20,45.733 20,70 0,24.267 -20,45.733 -20,70 0,24.267 20,45.733 20,70 0,24.267 -20,45.733 -20,70 0,24.267 20,45.733 20,70 0,24.267 -20,45.733 -20,70 0,24.267 20,45.733 20,70 0,1.5019 -0.07661,2.9931 -0.220352,4.4749M9.747479e-5,115H64.039409M3.2732335e-4,100H48.850575M-3.7619512e-4,84.999997 35.303777,85M3.2874958e-5,70H20.525452M140,580c-29.9508,-0.0164 -40.027293,-19.9398 -30,-60 -12.408803,6.54902 -12.465295,-6.15704 -15,-15 0,0 -8.694581,11.23153 -18.694581,26.23153C66.305419,546.23153 40,530 55,510c15,-20 16.464466,-26.46447 20,-30 5,-5 25,-5 45,0 20,5 55,50 55,50 -1.70363,40.18741 -7.50053,76.00293 -15,110 -16.57981,5.56089 -33.03598,6.41567 -49.37737,2.90158M71.372867,536.89368c6.156783,2.2398 9.932552,5.26344 9.932552,8.59072 0,6.90356 -16.25449,12.5 -36.305419,12.5 -20.050929,0 -36.3054187,-5.59644 -36.3054187,-12.5 0,-6.90356 16.2544897,-12.5 36.3054187,-12.5 3.530285,0 6.942884,0.17349 10.169801,0.49704M75,572.5A35.857964,12.5 0 0 1 39.142036,585 35.857964,12.5 0 0 1 3.2840723,572.5 35.857964,12.5 0 0 1 39.142036,560 35.857964,12.5 0 0 1 75,572.5v0M70,600A32.7422,12.5 0 0 1 37.2578,612.5 32.7422,12.5 0 0 1 4.5155993,600 32.7422,12.5 0 0 1 37.2578,587.5 32.7422,12.5 0 0 1 70,600v0M75,625A35,12.5 0 0 1 40,637.5 35,12.5 0 0 1 5,625 35,12.5 0 0 1 40,612.5 35,12.5 0 0 1 75,625v0M175,530c9.01187,-6.69984 14.39729,-5.61674 20,-5 6.60244,53.92486 -5.18586,88.41956 -15,125 -13.35741,3.34424 -19.99342,-0.0197 -20,-10M195,525c30,-10 58.09867,-28.71117 95,-20 -0.46475,7.08696 -2.19457,12.97105 -4.9121,17.91598C278.98874,534.01425 267.91426,540.38179 255,545c21.58158,3.66128 34.21401,15.94149 45,30 -10.03349,13.44945 -26.22914,22.43116 -49.38424,22.46305C271.31493,604.685 284.06204,617.31083 295,635c-18.49205,7.15262 -37.00748,14.35415 -50,10 19.28915,27.69669 26.7609,54.11204 21.7734,74.31034C237.07501,701.19544 205.06346,667.57603 180,650M268.59066,502.86452c-19.9683,23.7025 -42.54873,42.8203 -71.6266,50.53412l0.31369,2.01379c27.15086,1.8201 53.02204,6.85057 72.72225,18.89791 -24.54842,10.71681 -49.29746,15.72712 -74.99016,12.40207l-0.1556,2.75319C218.15904,598.76482 244.96846,602.45154 260,625c-27.96689,3.85328 -49.06642,-2.19654 -70.95736,-7.72946l-1.2798,4.91057c23.94574,23.09877 43.12239,50.72261 57.77627,82.63778M409.6675,492.69145c15.88549,-2.42699 31.20045,-4.71776 41.92243,-6.16208M340.52276,503.13015c2.78902,-0.30006 10.01677,-1.36157 19.68451,-2.83163M288.80987,511.32922l47.73505,-19.8896 3.63699,2.77826C343.13553,565.52489 339.93715,637.43314 330,710l-62.98009,-16.79469M321.05412,497.73755c0.589,4.56719 1.11983,9.13743 1.59359,13.71067 6.12531,64.64656 0.077,137.83984 -10.7087,193.96191M643.80297,132.1761C701.95967,244.69737 675,327.05696 675,430c0,75 85,70 85,5 0,-50 -60,-45.31129 -60,-5 0,30 45,30 45,10 0,-10 -5,-15 -10,-20M669.33996,133.26557C726.40018,245.60178 693.06836,334.16734 700,430M695.19027,135.07291c48.25988,98.56563 16.05265,183.25832 20.65772,266.3866M721.35084,137.59415c45.15476,96.51734 4.14559,179.66618 15.02871,261.37576M747.73546,140.73681c41.29426,93.22982 -4.03799,170.59682 9.71213,252.60178M773.9533,143.54035c37.35232,87.70755 -1.18299,161.46343 6.95797,238.51202M800.40915,147.04606c33.11019,81.80952 1.07194,151.57978 4.61631,223.48335M827.09624,151.35148c28.60532,75.46904 2.72006,140.80119 2.65058,207.29531M853.33354,154.7034c24.95056,69.44863 4.40748,130.38798 1.69848,191.72807M879.70234,158.63929c21.36466,63.52264 5.32864,120.0028 1.02655,176.35358M737.19849,479.63379C760.05981,482.81317 785,465.209 785,430c0,-35.77927 -30.72375,-43.5545 -48.20031,-30.312M761.39392,474.98418C783.00614,475.6028 805,458.06394 805,425c0,-35.17421 -29.69341,-43.28353 -47.30253,-30.96576M789.48963,464.36709C808.17113,460.96521 825,443.9222 825,415c0,-38.85856 -36.2397,-44.68541 -52.3902,-26.43033M809.41791,454.38008C828.12803,451.0088 845,433.95921 845,405c0,-39.22392 -36.92438,-44.79206 -52.84038,-25.90904M829.83544,444.30252C848.37829,440.7543 865,423.74364 865,395c0,-39.00019 -36.50436,-44.72745 -52.566,-26.22976M846.34419,438.98309C864.27034,434.82011 880,417.9617 880,390c0,-34.52874 -28.61362,-42.97679 -46.32116,-31.6232M867.70525,428.64145C885.05901,423.95682 900,407.2517 900,380c0,-39.08687 -36.6668,-44.75274 -52.67279,-26.10607M887.60106,418.66942C904.99916,414.02362 920,397.30623 920,370c0,-38.91043 -36.33652,-44.70091 -52.45477,-26.3571M393.48764,145.73449C390.69246,165.75554 385,207.45516 385,215c0,10 5,30 5,40v70c0,30 67.09431,152.09431 75,160 15,15 63.17703,34.87423 85,30 15.76769,-3.52177 96.22511,-30.18332 127.66076,-63.11513M382.57642,147.22782C363.2681,207.66477 366.10305,272.14927 360,335c-1.73268,17.84361 -25.58165,26.28268 -30,0M390,330c-10,50 -80,60 -80,15 0,-43.27071 50,-40 50,-15M381.64204,351.23153c-15,25 12.01319,83.23557 3.35796,103.76847 -9.92298,23.54039 -55,30 -60,0 -2.59938,-15.59626 15,-20 15,-20M382.94745,415C380.07336,463.28061 354.79654,460.34685 345,460 330.00939,459.46925 330,445 340,435M405.62369,373.52479c4.03109,25.80959 0.4386,70.8524 -0.62369,81.47521 -5.00002,50 -90,50 -95,5 -5,-45 58.77397,-61.20438 55,-25 -3.54365,33.99487 -49.4546,27.56846 -25,0M480,430c5,10 20,20 40,10M465,415l15,-5c5,0 5,5 15,5 10,0 10,-5 20,-5 10,0 5,5 15,5 10,0 15,-5 15,-5M390,220c11.31833,-14.13384 56.37552,-43.41512 80,-10 -1.39935,-1.49569 1.27693,6.53875 0,5 -25.00797,-30.1357 -66.37102,-7.7827 -80,5v0M630,230c-5.43774,-6.79042 -22.69715,-30.53943 -45,-35 -25,-5 -40,0 -59.07295,15.40088 1.39935,-1.49569 -1.41163,6.41619 0,5C560.26964,180.94726 621.08803,207.03562 630,230v0M470,215c18.67256,51.65779 0,74.5049 0,100 0,15 -6.09528,35.06016 -5,45 1.59461,14.47132 15,15 20,25M530,375c-10,-10 -55,-5 -20,0 35,5 35,-7.92893 35,-15 0,-5 -5,-15 -15,-15M525,265c0,0 15,-20 35,-20 20,0 45,25 80,25 -30,0 -50.01147,9.32269 -70,10 -20.50088,0.69467 -35,-15 -45,-15M390,255c15,-10 25,-15 40,-10 15,5 45,20 45,20M475,265c-20,5 -40,15 -55,15 -14.14214,0 -30,-20 -30,-20M246.47063,5.6251884e-5 370,150c180.66018,-37.46594 351.90847,-15.69998 520,10L1023.3336,-3.2305717e-4M906.79345,139.29992l-13.31689,-2.03625C788.17613,121.164 680.5467,106.36195 569.41211,106.90234c-66.68075,0.32424 -134.62296,6.17151 -204.08203,20.57618l-12.23114,2.53723M284.04614,45.68786C216.75167,54.569707 232.09028,147.18229 175,190c93.31147,27.99344 143.08779,-35.43694 161.51594,-80.60826M175,190c59.98911,9.22909 94.42536,-79.4944 134.75272,-112.881224M310,130c3.62193,-15.52177 -0.58651,-31.178056 -6.69488,-46.866982M255,85c18.36414,-7.902731 33.49805,-4.909942 48.50254,-1.480587M240,120c13.66273,-9.29577 27.37374,-11.32513 41.12235,-10.97464M290,155c3.26734,-4.48104 -3.39347,-36.02274 -7.7136,-46.5736M225,155c11.90463,-7.5334 22.9728,-11.6913 33.55452,-13.88609M260,175c0.69037,-8.73161 0.61527,-23.44155 -1.61616,-34.6174M210,170c7.2696,-1.28643 13.64558,-0.61252 19.5682,1.05594M230,185c4.48465,-6.2535 3.93377,-11.49589 1.80007,-16.42637" />
        </symbol>
        <symbol id="CJ4" preserveAspectRatio="none" viewBox="0 0 1300 2000">
          <path fill="black" d="M585,695 472.14443,635.81958c0.73077,-9.5527 1.33279,-18.45406 1.72118,-27.60205L580,670 885.03858,509.67592l-0.0523,25.05152zM439.54873,873.40987c-2.19924,11.53009 -4.9112,23.27526 -7.84126,34.76855 43.84962,19.86699 81.1199,46.09755 116.90566,73.45524 10.3735,-10.76119 21.01313,-21.80733 31.52731,-32.62432l-0.11728,-256.77923 -20.25826,-10.24927 0.006,262.52911C523.75361,916.87308 484.62457,892.3709 439.54873,873.40987ZM750.26531,787.76901l-0.60419,-180.37719 20.09114,-10.55376 0.41163,176.77924c-6.54418,4.53135 -13.13987,9.18167 -19.89858,14.15171zM1075.1849,473.91345c-6.3099,-3.43345 -13.0426,-6.74365 -20.1168,-9.88956l-0.1888,234.52524c2.9316,0.35718 6.0031,0.60513 9.3709,1.00883 3.6815,-3.87723 7.134,-7.87093 10.6926,-11.94173zM330,710c10.13311,-73.9979 13.25906,-147.31096 10,-220l-18.94885,7.81707c0.59197,4.48767 1.1228,9.05791 1.59656,13.63115 6.12531,64.64656 0.077,137.83984 -10.63284,193.86894zM110.42693,966h16.21511l9.0312,-12h-25.04106zM110.22168,936h38.58784L155,924h-45.59934zM110.30401,876h72.57776l4.92611,-12h-78.08441zM110.42693,906h56.65025l6.15763,-12h-63.01313zM110.30401,846h85.71405l4.5156,-12h-90.22965zM110.88456,816H195c3.3469,0.0473 6.08545,-2.65277 6.08545,-6 0,-3.34723 -2.73855,-6.04733 -6.08545,-6h-84.69599zM110.01374,783H175c4.05697,0.0574 4.05697,-6.05738 0,-6h-64.98626zM110.01374,753H155c4.05697,0.0574 4.05697,-6.05738 0,-6h-45.56681zM255.63086,712.93555l-1.30078,6.19726C236.5705,803.7934 214.14093,893.82659 133.33984,993.46875L132,995.12109v163.47271l10.68164,-13.3204c76.40793,-95.2923 141.94512,-241.84502 171.15234,-411.16207l0.9336,-5.4043zm9.09375,14.8457L301,737.45508C273.07538,894.6282 213.40861,1031.523 144,1123.8691V999.30859c79.26178,-98.44897 103.14432,-188.6954 120.72461,-271.52734zM754.33551,552.86182l-25.05453,-53.68829 -59.84877,30.32406 25.74671,55.17151M712.5,530c6.90356,0 12.5,5.59644 12.5,12.5 0,6.90356 -5.59644,12.5 -12.5,12.5 -6.90356,0 -12.5,-5.59644 -12.5,-12.5 0,-6.90356 5.59644,-12.5 12.5,-12.5zM770.06827,478.36058l25.15941,53.91302 59.38732,-31.31288 -24.42528,-52.3399zM812.5,477.5c6.90356,0 12.5,5.59644 12.5,12.5 0,6.90356 -5.59644,12.5 -12.5,12.5 -6.90356,0 -12.5,-5.59644 -12.5,-12.5 0,-6.90356 5.59644,-12.5 12.5,-12.5zM580.72458,574.76695l26.02987,55.77829 59.72292,-30.59374 -26.01414,-55.74458zM622.5,572.5c6.90356,0 12.5,5.59644 12.5,12.5 0,6.90356 -5.59644,12.5 -12.5,12.5 -6.90356,0 -12.5,-5.59644 -12.5,-12.5 0,-6.90356 5.59644,-12.5 12.5,-12.5zM510.92843,546.50369l-25.94241,45.22764 58.42488,32.91678 25.90464,-45.16179zm26.79283,31.30077c3.97399,5.64505 2.61933,13.44281 -3.02572,17.4168 -5.64505,3.97399 -13.44281,2.61933 -17.4168,-3.02572 -3.97399,-5.64505 -2.61933,-13.44281 3.02572,-17.4168 5.64505,-3.97399 13.44281,-2.61933 17.4168,3.02572zM906.79345,139.29992l-13.31689,-2.03625C788.17613,121.164 680.5467,106.36195 569.41211,106.90234c-66.68075,0.32424 -134.62296,6.17151 -204.08203,20.57618l-12.11857,2.4047L370,150c180.66018,-37.46594 351.90847,-15.69998 520,10L906.9372,139.67536 1040,-20" />
        </symbol>
        <symbol id="CJ3" preserveAspectRatio="none" viewBox="0 0 1300 2000">
          <path fill="#44F" d="M599.7537,695h130.33661l-0.20525,15H600.1642ZM599.7537,825h103.85878l-15.18883,15h-87.84894zM905.09375,474.10352l-0.0996,41.3164 8.05469,12.08008 -8.11133,12.16797 -0.0996,41.61133 35.85352,-53.7793zM1034.6152,469.53906 995.97461,527.5 1035,586.03711 1034.8633,544.36914 1023.6172,527.5 1034.752,510.79883ZM927.45312,424.7168l40.88086,61.32031 29.14063,-43.71094 -23.67383,-5.95312 -5.4668,8.20117 -7.66796,-11.50586zM968.33398,568.96289 929.30859,627.5 968.33398,686.03711 987.8457,656.76953 1007.3574,627.5 987.8457,598.23047Zm0,41.46289 0.375,0.5625 11.00586,16.51172 -11.00586,16.51172 -0.375,0.5625L956.95117,627.5ZM904.98635,711.4172c6.91659,-1.74396 13.964,-3.41317 21.50811,-4.78132l-21.21951,-31.5941zM1016.2816,697.26637 1035,668.94344l0.1359,28.57203c-6.24,-0.10629 -12.5308,-0.20979 -18.8543,-0.2491zM355.9419,1117.8199c17.99562,-36.0367 33.17807,-72.46 46.35529,-109.4844l67.41258,44.8676c-34.97038,27.7741 -72.26449,50.5256 -113.76787,64.6168zM998.83468,782.28873c-12.06417,0.25657 -24.52125,0.61716 -35.74904,2.09018l-6.26367,0.82226 5.17578,36.4043 5.92578,-0.54883c2.1201,-0.19614 4.24666,-0.3849 6.38191,-0.56367l7.83707,-13.06445c-3.16259,0.24001 -6.29471,0.50536 -9.42406,0.7707l-1.71094,-12.02344c6.35269,-0.7028 12.81802,-1.26083 19.41772,-1.62035l25.79157,-38.15309 -6.2441,0.0312c-35.36863,0.17264 -67.44587,4.46442 -97.20122,11.93555l-6.44336,1.61719 15.00391,47.36133c-22.24758,6.06319 -42.87287,14.28317 -62.32617,24.42187l-6.48438,-10.0625c10.00678,-5.25532 20.19604,-10.12924 30.73438,-14.18359l6.45312,-2.48242 -16.91992,-33.45704 -5.3457,2.19727c-29.99209,12.32719 -57.41716,28.35296 -83.21484,47.12695L779,834.71289l30.2832,38.76953c-19.2606,14.38455 -37.96718,30.70975 -56.78515,48.67578l-8.58594,-9.09179c9.24789,-8.7326 18.51452,-17.19956 27.77539,-25.19141l4.78906,-4.13281 -24.51172,-27.72071 -4.66601,3.9336c-23.76559,20.02654 -46.62708,42.18706 -69.65235,65.48047l-6.05273,5.27539 36.04102,35.89453c-19.62693,19.92804 -39.40806,41.35613 -60.19336,63.21483l-9.13868,-8.6621c5.40661,-5.5795 10.74172,-11.1552 15.85743,-16.6309l4.26757,-4.56636 -9.13476,-8.53321 -4.26563,4.56641c-6.53574,6.99566 -13.08629,13.99886 -20.01172,20.99026l-4.49609,4.539 27.38672,25.959 4.30078,-4.4961c24.07955,-25.1804 46.47821,-49.85322 68.61524,-72.06442l4.41211,-4.42774 -35.5293,-35.38672c20.30447,-20.45699 40.43981,-39.89063 61.05078,-57.58594l8.03516,9.0879c-9.37284,8.2213 -18.73603,16.74537 -28.05664,25.66406l-4.48633,4.29297 25.79297,27.3164 4.54687,-4.39843c21.80223,-21.0861 43.15933,-39.84738 65.18359,-55.79883l5.25,-3.80274 -30.10546,-38.54101c21.99797,-15.5396 45.13568,-28.91458 70.02148,-39.63086l5.49414,10.86523c-10.95347,4.53586 -21.62996,9.5848 -31.91602,15.23828l-5.875,3.22852 20.05079,31.10351 5.0957,-2.77148c21.95486,-11.93971 45.26925,-21.29781 70.96094,-27.71875l6.45117,-1.61133 -14.88086,-46.97851c25.17619,-5.85285 52.10391,-9.35007 81.47264,-9.91993l0.029,5.0273M-10,1670 110,1550M340,490c3.25906,72.68904 0.13311,146.0021 -10,220l-63.00274,-16.79619c1.77105,9.44846 1.71657,18.24801 -0.2239,26.10648 -10.16769,-6.20191 -20.60651,-14.22115 -30.63269,-22.52889 -18.70624,92.22169 -37.15583,184.06598 -125.98401,289.52827l0.005,225.47363C248.84068,1085.0983 364.64003,805.80799 350.93633,497.82079M428.25836,260a10,20.000004 0 0 1 -10,20 10,20.000004 0 0 1 -10,-20 10,20.000004 0 0 1 10,-20.00001 10,20.000004 0 0 1 10,20.00001zM569.12918,262.03193a10,19.999998 0 0 1 -10,19.99999 10,19.999998 0 0 1 -10,-19.99999 10,19.999998 0 0 1 10,-20.00001 10,19.999998 0 0 1 10,20.00001z" />
        </symbol>
        <symbol id="CJ2" preserveAspectRatio="none" viewBox="0 0 1300 2000">
          <path fill="red" d="M246.4707 0L370 150C550.66018 112.53406 721.90847 134.30002 890 160L1023.334 0L246.4707 0zM884.78711 420.89844L570 580L478.18555 527.74219C477.31057 547.67547 476.39875 567.38931 475.53125 586.55273L580 645L885.05273 485.21094L885 484.40039L884.78711 420.89844zM1075.0547 473.84375L1075.3203 687.18945C1109.0796 648.91177 1146.9557 612.04007 1189.9375 576.45508L1190.0273 559.94141C1155.227 527.28766 1121.1429 497.91193 1075.0547 473.84375zM320.64648 499.51367L289.02344 509.16797L284.64453 523.05078L322.64648 511.44922L320.64648 499.51367zM324.11719 534.62891L270.09375 537.80664L259.84961 544.92188L270.72656 549.79102L325.30273 546.58203L324.11719 534.62891zM884.98633 535.11523L770.22852 596.58398L769.91406 773.78516C804.76362 750.44499 842.74602 730.78127 885.10156 717.27148L884.98633 535.11523zM297.20898 571.62695C296.61974 574.30439 294.72888 582.00386 293.54688 583.41992L325.32617 585.40625L325.33398 573.38477L297.20898 571.62695zM293.54688 583.41992L292.9082 583.38086C293.07571 583.75554 293.29622 583.7202 293.54688 583.41992zM257.61914 594.89062C251.58786 594.98109 268.51478 606.48212 272.21094 609.24219L324.25195 615.36523L324.72656 603.33789L263.56055 596.14258C260.63921 595.24868 258.73604 594.87388 257.61914 594.89062zM290.62695 627.96875C303.05808 631.6272 278.64842 639.28296 284.44922 639.17578L321.36523 644.7207L322.83398 632.80664L290.62695 627.96875zM472.06055 636.48828C466.16552 717.61133 456.4266 797.02805 439.41602 874.02539C484.6253 892.37035 523.75418 916.8729 559.77148 944.50977L559.7832 681.67578L472.06055 636.48828zM160 640C143.42019 645.56089 126.96325 646.41511 110.31055 642.5L110.15625 986.59961C198.98443 880.84705 217.43469 789.00343 236.42578 697.01758C216.34331 680.41039 196.64019 661.66912 180 650C166.64259 653.34424 160.00658 649.9803 160 640zM684.89453 642.07422L654.93164 657.28516C657.88866 659.01124 661.32909 660 665 660C675.34529 660 683.8568 652.14525 684.89453 642.07422zM247.63086 647.90625L254.49609 661.42773L318.04102 673.52344L318.9375 661.48047L247.63086 647.90625zM262.60938 678.21875L266.16992 691.47656L313.28125 701.50977L315.63672 691.47461L262.60938 678.21875zM665 745A20 20 0 0 0 645 765A20 20 0 0 0 665 785A20 20 0 0 0 685 765A20 20 0 0 0 665 745z" />
        </symbol>
        <symbol id="CJ1" preserveAspectRatio="none" viewBox="0 0 1300 2000">
          <path fill="#FC4" d="M0,2.5V1660l110,-110 -0.0176,-126.2344c105.2964,-87.5284 180.25512,-182.1634 233.80078,-282.25 -1.87244,3.5134 -3.77535,7.0487 -5.74218,10.6348 139.33899,-34.5229 228.76321,-151.939 326.875,-251.21876 98.72414,-99.89944 202.37443,-184.19115 377.6211,-174.98242 7.5259,-8.93432 14.8129,-17.82736 21.8848,-26.5918 -4.2773,-0.38012 -8.5067,-0.68935 -12.711,-0.96484 1.155,0.0596 2.3131,0.12324 3.4668,0.18164l-0.3808,-234.67383c-6.4807,-3.03897 -12.9769,-5.81234 -19.7578,-8.46875l0.096,242.0918c0.6912,0.0365 1.3827,0.0727 2.0742,0.10937 -159.04652,-6.04494 -265.29667,63.25956 -356.08011,148.36328 22.0025,-20.65759 44.85617,-40.36338 69.13671,-58.22656l-0.13671,-180.62695c-13.88214,7.38028 -27.81453,14.80168 -41.71094,22.19336 -0.63591,3.92624 -2.0246,7.87731 -3.41797,10.66406 5,10 10.5986,34.35524 -20,20 15,30 -10,25 -20,20 -9.48298,4.74149 -32.45525,9.4826 -22.01367,-15.62305l29.81055,-16.08984C643.52791,663.86064 614.28822,679.41111 585,695l-5.03516,-2.80078 0.25782,256.51953c-29.0777,30.45144 -58.04681,60.05295 -88.41993,86.33005 11.6948,-10.1617 23.15299,-20.849 34.41602,-31.9883 -30.27342,-24.21806 -62.12392,-47.48225 -101.27539,-67.92378 -6.81297,24.55001 -14.31463,48.86718 -22.59766,73.06248l67.29297,44.8926 0.1836,0.1602c-34.98483,27.6022 -72.21204,50.2975 -113.84571,64.6308 95.57841,-192.00036 116.20101,-403.26308 123.26172,-622.41991 -17.42844,-7.74663 -13.26834,-13.82834 -27.00586,-26.03516 0.0407,-0.67002 0.0711,-1.28503 0.11719,-1.98437C431.01405,428.20609 390,348.45536 390,325v-70c0,-10 -5,-30 -5,-40 0,-10 10,-80 10,-80l-10,5C363.67384,200.66723 366.17301,265.68862 360.26758,329.61133 359.9995,304.99906 310,301.72929 310,345c0,37.91624 49.69554,36.7857 71.48242,5.90625 -8.80937,15.27272 -2.75883,42.10077 1.58594,64.87109C380.07311,463.28107 354.79654,460.34685 345,460 338.20482,459.75941 334.49816,456.65062 333.39648,452.39648 337.37151,463.07244 362.41906,459.75943 365,435c3.77397,-36.20438 -60,-20 -55,25 1.22558,11.03026 7.25681,19.35695 15.36914,24.95312 0,0 34.63086,25.04688 69.63086,15.04688 5.76859,-1.64817 10.58572,-4.38335 14.62695,-7.61133 15.89909,-2.12114 31.18009,-4.40408 41.85938,-5.875C441.16919,824.33445 402.3883,1133.5369 110,1387.1992l-0.0215,15.7305 -0.11914,-838.23829c-4.80232,-9.88487 -4.81271,-24.56819 -0.006,-44.07813v-0.54101C97.594808,526.43944 97.524419,513.80707 95,505c0,0 -8.695312,11.23242 -18.695312,26.23242 -1.837559,2.75634 -4.227351,4.44998 -6.808594,5.26758l1.876953,0.39453c6.156783,2.2398 9.931641,5.26253 9.931641,8.58985 0,6.90354 -16.253759,12.5 -36.304688,12.5 -20.050929,0 -36.3046875,-5.59646 -36.3046875,-12.5 0,-6.90356 16.2537585,-12.5 36.3046875,-12.5 3.530285,0 6.943005,0.17254 10.169922,0.49609l1.066406,0.22461C50.313972,529.0126 47.517822,519.97624 55,510c15,-20 16.464466,-26.46447 20,-30 4.147274,-4.14727 18.620432,-4.84204 34.84766,-2.10938L109.80273,160H140ZM284.04688,45.6875C216.75241,54.569347 232.09028,147.18229 175,190 268.31147,217.99344 318.08749,154.5639 336.51562,109.39258ZM640,125c63.11143,116.22484 35,199.88102 35,305 0,39.69413 23.81023,56.97893 46.22656,54.82031 43.93668,-3.50567 110.42396,-43.30706 166.375,-66.15039C904.99966,414.02412 920,397.30623 920,370 920,360 914.99963,329.99932 880.72852,334.99219 885.77493,268.89189 906.96718,202.61425 865,125Zm249.12695,293.31055 -4.09375,2.03711 0.0801,296.91796c6.69158,-2.10802 13.37747,-4.05424 20.03125,-5.89062l-0.41211,-290.5918c-5.30675,-0.83013 -10.44116,-1.64665 -15.60547,-2.47265zM340,435c-2.60716,2.93914 -4.40854,5.63515 -5.55273,8.07031C335.61784,440.29278 337.4941,437.5059 340,435Zm-69.89844,67.75391C242.49554,502.99919 219.375,516.875 195,525c-5.60271,-0.61674 -10.98813,-1.69984 -20,5 -1.70363,40.18741 -7.50053,76.00293 -15,110 0.007,9.9803 6.64259,13.34424 20,10 25.06346,17.57603 57.07505,51.19565 86.77344,69.31055C271.76094,699.11225 264.28915,672.69669 245,645c12.99252,4.35415 31.50795,-2.84738 50,-10C284.06204,617.31083 271.3144,604.68484 250.61523,597.46289 273.77033,597.431 289.96651,588.44945 300,575c-10.78599,-14.05851 -23.41842,-26.33872 -45,-30 18.66832,-6.67589 33.49217,-17.00726 35,-40 -6.919,-1.63334 -13.52782,-2.3027 -19.89844,-2.24609zM39.142578,560A35.857964,12.5 0 0 1 75,572.5 35.857964,12.5 0 0 1 39.142578,585 35.857964,12.5 0 0 1 3.2832031,572.5 35.857964,12.5 0 0 1 39.142578,560Zm-1.884766,27.5A32.7422,12.5 0 0 1 70,600 32.7422,12.5 0 0 1 37.257812,612.5 32.7422,12.5 0 0 1 4.515625,600 32.7422,12.5 0 0 1 37.257812,587.5ZM40,612.5A35,12.5 0 0 1 75,625 35,12.5 0 0 1 40,637.5 35,12.5 0 0 1 5,625 35,12.5 0 0 1 40,612.5ZM650.32227,721.2207C655.39062,721.25 661.25,723.125 665,725c10,-5 35,-10 20,20 30,-15 25,10 20,20 5,10 10.5986,34.35524 -20,20 15,30 -10,25 -20,20 -10,5 -35,10 -20,-20 -30,15 -25,-10 -20,-20 -5,-10 -10,-35 20,-20 -9.375,-18.75 -3.125,-23.82812 5.32227,-23.7793zm0,125C655.39062,846.25 661.25,848.125 665,850c3.93291,-1.96646 10.18665,-3.93224 15.41406,-3.76953l-14.74609,14.5293c0.95121,-0.92676 1.91503,-1.83997 2.86914,-2.76368 -4.86759,4.70557 -9.696,9.44761 -14.48828,14.22071 0.1457,-0.14536 0.28977,-0.2922 0.43555,-0.4375l-33.26172,32.77148C621.2821,899.51179 623.14063,893.71874 625,890c-5,-10 -10,-35 20,-20 -9.375,-18.75 -3.125,-23.82812 5.32227,-23.7793z" />
        </symbol>
        <rect id="XCJ" width={104} height={200} x={-52} y={-100} />
      </defs>
      <rect width={239} height={335} x="-119.5" y="-167.5" rx={12} ry={12} fill="white" stroke="black" />
      <use width={104} height={200} x={-52} y={-100} xlinkHref="#CJ1" />
      <use transform="rotate(180)" width={104} height={200} x={-52} y={-100} xlinkHref="#CJ1" />
      <use width={104} height={200} x={-52} y={-100} xlinkHref="#CJ2" />
      <use transform="rotate(180)" width={104} height={200} x={-52} y={-100} xlinkHref="#CJ2" />
      <use width={104} height={200} x={-52} y={-100} xlinkHref="#CJ3" />
      <use transform="rotate(180)" width={104} height={200} x={-52} y={-100} xlinkHref="#CJ3" />
      <use width={104} height={200} x={-52} y={-100} xlinkHref="#CJ4" />
      <use transform="rotate(180)" width={104} height={200} x={-52} y={-100} xlinkHref="#CJ4" />
      <use width={104} height={200} x={-52} y={-100} xlinkHref="#CJ5" />
      <use transform="rotate(180)" width={104} height={200} x={-52} y={-100} xlinkHref="#CJ5" />
      <use width={104} height={200} x={-52} y={-100} xlinkHref="#CJ6" />
      <use transform="rotate(180)" width={104} height={200} x={-52} y={-100} xlinkHref="#CJ6" />
      <use xlinkHref="#VCJ" height={70} width={70} x={-122} y={-156} />
      <use xlinkHref="#SCJ" height="58.558" width="58.558" x="-116.279" y={-81} />
      <use xlinkHref="#SCJ" height="34.4" width="34.4" x="19.427" y="-97.2" />
      <g transform="rotate(180)">
        <use xlinkHref="#VCJ" height={70} width={70} x={-122} y={-156} />
        <use xlinkHref="#SCJ" height="58.558" width="58.558" x="-116.279" y={-81} />
        <use xlinkHref="#SCJ" height="34.4" width="34.4" x="19.427" y="-97.2" />
      </g>
      <use xlinkHref="#XCJ" stroke="#44F" fill="none" />
    </svg>
  );
}
