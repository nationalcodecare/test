const url = "https://api.github.com/search/users?";

export function getUsers(search) {
  return fetch(`${url}q=${search}&per_page=5`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.error(error);
      return [];
    });
}
