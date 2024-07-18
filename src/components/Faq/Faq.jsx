import { useState } from "react";
import "./Faq.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Faq = () => {
  const [faq] = useState([
    {
      id: 1,
      title: "What is Debug Media?",
      content:
        "Debug Media is a platform designed to help developers debug and learn about web technologies.",
    },
    {
      id: 2,
      title: "How do I use Debug Media?",
      content:
        "You can use Debug Media by navigating through the various sections using the navigation bar. Each section provides different tools and resources for debugging and learning.",
    },
    {
      id: 3,
      title: "Is Debug Media free?",
      content: "Yes, Debug Media is completely free to use.",
    },
    {
      id: 4,
      title: "Can I contribute to Debug Media?",
      content:
        "Yes, you can contribute to Debug Media by submitting your own debugging tips and resources. Visit the 'Contribute' section for more information.",
    },
  ]);

  const [currentId, setCurrentId] = useState("");

  const displayContent = (id) => {
    setCurrentId((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="faq-component">
      <div className="faq-box">
        <div className="img">
          <img src="../../assets/img/image.png" alt="" />
        </div>
        <h1 className="faq-header">FAQ</h1>

        {faq.map((data) => (
          <div key={data.id}>
            <button
              className="faq-title"
              onClick={() => displayContent(data.id)}
            >
              {data.title}
              <span>
                {data.id === currentId ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </button>
            {data.id === currentId && (
              <div className="faq-content">
                <p>{data.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
