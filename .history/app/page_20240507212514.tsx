"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"
import SocialLinks from "@/components/Footer"
import Link from "next/link"

export default function Home() {
  const [isHoveredPair1, setIsHoveredPair1] = useState<boolean>(false)
  const [isHoveredPair2, setIsHoveredPair2] = useState<boolean>(false)
  const [isHoveredPair3, setIsHoveredPair3] = useState<boolean>(false)


  return (
    <div className="min-h-screen w-full flex flex-col text-white text-base">
      <main className="flex flex-col bg-[#131313] w-full mx-auto p-6 flex-grow">
        <section id="about_me" className="container mx-auto px-4 pb-10 sm:pb-32 pt-6 sm:pt-14">
          <div className="flex flex-col items-center space-y-1">
            <p className="flex flex-col sm:flex-row justify-center items-center text-center text-4xl pt-5 sm:pt-10 pb-5 font-medium text-[#d9d9db]">Anton Strelkovkyy</p>
            <div className="flex flex-col justify-center items-center py-3">
              <div className="flex justify-center items-center rounded-full border border-[#333333] h-20 w-20">
                <Image src="/profilepic.jpg" alt="avatar" width={100} height={100} className="rounded-full" />
              </div>
              <SocialLinks />
              <p className="flex justify-center items-center text-center max-w-[30rem] text-lg text-neutral-400">
                &ldquo;Problems force you to think,<br /> creating elegant solutions in the process.&rdquo;
              </p>

            </div>
            <p className="flex justify-center items-center text-center max-w-[35rem] text-xl pt-5 text-[#d5d5d8]">Software developer, SaaS, full-stack and business solutions. Passionate about technology and its impact on the world.</p>
          </div>
        </section>
        {/* Desktop view */}
        <section className="hidden sm:grid grid-cols-1 gap-24 justify-items-center py-12 " id="projects">
          <div className="flex flex-col space-y-5 xl:space-y-0 xl:flex-row xl:space-x-10">
            <Card
              onMouseEnter={() => setIsHoveredPair1(true)}
              onMouseLeave={() => setIsHoveredPair1(false)}
              className={`max-w-[51rem] relative p-6 border rounded-lg bg-opacity-10  border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] 
              ${isHoveredPair1 ? "bg-[#24242779] border-[#21222972]" : "bg-[#9d94e9]"}`}
            >
              <CardContent className="text-[#8b8f8f] p-0 shadow-sm shadow-[#4d4d4d]">
                <Image className="w-full" src={"/graphalytics.png"} alt={"Graphalytics"} width={1500} height={1500} />
              </CardContent>
            </Card>
            <Card
              onMouseEnter={() => setIsHoveredPair1(true)}
              onMouseLeave={() => setIsHoveredPair1(false)}
              className={`max-w-[51rem] max-h-[25rem] xl:max-h-none xl:max-w-lg relative p-6 border rounded-lg bg-opacity-10  border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] 
              ${isHoveredPair1 ? "bg-[#24242779] border-[#21222972]" : "bg-[#9d94e9]"}`}
            >
              <CardHeader className="pt-0">
                <CardTitle className="text-lg font-semibold text-[#D1D1D2] pt-0">Graphalytics</CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f]">
                <div className="text-base">
                  <div className="flex flex-col space-y-5">
                    <p>
                      Tech Stack: Typescript, Next.js 14, Firebase, Stripe, D3.js, NoSQL
                    </p>
                    <ul className="list-disc pl-3 space-y-2">
                      <li>A charting library that minimizes abstraction, empowering users with full control over their code</li>
                      <li>Designed for users seeking a dynamic and high-performance charting solution</li>
                      <li>Includes the most popular chart types, seamlessly integrable into an analytics dashboard</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <div className="flex justify-center items-center w-full mx-auto pt-8 hover:bg-none">
                <Link className="flex justify-center items-center w-2/3" href="https://www.graphalytics.co/">
                  <Button
                    type="button"
                    className="w-2/3 hover:bg-[#454166] bg-[#454166] shadow-lg">
                    <p>Visit</p>
                  </Button >
                </Link>
              </div>
            </Card>
          </div>
          <div className="flex flex-col-reverse xl:space-y-0 xl:flex-row xl:space-x-10">
            <Card
              onMouseEnter={() => setIsHoveredPair2(true)}
              onMouseLeave={() => setIsHoveredPair2(false)}
              className={`max-w-[51rem] max-h-[25rem] xl:max-h-none xl:max-w-lg relative p-6 border rounded-lg bg-opacity-10  border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] 
              ${isHoveredPair2 ? "bg-[#24242779] border-[#21222972]" : "bg-[#9d94e9]"}`}
            >
              <CardHeader className="pt-0">
                <CardTitle className="text-lg font-semibold text-[#D1D1D2] pt-0">YourEstate</CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f]">
                <div className="text-base">
                  <div className="flex flex-col space-y-5">
                    <p>
                      Tech Stack: Typescript, C#, Next.js 14, Azure, D3.js, SQL
                    </p>
                    <ul className="list-disc pl-3 space-y-2">
                      <li>A modular real estate solution that simplifies property management</li>
                      <li>Designed to integrate data analytics and visualization capabilities within a single platform</li>
                      <li>Scalable and user-friendly, suitable for property owners at all experience levels</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <div className="flex flex-row justify-center items-center w-full space-x-5 mx-auto pt-8 hover:bg-none">
                <Link className="flex justify-center items-center w-1/3" href="https://yourestate.vercel.app/">
                  <Button
                    type="button"
                    className="w-full hover:bg-[#454166] bg-[#454166] shadow-lg">
                    <p>Visit</p>
                  </Button >
                </Link>
                <Link className="flex justify-center items-center w-1/3" href="https://github.com/Fortivera/yourestate">
                  <Button
                    type="button"
                    className="w-full hover:bg-[#454166] bg-[#454166] shadow-lg">
                    <Image src="/githublight.svg" alt={"GitHub"} width={24} height={24} />
                  </Button >
                </Link>
              </div>
            </Card>
            <Card
              onMouseEnter={() => setIsHoveredPair2(true)}
              onMouseLeave={() => setIsHoveredPair2(false)}
              className={`max-w-[51rem] relative p-6 border rounded-lg bg-opacity-10  border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] mb-5 xl:mb-0
              ${isHoveredPair2 ? "bg-[#24242779] border-[#21222972]" : "bg-[#9d94e9]"}`}
            >
              <CardContent className="text-[#8b8f8f] p-0 shadow-sm shadow-[#4d4d4d]">
                <Image className="w-full" src={"/yourestate.png"} alt={"YourEstate"} width={1500} height={1500} />
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col xl:space-y-0 xl:flex-row xl:space-x-10">
            <Card
              onMouseEnter={() => setIsHoveredPair3(true)}
              onMouseLeave={() => setIsHoveredPair3(false)}
              className={`max-w-[51rem] relative p-6 border rounded-lg bg-opacity-10  border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] mb-5 xl:mb-0
              ${isHoveredPair2 ? "bg-[#24242779] border-[#21222972]" : "bg-[#9d94e9]"}`}
            >
              <CardContent className="text-[#8b8f8f] p-0 shadow-sm shadow-[#4d4d4d]">
                <Image className="w-full" src={"/justcookit.png"} alt={"Justcookit"} width={1500} height={1500} />
              </CardContent>
            </Card>
            <Card
              onMouseEnter={() => setIsHoveredPair3(true)}
              onMouseLeave={() => setIsHoveredPair3(false)}
              className={`max-w-[51rem] max-h-[25rem] xl:max-h-none xl:max-w-lg relative p-6 border rounded-lg bg-opacity-10  border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] 
              ${isHoveredPair3 ? "bg-[#24242779] border-[#21222972]" : "bg-[#9d94e9]"}`}
            >
              <CardHeader className="pt-0">
                <CardTitle className="text-lg font-semibold text-[#D1D1D2] pt-0">Justcookit</CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f]">
                <div className="text-base">
                  <div className="flex flex-col space-y-5">
                    <p>
                      Tech Stack: Python, Django, Amazon S3, PostgreSQL
                    </p>
                    <ul className="list-disc pl-3 space-y-2">
                      <li>Recipe website featuring thousands of diverse dishes, easily searchable</li>
                      <li>Features beginner-friendly instructions with an intuitive interface</li>
                      <li>Includes a fully-functional admin dashboard for easy management of recipes and images</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <div className="flex flex-row justify-center items-center w-full space-x-5 mx-auto pt-8 hover:bg-none">
                <Link className="flex justify-center items-center w-1/3" href="https://justcook.fly.dev">
                  <Button
                    type="button"
                    className="w-full hover:bg-[#454166] bg-[#454166] shadow-lg">
                    <p>Visit</p>
                  </Button >
                </Link>
                <Link className="flex justify-center items-center w-1/3" href="https://github.com/Fortivera/Recipe_webapp?tab=readme-ov-file">
                  <Button
                    type="button"
                    className="w-full hover:bg-[#454166] bg-[#454166] shadow-lg">
                    <Image src="/githublight.svg" alt={"GitHub"} width={24} height={24} />
                  </Button >
                </Link>
              </div>
            </Card>
          </div>
        </section >
        {/* Mobile view */}
        <section className="sm:hidden grid grid-cols-1 gap-8 justify-items-center py-12" id="projects" >
          <div className="flex flex-col">
            <Card
              className={`relative p-6 border rounded-lg bg-opacity-10 bg-[#9d94e9] border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] hover:bg-[#24242779] hover:border-[#21222972]`}
            >
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-lg font-semibold text-[#D1D1D2] ">Graphalytics</CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f] p-0">
                <div className="text-sm">
                  <div className="flex flex-col space-y-5 overflow-y-auto max-h-[25rem]">
                    <p>
                      Tech Stack: Next.js 14, Typescript, Firebase, Stripe, D3.js
                    </p>
                    <ul className="list-disc pl-3 space-y-2">
                      <li>Analytical charting library that avoids abstraction and gives ownership of the code</li>
                      <li>Targets the users that need a dynamic and performant charting solution</li>
                      <li>Has the most used chart types that can be colaged into a dashboard</li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full mx-auto pt-8 hover:bg-none">
                  <Link className="flex justify-center items-center w-2/3" href="https://www.graphalytics.co/">
                    <Button
                      type="button"
                      className="w-full hover:bg-[#454166] bg-[#454166] shadow-lg">
                      <p>Visit</p>
                    </Button >
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col">
            <Card
              className={`relative p-6 border rounded-lg bg-opacity-10 bg-[#9d94e9] border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] hover:bg-[#24242779] hover:border-[#21222972]`}
            >
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-lg font-semibold text-[#D1D1D2] ">YourEstate</CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f] p-0">
                <div className="text-sm">
                  <div className="flex flex-col space-y-5 overflow-y-auto max-h-[25rem]">
                    <p>
                      Tech Stack: Typescript, C#, Next.js 14, Azure, D3.js, SQL
                    </p>
                    <ul className="list-disc pl-3 space-y-2">
                      <li>A modular real estate solution that simplifies property management</li>
                      <li>Designed to integrate data analytics and visualization capabilities within a single platform</li>
                      <li>Scalable and user-friendly, suitable for property owners at all experience levels</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-row justify-center items-center w-full space-x-5 mx-auto pt-8 hover:bg-none">
                  <Link className="flex justify-center items-center w-2/3" href="https://yourestate.vercel.app/">
                    <Button
                      type="button"
                      className="w-full hover:bg-[#454166] bg-[#454166] shadow-lg">
                      <p>Visit</p>
                    </Button >
                  </Link>
                  <Link className="flex justify-center items-center w-2/3" href="https://github.com/Fortivera/yourestate">
                    <Button
                      type="button"
                      className="w-full hover:bg-[#454166] bg-[#454166] shadow-lg">
                      <Image src="/githublight.svg" alt={"GitHub"} width={24} height={24} />
                    </Button >
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col">
            <Card
              className={`relative p-6 border rounded-lg bg-opacity-10 bg-[#9d94e9] border-[#60647872]  bg-gradient-to-b from-[#35374366] to-[#24212b65] hover:bg-[#24242779] hover:border-[#21222972]`}
            >
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-lg font-semibold text-[#D1D1D2] ">Justcookit</CardTitle>
              </CardHeader>
              <CardContent className="text-[#8b8f8f] p-0">
                <div className="text-sm">
                  <div className="flex flex-col space-y-5 overflow-y-auto max-h-[25rem]">
                    <p>
                      Tech Stack: Next.js 14, Typescript, Firebase, Stripe, D3.js
                    </p>
                    <ul className="list-disc pl-3 space-y-2">
                      <li>Analytical charting library that avoids abstraction and gives ownership of the code</li>
                      <li>Targets the users that need a dynamic and performant charting solution</li>
                      <li>Has the most used chart types that can be colaged into a dashboard</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-row justify-center items-center w-full space-x-5 mx-auto pt-8 hover:bg-none">
                  <Link className="flex justify-center items-center w-2/3" href="https://yourestate.vercel.app/">
                    <Button
                      type="button"
                      className="w-full hover:bg-[#454166] bg-[#454166] shadow-lg">
                      <p>Visit</p>
                    </Button >
                  </Link>
                  <Link className="flex justify-center items-center w-2/3" href="https://github.com/Fortivera/PropertyNextjs">
                    <Button
                      type="button"
                      className="w-full hover:bg-[#454166] bg-[#454166] shadow-lg">
                      <Image src="/githublight.svg" alt={"GitHub"} width={24} height={24} />
                    </Button >
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section >
      </main >

    </div >
  );
}