import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import { UilTimes } from '@iconscout/react-unicons';
import { UilCheckCircle } from '@iconscout/react-unicons'
import ServiceExplainButton from './ServiceExplainButton';

const ServiceModal = ({ title, items }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ServiceExplainButton onClick={() => setOpen(true)} />
      <div className={classNames('services__modal', { 'active-modal': open })}>
        <div className="services__modal-content">
          <h4 className="services__modal-title">{title}</h4>
          <UilTimes className="services__modal-close" onClick={() => setOpen(false)} />
          <ul className="services__modal-services grid">
            {items && items.map((item) => (
              <li key={item} className="services__modal-service">
                <UilCheckCircle className="services__modal-icon" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

ServiceModal.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
};

export default ServiceModal;
