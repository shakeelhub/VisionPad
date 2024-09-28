import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#features" },

  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "John Doe",
    
    image: user1,
    text: "Smart and Satisfying",
  },
  {
    user: "Jane ",

    image: user2,
    text: "Time Saving",
  },
  {
    user: "David Johnson",
   
    image: user3,
    text: "Highly Recommended",
  },
  {
    user: "Ronee Brown",

    image: user4,
    text: "Seamless and Valuable",
  },
  {
    user: "Michael Wilson",
    
    image: user5,
    text: "Must Have Whiteboard",
  },
  {
    user: "Emily",
    
    image: user6,
    text: "User Friendly",
  },
  {
    user: "Jane Smith",
    
    image: user2,
    text: "Highly Recommended",
  },
  {
    user: "David Johnson",
   
    image: user3,
    text: "Increases My Productivity",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Dynamic Brainstorming",
    description:
      "Engage your team in a lively brainstorming session with interactive tools and instant feedback.",
  },
  {
    icon: <Fingerprint />,
    text: "Flexible Drawing Tools",
    description:
      "Choose from a variety of drawing tools to express your ideas visually."
  },
      {
    icon: <ShieldHalf />,
    text: "Export and Share",
    description:
      "Export your whiteboard as an image or share it with a link for easy access.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your Work in real-time as you make changes, allowing for quick viewing and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Dotted Screen",
    description:
      "Utilize a grid with dotted lines for precise scaling and alignment of your drawings and notes.",
  },
  {
    icon: <GlobeLock />,
    text: "Stunning User Interface",
    description:
      "Experience a beautifully designed interface that enhances creativity and focus.",
  },
];

export const ACTIONS = {
  SELECT: "SELECT",
  RECTANGLE: "RECTANGLE",
  CIRCLE: "CIRCLE",
  SCRIBBLE: "SCRIBBLE",
  ARROW: "ARROW",
};

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Basic Drawing Tools",
      "Limited Canvas Size",
      "Export Options(PNG)",

    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Advanced Drawing Tools",
      "unlimited Canvas Size",
      "Cloud Storage",
      
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "All Paid Plan Features",
      "Advanced Analytics and Reporting",
      "Collaboration",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
