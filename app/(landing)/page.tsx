import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Landing() {
  return (
    <>
      <h1 className="text-white text-6xl font-bold text-center p-4 my-2">
        Landing (Oricine)
      </h1>

      <div className="flex items-center justify-center p-4">
        <Link href='/sign-in'>
          <Button className="m-4">
            Login
          </Button>
        </Link>

        <Link href='/sign-up'>
          <Button className="m-4">
            Register
          </Button>
        </Link>
      </div>

      <Image
        src='/hero-final.jpg'
        alt='hero'
        width={1000}
        height={1000}
        quality={100}
      />
    </>
  );
}