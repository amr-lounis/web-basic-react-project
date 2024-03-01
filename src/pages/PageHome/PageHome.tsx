import { myNotify } from "@/utils/components/MyNotify";
import { Captcha } from "@U/components/MyCaptcha";

export default function PageHome() {
  return (
    <div className="h-screen flex flex-col justify-center my-10">
      <hr></hr> {/* --------------------------------------------- */}

      <div className="flex justify-center  m-10">"PageHome"</div>

      <hr></hr> {/* --------------------------------------------- */}
      <div className="flex justify-center m-10">
        <Captcha validate={(res) => {
          if (res) { alert("ok") }
          else { alert("error") }
        }}></Captcha>
      </div>

      <hr></hr> {/* --------------------------------------------- */}
      <div className="flex justify-center m-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            myNotify("test", "success")
          }}>
          RUN
        </button>
      </div>
      <hr></hr> {/* --------------------------------------------- */}

      <h1 className="flex justify-center m-10 text-mainColor font-bold underline">
        tailwind : Hello world!
      </h1>

      <hr></hr> {/* --------------------------------------------- */}

      <div className="flex justify-center items-center m-10 container p-5 bg-red-600 mx-auto flex-col">
        <h1 className="w-[50%] bg-cyan-300 p-[50px]" >e1</h1>
        <h1 className="w-full bg-green-600">e2</h1>
        <h1>e3</h1>
        <h1>e4</h1>
      </div>

      <hr></hr> {/* --------------------------------------------- */}
      <hr></hr> {/* --------------------------------------------- */}
      <hr></hr> {/* --------------------------------------------- */}
      <hr></hr> {/* --------------------------------------------- */}

    </div >
  );
}
