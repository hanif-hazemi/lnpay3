// api/webhook.js
export default (req, res) => {
    if (req.method === 'POST') {
        const payload = req.body;
        // Here you could add logic to store the payload
        // and later fetch it to send updates to the frontend
        res.status(200).json({ success: true });
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};
