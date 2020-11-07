import React,{useState} from 'react';
import { Container, Row, Col, Spinner, Button, Alert } from 'react-bootstrap';
import {isMutantPromise} from '../service/api'

function Home()
{
  const [adnrow, setAdnrow] = useState('');
  const [mensajeError, setMensajeError] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [showError, setshowError] = useState(false);
  const [show, setShow] = useState(false);
  const [secuencias, setSecuencias] = useState([]);

        let _handleChange = (e) =>{
          const value = e.target.value;
          const name = e.target.name;
          if(e.target.validity.valid) 
          {  
           setAdnrow(value); 
          } 
          console.log(adnrow);    
        }

        let _handleAddClick = () =>{

            if(adnrow.length < 4)
            {
              setMensaje("cantidad letras debe ser mayor a 4");
              setshowError(true);
            }
            else
            {
                setSecuencias(arr => [...arr, adnrow]);             
            }                  
        }

        let _handleDelete = () => {
           setSecuencias([]); //reseteo
        }

        let _handleCheck = () =>{

          console.log("handleChek")
          isMutantPromise(secuencias)
           .then(resultado =>{ 
               console.log(resultado)
               resultado ? setMensaje("Es mutante") : setMensaje("Es humano");
               setShow(true);

              })
           .catch(error => {
                        console.error(error)
                        setMensajeError(error.toString());
                        setshowError(true);
              }
            );
        }

        

        return(
           <Container>
              <Alert  show={showError} variant='danger' onClose={() => setshowError(false)} dismissible>
                   {mensajeError}
               </Alert>
               <Alert  show={show} variant='success' onClose={() => setShow(false)} dismissible>
                 {mensaje}
              </Alert>
              <Row>
                <Col>
                      <label>Ingresar secuencia ADN (Deben ser solo letras mayusculas A,T,C,G)</label><br/>
                      <input type="text" name="secuencia" className="elemento" pattern="[A-Z]*" value={adnrow} onChange={_handleChange} />
                      <Button  onClick={_handleAddClick} variant="primary">Agregar secuencia</Button>
                      
                </Col>
                <Col>
                      <Button  onClick={_handleCheck} variant="primary">Comprobar ADN</Button> - 
                      <Button  onClick={_handleDelete} variant="primary">Borrar secuencias</Button>
                      <ul>
                        Secuencias:
                      {secuencias ? secuencias.map(adn => <li>{adn}</li>) : ""}
                      </ul>
                </Col>
              </Row>

            </Container>


          )       
}

export default Home