function validateLead(lead) {
    try {
    console.log("Validating lead:", lead);
    
    if(lead.zipcode && lead.zipcode.length > 2) {
    const zipcode = lead.zipcode;
    console.log("zipcode", zipcode);

    if(zipcode.startsWith("66")) {

    console.log("Zipcode starts with 66");

    const questions = lead.questions;
    console.log("questions", questions);

    const isOwner = questions["Eigentümer"];
    if(isOwner === "Ja") {
        console.log("Owner is confirmed");
        return true;
    } else {
        console.log("Owner is not confirmed");
        return false;
    }

    } else {
        console.log("Zipcode does not start with 66");
        return false;
    }
    } else {
        console.log("Zipcode is not valid");
        return false;
    }
} catch (error) {
    console.error(error);
    return false;
}
}

module.exports = { validateLead };