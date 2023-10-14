export const getUser = async (email: string, password: string) => {
  return fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((data: Array<any>) => {
      const user = data.filter(
        (el) => el.email === email && el.password === password
      );
      console.log(user.length);
      if (user.length > 0) return user[0];
      else return null;
    });
};
