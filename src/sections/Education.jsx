import React from 'react';
import { FaGraduationCap, FaCertificate, FaTasks, FaExternalLinkAlt } from 'react-icons/fa';
import Button from '../components/Button';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="section-header">
        <h2 className="section-title">Educación y Certificaciones</h2>
        <div className="title-underline"></div>
      </div>

      <div className="education-content">
        <div className="education-section animate-fadeInUp">
          <div className="section-icon">
            <FaGraduationCap />
          </div>
          <h3 className="subsection-title">Educación</h3>
          
          <div className="education-card">
            <div className="education-card-header">
              <h4 className="education-degree">📚 Ingeniería Informática — Unilasallista (7º semestre)</h4>
              <span className="education-status">En curso</span>
            </div>
            <p className="education-institution">Corporación Universitaria Unilasallista</p>
            <p className="education-detail">Séptimo semestre</p>
            <p className="education-description">
              Formación integral en desarrollo de software, arquitectura de sistemas, 
              bases de datos y metodologías de desarrollo ágil.
            </p>
          </div>
        </div>

        <div className="education-section animate-fadeInUp delay-200">
          <div className="section-icon">
            <FaCertificate />
          </div>
          <h3 className="subsection-title">Certificaciones</h3>
          
          <div className="certification-card">
            <div className="certification-header">
              <div className="certification-icon">
                <FaTasks />
              </div>
              <div className="certification-info">
                <h4 className="certification-name">📜 Scrum Fundamentals Certified</h4>
                <p className="certification-issuer">SCRUMstudy – VMEdu</p>
                <p className="certification-id">ID: 1126202</p>
              </div>
            </div>
            <p className="certification-description">
              Certificación en fundamentos de la metodología ágil Scrum, incluyendo 
              roles, eventos, artefactos y principios del framework.
            </p>
            <div className="certification-skills">
              <span className="skill-tag">Metodologías Ágiles</span>
              <span className="skill-tag">Scrum</span>
              <span className="skill-tag">Gestión de Proyectos</span>
            </div>
            <div className="certification-verify">
              <Button
                variant="primary"
                size="small"
                icon={<FaExternalLinkAlt />}
                href="https://www.scrumstudy.com/certification/verify?type=SFC&number=1126202"
                target="_blank"
              >
                Verificar Certificación
              </Button>
            </div>
          </div>
        </div>

        <div className="education-section animate-fadeInUp delay-400">
          <div className="section-icon">
            <FaTasks />
          </div>
          <h3 className="subsection-title">Metodologías</h3>
          
          <div className="methodology-card">
            <h4 className="methodology-title">Metodología Ágil Scrum</h4>
            <p className="methodology-description">
              Aplicación de Scrum en todos los proyectos de desarrollo, trabajando con:
            </p>
            <ul className="methodology-list">
              <li>Planificación y estimación de sprints</li>
              <li>Entregas iterativas e incrementales</li>
              <li>Reuniones diarias y retrospectivas</li>
              <li>Mejora continua del proceso</li>
              <li>Adaptación rápida a cambios de requerimientos</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;