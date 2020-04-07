//Thank you Matchstic, you beautiful person
const VERSION_CHECK_SUPPORTED = "<p>iOS của bạn hỗ trợ.✓</p>";
const VERSION_CHECK_UNSUPPORTED = "<p>iOS của bạn không hỗ trợ.✕</p>";
const VERSION_CHECK_UNCONFIRMED = "<p>iOS của bạn chưa kiểm tra.!</p>";

function iOSversion() {
	if (/iP(hone|od|ad)/.test(navigator.platform)) {
		var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
		return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
	}
	else {
		return 0;
	}
}

var maxVersion = document.getElementById('maxVersion').innerHTML;
var minVersion = document.getElementById('minVersion').innerHTML;
var version = iOSversion();
var versionNumber = parseFloat(version[0] + "." + version[1]);

	if(versionNumber >= minVersion && version <= maxVersion) {
		document.getElementById('compatibility').innerHTML=VERSION_CHECK_SUPPORTED.replace("%s", versionNumber);
		document.getElementById('compatibility').style.color = "#20c734";
	} else if(versionNumber > maxVersion) {
		document.getElementById('compatibility').innerHTML=VERSION_CHECK_UNCONFIRMED.replace("%s", versionNumber);
		document.getElementById('compatibility').style.color = "#d16cea";
	} else if(!versionNumber) {
		document.getElementById('compatibility').innerHTML="<p>Can't get device version.&#x1f601;;</p>";
		document.getElementById('compatibility').style.color = "#e8b87c";
	} else {
		document.getElementById('compatibility').innerHTML=VERSION_CHECK_UNSUPPORTED.replace("%s", versionNumber);
		document.getElementById('compatibility').style.color = "#f52929";
	}
