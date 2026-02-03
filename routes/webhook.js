const express = require("express");
const router = express.Router();

const { validateLead } = require("../services/validator");
const { transformLead } = require("../services/transformer");
const { sendLead } = require("../services/sender");

router.post("/lead", async (req, res) => {
    try {
        const lead = req.body;

        console.log("Lead received:", lead);

        if(validateLead(lead)) {
        const transformedLead = transformLead(lead);
        await sendLead(transformedLead);
        res.status(200).send("Lead sent successfully");
        } else {
            res.status(200).send("Invalid lead");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Failed to send lead");
    }
});

module.exports = router;
