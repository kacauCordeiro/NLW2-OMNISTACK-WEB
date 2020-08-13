import React, { useState, FormEvent } from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Select from '../../components/Select';
import Input from '../../components/Input';
import api from '../../services/api';

function TeacherList(){
    const [teachers, setTeachers] = useState([]);
    const [subject, setSubject] = useState('');
    const [weekday, setWeekday] = useState('');
    const [time, setTime] = useState('');
    

    async function searchTeachers(e: React.FormEvent){
        e.preventDefault();
        
       const response = await api.get('classes', {
           params: {
               subject,
               weekday,
               time
           }
        });

        console.log(response.data)
        setTeachers(response.data)
    }

    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis">
            <form id="search-teachers" onSubmit={searchTeachers}>
             <Select name="subject" label="Matéria" 
             value={ subject }
             onChange={(e) => {setSubject(e.target.value)}}
             options = {[
                       { value: "Artes", label: 'Artes'},
                       { value: "Biologia", label: 'Biologia'},
                       { value: "Ciências", label: 'Ciências'},
                       { value: "Educação física", label: 'Educação física'},
                       { value: "Física", label: 'Física'},
                       { value: "Geografia", label: 'Geografia'},
                       { value: "História", label: 'História'},
                       { value: "Matemática", label: 'Matemática'},
                       { value: "Português", label: 'Português'},
                       { value: "Química", label: 'Química'},
                       { value: "Programação", label: 'Programação'},
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
                    <Select name="weekday" label="Dia da semana" 
                    value={ weekday }
                    onChange={(e) => {setWeekday(e.target.value)}}
                    options = {[
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
                    <Input name="time" label="Hora" id="time" type="time" 
                    value={ time }
                    onChange={(e) => {setTime(e.target.value)}}/>
                    {/* <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input name="time" id="time" type="time"/>
                    </div> */}
                    <button type="submit">Filtrar</button>
                </form>
            </PageHeader>
            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher}/>;
                })}
            </main>
        </div>
        
    );
}

export default TeacherList;