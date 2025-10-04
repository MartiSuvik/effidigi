"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { Phone, Mic, Volume2 } from "lucide-react";
import { VoiceWaveform } from "@/components/ui/voice-waveform";

export function VoiceHeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Experience the future of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Voice AI
              </span>
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Watch our AI voice assistant in action - handling customer calls with human-like conversation
            </p>
          </>
        }
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 p-4 flex flex-col justify-between">
          {/* Status bar */}
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">AI Assistant</h3>
                <p className="text-xs text-gray-500">Active • 00:47</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500">Live</span>
            </div>
          </div>
          
          {/* Call transcript */}
          <div className="flex-1 space-y-3 mb-4 px-2">
            <div className="bg-blue-100 rounded-lg p-2">
              <p className="text-xs text-gray-700">
                "Tere! Kuidas saan teid aidata?"
              </p>
              <span className="text-xs text-gray-500">AI Assistant</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-2">
              <p className="text-xs text-gray-700">
                "Tahaksin broneerida laua kolmele inimesele"
              </p>
              <span className="text-xs text-gray-500">Customer</span>
            </div>
            <div className="bg-blue-100 rounded-lg p-2">
              <p className="text-xs text-gray-700">
                "Suurepärane! Milliseks ajaks?"
              </p>
              <span className="text-xs text-gray-500">AI Assistant</span>
            </div>
          </div>

          {/* Voice visualization */}
          <div className="flex items-center justify-center mb-4">
            <VoiceWaveform 
              width={200}
              height={40}
              color="59, 130, 246"
              className="rounded-lg"
            />
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 px-2">
            <button className="flex-1 bg-red-500 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1">
              <Phone className="w-3 h-3" />
              End Call
            </button>
            <button className="px-3 py-2 bg-gray-200 rounded-lg">
              <Mic className="w-3 h-3 text-gray-600" />
            </button>
            <button className="px-3 py-2 bg-gray-200 rounded-lg">
              <Volume2 className="w-3 h-3 text-gray-600" />
            </button>
          </div>

          {/* Stats at bottom */}
          <div className="grid grid-cols-3 gap-2 mt-4 text-center px-2">
            <div>
              <div className="text-lg font-bold text-blue-600">24/7</div>
              <div className="text-xs text-gray-600">Available</div>
            </div>
            <div>
              <div className="text-lg font-bold text-green-600">95%</div>
              <div className="text-xs text-gray-600">Accuracy</div>
            </div>
            <div>
              <div className="text-lg font-bold text-purple-600">2s</div>
              <div className="text-xs text-gray-600">Response</div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
