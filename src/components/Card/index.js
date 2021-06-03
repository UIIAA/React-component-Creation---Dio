import {useState} from 'react';
import Button from '../Button'

const Card = () => {

    const [valor, setValor] = useState(0);

    function Adicionar() {
        setValor(valor + 1);
    }
    function Remover() {
        setValor(valor - 1);
    }


    return(
        <div className="card">
            <div className="card-header">
                Teste Testador
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Button 
                    className="btn btn-primary"
                    onClick={Adicionar}
                >
                    Adicionar
                </Button>
                <Button 
                className="btn btn-danger"
                onClick={Remover}
                >
                    Remover
                </Button>
                <p>{valor}</p>
            
            </div>
        </div>
    )
}

export default Card;