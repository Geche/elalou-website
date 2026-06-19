// Lightweight per-IP rate limiter for the public form endpoints. This is an
// in-memory, per-instance limiter — on serverless/Fluid Compute it is shared
// only within a warm instance, so it is best-effort defense-in-depth against
// casual abuse / email flooding, not a hard guarantee. For strict limits across
// instances, back this with a shared store (e.g. Upstash Redis) later.

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_HITS = 5; // per IP per endpoint per window

const buckets = new Map(); // key -> number[] (request timestamps)

export function getClientIp(request) {
	const xff = request.headers.get("x-forwarded-for");
	if (xff) return xff.split(",")[0].trim();
	return request.headers.get("x-real-ip") || "unknown";
}

// Returns { ok: true } or { ok: false, retryAfterSec }.
export function rateLimit(key, { windowMs = WINDOW_MS, max = MAX_HITS } = {}) {
	const now = Date.now();
	const recent = (buckets.get(key) || []).filter(t => now - t < windowMs);

	if (recent.length >= max) {
		buckets.set(key, recent);
		const retryAfterSec = Math.ceil((windowMs - (now - recent[0])) / 1000);
		return { ok: false, retryAfterSec };
	}

	recent.push(now);
	buckets.set(key, recent);

	// Opportunistic cleanup so the map can't grow unbounded.
	if (buckets.size > 5000) {
		for (const [k, times] of buckets) {
			if (times.every(t => now - t >= windowMs)) buckets.delete(k);
		}
	}

	return { ok: true };
}
