

const TailwindCSSComponent = () => {
    return (
        <div>
            <div className="w-[70vw] h-[80vh] bg-yellow-500">
          <div className="flex justify-content p-5 gap-5">
            {/* <button onClick={handleHTML} className="btn btn-sm">
              Theory
            </button>
            <button onClick={handleBackendSetup} className="btn btn-sm">
              xyz
            </button>
            <button onClick={handleReactRouter} className="btn btn-sm">
              Load Calculation
            </button> */}
            <button className="btn btn-sm"></button>
          </div>
          <img src="./public/vegetables/carrot.png"></img>
          <h1 className="text-3xl text-center font-bold">Tailwindcss</h1>
          <p>Tailwind CDN</p>
          <p>Tailwind Installation</p>
          <p>How Tailwind works</p>
          <p>Tailwind Responsiveness</p>
          <p>Tailwind Font</p>
          <p>Tailwind Gradient</p>
          <p>Tailwind Width</p>
          <p>flex, flex-col, gap-4, justify-center,justify-between, justify-end, items-center, flex-wrap, flex-wrap-reverse</p>
          <p>grid, grid-cols-1 -grid-cols-12, gap-4</p>
        </div>
        </div>
    );
};

export default TailwindCSSComponent;