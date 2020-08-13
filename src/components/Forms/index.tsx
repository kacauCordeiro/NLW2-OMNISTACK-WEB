import React from 'react'
import './styles.css';
import Input from '../Input';
import Select from '../Select';
function Forms() {
    return(
        <form id="search-teachers">
             <Select name="subject" label="Matéria" 
             options = {[
                       { value: "1", label: 'Artes'},
                       { value: "2", label: 'Biologia'},
                       { value: "3", label: 'Ciências'},
                       { value: "4", label: 'Educação física'},
                       { value: "5", label: 'Física'},
                       { value: "6", label: 'Geografia'},
                       { value: "7", label: 'História'},
                       { value: "8", label: 'Matemática'},
                       { value: "9", label: 'Português'},
                       { value: "10", label: 'Química'},
                    ]}></Select>
                    {/* <div className="select-block">
                        <label htmlFor="subject">Matéria</label>
                        <select name="subject" id="subject">
                            <option value="">Selecione uma opção</option>
                            <option value="1">Artes</option>
                            <option value="2">Biologia</option>
                            <option value="3">Ciências</option>
                            <option value="4">Educação física</option>
                            <option value="5">Física</option>
                            <option value="6">Geografia</option>
                            <option value="7">História</option>
                            <option value="8">Matemática</option>
                            <option value="9">Português</option>
                            <option value="10">Química</option>
                        </select> */}
                    {/* </div> */}
                    <Select name="weekday" label="Dia da semana" options = {[
                    { value: "0", label: 'Domingo' },
                    { value: "1", label: 'Segunda-feira' },
                    { value: "2", label: 'Terça-feira' },
                    { value: "3", label: 'Quarta-feira' },
                    { value: "4", label: 'Quinta-feira' },
                    { value: "5", label: 'Sexta-feira' },
                    { value: "6", label: 'Sábado' },
                    ]}></Select>
{/* 
                    <div className="select-block">
                        <label htmlFor="weekday">Dia da semana</label>
                        <select name="weekday" id="weekday">
                            <option value="0">Domingo</option>
                            <option value="1">Segunda-feira</option>
                            <option value="2">Terça-feira</option>
                            <option value="3">Quarta-feira</option>
                            <option value="4">Quinta-feira</option>
                            <option value="5">Sexta-feira</option>
                            <option value="6">Sábado</option>
                        </select>
                    </div> */}
                    <Input name="time" label="Hora" id="time" type="time"/>
                    {/* <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input name="time" id="time" type="time"/>
                    </div> */}
                    <button type="submit" >Filtrar</button>
                </form>
    )
}



export default Forms;