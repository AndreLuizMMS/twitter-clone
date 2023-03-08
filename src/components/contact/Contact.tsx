import Card from './Card';

import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import cv from '../../assets/cv.svg';
import email from '../../assets/email.svg';

import './contact.scss';

const contacts = [
  {
    url: 'https://www.linkedin.com/in/andr%C3%A9luiz027357/',
    img: linkedin,
    txt: 'Linkedin'
  },
  {
    url: 'https://github.com/AndreLuizMMS?tab=repositories',
    img: github,
    txt: 'Github'
  },
  {
    url: 'https://drive.google.com/file/d/1yttq0JSJ0k-0DUssJNwGbJq6N-YXm9Fw/view',
    img: cv,
    txt: 'Currículo'
  },
  {
    img: email,
    txt: 'andreluiz.morais19@gmail.com'
  }
];

const Contact = () => {
  return (
    <div className="contact">
      {contacts.map(ctt => (
        <div className="card">
          <Card data={ctt} />
        </div>
      ))}
    </div>
  );
};

export default Contact;
