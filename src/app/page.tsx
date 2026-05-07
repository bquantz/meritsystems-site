import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Capabilities } from "@/components/sections/capabilities";
import { Expertise } from "@/components/sections/expertise";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-col">
        <Hero />
        <Capabilities />
        <Expertise />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
