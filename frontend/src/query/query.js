export const queryFetch = async (data, success, error) => {
  const response = await fetch("http://localhost:3454/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const result = await response.json();
    success(result.data);
  } else {
    error();
  }
};
