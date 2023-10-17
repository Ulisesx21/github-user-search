
export const formatDate = (str: string) => {
  const date = new Date(str)
  
  const day = date.toLocaleString("en",{ day: "numeric"});
  const month = date.toLocaleString("en",{ month: "short"});
  const year = date.toLocaleString("en",{ year: "numeric"});
  
  return `${day} ${month} ${year}`
}