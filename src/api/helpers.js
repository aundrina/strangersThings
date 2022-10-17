async function fetchPosts() {
  const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2209-ftb-pt-web-ft/posts"
    ),
    result = await response.json();
  return result.data.posts;
}
export default fetchPosts;

export const createPost = async (title, description, price) => {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2209-ftb-pt-web-ft/posts`,
    {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        title,
        description,
        price,
      }),
    }
  );
  const result = await response.json();
  return result;
};
