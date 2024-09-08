import { baseURL } from "../baseURL";

export const RegisterAPI = async (Name, Email, Phone, Pass, IsRemember) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    name: Name,
    email: Email,
    phone: Phone,
    password: Pass,
    is_Remember: IsRemember,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return await fetch(`${baseURL}users`, requestOptions)
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.error(error));
};
