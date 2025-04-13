import groq from 'groq';

export const INTRO_QUERY = groq`
*[_id == "intro"][0] {
  _id,
  image {
    asset -> {
      ...
    }
  },
  jobTitle,
  name,
  email {
    label,
    value
  },
  github {
    label,
    value
  },
  linkedIn {
    label,
    value
  },
  resume {
    label,
    value {
      asset -> {
        ...
      }
    }
  },
  about
}
`;
