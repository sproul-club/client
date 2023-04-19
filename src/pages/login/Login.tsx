import React from "react";
import styles from "./Login.module.scss";
import LoginForm from "./components/LoginForm";
import useAuth from "../../contexts/Auth/useAuth";

import { useRouter } from 'next/router';

import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './../../aws-exports';
Amplify.configure(awsExports);

// function LoginBox({ signOut, user }: any) {
//   return (
//     <>
//       <h1>Hello {user.username}</h1>
//       <button onClick={signOut}>Sign out</button>
//     </>
//   );
// }

function LoginBox({ signOut, user }: any) {
  const router = useRouter();
  router.push('/');
  return (
    <>
    </>
  );
}

export default withAuthenticator(LoginBox);


// const Login = () => {
//   // const isHeaderOpen = props.active ? 'active' : 'muted';
//   // ReactGA.initialize("UA-176775736-1");
//   // ReactGA.pageview("/signup");
//   const handleSubmit = (data: any) => {};

//   return (
//     <div className="signup">
//       {/* <div className={`signup ${isHeaderOpen}`}> */}
//       <div className="content">
//         <div className="text">
//           <h3>Let&apos;s get started.</h3>
//           <ol>
//             <li>
//               <p>
//                 Please use your{" "}
//                 <strong> organization&apos;s Berkeley email </strong> to
//                 register. We will be using your CalLink email to verify your
//                 club.{" "}
//               </p>
//             </li>
//             <li>We&apos;ll send a confirmation link to your club email.</li>
//             <li>Click on the confirmation link to sign into sproul.club.</li>
//             <li>Begin creating and editing your organization&apos;s page!</li>
//           </ol>
//         </div>
//         <LoginForm onSubmit={handleSubmit} />
//       </div>
//     </div>
//   );
// };

// export default Login;
