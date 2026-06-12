import TrailCard from "./trail-card";

// data trail statis untuk sementara
const trails = [
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

// komponen TrailGrid untuk menampilkan grid kartu trail
export default function TrailGrid() {
   return (
      <section
         className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
      "
      >
         {trails.map((trail) => (
            <TrailCard key={trail.id} trail={trail} />
         ))}
      </section>
   );
}
