"use client";
import React, { useState, useEffect } from "react";
import Papa from "papaparse";

// For events, we define our interface based on the intended columns.
interface EventItem {
  eventName: string;
  location: string;
  day: string;
  feb28: string;
  mar1: string;
  mar2: string;
  internalRequirements: string;
}

// For techtalks, we assume a simple CSV header.
interface TechTalkItem {
  Date: string;
  Event: string;
  Time: string;
  Speaker: string;
  Notes: string;
}

const ScheduleCalendar = () => {
  const [activeCalendar, setActiveCalendar] = useState<"events" | "techtalks">(
    "events"
  );
  const [eventsData, setEventsData] = useState<EventItem[]>([]);
  const [groupedEvents, setGroupedEvents] = useState<
    { main?: EventItem; events: EventItem[] }[]
  >([]);
  const [techTalksData, setTechTalksData] = useState<TechTalkItem[]>([]);

  // A helper that returns true if the event row is a main header.
  const isMainHeader = (ev: EventItem) =>
    ev.eventName !== "" &&
    ev.location === "" &&
    ev.day === "" &&
    ev.feb28 === "" &&
    ev.mar1 === "" &&
    ev.mar2 === "" &&
    ev.internalRequirements === "";

  // Fetch and process events.csv.
  useEffect(() => {
    fetch("/data/events.csv")
      .then((response) => response.text())
      .then((csvText) => {
        // Use PapaParse without header so that we can rebuild it.
        const parsed = Papa.parse(csvText, { skipEmptyLines: false });
        const rows = parsed.data as string[][];

        // Expect at least two rows: row[0] = generic header, row[1] = actual timing headers.
        if (rows.length < 2) return;

        // We use the second row (index 1) to get the day–specific timing headers.
        const timingHeader1 = rows[1][3]?.trim() || "28th Feb";
        const timingHeader2 = rows[1][4]?.trim() || "1st Mar";
        const timingHeader3 = rows[1][5]?.trim() || "2nd Mar";

        // Process the remaining rows (starting at index 2) into EventItem objects.
        const events: EventItem[] = [];
        for (let i = 2; i < rows.length; i++) {
          const row = rows[i];
          // If the row is completely empty, add a separator row.
          if (row.every((cell) => cell.trim() === "")) {
            events.push({
              eventName: "",
              location: "",
              day: "",
              feb28: "",
              mar1: "",
              mar2: "",
              internalRequirements: "",
            });
            continue;
          }
          // Ensure there are at least 7 columns.
          while (row.length < 7) {
            row.push("");
          }
          const event: EventItem = {
            eventName: row[0].trim(),
            location: row[1]?.trim() || "",
            day: row[2]?.trim() || "",
            // Replace the generic header "Timings" with the actual day labels.
            feb28: row[3]?.trim() || "",
            mar1: row[4]?.trim() || "",
            mar2: row[5]?.trim() || "",
            internalRequirements: row[6]?.trim() || "",
          };
          events.push(event);
        }
        setEventsData(events);

        // Now, group events: if a row is a main header (only eventName filled) then treat subsequent non–header rows as sub–events.
        const groups: { main?: EventItem; events: EventItem[] }[] = [];
        let currentGroup: { main?: EventItem; events: EventItem[] } | null =
          null;
        events.forEach((ev) => {
          // If a row is completely empty (separator), reset currentGroup.
          if (
            ev.eventName === "" &&
            ev.location === "" &&
            ev.day === "" &&
            ev.feb28 === "" &&
            ev.mar1 === "" &&
            ev.mar2 === "" &&
            ev.internalRequirements === ""
          ) {
            currentGroup = null;
            return;
          }
          if (isMainHeader(ev)) {
            // Start a new group with this main header.
            currentGroup = { main: ev, events: [] };
            groups.push(currentGroup);
          } else {
            // Otherwise, if we already have an active group, add this row as a sub–event.
            // If not, then treat it as a standalone event.
            if (currentGroup) {
              currentGroup.events.push(ev);
            } else {
              groups.push({ events: [ev] });
            }
          }
        });
        setGroupedEvents(groups);
      })
      .catch((error) => console.error("Error loading events CSV:", error));
  }, []);

  // Fetch and process techtalks.csv.
  useEffect(() => {
    fetch("/data/techtalks.csv")
      .then((response) => response.text())
      .then((csvText) => {
        const parsed = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
        });
        setTechTalksData(parsed.data as TechTalkItem[]);
      })
      .catch((error) => console.error("Error loading techtalks CSV:", error));
  }, []);

  // Renders a single event card
  const EventCard = ({ ev }: { ev: EventItem }) => (
    <div className="bg-[#6c5ce7] p-5 rounded-lg w-full">
      <h3 className="text-2xl font-semibold text-[#ffffff] mb-3">
        {ev.eventName}
      </h3>
      {ev.location && (
        <p className="text-lg mb-2">
          <strong>Location:</strong> {ev.location}
        </p>
      )}
      {ev.day && (
        <p className="text-lg mb-2">
          <strong>Day:</strong> {ev.day}
        </p>
      )}
      <div className="mt-3 text-lg">
        {ev.feb28 !== "No Event" && (
          <p className="mb-2">
            <strong>28th Feb:</strong> {ev.feb28}
          </p>
        )}
        {ev.mar1 !== "No Event" && (
          <p className="mb-2">
            <strong>1st Mar:</strong> {ev.mar1}
          </p>
        )}
        {ev.mar2 !== "No Event" && (
          <p className="mb-2">
            <strong>2nd Mar:</strong> {ev.mar2}
          </p>
        )}
      </div>
      {ev.internalRequirements && (
        <p className="mt-3 text-lg">
          <strong>Internal Requirements:</strong> {ev.internalRequirements}
        </p>
      )}
    </div>
  );

  // Renders the events schedule.
  const renderEventsCalendar = () => {
    return (
      <div className="space-y-8">
        {groupedEvents.map((group, idx) => (
          <div key={idx} className="bg-indigo-950 p-6 rounded-lg shadow-xl">
            {/* If there is a main header, render it as the group heading */}
            {group.main && (
              <h2 className="text-5xl font-bold  border-b border-indigo-800 pb-3 mb-6">
                {group.main.eventName}
              </h2>
            )}
            <div className="space-y-6">
              {/* First row - always shows up to 3 events */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.events.slice(0, 3).map((ev, subIdx) => (
                  <EventCard key={subIdx} ev={ev} />
                ))}
              </div>
              
              {/* Second row - conditionally rendered based on number of events */}
              {group.events.length > 3 && (
                <div className={`grid gap-4 ${
                  group.events.length === 4 
                    ? "grid-cols-1 place-items-center max-w-lg mx-auto" 
                    : "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
                }`}>
                  {group.events.slice(3).map((ev, subIdx) => (
                    <EventCard key={subIdx + 3} ev={ev} />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Renders the tech talks schedule grouped by Date.
  const renderTechTalksCalendar = () => {
    // Group by Date.
    const grouped = techTalksData.reduce(
      (acc: { [key: string]: TechTalkItem[] }, talk) => {
        const date = talk.Date.trim();
        if (!acc[date]) acc[date] = [];
        acc[date].push(talk);
        return acc;
      },
      {} as { [key: string]: TechTalkItem[] }
    );

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(grouped).map((date) => (
          <div key={date} className="bg-teal-900 p-6 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-amber-400 mb-6">{date}</h2>
            {grouped[date].map((talk, idx) => (
              <div key={idx} className="bg-teal-800 p-5 rounded-lg mb-4">
                <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
                  {talk.Event}
                </h3>
                <p className="text-lg mb-2">
                  <strong>Time:</strong> {talk.Time}
                </p>
                <p className="text-lg mb-2">
                  <strong>Speaker:</strong> {talk.Speaker}
                </p>
                {talk.Notes && (
                  <p className="text-lg">
                    <strong>Notes:</strong> {talk.Notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <div className="flex justify-center space-x-6 mb-8">
        <button
          onClick={() => setActiveCalendar("events")}
          className={`px-6 py-3 rounded-lg text-xl font-semibold ${
            activeCalendar === "events"
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-600 hover:bg-gray-700"
          }`}
        >
          Events Calendar
        </button>
        <button
          onClick={() => setActiveCalendar("techtalks")}
          className={`px-6 py-3 rounded-lg text-xl font-semibold ${
            activeCalendar === "techtalks"
              ? "bg-teal-600 hover:bg-teal-700"
              : "bg-gray-600 hover:bg-gray-700"
          }`}
        >
          Tech Talks Schedule
        </button>
      </div>
      {activeCalendar === "events"
        ? renderEventsCalendar()
        : renderTechTalksCalendar()}
    </div>
  );
};

export default ScheduleCalendar;
