import stops from './_data.js';

export default (req, res) => {
  const { order } = req.query;
  const stop = stops.find(s => s.order === parseInt(order));
  if (!stop) return res.status(404).json({ error: 'Stop not found' });
  // Only return the riddle — no location name, emoji, image, or coordinates
  // Those are revealed by the /api/check endpoint after a correct answer
  res.json({
    order: stop.order,
    riddle: stop.riddle,
    total: stops.length,
  });
};
