export default function Textbox({ title, placeholder, value, onChange, type = "text" }) {
  return (
    <div className="flex flex-col my-4">
      <div className="text-2xl">{title}</div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-transparent border-b-2 outline-none text-xl py-2"
      />
    </div>
  );
}
