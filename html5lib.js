var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="html5lib.data";var REMOTE_PACKAGE_BASE="html5lib.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","html5lib-1.0.1-py3.8.egg-info",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","html5lib",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/html5lib","treeadapters",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/html5lib","treebuilders",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/html5lib","_trie",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/html5lib","treewalkers",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/html5lib","filters",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:234476,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1178,2250,3607,4816,6199,7391,8750,10132,11191,12076,12654,12992,14062,15452,16695,17926,19274,20616,21930,23399,24950,26030,26973,28070,28835,29570,30362,31091,31711,32565,33129,33863,35014,36015,37124,38297,39187,40139,41037,41924,42792,43716,44642,45542,46486,47326,48262,49175,50097,50987,51925,52847,53736,54668,55475,56329,57272,58189,59131,59993,60876,61787,62654,63849,64850,66072,67219,68090,69080,70317,71354,72447,73407,73923,74560,75319,76136,77066,78040,78918,79772,80687,81627,82658,83701,84523,85365,85998,86779,87582,88379,89283,90208,90890,91952,92942,93728,94599,95533,96600,97398,98357,99290,100226,101165,101940,102839,103459,104433,105374,106270,107199,107904,108780,109786,110647,111558,112471,113315,114132,114732,115798,117039,118300,119477,120615,121622,122547,123339,124508,125758,126743,128140,129294,130469,131588,132967,134046,134949,136019,136999,138124,139057,140159,141083,142245,143512,144420,145589,146550,147599,148412,148887,149604,150422,151011,151634,152292,152899,153341,153992,154697,155174,155868,156686,157633,158313,158921,159677,160665,161524,162029,162592,163249,163816,164687,165324,165832,166373,166945,167555,168093,169091,170257,171375,172786,173976,175143,176230,177356,178370,179470,180464,181759,182891,183738,184677,185544,186474,187626,188871,189744,190603,191409,192338,193303,194327,195216,196212,197171,197954,199172,200237,201364,202714,203789,204530,205829,206793,207773,208654,209575,210664,211762,213007,213666,214811,215900,216793,217702,218544,219333,220285,221121,222185,223048,224079,224537,225063,225815,226523,227266,228018,228937,229962,230825,231980,233091,234228],sizes:[1178,1072,1357,1209,1383,1192,1359,1382,1059,885,578,338,1070,1390,1243,1231,1348,1342,1314,1469,1551,1080,943,1097,765,735,792,729,620,854,564,734,1151,1001,1109,1173,890,952,898,887,868,924,926,900,944,840,936,913,922,890,938,922,889,932,807,854,943,917,942,862,883,911,867,1195,1001,1222,1147,871,990,1237,1037,1093,960,516,637,759,817,930,974,878,854,915,940,1031,1043,822,842,633,781,803,797,904,925,682,1062,990,786,871,934,1067,798,959,933,936,939,775,899,620,974,941,896,929,705,876,1006,861,911,913,844,817,600,1066,1241,1261,1177,1138,1007,925,792,1169,1250,985,1397,1154,1175,1119,1379,1079,903,1070,980,1125,933,1102,924,1162,1267,908,1169,961,1049,813,475,717,818,589,623,658,607,442,651,705,477,694,818,947,680,608,756,988,859,505,563,657,567,871,637,508,541,572,610,538,998,1166,1118,1411,1190,1167,1087,1126,1014,1100,994,1295,1132,847,939,867,930,1152,1245,873,859,806,929,965,1024,889,996,959,783,1218,1065,1127,1350,1075,741,1299,964,980,881,921,1089,1098,1245,659,1145,1089,893,909,842,789,952,836,1064,863,1031,458,526,752,708,743,752,919,1025,863,1155,1111,1137,248],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_html5lib.data")}Module["addRunDependency"]("datafile_html5lib.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/html5lib-1.0.1-py3.8.egg-info/dependency_links.txt",start:0,end:1,audio:0},{filename:"/lib/python3.8/site-packages/html5lib-1.0.1-py3.8.egg-info/requires.txt",start:1,end:272,audio:0},{filename:"/lib/python3.8/site-packages/html5lib-1.0.1-py3.8.egg-info/top_level.txt",start:272,end:281,audio:0},{filename:"/lib/python3.8/site-packages/html5lib-1.0.1-py3.8.egg-info/PKG-INFO",start:281,end:19050,audio:0},{filename:"/lib/python3.8/site-packages/html5lib-1.0.1-py3.8.egg-info/SOURCES.txt",start:19050,end:25461,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/_utils.py",start:25461,end:29464,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/__init__.py",start:29464,end:30609,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/_ihatexml.py",start:30609,end:47314,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/constants.py",start:47314,end:130832,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/html5parser.py",start:130832,end:249783,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/serializer.py",start:249783,end:265529,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/_inputstream.py",start:265529,end:298028,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/_tokenizer.py",start:298028,end:374596,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treeadapters/genshi.py",start:374596,end:376311,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treeadapters/__init__.py",start:376311,end:376961,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treeadapters/sax.py",start:376961,end:378737,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treebuilders/__init__.py",start:378737,end:382329,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treebuilders/base.py",start:382329,end:396896,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treebuilders/etree_lxml.py",start:396896,end:411018,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treebuilders/etree.py",start:411018,end:423770,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treebuilders/dom.py",start:423770,end:432605,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/_trie/__init__.py",start:432605,end:432894,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/_trie/py.py",start:432894,end:434657,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/_trie/datrie.py",start:434657,end:435823,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/_trie/_base.py",start:435823,end:436753,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treewalkers/genshi.py",start:436753,end:439062,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treewalkers/__init__.py",start:439062,end:444776,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treewalkers/base.py",start:444776,end:452252,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treewalkers/etree_lxml.py",start:452252,end:458549,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treewalkers/etree.py",start:458549,end:463087,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treewalkers/dom.py",start:463087,end:464500,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/filters/whitespace.py",start:464500,end:465714,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/filters/optionaltags.py",start:465714,end:476302,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/filters/__init__.py",start:476302,end:476302,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/filters/base.py",start:476302,end:476588,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/filters/inject_meta_charset.py",start:476588,end:479533,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/filters/lint.py",start:479533,end:483164,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/filters/alphabeticalattributes.py",start:483164,end:484083,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/filters/sanitizer.py",start:484083,end:510319,audio:0}],remote_package_size:238572,package_uuid:"c2f7c281-c7be-4b92-a006-d419b7da2c64"})})();