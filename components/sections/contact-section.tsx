"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { TerminalCard } from "@/components/ui/terminal-card";
import { useEffect } from "react";

export function ContactSection() {
  useEffect(() => {
    // Create and inject the Cal.com inline embed script
    const script = document.createElement('script');
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      
      Cal("init", "free-consultation", {origin:"https://app.cal.com"});
      
      Cal.ns["free-consultation"]("inline", {
        elementOrSelector:"#my-cal-inline-free-consultation",
        config: {"layout":"month_view"},
        calLink: "effidigi/free-consultation",
      });
      
      Cal.ns["free-consultation"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    
    // Append script to document head
    document.head.appendChild(script);
    
    // Cleanup function
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <section>
        <div className="container mx-auto px-4 md:px-6 mt-12 mb-12">
          <SectionHeading 
            title="Broneeri tasuta konsultatsioon"
            subtitle="Vali sobiv aeg ja broneeri tasuta 30-minutiline konsultatsioon, kus räägime teie ettevõtte vajadustest ja kuidas AI-süsteem saab aidata teie äri kasvatada."
            textAlignment="center"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-0 max-w-4xl mx-auto"
          >
            <TerminalCard title="/broneering-tallinn">
              <div className="">
                <div className="">
                </div>
                
                {/* Cal.com inline booking widget */}
                <div 
                  id="my-cal-inline-free-consultation" 
                  className="w-full min-h-[600px] rounded-lg overflow-hidden border border-border/50"
                  style={{ height: '600px' }}
                />
              </div>
            </TerminalCard>
          </motion.div>
        </div>
      </section>
    </>
  );
}