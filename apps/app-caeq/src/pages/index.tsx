import dynamic from "next/dynamic";

const ExampleComponent = dynamic(() => import("mfe-product/ExampleComponent"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <ExampleComponent />
    </>
  );
}
