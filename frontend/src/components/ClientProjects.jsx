import React, { useMemo } from "react";
import "./ClientProjects.css";

/*
========================================================
  CRYSTAL WATER ENGINEERS
  CLIENT / PROJECT DATA
========================================================

  Add/update the project records here.

  Required fields:
  sno
  client
  project
  year
  location
  product
  capacity
  details
  status
*/

const projectsData = [
  {
    sno: 1,
    client: "Silver Spoon Restaurant",
    project: "Silver Spoon",
    year: 2017,
    location: "Annanagar East, Chennai",
    product: "RO",
    capacity: "250 LPH",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 2,
    client: "Arul Selvam",
    project: "Villa",
    year: 2020,
    location: "Ayyapakkam, Chennai",
    product: "WTP",
    capacity: "1 M3",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 3,
    client: "Arul Selvam",
    project: "Villa",
    year: 2020,
    location: "Ayyapakkam, Chennai",
    product: "HNS",
    capacity: "1 M3",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 4,
    client: "Proodle Hospitality Service Solutions (P) Limited",
    project: "Hotel Canteen Services",
    year: 2020,
    location: "Sri City, Tada",
    product: "STP Tank Cleaning Work",
    capacity: "75 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 5,
    client: "PSK Engineering Construction & Co",
    project: "RGNIYD",
    year: 2020,
    location: "Sriperumbudur",
    product: "STP",
    capacity: "330 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 6,
    client: "PSK Engineering Construction & Co",
    project: "RGNIYD",
    year: 2020,
    location: "Sriperumbudur",
    product: "UF",
    capacity: "6 M3",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 7,
    client: "ANNAI OM BHAVATHARINI",
    project: "Shveta Padmasani Matriculation School",
    year: 2020,
    location: "Gingee",
    product: "WTP & Softener",
    capacity: "1 M3",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 8,
    client: "Mabel Engineer Pvt Ltd",
    project: "Mabel Factory",
    year: 2021,
    location: "Gummidipundi",
    product: "RO Rework",
    capacity: "250 LPH",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 9,
    client: "GK Engineers",
    project: "PSK Group",
    year: 2021,
    location: "Chennai",
    product: "UF Plant",
    capacity: "6 M3",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 10,
    client: "Black & White Infrastructure Pvt Ltd",
    project: "Sanmina",
    year: 2021,
    location: "Oragadam",
    product: "STP",
    capacity: "150 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 11,
    client: "EMCO & CO",
    project: "Kone Site",
    year: 2020,
    location: "Sriperumbudur",
    product: "STP & ETP",
    capacity: "90 & 50 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 12,
    client: "PSK Engineering Construction & Co",
    project: "Hydro Engineering College at Bilaspur",
    year: 2021,
    location: "Himachal Pradesh",
    product: "STP",
    capacity: "250 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 13,
    client: "PSK Engineering Construction & Co",
    project: "Hydro Engineering College at Bilaspur",
    year: 2021,
    location: "Himachal Pradesh",
    product: "UF",
    capacity: "5 M3",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 14,
    client: "PSK Engineering Construction & Co",
    project: "Hydro Engineering College at Bilaspur",
    year: 2021,
    location: "Himachal Pradesh",
    product: "WTP",
    capacity: "15 M3",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 15,
    client: "Qun Interiors Pvt Ltd",
    project: "Minister House - Anbil Mahesh Poyyamozhi",
    year: 2021,
    location: "Chennai",
    product: "RO",
    capacity: "250 LPH",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 16,
    client: "Mr. Slwin E Prabakar - Advocate",
    project: "Villa",
    year: 2021,
    location: "Anna Nagar, Chennai",
    product: "WTP - Softener",
    capacity: "1 M3",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 17,
    client: "Sankar Infra Projects Pvt Ltd",
    project: "Sankar Habitat",
    year: 2021,
    location: "Alandur, Chennai",
    product: "WTP",
    capacity: "2.5 M3",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 18,
    client: "Prayagaa Enterprices Pvt Ltd",
    project: "Xomox - Sanmar",
    year: 2021,
    location: "Viralimalai, Trichy",
    product: "Plumbing System",
    capacity: "—",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 19,
    client: "Hotel Rathana Residency",
    project: "Hotel Rathana Residency",
    year: 2021,
    location: "Chennai",
    product: "WTP",
    capacity: "2 M3",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 20,
    client: "Mr. N. Srinivas Murthy & Mrs. N. Jayanthi",
    project: "Villa Project",
    year: 2021,
    location: "Chennai",
    product: "WTP - Softener",
    capacity: "2 M3",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 21,
    client: "Oil and Gas Corporation Natural Limited - ONGC",
    project: "Staff Office",
    year: 2021,
    location: "Tiruvarur",
    product: "WTP Revamping",
    capacity: "5 M3",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 22,
    client: "G. Ramesh Engineering Contract",
    project: "Government Hospital",
    year: 2021,
    location: "Kolathur",
    product: "DM RO",
    capacity: "2 M3",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 23,
    client: "Murugan Idli Shop",
    project: "Office Building",
    year: 2021,
    location: "T Nagar",
    product: "IRV Revamping",
    capacity: "4 M3",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 24,
    client: "PSK Engineering Construction & Co",
    project: "Elcot IT Building",
    year: 2022,
    location: "Sholinganallur",
    product: "MBBR STP",
    capacity: "130 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 25,
    client: "Megha Engg & Constructions Pvt Ltd",
    project: "Hospital Building",
    year: 2022,
    location: "Miyapur, Hyderabad",
    product: "Bio Septic Tank",
    capacity: "5 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 26,
    client: "PSK Engineering Construction & Co",
    project: "Hydro Engineering College at Bilaspur",
    year: 2022,
    location: "Himachal Pradesh",
    product: "WTP-HNS",
    capacity: "22 M3",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 27,
    client: "Indian Railway Welfare Organization",
    project: "IRWO - Ambattur",
    year: 2022,
    location: "Ambattur",
    product: "Packaged MBBR STP",
    capacity: "20 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 28,
    client: "Qun Interiors Pvt Ltd",
    project: "CMWSSB",
    year: 2022,
    location: "Egmore",
    product: "RO & Dispenser",
    capacity: "500 LPH",
    details: "Completed",
    status: "Completed",
  },

  {
    sno: 29,
    client: "Abhijeet Ranee Polymers Pvt Ltd",
    project: "Abhijeet Ranee Polymers",
    year: 2022,
    location: "Singaperumalkoil",
    product: "STP Revamping",
    capacity: "5 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 30,
    client: "Megha Engg & Constructions Pvt Ltd",
    project: "Cars India Pvt Ltd",
    year: 2022,
    location: "Thirumazhisai",
    product: "Bio Septic Tank",
    capacity: "2 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 31,
    client: "PSK Engineering Construction & Co",
    project: "BMSICL Mental Hospital",
    year: 2022,
    location: "Koilwar, Patna",
    product: "WTP Plant",
    capacity: "54 M3",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 32,
    client: "PSK Engineering Construction & Co",
    project: "BMSICL Mental Hospital",
    year: 2022,
    location: "Koilwar, Patna",
    product: "HNS System",
    capacity: "27 M3",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 33,
    client: "Hiranandani – Jurojin Developers Pvt Ltd",
    project: "HOH Logistics Park",
    year: 2022,
    location: "Janapanchatram",
    product: "Packaged SBR STP",
    capacity: "100 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 34,
    client: "TIEMA CENTRA SIDCO",
    project: "Sidco Industrial Estate",
    year: 2022,
    location: "Thirumudiakkam",
    product: "STP Revamping",
    capacity: "600 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 35,
    client: "PSK Engineering Construction & Co",
    project: "Hydro Engineering College at Bilaspur",
    year: 2022,
    location: "Himachal Pradesh",
    product: "STP-HNS",
    capacity: "22 M3",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 36,
    client: "Ocean Lifespaces India Private Limited",
    project: "New Life Assembly of God Community (NLAG) Church",
    year: 2022,
    location: "Pallavaram",
    product: "BIO Septic Tank",
    capacity: "30 KL",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 37,
    client: "S&S Consulting Engineers",
    project: "Villa Project",
    year: 2022,
    location: "Vilupuram",
    product: "WTP",
    capacity: "1 M3",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 38,
    client: "PSK Engineering Construction & Co",
    project: "New Secondary Care Hospital",
    year: 2022,
    location: "Thiruppur",
    product: "MS Puddle Flange",
    capacity: "—",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 39,
    client: "PSK Engineering Construction & Co",
    project: "Floor Over Bridge Project",
    year: 2022,
    location: "Tambaram",
    product: "RO Plant",
    capacity: "50 LPH",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 40,
    client: "Prasanam Hospitality Service Pvt Ltd",
    project: "Prasanam Hospitality",
    year: 2023,
    location: "Kovilancherry",
    product: "ETP Plant",
    capacity: "5 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 41,
    client: "99 Coffee Shop",
    project: "99 Coffee Shop",
    year: 2023,
    location: "Acharapakkam",
    product: "ETP Plant",
    capacity: "5 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 42,
    client: "Mehega Engineering Construction & Co",
    project: "Disease Investigation Section - Govt. of Maharashtra",
    year: 2023,
    location: "Pune",
    product: "ETP Plant",
    capacity: "6 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 43,
    client: "Mehega Engineering Construction & Co",
    project: "Disease Investigation Section - Govt. of Maharashtra",
    year: 2023,
    location: "Pune",
    product: "Bio Septic Tank",
    capacity: "3 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 44,
    client: "RSM Foods Pvt Ltd",
    project: "Geetham Restaurant",
    year: 2023,
    location: "Madavakkam",
    product: "ETP Plant",
    capacity: "10 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 45,
    client: "MMG Holdings Pvt Ltd",
    project: "Factory",
    year: 2023,
    location: "Puzhal",
    product: "RO Plant",
    capacity: "1 M3",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 46,
    client: "National Payments Corporation Of India",
    project: "NPCI - Chennai",
    year: 2023,
    location: "Chennai",
    product: "Sewage Pipe Line Work",
    capacity: "25 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 47,
    client: "Indian Railway Welfare Organization",
    project: "IRWO - Ambattur",
    year: 2023,
    location: "Ambattur",
    product: "STP - Sewage CI Pipe Line Work",
    capacity: "20 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 48,
    client: "Beauty Etoile Pvt Ltd",
    project: "The ACE Project",
    year: 2023,
    location: "Chennai-Perungudi",
    product: "MBBR STP & HNS STP",
    capacity: "430 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 49,
    client: "Beauty Etoile Pvt Ltd",
    project: "The ACE Project",
    year: 2023,
    location: "Chennai-Perungudi",
    product: "WTP",
    capacity: "400 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 50,
    client: "Beauty Etoile Pvt Ltd",
    project: "The ACE Project",
    year: 2023,
    location: "Chennai-Perungudi",
    product: "UF Plant",
    capacity: "128 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 51,
    client: "Shapoorji Pallonji & Co Pvt Ltd",
    project: "ICMC Project - MSC Technology",
    year: 2023,
    location: "Ambattur Estate",
    product: "STP - SBR",
    capacity: "100 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 52,
    client: "Shapoorji Pallonji & Co Pvt Ltd",
    project: "ICMC Project - MSC Technology",
    year: 2023,
    location: "Ambattur Estate",
    product: "WTP Plant",
    capacity: "50 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 53,
    client: "Arulmigu Mariamman Temple",
    project: "Staff Quarters",
    year: 2024,
    location: "Irukkangudi",
    product: "Packaged MBBR STP",
    capacity: "5 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 54,
    client: "PSK GROUP",
    project: "Kalaingar Memorial",
    year: 2024,
    location: "Marina Beach",
    product: "RO",
    capacity: "250 LPH",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 55,
    client: "PSK GROUP",
    project: "Kalaingar Memorial",
    year: 2024,
    location: "Marina Beach",
    product: "WTP",
    capacity: "8 M3",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 56,
    client: "Starworth Infrastructure & Construction Ltd",
    project: "AMPA Hotel & Residential Project",
    year: 2024,
    location: "Aminjikarai",
    product: "RO",
    capacity: "3 M3",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 57,
    client: "Dhina Pile Foundation & Co",
    project: "Bharathidhasanar Matriculation School",
    year: 2024,
    location: "Walajapet",
    product: "SBR STP",
    capacity: "60 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 58,
    client: "The Palace House",
    project: "The Palace House",
    year: 2024,
    location: "Mylapore",
    product: "WTP",
    capacity: "2.5 M3",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 59,
    client: "Spectra MEP Projects and Services Pvt Ltd",
    project: "Sankara Nursing College",
    year: 2024,
    location: "Kancheepuram",
    product: "Packaged MBBR STP",
    capacity: "35 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 60,
    client: "Shapoorji Pallonji & Co Pvt Ltd",
    project: "ICMC Project - MSC Technology",
    year: 2024,
    location: "Ambattur Estate",
    product: "RO Plant",
    capacity: "1000 LPH",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 61,
    client: "Eashaa Engineer",
    project: "Porur Corporation Park",
    year: 2024,
    location: "Porur",
    product: "IRF",
    capacity: "2000 LPH",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 62,
    client: "G5 Infra Facility Services Pvt Ltd",
    project: "Bangalore Project",
    year: 2024,
    location: "Bangalore",
    product: "Filter Press System",
    capacity: "5 M3",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 63,
    client: "PSK Engineering Construction & Co",
    project: "Patna 500 Bedded Hospital - IGIMS",
    year: 2025,
    location: "Patna",
    product: "WTP",
    capacity: "18 M3",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 64,
    client: "PSK Engineering Construction & Co",
    project: "Patna 500 Bedded Hospital - IGIMS",
    year: 2025,
    location: "Patna",
    product: "HNS System",
    capacity: "18 M3",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 65,
    client: "TATA Project Ltd",
    project: "NewTech Park SEZ - SIPCOT IT Park",
    year: 2025,
    location: "Navalur, Chennai",
    product: "RO",
    capacity: "2000 LPH",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 66,
    client: "POWERCONZ Pvt Ltd",
    project: "TIDEL NEO",
    year: 2025,
    location: "Vellore",
    product: "WTP",
    capacity: "2.5 LPH",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 67,
    client: "POWERCONZ Pvt Ltd",
    project: "TIDEL NEO",
    year: 2025,
    location: "Vellore",
    product: "RO",
    capacity: "250 LPH",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 68,
    client: "POWERCONZ Pvt Ltd",
    project: "TIDEL NEO",
    year: 2025,
    location: "Vellore",
    product: "Packaged MBBR STP",
    capacity: "20 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 69,
    client: "TATA Project Ltd",
    project: "NewTech Park SEZ - SIPCOT IT Park",
    year: 2025,
    location: "Navalur, Chennai",
    product: "RO Repair Work",
    capacity: "1000 LPH",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 70,
    client: "THE SHORE (JAYARAM HOTELS PRIVATE LIMITED)",
    project: "The Shore Resort",
    year: 2025,
    location: "Pondicherry",
    product: "SBR STP",
    capacity: "30 KLD",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 71,
    client: "THE SHORE (JAYARAM HOTELS PRIVATE LIMITED)",
    project: "The Shore Resort",
    year: 2025,
    location: "Pondicherry",
    product: "WTP",
    capacity: "3 M3",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 72,
    client: "PV Infra Pvt Ltd",
    project: "Head Quarters Hospital in GH",
    year: 2025,
    location: "Gudiyatham",
    product: "Precast Concrete Tank - Pipe Line Work",
    capacity: "16.5 KL",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 73,
    client: "TATA Project Ltd",
    project: "NewTech Park SEZ - SIPCOT IT Park",
    year: 2025,
    location: "Navalur, Chennai",
    product: "Sewage Pipe Line Work and Pumps",
    capacity: "—",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 74,
    client: "SLAS SAFE & SECURE",
    project: "Fire Fighting Work",
    year: 2025,
    location: "Padi",
    product: "Fire Fighting Work",
    capacity: "—",
    details: "Completed",
    status: "Completed",
  },
  {
    sno: 75,
    client: "K&K System",
    project: "Fire Fighting Work - Kone Office",
    year: 2025,
    location: "Ambattur",
    product: "Fire Fighting Work",
    capacity: "—",
    details: "Completed",
    status: "Completed",
  },

  /* =========================
     ONGOING PROJECTS
  ========================= */

  {
    sno: 76,
    client: "Repplen Projects Pvt Ltd",
    project: "Sipcot Industrial Park",
    year: 2025,
    location: "Panapakkam, Ranipet",
    product: "SBR STP",
    capacity: "220 KLD",
    details: "On Going Project",
    status: "Ongoing",
  },
  {
    sno: 77,
    client: "PUVI PROJECTS",
    project: "IIM, Trichy",
    year: 2025,
    location: "Trichy",
    product: "MBBR STP",
    capacity: "100 KLD",
    details: "On Going Project",
    status: "Ongoing",
  },
  {
    sno: 78,
    client: "Hiranandani - DAINICHI DEVELOPERS PRIVATE LIMITED",
    project: "Industrial Park",
    year: 2026,
    location: "Sethupakkam, Tiruvallur",
    product: "Packaged SBR STP",
    capacity: "40 KLD",
    details: "On Going Project",
    status: "Ongoing",
  },
  {
    sno: 79,
    client: "SGA Constructions",
    project: "Industrial Park",
    year: 2026,
    location: "Sethupakkam, Tiruvallur",
    product: "WTP",
    capacity: "5 M3",
    details: "On Going Project",
    status: "Ongoing",
  },
  {
    sno: 80,
    client: "Hiranandani Realtors Private Limited",
    project: "Villa Projects",
    year: 2026,
    location: "OMR, Navalur",
    product: "SBR STP",
    capacity: "75 KLD",
    details: "On Going Project",
    status: "Ongoing",
  },
  {
    sno: 81,
    client: "Sankar Infra Projects Pvt Ltd",
    project: "Sankar's Akilandeswari",
    year: 2026,
    location: "Velachery",
    product: "WTP",
    capacity: "7 M3",
    details: "On Going Project",
    status: "Ongoing",
  },
  {
    sno: 82,
    client: "Touchstone Infrastructure & Solutions Private Limited",
    project: "Indian Overseas Bank",
    year: 2026,
    location: "Anna Nagar, Chennai",
    product: "Packaged MBBR STP",
    capacity: "25 KLD",
    details: "On Going Project",
    status: "Ongoing",
  },
  {
    sno: 83,
    client: "Hiranandani – Jurojin Developers Pvt Ltd",
    project: "HOH Logistics Park - Box-11",
    year: 2026,
    location: "Janapanchatram",
    product: "Packaged SBR STP",
    capacity: "35 KLD",
    details: "On Going Project",
    status: "Ongoing",
  },
  {
    sno: 84,
    client: "S K Associates",
    project: "Kodaikanal Municipality",
    year: 2026,
    location: "Kodaikanal",
    product: "MBBR STP",
    capacity: "10 KLD",
    details: "On Going Project",
    status: "Ongoing",
  },
  {
    sno: 85,
    client: "Novascape Realty Ventures LLP",
    project: "Updown Apartment",
    year: 2026,
    location: "Keeranatham",
    product: "SBR STP",
    capacity: "80 KLD",
    details: "On Going Project",
    status: "Ongoing",
  },
  {
    sno: 86,
    client: "Dhina Pile Foundation & Co",
    project: "Bharathidhasanar Matriculation School",
    year: 2026,
    location: "Kaveripakkam",
    product: "SBR STP",
    capacity: "80 KLD",
    details: "On Going Project",
    status: "Ongoing",
  },

  /*
    IMPORTANT:
    Your PDF has 89 as the final S.No.
    If S.No. 87/88 contain additional records in
    your original Excel/source, add them here.
  */
];


