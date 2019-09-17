function base64_info(t) {
	function aa(t, e) {
		function a(t, e) {
			return t >> e & 1;
		}
		for(var n = 0, r = 24 - 1; 0 <= r; r -= 1)
			1 === a(e, r) && (n = (n << 1) + a(t, r));
		return n
	}

	function a(t) {
		e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()';
		return t < 0 || t >= e["length"] ? "." : e["charAt"](t);
	}
	for(var n = "", r = "", s = t["length"], a = 0; a < s; a += 3) {
		var u;
		if(a + 2 < s)
			u = (t[a] << 16) + (t[a + 1] << 8) + t[a + 2],
			n += a(e(u, 7274496)) + a(e(u, 9483264)) + a(e(u, 19220)) + a(e(u, 235));
		else {
			var c = s % 3;
			2 == c ? (u = (t[a] << 16) + (t[a + 1] << 8),
				n += a(e(u, 7274496)) + a(e(u, 9483264)) + a(e(u, 19220)),
				r = ".") : 1 == c && (u = t[a] << 16,
				n += a(e(u, 7274496)) + a(e(u, 9483264)),
				r = "." + ".");
		}
		return n + r;
	}
}

