"use client";


import { usePathname } from "next/navigation";
import { useEffect } from "react";


export default function AnalyticsTracker() {
 const pathname = usePathname();
 const gaID = process.env.NEXT_PUBLIC_GA_ID;
 useEffect(() => {
   if (gaID && typeof window !== "undefined" && window.gtag) {
     window.gtag("config", gaID, {
       page_path: pathname,
     });
   }
 }, [pathname, gaID]);


 return null;
}
