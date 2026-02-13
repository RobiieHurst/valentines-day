import stops from './_data.js';

const haversine = (lat1, lng1, lat2, lng2) => {
  const R = 6371000;
  const toRad = d => d * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

export default (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  const { order, lat, lng } = req.body;
  const stop = stops.find(s => s.order === order);
  if (!stop) return res.status(404).json({ error: 'Stop not found' });

  const dist = haversine(lat, lng, stop.lat, stop.lng);
  const correct = dist <= stop.radiusMeters;

  let message;
  if (correct) {
    message = order === stops.length ? '🎉 You found the final treasure!' : '✅ Correct! On to the next clue!';
  } else if (dist < 200) {
    message = '🔥 Very close! Keep looking around here.';
  } else if (dist < 500) {
    message = '🤔 Getting warmer...';
  } else {
    message = '❄️ Not quite. Try somewhere else!';
  }

  res.json({
    correct,
    distance: Math.round(dist),
    message,
    hint: !correct ? stop.hint : undefined,
    next: correct && order < stops.length ? order + 1 : undefined,
    finished: correct && order === stops.length,
  });
};
