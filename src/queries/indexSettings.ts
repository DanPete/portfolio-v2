import groq from 'groq';

export const INDEX_SETTINGS_QUERY = groq`
*[_type == "settings"][0] {
  _id,
  maintenanceMode,
  comingSoonHeading,
  comingSoonMessage
}
`;
