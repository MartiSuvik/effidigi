"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IPhone15ProProps {
  children?: ReactNode;
  className?: string;
}

export function IPhone15Pro({ children, className }: IPhone15ProProps) {
  return (
    <div 
      className={cn("flex justify-center items-center relative", className)}
      style={{
        width: '292.5px',
        height: '603.2px',
      }}
    >
      {/* Phone wrapper - outer frame */}
      <div
        className="flex justify-center items-center absolute"
        style={{
          margin: 0,
          padding: 0,
          height: '603.2px',
          width: '292.5px',
          backgroundColor: '#FDFCED',
          borderTopLeftRadius: '22.4% 8.9%',
          borderTopRightRadius: '22.4% 8.9%',
          borderBottomLeftRadius: '22.4% 8.9%',
          borderBottomRightRadius: '22.4% 8.9%',
          boxShadow: 'inset 0px 0px 0.6px 0.6px #6B6426',
        }}
      >
        {/* Inner frame */}
        <div
          className="flex justify-center items-center absolute"
          style={{
            margin: 0,
            padding: 0,
            height: '600px',
            width: '289.5px',
            backgroundColor: 'black',
            borderTopLeftRadius: '22.4% 8.9%',
            borderTopRightRadius: '22.4% 8.9%',
            borderBottomLeftRadius: '22.4% 8.9%',
            borderBottomRightRadius: '22.4% 8.9%',
            boxShadow: '1px 1px 1px 1px #EEEACE',
          }}
        >
          {/* Display area */}
          <div
            className="flex justify-center absolute overflow-hidden"
            style={{
              height: '583px',
              width: '273.297px',
              backgroundColor: 'white',
              borderTopLeftRadius: '20% 8%',
              borderTopRightRadius: '20% 8%',
              borderBottomLeftRadius: '20% 8%',
              borderBottomRightRadius: '20% 8%',
            }}
          >
            {/* Screen content */}
            <div 
              className="w-full h-full relative overflow-hidden"
              style={{
                borderTopLeftRadius: '20% 8%',
                borderTopRightRadius: '20% 8%',
                borderBottomLeftRadius: '20% 8%',
                borderBottomRightRadius: '20% 8%',
              }}
            >
              {children}
            </div>
          </div>

          {/* Menu bar */}
          <div
            className="absolute"
            style={{
              right: '93.5px',
              top: '579px',
              padding: 0,
              margin: 0,
              height: '4.1px',
              width: '100px',
              background: 'white',
              borderRadius: '190px',
              boxShadow: '0px 0px 1px 0.3px grey',
            }}
          />
        </div>
      </div>

      {/* Power button */}
      <div
        className="relative"
        style={{
          top: '-110px',
          left: '150.8px',
          height: '60px',
          width: '2px',
          backgroundColor: '#FDFCED',
          borderRadius: '190px',
          boxShadow: 'inset 0.1px 0px 1.1px 0.8px #f6e0c9',
        }}
      />

      {/* Switch button */}
      <div
        className="relative"
        style={{
          top: '-160px',
          left: '-148px',
          height: '21px',
          width: '1.6px',
          backgroundColor: '#FDFCED',
          borderRadius: '190px',
          boxShadow: 'inset 1px 1px 1px 1px black',
        }}
      />

      {/* Volume button 1 */}
      <div
        className="relative"
        style={{
          top: '-100px',
          left: '-149.1px',
          height: '36px',
          width: '1.6px',
          backgroundColor: '#FDFCED',
          borderRadius: '190px',
          boxShadow: 'inset 1px 1px 1px 1px black',
        }}
      />

      {/* Volume button 2 */}
      <div
        className="relative"
        style={{
          top: '-50px',
          left: '-151px',
          height: '37px',
          width: '1.6px',
          backgroundColor: '#FDFCED',
          borderRadius: '190px',
          boxShadow: 'inset 1px 1px 1px 1px black',
        }}
      />
    </div>
  );
}
