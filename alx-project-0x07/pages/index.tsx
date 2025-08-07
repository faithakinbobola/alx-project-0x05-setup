const Home: React.FC = () => {
  const handleGenerateImage = async () => {
    console.log("Generating Images");
  };
  return (
    <div>
      <div>
        <h1></h1>
        <p></p>

        <div>
          <input 
            type="text"
            placeholder="Enter your prompt here..."
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          />
          <button
            onClick={handleGenerateImage}
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Generate Image
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;