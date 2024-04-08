var je = (s, t, i) => new Promise((n, a) => {
    var p = r => {
            try {
                m(i.next(r))
            } catch (l) {
                a(l)
            }
        },
        o = r => {
            try {
                m(i.throw(r))
            } catch (l) {
                a(l)
            }
        },
        m = r => r.done ? n(r.value) : Promise.resolve(r.value).then(p, o);
    m((i = i.apply(s, t)).next())
});
var Jj = (s, t, i) => t in s ? Object.defineProperty(s, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: i
}) : s[t] = i;
var ms = (s, t, i) => (Jj(s, typeof t != "symbol" ? t + "" : t, i), i);
class kc {
	constructor() {
		ms(this, "_isHost");
		ms(this, "_liveGameCode");
		ms(this, "_liveShardURL");
		ms(this, "_liveApp");
		this._isHost = !1, this._liveGameCode = null, this._liveShardURL = null, this._liveApp = null
	}
	getDatabaseVal(t, i) {
		return je(this, null, function*() {
			var p; 
			const n = `${this._liveGameCode}/${t}`,
				a = yield(p = this._liveApp) == null ? void 0 : p.database().ref(n).once("value").catch(o => {
					o && At.logError(o, {
						while: `getting firebase value from path ${t}`
					})
				});
			return i && i(a == null ? void 0 : a.val()), a == null ? void 0 : a.val()
		})
	}
	getDatabaseRef(t) {
		return je(this, null, function*() {
			var i;
			return (i = this._liveApp) == null ? void 0 : i.database().ref(`${this._liveGameCode}/${t}`)
		})
	}
	blockUser(t) {
		return je(this, null, function*() {
			if (!this._isHost) throw new Error("players cannot block other users");
			const i = {
				g: this._liveGameCode,
				u: t
			};
			try {
				yield this.setVal({
					path: `bu/${t}`,
					val: 1
				}), this.removeVal(`c/${t}`), yield nA.post("/c/firebase/block", i)
			} catch (n) {
				At.logError(`error blocking user ${t} from game ${this._liveGameCode}`, n)
			}
		})
	}
	setVal(t, i) {
		return je(this, null, function*() {
			var a;
			const n = `${this._liveGameCode}/${t.path}`;
			(a = this._liveApp) == null || a.database().ref(n).set(t.val, p => {
				p && At.logError(p, {
					while: `setting ${n} to ${t.val}`
				}), i && i()
			})
		})
	}
	_setClient(t, i) {
		return je(this, null, function*() {
			const n = {
				id: this._liveGameCode,
				path: `c/${t}`,
				val: {
					b: i
				}
			};
			return new Promise(a => {
				this.setVal(n, () => {
					a(!0)
				})
			})
		})
	}
	setStage(t, i) {
		return je(this, null, function*() {
			if (!this._isHost) throw new Error("players cannot update stg");
			if (t.clearAnswers) {
				const p = {
					id: this._liveGameCode,
					path: "a",
					val: []
				};
				yield this.setVal(p)
			}
			const n = {
				id: this._liveGameCode,
				path: "stg",
				val: t.stage
			};
			yield this.setVal(n);
			const a = {
				stage: t.stage,
				gameId: this._liveGameCode
			};
			yield nA.post("/c/firebase/gamestageupdate", a), i && i()
		})
	}
	removeVal(t) {
		return je(this, null, function*() {
			var n;
			const i = `${this._liveGameCode}/${t}`;
			(n = this._liveApp) == null || n.database().ref(i).remove(a => {
				a && At.logError(a, {
					while: `removing value at path ${i}`
				})
			})
		})
	}
	removeHostAndDeleteGame() {
		return je(this, null, function*() {
			var t, i;
			if (!this._isHost) throw new Error("players cannot delete a game");
			if (!this._liveGameCode) throw new Error("cannot delete a game without the game id");
			try {
				this._isHost = !1, (t = this._liveApp) == null || t.database().ref(this._liveGameCode).remove(), (i = this._liveApp) == null || i.database().ref(`ids/${this._liveGameCode}`).remove(), nA.delete(`/c/firebase/game?id=${this._liveGameCode}`)
			} catch (n) {
				At.logError(`removeHostAndDeleteGame(${this._liveGameCode})`, n)
			}
		})
	}
	hostNewGame(t) {
		return je(this, null, function*() {
			if (!t.qSetId) throw new Error("cannot setHost without a valid qSetId");
			if (!t.settings) throw new Error("cannot setHost without a valid settigns object");
			if (!t.userId) throw new Error("cannot setHost without a valid host user id");
			return new Promise((i, n) => {
				const a = {
					initialGame: {
						p: t.plus,
						set: t.qSetId,
						s: t.settings,
						c: {},
						a: [],
						stg: "join",
						ho: t.userId
					}
				};
				nA.post("/c/firebase/hosted-games", a).then(p => je(this, null, function*() {
					var l, v;
					if (!p.data.ok) {
						n(p.data.msg);
						return
					}
					const o = p.data;
					yield this._setLiveGameCode(o.id, o.fbToken, o.fbShardURL), this._isHost = !0;
					const m = o.createdAt,
						r = `${this._liveGameCode}`;
					yield(l = this._liveApp) == null ? void 0 : l.database().ref(r).set(a.initialGame), yield(v = this._liveApp) == null ? void 0 : v.database().ref(`ids/${this._liveGameCode}`).set(m), i(o)
				})).catch(p => {
					this._setLiveGameCode(null, null, null, !0), At.logError("error attempting to host a game", p), n(p)
				})
			})
		})
	}
	static gameStatus(t) {
		return je(this, null, function*() {
			if (!t) throw new Error("cannot check game status without gameId");
			const i = {
				params: {
					id: Number(t)
				}
			};
			return nA.get("/c/firebase/id", i).then(n => n.data)
		})
	}
	joinGame(t, i) {
		return je(this, null, function*() {
			var r, l;
			if (this._isHost && (yield this.removeHostAndDeleteGame()), !t) throw new Error("cannot join game without a valid gameId");
			if (!i) throw new Error("cannot join game without an inGameName");
			const n = {
				id: t,
				name: i
			};
			let a = null;
			a = yield nA.put("/c/firebase/join", n);
			const p = a.data;
			let o = "",
				m = null;
			if (p.success) {
				yield this._setLiveGameCode(t, p.fbToken, p.fbShardURL);
				const v = yield(l = this._liveApp) == null ? void 0 : l.database().ref((r = this._liveGameCode) != null ? r : void 0).once("value");
				m = v == null ? void 0 : v.val();
				const f = {};
				Object.entries(m.c || {}).filter(([u]) => u !== i).forEach(([, u]) => {
					f[u.b] = !0
				});
				const c = [];
				$d.forEach(u => {
					f[u] || c.push(u)
				}), c.length === 0 && _ae.forEach(u => {
					f[u] || c.push(u)
				}), c.length === 0 && c.push(...$d), o = di(c), yield this._setClient(i, o)
			} else yield this._setLiveGameCode(null, null, null, !0);
			return {
				success: p.success,
				fbToken: p.fbToken,
				msg: p.msg,
				blook: o,
				host: m,
				shardURL: p.fbShardURL
			}
		})
	}
	_setLiveGameCode(t, i, n, a) {
		return je(this, null, function*() {
			if (this._isHost = !1, this._liveGameCode = null, this._liveShardURL = null, this._liveApp && (yield this._liveApp.delete(), this._liveApp = null), a) return;
			if (!t) throw new Error("Got empty gameCode when seting live game code");
			if (!i) throw new Error("cannot set firebase auth token without a token");
			this._liveGameCode = t, this._liveShardURL = n, this._liveApp = vv.initializeApp(bt(Ze({}, yHe), {
				databaseURL: this._liveShardURL
			}));
			const p = vv.auth(this._liveApp);
			return yield p.setPersistence(vv.auth.Auth.Persistence.NONE).catch(m => {
				At.logError(m, {
					while: "setting session persistence in _setLiveGameCode"
				})
			}), yield p.signInWithCustomToken(i).catch(m => {
				At.logError(m, {
					while: "signing in with custom token"
				})
			})
		})
	}
	rejoinGame(t, i, n) {
		return je(this, null, function*() {
			yield this._setLiveGameCode(n, t, i)
		})
	}
}