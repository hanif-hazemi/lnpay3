// api/webhook.js

let latestPaymentStatus = null;

export default (req, res) => {
    if (req.method === 'POST') {
        const payload = req.body;
        // Store the latest payment status
        latestPaymentStatus = payload;
        res.status(200).json({ success: true });
    } else if (req.method === 'GET') {
        if (latestPaymentStatus) {
            res.status(200).json(latestPaymentStatus);
        } else {
            res.status(404).json({ error: 'No payment status available' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};
