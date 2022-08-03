import { useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import './index.css'
import Axios  from 'axios'

export function Login(){

    const[values, setValues] = useState();
    
    const HandleChangeValues = (value) =>{
        setValues(prevValue =>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };

    const HandleClickButton = () =>{
       // Axios.post('https://localhost:3001/register',{
         //   email: values.email,
           // senha:values.senha})
           console.log(values)
           const current = new Date()
           const data = `0${current.getDate()}/0${current.getMonth()+1}/${current.getFullYear()}`
           console.log(data)
        
    };

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

                <FormGroup
                    row
                    tag="fieldset"
                >
                    <legend className="col-form-label col-sm-2">
                        Você é
                    </legend>
                    <Col sm={10}>
                    
                    <FormGroup check>
                        <Input
                            name="userType"
                            type="radio"
                            value={1}
                            onChange={HandleChangeValues}
                         
                        />
                        {' '}
                        <Label check>
                            Leitor
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input
                            name="userType"
                            type="radio"
                            value={2}
                            onChange={HandleChangeValues}
                            
                        />
                        {' '}
                        <Label check>
                            Escritor
                        </Label>
                    </FormGroup>
                    
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