import { useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import './index.css'
import Axios  from 'axios'

/* Essa página é quase a mesma coisa da pagina "Registro". Só explicarei sobre o axios aqui. 

por hoje é só, darei prosseguimento outro dia.*/

export function Login(){

    const[values, setValues] = useState();
    
    const HandleChangeValues = (value) =>{
        setValues(prevValue =>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };

    const HandleClickButton = () =>{
    }

    return(
        
        <>
        <div className='page'>
        <div className='central'>
            <Form>

                <FormGroup row>
                    <Col sm={12}>
                        <Input
                            id="email"
                            name="email"
                            placeholder="Digite seu e-mail"
                            type="email"
                            onChange={HandleChangeValues}
                        />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col sm={12}>
                        <Input
                            id="senha"
                            name="senha"
                            placeholder="Digite sua senha"
                            type="password"
                            onChange={HandleChangeValues}
                        />
                    </Col>
                </FormGroup>

                <Button
                    block
                    color="light"
                    size=""
                    onClick={() => HandleClickButton()}
                >Enviar
                </Button>
            </Form>
        </div>
        </div>
        </>
    )
}