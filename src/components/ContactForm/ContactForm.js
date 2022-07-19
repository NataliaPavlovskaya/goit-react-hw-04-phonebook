import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";



export default function ContactForm({ onAddContacts }) {
const [name, setName] = useState('');
const [number, setNumber] = useState('');


const handleChange =(e) => {
  const {name, value} = e.target;

  switch (name){
    case 'name':
      setName(value);
      break;
    case 'number':
      setNumber(value);
      break;

    default: return;
  } 
  
}

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) {
      alert('Вы не ввели все контактные данные');
      return;
    }

    if (Number.isNaN(+number)) {
      alert('Телефонный номер должен содержать только цифры');
      return;
    }

    onAddContacts(name, number);
    setName('');
    setNumber('');

  
    // this.props.onAddContact({ ...this.state });

    // this.setState({ name: "", number: "" });
  };
    return (
      <form className={styles.TaskEditor} onSubmit={handleSubmit}>
        <label className={styles.TaskEditor_label}>
          Name
          <input
            className={styles.TaskEditor_input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={styles.TaskEditor_label}>
          Number
          <input
            className={styles.TaskEditor_input}
            type="text"
            name="number"
            value={number}
            onChange={handleChange}
          />
        </label>
        <button className={styles.TaskEditor_button} type="submit">
          Add contact
        </button>
      </form>
    );
  }

ContactForm.propTypes = {
  onAddContact: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
};