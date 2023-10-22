import GoogleSignInButton from "@/components/ui/googleSignIn";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { routes } from "@/lib/constants";
import { options } from "@/lib/auth/options";

interface IFormInput {
  email: string;
  password: string;
}

export default async function Login() {
  var user = await getServerSession(options);
  if (user) {
    redirect(routes.ride);
  }
  console.log(user);
  return (
    // sign in with google
    // <GoogleButton
    //   onClick={() => {
    //     signIn("google", {
    //       redirect: true,
    //       callbackUrl: "/",
    //     });
    //   }}
    // />

    <div>
      <GoogleSignInButton />
    </div>
  );
}
