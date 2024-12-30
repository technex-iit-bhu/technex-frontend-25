"use client";
import { useState } from "react";
import Background_C from "@/app/_backgrounds/Background_C";
import Navbar from "@/app/_components/Navbar";
import Image from "next/image";

const EventCard = ({ subevent, onClick }) => {
  return (
    <div
      onClick={() => onClick(subevent)}
      className="w-[300px] h-[400px] relative flex flex-col items-center text-white transition-transform transform hover:scale-105 cursor-pointer"
    >
      <Image
        src="/SponsorCard.png"
        width={300}
        height={0}
        className="absolute z-[-1] top-0"
        alt="sponsor-card"
      />
      <div className="w-[230px] h-[220px] mt-[30px] mb-[80px] bg-white rounded overflow-hidden"></div>
      <div className="w-[200px] text-2xl text-center bg-black bg-opacity-50 rounded-md">
        {subevent.name}
      </div>
    </div>
  );
};

const Modal = ({ subevent, onClose }) => {
  if (!subevent) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-black p-6 rounded-lg max-w-3xl w-full ">
        <div className="text-white text-2xl font-bold mb-4">
          {subevent.name}
        </div>
        <p className="text-gray-700 mb-4">{subevent.description}</p>
        <p className="text-gray-500">
          Start: {new Date(subevent.startDate).toLocaleString()}
        </p>
        <p className="text-gray-500 mb-4">
          End: {new Date(subevent.endDate).toLocaleString()}
        </p>
        <a
          href={subevent.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          View on GitHub
        </a>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const subevents = [
  {
    id: "64bfea1c3e50a92c40e7cc01",
    name: "SubEvent1",
    desc: "Description for SubEvent1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatum earum quis eos, eaque magnam rerum praesentium nesciunt",
    sub_desc: "Additional details about SubEvent1",
    sub_description: "More information about SubEvent1",
    sDate: "2024-12-01T10:00:00Z",
    startDate: "2024-12-01T10:00:00Z",
    eDate: "2024-12-01T12:00:00Z",
    endDate: "2024-12-01T12:00:00Z",
    github: "https://github.com/SubEvent1-repo",
  },
  {
    id: "64bfea1c3e50a92c40e7cc02",
    name: "SubEvent2",
    desc: "Description for SubEvent2",
    description: "Detailed description for SubEvent2",
    sub_desc: "Additional details about SubEvent2",
    sub_description: "More information about SubEvent2",
    sDate: "2024-12-02T10:00:00Z",
    startDate: "2024-12-02T10:00:00Z",
    eDate: "2024-12-02T12:00:00Z",
    endDate: "2024-12-02T12:00:00Z",
    github: "https://github.com/SubEvent2-repo",
  },
  {
    id: "64bfea1c3e50a92c40e7cc03",
    name: "SubEvent3",
    desc: "Description for SubEvent3",
    description: "Detailed description for SubEvent3",
    sub_desc: "Additional details about SubEvent3",
    sub_description: "More information about SubEvent3",
    sDate: "2024-12-03T10:00:00Z",
    startDate: "2024-12-03T10:00:00Z",
    eDate: "2024-12-03T12:00:00Z",
    endDate: "2024-12-03T12:00:00Z",
    github: "https://github.com/SubEvent3-repo",
  },
];

const EventPage = () => {
  const [selectedSubevent, setSelectedSubevent] = useState(null);

  const handleCardClick = (subevent) => {
    setSelectedSubevent(subevent);
  };

  const handleCloseModal = () => {
    setSelectedSubevent(null);
  };

  return (
    <>
      <Background_C />
      <div className="w-[100vw] h-[100vh] overflow-y-auto">
        <Navbar />
        <div className="text-white px-20 py-10 text-6xl flex justify-center">
          Event Name
        </div>
        <div className="px-20">
          <div className="bg-black bg-opacity-50 p-10 rounded-md text-lg text-white">
            <div className="text-white pb-9 text-4xl">Description</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            voluptatum earum quis eos, eaque magnam rerum praesentium nesciunt
            sunt minus, necessitatibus impedit debitis dignissimos asperiores
            porro deleniti placeat aliquam nemo? Perspiciatis in adipisci
            excepturi quam quibusdam error dolores molestias porro sit, minima
            nobis doloremque consectetur quia saepe sequi voluptatum ipsa hic
            nemo repellendus harum optio nisi? Qui consequatur ea modi.
            Praesentium amet inventore similique doloremque, enim at! Incidunt,
            eligendi aliquid quis odit id consectetur possimus illum! Corporis
            assumenda veniam corrupti laborum voluptates. Ipsum vel ad
            necessitatibus. Saepe quae doloribus ad? Deserunt possimus id ut
            minus quasi itaque modi voluptate illo nostrum quam earum
            perferendis autem, exercitationem hic esse amet illum, corporis
            sunt. Minus quisquam blanditiis neque, ex placeat explicabo omnis!
            Voluptas, consequuntur debitis iste odio, maxime voluptatem
            explicabo eveniet, labore hic exercitationem dolorem. A distinctio
            doloremque dignissimos iusto quas quod, libero harum, porro,
            recusandae repellendus accusantium quam nostrum ab earum!
          </div>
          <div className="mt-10">
            <div className="text-white pb-9 text-6xl flex justify-center">
              SubEvents
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 justify-items-center">
              {subevents.map((subevent) => (
                <EventCard
                  key={subevent.id}
                  subevent={subevent}
                  onClick={handleCardClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Modal subevent={selectedSubevent} onClose={handleCloseModal} />
    </>
  );
};

export default EventPage;
