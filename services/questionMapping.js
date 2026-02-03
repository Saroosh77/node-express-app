module.exports = {

    solar_roof_type: {
        match: ["Dachform"],
        transform: (value) => {
            if(value.includes("Andere","Flachdach","Kaffeemühlenhaus","Krüppelwalmdach","Mansardendach","Pultdach","Satteldach","Versetztes Pultdach","Walmdach","Winkelwalmdach","Zwerchdach"))
                return value;
            
        }
    },

    solar_owner: {
        match: ["Eigentümer"],
        transform: (value) => {
            if(value.includes("Ja", "true","Nein","In Auftrag"))
                return value;
            
        }
    },

    solar_energy_consumption: {
        match: ["Stromverbrauch"],
        transform: (value) => {
           return value;
        }
    },

    solar_property_type: {
        match: ["Solaranlage installieren"],
          transform: (value) => {
      if (value.includes("Ein-/Zweifamilienhaus")) {
        return "Einfamilienhaus";
      } else if (value.includes("Einfamilienhaus","Zweifamilienhaus","Mehrfamilienhaus","Firmengebäude","Freilandfläche","Garage","Carport","Scheune/Landwirtschaft","Lagerhalle","Industrie")) {
        return value;
      }
      return value;
    }
    },

    solar_roof_age: {
        match: ["Wie alt ist Ihr Dach?"],
        transform: (value) => {
            if(value.includes("nach")){
                return "Jünger als 30 Jahre";
            } else if(value.includes("vor")){
                return "Älter als 30 Jahre";
            } else if(value.includes("Planung")){
                return "Planung";
            } else if(value.includes("gebaut")){
                return "Gebaut";
            }
        }

    },

    solar_area: {
        match: ["Dachfläche"],
        transform: (value) => {
            return value;
        }
    },

    solar_roof_material: {
        match: ["Dachmaterial"],
        transform: (value) => {
            if(value.includes("Asbest","Bitumen","Blech/Trapezblech","Dachziegel","Gründach","Holzdach","Kies","Schiefer","Schindeldach","Andere"))
            return value;
        }
    },

    solar_south_location: {
        match: ["Dachausrichtung"],
        transform: (value) => {
            if(value.includes("Ja","Nein","Teilweise","Nicht sicher","Keine (Flachdach)","Süd","Süd-West","Süd-Ost","West","Ost"))
                return value;
        }
    },

    solar_power_storage: {
        match: ["Stromspeicher"],
        transform: (value) => {
            if(value.includes("Ja","Nein","Noch nicht sicher"))
            return value;
        }
    },

    haushaltsnettoeinkommen: {
        match: ["Haushaltsnettoeinkommen"],
        transform: (value) => {
            return value;
        }
    },

    solar_monthly_electricity_bill: {
        match: ["Stromrechnung"],
        transform: (value) => {
            return value;
        }
    },

    solar_offer_type: {
        match: ["kaufen","mieten"],
        transform: (value) => {
            if(value.includes("Beides interessant","Mieten","Kaufen"))
            return value;
        }
    },

    solar_roof_condition: {
        match: ["Dachzustand"],
        transform: (value) => {
            if(value.includes("Asbestbelastet","Frisch renoviert","Guter Zustand","In Ordnung","Renovierungsbedürftig","Neubau"))
            return value;
        }
    },

    solar_usage: {
        match: ["Solarstrom nutzen"],
        transform: (value) => {
            if(value.includes("Eigenverbrauch","Netzeinspeisung","Netzeinspeisung und Eigenverbrauch"))
            return value;
            else 
            return "Eigenverbrauch";
        }
    },

    source: {
        match: ["Finanzierung"],
        transform: (value) => {
            return value;
        }
    },


}