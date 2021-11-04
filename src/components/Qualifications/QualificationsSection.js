import { useState } from 'react';
import { UilBriefcaseAlt } from '@iconscout/react-unicons';
import { UilCalendarAlt } from '@iconscout/react-unicons'
import { UilGraduationCap } from '@iconscout/react-unicons';
import Section from '../Section';
import SectionContent from '../SectionContent';
import SectionTitle from '../SectionTitle';
import SectionSubtitle from '../SectionSubtitle';
import QualificationsTabs from './QualificationsTabs';
import QualificationsTab from './QualificationsTab';
import QualificationsSections from './QualificationsSections';
import QualificationsContent from './QualificationsContent';
import QualificationsLine from './QualificationsLine';
import QualificationsRounder from './QualificationsRounder';
import QualificationContext from '../../context/qualification';

const DEFAULT_TAB = 'education';

const QualificationsSection = () => {
  const [activeTab, setActiveTab] = useState(DEFAULT_TAB);

  return (
    <Section className="qualification">
      <SectionTitle>Calificaci&oacute;n</SectionTitle>
      <SectionSubtitle>Mi recorrido</SectionSubtitle>
      <QualificationContext.Provider value={{ activeTab }}>
        <SectionContent className="qualification__container container">
          <QualificationsTabs>
            <QualificationsTab
              name="Educaci&oacute;n"
              target="education"
              icon={(
                <UilGraduationCap className="qualification__icon" />
              )}
              onClick={(target) => setActiveTab(target)}
            />
            <QualificationsTab
              name="Trabajo"
              target="work"
              icon={(
                <UilBriefcaseAlt className="qualification__icon" />
              )}
              onClick={(target) => setActiveTab(target)}
            />
          </QualificationsTabs>
          <QualificationsSections>
            <QualificationsContent active={activeTab === 'education'}>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">T&eacute;cnico Analista de Sistemas</h3>
                  <span className="qualification_subtitle">Argentina - ISFDT 114</span>
                  <div className="qualification__calendar">
                    <UilCalendarAlt size=".75rem" />{' '}
                    2016 - 2019
                  </div>
                </div>
                <div>
                  <QualificationsRounder />
                  <QualificationsLine />
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <QualificationsRounder />
                  <QualificationsLine />
                </div>
                <div>
                  <h3 className="qualification__title">Desarrollo Mobile</h3>
                  <span className="qualification_subtitle">Argentina - Coderhouse</span>
                  <div className="qualification__calendar">
                    <UilCalendarAlt size=".75rem" />{' '}
                    2019 - 2020
                  </div>
                </div>
              </div>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Ingenier&iacute;a en Sistemas</h3>
                  <span className="qualification_subtitle">Argentina - UAI</span>
                  <div className="qualification__calendar">
                    <UilCalendarAlt size=".75rem" />{' '}
                    2020 - En curso
                  </div>
                </div>
                <div>
                  <QualificationsRounder />
                </div>
              </div>
            </QualificationsContent>
            <QualificationsContent active={activeTab === 'work'}>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Software Analyst</h3>
                  <span className="qualification_subtitle">Millanel - Argentina</span>
                  <div className="qualification__calendar">
                    <UilCalendarAlt size=".75rem" />{' '}
                    2016 - 2019
                  </div>
                </div>
                <div>
                  <QualificationsRounder />
                  <QualificationsLine />
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <QualificationsRounder />
                  <QualificationsLine />
                </div>
                <div>
                  <h3 className="qualification__title">Software Analyst</h3>
                  <span className="qualification_subtitle">MercadoLibre - Argentina</span>
                  <div className="qualification__calendar">
                    <UilCalendarAlt size=".75rem" />{' '}
                    2019 - 2020
                  </div>
                </div>
              </div>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Software Engineer</h3>
                  <span className="qualification_subtitle">MercadoLibre - Argentina</span>
                  <div className="qualification__calendar">
                    <UilCalendarAlt size=".75rem" />{' '}
                    2020 - Actualmente
                  </div>
                </div>
                <div>
                  <QualificationsRounder />
                </div>
              </div>
            </QualificationsContent>
          </QualificationsSections>
        </SectionContent>
      </QualificationContext.Provider>
    </Section>
  );
};

export default QualificationsSection;
