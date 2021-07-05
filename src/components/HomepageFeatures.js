/* eslint-disable react/prop-types */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Visibilidade',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Concentrar as regras do seu negócio em um único lugar, de uma forma de fácil
        compreensão e simples manutenção. Aproximando seu time de negócio e desenvolvimento.
      </>
    ),
  },
  {
    title: 'Rápida Adaptação',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Permite alterar e publicar processos sem nenhum downtime da sua aplicação.
      </>
    ),
  },
  {
    title: 'Rastreamento e histórico',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Mantenha controle dos dados consumidos em cada parte da sua aplicação, mantenha histórico
        para análise de comportamento.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
