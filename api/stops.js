import stops from './_data.js';

export default (req, res) => {
  const { order } = req.query;
  const stop = stops.find(s => s.order === parseInt(order));
  if (!stop) return res.status(404).json({ error: 'Stop not found' });
  res.json({ order: stop.order, riddle: stop.riddle, total: stops.length });
};
