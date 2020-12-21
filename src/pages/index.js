import React from "react"
import { Container, FeatureImage, Content, Card } from "../components"

export default function Home() {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <Card 
          date="May 22, 2020"
          title="Lorem ipsum" 
          excerpt="Commodo exercitation aliqua veniam ut proident labore. Aute sit sunt est ut irure nulla id duis ullamco duis quis ea qui. Veniam ad ullamco laboris nostrud velit proident occaecat est. Duis minim aute labore sint consequat enim veniam tempor aliqua officia deserunt ut ipsum fugiat. Anim in officia cillum consequat elit anim ipsum est eiusmod officia reprehenderit eu occaecat do."
          slug="/lorem-ipsum" ></Card>
      </Content>
    </Container>
  )
}
