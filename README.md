## 🚀 Overview

This application uses ngrok to expose a local webhook to the internet. A lead is sent to this webhook via API 1 and the application validates and transforms the lead and sends it to the target API 2.

## 🛠 Features

- **Webhook Integration**: Exposes a POST endpoint at `/webhook/lead` to receive JSON lead data.
- **Smart Validation**: Checks incoming leads for specific criteria (e.g., zip code filtering and ownership status).
- **Dynamic Question Mapping**: Uses a centralized `questionMapping.js` to handle varying question wordings and transform answers into standardized attributes.
- **Service-Oriented Architecture**: Cleanly separated logic for validation, transformation, and sending.

## 📂 Project Structure

- `app.js`: Application entry point and server configuration.
- `routes/`: Express route definitions (Webhook endpoints).
- `services/`:
  - `validator.js`: Business logic for validating incoming leads.
  - `transformer.js`: Logic for restructuring lead data.
  - `questionMapping.js`: Configuration for mapping external questions to internal keys.
  - `sender.js`: Logic for forwarding the transformed data to the target system.

## ⚙️ Core Logic

### Validation
The validator ensures:
- The lead contains a valid German zip code (starts with "66").
- The person is confirmed as the property owner.

### Transformation
The transformer uses a helper function with `questionMapping.js` to:
- Map various versions of questions to a single key.
- Apply transformation functions to stabilize data formats.
- Split mixed address fields into separate properties.

## 🚦 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run the Server**:
   ```bash
   node app.js
   ```
   The server will start on port `8080`.

3. **Expose with Ngrok** (for external webhooks):
   ```bash
   npx ngrok http 8080
   
### EXTRA POINTS

1. Use of logger for logging events and errors.
2. Provision of percentage of accepted and rejected leads based on requirements.
3. Strong meta data provision for tracking and analytics.
4. Decrease operational overhead for the customer with in-depth analysis and summaries.

### AI Usage Disclosure

Parts of this solution were developed with the assistance of AI tools.
All generated code was reviewed, adapted, and integrated manually to ensure correctness and alignment with the requirements.