var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="setuptools.data";var REMOTE_PACKAGE_BASE="setuptools.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","setuptools-40.0.0-py3.8.egg-info",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","setuptools",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/setuptools","extern",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/setuptools","command",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/setuptools","_vendor",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/setuptools/_vendor","packaging",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","pkg_resources",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/pkg_resources","extern",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/pkg_resources","_vendor",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/pkg_resources/_vendor","packaging",true,true);Module["FS_createPath"]("/","bin",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:1021259,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1204,2383,3208,4172,4893,5540,6692,8061,9359,10660,11753,13025,14354,15572,16762,18423,20251,22123,23789,25604,27310,29203,30894,32685,34472,36351,38226,39988,41705,43461,45140,46901,48752,50527,52380,54139,55991,57872,59645,61466,63222,64191,65183,66381,67178,67705,68989,70154,71456,72595,74410,76239,78106,79715,81550,83266,85135,86775,88592,90378,92257,94102,95889,97515,99225,100915,102676,104479,106241,108043,109840,111678,113521,115287,117132,118746,119566,120589,121915,122667,123250,124461,125765,127590,129482,131281,132969,134689,136575,138427,139972,141818,143661,145560,147406,149226,150830,152478,154077,155962,157724,159510,161388,163174,164991,166769,168645,170245,171691,172283,173444,174737,175231,176168,177417,179216,180981,182753,184587,186425,188160,189948,191822,193458,195226,197008,198712,200505,202228,204004,205557,207330,209178,211026,212791,214522,216317,218083,219883,221763,223384,224607,225692,226518,228177,229621,230459,230931,231761,233165,234423,235652,236987,238808,240672,242451,244185,245914,247795,249625,251171,252990,254853,256721,258553,260352,261978,263631,265254,267132,268885,270705,272558,274337,276168,277937,279825,281550,282875,283447,284620,285728,286182,287290,288534,289722,290855,291996,293101,294282,295366,296363,297284,298444,299703,301046,302358,303654,304876,306301,307473,308604,309859,311046,312352,313495,314774,315896,317126,318268,319513,320646,321583,322336,323472,324409,325412,326425,327365,328400,329638,330469,331234,332082,332930,333807,334493,335751,337092,338290,339414,340530,341796,343068,344235,345464,346309,347476,348623,349906,351690,353452,355207,357052,358892,360612,362416,364295,365942,367723,369511,371235,373011,374744,376532,378116,379852,381705,383538,385294,387037,388853,390624,392413,394290,395923,396937,398147,398772,400420,401848,402856,403350,404127,405416,407166,408298,409381,410602,411633,412741,413747,415178,416562,417992,419112,420268,421454,422677,423875,424781,426013,426830,428152,429389,430587,431817,433067,434233,435584,436717,437807,439130,440288,441682,443033,444328,445588,446873,448105,449365,450703,451968,453086,454258,455242,456362,457498,458714,459959,461341,462752,464110,465309,466526,467715,468922,470100,471219,472438,473747,474830,476003,477267,478442,479550,480243,481156,482464,483620,484984,486173,487557,488439,489603,490814,492035,493230,494383,495564,496712,498070,499327,500360,501356,502711,503950,505247,506476,507833,508929,510113,511274,512593,513697,514922,516130,517311,518634,519708,520704,521897,522948,523974,525149,526247,527379,528604,529891,531081,532465,533814,535118,536295,537577,538652,539677,540772,542035,543267,544530,545607,546765,547842,548935,550156,551315,552290,553339,554611,555722,556986,558171,559385,560614,561977,563207,564252,565489,566774,567928,569038,570483,571914,573256,574567,575914,577272,578579,579704,580870,582037,583311,584563,585779,586932,587990,589235,590576,591775,593074,594530,595786,596760,598072,599679,601048,602450,603781,605036,606240,607268,608184,608987,610167,611308,612384,613555,614669,615633,616743,617819,619085,620384,621643,622838,624048,625277,626575,627722,628932,629796,630547,631375,632489,633727,634965,636132,637254,638443,639688,640505,641441,642033,642779,643924,644944,646149,647296,648205,649312,650396,651744,652829,654040,655031,656432,657551,658438,659742,660991,661992,663110,664337,665561,666603,667569,668511,669693,670647,671804,672931,673994,675145,676451,677393,678518,679445,680633,681865,683079,684282,685513,686636,687648,688945,690120,691302,692442,693695,694979,696273,697317,698709,699981,701334,702679,704113,705309,706589,707840,709142,710373,711732,712740,713816,715092,715916,717162,718181,719517,720429,721335,722409,723359,724723,725909,727451,728539,729671,730615,731374,732190,732904,733453,734228,735277,736220,737310,738300,739606,740995,742213,743279,744466,745606,746713,747928,749137,750155,751047,752223,753186,754364,755157,756357,757357,758313,759478,760526,761508,762650,763850,764786,766062,767093,768101,769421,770333,771646,772991,774421,775575,776907,778222,779423,780523,781757,782991,784286,785501,786664,787883,789059,790275,791587,792786,793631,794954,796372,797717,798862,799757,800782,802007,803232,804346,805477,806730,807948,809051,810314,811618,812803,813969,815302,816519,817686,818922,820001,821278,822470,823607,824685,825905,827156,828540,829822,831242,832712,833849,835353,836595,837932,839161,840513,841804,843093,844475,845446,846622,847698,849390,850850,852327,853822,854887,856171,857294,858205,859240,860294,861404,862413,863507,864601,865721,866676,867848,868956,869975,871206,872488,873573,874737,875905,877218,878408,879462,880222,881168,882139,883312,884538,885793,886744,888008,889281,889974,891076,891956,892397,893574,894620,895744,896880,898074,899165,900164,901532,902567,903602,904756,905993,907233,908146,909375,910547,911688,912559,913727,914966,916194,917344,918181,919163,920161,921143,922231,923409,924641,925770,926933,927930,929058,930037,931301,932503,933718,934863,936146,937221,938554,939573,940805,942004,943159,944413,945711,946804,948244,949364,950699,952022,953380,954694,955862,956972,958417,959576,960982,962206,963050,964260,965342,966548,967575,968842,970108,970826,971841,972941,974246,975464,976952,978207,979312,980439,981263,982199,982866,983425,984126,985184,986067,987235,988271,989518,990954,991987,992961,994206,995301,996471,997882,999151,1000306,1001338,1002454,1003652,1004649,1005444,1006614,1007642,1008485,1009676,1010866,1011640,1012862,1013982,1015061,1016317,1017363,1018144,1019454,1020646],sizes:[1204,1179,825,964,721,647,1152,1369,1298,1301,1093,1272,1329,1218,1190,1661,1828,1872,1666,1815,1706,1893,1691,1791,1787,1879,1875,1762,1717,1756,1679,1761,1851,1775,1853,1759,1852,1881,1773,1821,1756,969,992,1198,797,527,1284,1165,1302,1139,1815,1829,1867,1609,1835,1716,1869,1640,1817,1786,1879,1845,1787,1626,1710,1690,1761,1803,1762,1802,1797,1838,1843,1766,1845,1614,820,1023,1326,752,583,1211,1304,1825,1892,1799,1688,1720,1886,1852,1545,1846,1843,1899,1846,1820,1604,1648,1599,1885,1762,1786,1878,1786,1817,1778,1876,1600,1446,592,1161,1293,494,937,1249,1799,1765,1772,1834,1838,1735,1788,1874,1636,1768,1782,1704,1793,1723,1776,1553,1773,1848,1848,1765,1731,1795,1766,1800,1880,1621,1223,1085,826,1659,1444,838,472,830,1404,1258,1229,1335,1821,1864,1779,1734,1729,1881,1830,1546,1819,1863,1868,1832,1799,1626,1653,1623,1878,1753,1820,1853,1779,1831,1769,1888,1725,1325,572,1173,1108,454,1108,1244,1188,1133,1141,1105,1181,1084,997,921,1160,1259,1343,1312,1296,1222,1425,1172,1131,1255,1187,1306,1143,1279,1122,1230,1142,1245,1133,937,753,1136,937,1003,1013,940,1035,1238,831,765,848,848,877,686,1258,1341,1198,1124,1116,1266,1272,1167,1229,845,1167,1147,1283,1784,1762,1755,1845,1840,1720,1804,1879,1647,1781,1788,1724,1776,1733,1788,1584,1736,1853,1833,1756,1743,1816,1771,1789,1877,1633,1014,1210,625,1648,1428,1008,494,777,1289,1750,1132,1083,1221,1031,1108,1006,1431,1384,1430,1120,1156,1186,1223,1198,906,1232,817,1322,1237,1198,1230,1250,1166,1351,1133,1090,1323,1158,1394,1351,1295,1260,1285,1232,1260,1338,1265,1118,1172,984,1120,1136,1216,1245,1382,1411,1358,1199,1217,1189,1207,1178,1119,1219,1309,1083,1173,1264,1175,1108,693,913,1308,1156,1364,1189,1384,882,1164,1211,1221,1195,1153,1181,1148,1358,1257,1033,996,1355,1239,1297,1229,1357,1096,1184,1161,1319,1104,1225,1208,1181,1323,1074,996,1193,1051,1026,1175,1098,1132,1225,1287,1190,1384,1349,1304,1177,1282,1075,1025,1095,1263,1232,1263,1077,1158,1077,1093,1221,1159,975,1049,1272,1111,1264,1185,1214,1229,1363,1230,1045,1237,1285,1154,1110,1445,1431,1342,1311,1347,1358,1307,1125,1166,1167,1274,1252,1216,1153,1058,1245,1341,1199,1299,1456,1256,974,1312,1607,1369,1402,1331,1255,1204,1028,916,803,1180,1141,1076,1171,1114,964,1110,1076,1266,1299,1259,1195,1210,1229,1298,1147,1210,864,751,828,1114,1238,1238,1167,1122,1189,1245,817,936,592,746,1145,1020,1205,1147,909,1107,1084,1348,1085,1211,991,1401,1119,887,1304,1249,1001,1118,1227,1224,1042,966,942,1182,954,1157,1127,1063,1151,1306,942,1125,927,1188,1232,1214,1203,1231,1123,1012,1297,1175,1182,1140,1253,1284,1294,1044,1392,1272,1353,1345,1434,1196,1280,1251,1302,1231,1359,1008,1076,1276,824,1246,1019,1336,912,906,1074,950,1364,1186,1542,1088,1132,944,759,816,714,549,775,1049,943,1090,990,1306,1389,1218,1066,1187,1140,1107,1215,1209,1018,892,1176,963,1178,793,1200,1e3,956,1165,1048,982,1142,1200,936,1276,1031,1008,1320,912,1313,1345,1430,1154,1332,1315,1201,1100,1234,1234,1295,1215,1163,1219,1176,1216,1312,1199,845,1323,1418,1345,1145,895,1025,1225,1225,1114,1131,1253,1218,1103,1263,1304,1185,1166,1333,1217,1167,1236,1079,1277,1192,1137,1078,1220,1251,1384,1282,1420,1470,1137,1504,1242,1337,1229,1352,1291,1289,1382,971,1176,1076,1692,1460,1477,1495,1065,1284,1123,911,1035,1054,1110,1009,1094,1094,1120,955,1172,1108,1019,1231,1282,1085,1164,1168,1313,1190,1054,760,946,971,1173,1226,1255,951,1264,1273,693,1102,880,441,1177,1046,1124,1136,1194,1091,999,1368,1035,1035,1154,1237,1240,913,1229,1172,1141,871,1168,1239,1228,1150,837,982,998,982,1088,1178,1232,1129,1163,997,1128,979,1264,1202,1215,1145,1283,1075,1333,1019,1232,1199,1155,1254,1298,1093,1440,1120,1335,1323,1358,1314,1168,1110,1445,1159,1406,1224,844,1210,1082,1206,1027,1267,1266,718,1015,1100,1305,1218,1488,1255,1105,1127,824,936,667,559,701,1058,883,1168,1036,1247,1436,1033,974,1245,1095,1170,1411,1269,1155,1032,1116,1198,997,795,1170,1028,843,1191,1190,774,1222,1120,1079,1256,1046,781,1310,1192,613],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_setuptools.data")}Module["addRunDependency"]("datafile_setuptools.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/easy_install.py",start:0,end:126,audio:0},{filename:"/lib/python3.8/site-packages/setuptools-40.0.0-py3.8.egg-info/zip-safe",start:126,end:127,audio:0},{filename:"/lib/python3.8/site-packages/setuptools-40.0.0-py3.8.egg-info/dependency_links.txt",start:127,end:366,audio:0},{filename:"/lib/python3.8/site-packages/setuptools-40.0.0-py3.8.egg-info/requires.txt",start:366,end:441,audio:0},{filename:"/lib/python3.8/site-packages/setuptools-40.0.0-py3.8.egg-info/top_level.txt",start:441,end:479,audio:0},{filename:"/lib/python3.8/site-packages/setuptools-40.0.0-py3.8.egg-info/PKG-INFO",start:479,end:3704,audio:0},{filename:"/lib/python3.8/site-packages/setuptools-40.0.0-py3.8.egg-info/entry_points.txt",start:3704,end:6694,audio:0},{filename:"/lib/python3.8/site-packages/setuptools-40.0.0-py3.8.egg-info/SOURCES.txt",start:6694,end:13298,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/glibc.py",start:13298,end:16448,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/ssl_support.py",start:16448,end:24940,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/extension.py",start:24940,end:26669,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/namespaces.py",start:26669,end:29868,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/gui-32.exe",start:29868,end:95404,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/depends.py",start:95404,end:101241,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/cli-32.exe",start:101241,end:166777,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/py33compat.py",start:166777,end:167972,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/cli.exe",start:167972,end:233508,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/gui-64.exe",start:233508,end:308772,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/site-patch.py",start:308772,end:311074,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/gui.exe",start:311074,end:376610,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/script.tmpl",start:376610,end:376748,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/config.py",start:376748,end:394769,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/lib2to3_ex.py",start:394769,end:396782,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/dep_util.py",start:396782,end:397717,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/unicode_utils.py",start:397717,end:398713,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/__init__.py",start:398713,end:404427,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/py36compat.py",start:404427,end:407318,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/windows_support.py",start:407318,end:408036,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/script (dev).tmpl",start:408036,end:408254,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/archive_util.py",start:408254,end:414846,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/pep425tags.py",start:414846,end:425723,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/msvc.py",start:425723,end:466600,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/wheel.py",start:466600,end:474702,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/py31compat.py",start:474702,end:475522,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/sandbox.py",start:475522,end:489798,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/cli-64.exe",start:489798,end:564550,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/glob.py",start:564550,end:569757,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/dist.py",start:569757,end:612370,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/build_meta.py",start:612370,end:618041,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/package_index.py",start:618041,end:658351,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/version.py",start:658351,end:658495,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/launch.py",start:658495,end:659282,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/monkey.py",start:659282,end:664486,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/py27compat.py",start:664486,end:665022,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/extern/__init__.py",start:665022,end:667523,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/command/develop.py",start:667523,end:675583,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/command/egg_info.py",start:675583,end:700383,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/command/register.py",start:700383,end:700653,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/command/launcher manifest.xml",start:700653,end:701281,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/command/build_clib.py",start:701281,end:705765,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/command/saveopts.py",start:705765,end:706423,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/command/install_egg_info.py",start:706423,end:708626,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/command/rotate.py",start:708626,end:710790,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/command/build_py.py",start:710790,end:720386,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/command/__init__.py",start:720386,end:720980,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/command/py36compat.py",start:720980,end:725966,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/command/install_scripts.py",start:725966,end:728405,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/command/bdist_rpm.py",start:728405,end:729913,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/command/sdist.py",start:729913,end:736624,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/command/alias.py",start:736624,end:739050,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/command/install_lib.py",start:739050,end:742890,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/command/bdist_wininst.py",start:742890,end:743527,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/command/dist_info.py",start:743527,end:744487,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/command/upload_docs.py",start:744487,end:751798,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/command/upload.py",start:751798,end:752970,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/command/build_ext.py",start:752970,end:765867,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/command/test.py",start:765867,end:775095,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/command/install.py",start:775095,end:779778,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/command/easy_install.py",start:779778,end:866829,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/command/bdist_egg.py",start:866829,end:885016,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/command/setopt.py",start:885016,end:890101,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/_vendor/__init__.py",start:890101,end:890101,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/_vendor/pyparsing.py",start:890101,end:1119968,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/_vendor/six.py",start:1119968,end:1150066,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/_vendor/packaging/__about__.py",start:1150066,end:1150786,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/_vendor/packaging/__init__.py",start:1150786,end:1151299,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/_vendor/packaging/markers.py",start:1151299,end:1159538,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/_vendor/packaging/utils.py",start:1159538,end:1159959,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/_vendor/packaging/_compat.py",start:1159959,end:1160819,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/_vendor/packaging/requirements.py",start:1160819,end:1165162,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/_vendor/packaging/specifiers.py",start:1165162,end:1193187,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/_vendor/packaging/version.py",start:1193187,end:1204743,audio:0},{filename:"/lib/python3.8/site-packages/setuptools/_vendor/packaging/_structures.py",start:1204743,end:1206159,audio:0},{filename:"/lib/python3.8/site-packages/pkg_resources/__init__.py",start:1206159,end:1309972,audio:0},{filename:"/lib/python3.8/site-packages/pkg_resources/py31compat.py",start:1309972,end:1310525,audio:0},{filename:"/lib/python3.8/site-packages/pkg_resources/extern/__init__.py",start:1310525,end:1313023,audio:0},{filename:"/lib/python3.8/site-packages/pkg_resources/_vendor/__init__.py",start:1313023,end:1313023,audio:0},{filename:"/lib/python3.8/site-packages/pkg_resources/_vendor/appdirs.py",start:1313023,end:1335397,audio:0},{filename:"/lib/python3.8/site-packages/pkg_resources/_vendor/pyparsing.py",start:1335397,end:1565264,audio:0},{filename:"/lib/python3.8/site-packages/pkg_resources/_vendor/six.py",start:1565264,end:1595362,audio:0},{filename:"/lib/python3.8/site-packages/pkg_resources/_vendor/packaging/__about__.py",start:1595362,end:1596082,audio:0},{filename:"/lib/python3.8/site-packages/pkg_resources/_vendor/packaging/__init__.py",start:1596082,end:1596595,audio:0},{filename:"/lib/python3.8/site-packages/pkg_resources/_vendor/packaging/markers.py",start:1596595,end:1604843,audio:0},{filename:"/lib/python3.8/site-packages/pkg_resources/_vendor/packaging/utils.py",start:1604843,end:1605264,audio:0},{filename:"/lib/python3.8/site-packages/pkg_resources/_vendor/packaging/_compat.py",start:1605264,end:1606124,audio:0},{filename:"/lib/python3.8/site-packages/pkg_resources/_vendor/packaging/requirements.py",start:1606124,end:1610479,audio:0},{filename:"/lib/python3.8/site-packages/pkg_resources/_vendor/packaging/specifiers.py",start:1610479,end:1638504,audio:0},{filename:"/lib/python3.8/site-packages/pkg_resources/_vendor/packaging/version.py",start:1638504,end:1650060,audio:0},{filename:"/lib/python3.8/site-packages/pkg_resources/_vendor/packaging/_structures.py",start:1650060,end:1651476,audio:0},{filename:"/bin/easy_install",start:1651476,end:1651905,audio:0},{filename:"/bin/easy_install-3.8",start:1651905,end:1652342,audio:0}],remote_package_size:1025355,package_uuid:"6d1b4baa-3d88-44b2-acfb-84ffb509565a"})})();