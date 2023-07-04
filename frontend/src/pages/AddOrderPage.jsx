import { MainNav } from "@/components/MainNav";
import { Input } from "@/components/ui/Input"
import { Form } from "@/components/ui/Form"
import { Button } from "@/components/ui/Button"
import { navigationLinks } from "../config/navigationLinks";
import { UserNav } from "./OrdersPage/components/UserNav";
import { useState } from "react";

export const AddOrderPage = () => {
  const [client_id, setClient_id] = useState("");
  const [product_id, setProduct_id] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(client_id, product_id)

    fetch("http://127.0.0.1:8000/orders/", {
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"client_id": client_id, "product_id": product_id})
    }).then((response) => response.json())
      .then((data) => console.log(data));

    setClient_id("");
    setProduct_id("");
  }

  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" links={navigationLinks} />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Add product</h2>
        </div>
        <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
          <Form>
            <Input value={client_id} onChange={(e) => setClient_id(e.target.value)} type="text" name="client_id" placeholder="Client ID"/>
            <Input value={product_id} onChange={(e) => setProduct_id(e.target.value)} type="text" name="product_id" placeholder="Product ID"/>
            <Button onClick={handleSubmit}>Add</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};