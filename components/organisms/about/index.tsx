import Image from "next/image";
import Introduction from "./Introduction";

export default function About() {
  return (
    <section className="flex flex-col gap-y-20">
      {/* pict and desc */}
      <div
        data-aos="fade-right"
        className="flex flex-col lg:flex-row gap-x-8 items-center lg:items-start"
      >
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
        <div className="flex flex-col w-full lg:w-3/4 gap-y-4 mt-11 lg:mt-0">
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
      <Introduction />
    </section>
  );
}
