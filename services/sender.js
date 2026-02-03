const USER_ID = "asif"
const TOKEN = "FakeCustomerToken"
const URL = `https://contactapi.static.fyi/lead/receive/fake/${USER_ID}/`

async function sendLead(lead) {
    console.log("Sending lead:", lead);
   try{ 
    const res = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${TOKEN}`
        },
        body: JSON.stringify(lead)
    });

    const data = await res.json();
    console.log(data);

    } catch (error) {
        console.error(error);
    }
    
}

module.exports = { sendLead };
