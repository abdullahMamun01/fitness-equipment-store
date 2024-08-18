import {
  DropdownMenu
} from "@/components/ui/dropdown-menu";

type TModalProps = {
  children: React.ReactNode;
};

export default function Modal({ children }: TModalProps) {
  return (
    <div>
      {children}
    </div>
  );
}
