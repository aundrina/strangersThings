async function fetchPosts() {
  const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2209-FTB-PT-WEB-FT/posts"
    ),
    result = await response.json();
  return result.data.posts;
}
export default fetchPosts;
