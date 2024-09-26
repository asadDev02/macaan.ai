'use client'

import { useState } from "react";
import { AttributeView, Composer, Escalation, FAQSection, VisibilityToggle } from "./components";

export default function Page() {
  const [isPublic, setIsPublic] = useState(false);

  return (
    <div className="grid gap-4 p-4 h-screen">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 order-2 md:order-1">
          <AttributeView />
        </div>
        <div className="flex justify-end items-center order-1 md:order-2">
          <VisibilityToggle isPublic={isPublic} onToggle={() => setIsPublic(!isPublic)} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-grow">
        <div className="md:col-span-2">
          <Composer />
        </div>
        <div className="md:col-span-1 grid grid-rows-[1fr_auto] gap-4">
          <div className="overflow-y-auto overflow-x-hidden p-1">
            <FAQSection />
          </div>
          <div >
            <Escalation />
          </div>
        </div>
      </div>
    </div>
  );
}