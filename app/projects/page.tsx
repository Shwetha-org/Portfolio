import Navbar from "../../components/Navbar";

export default function Projects() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>

        {/* IoT Doorbell Project */}
        <div className="border p-6 rounded-lg mb-6 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-2">IoT Doorbell</h2>
          <p>
            Smart doorbell built on a Raspberry Pi with a camera, button, LEDs, and buzzer. 
            Integrates AWS Rekognition for facial recognition–based access control.
          </p>
          <p className="mt-2 font-medium text-gray-600">
            Skills: Raspberry Pi, Python, Flask, OpenCV, AWS Rekognition, GPIO, IoT
          </p>
        </div>

        {/* Add more project cards here */}
      </main>
    </div>
  );
}
