const { useSamples } = require('../../../serverFns');

export default function handler(req, res) {
	const samples = useSamples();
	res.status(200).json({ samples });
}
