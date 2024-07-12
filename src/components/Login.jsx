import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BeatLoader } from "react-spinners";
import Error from "./Error";

const Login = () => {
  const [formData, setFromData] = useState({ email: "", password: "" });

  const handleInputChange=(e)=>{

const
  }
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            to your account if you already have one
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Input name="email" type="email" placeholder="Enter Email" />
            <Error message={"some error"} />
          </div>
          <div className="space-y-1">
            <Input
              name="password"
              type="password"
              placeholder="Enter Password"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button>{true ? <BeatLoader size={10} /> : "Login"}</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