/* ========================================================
   HIGH LEVEL CLIENTS
======================================================== */

const featuredClients = [
  "TATA Project Ltd",
  "Shapoorji Pallonji & Co Pvt Ltd",
  "Oil and Gas Corporation Natural Limited - ONGC",
  "Indian Railway Welfare Organization",
  "Hiranandani",
  "National Payments Corporation Of India",
  "Starworth Infrastructure & Construction Ltd",
  "PSK Engineering Construction & Co",
];


/* ========================================================
   COMPONENT
======================================================== */

const ClientProjects = () => {
  const ongoingProjects = useMemo(
    () =>
      projectsData.filter(
        (project) =>
          project.status === "Ongoing" ||
          project.details.toLowerCase().includes("on going")
      ),
    []
  );

  const completedProjects = useMemo(
    () =>
      projectsData.filter(
        (project) =>
          project.status === "Completed" &&
          !project.details.toLowerCase().includes("on going")
      ),
    []
  );

  return (
    <section className="client-projects-section">
      <div className="client-projects-container">

        {/* ==============================================
            TOP HEADER
        ============================================== */}

        <div className="client-projects-header">

          <div className="client-heading">
            <div className="client-label">
              <span></span>
              CLIENT
            </div>

            <h2>
              Trusted by contractors &<br />
              enterprises across India
            </h2>
          </div>

          <div className="client-description">
            <p>
              89 project line items delivered for 58+
              client organizations, 2017–2026.
            </p>
          </div>

        </div>


        {/* ==============================================
            HIGH LEVEL CLIENTS
        ============================================== */}

        <div className="featured-client-list">
          {featuredClients.map((client, index) => (
            <div
              className="featured-client-pill"
              key={`${client}-${index}`}
            >
              {client}
            </div>
          ))}
        </div>


        {/* ==============================================
            ONGOING PROJECTS
        ============================================== */}

        <div className="project-group">

          <div className="project-group-heading">

            <div className="project-group-title">
              <span></span>
              ONGOING PROJECTS
            </div>

            <div className="project-count">
              {ongoingProjects.length} Projects
            </div>

          </div>


          <div className="project-table-wrap ongoing-table">

            <table className="project-table">

              <colgroup>
                <col className="col-sno" />
                <col className="col-client" />
                <col className="col-project" />
                <col className="col-year" />
                <col className="col-location" />
                <col className="col-product" />
                <col className="col-capacity" />
                <col className="col-details" />
              </colgroup>

              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Clients</th>
                  <th>Project</th>
                  <th>Year</th>
                  <th>Location</th>
                  <th>Product</th>
                  <th>Capacity</th>
                  <th>Project Details</th>
                </tr>
              </thead>

              <tbody>

                {ongoingProjects.map((project) => (
                  <ProjectRow
                    project={project}
                    key={`${project.sno}-${project.project}`}
                  />
                ))}

              </tbody>

            </table>

          </div>

        </div>


        {/* ==============================================
            COMPLETED PROJECTS
        ============================================== */}

        <div className="project-group completed-group">

          <div className="project-group-heading">

            <div className="project-group-title">
              <span></span>
              COMPLETED PROJECTS
            </div>

            <div className="project-count">
              {completedProjects.length}+ Projects
            </div>

          </div>


          <div className="project-table-wrap completed-table">

            <table className="project-table">

              <colgroup>
                <col className="col-sno" />
                <col className="col-client" />
                <col className="col-project" />
                <col className="col-year" />
                <col className="col-location" />
                <col className="col-product" />
                <col className="col-capacity" />
                <col className="col-details" />
              </colgroup>

              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Clients</th>
                  <th>Project</th>
                  <th>Year</th>
                  <th>Location</th>
                  <th>Product</th>
                  <th>Capacity</th>
                  <th>Project Details</th>
                </tr>
              </thead>

              <tbody>

                {completedProjects.map((project) => (
                  <ProjectRow
                    project={project}
                    key={`${project.sno}-${project.project}`}
                  />
                ))}

              </tbody>

            </table>

          </div>

          <div className="scroll-hint">
            Scroll to explore all completed projects
          </div>

        </div>

      </div>
    </section>
  );
};


/* ========================================================
   TABLE ROW
======================================================== */

const ProjectRow = ({ project }) => {
  const isOngoing = project.status === "Ongoing";

  return (
    <tr>

      <td data-label="S.No">
        <span className="sno-number">
          {project.sno}
        </span>
      </td>

      <td data-label="Clients">
        <span className="client-name">
          {project.client}
        </span>
      </td>

      <td data-label="Project">
        {project.project}
      </td>

      <td data-label="Year">
        {project.year}
      </td>

      <td data-label="Location">
        {project.location}
      </td>

      <td data-label="Product">
        {project.product}
      </td>

      <td data-label="Capacity">
        <span className="capacity">
          {project.capacity}
        </span>
      </td>

      <td data-label="Project Details">

        <span
          className={`project-status ${
            isOngoing ? "status-ongoing" : "status-completed"
          }`}
        >
          {isOngoing ? "On Going" : "Completed"}
        </span>

      </td>

    </tr>
  );
};

export default ClientProjects;