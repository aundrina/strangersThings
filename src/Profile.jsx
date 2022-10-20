import { useEffect } from "react";
import useAuth from "./hooks/useAuth";
import { useState } from "react";
import { fetchMe } from "./api/auth";
import styles from "./style/Profile.css";

export default function Profile() {
  const { user, token } = useAuth();
  const [messages, setMessages] = useState([]);

  console.log(user);
  return (
    <div className="msgContainer">
      <h1 className="msgCat">Received Messages</h1>
      {user?.messages?.map((message) => {
        if (message.fromUser.username !== user.username) {
          return (
            <div className="message" key={message._id}>
              <h2 className="msgPostTitle"> {message.post.title}</h2>
              <h3>{message.content}</h3>
              <h3>From: {message.fromUser.username}</h3>
            </div>
          );
        }
      })}
      <h1 className="msgCat">Sent Messages</h1>
      {user?.messages?.map((message) => {
        if (message.fromUser.username == user.username) {
          return (
            <div className="message" key={message._id}>
              <h2 className="msgPostTitle"> {message.post.title}</h2>
              <h3>{message.content}</h3>
            </div>
          );
        }
      })}
    </div>
  );
}
