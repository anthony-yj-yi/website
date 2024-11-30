import React, { useState, useEffect, useRef } from "react";

export default function SpinWheel() {
  const canvasRef = useRef(null);
  const [inputs, setInputs] = useState(["Heads", "Tails"]);
  const [newInput, setNewInput] = useState("");
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [warning, setWarning] = useState(null)

  useEffect(() => {
    const drawWheel = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const context = canvas.getContext("2d");
      if (!context) return;

      const width = canvas.width;
      const height = canvas.height;
      const radius = Math.min(width, height) / 2 - 1;
      const centerX = width / 2;
      const centerY = height / 2;
      const totalSections = inputs.length;
      const anglePerSection = (2 * Math.PI) / totalSections;

      context.clearRect(0, 0, width, height);
      context.save();
      context.translate(centerX, centerY);
      context.rotate(rotation);
      context.translate(-centerX, -centerY);

      inputs.forEach((input, index) => {
        const startAngle = index * anglePerSection - Math.PI / 2;
        const endAngle = startAngle + anglePerSection;
        const angle = totalSections === 1 ? 0 : startAngle + anglePerSection / 2;

        context.beginPath();
        context.moveTo(centerX, centerY);
        context.arc(centerX, centerY, radius, startAngle, endAngle);
        context.fillStyle = `hsl(${(index * 360) / totalSections}, 70%, 70%)`;
        context.fill();
        context.save();

        const canvasX = totalSections === 1 ? centerX : centerX + Math.cos(angle) * radius * 0.6;
        const canvasY = totalSections === 1 ? centerY - radius / 2 : centerY + Math.sin(angle) * radius * 0.6;
        context.translate(canvasX, canvasY);

        const rotateAngle = (angle > Math.PI / 2 && angle < (3 * Math.PI) / 2) ? angle + Math.PI : angle;
        context.rotate(rotateAngle);

        context.textAlign = "center";
        context.fillStyle = "#000";
        context.font = "16px Arial";
        context.fillText(input, 0, 0);
        context.restore();
      });
      context.restore();

      const arrowHeight = 45;
      const arrowWidth = 30;

      context.beginPath();
      context.moveTo(centerX, centerY - radius + arrowHeight);
      context.lineTo(centerX - arrowWidth / 2, centerY - radius);
      context.lineTo(centerX + arrowWidth / 2, centerY - radius);
      context.closePath();
      context.fillStyle = "black";
      context.fill();

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      context.stroke();
    };

    drawWheel();
  }, [inputs, rotation]);

  const handleAddInput = () => {
    if (!newInput.trim()) {
      setWarning("Enter in a section name to add to the wheel.");
      return;
    }
    if (spinning) {
      setWarning("Wait until the wheel has stopped before adding.");
      return;
    }
    setInputs((prev) => [...prev, newInput.trim()]);
    setWarning(null)
    setNewInput("");
  };

  const handleDeleteInput = (target, index) => {
    if (spinning) {
      setWarning("Wait until the wheel has stopped before removing.");
      return;
    }
    const newInputs = [...inputs]
    newInputs.splice(index, 1)
    setInputs(newInputs)
  };

  const handleUpdateInput = (target, newValue) => {
    if (spinning) {
      setWarning("Wait until the wheel has stopped before editing.");
      return;
    }
    const newInputs = [...inputs]
    newInputs[newInputs.findIndex((input) => input === target)] = newValue
    setInputs(newInputs)
  }

  const handleSpin = () => {
    if (spinning || inputs.length === 0) return;

    setSpinning(true);
    const spinDuration = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;
    const deceleration = 0.99;
    let angleSpeed = 0.3;
    let startTime;

    const spin = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (elapsed < spinDuration) {
        if (angleSpeed > 0.02) angleSpeed *= deceleration;
        setRotation((prev) => (prev + angleSpeed) % (2 * Math.PI));
        requestAnimationFrame(spin);
      } else {
        setSpinning(false);
        setWarning(null)
      }
    };
    requestAnimationFrame(spin);
  };

  return (
    <div className="flex flex-col md:flex-row w-full px-[20%] py-0 justify-evenly items-center space-y-8">
      <div className="flex-col space-y-8">
        <div>
          <p className="text-black dark:text-white">{warning ? warning : "Add to the wheel and spin!"}</p>
        </div>
        <div className="canvas-container" style={{ position: "relative" }}>
          <canvas className="-z-10" id="wheel-canvas" ref={canvasRef} width={300} height={300} />
          <button
            className="bg-black text-white z-0 absolute w-[30%] h-[30%] cursor-pointer rounded-full border-black"
            id="spin-button"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            onClick={handleSpin}
          >
            SPIN
          </button>
        </div>
        <div className="flex flex-row items-center">
          <input
            type="text"
            value={newInput}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
          focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
          dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter an item to add to the wheel."
            onChange={(e) => setNewInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") handleAddInput() }}
          />
          <button type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium 
          rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 min-w-fit"
            onClick={handleAddInput}
          >Add Section</button>

        </div>
      </div>

      <div>
        <ul style={{ listStyleType: "none" }}>
          {inputs.map((input, index) => (
            <li key={index} className="py-1">
              <div className="flex flex-row items-center">
                <input
                  type="text"
                  id={`input-${index}`}
                  defaultValue={input}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white min-w-40
                dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onKeyDown={(e) => { if (e.key === "Enter") handleUpdateInput(input, e.target.value) }}
                />
                <button type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg 
                  text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 min-w-fit"
                  onClick={(e) => {
                    const inputValue = document.querySelector(`#input-${index}`).value;
                    handleUpdateInput(input, inputValue)
                  }}>
                  Edit
                </button>
                <button type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg
                  text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  onClick={() => handleDeleteInput(input, index)}>
                  Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
