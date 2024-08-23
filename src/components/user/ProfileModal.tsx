import React from "react";
import Modal from "../common/modal/Modal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { CircleArrowLeft, User } from "lucide-react";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSLice";
import { Link, useNavigate } from "react-router-dom";

type ProfileProps = {
  children: React.ReactNode;
};

export default function ProfileModal({ children }: ProfileProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth/login");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="text-primary">
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 w-5 h-5 text-primary" />
          <Link to="/dashboard/inventory">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button onClick={() => handleLogout()} className="flex">
            <CircleArrowLeft className="mr-2 w-5 h-5 text-red-500" /> Logout
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
