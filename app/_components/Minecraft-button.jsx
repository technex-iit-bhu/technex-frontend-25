export function MinecraftButton({ active, children, className, ...props }) {
  return (
    <button
      type="button"
      className={`
                  relative px-4 py-2 bg-[#C6C6C6] border-2 border-[#373737]
                  before:absolute before:inset-0 before:border-t-2 before:border-l-2
                  before:border-[#FFFFFF] before:transition-opacity
                  after:absolute after:inset-0 after:border-b-2 after:border-r-2
                  after:border-[#8B8B8B] after:transition-opacity
                  hover:bg-[#d5d5d5] active:bg-[#9e9e9e]
                  active:before:opacity-0 active:after:opacity-100
                  font-minecraft text-sm select-none text-black
                  transition-all duration-100 ease-in-out
                  transform hover:scale-105 active:scale-95 z-10
                  ${
                    active
                      ? "bg-[#9e9e9e] before:opacity-0 after:opacity-100"
                      : "before:opacity-100 after:opacity-0"
                  }
                  ${className}
              `}
      {...props}
    >
      {children}
    </button>
  );
}
