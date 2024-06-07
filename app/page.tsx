import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  SignUp,
  ClerkProvider,
  SignInButton,
  SignedIn, 
  SignedOut, 
  UserButton
} from '@clerk/nextjs';
import './globals.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ClerkProvider>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </ClerkProvider>
        
        <Button variant="outline">My First Button</Button>

        <Carousel>
          <CarouselContent>
            <CarouselItem>A carousel item</CarouselItem>
            <CarouselItem>Another item</CarouselItem>
            <CarouselItem>Last item</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        
    </main>
  );
}
