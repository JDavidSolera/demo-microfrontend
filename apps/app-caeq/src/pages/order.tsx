import dynamic from "next/dynamic";

const AppOrderIndexPage = dynamic(() => import("mfe-order/OrderDetail"), {
  ssr: false,
});

function OrderPage() {
  return (
    <>
      <AppOrderIndexPage />
    </>
  );
}

export default OrderPage;
