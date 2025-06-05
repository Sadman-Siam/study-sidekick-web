import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="w-full h-16 border-b-2 border-b-primary rounded-b-2xl flex justify-between p-3">
      <h1 className="text-2xl text-primary font-bold">Study Sidekick</h1>
      <div className="flex">
        <Link href={"/"}>
          <Button variant="link">Home</Button>
        </Link>
        <Link href={"/login"}>
          <Button variant="link">Login</Button>
        </Link>
        <Link href={"/createaccount"}>
          <Button variant="link">Create Account</Button>
        </Link>
        <Link href={"/study"}>
          <Button variant="link">Study</Button>
        </Link>
        <Link href={"/profile"}>
          <Button variant="link">Profile</Button>
        </Link>
      </div>
    </div>
  );
}
