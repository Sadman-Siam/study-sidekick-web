import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h>Study Sidekick</h>
      <br></br>
      <Link href={`/profile`}>
        <Button className="">Testing Button</Button>
      </Link>
    </div>
  );
}
