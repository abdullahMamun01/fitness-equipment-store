// src/App.tsx

import React, { useState, useEffect } from "react";


import UserCard from "./UserCard";
interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const ReviewGallery: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    // Fetching comments from JSONPlaceholder API
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        // Assuming we're limiting to 10 comments for demonstration
        setComments(data.slice(0, 10));
      })
      .catch((error) => console.error("Error fetching comments:", error));
  }, []);

  return (
    <div className="md:container py-14">
      <h1 className="text-primary text-xl md:text-3xl  font-bold text-center mb-14 uppercase">See What People Are Saying </h1>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 md:container max-sm:px-4">
      {comments?.map((comment) => (
          <UserCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default ReviewGallery;
