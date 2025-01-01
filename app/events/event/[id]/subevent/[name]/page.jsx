"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getSubEventByName } from "@/app/utils/api";

export default function SubEventPage() {
  const { id, name } = useParams();
  const [subEvent, setSubEvent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id || !name) return;
    getSubEventByName(id, name)
      .then((res) => setSubEvent(res))
      .catch((err) => setError(err.message));
  }, [id, name]);

  if (error) {
    return <div className="text-red-400">Error: {error}</div>;
  }
  if (!subEvent) {
    return <div className="text-white">Loading subEvent...</div>;
  }

  return (
    <div className="text-white p-8">
      <h1 className="text-3xl mb-4">{subEvent.name}</h1>
      <p className="mb-2">{subEvent.desc}</p>
      <p className="mb-2 text-gray-400">{subEvent.sub_desc}</p>
      <p>
        Start: {new Date(subEvent.sDate).toLocaleString()} <br />
        End: {new Date(subEvent.eDate).toLocaleString()}
      </p>
      {subEvent.github && (
        <div className="mt-4">
          <a
            href={subEvent.github}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline"
          >
            GitHub
          </a>
        </div>
      )}
    </div>
  );
}
