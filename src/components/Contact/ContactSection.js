import { useState } from 'react';
import { UilPhone, UilEnvelope, UilMapMarker, UilMessage } from '@iconscout/react-unicons';
import MuiCircularProgress from '@mui/material/CircularProgress';
import MuiSnackbar from '@mui/material/Snackbar';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import SectionSubtitle from '../SectionSubtitle';
import SectionContent from '../SectionContent';
import ContactInformation from './ContactInformation';
import TextField from './TextField';
import { send } from '../../services/contact';

const DEFAULT_FORM = { name: '', email: '', project: '', message: '' };

const ContactSection = () => {
  const [form, setForm] = useState(DEFAULT_FORM);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ message: '', show: false });

  const validate = (data) => {
    if (data.name === '') {
      throw new Error('El campo -Nombre- es requerido');
    }

    if (data.email === '') {
      throw new Error('El campo -Email- es requerido');
    }

    if (data.project === '') {
      throw new Error('El campo -Proyecto- es requerido');
    }

    if (data.message === '') {
      throw new Error('El campo -Mensaje- es requerido');
    }
  };

  return (
    <Section className="contact" id="contact">
      <SectionTitle>Contactame</SectionTitle>
      <SectionSubtitle></SectionSubtitle>
      <SectionContent className="contact__container container grid">
        <div>
          <ContactInformation
            title="Teléfono"
            subtitle="+54 911 6806-5208"
            icon={(
              <UilPhone className="contact__icon" />
            )}
          />
          <ContactInformation
            title="Email"
            subtitle="rodrigomungo@gmail.com"
            icon={(
              <UilEnvelope className="contact__icon" />
            )}
          />
          <ContactInformation
            title="Dirección"
            subtitle="Argentina - Buenos Aires, Rosario 3713"
            icon={(
              <UilMapMarker className="contact__icon" />
            )}
          />
        </div>
        <form action="" className="contact__form grid" autoComplete='off'>
          <div className="contact__inputs grid">
            <TextField
              label="Nombre"
              type="text"
              value={form.name}
              onChange={(value) => setForm({ ...form, name: value })}
            />
            <TextField
              label="Email"
              type="email"
              value={form.email}
              onChange={(value) => setForm({ ...form, email: value })}
            />
          </div>
          <TextField
            label="Proyecto"
            type="text"
            value={form.project}
            onChange={(value) => setForm({ ...form, project: value })}
          />
          <TextField
            label="Mensaje"
            value={form.message}
            onChange={(value) => setForm({ ...form, message: value })}
            multiline
            name=""
            id=""
            cols="0"
            rows="7"
          />
          <div>
            <a
              href="#contact"
              className="button button--flex"
              onClick={async () => {
                setLoading(true);
                try {
                  validate(form);
                  await send(form.name, form.email, form.project, form.message);
                  setForm(DEFAULT_FORM);
                  setSnackbar({ message: 'Mensaje enviado', show: true });
                } catch (e) {
                  if (e.name === 'ClientError') {
                    setSnackbar({ message: e.data ? e.data.message : e.message, show: true });
                  } else {
                    setSnackbar({ message: e.message, show: true });
                  }
                }
                setLoading(false);
              }}
            >
              {loading ? (
                <>
                  Enviando...
                  <MuiCircularProgress color="inherit" size={10} />
                </>
              ) : (
                <>
                  Enviar mensaje
                  <UilMessage className="button__icon" />
                </>
              )}
            </a>
            <MuiSnackbar
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              open={snackbar.show}
              autoHideDuration={5000}
              onClose={() => setSnackbar({ ...snackbar, show: false })}
              message={snackbar.message}
            />
          </div>
        </form>
      </SectionContent>
    </Section>
  );
};

export default ContactSection;
