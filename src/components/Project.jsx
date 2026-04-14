const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 ">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#a217fe]">
          My Projects
        </h1>

        {/* Project 1 and 2 in one row */}
        <div className="flex flex-col md:flex-col gap-10">
          {/* Cloud-Vault Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#a217fe] font-extrabold text-[32px] mb-4">
              Cloud-Vault
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A cloud-based file storage solution.
              Built using React, User Authentication using Firebase, Store a file using Appwrite and styled with Tailwind CSS.
            </p>
            <a
              href="https://cloudvault05.netlify.app/"
              className="text-[#a217fe] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>

          {/* Draw-app Project */}
           <div className="w-full md:w-1/2 flex flex-col place-self-end bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#a217fe] font-extrabold text-[32px] mb-4">
              Draw-app  
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A drawing application with basic Undo,Redo and Clear Option with includes Shapes. Built with React.js and styled using Tailwind CSS, providing a user-friendly interface for artists of all levels.
            </p>
            <a
              href="https://drawapp05.netlify.app/"
              className="text-[#a217fe] text-center font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-col gap-10">
          {/* Time-Tracker Project */}
           <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#a217fe] font-extrabold text-[32px] mb-4">
              Time-Tracker App
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A time-tracking application that helps users manage their tasks and productivity. Built using React.js for the frontend with a clean and intuitive interface styled with Tailwind CSS.
            </p>
            <a
              href="https://timetracker-web.netlify.app/"
              className="text-[#a217fe] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 3 and 4 in one row */}
        <div className="flex flex-col md:flex-col gap-10 mt-10">
          {/* ColorPalatte Generator Project */}
           <div className="w-full md:w-1/2 flex flex-col place-self-end items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#a217fe] font-extrabold text-[32px] mb-4">
              AI-ColorPalate Generator
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              An AI-powered color palette generator that creates harmonious color schemes based on user input. Built with React.js and styled using Tailwind CSS.
              using the OpenRouter API Models.
            </p>
            <a
              href="https://color-palate-generator.netlify.app/"
              className="text-[#a217fe] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>

          {/* NoteBook Project */}
           <div className="w-full md:w-1/2 flex flex-col  bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#a217fe] font-extrabold text-[32px] mb-4">
             NoteBook App
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Simple KeepNotes web App using React and Tailwindcss, Backend using a firebase database connection include this app 
            </p>
            <a
              href="https://my-notebook-web.netlify.app/"
              className="text-center text-[#a217fe] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 5 and 6 in one row */}
        <div className="flex flex-col md:flex-col gap-10 mt-10">
          {/* React Weather Pro Project */}
          {/* <div className="w-full md:w-1/2 flex flex-col place-self-end items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#a217fe] font-extrabold text-[32px] mb-4">
              React Weather Pro
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A weather app that shows current weather based on the city
              searched. Built with React.js, utilizing OpenWeatherMap API to
              fetch real-time weather data.
            </p>
            <a
              href="https://weatherfixpro.netlify.app/"
              className="text-[#a217fe] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div> */}

          {/* Landing Pages Bundle */}
          {/* <div className="w-full md:w-1/2 flex flex-col  bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#a217fe] font-extrabold text-[32px] mb-4">
              Landing Pages Bundle
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A collection of landing pages created using HTML, CSS, JavaScript,
              Bootstrap, and Tailwind CSS. Includes multiple responsive and
              engaging layouts.
            </p>
            <a
              href="https://github.com/AMOHAMMEDIMRAN/Amazing-Landing-Page"
              className="text-center text-[#a217fe] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Project;
