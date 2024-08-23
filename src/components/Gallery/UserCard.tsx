import React, { useState, useEffect } from "react";

import { Card } from "../ui/card";
import { Star } from "lucide-react";

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface UserCardProps {
  comment: Comment;
}

const UserCard: React.FC<UserCardProps> = ({ comment }) => {
  return (
    <Card className="shadow-lg w-full ">
     <div className="flex p-4">
        <img
          className="w-12 h-12 rounded-full object-cover mr-4"
          src={`https://i.pravatar.cc/150?u=${comment.email}`} // Placeholder image based on email
          alt="User Profile"
        />
        <div>
          <h2 className="text-lg font-semibold">{comment.name.slice(0,18)}</h2>
          <h3 className="text-sm flex my-2">
            <Star className="text-orange-400 w-4 h-4 " stroke="currentColor" fill="currentColor"/>
            <Star className="text-orange-400 w-4 h-4 " stroke="currentColor" fill="currentColor"/>
            <Star className="text-orange-400 w-4 h-4 " stroke="currentColor" fill="currentColor"/>
            <Star className="text-orange-400 w-4 h-4 " stroke="currentColor" fill="currentColor"/>
            <Star className="text-orange-400 w-4 h-4 " stroke="currentColor" fill="currentColor"/>

          </h3>
          <span className="text-gray-500 text-[12px]">{comment.body}</span>
        </div>
      </div>
    </Card>
  );
};

export default UserCard;
