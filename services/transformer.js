const questionMapping = require("./questionMapping");

const getVal = (key, questions) => {
    const mapping = questionMapping[key];
    // Find which version of the question exists in the lead
    const actualQuestion = mapping.match.find(q => questions[q]);
    const value = questions[actualQuestion];
    
    // Return the transformed value, or null/undefined if not found
    return value !== undefined ? mapping.transform(value) : null;
};

function transformLead(lead) {
    
    const [street, housenumber] = (lead.street || "").trim().split(/\s+(?=\S+$)/);
    
    const transformedLead = {
    lead: {
        email: lead.email,
        first_name: lead.first_name,
        last_name: lead.last_name,
        street: street || "-",
        housenumber: housenumber || "-",
        postcode: lead.zipcode,
        city: lead.city,
        phone: lead.phone,
        country: "de"
    },
    product: {
        name: "Solaranlagen"
    },
    lead_attributes: {
        haushaltsnettoeinkommen: getVal("haushaltsnettoeinkommen", lead.questions),
        solar_energy_consumption: getVal("solar_energy_consumption", lead.questions) || "1000",
        solar_monthly_electricity_bill: getVal("solar_monthly_electricity_bill", lead.questions),
        solar_offer_type: getVal("solar_offer_type", lead.questions) || "Kaufen",
        solar_owner: getVal("solar_owner", lead.questions) || "Ja",
        solar_power_storage: getVal("solar_power_storage", lead.questions),
        solar_property_type: getVal("solar_property_type", lead.questions) || "Einfamilienhaus",
        solar_roof_age: getVal("solar_roof_age", lead.questions),
        solar_roof_condition: getVal("solar_roof_condition", lead.questions),
        solar_roof_material: getVal("solar_roof_material", lead.questions),
        solar_roof_type: getVal("solar_roof_type", lead.questions),
        solar_south_location: getVal("solar_south_location", lead.questions),
        solar_usage: getVal("solar_usage", lead.questions),
        source: getVal("source", lead.questions),
        solar_area: getVal("solar_area", lead.questions),
        baujahr: "1942",
        immobilientyp: [
            "haus"
        ]
    },
    meta_attributes: {
        landingpage_url: "https://www.hausfrage.de/angebote/Solaranlagen/",
        unique_id: "1701170767935",
        utm_campaign: "20444484713",
        utm_content: "669296263668",
        utm_medium: "155290633194",
        utm_placement: "www.t-online.de",
        utm_source: "google",
        utm_term: "notprovided",
        ip: "192.168.0.1",
        browser: "Chrome",
        optin: "true",
        optin_wording: ""
    }
}

console.log("transformedLead", transformedLead);
    return transformedLead;
}

module.exports = { transformLead };
