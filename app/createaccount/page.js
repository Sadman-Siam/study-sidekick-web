import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function () {
  return (
    <div className="flex justify-center items-center w-full pt-10">
      <form className="w-1/3 flex flex-col gap-3 p-5 shadow-lg rounded-lg border-2 border-gray-200">
        <div>
          <h1 className="text-2xl font-semibold">Create Account</h1>
          <p className="text-gray-500">
            Give your Email and Choose your own Username
          </p>
        </div>
        <Label className="font-semibold">Username</Label>
        <Input type="text" required className="border-gray-400 h-8" />
        <Label className="font-semibold">Email</Label>
        <Input
          placeholder="example@"
          type="email"
          required
          className="border-gray-400 h-8"
        />
        <Label className="font-semibold">Password</Label>
        <Input
          placeholder="********"
          type="password"
          required
          className="border-gray-400 h-8"
        />
        <Button type="submit" className="">
          Create Account
        </Button>
      </form>
    </div>
  );
}
