import React from "react";

function About() {
  return (
    <div id="About" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            aliquam error fugiat reiciendis, cum perspiciatis neque laborum in.
            Nostrum quia, illo temporibus perspiciatis esse nobis. Recusandae
            assumenda, dolores rerum possimus laboriosam sed veniam. Ullam
            voluptatibus magnam ad eaque nobis asperiores, veniam itaque
            inventore quasi repudiandae consectetur tempore enim error porro.
          </p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            aliquam error fugiat reiciendis, cum perspiciatis neque laborum in.
            Nostrum quia, illo temporibus perspiciatis esse nobis. Recusandae
            assumenda, dolores rerum possimus laboriosam sed veniam. Ullam
            voluptatibus magnam ad eaque nobis asperiores, veniam itaque
            inventore quasi repudiandae consectetur tempore enim error porro.
          </p>
          <p className="py-2 underline cursor-pointer ">
            {" "}
            Checl Out my Projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img className="rounded-xl"
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
