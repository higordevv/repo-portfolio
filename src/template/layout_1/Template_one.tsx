import Container from "@app/pages/components/Container ";
import Image from "next/image";
import React, { useState } from "react";
import { DivMain } from "./style";
const TemplateOne = () => {
  const [] = useState();
  return (
    <>
      <Container width={"100vw"}>
        <DivMain>
          <div>
            <h1>Higordevv</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
              delectus nesciunt eaque placeat libero sunt ut ea veritatis
              repudiandae perspiciatis hic molestias, alias aspernatur
              voluptatum, iusto magnam quas rerum deserunt?
            </p>
          </div>
          <aside>
            <Image src="" alt="Logo" />
          </aside>
        </DivMain>
      </Container>
    </>
  );
};

export default TemplateOne;
