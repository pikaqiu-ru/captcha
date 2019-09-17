function skip_list(t) {
	for(var e, n, r, o = [], i = 0, s = 0, a = t.length - 1; s < a; s++) {
		e = Math["round"](t[s + 1][0] - t[s][0]),
			n = Math["round"](t[s + 1][1] - t[s][1]),
			r = Math["round"](t[s + 1][2] - t[s][2]),
			0 == e && 0 == n && 0 == r || (0 == e && 0 == n ? i += r : (o["push"]([e, n, r + i]),
				i = 0));
	}
	o["push"]([e, n, i]);
	return o;

}

function e_fun(t) {
	for(var e = [[1, 0],[2, 0],[1, -1],[1, 1],[0, 1],[0, -1],[3, 0],[2, -1],[2, 1]], n = 0, r = e["length"]; n < r; n++)
		if(t[0] == e[n][0] && t[1] == e[n][1]){
			st = "stuvwxyz~";
			return st[n];
		}
	return 0;
}

function n(t) {
	var test = 3;
	var my = 5;
	var test = 3;
	for(; test !== my;) {
		switch(test) {
			case 3:
				var e = "()*,-./0123456789:?@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqr",
					n = e["length"],
					r = "",
					o = Math["abs"](t),
					i = parseInt(o / n);
				n <= i && (i = n - 1),
					i && (r = e["charAt"](i));
				var s = "";
				return t < 0 && (s += "!"),
					r && (s += "$"),
					s + r + e["charAt"](o %= n);
				break;
		}
	}
}

function np(trace_) {;

	var skip_li = skip_list(trace_),
		r = [],
		o = [],
		i = [];
	for(var j = 0;j < skip_li.length;j++){
		var t = skip_li[j];
		var e = e_fun(t);
		e ? o["push"](e) : (r["push"](n(t[0])),
				o["push"](n(t[1]))),
				i["push"](n(t[2]));
		}
return r["join"]("") + "!!" + o["join"]("") + "!!" + i["join"]("");
}

function e_info(t, e, n) {
                if (!e || !n)
                    return t;
                var r, o = 0, i = t, s = e[0], a = e[2], u = e[4];
                while (r = n["substr"](o, 2)) {
                    o += 2;
                    var c = parseInt(r, 16)
                      , _ = String["fromCharCode"](c)
                      , l = (s * c * c + a * c + u) % t["length"];
                    i = i["substr"](0, l) + _ + i["substr"](l);
                }
                return i;
            }

trace = [];
a = np(trace),b = [12, 58, 98, 36, 43, 95, 62, 15, 12],c=s = initData['s'];


console.log(e_info(a,b,c));
