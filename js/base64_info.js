function base_info() {
	function ret_n(t, e) {
		function abc(t, e) {
			return t >> e & 1;
		}
		for(var n = 0, r = 24 - 1; 0 <= r; r -= 1)
			1 === abc(e, r) && (n = (n << 1) + abc(t, r));
		return n;
	}

	function ret_a(t) {
		e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()';
		return t < 0 || t >= e["length"] ? "." : e["charAt"](t);
	}

	function fina(t) {
		for(var n = "", r = "", s = t["length"], a = 0; a < s; a += 3) {
			var u;
			if(a + 2 < s)
				u = (t[a] << 16) + (t[a + 1] << 8) + t[a + 2],
				n += ret_a(ret_n(u, 7274496)) + ret_a(ret_n(u, 9483264)) + ret_a(ret_n(u, 19220)) + ret_a(ret_n(u, 235));
			else {
				var c = s % 3;
				2 == c ? (u = (t[a] << 16) + (t[a + 1] << 8),
					n += ret_a(ret_n(u, 7274496)) + ret_a(ret_n(u, 9483264)) + ret_a(ret_n(u, 19220)),
					r = ".") : 1 == c && (u = t[a] << 16,
					n += ret_a(ret_n(u, 7274496)) + ret_a(ret_n(u, 9483264)),
					r = "." + ".");
			}
		}
		return n + r;
	}

	return fina(t);
}