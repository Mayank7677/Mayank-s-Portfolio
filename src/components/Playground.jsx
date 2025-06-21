import React from "react";
import hms1 from "../assets/hms-1.png";
import chat1 from "../assets/chat2.png";
import img1 from "../assets/img2.png";

const Playground = () => {
  return (
    <div>
      <p className="text-xl sm:text-3xl lg:text-4xl text-center">
        Welcome. A glimpse into Mayank’s journey —{" "}
        <br className="hidden lg:block" /> from clean UIs to real-world apps,
        each project shaped by learning and code.
      </p>

      <div className="mt-30 md:mt-50 flex flex-col gap-30 md:gap-50">
        <a href="https://hotelmanagement-bxyq.onrender.com">
          <div>
            <div>
              <img
                className="min-h-50 object-cover rounded-4xl md:rounded-[50px]"
                src={hms1}
                alt=""
              />
            </div>

            <div>
              <div className="flex gap-3 md:gap-8 items-center">
                <p className="text-4xl sm:text-5xl md:text-6xl">StaySphere</p>
                <img
                  className="h-10 md:h-20 rotate-230"
                  src="https://www.ngan-nguyen.com/images/Visual-DownArrow.svg"
                  alt=""
                />
              </div>

              <p className="mt-3 text-neutral-400 sm:text-lg">
                A full-stack MERN app for managing hotel bookings with admin and
                user panels. Features include JWT auth, role-based access, image
                uploads, email notifications, analytics dashboard, and a
                responsive dark/light mode UI.
              </p>
            </div>
          </div>
        </a>

        <a href="https://chatapp-d4yb.onrender.com">
          <div>
            <div>
              <img
                className="min-h-50 object-cover rounded-4xl md:rounded-[50px]"
                src={chat1}
                alt=""
              />
            </div>

            <div>
              <div className="flex gap-3 md:gap-8 items-center">
                <p className="text-4xl sm:text-5xl md:text-6xl">Vibe Room</p>
                <img
                  className="h-10 md:h-20 rotate-230"
                  src="https://www.ngan-nguyen.com/images/Visual-DownArrow.svg"
                  alt=""
                />
              </div>

              <p className="mt-3 text-neutral-400 sm:text-lg">
                A MERN stack chat application with real-time messaging powered
                by Socket.IO. Includes JWT authentication, user management,
                responsive UI, and smooth user experience for private chats.
              </p>
            </div>
          </div>
        </a>

        <a href="https://bgremoval-frontend.onrender.com">
          <div>
            <div>
              <img
                className="min-h-50 object-cover rounded-4xl md:rounded-[50px]"
                src={img1}
                alt=""
              />
            </div>

            <div>
              <div className="flex gap-3 md:gap-8 items-center">
                <p className="text-4xl sm:text-5xl md:text-6xl">
                  AI Image Inhancer
                </p>
                <img
                  className="h-10 md:h-20 rotate-230"
                  src="https://www.ngan-nguyen.com/images/Visual-DownArrow.svg"
                  alt=""
                />
              </div>

              <p className="mt-3 text-neutral-400 sm:text-lg">
                The AI Image Enhancer is a SaaS web app built with the MERN
                stack and ClipDrop AI. It lets users remove backgrounds and
                enhance images instantly. With Razorpay integration for payments
                and secure auth, it's perfect for creators needing quick,
                high-quality image edits.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Playground;
