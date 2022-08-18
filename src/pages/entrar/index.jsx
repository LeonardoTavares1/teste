import { useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import './index.css'
import Axios  from 'axios'
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate()

    const HandleClickButton = () =>{

        Axios.get()

        if (values.email == 'asda' && values.senha == '123'){
            navigate('/generos', {replace: true})
        }
        else alert('usuario inexistente')
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