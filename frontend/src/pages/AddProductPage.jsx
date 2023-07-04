import { MainNav } from "@/components/MainNav";
import { Input } from "@/components/ui/Input"
import { Form } from "@/components/ui/Form"
import { Button } from "@/components/ui/Button"
import { navigationLinks } from "../config/navigationLinks";
import { UserNav } from "./ProductsPage/components/UserNav";
import { useState } from "react";

export const AddProductPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, price)

    fetch("http://127.0.0.1:8000/products/", {
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"name": name, "price": price})
    }).then((response) => response.json())
      .then((data) => console.log(data));

    setName("");
    setPrice("");
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
            <Input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Name"/>
            <Input value={price} onChange={(e) => setPrice(e.target.value)} type="text" name="price" placeholder="Price"/>
            <Button onClick={handleSubmit}>Add</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};