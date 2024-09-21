import { useState } from 'react';
import supportService from '../services/support.service';
import { useToast } from '@chakra-ui/react';

const CustomerSupport = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [textarea, setTextarea] = useState('');
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = { name, email, issue: textarea };
    const resp = await supportService.createSupportTicket(payload);
    console.log(resp);

    if (resp.status === 201) {
      return toast({
        title: 'Support Ticket Created',
        description: 'We have received your support request',
        status: 'success',
        duration: 9000,
        isClosable: true
      });
    }
    console.log(payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label> Enter your name:
          <input
            type='text' name='username' value={name} onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label> Enter your email address:
          <input
            type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <textarea
          value={textarea} onChange={(e) => {
            setTextarea(e.target.value);
          }}
        />
      </div>
      <div><button>Submit</button></div>
    </form>
  );
};

export default CustomerSupport;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import Footer from "../components/footer/Footer.component";

// const CustomerSupport = () => {
//     const navigate = useNavigate();
//     const { register, handleSubmit } = useForm();
//     const [data, setData] = React.useState("");

//     const handleGoHome = () => {
//         navigate("/support");
//     };

//     return (
//         <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans">
//             <div className="flex-grow flex flex-col justify-center items-center bg-green-50 px-8 py-12">
//                 <div className="bg-white p-10 md:p-16 lg:p-20 max-w-3xl w-full rounded-lg shadow-lg text-center">
//                     <h1 className="text-5xl md:text-6xl font-bold text-green-600 mb-6">
//                         Customer Support
//                     </h1>
//                     <p className="text-lg md:text-xl mb-4">
//                     We are an e-waste recycling company. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
//                     </p>
//                     <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
//                     <input {...register("firstName")} placeholder="First name" />
//                     <select {...register("category", { required: true })}>
//                         <option value="">Select...</option>
//                         <option value="A">Option A</option>
//                         <option value="B">Option B</option>
//                     </select>
//                     <textarea {...register("aboutYou")} placeholder="About you" />
//                     <p>{data}</p>
//                     <input type="submit" />
//                     </form>

//                     <p className="mb-10 text-base md:text-lg">
//                         Join us in creating a sustainable future!
//                     </p>
//                     <button
//                         className="bg-green-600 text-white px-6 py-3 rounded-full text-lg md:text-xl hover:bg-green-700 transition-all"
//                         onClick={handleGoHome}
//                     >
//                         Return to Home
//                     </button>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default CustomerSupport;
