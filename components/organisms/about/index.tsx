import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [hover, setHover] = useState(false);
  return (
    <section className="flex flex-col gap-y-20">
      {/* pict and desc */}
      <div className="flex flex-col md:flex-row gap-x-8 items-center md:items-start">
        <div className="flex w-full max-w-[300px]">
          <Image
            src="/next/developer-light.svg"
            alt=""
            width={300}
            height={300}
            layout={"fixed"}
            objectFit={"cover"}
          />
        </div>
        <div className="flex flex-col w-full md:w-3/4 gap-y-4 mt-11">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus molestias sint cum cumque nulla dolorem placeat,
            perferendis quo sit asperiores nisi cupiditate quibusdam laudantium
            accusamus corporis vel rem? Asperiores sunt, aperiam quaerat
            voluptatem veniam consequatur inventore dignissimos deleniti
            adipisci temporibus sit recusandae accusantium molestiae at commodi
            et minima explicabo! Hic quae magnam quia vitae labore sunt nisi,
            necessitatibus laudantium amet ad eum repellat minus expedita
            numquam? Sunt, porro optio. Laboriosam quas, reprehenderit
            repudiandae architecto ducimus minus repellendus assumenda fugit sed
            non sapiente ipsa aliquid autem sit nulla ab veniam sunt. Tenetur
            repellendus vel, aliquam voluptatum reiciendis modi unde? Sed,
            ullam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus molestias sint cum cumque nulla dolorem placeat,
            perferendis quo sit asperiores nisi cupiditate quibusdam laudantium
            accusamus corporis vel rem? Asperiores sunt, aperiam quaerat
            voluptatem veniam consequatur inventore dignissimos deleniti
            adipisci temporibus sit recusandae accusantium molestiae at commodi
            et minima explicabo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus molestias sint cum cumque nulla dolorem placeat,
            perferendis quo sit asperiores nisi cupiditate quibusdam laudantium
            accusamus corporis vel rem? Asperiores sunt, aperiam quaerat
            voluptatem veniam consequatur inventore dignissimos deleniti
            adipisci temporibus sit recusandae accusantium molestiae at commodi
            et minima explicabo!
          </p>
        </div>
      </div>
      {/* quick skill and education intro */}
      <div className="flex flex-col md:flex-row shadow-md rounded-md bg-white dark:bg-[#172e31]">
        {/* designer */}
        <div className="flex flex-col p-8 w-full items-center">
          <div className="flex w-20 h-20 rounded-full bg-slate-100 dark:bg-[#13282B] text-[#172e31] dark:text-white">
            <svg
              className="w-10 h-10 m-auto"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 2.66667H22.875C23.2875 2.66667 23.625 3.00762 23.625 3.42857C23.625 3.84952 23.2875 4.19048 22.875 4.19048H21V6.09524C21 6.51429 20.6625 6.85714 20.25 6.85714C19.8375 6.85714 19.5 6.51429 19.5 6.09524V4.19048H17.625C17.2125 4.19048 16.875 3.84952 16.875 3.42857C16.875 3.00762 17.2125 2.66667 17.625 2.66667H19.5V0.761905C19.5 0.340952 19.8375 0 20.25 0C20.6625 0 21 0.340952 21 0.761905V2.66667ZM13.0219 5.9381L23.2125 10.5762C23.6906 10.7952 24 11.2762 24 11.8095C24 12.3429 23.6906 12.8238 23.2125 13.0429L13.0219 17.681C12.6609 17.8286 12.3516 17.9048 12 17.9048C11.6484 17.9048 11.2969 17.8286 10.9781 17.681L0.785625 13.0429C0.307547 12.8238 1.40625e-05 12.3429 1.40625e-05 11.8095C1.40625e-05 11.2762 0.307547 10.7952 0.785625 10.5762L10.9781 5.9381C11.2969 5.79048 11.6484 5.71429 12 5.71429C12.3516 5.71429 12.6609 5.79048 13.0219 5.9381ZM1.74703 11.8095L11.5875 16.2905C11.6766 16.3524 11.8172 16.381 12 16.381C12.1406 16.381 12.2812 16.3524 12.4125 16.2905L22.2516 11.8095L12.4125 7.32857C12.2812 7.26667 12.1406 7.2381 12 7.2381C11.8172 7.2381 11.6766 7.26667 11.5875 7.32857L1.74703 11.8095ZM1.74703 17.9048L11.5875 22.3857C11.6766 22.4476 11.8172 22.4762 12 22.4762C12.1406 22.4762 12.2812 22.4476 12.4125 22.3857L22.2516 17.9048L20.6953 17.1952C20.3156 17.0238 20.1469 16.5714 20.3156 16.1857C20.4844 15.8048 20.9297 15.6333 21.3047 15.8048L23.2125 16.6714C23.6906 16.8905 24 17.3714 24 17.9048C24 18.4381 23.6906 18.919 23.2125 19.1381L13.0219 23.7762C12.6609 23.9238 12.3516 24 12 24C11.6484 24 11.2969 23.9238 10.9781 23.7762L0.785625 19.1381C0.307547 18.919 0 18.4381 0 17.9048C0 17.3714 0.307547 16.8905 0.785625 16.6714L2.69344 15.8048C3.07125 15.6333 3.51516 15.8048 3.68437 16.1857C3.85359 16.5714 3.68484 17.0238 3.30656 17.1952L1.74703 17.9048Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        {/* frontend */}
        <div className="flex flex-col p-8 w-full items-center">
          <div className="flex w-20 h-20 rounded-full bg-slate-100 dark:bg-[#13282B] text-[#172e31] dark:text-white">
            <svg
              className="w-10 h-10 m-auto"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.7 6.20893L11.7 11.3518C11.8446 11.5125 12 11.7482 12 12C12 12.2518 11.8446 12.4875 11.7 12.6482L5.7 17.7911C5.34107 18.1018 4.8 18.0589 4.49196 17.7C4.18393 17.3411 4.22571 16.8 4.58518 16.4946L9.825 12L4.58518 7.50536C4.22571 7.2 4.18393 6.65893 4.49196 6.3C4.8 5.94107 5.34107 5.89821 5.7 6.20893ZM19.7143 17.1429C20.1857 17.1429 20.5714 17.5286 20.5714 18C20.5714 18.4714 20.1857 18.8571 19.7143 18.8571H11.1429C10.6714 18.8571 10.2857 18.4714 10.2857 18C10.2857 17.5286 10.6714 17.1429 11.1429 17.1429H19.7143ZM20.5714 0C22.4625 0 24 1.53482 24 3.42857V20.5714C24 22.4625 22.4625 24 20.5714 24H3.42857C1.53482 24 0 22.4625 0 20.5714V3.42857C0 1.53482 1.53482 0 3.42857 0H20.5714ZM20.5714 1.71429H3.42857C2.48196 1.71429 1.71429 2.48196 1.71429 3.42857V20.5714C1.71429 21.5196 2.48196 22.2857 3.42857 22.2857H20.5714C21.5196 22.2857 22.2857 21.5196 22.2857 20.5714V3.42857C22.2857 2.48196 21.5196 1.71429 20.5714 1.71429Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        {/* education */}
        <div className="flex flex-col p-8 w-full items-center">
          <div className="flex w-20 h-20 rounded-full bg-slate-100 dark:bg-[#13282B] text-[#172e31] dark:text-white">
            <svg
              className="w-10 h-10 m-auto"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 17.25V2.25C24 1.00734 22.8482 0 21.4286 0H4.28571C1.91893 0 0 1.67906 0 3.75V21C0 22.657 1.53482 24 3.42857 24H23.1429C23.6166 24 24 23.6646 24 23.25C24 22.8354 23.6143 22.5 23.1429 22.5H22.2857V19.3617C23.2821 19.05 24 18.225 24 17.25ZM1.71429 3.75C1.71429 2.50734 2.86554 1.5 4.28571 1.5H5.14286V18H3.42857C2.80125 18 2.22054 18.1589 1.71429 18.4172V3.75ZM20.5714 22.5H3.42857C2.48357 22.5 1.71429 21.8269 1.71429 21C1.71429 20.1731 2.48357 19.5 3.42857 19.5H20.5714V22.5ZM21.4286 18H6.85714V1.5H21.4286C21.9 1.5 22.2857 1.83609 22.2857 2.25V17.25C22.2857 17.6625 21.9 18 21.4286 18ZM18.8571 6H10.2857C9.81429 6 9.42857 6.3375 9.42857 6.75C9.42857 7.1625 9.81429 7.5 10.2857 7.5H18.8571C19.3309 7.5 19.7143 7.16456 19.7143 6.75C19.7143 6.33544 19.3286 6 18.8571 6ZM18.8571 10.5H10.2857C9.81429 10.5 9.42857 10.8375 9.42857 11.25C9.42857 11.6625 9.81429 12 10.2857 12H18.8571C19.3309 12 19.7143 11.6646 19.7143 11.25C19.7143 10.8354 19.3286 10.5 18.8571 10.5Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
