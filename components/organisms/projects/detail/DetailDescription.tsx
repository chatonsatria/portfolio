import ButtonLinkPrimary from "../../../atom/buttons/ButtonLinkPrimary";

export default function DetailDescription(props: { url: string }) {
  const { url } = props;
  return (
    <section data-aos="fade-right" className="flex flex-col col-span-2 gap-y-8">
      {/* description */}
      <div className="inline-flex justify-between items-center">
        <p className="text-2xl font-semibold">Description</p>
        <ButtonLinkPrimary buttonText="Project Demo" href={url ? url : ""} />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias illo
        dolorum impedit enim et ipsum rem incidunt neque? Ab laboriosam sapiente
        eius laborum, minima dolorum sed itaque, aliquid, tenetur odit
        laudantium eum ducimus? Perferendis incidunt, eveniet eligendi modi quos
        animi similique beatae inventore minima officia aspernatur, consequuntur
        eum cum fugiat voluptas voluptates qui aliquid sunt vero adipisci!
        Dignissimos aut nihil, facere labore nulla corporis exercitationem,
        impedit, laudantium atque ipsum expedita rerum a quisquam!. <br />{" "}
        <br /> Animi velit magni quibusdam unde quisquam labore enim
        necessitatibus expedita esse accusamus ducimus illo, nihil ex tenetur
        excepturi! Sit, quae nisi. Blanditiis sapiente corrupti cumque explicabo
        quae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
        natus quae, maxime obcaecati voluptas officiis quo vel pariatur, harum
        quibusdam ipsum doloremque tempora ab. Quis similique, repellat
        provident maiores asperiores nemo excepturi quae consequuntur voluptate
        dolore, iusto quos illo sequi odio eius earum. Dolor, et voluptates
        saepe iste aliquam dolore? <br /> <br /> Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Nemo qui ex illum neque provident eos iste
        ad, repudiandae debitis veritatis delectus, numquam nam aliquam ipsa?
        Officiis laborum saepe, dolore suscipit alias totam illum modi fugit
        ratione qui quia laudantium in, ut, assumenda nemo eius sit omnis
        deserunt consequuntur culpa odit.
      </p>
    </section>
  );
}
