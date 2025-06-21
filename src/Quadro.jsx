import Forma from "./Forma";
import './Quadro.css';

function Quadro(props){
    function mostrarForma(i){
        return (
            <Forma
                key={i}
                value={props.formas[i]}
                onClick={() => props.onClick(i)}
            />
        );
    }

    return (
        <div>
            <div className="linhaDoQuadro">
                {mostrarForma(0)}
                {mostrarForma(1)}
                {mostrarForma(2)}
            </div>
            <div className="linhaDoQuadro">
                {mostrarForma(3)}
                {mostrarForma(4)}
                {mostrarForma(5)}
            </div>
            <div className="linhaDoQuadro">
                {mostrarForma(6)}
                {mostrarForma(7)}
                {mostrarForma(8)}
            </div>
        </div>
    );
}

export default Quadro;