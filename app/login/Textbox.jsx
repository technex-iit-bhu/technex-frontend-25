export default function Textbox({title,placeholder}) {
  return (
    <>
    <div className="text-2xl mb-4">{title}</div>
      <input type="text" placeholder={placeholder} className="bg-transparent border border-white px-4 py-1 text-2xl w-full mb-4"/>
    </>
  );
}
