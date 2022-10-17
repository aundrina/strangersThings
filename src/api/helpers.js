async function fetchPosts() {
  const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2209-ftb-pt-web-ft/posts"
    ),
    result = await response.json();
  return result.data.post;
}
export default fetchPosts;
