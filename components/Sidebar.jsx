import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

export default function Sidebar() {
  return (
    <div className="flex flex-col w-1/12 border-r-2 border-primary p-3 h-screen">
      <Button variant="link">New Notes</Button>
      <Button variant="link">New Notes</Button>
      <Button variant="link">New Notes</Button>
      <Button variant="link">New Notes</Button>
      <Button variant="link">New Notes</Button>
      <Button variant="link">New Notes</Button>
    </div>
  );
}
