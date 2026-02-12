const savedProfile = JSON.parse(localStorage.getItem("churchProfile"));

export const churchProfileData = savedProfile || {
  name: "St Joseph Mariano Fernandiz Church",
  email: "church@email.com",
  city: "Bangalore",
  state: "Karnataka",
  country: "India",
  logo: null
};
