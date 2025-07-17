// app/api/search/route.ts
import { NextResponse } from "next/server";
import axios from "axios";
import fs from "fs/promises";

// Define types
type AirlineCode = "A3" | "LO" | "BT" | "AZ";
type PetRule = { airports: string[]; cabin: boolean; hold: boolean };
type PetRules = Record<AirlineCode, PetRule>;

interface Flight {
  AirlineCode: string;
  OriginLocation: { LocationCode: string };
  DestinationLocation: { LocationCode: string };
  Price?: number;
}

interface FormData {
  from: string;
  to: string;
  date: string;
  tripType: string;
  petType?: string;
  weight?: string;
  breed?: string;
  age?: string;
}

export async function POST(req: Request) {
  const { from, to, date, tripType, petType, weight, breed, age } =
    (await req.json()) as FormData;

  // Validate required fields
  if (!from || !to || !date || !tripType) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    // Pet filtering rules
    const petRules: PetRules = {
      A3: { airports: ["LHR"], cabin: true, hold: true }, // Aegean Airlines
      LO: { airports: ["LHR"], cabin: true, hold: true }, // Polish LOT
      BT: { airports: ["LHR"], cabin: false, hold: true }, // Air Baltic
      AZ: { airports: ["LCY"], cabin: true, hold: true }, // Air Italy
    };

    let flights: Flight[] = [];
    try {
      // Updated Sabre API endpoint based on your screenshot (adjust if needed)
      const sabreResponse = await axios.post(
        "https://api.cert.platform.sabre.com/v5/offers/shop", // Replace with correct endpoint from screenshot
        {
          data: {
            type: "flight-offers-pricing",
            flightOffers: [
              {
                itineraries: [
                  {
                    segments: [
                      {
                        departure: { iataCode: from },
                        arrival: { iataCode: to },
                        departureDateTime: `${date}T00:00:00`,
                      },
                    ],
                  },
                ],
                travelers: [{ id: "1", travelerType: "ADULT" }],
              },
            ],
          },
        },
        {
          headers: {
            Authorization: `Bearer YOUR_SABRE_TOKEN`, // Replace with your Sabre token
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      // Adjust based on actual response structure (e.g., sabreResponse.data.data)
      flights = sabreResponse.data.data?.flightOffers || [];
    } catch (sabreError) {
      console.error("Sabre API error, using mock data:", sabreError);
      // Mock data fallback
      flights = [
        {
          AirlineCode: "A3",
          OriginLocation: { LocationCode: "LHR" },
          DestinationLocation: { LocationCode: "AMS" },
          Price: 200,
        },
        {
          AirlineCode: "LO",
          OriginLocation: { LocationCode: "LHR" },
          DestinationLocation: { LocationCode: "WAW" },
          Price: 180,
        },
        {
          AirlineCode: "BT",
          OriginLocation: { LocationCode: "LHR" },
          DestinationLocation: { LocationCode: "RIX" },
          Price: 150,
        },
        {
          AirlineCode: "AZ",
          OriginLocation: { LocationCode: "LCY" },
          DestinationLocation: { LocationCode: "MXP" },
          Price: 220,
        },
        {
          AirlineCode: "BA",
          OriginLocation: { LocationCode: "LHR" },
          DestinationLocation: { LocationCode: "JFK" },
          Price: 300,
        },
      ];
    }

    // Filter flights based on pet rules
    const filteredFlights = flights.filter((flight: Flight) => {
      const airline = flight.AirlineCode as AirlineCode;
      const origin = flight.OriginLocation?.LocationCode;
      const destination = flight.DestinationLocation?.LocationCode;

      // Block flights to UK
      if (destination === "LHR" || destination === "LCY") return false;

      // Type guard for airline
      if (!(airline in petRules)) return false;

      // Check airline and airport
      if (!petRules[airline].airports.includes(origin)) return false;

      // Apply weight filter (only if pet travel is selected)
      if (weight) {
        if (weight === "under-6kg" && !petRules[airline].cabin) return false;
        if (weight !== "under-6kg" && !petRules[airline].hold) return false;
      }

      return true;
    });

    // Save form data for partner agency
    const formData = {
      from,
      to,
      date,
      tripType,
      petType,
      weight,
      breed,
      age,
      timestamp: new Date().toISOString(),
    };
    // Note: fs.appendFile won't work on Vercel (serverless). Use console log for now
    console.log("Form data saved:", formData);
    // await fs.appendFile("submissions.json", JSON.stringify(formData, null, 2) + "\n");

    // Return filtered flights and confirmation
    return NextResponse.json({
      message: "Details submitted successfully",
      flights: filteredFlights,
      formData,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch or filter flights" },
      { status: 500 }
    );
  }
}
