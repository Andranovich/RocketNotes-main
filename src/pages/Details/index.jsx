import { Container, Links, Content } from './styles';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function Details () {

  /* Conteúdo da interface dentro do return */
  return(
    // Cada return retorna um único elemento, independente de quantos tenham dentro dele
    <Container>
      <Header/>

      <main>
        <Content>      

        <ButtonText title="Excluir nota"/>

        <h1>Introdução ao React</h1>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, architecto, asperiores officia ullam iure optio nam temporibus ipsum voluptatum laboriosam illo qui autem aut vel modi, ad exercitationem blanditiis eveniet.</p>

        <Section title="Links úteis">
          <Links>
            <li><a href="#">Link 1</a></li>
          </Links>
        </Section>

        <Section title="Marcadores">
          <Tag title="express"/>
          <Tag title="nodejs"/>        
        </Section>


        <Button title="Voltar"/>

        </Content>
      </main>
    </Container>
  )
}