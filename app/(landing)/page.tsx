import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image"


export default function Landing() {
  return (
    <>
      <h1 className="text-white text-4xl font-bold text-center p-4 my-2">Landing (Oricine)</h1>
      <div className="flex items-center justify-center p-4">
        <Link href='/sign-in'>
          <Button className="m-4">Login</Button>
        </Link>
        <Link href='/sign-up'>
          <Button className="m-4">Register</Button>
        </Link>
      </div>
      <div className="flex justify-end mx-24">
        <Image src="/output.png" alt="laptop" width={550} height={550}/>
      </div>
    </>
  )
}
