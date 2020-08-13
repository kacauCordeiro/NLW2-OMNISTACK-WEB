import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';
import api from '../../services/api';

export interface Teacher {
       name: string;
       bio: string;
       avatar: string; 
       cost: number;
       id: number;
       subject: string;
       whatsapp:  string;   
    
}

interface TeacherItemProps {
    teacher: Teacher;
      
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    function CreateNewConnection(){
        api.post('connections', {
        user_id: teacher.id,
        })
    }
    return(
        <article className="teacher-item">
                    <header>
                    <img src={teacher.avatar}
                        alt={teacher.name}/>
                        <div>
                        <strong>{teacher.name}</strong>
                        <span>{teacher.subject}</span>
                        
                    </div>
                    </header>
    <p>{teacher.bio}</p>
                    <footer>
    <p>Preço/hora<strong>R$ {teacher.cost}</strong>
                    </p>
                    <a href={`https://wa.me/${teacher.whatsapp}`} onClick={CreateNewConnection} target="blanck" >
                        <img src={whatsappIcon} alt="Whatsapp"></img>
                        Entrar em contato 
                    </a></footer>
                    
                </article>
    )
}

export default TeacherItem;


