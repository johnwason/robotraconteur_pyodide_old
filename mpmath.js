var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="mpmath.data";var REMOTE_PACKAGE_BASE="mpmath.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","mpmath",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/mpmath","calculus",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/mpmath","functions",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/mpmath","libmp",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/mpmath","matrices",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/mpmath","tests",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:1105302,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1376,2648,3892,5099,6302,7252,8563,9623,10767,11805,12659,13742,14979,16072,17126,18454,19370,20288,21153,22228,23049,24027,25014,26449,27556,28489,29054,29931,30713,31494,32464,33377,34824,35851,37088,38122,39342,40496,41516,42759,43881,44992,46047,47277,48170,49187,50346,51499,52822,53675,54562,55438,56253,57544,58495,59070,59808,60923,61994,62871,63877,64806,65967,66994,68058,69116,70657,72108,73443,74604,76146,77426,78801,80155,81329,82621,83755,85253,86542,87718,88782,90018,91190,92273,93459,95061,96461,97592,99020,100281,101647,103034,104554,106069,107610,109114,110499,111977,113258,114649,116049,117169,118631,120069,121539,123020,124404,125955,127471,128793,130229,131626,133061,134543,136043,137448,138805,140228,141493,142760,144146,145571,146916,148297,149510,150698,152114,153547,154803,156306,157545,158767,160081,161489,163038,164381,165768,167178,168658,169948,171334,172777,174068,175551,176915,178239,179431,180887,182086,183488,184904,186452,187902,189285,190664,191895,193351,194806,196273,197894,199299,200855,202285,203631,205179,206681,208096,209406,210701,211702,213087,214407,215800,217152,218494,219895,221309,222622,223983,225256,226526,227954,229189,230472,231755,233081,234485,235899,237417,238803,240267,241669,243150,244448,245601,246982,248203,249604,251034,252180,253540,254915,256206,257728,258970,260480,261536,262762,264185,265552,266866,267855,269269,270540,271910,273215,274538,275950,276856,277708,278938,280117,281484,282568,283692,285286,286755,287725,288228,289537,290823,292286,293200,294621,296059,297386,298546,299982,301485,302909,304092,305363,306753,308066,309404,310762,312110,313488,314826,316167,317588,319004,320539,322038,323327,324713,326049,327123,328217,329610,330672,331508,332331,333745,334922,336294,337631,339124,340295,341437,342320,343490,344986,346321,347663,348869,350143,351338,352481,353656,354889,355871,357221,358397,359775,361234,362718,364103,365324,366638,367945,369256,370694,371913,373357,374747,375743,377114,378524,379807,381080,382270,383652,385161,386553,387944,389253,390279,391368,392532,393746,395005,396286,397495,398931,400259,401722,403063,404361,405476,406765,407877,409128,410426,411791,412896,414164,415242,416399,417755,419018,420526,421810,423283,424574,425944,427271,428407,429642,430749,431596,432939,434159,435386,436496,437736,438762,439968,441079,442101,442798,444021,445020,446085,447091,448164,449418,450619,451966,453046,454399,455629,456854,458238,459577,460384,461339,462578,463857,465135,466316,467686,468894,470128,471463,472735,474065,475338,476643,477891,479246,480343,481440,482626,483670,484884,486092,486954,488070,489174,490435,491555,492368,493465,494575,495723,496982,498220,499535,500796,501897,503053,503958,505012,505822,506865,508194,509506,510993,512228,513222,514392,515614,516687,517904,519076,520140,521344,522254,523459,524491,525536,526689,527689,529053,530253,531575,532531,533709,534790,535862,536935,538115,539605,540867,542178,543452,544743,546197,547336,548541,549742,551010,552419,553488,554516,555304,556149,557322,558758,560128,561520,562631,563638,564940,566217,567427,568628,569806,570967,571764,572624,573523,574518,575440,576341,577252,578226,579080,579952,581041,581981,582956,583909,584730,585683,586389,587443,588585,589620,591383,592687,593667,594815,595810,596883,598020,599383,600652,601805,602909,604330,605739,607077,608393,609780,610898,612228,613185,614352,615689,616927,618168,619607,620822,622001,623125,624247,625390,626516,627841,629033,630298,631463,632800,634346,635838,637311,638329,639792,641040,642448,643901,645149,646420,647673,648937,650372,651693,652918,654138,655454,656714,657915,659218,660444,661677,662593,663858,665067,666297,667402,668472,669652,670788,671748,672932,674028,675290,676475,677689,678668,680071,681245,682610,684081,685214,686414,687808,688913,690317,691525,692768,694051,695331,696488,697513,698746,699941,701231,702384,703468,704353,705699,706938,707775,708751,709518,710619,711855,713057,714220,715290,716491,717453,718733,719873,721014,722300,723544,724703,726193,727337,728484,729980,731206,732433,733768,735213,736514,737483,738366,739464,740640,741834,743130,744156,744828,746134,747219,748094,749240,750541,751701,752995,754176,755158,756366,757384,758709,759766,761075,762186,763432,764263,765487,766259,767418,768636,769804,771135,772501,773683,775018,776363,777229,777921,779070,779923,781036,782130,783286,784477,785512,786386,787547,788582,789450,791090,792162,793006,794144,795270,796413,797586,798652,799631,800805,801894,802993,803844,805036,805944,807171,808427,809560,810924,812147,813391,814493,815881,816924,818156,819308,820376,821417,822771,823891,825188,826242,827471,828713,829870,831130,832423,833765,834856,835994,837155,838544,839348,840235,841194,842430,843760,844464,845371,846367,847334,848528,849747,850879,852156,853508,854878,856064,857254,858379,859602,860868,862059,863240,864415,865705,866748,867623,868825,870001,871314,872449,873736,874826,875903,876881,877919,878922,879915,880794,881848,882887,884147,885446,886586,887623,889510,890553,891819,892967,893963,894684,895776,896792,897591,898369,898891,899525,899967,900679,901409,902439,903990,905387,906526,907470,908669,909582,910544,911498,912231,913267,914049,914874,915823,916685,917531,918349,919422,920180,921440,922527,923509,924649,925918,926698,927786,929045,930112,931177,932300,933903,935580,936969,937525,938439,939655,940797,941982,942808,943914,945212,945874,946705,947565,948441,949294,950135,950991,951895,952505,953039,953859,954741,955636,956506,957357,958218,959078,959915,960611,961395,962244,963130,963979,964791,965565,966292,966969,967743,968475,969261,970047,970877,971718,972569,973438,975071,976263,977356,978223,979191,979949,980863,981996,982798,983890,984807,985596,986353,987522,988349,989483,990491,991608,992865,994014,995349,996560,997707,998608,999468,1000165,1001320,1002174,1003385,1004772,1006125,1007412,1008573,1009518,1010475,1011389,1012656,1013419,1014591,1015120,1016206,1017056,1018136,1019280,1020354,1021643,1022632,1023350,1024182,1025300,1026576,1027520,1029096,1030901,1032706,1034502,1036333,1038169,1039969,1041791,1043612,1045433,1046677,1047507,1048114,1049329,1050457,1051551,1052601,1053775,1055084,1056102,1057210,1058463,1059730,1061002,1062747,1064587,1066429,1067847,1069093,1070250,1071213,1071926,1072466,1073278,1074254,1075156,1075938,1077009,1077989,1079194,1080483,1081743,1082902,1084121,1085335,1086405,1087383,1088455,1089723,1090999,1092045,1092575,1093524,1094598,1095631,1096753,1097711,1098642,1099552,1100282,1101493,1103038,1104095,1104677],sizes:[1376,1272,1244,1207,1203,950,1311,1060,1144,1038,854,1083,1237,1093,1054,1328,916,918,865,1075,821,978,987,1435,1107,933,565,877,782,781,970,913,1447,1027,1237,1034,1220,1154,1020,1243,1122,1111,1055,1230,893,1017,1159,1153,1323,853,887,876,815,1291,951,575,738,1115,1071,877,1006,929,1161,1027,1064,1058,1541,1451,1335,1161,1542,1280,1375,1354,1174,1292,1134,1498,1289,1176,1064,1236,1172,1083,1186,1602,1400,1131,1428,1261,1366,1387,1520,1515,1541,1504,1385,1478,1281,1391,1400,1120,1462,1438,1470,1481,1384,1551,1516,1322,1436,1397,1435,1482,1500,1405,1357,1423,1265,1267,1386,1425,1345,1381,1213,1188,1416,1433,1256,1503,1239,1222,1314,1408,1549,1343,1387,1410,1480,1290,1386,1443,1291,1483,1364,1324,1192,1456,1199,1402,1416,1548,1450,1383,1379,1231,1456,1455,1467,1621,1405,1556,1430,1346,1548,1502,1415,1310,1295,1001,1385,1320,1393,1352,1342,1401,1414,1313,1361,1273,1270,1428,1235,1283,1283,1326,1404,1414,1518,1386,1464,1402,1481,1298,1153,1381,1221,1401,1430,1146,1360,1375,1291,1522,1242,1510,1056,1226,1423,1367,1314,989,1414,1271,1370,1305,1323,1412,906,852,1230,1179,1367,1084,1124,1594,1469,970,503,1309,1286,1463,914,1421,1438,1327,1160,1436,1503,1424,1183,1271,1390,1313,1338,1358,1348,1378,1338,1341,1421,1416,1535,1499,1289,1386,1336,1074,1094,1393,1062,836,823,1414,1177,1372,1337,1493,1171,1142,883,1170,1496,1335,1342,1206,1274,1195,1143,1175,1233,982,1350,1176,1378,1459,1484,1385,1221,1314,1307,1311,1438,1219,1444,1390,996,1371,1410,1283,1273,1190,1382,1509,1392,1391,1309,1026,1089,1164,1214,1259,1281,1209,1436,1328,1463,1341,1298,1115,1289,1112,1251,1298,1365,1105,1268,1078,1157,1356,1263,1508,1284,1473,1291,1370,1327,1136,1235,1107,847,1343,1220,1227,1110,1240,1026,1206,1111,1022,697,1223,999,1065,1006,1073,1254,1201,1347,1080,1353,1230,1225,1384,1339,807,955,1239,1279,1278,1181,1370,1208,1234,1335,1272,1330,1273,1305,1248,1355,1097,1097,1186,1044,1214,1208,862,1116,1104,1261,1120,813,1097,1110,1148,1259,1238,1315,1261,1101,1156,905,1054,810,1043,1329,1312,1487,1235,994,1170,1222,1073,1217,1172,1064,1204,910,1205,1032,1045,1153,1e3,1364,1200,1322,956,1178,1081,1072,1073,1180,1490,1262,1311,1274,1291,1454,1139,1205,1201,1268,1409,1069,1028,788,845,1173,1436,1370,1392,1111,1007,1302,1277,1210,1201,1178,1161,797,860,899,995,922,901,911,974,854,872,1089,940,975,953,821,953,706,1054,1142,1035,1763,1304,980,1148,995,1073,1137,1363,1269,1153,1104,1421,1409,1338,1316,1387,1118,1330,957,1167,1337,1238,1241,1439,1215,1179,1124,1122,1143,1126,1325,1192,1265,1165,1337,1546,1492,1473,1018,1463,1248,1408,1453,1248,1271,1253,1264,1435,1321,1225,1220,1316,1260,1201,1303,1226,1233,916,1265,1209,1230,1105,1070,1180,1136,960,1184,1096,1262,1185,1214,979,1403,1174,1365,1471,1133,1200,1394,1105,1404,1208,1243,1283,1280,1157,1025,1233,1195,1290,1153,1084,885,1346,1239,837,976,767,1101,1236,1202,1163,1070,1201,962,1280,1140,1141,1286,1244,1159,1490,1144,1147,1496,1226,1227,1335,1445,1301,969,883,1098,1176,1194,1296,1026,672,1306,1085,875,1146,1301,1160,1294,1181,982,1208,1018,1325,1057,1309,1111,1246,831,1224,772,1159,1218,1168,1331,1366,1182,1335,1345,866,692,1149,853,1113,1094,1156,1191,1035,874,1161,1035,868,1640,1072,844,1138,1126,1143,1173,1066,979,1174,1089,1099,851,1192,908,1227,1256,1133,1364,1223,1244,1102,1388,1043,1232,1152,1068,1041,1354,1120,1297,1054,1229,1242,1157,1260,1293,1342,1091,1138,1161,1389,804,887,959,1236,1330,704,907,996,967,1194,1219,1132,1277,1352,1370,1186,1190,1125,1223,1266,1191,1181,1175,1290,1043,875,1202,1176,1313,1135,1287,1090,1077,978,1038,1003,993,879,1054,1039,1260,1299,1140,1037,1887,1043,1266,1148,996,721,1092,1016,799,778,522,634,442,712,730,1030,1551,1397,1139,944,1199,913,962,954,733,1036,782,825,949,862,846,818,1073,758,1260,1087,982,1140,1269,780,1088,1259,1067,1065,1123,1603,1677,1389,556,914,1216,1142,1185,826,1106,1298,662,831,860,876,853,841,856,904,610,534,820,882,895,870,851,861,860,837,696,784,849,886,849,812,774,727,677,774,732,786,786,830,841,851,869,1633,1192,1093,867,968,758,914,1133,802,1092,917,789,757,1169,827,1134,1008,1117,1257,1149,1335,1211,1147,901,860,697,1155,854,1211,1387,1353,1287,1161,945,957,914,1267,763,1172,529,1086,850,1080,1144,1074,1289,989,718,832,1118,1276,944,1576,1805,1805,1796,1831,1836,1800,1822,1821,1821,1244,830,607,1215,1128,1094,1050,1174,1309,1018,1108,1253,1267,1272,1745,1840,1842,1418,1246,1157,963,713,540,812,976,902,782,1071,980,1205,1289,1260,1159,1219,1214,1070,978,1072,1268,1276,1046,530,949,1074,1033,1122,958,931,910,730,1211,1545,1057,582,625],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_mpmath.data")}Module["addRunDependency"]("datafile_mpmath.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{start:0,audio:0,end:332,filename:"/lib/python3.7/site-packages/mpmath-1.1.0-py3.7.egg-info"},{start:332,audio:0,end:8932,filename:"/lib/python3.7/site-packages/mpmath/__init__.py"},{start:8932,audio:0,end:24917,filename:"/lib/python3.7/site-packages/mpmath/ctx_base.py"},{start:24917,audio:0,end:31489,filename:"/lib/python3.7/site-packages/mpmath/ctx_fp.py"},{start:31489,audio:0,end:48287,filename:"/lib/python3.7/site-packages/mpmath/ctx_iv.py"},{start:48287,audio:0,end:97959,filename:"/lib/python3.7/site-packages/mpmath/ctx_mp.py"},{start:97959,audio:0,end:136072,filename:"/lib/python3.7/site-packages/mpmath/ctx_mp_python.py"},{start:136072,audio:0,end:416538,filename:"/lib/python3.7/site-packages/mpmath/function_docs.py"},{start:416538,audio:0,end:445808,filename:"/lib/python3.7/site-packages/mpmath/identification.py"},{start:445808,audio:0,end:464369,filename:"/lib/python3.7/site-packages/mpmath/math2.py"},{start:464369,audio:0,end:470339,filename:"/lib/python3.7/site-packages/mpmath/rational.py"},{start:470339,audio:0,end:473368,filename:"/lib/python3.7/site-packages/mpmath/usertools.py"},{start:473368,audio:0,end:483995,filename:"/lib/python3.7/site-packages/mpmath/visualization.py"},{start:483995,audio:0,end:484157,filename:"/lib/python3.7/site-packages/mpmath/calculus/__init__.py"},{start:484157,audio:0,end:492974,filename:"/lib/python3.7/site-packages/mpmath/calculus/approximation.py"},{start:492974,audio:0,end:493073,filename:"/lib/python3.7/site-packages/mpmath/calculus/calculus.py"},{start:493073,audio:0,end:513299,filename:"/lib/python3.7/site-packages/mpmath/calculus/differentiation.py"},{start:513299,audio:0,end:586588,filename:"/lib/python3.7/site-packages/mpmath/calculus/extrapolation.py"},{start:586588,audio:0,end:617723,filename:"/lib/python3.7/site-packages/mpmath/calculus/inverselaplace.py"},{start:617723,audio:0,end:627631,filename:"/lib/python3.7/site-packages/mpmath/calculus/odes.py"},{start:627631,audio:0,end:660050,filename:"/lib/python3.7/site-packages/mpmath/calculus/optimization.py"},{start:660050,audio:0,end:667904,filename:"/lib/python3.7/site-packages/mpmath/calculus/polynomials.py"},{start:667904,audio:0,end:706216,filename:"/lib/python3.7/site-packages/mpmath/calculus/quadrature.py"},{start:706216,audio:0,end:706524,filename:"/lib/python3.7/site-packages/mpmath/functions/__init__.py"},{start:706524,audio:0,end:744462,filename:"/lib/python3.7/site-packages/mpmath/functions/bessel.py"},{start:744462,audio:0,end:783492,filename:"/lib/python3.7/site-packages/mpmath/functions/elliptic.py"},{start:783492,audio:0,end:795136,filename:"/lib/python3.7/site-packages/mpmath/functions/expintegrals.py"},{start:795136,audio:0,end:800851,filename:"/lib/python3.7/site-packages/mpmath/functions/factorials.py"},{start:800851,audio:0,end:818912,filename:"/lib/python3.7/site-packages/mpmath/functions/functions.py"},{start:818912,audio:0,end:870482,filename:"/lib/python3.7/site-packages/mpmath/functions/hypergeometric.py"},{start:870482,audio:0,end:886579,filename:"/lib/python3.7/site-packages/mpmath/functions/orthogonal.py"},{start:886579,audio:0,end:894212,filename:"/lib/python3.7/site-packages/mpmath/functions/qfunctions.py"},{start:894212,audio:0,end:940396,filename:"/lib/python3.7/site-packages/mpmath/functions/rszeta.py"},{start:940396,audio:0,end:977716,filename:"/lib/python3.7/site-packages/mpmath/functions/theta.py"},{start:977716,audio:0,end:1014087,filename:"/lib/python3.7/site-packages/mpmath/functions/zeta.py"},{start:1014087,audio:0,end:1045038,filename:"/lib/python3.7/site-packages/mpmath/functions/zetazeros.py"},{start:1045038,audio:0,end:1048898,filename:"/lib/python3.7/site-packages/mpmath/libmp/__init__.py"},{start:1048898,audio:0,end:1051755,filename:"/lib/python3.7/site-packages/mpmath/libmp/backend.py"},{start:1051755,audio:0,end:1130681,filename:"/lib/python3.7/site-packages/mpmath/libmp/gammazeta.py"},{start:1130681,audio:0,end:1174542,filename:"/lib/python3.7/site-packages/mpmath/libmp/libelefun.py"},{start:1174542,audio:0,end:1211166,filename:"/lib/python3.7/site-packages/mpmath/libmp/libhyper.py"},{start:1211166,audio:0,end:1227628,filename:"/lib/python3.7/site-packages/mpmath/libmp/libintmath.py"},{start:1227628,audio:0,end:1254497,filename:"/lib/python3.7/site-packages/mpmath/libmp/libmpc.py"},{start:1254497,audio:0,end:1299513,filename:"/lib/python3.7/site-packages/mpmath/libmp/libmpf.py"},{start:1299513,audio:0,end:1327135,filename:"/lib/python3.7/site-packages/mpmath/libmp/libmpi.py"},{start:1327135,audio:0,end:1338990,filename:"/lib/python3.7/site-packages/mpmath/libmp/six.py"},{start:1338990,audio:0,end:1339084,filename:"/lib/python3.7/site-packages/mpmath/matrices/__init__.py"},{start:1339084,audio:0,end:1357693,filename:"/lib/python3.7/site-packages/mpmath/matrices/calculus.py"},{start:1357693,audio:0,end:1382075,filename:"/lib/python3.7/site-packages/mpmath/matrices/eigen.py"},{start:1382075,audio:0,end:1440599,filename:"/lib/python3.7/site-packages/mpmath/matrices/eigen_symmetric.py"},{start:1440599,audio:0,end:1467619,filename:"/lib/python3.7/site-packages/mpmath/matrices/linalg.py"},{start:1467619,audio:0,end:1499214,filename:"/lib/python3.7/site-packages/mpmath/matrices/matrices.py"},{start:1499214,audio:0,end:1499214,filename:"/lib/python3.7/site-packages/mpmath/tests/__init__.py"},{start:1499214,audio:0,end:1506442,filename:"/lib/python3.7/site-packages/mpmath/tests/extratest_gamma.py"},{start:1506442,audio:0,end:1507445,filename:"/lib/python3.7/site-packages/mpmath/tests/extratest_zeta.py"},{start:1507445,audio:0,end:1512263,filename:"/lib/python3.7/site-packages/mpmath/tests/runtests.py"},{start:1512263,audio:0,end:1527462,filename:"/lib/python3.7/site-packages/mpmath/tests/test_basic_ops.py"},{start:1527462,audio:0,end:1535148,filename:"/lib/python3.7/site-packages/mpmath/tests/test_bitwise.py"},{start:1535148,audio:0,end:1544119,filename:"/lib/python3.7/site-packages/mpmath/tests/test_calculus.py"},{start:1544119,audio:0,end:1546425,filename:"/lib/python3.7/site-packages/mpmath/tests/test_compatibility.py"},{start:1546425,audio:0,end:1554935,filename:"/lib/python3.7/site-packages/mpmath/tests/test_convert.py"},{start:1554935,audio:0,end:1557401,filename:"/lib/python3.7/site-packages/mpmath/tests/test_diff.py"},{start:1557401,audio:0,end:1562741,filename:"/lib/python3.7/site-packages/mpmath/tests/test_division.py"},{start:1562741,audio:0,end:1566646,filename:"/lib/python3.7/site-packages/mpmath/tests/test_eigen.py"},{start:1566646,audio:0,end:1575424,filename:"/lib/python3.7/site-packages/mpmath/tests/test_eigen_symmetric.py"},{start:1575424,audio:0,end:1600069,filename:"/lib/python3.7/site-packages/mpmath/tests/test_elliptic.py"},{start:1600069,audio:0,end:1690066,filename:"/lib/python3.7/site-packages/mpmath/tests/test_fp.py"},{start:1690066,audio:0,end:1721021,filename:"/lib/python3.7/site-packages/mpmath/tests/test_functions.py"},{start:1721021,audio:0,end:1818011,filename:"/lib/python3.7/site-packages/mpmath/tests/test_functions2.py"},{start:1818011,audio:0,end:1845674,filename:"/lib/python3.7/site-packages/mpmath/tests/test_gammazeta.py"},{start:1845674,audio:0,end:1856135,filename:"/lib/python3.7/site-packages/mpmath/tests/test_hp.py"},{start:1856135,audio:0,end:1856827,filename:"/lib/python3.7/site-packages/mpmath/tests/test_identify.py"},{start:1856827,audio:0,end:1873960,filename:"/lib/python3.7/site-packages/mpmath/tests/test_interval.py"},{start:1873960,audio:0,end:1879050,filename:"/lib/python3.7/site-packages/mpmath/tests/test_levin.py"},{start:1879050,audio:0,end:1889506,filename:"/lib/python3.7/site-packages/mpmath/tests/test_linalg.py"},{start:1889506,audio:0,end:1894924,filename:"/lib/python3.7/site-packages/mpmath/tests/test_matrices.py"},{start:1894924,audio:0,end:1895120,filename:"/lib/python3.7/site-packages/mpmath/tests/test_mpmath.py"},{start:1895120,audio:0,end:1896942,filename:"/lib/python3.7/site-packages/mpmath/tests/test_ode.py"},{start:1896942,audio:0,end:1897343,filename:"/lib/python3.7/site-packages/mpmath/tests/test_pickle.py"},{start:1897343,audio:0,end:1902570,filename:"/lib/python3.7/site-packages/mpmath/tests/test_power.py"},{start:1902570,audio:0,end:1906324,filename:"/lib/python3.7/site-packages/mpmath/tests/test_quad.py"},{start:1906324,audio:0,end:1909566,filename:"/lib/python3.7/site-packages/mpmath/tests/test_rootfinding.py"},{start:1909566,audio:0,end:1912414,filename:"/lib/python3.7/site-packages/mpmath/tests/test_special.py"},{start:1912414,audio:0,end:1912958,filename:"/lib/python3.7/site-packages/mpmath/tests/test_str.py"},{start:1912958,audio:0,end:1914817,filename:"/lib/python3.7/site-packages/mpmath/tests/test_summation.py"},{start:1914817,audio:0,end:1919616,filename:"/lib/python3.7/site-packages/mpmath/tests/test_trig.py"},{start:1919616,audio:0,end:1920560,filename:"/lib/python3.7/site-packages/mpmath/tests/test_visualization.py"},{start:1920560,audio:0,end:1928428,filename:"/lib/python3.7/site-packages/mpmath/tests/torture.py"}],remote_package_size:1109398,package_uuid:"3a2eed48-9911-4fc8-b2bf-4bb122ad4d6a"})})();