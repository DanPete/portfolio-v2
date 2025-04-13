import { defineQuery } from 'groq';

export const INDEX_SETTINGS_QUERY = defineQuery(`*[_type == "settings"][0] {
  _id,
  maintenanceMode,
  comingSoonHeading,
  comingSoonMessage
}`);
