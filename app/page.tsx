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
  UserButton,
} from '@clerk/nextjs';
import './globals.css';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
/*
const a = await prisma.user.create({
  data: {
    email: "dkw24@gmail.com"
  }
});
const b = await prisma.user.create({
  data: {
    email: "plee@gmail.com"
  }
});
const c = await prisma.user.create({
  data: {
    email: "mollyj@hotmail.com"
  }
}); */

const allUsers = await prisma.user.findMany();
console.log(allUsers) 

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

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta ante id nulla viverra mollis. Etiam sed est quis augue ultrices lacinia. Etiam et elit et eros dictum auctor a et metus. Curabitur sodales est nec dolor hendrerit suscipit in sit amet quam. Sed id commodo mauris, fermentum tincidunt orci. Quisque efficitur erat ut nunc pellentesque, sed dignissim augue auctor. Quisque at dignissim tellus, sed lacinia nisi. Morbi nisl diam, aliquam vitae lacus et, egestas fermentum tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce at quam a nisi bibendum ultricies eget non nunc.</p>

        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">New York</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">San Francisco</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Los Angeles</Label>
          </div>
        </RadioGroup>
        
        <Button variant="outline">Click Me!</Button>
        

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