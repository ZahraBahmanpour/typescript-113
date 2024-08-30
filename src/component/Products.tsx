import { useRef } from "react";
import { Product } from "../models/ProductModel";

type Props = {
  products: Product[];
  color: string;
  onChange?: (text: number) => void;
};

export default function Products({ products }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      searchInput: { value: string };
    };
    console.log(target.searchInput.value);

    const formData: FormData = new FormData();
    formData.append("searchInput", target.searchInput.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} id={"searchInput"} />
        <button onClick={() => inputRef.current?.focus()}>Focus Input</button>
        <button type="submit">Submit Form</button>
      </form>
      {products.map((p) => (
        <>
          <code key={p.id}>{p.name}</code>
          <br />
        </>
      ))}
    </div>
  );
}
