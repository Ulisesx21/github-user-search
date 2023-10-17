
export const getUserByName = async (user: string) => {
  const response = await fetch(`https://api.github.com/users/${user}`);

  if(response.status !== 200) return 
  
  return response.json();
};
