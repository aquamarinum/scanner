import React from "react";
import Headline from "../components/Headline";
import Paragraph from "../components/Paragraph";
import TupleList from "../components/TupleList";
import Title from "../components/Title";
import Chart from "../components/Chart";
import ButtonWrapper from "../components/ButtonWrapper";
import Button from "../components/Button";

const fakedata1 = [
  { key: "key", value: "value" },
  { key: "key", value: "value" },
  { key: "key", value: "value" },
  { key: "key", value: "value" },
  { key: "key", value: "value" },
];

const Report = () => {
  return (
    <div className="report">
      <div className="report-page">
        <Headline>Report #123456789</Headline>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis ullam
          aliquam, dignissimos deserunt quam porro delectus quod consequatur
          quibusdam harum, aperiam officia sapiente veniam, voluptatibus nostrum
          recusandae laborum optio sed.
        </Paragraph>
        <div className="list">
          <TupleList data={fakedata1} />
        </div>
        <section>
          <Title>Chapter 1</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            ullam aliquam, dignissimos deserunt quam porro delectus quod
            consequatur quibusdam harum, aperiam officia sapiente veniam,
            voluptatibus nostrum recusandae laborum optio sed.
          </Paragraph>
        </section>
        <section>
          <Chart state="success" value={25} />
        </section>
        <section>
          <Title>Chapter 1</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            ullam aliquam, dignissimos deserunt quam porro delectus quod
            consequatur quibusdam harum, aperiam officia sapiente veniam,
            voluptatibus nostrum recusandae laborum optio sed.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            ullam aliquam, dignissimos deserunt quam porro delectus quod
            consequatur quibusdam harum, aperiam officia sapiente veniam,
            voluptatibus nostrum recusandae laborum optio sed.
          </Paragraph>
        </section>
        <section>
          <Title>Chapter 1</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            ullam aliquam, dignissimos deserunt quam porro delectus quod
            consequatur quibusdam harum, aperiam officia sapiente veniam,
            voluptatibus nostrum recusandae laborum optio sed.
          </Paragraph>
        </section>
        <section>
          <div className="metrics">
            <Chart state="success" value={25} />
            <Chart state="success" value={50} />
            <Chart state="success" value={75} />
          </div>
        </section>
        <section>
          <Title>Chapter 1</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque error
            exercitationem libero soluta natus, vitae odit magni unde
            necessitatibus sapiente molestiae voluptate suscipit, dolorem
            consequatur fugiat. Exercitationem tenetur temporibus aliquam? Quod,
            adipisci? Fugiat delectus consequuntur deserunt? Vitae quidem, nihil
            aut et cumque aliquid repellat suscipit laboriosam fuga? Laboriosam,
            minus fuga deleniti, voluptatum, incidunt aut distinctio ipsam
            officiis omnis quos enim? Atque, repudiandae tempore maxime,
            consequatur blanditiis ut delectus, perferendis obcaecati non
            reiciendis cum repellat. Minima consectetur nemo eum esse quae nisi
            error inventore, corporis amet aut earum eveniet ratione enim?
          </Paragraph>
          <Paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
            commodi tenetur assumenda velit vero nesciunt ducimus rem similique
            voluptate nostrum alias quia magnam, sint blanditiis ea corporis
            distinctio sit repudiandae? Commodi iste, inventore soluta quos nam
            cupiditate architecto. Culpa sed laboriosam similique voluptatum
            perspiciatis adipisci quo nulla quaerat dignissimos ad eaque
            voluptas ipsam, nobis suscipit numquam recusandae magni soluta
            saepe!
          </Paragraph>
        </section>

        <ButtonWrapper>
          <Button onPress={() => {}}>Download</Button>
        </ButtonWrapper>
      </div>
    </div>
  );
};

export default Report;
