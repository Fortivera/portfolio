"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GlassyComponent from "@/components/ui/glasscard";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div className="flex min-h-screen w-full flex-col text-base text-white">
      {/* <Header /> */}
      <main className="mx-auto flex w-full flex-grow flex-col bg-[#131313] p-6">
        <section id="about_me" className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-2xl">Anton Strelkovkyy</p>
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white">
              pic
            </div>
            <Footer />
            <p className="flex w-[30rem] items-center justify-center">
              Software Engineer
            </p>
          </div>
        </section>
        <section
          className="hidden grid-cols-1 justify-items-center gap-8 py-12 sm:grid"
          id="projects"
        >
          <div className="flex flex-row space-x-10">
            <Card
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`relative max-w-[51rem] rounded-lg border border-[#60647872] bg-opacity-10  bg-gradient-to-b  from-[#35374366] to-[#24212b65] p-6 ${isHovered ? "border-[#21222972] bg-[#24242779]" : "bg-[#9d94e9]"}`}
            >
              <CardHeader className="py-1">
                <CardTitle className="text-lg font-semibold text-[#D1D1D2]">
                  Graphalytics
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-[#8b8f8f]">
                <CardDescription>
                  <Image
                    className="w-full"
                    src="/graphalytics.png"
                    alt={"Graphalytics"}
                    width={900}
                    height={900}
                  />
                </CardDescription>
              </CardContent>
            </Card>
            <Card
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`relative max-w-lg rounded-lg border border-[#60647872] bg-opacity-10  bg-gradient-to-b  from-[#35374366] to-[#24212b65] p-6 ${isHovered ? "border-[#21222972] bg-[#24242779]" : "bg-[#9d94e9]"}`}
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#D1D1D2]">
                  Details
                </CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f]">
                <CardDescription>
                  Project descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject description
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col space-x-10 sm:flex-row">
            <Card className="relative h-96 max-w-lg overflow-y-auto rounded-lg border border-[#60647872] bg-[#9d94e9] bg-opacity-10 bg-gradient-to-b from-[#35374366] to-[#24212b65] p-6">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#D1D1D2]">
                  YourEstate
                </CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f]">
                <CardDescription>
                  <Image
                    className="w-full"
                    src="/yourestate.png"
                    alt={"YourEstate"}
                    width={900}
                    height={900}
                  />
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="relative max-w-lg rounded-lg border border-[#60647872] bg-[#9d94e9] bg-opacity-10 bg-gradient-to-b from-[#35374366] to-[#24212b65] p-6">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#D1D1D2]">
                  Details
                </CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f]">
                <CardDescription>
                  Project descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject description
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col space-x-10 sm:flex-row">
            <Card className="relative max-w-lg rounded-lg border border-[#60647872] bg-[#9d94e9] bg-opacity-10 bg-gradient-to-b from-[#35374366] to-[#24212b65] p-6">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#D1D1D2]">
                  Graphalytics
                </CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f]">
                <CardDescription>
                  Project descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject description
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="relative max-w-lg rounded-lg border border-[#60647872] bg-[#9d94e9] bg-opacity-10 bg-gradient-to-b from-[#35374366] to-[#24212b65] p-6">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#D1D1D2]">
                  Details
                </CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f]">
                <CardDescription>
                  Project descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject description
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* mobile view */}
        <section
          className="grid grid-cols-1 justify-items-center gap-8 py-12 sm:hidden"
          id="projects"
        >
          <div className="flex flex-row space-x-10">
            <Card className="relative max-w-lg overflow-y-auto rounded-lg border border-[#60647872] bg-[#9d94e9] bg-opacity-10 bg-gradient-to-b from-[#35374366] to-[#24212b65] p-6">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#D1D1D2]">
                  Graphalytics
                </CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f]">
                <CardDescription>
                  Project descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject description
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col space-x-10 sm:flex-row">
            <Card className="relative max-w-lg rounded-lg border border-[#60647872] bg-[#9d94e9] bg-opacity-10 bg-gradient-to-b from-[#35374366] to-[#24212b65] p-6">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#D1D1D2]">
                  Graphalytics
                </CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f]">
                <CardDescription>
                  Project descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject description
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col space-x-10 sm:flex-row">
            <Card className="relative max-w-lg rounded-lg border border-[#60647872] bg-[#9d94e9] bg-opacity-10 bg-gradient-to-b from-[#35374366] to-[#24212b65] p-6">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#D1D1D2]">
                  Graphalytics
                </CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f]">
                <CardDescription>
                  Project descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject descriptionProject descriptionProject
                  descriptionProject description
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
