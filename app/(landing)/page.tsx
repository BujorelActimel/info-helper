import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar"

export default function Landing() {
  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center min-h-screen">
        {/* Heading on the Left */}
        <div className="w-1/2 p-4">
          <h1 className="text-white text-4xl font-bold text-center">
            Maximizează-ți Succesul la <br /> Examenul de {' '}
            <span className="text-blue-500">Informatică</span> <br /> cu {' '}
            <span className="text-blue-500">Info-Helper</span>
          </h1>
          <div className="flex items-center justify-center space-x-4 mt-4">
            <Link href="/sign-in">
              <Button>Login</Button>
            </Link>
            <Link href="/sign-up">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
        {/* Hero Image on the Right */}
        <div className="w-1/2">
          <Image
            src="/hero-final.jpg"
            alt="hero"
            width={800}
            height={800}
            quality={100}
          />
        </div>
      </div>
    </>
  );
}
