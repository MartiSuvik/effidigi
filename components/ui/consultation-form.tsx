"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { et } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ConsultationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationForm({ isOpen, onClose }: ConsultationFormProps) {
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [otherIndustry, setOtherIndustry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Validate form fields
    if (!companyName || !industry || !phone || !email || !reason || !date) {
      setError("Palun täida kõik väljad.");
      setIsSubmitting(false);
      return;
    }

    // Prepare data for submission
    const formData = {
      companyName,
      industry: industry === "other" ? otherIndustry : industry,
      phone,
      email,
      reason,
      preferredDate: date ? format(date, "yyyy-MM-dd") : "",
    };

    console.log("Sending form data:", formData);

    try {
      // Send data to the webhook
      const response = await fetch(
        "https://hook.eu2.make.com/t7mq9vyk1dyrsg9jfbrpcn3xmnl5q5ai",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      console.log("Response status:", response.status);
      
      if (response.ok) {
        setIsSuccess(true);
        // Reset form fields after successful submission
        setCompanyName("");
        setIndustry("");
        setOtherIndustry("");
        setPhone("");
        setEmail("");
        setReason("");
        setDate(undefined);
      } else {
        console.error("Form submission failed:", await response.text());
        setError("Vormi saatmine ebaõnnestus. Palun proovige uuesti.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Ühenduse viga. Palun kontrollige oma internetiühendust ja proovige uuesti.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const industries = [
    { value: "restaurant", label: "Restoran" },
    { value: "car_dealership", label: "Automüük" },
    { value: "dental_clinic", label: "Hambakliinik" },
    { value: "furniture_store", label: "Mööblipood" },
    { value: "other", label: "Muu" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="w-full max-w-lg bg-card rounded-lg shadow-lg border border-border overflow-hidden"
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-border">
          <h2 className="text-xl font-bold">
            <span className="terminal-text">{">"}</span> Tasuta konsultatsioon
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6">
          {isSuccess ? (
            <div className="space-y-4 text-center py-8">
              <h3 className="text-xl font-bold terminal-text">Täname!</h3>
              <p>
                Teie päring on edukalt saadetud. Võtame teiega peagi ühendust.
              </p>
              <Button onClick={onClose} className="mt-4">
                Sulge
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="companyName">Ettevõtte nimi</Label>
                <Input
                  id="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Teie ettevõtte nimi"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="industry">Valdkond</Label>
                <Select value={industry} onValueChange={setIndustry} required>
                  <SelectTrigger id="industry">
                    <SelectValue placeholder="Valige valdkond" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((ind) => (
                      <SelectItem key={ind.value} value={ind.value}>
                        {ind.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {industry === "other" && (
                  <div className="mt-2">
                    <Label htmlFor="otherIndustry">Täpsustage valdkond</Label>
                    <Input
                      id="otherIndustry"
                      value={otherIndustry}
                      onChange={(e) => setOtherIndustry(e.target.value)}
                      placeholder="Teie valdkond"
                      required
                    />
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+372 5555 1234"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-post</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nimi@ettevote.ee"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">
                  Mis tõukas mõttele uurida AI telefoni assistenti?
                </Label>
                <Textarea
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Kirjeldage lühidalt oma vajadusi ja ootusi"
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Mis päeval sobib rääkida lähemalt?</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PP", { locale: et }) : "Valige kuupäev"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {error && (
                <div className="bg-destructive/20 border border-destructive rounded p-3 text-sm">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                className="w-full gap-2 gradient-border"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saadan..." : "Saada päring"}
              </Button>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}