interface IButton {
  children?: string;
}

export default function Button({ children = 'APPLY NOW' }: IButton) {
  return (
    <button className=" rounded-lg bg-fill px-7 py-4  text-white">
      <p>{children}</p>
    </button>
  );
}
