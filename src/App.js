import Item from './components/Item';
import Card from './components/Card';


const App = () => {
  return (
    <div>
        <h1>Minha primeira Aplicação com React</h1>
        <ul>
            <Item>
              Teste 1
            </Item>
            <Item>
              Teste 2
            </Item>
            <Item>
              Teste 3
            </Item>
        </ul>
        <Card/>
    </div>
  
    )
}

export default App;