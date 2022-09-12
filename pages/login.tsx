import { useState } from "react";
import { P7rest } from "helpers/PT7-REST-Helper";
import { Card, VStack } from "components/native/layout";
import { TextXL, TextXS } from "components/native/typo";
import { Input } from "components/native/form/Input";
import { FiCoffee } from "react-icons/fi";
import { useRouter } from "next/router";

interface FormDataType {
  identifier: string;
  password: string;
}

const Login: React.FC = () => {
  const router = useRouter();
  const [formErrorMessages, setFormErrorMessages] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormDataType>({
    identifier: "",
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
      if (data.jwt) {
        /* SUCCESS - set token as cookie */
        document.cookie = `jwt=${data.jwt}; expires=${new Date(
          /* 2.628e9 is one month in milisecond (to set token expiration time peroid ) */
          Date.now() + 2.628e9
        ).toUTCString()}`;
        /* redirect to dashboard */
        router.push('/dashboard');
      } else {
        console.log("error data", data.error.message);
        setFormErrorMessages([data.error.message]);
      }
    });
  };

  return (
    <div className="grid grid-cols-2 h-full">
      <div className="flex justify-center items-center  bg-slate-50">
        <Card>
          <form onSubmit={onSubmitHandler}>
            <VStack>
              <TextXL>LOGIN</TextXL>
              <Input
                label="email"
                form={["identifier", formData, setFormData]}
              />
              <Input
                label="password"
                type="password"
                form={["password", formData, setFormData]}
              />
              <button className="inline-block px-6 py-3.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Login
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
Login.getInitialProps = () => ({});
export default Login;
