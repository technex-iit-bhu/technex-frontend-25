import Background_E from "../_backgrounds/Background_E";
import Navbar from "../_components/Navbar";
import WorkshopCard from "./workshopcard";
import data from "./data.json"

export default function Workshops() {
  return (
    <>
      <Background_E />
      <div className="w-[100vw] h-[100vh] overflow-y-auto">
        <Navbar />
        <div className="text-white px-20 py-10 text-5xl">Workshops</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10 m-10">
          {data.map((workshop) => (
            <WorkshopCard
              key={workshop.id}
              name={workshop.name}
              description={workshop.description}
              sub_description={workshop.sub_description}
              start_date={workshop.start_date}
              end_date={workshop.end_date}
              github={workshop.github}
            />
          ))}
        </div>
      </div>
    </>
  );
}
