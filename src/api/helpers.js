async function fetchPosts() {
  const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2209-FTB-PT-WEB-FT/posts"
    ),
    result = await response.json();
  return result.data.posts;
}
export default fetchPosts;

async function fetchMessage(id) {
  const response = await fetch(
      `https://strangers-things.herokuapp.com/api/2209-FTB-PT-WEB-FT/posts/${id}/messages`
    ),
    result = await response.json();
  console.log(result.data.messages);
  return result.data.messages.content;
}
