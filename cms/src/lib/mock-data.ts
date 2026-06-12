export type PaymentStatus = "paid" | "pending" | "overdue";

export interface PaymentBreakdownItem {
  label: string;
  amount: number;
}

export interface PaymentDetail {
  id: string;
  groupName: string;
  leader: string;
  phone: string;
  nik: string;
  email: string;
  paymentMethod: string;
  route: string;
  difficulty: string;
  distance: string;
  elevation: string;
  registrationFee: number;
  guideFees: number;
  parkingFee: number;
  permitFee: number;
  fine: number;
  total: number;
  status: PaymentStatus;
  breakdown: PaymentBreakdownItem[];
}

export interface RegistrationItem {
  id: string;
  name: string;
  route: string;
  status: "Pending" | "Verified" | "Completed";
  createdAt: string;
}

export interface TrailItem {
  id: number;
  name: string;
  distance: string;
  location: string;
  difficulty: "easy" | "medium" | "hard";
  status: boolean;
  image: string;
}

export const paymentDetails: PaymentDetail[] = [
  {
    id: "REG-1024",
    groupName: "Rajabasa Adventure",
    leader: "Ahmad Fauzi",
    phone: "+62 812-3456-7890",
    nik: "1801022405980001",
    email: "ahmad.fauzi@example.com",
    paymentMethod: "Bank Transfer",
    route: "Jalur Utama",
    difficulty: "Easy",
    distance: "4.5 km",
    elevation: "950 m",
    registrationFee: 250000,
    guideFees: 75000,
    parkingFee: 25000,
    permitFee: 0,
    fine: 0,
    total: 350000,
    status: "pending",
    breakdown: [
      { label: "Climber Fees", amount: 250000 },
      { label: "Guide Fees", amount: 75000 },
      { label: "Parkir Kendaraan", amount: 25000 },
      { label: "SIMAKSI Permit", amount: 0 },
    ],
  },
  {
    id: "REG-1025",
    groupName: "Lampung Hiking Club",
    leader: "Siti Rahma",
    phone: "+62 813-2222-3344",
    nik: "1801022306980002",
    email: "siti.rahma@example.com",
    paymentMethod: "Virtual Account",
    route: "Jalur Pematang",
    difficulty: "Medium",
    distance: "6.8 km",
    elevation: "1,120 m",
    registrationFee: 250000,
    guideFees: 80000,
    parkingFee: 25000,
    permitFee: 50000,
    fine: 50000,
    total: 455000,
    status: "pending",
    breakdown: [
      { label: "Climber Fees", amount: 250000 },
      { label: "Guide Fees", amount: 80000 },
      { label: "Parkir Kendaraan", amount: 25000 },
      { label: "SIMAKSI Permit", amount: 50000 },
    ],
  },
  {
    id: "REG-1026",
    groupName: "Summit Team",
    leader: "Bambang Kusuma",
    phone: "+62 812-9911-2233",
    nik: "1801021507980003",
    email: "bambang.kusuma@example.com",
    paymentMethod: "Cash",
    route: "Jalur Canggung",
    difficulty: "Hard",
    distance: "8.2 km",
    elevation: "1,420 m",
    registrationFee: 250000,
    guideFees: 90000,
    parkingFee: 25000,
    permitFee: 30000,
    fine: 0,
    total: 395000,
    status: "paid",
    breakdown: [
      { label: "Climber Fees", amount: 250000 },
      { label: "Guide Fees", amount: 90000 },
      { label: "Parkir Kendaraan", amount: 25000 },
      { label: "SIMAKSI Permit", amount: 30000 },
    ],
  },
  {
    id: "REG-1027",
    groupName: "Mountain Explorers",
    leader: "Dewi Sartika",
    phone: "+62 813-4567-8901",
    nik: "1801022601980004",
    email: "dewi.sartika@example.com",
    paymentMethod: "Bank Transfer",
    route: "Jalur Bukit",
    difficulty: "Medium",
    distance: "5.9 km",
    elevation: "1,050 m",
    registrationFee: 250000,
    guideFees: 85000,
    parkingFee: 25000,
    permitFee: 0,
    fine: 25000,
    total: 385000,
    status: "overdue",
    breakdown: [
      { label: "Climber Fees", amount: 250000 },
      { label: "Guide Fees", amount: 85000 },
      { label: "Parkir Kendaraan", amount: 25000 },
      { label: "SIMAKSI Permit", amount: 0 },
    ],
  },
];

export const payments = paymentDetails.map(({ breakdown, ...payment }) => payment);

export const registrations: RegistrationItem[] = [
  {
    id: "REG-1024",
    name: "Aditya Jaya",
    route: "Jalur Utama",
    status: "Pending",
    createdAt: "10 menit lalu",
  },
  {
    id: "REG-1025",
    name: "Siti Fatimah",
    route: "Jalur Pematang",
    status: "Verified",
    createdAt: "20 menit lalu",
  },
  {
    id: "REG-1026",
    name: "Bambang Kusuma",
    route: "Jalur Canggung",
    status: "Completed",
    createdAt: "45 menit lalu",
  },
];

export const trails: TrailItem[] = [
  {
    id: 1,
    name: "Jalur Utama",
    distance: "4.5 km",
    location: "Pintu Masuk Rajabasa",
    difficulty: "easy",
    status: true,
    image: "/images/trails/jalur-utama.jpg",
  },
  {
    id: 2,
    name: "Jalur Pematang",
    distance: "6.8 km",
    location: "Pos Tengah",
    difficulty: "medium",
    status: false,
    image: "/images/trails/jalur-pematang.jpg",
  },
  {
    id: 3,
    name: "Jalur Canggung",
    distance: "8.2 km",
    location: "Area Puncak",
    difficulty: "hard",
    status: true,
    image: "/images/trails/jalur-canggung.jpg",
  },
];

export function getPaymentDetail(id: string) {
  return paymentDetails.find((payment) => payment.id === id);
}

export function getRegistration(id: string) {
  return registrations.find((registration) => registration.id === id);
}

export function getTrail(id: number) {
  return trails.find((trail) => trail.id === id);
}
