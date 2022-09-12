import { useState } from "react";
import { P7rest } from "helpers/PT7-REST-Helper";
import { Card, VStack } from "components/native/layout";
import { TextXL, TextXS } from "components/native/typo";
import { Input } from "components/native/form/Input";
import { FiCoffee } from "react-icons/fi";
import { useRouter } from "next/router";

interface FormDataType {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const router = useRouter();
  const [formErrorMessages, setFormErrorMessages] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormDataType>({
    username: "",
    email: "",
    password: "",    
  });
  
  /* Login form submit action handler */
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    /* Login frontend resolver */
    /* TODO - move first endpoint part to enviromental variables */
    const endpoint = "http://localhost:1337/api/auth/local";
    P7rest.post(endpoint, formData, (response: any) => {
      const data = JSON.parse(response);
      console.log('register', data)
    });
  };

  return (
    <div className="grid grid-cols-2 h-full">
      <div className="flex justify-center items-center  bg-slate-50">
        <Card>
          <form onSubmit={onSubmitHandler}>
            <VStack>
              <TextXL>Register</TextXL>
              <Input
                label="Username"
                form={["username", formData, setFormData]}
              />
              <Input
                label="Email"
                form={["email", formData, setFormData]}
              />
              <Input
                label="Password"
                type="password"
                form={["password", formData, setFormData]}
              />
              <button className="inline-block px-6 py-3.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Register
              </button>
              <>
                {formErrorMessages.map((msg: any, i: number) => (
                  <Card bgColor="error" key={i}>
                    <TextXS color="white">{msg}</TextXS>  
                  </Card>
                ))}
              </>
            </VStack>
          </form>
        </Card>
      </div>
      <div className="bg-slate-200 h-full flex justify-center items-center">
        <div className="py-6 px-9 bg-white shadow rounded-full flex gap-3 items-center">
          <FiCoffee className="text-3xl" />{" "}
          <div>
            Example working STRAPI backofice <br /> with fethed REST API in pure
            Next.js and TailWind
          </div>
        </div>
      </div>
    </div>
  );
};
/* #DisablePrerenderer */
// @ts-ignore
Register.getInitialProps = () => ({});
export default Register;
