import { Helmet } from "react-helmet-async";
import PageTitle from "../../Shared/PageTitle";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Contact = () => {
    const iframeStyle = {
        filter: "grayscale(1) contrast(1.2) opacity(0.4)",
      };
      const {user} = useContext(AuthContext)
    return (
        <div>
            <PageTitle></PageTitle>
             <div>
           <Helmet>
        <title>Express Times | Contacts</title>
      </Helmet>
       
     <div className="text-gray-600 body-font relative">
       <div
         data-aos="fade-up"
         data-aos-duration="3000"
         className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap"
       >
         <div
           data-aos="fade-down"
           data-aos-duration="3000"
           className="lg:w-1/2 md:w-1/2 bg-blue rounded-lg overflow-hidden sm:mr-10 p-8  flex items-end justify-start relative"
         >
           <iframe
             width="100%"
             height="100%"
             className="absolute inset-0"
             title="map"
             src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
             style={iframeStyle}
           ></iframe>
           <div className="bg-white relative flex flex-wrap lg:pr-8 py-6 rounded shadow-md">
             <div className="lg:w-1/2 px-6">
               <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                 ADDRESS
               </h2>
               <p className="mt-1">Gazipur, Dhaka, Bangladesh</p>
               <p className="mt-1 text-sm">
                 Get in Touch with Us for Questions, Support, or Collaborations.
                 We're Here to Hear from You and Assist You!
               </p>
             </div>
             <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
               <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                 EMAIL
               </h2>
               <a className="text-indigo-500 text-sm leading-relaxed">
                 {user?.email}
               </a>
               <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                 PHONE
               </h2>
               <p className="leading-relaxed">+880 1797277740</p>
             </div>
           </div>
         </div>
         <div className="p-4 rounded-lg text-white bg-blue flex flex-col md:ml-auto flex-1 md:py-8 mt-8 md:mt-0" >
           <form
             className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
           >
             <label className="block">
               <span className="mb-1">Full name</span>
               <input
                 type="text"
                 placeholder="Your name"
                 className="block w-full p-3 rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800"
               />
             </label>
             <label className="block">
               <span className="mb-1">Email address</span>
               <input
                 type="email"
                 placeholder="leroy@jenkins.com"
                 className="block p-3 w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800"
               />
             </label>
             <label className="block">
               <span className="mb-1">Message</span>
               <textarea
                 rows="3"
                 className="block w-full rounded-md focus:ring focus:ri focus:ri dark:bg-gray-800"
               ></textarea>
             </label>
             <button
               type="button"
               className="self-center bg-white text-black font-medium px-8 py-3 text-lg rounded"
             >
               Submit
             </button>
           </form>
         </div>
       </div>
     </div>
   </div>
        </div>
    );
};

export default Contact;