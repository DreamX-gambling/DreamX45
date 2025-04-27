! function () {
var t;
try {
for (t = 0; 10 > t; ++t) history.pushState({}, "", "#");
onpopstate = function (t) {
t.state && location.replace("https://track.trackmiss.com/153ac056-6a36-4a9e-9e02-9374a67dba62?source=bbanmydesktopspincn")
}
} catch (o) {}
}();