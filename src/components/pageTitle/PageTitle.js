import s from './PageTitle.module.css';

const PageTitle = ({ title }) => {
  return <h1 className={s.title}>{title}</h1>;
};

export default PageTitle;
