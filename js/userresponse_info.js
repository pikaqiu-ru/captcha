function userresponse(t, e) {
	for(var n = e["slice"](32), r = [], o = 0; o < n["length"]; o++) {
		var i = n["charCodeAt"](o);
		r[o] = 57 < i ? i - 87 : i - 48;
	}
	n = 36 * r[0] + r[1];
	var s, a = Math["round"](t) + n,u = [[],[],[],[],[]],c = {},_ = 0;
	o = 0;
	for(var l = (e = e["slice"](0, 32))["length"]; o < l; o++) {
		c[s = e["charAt"](o)] || (c[s] = 1, u[_]["push"](s), _ = 5 == ++_ ? 0 : _);
		var f, h = a,d = 4,p = "",g = [1, 2, 5, 10, 50];
	}
	while(0 < h){
		0 <= h - g[d] ? (f = parseInt(Math["random"]() * u[d]["length"], 10),
			p += u[d][f],
			h -= g[d]) : (u["splice"](d, 1),
			g["splice"](d, 1),
			d -= 1);
	}
	return p;
}