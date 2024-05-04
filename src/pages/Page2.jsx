import {useNavigate} from "react-router-dom";
import {FaTwitter, FaLinkedin, FaGithub} from "react-icons/fa";
import {usePosition} from "../contexts/positionContext";

export const Page2 = () => {
  const navigate = useNavigate();
  const {positionDispatch} = usePosition();
  return (
    <div className="h-screen w-screen p-10 flex items-start justify-between flex-col bg-slate-200">
      <h1 className=" text-4xl mb-2">Page 2</h1>
      <section className=" self-center  flex flex-col items-center">
        <h2 className=" text-3xl font-semibold text-center">
          Hey there{" "}
          <img
            className=" w-10 inline-block"
            src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
            alt="hello gif"
          ></img>
        </h2>
        <p className="text-2xl mb-4 text-center">
          I'm Tejas, an aspiring frontend web developer, currently exploring
          ReactJS ecosystem.
        </p>
        <p className="mb-4 text-lg text-center">
          I am an Engineer by degree, but an enthusiastic web developer by
          passion, looking forward to turn my passion into a full time career
          that I love.
        </p>
        <p className="text-xl font-semibold">My current skills:</p>
        <ul className="my-2 flex">
          <li>
            <img
              src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
              alt="HTML 5"
            />
          </li>
          <li>
            <img
              src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
              alt="CSS 3"
            />
          </li>
          <li>
            <img
              src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"
              alt="JavaScript"
            />
          </li>
          <li>
            <img
              src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              alt="ReactJS"
            />
          </li>
        </ul>
        <p className="mb-4 text-lg">
          I am also exploring{" "}
          <a
            className="hover:underline"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
          >
            TailwindCSS
          </a>
          ,{" "}
          <a
            className="hover:underline"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noreferrer"
          >
            Redux Toolkit
          </a>{" "}
          and{" "}
          <a
            className="hover:underline"
            href="https://reactrouter.com/"
            target="_blank"
            rel="noreferrer"
          >
            React Router
          </a>
          .
        </p>
        <a
          className="hover:underline mb-4"
          href="https://github.com/TejasShekar?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          Click here to checkout my projects I've built so far.
        </a>
        <p className="text-lg pb-2 text-center">You can find me on</p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/TejasShekar"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              className=" hover:text-yellow-600"
              style={{width: "2rem", height: "2rem"}}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/tejasshekar"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin
              className=" hover:text-cyan-700"
              style={{width: "2rem", height: "2rem"}}
            />
          </a>
        </div>
      </section>

      <button
        className=" bg-stone-300 px-2 py-1 rounded text-xl border-2 border-black"
        onClick={() => {
          navigate("/");
          positionDispatch({
            type: "CENTER",
            payload: {border: "5px solid #03a9f4"},
          });
        }}
      >
        Go Back
      </button>
    </div>
  );
};
