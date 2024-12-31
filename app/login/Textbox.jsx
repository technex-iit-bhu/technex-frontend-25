export default function Textbox({ title, placeholder, value, onChange, type = "text" }) {
  return (
    <div className="flex flex-col my-4">
      <div className="text-lg sm:text-xl">{title}</div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-transparent border-b outline-none p-2 text-lg sm:text-xl"
      />
    </div>
  );
}
