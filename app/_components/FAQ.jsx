import { useState, useRef } from "react";

const FAQItem = ({ index, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#4D4B4B] bg-opacity-80 text-white px-5 w-[60vw] rounded-xl text-2xl">
      <button
        onClick={toggleFAQ}
        className="w-full flex justify-between items-center py-5"
      >
        <span>{title}</span>
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="white"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0",
        }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div className="pb-5 text-xl text-white">{content}</div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const items = [
    {
      title: "Lorem ipsumLorem ipsum",
      content:
        "Lorem ipsumLorem ipsum",
    },
    {
      title: "Lorem ipsumLorem ipsum",
      content:
        "Lorem ipsumLorem ipsum",
    },
    {
      title: "Lorem ipsumLorem ipsum",
      content:
        "Lorem ipsumLorem ipsum",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 pb-20">
        <div className="text-white text-5xl">FAQ</div>
      {items.map((item, index) => (
        <FAQItem
          key={index}
          index={index}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
}
