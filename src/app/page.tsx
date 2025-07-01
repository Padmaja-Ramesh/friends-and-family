"use client";
import { useMutation, useQuery } from "convex/react";
import { useState } from "react";
import { api } from "../../convex/_generated/api";

// types are defined in databases
// interface Message {
//   sender: String;
//   content: String;
// }

export default function Home() {
  const messages = useQuery(api.functions.message.list);
  const createMessages = useMutation(api.functions.message.create);
  // const [messages, setMessages] = useState<Message[]>([
  //   { sender: "Dev", content: "Hi" },
  //   { sender: "Prem", content: "Welcome" },
  // ]);

  const [input, setInput] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentInput = input;
    createMessages({ sender: "Vimal", content: currentInput });
    setInput("");
  };

  return (
    <div>
      {messages?.map((message, index) => (
        <div key={index}>
          <strong>{message.sender}</strong>: {message.content}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="message"
          name="message"
          value={input}
          onChange={(e) => {
            console.log(e.target.value);
            setInput(e.target.value);
          }}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
