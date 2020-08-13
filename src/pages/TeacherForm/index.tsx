import React, { useState, FormEvent } from 'react'
import './styles.css';
import { useHistory } from 'react-router-dom'
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg'
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import api from '../../services/api';


function TeacherForm(){
    const history = useHistory();
    //Lidando com formulários, criando um estado para cada input
    const [name , setName] = useState('');
    const [avatar , setAvar] = useState('');
    const [whatsapp , setWhatsApp] = useState('');
    const [bio , setBio] = useState('');


    const [subject , setSubject] = useState('');
    const [cost , setCost] = useState('');


    // APÓS A CRIAÇÃO A VARIÁVEL NÃO PODE SER ALTERADA - ENTÃO USAMOS O CONCEITO DE ESTADO
    const [scheduleItems, setScheduleItems] = useState([
        { weekday: 0, from: '', to: ''}
    ]);

    function addNewScheduleItem() {
        // A FUNÇÃO DE SETSCHECULE FAZ O COPY DOS ITENS DO ARRAY SCHEDULEITEMS E INSERE UMA NOVA INFORMAÇÃO.
        setScheduleItems([
            ...scheduleItems,
            { weekday: 0, from: '', to: ''
            }

        ]);
    }
    // setScheduleItemValue (0, weekday, 2)

    function setScheduleItemValue(position: number,field: string, value: string){
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position){
                return {...scheduleItem, [field]: value};
            }

            return scheduleItem;
        });

        setScheduleItems(updatedScheduleItems);
    }

    

    // FUNCTION PARA CRIAÇÃO 
    function handleCreateClass(e:  React.FormEvent){

        e.preventDefault();
        console.log({name, avatar, whatsapp, bio, subject, cost, scheduleItems});

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(()=>{
            alert('cadastro realizado com sucesso!');

            history.push('/');
        }).catch(() => {
            alert('Erro no cadastro!');
        });
    }


    return(
        <div id="page-teacher-form" className="container">
        <PageHeader title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher esse formulário de inscrição">
        </PageHeader>

        <main>
            <form onSubmit={handleCreateClass}>
                <fieldset>
                <legend>Seus dados</legend>

            {/* IMPORTTANTE: Para capturar o valor dentro do evento é utilizado o e.target.value */}
            <Input name="name" label="Nome completo" id="name" type="text" value={ name } onChange={(e) => {setName(e.target.value)}}/>
            {/* <div className="input-block">
                        <label htmlFor="name">Nome completo</label>
                        <input type="text" name="name" id="name"/>
            </div> */}
            <Input name="avatar" label="Link da sua foto" id="avatar" type="url" value={ avatar } onChange={(e) => {setAvar(e.target.value)}}/>
                    {/* <div className="input-block">
                        <label htmlFor="avatar">Link da sua foto</label>
                        <input type="url" name="avatar" id="avatar"/>
                    </div> */}
            <Input name="whatsapp" label="WhatsApp" id="whatsapp" value={ whatsapp } onChange={(e) => {setWhatsApp(e.target.value)}}/>
                    {/* <div className="input-block">
                        <label htmlFor="whatsapp">WhatsApp</label>
                        <input type="number" name="whatsapp" id="whatsapp"/>
                    </div> */}
            <TextArea name="bio" id="bio" label="Biografia" value={ bio } onChange={(e) => {setBio(e.target.value)}}/>
                    {/* <div className="textarea-block">
                        <label htmlFor="bio">Biografia</label>
                        <textarea name="bio" id="bio"></textarea>
                    </div> */}
            </fieldset>
            <fieldset>
                    <legend>Sobre a aula</legend>
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
                        <select name="subject" id="subject" required>
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
                        </select>                    
                    </div> */}

                    <Input name="cost" label="Custo da sua hora/aula (R$)" id="cost" type="number"
                     value={ cost }
                     onChange={(e) => {setCost(e.target.value)}}
                     />
                    {/* <div className="input-block">
                        <label htmlFor="cost">Custo da sua hora/aula 
                            <small>(R$)</small>
                        </label>
                        <input type="cost" id="cost" name="cost"/>
                    </div> */}
                </fieldset>
                <fieldset id="schedule-items">
                    <legend>
                        Horários disponíveis
                        <button type="button" id="add-time" onClick={addNewScheduleItem}>
                            + Novo horário
                            </button>
                    </legend>
                    {scheduleItems.map((scheduleItem, index) => {
                    return (
                    <div key={scheduleItem.weekday} className="schedule-item">
                    <Select name="weekday" label="Dia da semana" 
                     value={ scheduleItem.weekday }
                     onChange={(e) => {setScheduleItemValue(index, 'weekday', e.target.value)}}
                    options = {[
                    { value: "0", label: 'Domingo' },
                    { value: "1", label: 'Segunda-feira' },
                    { value: "2", label: 'Terça-feira' },
                    { value: "3", label: 'Quarta-feira' },
                    { value: "4", label: 'Quinta-feira' },
                    { value: "5", label: 'Sexta-feira' },
                    { value: "6", label: 'Sábado' },
                    ]}></Select>
                        {/* <div className="select-block">
                            <label className="weekday">Dia da semana</label>
                            <select name="weekday[]">
                                <option value="">Selecione uma opção</option>
                                <option value="0">Domingo</option>
                                <option value="1">Segunda-feira</option>
                                <option value="2">Terça-feira</option>
                                <option value="3">Quarta-feira</option>
                                <option value="4">Quinta-feira</option>
                                <option value="5">Sexta-feira</option>
                                <option value="6">Sábado</option>
                            </select>
                        </div> */}
                        <Input name="time_from[]" label="Das" id="time_from" type="time"
                        value={ scheduleItem.from }
                        onChange={(e) => {setScheduleItemValue(index, 'from', e.target.value)}}/>
                        {/* <div className="input-block">
                            <label htmlFor="time_from">Das</label>
                            <input type="time" name="time_from[]" required/>  
                        </div> */}
                        <Input name="time_to[]" label="Das" id="time_to" type="time"
                        value={ scheduleItem.to }
                        onChange={(e) => {setScheduleItemValue(index, 'to', e.target.value)}}/>
                        {/* <div className="input-block">
                            <label htmlFor="time_to">Até</label>
                            <input type="time" name="time_to[]" required/>  
                        </div> */}
                    </div>
                    );    
                    })}

                </fieldset>
                <footer>
                    <p><img src={warningIcon} alt="Aviso importante" />
                    Importante! <br/> Preencha todos os dados!
                    </p>
                <button type="submit">Salvar cadastro</button>
            </footer>
            </form>
           
        </main>
               
    
    </div>
    )
}

export default TeacherForm;